import React, { useState } from 'react';
import { 
  BarChart3, Sparkles, CheckCircle, AlertCircle, ArrowRight, 
  Brain, Compass, Target, Loader2, CheckSquare, ListTodo, Flame, HelpCircle
} from 'lucide-react';
import { ExamAttempt } from '../types';
import { motion } from 'motion/react';

interface ExamAnalysisProps {
  attempt: ExamAttempt;
  onNavigateToMode: (mode: 'exam' | 'practice' | 'flashcard' | 'tracker') => void;
}

interface AIAnalysisResponse {
  summary: string;
  focusAreas: Array<{
    category: string;
    scoreText: string;
    priority: 'High' | 'Medium' | 'Low';
    gapAnalysis: string;
    actionableTips: string[];
  }>;
  studyStrategy: string;
}

export default function ExamAnalysis({ attempt, onNavigateToMode }: ExamAnalysisProps) {
  const [loadingAI, setLoadingAI] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState<AIAnalysisResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Local checklists state to make the suggestions interactive!
  const [checklist, setChecklist] = useState<Record<string, boolean>>({});

  const toggleChecklist = (id: string) => {
    setChecklist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // 1. Instant rule-based analysis
  const categoriesInfo: Record<string, { weight: number; description: string; coreConcepts: string[] }> = {
    'Key Concepts of Service Management': {
      weight: 7,
      description: 'Defines the basics of service relationships, value co-creation, utility, and warranty.',
      coreConcepts: ['Value Co-creation', 'Organizations, Providers, Customers', 'Services and Products', 'Utility (Fit for Purpose) and Warranty (Fit for Use)']
    },
    'The 7 Guiding Principles': {
      weight: 8,
      description: 'Recommendations that guide an organization in all circumstances, regardless of changes in goals.',
      coreConcepts: ['Focus on Value', 'Start Where You Are', 'Progress Iteratively with Feedback', 'Collaborate and Promote Visibility', 'Think and Work Holistically', 'Keep It Simple and Practical', 'Optimize and Automate']
    },
    'The Four Dimensions of Service Management': {
      weight: 6,
      description: 'The four perspectives critical to the effective and efficient facilitation of value in the form of products and services.',
      coreConcepts: ['Organizations and People', 'Information and Technology', 'Partners and Suppliers', 'Value Streams and Processes', 'PESTLE external factors']
    },
    'The Service Value System & Service Value Chain': {
      weight: 7,
      description: 'The Service Value System (SVS) represents how components work together to co-create value. The Service Value Chain (SVC) is the central operating model.',
      coreConcepts: ['SVS Components (Principles, Governance, SVC, Practices, Continual Improvement)', 'SVS Inputs & Outputs (Opportunity/Demand -> Value)', 'SVC Activities (Plan, Improve, Engage, Design & Transition, Obtain/Build, Deliver & Support)']
    },
    'Key ITIL Practices': {
      weight: 12,
      description: 'The largest section of the exam. Focuses on the core practices that enable services to run smoothly.',
      coreConcepts: ['Continual Improvement (with Model)', 'Change Enablement (Change authority)', 'Incident Management', 'Problem Management (Workarounds vs Known Errors)', 'Service Desk (SPOC)', 'Service Level Management (SLA, SLAs)', 'Service Request Management']
    }
  };

  // Calculate local results
  const analysisResults = Object.entries(attempt.categoryScores).map(([category, scores]) => {
    const percent = Math.round((scores.correct / scores.total) * 100);
    const info = categoriesInfo[category] || { weight: 5, description: '', coreConcepts: [] };
    
    // Determine priority based on score and question weight
    let priority: 'High' | 'Medium' | 'Low' = 'Low';
    if (percent < 65) {
      priority = info.weight >= 8 ? 'High' : 'Medium';
    } else if (percent < 80) {
      priority = info.weight >= 12 ? 'High' : 'Medium';
    }

    return {
      category,
      correct: scores.correct,
      total: scores.total,
      percent,
      priority,
      info
    };
  }).sort((a, b) => {
    // Sort so High priority / lower scores show first
    if (a.priority === 'High' && b.priority !== 'High') return -1;
    if (b.priority === 'High' && a.priority !== 'High') return 1;
    return a.percent - b.percent;
  });

  const weakestArea = analysisResults[0];
  const strongestArea = [...analysisResults].sort((a, b) => b.percent - a.percent)[0];

  // Request AI Advisor Breakdown from Gemini
  const handleFetchAIAnalysis = async () => {
    setLoadingAI(true);
    setError(null);
    try {
      const response = await fetch('/api/explain', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'question',
          targetId: 'Exam-Advisory-Report',
          contextText: `Exam Score: ${attempt.score}/40 (${Math.round((attempt.score/40)*100)}%). Breakdown: ${JSON.stringify(attempt.categoryScores)}`,
          correctAnswerText: 'ITIL V4 Foundation Syllabus Guidelines',
          selectedAnswerText: `Duration: ${Math.round(attempt.duration / 60)} minutes`,
          additionalQuery: 'Generate a personalized study report reviewing the score, highlighting weaker areas, and suggesting precise focus recommendations to improve. Format your response strictly in the JSON schema requested.',
        }),
      });

      if (!response.ok) {
        let errMsg = 'Server returned an error status while requesting AI analysis.';
        try {
          const errData = await response.json();
          if (errData?.message) errMsg = errData.message;
          else if (errData?.error) errMsg = errData.error;
        } catch (_) {}
        throw new Error(errMsg);
      }

      const rawData = await response.json();
      
      // If we got the normal explanation endpoint response, let's adapt it or if we got a rich structure, show it.
      // Since we used /api/explain, let's look at the shape. It returns { explanation, keyTakeaway, mnemonics }.
      // We can map this explanation into our beautiful advisor view.
      if (rawData.explanation) {
        // Parse the explanation or map it
        setAiAnalysis({
          summary: rawData.explanation,
          focusAreas: analysisResults.filter(r => r.percent < 80).map(r => ({
            category: r.category,
            scoreText: `${r.correct}/${r.total} (${r.percent}%)`,
            priority: r.priority,
            gapAnalysis: `The AI Coach recommends deep diving into this area. Core concepts of interest: ${r.info.coreConcepts.join(', ')}.`,
            actionableTips: [
              `Review the specific flashcards under "${r.category}" in the study center.`,
              `Practice more questions for this topic using the Topic Practice mode to get immediate feedback.`,
              `Ask the AI tutor about confusing terms like: ${r.info.coreConcepts[0]}.`
            ]
          })),
          studyStrategy: `${rawData.keyTakeaway || ''} \n\n**Mnemonic Guide:** ${rawData.mnemonics || ''}`
        });
      } else {
        throw new Error('Invalid response structure received.');
      }
    } catch (err: any) {
      console.error('AI Exam Analysis Error:', err);
      setError('AI Advisor is currently offline. Please configure your GEMINI_API_KEY in the Secrets panel, or rely on our built-in high-fidelity analytics below.');
    } finally {
      setLoadingAI(false);
    }
  };

  return (
    <div className="bg-slate-900/40 border border-white/10 rounded-2xl p-6 md:p-8 space-y-8 mt-6 relative overflow-hidden" id="exam-score-advisor-widget">
      {/* Abstract top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500/30 to-indigo-500/0"></div>
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
        <div className="flex items-start gap-3">
          <div className="p-2.5 bg-indigo-500/10 rounded-xl text-indigo-400 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-black text-white tracking-tight uppercase">Performance Review & Focus Advisor</h3>
            <p className="text-xs text-slate-400">Algorithmic analysis of your exam. Let\'s co-create a targeted study plan.</p>
          </div>
        </div>
        
        {/* Call AI Coach Action */}
        {!aiAnalysis && (
          <button
            onClick={handleFetchAIAnalysis}
            disabled={loadingAI}
            className="flex items-center gap-2 text-xs font-bold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-5 py-3 rounded-xl cursor-pointer shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all disabled:opacity-70 disabled:pointer-events-none self-start md:self-center"
            id="fetch-ai-exam-analysis-btn"
          >
            {loadingAI ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Coaching Analysis Loading...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-white" />
                <span>Generate AI Coach Study Plan</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* AI Advice Display (if generated) */}
      {aiAnalysis && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-indigo-950/20 border border-indigo-500/20 rounded-2xl p-5 md:p-6 space-y-5"
          id="ai-study-plan-results"
        >
          <div className="flex items-center gap-2 text-indigo-300 border-b border-indigo-500/10 pb-3">
            <Sparkles className="h-4 w-4" />
            <h4 className="text-xs font-black uppercase tracking-widest">AI Study Coach Customized Feedback</h4>
          </div>

          <div className="text-sm text-slate-200 font-light leading-relaxed whitespace-pre-line" id="ai-custom-summary">
            {aiAnalysis.summary}
          </div>

          <div className="bg-slate-950/40 border border-white/5 rounded-xl p-4 space-y-2.5" id="ai-study-strategy">
            <h5 className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-1.5">
              <Compass className="h-3.5 w-3.5" />
              Strategic Mnemonic & Tips
            </h5>
            <div className="text-xs text-slate-300 font-light leading-relaxed whitespace-pre-line">
              {aiAnalysis.studyStrategy}
            </div>
          </div>
        </motion.div>
      )}

      {/* Error State for AI */}
      {error && (
        <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl flex gap-2.5 text-xs text-amber-300" id="ai-analysis-error">
          <AlertCircle className="w-4.5 h-4.5 text-amber-400 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      {/* Strategic Focus Areas */}
      <div className="space-y-4" id="focus-recommendations-list">
        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">Syllabus-Based Focus Analysis</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="analysis-bento-grid">
          
          {/* Weakest VS Strongest Card */}
          <div className="bg-slate-950/40 border border-white/5 rounded-xl p-5 space-y-4 flex flex-col justify-between" id="strength-weakness-comparison">
            <div className="space-y-3">
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">Comparative Standings</span>
              
              {/* Weakest */}
              <div className="flex gap-3 items-start">
                <div className="p-1.5 bg-rose-500/10 text-rose-400 rounded-lg border border-rose-500/20 shrink-0 mt-0.5">
                  <AlertCircle className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-300">Primary Opportunity:</h5>
                  <p className="text-[11px] font-semibold text-rose-400 leading-tight truncate max-w-[200px] sm:max-w-xs">{weakestArea.category}</p>
                  <p className="text-[10px] text-slate-400 leading-normal pt-1">{weakestArea.info.description}</p>
                </div>
              </div>

              {/* Strongest */}
              <div className="flex gap-3 items-start pt-2 border-t border-white/5">
                <div className="p-1.5 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20 shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-300">Strongest Element:</h5>
                  <p className="text-[11px] font-semibold text-emerald-400 leading-tight truncate max-w-[200px] sm:max-w-xs">{strongestArea.category}</p>
                  <p className="text-[10px] text-slate-400 leading-normal pt-1">You showed high aptitude here with a {strongestArea.percent}% response accuracy.</p>
                </div>
              </div>
            </div>

            <div className="text-[10px] text-slate-500 pt-3 border-t border-white/5 flex justify-between items-center">
              <span>Syllabus compliance:</span>
              <span className="text-white font-mono font-bold">ITIL V4 AXELOS® Standard</span>
            </div>
          </div>

          {/* Core Interactive Action items */}
          <div className="bg-slate-950/40 border border-white/5 rounded-xl p-5 space-y-3 flex flex-col justify-between" id="interactive-checklist">
            <div>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mb-2">Personalized Study Checklist</span>
              <p className="text-xs text-slate-400 font-light mb-3">Complete these high-priority study tasks to solidify your weak areas:</p>
              
              <div className="space-y-2.5" id="checklist-tasks">
                <div 
                  onClick={() => toggleChecklist('review_wrong')}
                  className="flex items-start gap-2.5 cursor-pointer text-xs group"
                >
                  <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition-all ${
                    checklist['review_wrong'] ? 'bg-indigo-600 border-indigo-500 text-white' : 'border-white/20 group-hover:border-indigo-400'
                  }`}>
                    {checklist['review_wrong'] && <CheckSquare className="w-3.5 h-3.5" />}
                  </div>
                  <span className={`leading-tight ${checklist['review_wrong'] ? 'line-through text-slate-500' : 'text-slate-300 group-hover:text-white'}`}>
                    Review the incorrect questions in <strong className="font-semibold text-slate-200">{weakestArea.category}</strong> using the review portal below.
                  </span>
                </div>

                <div 
                  onClick={() => toggleChecklist('topic_practice')}
                  className="flex items-start gap-2.5 cursor-pointer text-xs group"
                >
                  <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition-all ${
                    checklist['topic_practice'] ? 'bg-indigo-600 border-indigo-500 text-white' : 'border-white/20 group-hover:border-indigo-400'
                  }`}>
                    {checklist['topic_practice'] && <CheckSquare className="w-3.5 h-3.5" />}
                  </div>
                  <span className={`leading-tight ${checklist['topic_practice'] ? 'line-through text-slate-500' : 'text-slate-300 group-hover:text-white'}`}>
                    Practice 5 scenario questions using <strong className="font-semibold text-slate-200">Topic Practice</strong> mode.
                  </span>
                </div>

                <div 
                  onClick={() => toggleChecklist('flashcard_drill')}
                  className="flex items-start gap-2.5 cursor-pointer text-xs group"
                >
                  <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition-all ${
                    checklist['flashcard_drill'] ? 'bg-indigo-600 border-indigo-500 text-white' : 'border-white/20 group-hover:border-indigo-400'
                  }`}>
                    {checklist['flashcard_drill'] && <CheckSquare className="w-3.5 h-3.5" />}
                  </div>
                  <span className={`leading-tight ${checklist['flashcard_drill'] ? 'line-through text-slate-500' : 'text-slate-300 group-hover:text-white'}`}>
                    Master 5 flashcard definitions from <strong className="font-semibold text-slate-200">{weakestArea.category}</strong>.
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2.5 pt-3 border-t border-white/5" id="checklist-navigation">
              <button 
                onClick={() => onNavigateToMode('practice')}
                className="flex-1 text-center py-2 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/15 hover:border-indigo-500/30 rounded-lg text-[10px] font-bold uppercase tracking-wider cursor-pointer transition-colors"
              >
                Go to Practice
              </button>
              <button 
                onClick={() => onNavigateToMode('flashcard')}
                className="flex-1 text-center py-2 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/15 hover:border-indigo-500/30 rounded-lg text-[10px] font-bold uppercase tracking-wider cursor-pointer transition-colors"
              >
                Go to Flashcards
              </button>
            </div>
          </div>

        </div>

        {/* Detailed recommendations list */}
        <div className="space-y-3" id="detailed-focus-recs">
          {analysisResults.map((area) => {
            const isHighPriority = area.priority === 'High';
            const isPassed = area.percent >= 65;

            return (
              <div 
                key={area.category}
                className={`bg-slate-950/30 border rounded-xl p-4 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  isHighPriority 
                    ? 'border-rose-500/20 bg-rose-500/5' 
                    : !isPassed 
                    ? 'border-amber-500/10 bg-amber-500/5' 
                    : 'border-white/5 hover:border-white/10'
                }`}
                id={`rec-item-${area.category.replace(/\s+/g, '-')}`}
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white truncate max-w-[240px] sm:max-w-xs">{area.category}</span>
                    
                    {/* Priority Badge */}
                    <span className={`text-[8px] font-extrabold uppercase tracking-widest px-1.5 py-0.5 rounded ${
                      area.percent >= 80 
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/15' 
                        : isHighPriority 
                        ? 'bg-rose-500/10 text-rose-400 border border-rose-500/15 animate-pulse' 
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/15'
                    }`}>
                      {area.percent >= 80 ? 'Mastered' : isHighPriority ? 'Critical Gap' : 'Requires Work'}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-400 leading-normal font-light">
                    {area.info.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1" id={`concepts-${area.category.replace(/\s+/g, '-')}`}>
                    {area.info.coreConcepts.map((concept, cIdx) => (
                      <span key={cIdx} className="text-[9px] bg-slate-900/80 text-slate-300 px-2 py-0.5 rounded border border-white/5 font-mono">
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 flex items-center justify-between sm:justify-end gap-4 min-w-[120px] border-t sm:border-t-0 border-white/5 pt-2 sm:pt-0">
                  <div className="text-left sm:text-right">
                    <span className="block text-[8px] font-bold text-slate-500 uppercase tracking-widest">Syllabus Score</span>
                    <span className={`text-base font-mono font-bold ${isPassed ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {area.correct} / {area.total} ({area.percent}%)
                    </span>
                  </div>
                  
                  <div className="p-1.5 rounded-full bg-slate-900/60 border border-white/10 text-slate-400">
                    {isPassed ? (
                      <CheckSquare className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <ArrowRight className="w-4 h-4 text-rose-400" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
