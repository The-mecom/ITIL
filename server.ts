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
        prompt = `You are an expert ITIL V4 Foundation exam coach. A student needs guidance on this exam practice question.

Question: "${contextText}"
Correct Option: "${correctAnswerText}"
Student's Selected Option: "${selectedAnswerText || 'None'}"

Please explain:
1. Why the correct option is the right answer according to the ITIL V4 official syllabus.
2. If the student selected a different option, analyze why their option is incorrect or a common trap. If they got it right, congratulate and reinforce why they are correct.
3. Provide a practical real-world IT scenario illustrating this concept.
4. Provide a memorable mnemonic or visual tip to remember this for the actual closed-book exam.

${additionalQuery ? `The student also asked: "${additionalQuery}"` : ''}

Respond STRICTLY with a JSON object containing these three fields:
- "explanation": a comprehensive, encouraging explanation (approx 3-4 paragraphs) breaking down the concept. Use markdown formatting inside the text (like **bold** for key ITIL terms).
- "keyTakeaway": a one-sentence summary of the core concept.
- "mnemonics": a fun, helpful mnemonic or exam tip to lock in the knowledge.`;
      } else {
        prompt = `You are an expert ITIL V4 Foundation exam coach. A student wants a deeper, real-world understanding of this key ITIL V4 flashcard.

Term: "${targetId}"
Syllabus Category: "${contextText}"
Official Definition: "${correctAnswerText}"

Please provide:
1. A detailed real-world business example showing this term/concept in action.
2. How this term integrates into the broader ITIL V4 Service Value System (SVS) or the Four Dimensions of Service Management.
3. Common exam traps or questions associated with this specific term.

${additionalQuery ? `The student also asked: "${additionalQuery}"` : ''}

Respond STRICTLY with a JSON object containing these three fields:
- "explanation": a comprehensive, rich description with real-world examples. Use markdown formatting inside the text (like **bold**).
- "keyTakeaway": a one-sentence summary of when and how this is applied.
- "mnemonics": a highly memorable study tip or mnemonic for this specific term.`;
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
