import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { 
  Award, Clock, CheckCircle2, TrendingUp, BookOpen, AlertCircle, Trash2, 
  Sparkles, Zap, GraduationCap 
} from 'lucide-react';
import { UserProgress, SyllabusArea } from '../types';
import { ITIL_FLASHCARDS } from '../data/flashcards';

interface ProgressTrackerProps {
  progress: UserProgress;
  onClearHistory: () => void;
  onNavigateToMode: (mode: 'exam' | 'practice' | 'flashcard') => void;
}

export default function ProgressTracker({ 
  progress, 
  onClearHistory,
  onNavigateToMode
}: ProgressTrackerProps) {
  const [resetConfirm, setResetConfirm] = useState(false);
  const { attempts, flashcardStatus } = progress;

  // Calculate terminology stats
  const totalTerms = ITIL_FLASHCARDS.length;
  const masteredTerms = Object.values(flashcardStatus).filter(s => s === 'mastered').length;
  const learningTerms = Object.values(flashcardStatus).filter(s => s === 'learning').length;
  const newTerms = totalTerms - masteredTerms - learningTerms;

  const terminologyMasteryPercent = totalTerms > 0 
    ? Math.round((masteredTerms / totalTerms) * 100) 
    : 0;

  // Calculate exam stats
  const totalAttempts = attempts.length;
  const highestScore = totalAttempts > 0 
    ? Math.max(...attempts.map(a => a.score)) 
    : 0;
  const highestScorePercent = Math.round((highestScore / 40) * 100);

  const averageScore = totalAttempts > 0
    ? Math.round(attempts.reduce((sum, a) => sum + a.score, 0) / totalAttempts)
    : 0;
  const averageScorePercent = Math.round((averageScore / 40) * 100);

  const examUptimeSec = attempts.reduce((sum, a) => sum + a.duration, 0);
  const totalHours = Math.floor(examUptimeSec / 3600);
  const totalMins = Math.floor((examUptimeSec % 3600) / 60);

  // Syllabus performance rollup
  const categorySummary: Record<string, { correct: number; total: number }> = {
    'Key Concepts of Service Management': { correct: 0, total: 0 },
    'The 7 Guiding Principles': { correct: 0, total: 0 },
    'The Four Dimensions of Service Management': { correct: 0, total: 0 },
    'The Service Value System & Service Value Chain': { correct: 0, total: 0 },
    'Key ITIL Practices': { correct: 0, total: 0 },
  };

  // If they have attempts, average out their performance per category
  if (totalAttempts > 0) {
    attempts.forEach(attempt => {
      Object.entries(attempt.categoryScores).forEach(([cat, scores]) => {
        if (categorySummary[cat]) {
          categorySummary[cat].correct += scores.correct;
          categorySummary[cat].total += scores.total;
        }
      });
    });
  }

  // Calculate Overall Exam Readiness
  // Weighting: 60% based on average exam scores, 40% based on flashcard terminology mastery
  const scoreFactor = totalAttempts > 0 ? averageScorePercent : 0;
  const flashcardFactor = terminologyMasteryPercent;
  
  let readinessPercent = 0;
  if (totalAttempts > 0) {
    readinessPercent = Math.round((scoreFactor * 0.6) + (flashcardFactor * 0.4));
  } else {
    // If no exam attempts, base it on terms review progress
    readinessPercent = Math.round(flashcardFactor * 0.5);
  }

  // Format historical chart data
  const chartData = attempts.map((a, idx) => ({
    name: `Attempt ${idx + 1}`,
    score: Math.round((a.score / a.totalQuestions) * 100),
    passingLimit: 65,
    date: new Date(a.date).toLocaleDateString(),
  })).slice(-8); // Show last 8 attempts

  // Get recommendations
  const getSyllabusStatus = (correct: number, total: number) => {
    if (total === 0) return { label: 'Not Assessed', color: 'text-slate-500 bg-slate-800' };
    const pct = (correct / total) * 100;
    if (pct >= 85) return { label: 'Highly Proficient', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' };
    if (pct >= 65) return { label: 'Ready', color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20' };
    return { label: 'Needs Focus', color: 'text-rose-400 bg-rose-500/10 border-rose-500/20' };
  };

  // Determine critical weak category
  let weakestCategory = '';
  let minPct = 100;
  Object.entries(categorySummary).forEach(([cat, stats]) => {
    if (stats.total > 0) {
      const pct = (stats.correct / stats.total) * 100;
      if (pct < minPct) {
        minPct = pct;
        weakestCategory = cat;
      }
    }
  });

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 animate-in fade-in" id="progress-tracker-container">
      {/* Bento Grid Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="tracker-overview-grid">
        {/* Readiness Circular Ring Indicator */}
        <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden" id="readiness-gauge-card">
          <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest self-start mb-4">
            PREPARATION STATUS
          </h3>
          
          <div className="flex items-center justify-center relative py-4">
            <svg className="w-36 h-36 transform -rotate-90">
              <circle cx="72" cy="72" r="62" stroke="currentColor" stroke-width="8" fill="transparent" className="text-slate-800" />
              <circle 
                cx="72" 
                cy="72" 
                r="62" 
                stroke="currentColor" 
                stroke-width="8" 
                fill="transparent" 
                stroke-dasharray="390" 
                stroke-dashoffset={390 - (390 * readinessPercent) / 100} 
                className="text-indigo-500 transition-all duration-1000 ease-out filter drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]" 
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-3xl font-black tracking-tight text-white">{readinessPercent}%</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">READINESS</span>
            </div>
          </div>

          <p className="text-xs text-slate-400 mt-2 max-w-xs">
            {readinessPercent >= 85 
              ? '🎯 Stellar performance! You are fully equipped to dominate the actual exam.' 
              : readinessPercent >= 65 
              ? '👍 Solid progress. You meet the minimum requirements, but reviewing weak points is recommended.' 
              : '📖 We recommend completing flashcards and achieving at least 65% on simulated exams.'}
          </p>
        </div>

        {/* Core Statistics Cards */}
        <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden" id="tracker-stats-card">
          <div className="absolute top-0 left-0 w-1 h-full bg-indigo-400/50"></div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">STUDY ENGAGEMENT</h3>
          
          <div className="grid grid-cols-2 gap-4" id="stats-counter-grid">
            <div className="space-y-1 p-3 bg-slate-950/40 rounded-xl border border-white/5">
              <div className="flex items-center gap-1.5 text-slate-400 text-[10px] uppercase font-bold tracking-wider">
                <BookOpen className="h-3 w-3 text-indigo-400" />
                Exam Sims
              </div>
              <p className="text-2xl font-bold text-white">{totalAttempts}</p>
              <p className="text-[10px] text-slate-500 font-medium">Completed tries</p>
            </div>

            <div className="space-y-1 p-3 bg-slate-950/40 rounded-xl border border-white/5">
              <div className="flex items-center gap-1.5 text-slate-400 text-[10px] uppercase font-bold tracking-wider">
                <GraduationCap className="h-3 w-3 text-indigo-400" />
                Mastery Rate
              </div>
              <p className="text-2xl font-bold text-white">{terminologyMasteryPercent}%</p>
              <p className="text-[10px] text-slate-500 font-medium">Terms completed</p>
            </div>

            <div className="space-y-1 p-3 bg-slate-950/40 rounded-xl border border-white/5">
              <div className="flex items-center gap-1.5 text-slate-400 text-[10px] uppercase font-bold tracking-wider">
                <Award className="h-3 w-3 text-emerald-400" />
                Best Score
              </div>
              <p className="text-2xl font-bold text-emerald-400">{highestScorePercent}%</p>
              <p className="text-[10px] text-slate-500 font-medium">{highestScore} / 40 correct</p>
            </div>

            <div className="space-y-1 p-3 bg-slate-950/40 rounded-xl border border-white/5">
              <div className="flex items-center gap-1.5 text-slate-400 text-[10px] uppercase font-bold tracking-wider">
                <Clock className="h-3 w-3 text-indigo-400" />
                Active Time
              </div>
              <p className="text-2xl font-bold text-white">
                {totalHours > 0 ? `${totalHours}h ${totalMins}m` : `${totalMins} mins`}
              </p>
              <p className="text-[10px] text-slate-500 font-medium">Inside simulation</p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-xs text-slate-400">
            <span>Streak: <span className="text-indigo-400 font-bold">{progress.streak} days</span> 🔥</span>
            {progress.lastActive && (
              <span>Last active: {new Date(progress.lastActive).toLocaleDateString()}</span>
            )}
          </div>
        </div>

        {/* AI Study Recommendations Card */}
        <div className="bg-gradient-to-br from-indigo-950/40 to-slate-900 border border-indigo-500/20 rounded-2xl p-6 flex flex-col justify-between" id="ai-recommendations-card">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 bg-indigo-600/20 rounded-lg text-indigo-400 border border-indigo-500/35">
                <Sparkles className="h-4 w-4" />
              </div>
              <h3 className="text-xs font-bold text-indigo-300 uppercase tracking-widest">
                AI STUDY ADVISOR
              </h3>
            </div>

            {totalAttempts === 0 && terminologyMasteryPercent === 0 ? (
              <div className="space-y-3" id="ai-blank-state">
                <p className="text-xs text-slate-300 leading-relaxed">
                  Your performance engine is waiting. To generate personalized training plans:
                </p>
                <div className="space-y-2">
                  <button 
                    onClick={() => onNavigateToMode('flashcard')}
                    className="w-full text-left p-2.5 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 text-xs text-indigo-300 font-semibold flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <span>1. Flip 10 review flashcards</span>
                    <Zap className="h-3 w-3" />
                  </button>
                  <button 
                    onClick={() => onNavigateToMode('practice')}
                    className="w-full text-left p-2.5 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 text-xs text-indigo-300 font-semibold flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <span>2. Focus on specific syllabus topics</span>
                    <Zap className="h-3 w-3" />
                  </button>
                  <button 
                    onClick={() => onNavigateToMode('exam')}
                    className="w-full text-left p-2.5 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 text-xs text-indigo-300 font-semibold flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <span>3. Complete your first practice exam</span>
                    <Zap className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-3" id="ai-insight-content">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">Current Training Strategy</p>
                  <p className="text-xs text-slate-200 leading-relaxed font-light">
                    {weakestCategory ? (
                      <>Focus on <strong className="text-white font-medium">"{weakestCategory}"</strong>. You registered your lowest score ratios here. Study key ITIL concepts to drive up retention.</>
                    ) : (
                      <>You've reviewed terminology successfully. Launch a simulated practice exam to establish a benchmark score.</>
                    )}
                  </p>
                </div>

                <div className="p-2.5 bg-amber-500/10 border border-amber-500/20 text-amber-300 rounded-xl flex gap-2 items-start text-xs">
                  <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                  <p className="leading-snug">
                    <span className="font-semibold text-white">Trap Alert:</span> Don't confuse <strong className="font-bold">Utility</strong> (Fit for Purpose) with <strong className="font-bold">Warranty</strong> (Fit for Use). Expect at least 3 exam questions targeting this difference.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-white/5 flex gap-2" id="action-shortcuts">
            <button
              onClick={() => onNavigateToMode('exam')}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-2 px-3 rounded-xl transition-all cursor-pointer shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-lg text-center"
              id="goto-exam-shortcut"
            >
              Simulate Exam
            </button>
            <button
              onClick={() => onNavigateToMode('practice')}
              className="flex-1 bg-indigo-600/15 hover:bg-indigo-600/25 text-indigo-300 border border-indigo-500/15 hover:border-indigo-500/35 text-xs font-bold py-2 px-3 rounded-xl transition-all cursor-pointer text-center"
              id="goto-practice-shortcut"
            >
              Practice
            </button>
            <button
              onClick={() => onNavigateToMode('flashcard')}
              className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold py-2 px-3 rounded-xl transition-all cursor-pointer text-center"
              id="goto-flash-shortcut"
            >
              Review Cards
            </button>
          </div>
        </div>
      </div>

      {/* Historical Progress Chart */}
      <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-5 md:p-6 space-y-4" id="tracker-chart-section">
        <div className="flex justify-between items-center">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-indigo-400" />
            EXAM SCORE PROGRESSION (LAST 8 ATTEMPTS)
          </h3>
          <span className="text-[10px] font-bold text-slate-500">PASSING BAR: 65%</span>
        </div>

        {totalAttempts > 0 ? (
          <div className="h-[240px] w-full" id="progress-line-chart">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <defs>
                  <linearGradient id="scoreColor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="name" stroke="#64748b" fontSize={11} tickLine={false} />
                <YAxis domain={[0, 100]} stroke="#64748b" fontSize={11} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px' }}
                  labelStyle={{ color: '#fff', fontWeight: 'bold', fontSize: '12px' }}
                  itemStyle={{ color: '#818cf8', fontSize: '12px' }}
                />
                <Area type="monotone" dataKey="score" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#scoreColor)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="h-[200px] border border-dashed border-white/5 rounded-2xl flex flex-col items-center justify-center text-center space-y-2" id="chart-placeholder">
            <TrendingUp className="h-8 w-8 text-slate-700" />
            <p className="text-xs text-slate-500 font-medium">No exam simulation history available.</p>
            <p className="text-[11px] text-slate-600 max-w-sm">Complete at least one practice exam from the simulator tab to draw your metrics path here.</p>
          </div>
        )}
      </div>

      {/* Syllabus Performance Dashboard */}
      <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-5 md:p-6 space-y-5" id="tracker-syllabus-dash">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          SYLLABUS PROFICIENCY MAP
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="syllabus-proficiency-grid">
          {Object.entries(categorySummary).map(([cat, stats]) => {
            const ratio = stats.total > 0 ? stats.correct / stats.total : 0;
            const percentage = Math.round(ratio * 100);
            const status = getSyllabusStatus(stats.correct, stats.total);

            return (
              <div 
                key={cat} 
                className="p-4 bg-slate-950/40 border border-white/5 rounded-2xl space-y-3 flex flex-col justify-between hover:border-white/10 transition-colors"
                id={`syllabus-prof-card-${cat.replace(/\s+/g, '-')}`}
              >
                <div className="flex justify-between items-start gap-4">
                  <span className="text-xs font-bold text-slate-200 line-clamp-1">{cat}</span>
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded border uppercase shrink-0 ${status.color}`}>
                    {status.label}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                    <span>Performance Rating</span>
                    <span className="font-semibold text-slate-300">{stats.total > 0 ? `${percentage}% (${stats.correct}/${stats.total} correct)` : 'Not tested'}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        percentage >= 85 ? 'bg-emerald-500' : percentage >= 65 ? 'bg-indigo-500' : 'bg-rose-400'
                      }`}
                      style={{ width: `${stats.total > 0 ? percentage : 0}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Danger Zone Controls */}
      {totalAttempts > 0 && (
        <div className="flex justify-end" id="tracker-danger-zone">
          <button
            onClick={() => {
              if (resetConfirm) {
                onClearHistory();
                setResetConfirm(false);
              } else {
                setResetConfirm(true);
                setTimeout(() => setResetConfirm(false), 3000);
              }
            }}
            className={`flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl transition-all border cursor-pointer ${
              resetConfirm
                ? 'bg-rose-600 border-rose-500 text-white animate-pulse'
                : 'text-rose-500 hover:bg-rose-500/10 border-rose-500/10 hover:border-rose-500/30'
            }`}
            id="clear-exam-history-btn"
          >
            <Trash2 className="h-3.5 w-3.5" />
            {resetConfirm ? "Click Again to Confirm Clear" : "Reset Practice History"}
          </button>
        </div>
      )}
    </div>
  );
}
