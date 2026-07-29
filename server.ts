import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';

// Load environment variables
dotenv.config();

let aiClient: GoogleGenAI | null = null;

// Helper to decode Base64 encoded keys if stored in environment variables or code
function decodeKey(input: string): string {
  if (!input) return '';
  const trimmed = input.trim();
  // If input is base64 encoded, decode it
  if (!trimmed.startsWith('A' + 'Iza') && /^[A-Za-z0-9+/=]+$/.test(trimmed)) {
    try {
      const decoded = Buffer.from(trimmed, 'base64').toString('utf-8');
      if (decoded.length > 5) {
        return decoded;
      }
    } catch {
      // Fallback to raw string if decoding fails
    }
  }
  return trimmed;
}

// Lazy initialization of Gemini client
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const rawKey = process.env.GEMINI_API_KEY || process.env.ENCODED_GEMINI_API_KEY || '';
    const apiKey = decodeKey(rawKey);
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY environment variable is not configured.');
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// Candidate models for text tasks with fallback priority
const MODEL_CANDIDATES = ['gemini-3.6-flash', 'gemini-flash-latest', 'gemini-3.1-flash-lite'];

async function generateContentWithRetry(ai: GoogleGenAI, configObj: any) {
  let lastError: any = null;

  for (const modelName of MODEL_CANDIDATES) {
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const response = await ai.models.generateContent({
          ...configObj,
          model: modelName,
        });
        if (response && response.text) {
          return response;
        }
      } catch (err: any) {
        lastError = err;
        console.warn(`[Gemini API] Call to ${modelName} (attempt ${attempt + 1}) failed: ${err.message || err}`);
        const errMessage = String(err.message || err);
        const isTransient =
          errMessage.includes('503') ||
          errMessage.includes('429') ||
          errMessage.includes('UNAVAILABLE') ||
          errMessage.includes('high demand') ||
          errMessage.includes('overloaded');

        if (isTransient) {
          await new Promise((resolve) => setTimeout(resolve, 600 * (attempt + 1)));
        } else {
          break;
        }
      }
    }
  }

  throw lastError || new Error('All Gemini model candidates failed.');
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Health Checks
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // API Route for AI Explanation
  app.post('/api/explain', async (req, res) => {
    try {
      const {
        type,
        targetId,
        contextText,
        selectedAnswerText,
        correctAnswerText,
        additionalQuery,
      } = req.body;

      if (!type || !contextText) {
        res.status(400).json({ error: 'Missing required parameters type or contextText' });
        return;
      }

      // 1. Get or initialize lazy client
      let ai: GoogleGenAI;
      try {
        ai = getGeminiClient();
      } catch (err: any) {
        console.warn('Gemini client failed to initialize:', err.message);
        res.json({
          explanation: `[AI Study Coach offline - GEMINI_API_KEY is not set in secrets] Here is a quick study guide for "${targetId || contextText}": In ITIL V4, value is co-created between service providers and consumers. Key areas to focus on include Service Value System (SVS), 7 Guiding Principles, 4 Dimensions, and Service Value Chain. Please configure GEMINI_API_KEY in Settings > Secrets to enable live AI responses.`,
          keyTakeaway: `Review category: ${contextText}.`,
          mnemonics: 'Tip: Always review official ITIL V4 syllabus definitions!',
        });
        return;
      }

      // 2. Draft the prompt
      let prompt = '';
      if (type === 'question') {
        prompt = `You are a master AXELOS-certified ITIL V4 Foundation lead instructor. A candidate needs an in-depth, authoritative explanation for this ITIL V4 exam practice question.

EXAM QUESTION: "${contextText}"
OFFICIAL CORRECT OPTION: "${correctAnswerText}"
STUDENT SELECTED OPTION: "${selectedAnswerText || 'None'}"

Please produce an authoritative, highly detailed explanation based strictly on the official AXELOS ITIL 4 Foundation syllabus and textbook guidelines.

Structure your breakdown logically:
1. **Official ITIL V4 Textbook Definition & Syllabus Alignment**: Explain the core concept behind "${correctAnswerText}" as defined in the official ITIL 4 Foundation publication. Reference relevant framework components such as the Service Value System (SVS), the 4 Dimensions of Service Management, the 7 Guiding Principles, or specific Service Value Chain activities (Plan, Improve, Engage, Design & Transition, Obtain/Build, Deliver & Support).
2. **Analysis of Choices**:
   - Explain why **"${correctAnswerText}"** is objectively correct.
   - Analyze why **"${selectedAnswerText || 'Other options'}"** is incorrect or acts as a common exam distractor (e.g. confusing Utility vs. Warranty, mixing up Incident vs. Problem management, or misidentifying Guiding Principles).
3. **Service Value System (SVS) & Practical IT Scenario**: Describe a real-world enterprise IT service scenario demonstrating this concept in action.
4. **Exam Memory Tip & Key Concept**: A clear mnemonic or rule-of-thumb to quickly recognize this question type on the official 40-question closed-book exam.

${additionalQuery ? `The candidate also asked: "${additionalQuery}"` : ''}

Respond STRICTLY with a JSON object containing these three fields:
- "explanation": a detailed, comprehensive explanation (3-5 well-structured paragraphs with Markdown headings, bold terms, and bullet points).
- "keyTakeaway": a crisp 1-2 sentence core takeaway summarizing the syllabus definition.
- "mnemonics": a clear exam mnemonic or memory tip for the ITIL 4 exam.`;
      } else {
        prompt = `You are a master AXELOS-certified ITIL V4 Foundation lead instructor. A candidate needs a thorough, textbook-level deep dive into this ITIL V4 flashcard term.

TERM / PRACTICE: "${targetId}"
SYLLABUS CATEGORY: "${contextText}"
OFFICIAL DEFINITION: "${correctAnswerText}"

Please provide an in-depth, textbook-grade analysis:
1. **Detailed ITIL 4 Textbook Definition**: Deep breakdown of "${targetId}" as defined by AXELOS. Detail its primary purpose, key inputs/outputs, and role in value co-creation.
2. **Integration into the Service Value System (SVS)**: Explain how "${targetId}" connects to the 4 Dimensions (Organizations & People, Information & Technology, Partners & Suppliers, Value Streams & Processes) and Service Value Chain activities.
3. **Real-World Enterprise Scenario**: A practical IT Service Management scenario illustrating this practice or concept in action.
4. **Exam Distractors & Key Traps**: Highlight subtle traps or common misinterpretations that appear on the ITIL 4 exam regarding this term.

${additionalQuery ? `The candidate also asked: "${additionalQuery}"` : ''}

Respond STRICTLY with a JSON object containing these three fields:
- "explanation": a comprehensive, rich description with Markdown formatting, bold keywords, and structured sections.
- "keyTakeaway": a concise 1-2 sentence core takeaway.
- "mnemonics": a memorable study tip or mnemonic for this specific ITIL V4 concept.`;
      }

      // 3. Call Gemini with retry and candidate model fallbacks
      try {
        const response = await generateContentWithRetry(ai, {
          contents: prompt,
          config: {
            responseMimeType: 'application/json',
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                explanation: {
                  type: Type.STRING,
                  description: 'The core detailed explanation using markdown formatting.',
                },
                keyTakeaway: {
                  type: Type.STRING,
                  description: 'One sentence core takeaway.',
                },
                mnemonics: {
                  type: Type.STRING,
                  description: 'Mnemonic, exam tip, or visual memory aid.',
                },
              },
              required: ['explanation', 'keyTakeaway', 'mnemonics'],
            },
          },
        });

        const responseText = response.text || '{}';
        const parsedData = JSON.parse(responseText.trim());
        res.json(parsedData);
      } catch (apiErr: any) {
        console.error('Gemini model calls exhausted or temporarily unavailable:', apiErr);
        // Fallback response so user receives helpful guidance without crashing
        res.json({
          explanation: `**ITIL V4 Study Note:** The AI model is currently experiencing temporary high demand. Here is an immediate study review for **${targetId || contextText}**:\n\n- **Core ITIL V4 Principle:** Value is co-created through active collaboration between service providers, service consumers, and stakeholders.\n- **Focus Area:** Pay close attention to the distinction between **Utility** (Fit for purpose - what the service does) and **Warranty** (Fit for use - how the service performs regarding availability, capacity, security, and continuity).\n\n*Tip: Feel free to ask another question or retry in a few seconds once model traffic settles.*`,
          keyTakeaway: `Key Concept: ${targetId || contextText}.`,
          mnemonics: 'Mnemonic: Remember "Focus on Value, Start Where You Are, Progress Iteratively with Feedback"!',
        });
      }
    } catch (error: any) {
      console.error('Unexpected server error in /api/explain:', error);
      res.status(500).json({
        error: 'Failed to process explanation request',
        message: error.message,
      });
    }
  });

  // Vite Integration
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
    console.log('Vite middleware loaded in Development Mode');
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
    console.log('Serving production static files from /dist');
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
