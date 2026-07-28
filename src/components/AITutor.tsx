import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, X, Send, AlertCircle, Loader2 } from 'lucide-react';
import { ExplainRequest, ExplainResponse } from '../types';

interface AITutorProps {
  isOpen: boolean;
  onClose: () => void;
  request: ExplainRequest | null;
}

// Client-side fallback generator when backend Express server is not present (e.g., GitHub Pages)
function generateClientFallbackExplanation(
  request: ExplainRequest,
  additionalQuery?: string
): ExplainResponse {
  const { type, targetId, contextText, selectedAnswerText, correctAnswerText } = request;

  if (type === 'question') {
    const isCorrect = Boolean(
      selectedAnswerText &&
      correctAnswerText &&
      selectedAnswerText.trim().toLowerCase() === correctAnswerText.trim().toLowerCase()
    );

    let explanationText = '';

    if (additionalQuery) {
      explanationText = `**Follow-up ITIL V4 Guidance:**\n\nRegarding your query: "*${additionalQuery}*"\n\nIn ITIL V4 Foundation, key syllabus topics interact to guide service management:\n\n- **Service Value System (SVS):** Ensures that the organization continually co-creates value with stakeholders through governance and the Service Value Chain.\n- **Utility vs. Warranty:** Remember that **Utility** is fit for purpose (what the service does), while **Warranty** is fit for use (availability, capacity, security, continuity).\n- **Value Co-creation:** Value is never delivered in isolation; it requires active collaboration between providers and consumers.\n\nKeep these core definitions in mind for your exam!`;
    } else {
      if (isCorrect) {
        explanationText = `🎉 **Great job! You selected the correct answer.**\n\n**Correct Choice:** **${correctAnswerText}**\n\n**Official ITIL V4 Analysis:**\nAccording to the official ITIL V4 Foundation syllabus, **${correctAnswerText}** is the definitive answer for "${contextText}".\n\n**Real-World Application:**\nIn IT organizations, applying this concept ensures that services remain aligned with business outcomes, reducing unnecessary risk and delivering measurable value to end users.\n\n**Exam Context:**\nOn the official 40-question ITIL V4 closed-book exam, look for key terms in the question stem that map directly to this concept.`;
      } else if (selectedAnswerText && selectedAnswerText !== 'None') {
        explanationText = `**ITIL V4 Concept Analysis:**\n\n- **Your Selected Answer:** *${selectedAnswerText}*\n- **Official Correct Answer:** **${correctAnswerText}**\n\n**Why "${correctAnswerText}" is Correct:**\nAccording to the official ITIL V4 syllabus guidelines, **${correctAnswerText}** directly addresses "${contextText}".\n\n**Why "${selectedAnswerText}" was a Common Trap:**\n*${selectedAnswerText}* is a key ITIL concept, but it applies to a different aspect of service management (e.g. a different guiding principle or practice). Exam questions frequently test your ability to distinguish between closely related terms.\n\n**Real-World IT Scenario:**\nMisapplying these concepts in enterprise service management can result in misaligned priorities—such as prioritizing technical performance over customer-perceived utility.`;
      } else {
        explanationText = `**ITIL V4 Guidance Breakdown:**\n\n**Correct Concept:** **${correctAnswerText}**\n\n**Official Syllabus Analysis:**\nFor the question: "*${contextText}*", the official ITIL V4 framework defines **${correctAnswerText}** as the core answer.\n\n**Key Exam Takeaways:**\n1. **Value Co-creation:** Value is created jointly by service providers and consumers.\n2. **The 4 Dimensions:** Organizations & People, Information & Technology, Partners & Suppliers, Value Streams & Processes.\n3. **7 Guiding Principles:** Universally applicable recommendations that guide an organization in all circumstances.`;
      }
    }

    return {
      explanation: explanationText,
      keyTakeaway: `Core ITIL V4 Takeaway: ${correctAnswerText || contextText}.`,
      mnemonics: `Exam Memory Tip: Always link "${correctAnswerText}" with its primary syllabus objective.`,
    };
  } else {
    // Flashcard type
    let explanationText = '';
    if (additionalQuery) {
      explanationText = `**Follow-up Concept Explanation:**\n\nRegarding "*${additionalQuery}*":\n\nWhen studying **${targetId}** (${contextText}):\n\n- **Core Definition:** ${correctAnswerText}\n- **SVS Role:** Serves as a vital component in transforming demand into value across the Service Value Chain.\n\nFocus on how this practice or term integrates into daily service operations.`;
    } else {
      explanationText = `**Deep Dive Study Guide: ${targetId}**\n\n**Syllabus Category:** ${contextText}\n\n**Official ITIL V4 Definition:**\n> "${correctAnswerText}"\n\n**Real-World Business Example:**\nIn enterprise IT environments, **${targetId}** provides structured processes to maintain service availability, handle customer demand, or manage technological changes safely.\n\n**Integration in the ITIL V4 SVS:**\nThis concept operates within the Service Value System, supporting continual improvement and aligning with the 4 Dimensions of Service Management.\n\n**Common Exam Traps:**\nBe careful not to confuse **${targetId}** with adjacent practices. Focus on its specific purpose as defined in the official syllabus.`;
    }

    return {
      explanation: explanationText,
      keyTakeaway: `${targetId}: ${correctAnswerText}`,
      mnemonics: `Study Tip: Associate "${targetId}" directly with "${contextText}".`,
    };
  }
}

export default function AITutor({ isOpen, onClose, request }: AITutorProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [explanation, setExplanation] = useState<ExplainResponse | null>(null);
  const [followUp, setFollowUp] = useState('');
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'assistant'; text: string }[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && request) {
      fetchExplanation();
    } else if (!isOpen) {
      // Clear states on close
      setExplanation(null);
      setError(null);
      setFollowUp('');
      setChatHistory([]);
    }
  }, [isOpen, request]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatHistory, loading]);

  const fetchExplanation = async (additionalQuery?: string) => {
    if (!request) return;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...request,
          additionalQuery,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data: ExplainResponse = await response.json();
      
      if (additionalQuery) {
        setChatHistory((prev) => [
          ...prev,
          { role: 'user', text: additionalQuery },
          { role: 'assistant', text: data.explanation },
        ]);
        setFollowUp('');
      } else {
        setExplanation(data);
      }
    } catch (err: any) {
      console.warn('Backend server /api/explain unavailable or returned error. Using client-side ITIL Tutor:', err);
      // Fallback to client-side tutor generator (e.g. GitHub Pages static hosting)
      const fallbackData = generateClientFallbackExplanation(request, additionalQuery);

      if (additionalQuery) {
        setChatHistory((prev) => [
          ...prev,
          { role: 'user', text: additionalQuery },
          { role: 'assistant', text: fallbackData.explanation },
        ]);
        setFollowUp('');
      } else {
        setExplanation(fallbackData);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSendFollowUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!followUp.trim() || loading) return;
    fetchExplanation(followUp.trim());
  };

  // Helper to parse simple markdown (**bold**, * bullet, newlines) safely
  const formatText = (text: string) => {
    if (!text) return null;
    return text.split('\n').map((paragraph, idx) => {
      let trimmed = paragraph.trim();
      if (!trimmed) return <div key={idx} className="h-2" />;

      // Handle bullet points
      if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
        const content = trimmed.substring(2);
        return (
          <li key={idx} className="ml-4 list-disc text-slate-300 leading-relaxed mb-1.5 font-light text-sm" id={`ai-bullet-${idx}`}>
            {parseBold(content)}
          </li>
        );
      }

      // Handle headers (### or ##)
      if (trimmed.startsWith('### ')) {
        return (
          <h4 key={idx} className="text-sm font-bold text-white mt-4 mb-2 uppercase tracking-wider" id={`ai-h4-${idx}`}>
            {parseBold(trimmed.substring(4))}
          </h4>
        );
      }
      if (trimmed.startsWith('## ') || trimmed.startsWith('# ')) {
        const textVal = trimmed.replace(/^#+\s+/, '');
        return (
          <h3 key={idx} className="text-sm font-black text-indigo-400 mt-4 mb-2 border-b border-white/5 pb-1 uppercase tracking-widest" id={`ai-h3-${idx}`}>
            {parseBold(textVal)}
          </h3>
        );
      }

      return (
        <p key={idx} className="text-slate-300 leading-relaxed mb-3 text-sm font-light" id={`ai-p-${idx}`}>
          {parseBold(trimmed)}
        </p>
      );
    });
  };

  const parseBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-semibold text-white">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-full md:w-[480px] bg-slate-900 border-l border-white/10 shadow-2xl z-50 flex flex-col animate-in slide-in-from-right duration-250" id="ai-tutor-drawer">
      {/* Header */}
      <div className="p-4 border-b border-white/10 bg-slate-950 flex items-center justify-between" id="ai-tutor-header">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-indigo-600 text-white rounded-lg shadow-[0_0_10px_rgba(99,102,241,0.4)]">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider">ITIL V4 AI Tutor</h3>
            <p className="text-[10px] text-indigo-300 font-bold uppercase tracking-wider">Personalized study explanations</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="p-1.5 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-colors"
          aria-label="Close tutor panel"
          id="ai-tutor-close"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Main content scroll area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-5" id="ai-tutor-scroll">
        {request && (
          <div className="bg-slate-950/60 border border-white/5 rounded-xl p-3.5 relative overflow-hidden" id="ai-tutor-context">
            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
            <span className="inline-block text-[9px] font-bold bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/20 mb-2 uppercase tracking-widest">
              {request.type === 'question' ? 'Exam Question Context' : 'Flashcard Term'}
            </span>
            <p className="text-xs text-slate-300 font-medium line-clamp-3 leading-relaxed">
              {request.type === 'question' ? request.contextText : `${request.targetId} - ${request.correctAnswerText}`}
            </p>
          </div>
        )}

        {/* Initial Response loading or completed */}
        {loading && !explanation && (
          <div className="flex flex-col items-center justify-center py-12 space-y-3" id="ai-tutor-initial-loading">
            <Loader2 className="h-8 w-8 text-indigo-400 animate-spin" />
            <p className="text-xs text-slate-400 font-semibold">Consulting ITIL V4 Syllabus guidelines...</p>
          </div>
        )}

        {error && (
          <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 p-4 rounded-xl flex gap-3 text-sm" id="ai-tutor-error">
            <AlertCircle className="h-5 w-5 shrink-0 text-rose-400 mt-0.5" />
            <div>
              <p className="font-bold text-white uppercase tracking-wider text-xs">Unable to Load Explanation</p>
              <p className="text-xs mt-1 text-rose-200">{error}</p>
              <button 
                onClick={() => fetchExplanation()} 
                className="mt-3 text-xs font-bold text-indigo-300 hover:text-indigo-200 hover:underline cursor-pointer"
              >
                Retry Request
              </button>
            </div>
          </div>
        )}

        {explanation && (
          <div className="space-y-5 fade-in animate-in fade-in" id="ai-tutor-response">
            {/* Core Explanation */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Detailed Analysis</h4>
              <div className="space-y-1">{formatText(explanation.explanation)}</div>
            </div>

            {/* Key Takeaway */}
            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-4 relative overflow-hidden" id="ai-tutor-takeaway">
              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-400"></div>
              <h5 className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest mb-1.5">💡 Key Syllabus Takeaway</h5>
              <p className="text-sm text-slate-200 leading-relaxed font-light">{explanation.keyTakeaway}</p>
            </div>

            {/* Mnemonic / Exam Tip */}
            {explanation.mnemonics && (
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 relative overflow-hidden" id="ai-tutor-mnemonic">
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-400"></div>
                <h5 className="text-[10px] font-bold text-amber-300 uppercase tracking-widest mb-1.5">🎯 Closed-Book Exam Tip</h5>
                <p className="text-sm text-amber-200 leading-relaxed italic font-light">{explanation.mnemonics}</p>
              </div>
            )}

            {/* Chat History for Follow-ups */}
            {chatHistory.length > 0 && (
              <div className="border-t border-white/5 pt-5 space-y-4" id="ai-tutor-chat-history">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Follow-up Discussion</h4>
                {chatHistory.map((msg, idx) => (
                  <div 
                    key={idx} 
                    className={`p-3.5 rounded-xl text-sm ${
                      msg.role === 'user' 
                        ? 'bg-indigo-600 text-white ml-8 font-semibold' 
                        : 'bg-slate-950/60 text-slate-200 mr-8 border border-white/5'
                    }`}
                  >
                    {msg.role === 'user' ? (
                      <p>{msg.text}</p>
                    ) : (
                      <div className="space-y-1">{formatText(msg.text)}</div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {loading && chatHistory.length > 0 && (
              <div className="flex items-center gap-2 text-xs text-slate-400 py-2 ml-2" id="ai-tutor-chat-loading">
                <Loader2 className="h-4 w-4 text-indigo-400 animate-spin" />
                <span>Formulating response...</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer input form for follow-up questions */}
      {explanation && (
        <form onSubmit={handleSendFollowUp} className="p-3 border-t border-white/10 bg-slate-950" id="ai-tutor-form">
          <div className="flex gap-2 items-center bg-slate-900 border border-white/5 rounded-xl px-3 py-1.5 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 transition-all">
            <input
              type="text"
              value={followUp}
              onChange={(e) => setFollowUp(e.target.value)}
              placeholder="Ask a follow-up question..."
              disabled={loading}
              className="flex-1 bg-transparent text-sm text-slate-200 placeholder-slate-500 focus:outline-none"
              id="ai-tutor-input-field"
            />
            <button
              type="submit"
              disabled={!followUp.trim() || loading}
              className="p-1.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-800 text-white disabled:text-slate-500 rounded-lg transition-colors cursor-pointer shadow-[0_0_10px_rgba(99,102,241,0.4)]"
              id="ai-tutor-send-btn"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
