import React, { useState, useEffect, useRef } from 'react';
import { 
  Clock, Flag, ChevronLeft, ChevronRight, CheckCircle, XCircle, 
  Sparkles, Award, ShieldAlert, BarChart3, RotateCcw, Filter, CheckSquare, Bookmark, Eye
} from 'lucide-react';
import { Question, SyllabusArea, ExamAttempt } from '../types';
import { ITIL_QUESTIONS } from '../data/questions';
import ExamAnalysis from './ExamAnalysis';

interface ExamModeProps {
  onAttemptCompleted: (attempt: ExamAttempt) => void;
  onOpenTutor: (req: any) => void;
  onNavigateToMode?: (mode: 'exam' | 'practice' | 'flashcard' | 'tracker') => void;
}

type ExamState = 'intro' | 'active' | 'results';

export default function ExamMode({ onAttemptCompleted, onOpenTutor, onNavigateToMode }: ExamModeProps) {
  // State
  const [gameState, setGameState] = useState<ExamState>('intro');
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({}); // questionId -> optionIndex
  const [flagged, setFlagged] = useState<Record<number, boolean>>({}); // questionId -> true/false
  const [timeRemaining, setTimeRemaining] = useState(3600); // 60 minutes in seconds
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [filterGrid, setFilterGrid] = useState<'all' | 'answered' | 'unanswered' | 'flagged'>('all');
  const [reviewFilter, setReviewFilter] = useState<'all' | 'correct' | 'incorrect' | 'flagged'>('all');
  const [activeReviewIdx, setActiveReviewIdx] = useState<number | null>(null);
  const [currentAttempt, setCurrentAttempt] = useState<ExamAttempt | null>(null);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  // Timers
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Start Exam
  const handleStartExam = () => {
    // ITIL actual exam is exactly 40 questions weighted across the syllabus areas:
    // 1. Key Concepts of Service Management: 7 Questions
    // 2. The 7 Guiding Principles: 8 Questions
    // 3. The Four Dimensions of Service Management: 6 Questions
    // 4. The Service Value System & Service Value Chain: 7 Questions
    // 5. Key ITIL Practices: 12 Questions
    
    const sample = (category: string, count: number) => {
      const filtered = ITIL_QUESTIONS.filter(q => q.category === category);
      return [...filtered].sort(() => Math.random() - 0.5).slice(0, count);
    };

    const examPool = [
      ...sample('Key Concepts of Service Management', 7),
      ...sample('The 7 Guiding Principles', 8),
      ...sample('The Four Dimensions of Service Management', 6),
      ...sample('The Service Value System & Service Value Chain', 7),
      ...sample('Key ITIL Practices', 12)
    ];

    // If there's any rounding/empty category, fallback to shuffling the entire bank
    let finalPool = examPool;
    if (finalPool.length < 40) {
      finalPool = [...ITIL_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 40);
    } else {
      // Shuffle the selected 40 questions so they don't appear grouped by category
      finalPool = finalPool.sort(() => Math.random() - 0.5);
    }

    setShuffledQuestions(finalPool);
    setAnswers({});
    setFlagged({});
    setCurrentIdx(0);
    setTimeRemaining(3600);
    setTimeElapsed(0);
    setGameState('active');
    setFilterGrid('all');
  };

  // Timer Effect
  useEffect(() => {
    if (gameState === 'active') {
      timerRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleSubmitExam(true); // Auto-submit when time is up
            return 0;
          }
          return prev - 1;
        });
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameState]);

  // Format Timer
  const formatTime = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Toggle Flag
  const toggleFlag = (qId: number) => {
    setFlagged((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  };

  // Record Answer
  const handleSelectOption = (qId: number, optIdx: number) => {
    setAnswers((prev) => ({
      ...prev,
      [qId]: optIdx,
    }));
  };

  // Submit Exam
  const handleSubmitExam = (isAutoSubmit = false) => {
    if (!isAutoSubmit) {
      setShowSubmitConfirm(true);
      return;
    }

    // Grade the exam
    let correctCount = 0;
    const categoryScores: Record<string, { correct: number; total: number }> = {};

    shuffledQuestions.forEach((q) => {
      const isCorrect = answers[q.id] === q.answer;
      if (isCorrect) correctCount++;

      if (!categoryScores[q.category]) {
        categoryScores[q.category] = { correct: 0, total: 0 };
      }
      categoryScores[q.category].total++;
      if (isCorrect) {
        categoryScores[q.category].correct++;
      }
    });

    const newAttempt: ExamAttempt = {
      id: `attempt-${Date.now()}`,
      date: new Date().toISOString(),
      score: correctCount,
      totalQuestions: shuffledQuestions.length,
      duration: timeElapsed,
      categoryScores,
      userAnswers: answers,
    };

    onAttemptCompleted(newAttempt);
    setCurrentAttempt(newAttempt);
    setGameState('results');
    setReviewFilter('all');
    setActiveReviewIdx(0);
    setShowSubmitConfirm(false);
  };

  const handleConfirmSubmit = () => {
    handleSubmitExam(true);
  };

  // Calculated variables
  const currentQuestion = shuffledQuestions[currentIdx];
  const totalQs = shuffledQuestions.length;
  const answeredCount = Object.keys(answers).length;

  // Grade Metrics
  const finalScore = shuffledQuestions.length > 0 ? shuffledQuestions.filter(q => answers[q.id] === q.answer).length : 0;
  const scorePercent = Math.round((finalScore / 40) * 100);
  const isPassed = scorePercent >= 65; // ITIL passing score is 65%

  return (
    <div className="w-full max-w-5xl mx-auto" id="exam-mode-container">
      {/* 1. INTRO COMPONENT */}
      {gameState === 'intro' && (
        <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 md:p-8 space-y-6 animate-in fade-in relative overflow-hidden" id="exam-intro-screen">
          <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
          
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="inline-block text-xs font-bold bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded border border-indigo-500/30 uppercase tracking-widest">
              Simulation Mode
            </span>
            <h2 className="text-2xl font-black text-white font-sans tracking-tight">ITIL® V4 Foundation Practice Exam</h2>
            <p className="text-sm text-slate-400">
              Test your knowledge under real exam conditions. This simulator replicates the official syllabus and weighting constraints.
            </p>
          </div>

          {/* Exam Rules Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-y border-white/10 py-6" id="exam-rules-grid">
            <div className="flex items-center gap-3 p-4 bg-slate-950/50 border border-white/5 rounded-xl">
              <Clock className="h-6 w-6 text-indigo-400 shrink-0" />
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Time Limit</p>
                <p className="text-sm font-semibold text-white">60 Minutes</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-slate-950/50 border border-white/5 rounded-xl">
              <CheckSquare className="h-6 w-6 text-indigo-400 shrink-0" />
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Questions</p>
                <p className="text-sm font-semibold text-white">40 Multiple Choice</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-slate-950/50 border border-white/5 rounded-xl">
              <Award className="h-6 w-6 text-emerald-400 shrink-0" />
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Passing Score</p>
                <p className="text-sm font-semibold text-emerald-400">65% (26 / 40 correct)</p>
              </div>
            </div>
          </div>

          {/* Syllabus Weightings */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Syllabus Coverage Breakdown</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs" id="syllabus-breakdown">
              <div className="p-3 bg-slate-950/40 border border-white/5 rounded-lg flex justify-between items-center">
                <span className="text-slate-300">Key Concepts of Service Management</span>
                <span className="font-semibold text-white bg-slate-800 px-2 py-0.5 rounded">7 Qs</span>
              </div>
              <div className="p-3 bg-slate-950/40 border border-white/5 rounded-lg flex justify-between items-center">
                <span className="text-slate-300">The 7 Guiding Principles</span>
                <span className="font-semibold text-white bg-slate-800 px-2 py-0.5 rounded">8 Qs</span>
              </div>
              <div className="p-3 bg-slate-950/40 border border-white/5 rounded-lg flex justify-between items-center">
                <span className="text-slate-300">The Four Dimensions of Service Management</span>
                <span className="font-semibold text-white bg-slate-800 px-2 py-0.5 rounded">6 Qs</span>
              </div>
              <div className="p-3 bg-slate-950/40 border border-white/5 rounded-lg flex justify-between items-center">
                <span className="text-slate-300">Service Value System & Value Chain</span>
                <span className="font-semibold text-white bg-slate-800 px-2 py-0.5 rounded">7 Qs</span>
              </div>
              <div className="p-3 bg-slate-950/40 border border-white/5 rounded-lg flex justify-between items-center sm:col-span-2">
                <span className="text-slate-300 font-semibold">Key ITIL Practices</span>
                <span className="font-semibold text-indigo-300 bg-indigo-500/15 border border-indigo-500/25 px-2 py-0.5 rounded">12 Qs</span>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl flex items-start gap-3">
            <ShieldAlert className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-300 space-y-1">
              <p className="font-bold text-white uppercase tracking-wider">Important Simulation Rules:</p>
              <p className="leading-relaxed">Once you start, the clock is continuous and cannot be paused. Unanswered questions count as zero. Review flagged questions using the grid filter before submitting.</p>
            </div>
          </div>

          <div className="pt-2 flex justify-center">
            <button
              onClick={handleStartExam}
              className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] transition-all text-sm flex items-center gap-2 cursor-pointer"
              id="start-exam-button"
            >
              Start Practice Exam
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* 2. ACTIVE EXAM COMPONENT */}
      {gameState === 'active' && currentQuestion && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 animate-in fade-in" id="exam-active-layout">
          {/* Question Display Column (Spans 3 cols on desktop) */}
          <div className="lg:col-span-3 space-y-5" id="exam-main-question-col">
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-5 md:p-6 space-y-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
              
              {/* Active Header */}
              <div className="flex flex-wrap justify-between items-center border-b border-white/10 pb-4 gap-2" id="question-header">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest bg-indigo-500/20 px-2.5 py-1 rounded border border-indigo-500/20">
                    {currentQuestion.category}
                  </span>
                  <h3 className="text-sm font-semibold text-slate-300 pt-1">
                    Question {currentIdx + 1} of {totalQs}
                  </h3>
                </div>
                
                {/* Top Action Controls (Raised Previous & Next Buttons) */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
                    disabled={currentIdx === 0}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold border border-white/10 text-slate-300 hover:bg-slate-800 disabled:opacity-40 cursor-pointer transition-colors"
                    id="top-prev-question"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" />
                    <span>Prev</span>
                  </button>

                  {currentIdx < totalQs - 1 ? (
                    <button
                      onClick={() => setCurrentIdx((prev) => Math.min(totalQs - 1, prev + 1))}
                      className="flex items-center gap-1 px-4 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer shadow-[0_0_12px_rgba(79,70,229,0.3)] transition-all"
                      id="top-next-question"
                    >
                      <span>Next</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleSubmitExam(false)}
                      className="flex items-center gap-1 px-4 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer shadow-[0_0_12px_rgba(16,185,129,0.3)] transition-all"
                      id="top-submit-exam-button"
                    >
                      Submit
                    </button>
                  )}

                  {/* Flag Button */}
                  <button
                    onClick={() => toggleFlag(currentQuestion.id)}
                    className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg border transition-all cursor-pointer ${
                      flagged[currentQuestion.id]
                        ? 'border-amber-500/50 bg-amber-500/10 text-amber-300'
                        : 'border-white/5 bg-slate-950/40 text-slate-400 hover:text-white'
                    }`}
                    id={`flag-question-${currentQuestion.id}`}
                  >
                    <Flag className={`h-3.5 w-3.5 ${flagged[currentQuestion.id] ? 'fill-amber-400 text-amber-400' : ''}`} />
                    {flagged[currentQuestion.id] ? 'Flagged' : 'Flag'}
                  </button>
                </div>
              </div>

              {/* Question Text */}
              <div className="py-2" id="question-text-container">
                <p className="text-lg text-slate-100 font-light leading-relaxed">
                  {currentQuestion.question}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3" id="options-container">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = answers[currentQuestion.id] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(currentQuestion.id, idx)}
                      className={`group w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                        isSelected
                          ? 'border-indigo-500/50 bg-indigo-600/10 text-white font-medium shadow-[0_0_15px_rgba(99,102,241,0.15)]'
                          : 'border-white/5 bg-slate-950/50 hover:border-indigo-500/30 hover:bg-slate-800/40 text-slate-300'
                      }`}
                      id={`option-button-${idx}`}
                    >
                      <span className={`h-6 w-6 rounded-lg shrink-0 flex items-center justify-center text-xs font-bold mr-1 transition-all ${
                        isSelected 
                          ? 'bg-indigo-600 text-white shadow-[0_0_10px_rgba(79,70,229,0.4)]' 
                          : 'bg-slate-800 text-slate-400 group-hover:bg-indigo-500/20 group-hover:text-white'
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="pt-0.5">{option}</span>
                    </button>
                  );
                })}
              </div>

              {/* Question Footer Nav */}
              <div className="flex justify-between items-center pt-4 border-t border-white/10" id="question-nav-buttons">
                <button
                  onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
                  disabled={currentIdx === 0}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold border border-white/10 text-slate-300 hover:bg-slate-800 disabled:opacity-40 disabled:hover:bg-transparent cursor-pointer transition-colors"
                  id="prev-question"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </button>
                <div className="text-xs text-slate-500 font-medium" id="answered-count-text">
                  Answered: <span className="text-indigo-400 font-bold">{answeredCount}</span> / {totalQs}
                </div>
                {currentIdx < totalQs - 1 ? (
                  <button
                    onClick={() => setCurrentIdx((prev) => Math.min(totalQs - 1, prev + 1))}
                    className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer shadow-[0_0_15px_rgba(79,70,229,0.3)] transition-all"
                    id="next-question"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => handleSubmitExam(false)}
                    className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all"
                    id="submit-exam-button"
                  >
                    Submit Exam
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Exam Sidebar (1 col on desktop) */}
          <div className="space-y-4" id="exam-sidebar-grid">
            {/* Live Stats Card */}
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4 flex justify-between items-center" id="live-timer-widget">
              <div className="flex items-center gap-2 text-indigo-400">
                <Clock className="h-5 w-5 animate-pulse" />
                <span className="text-lg font-bold font-mono tracking-wider">{formatTime(timeRemaining)}</span>
              </div>
              <button
                onClick={() => handleSubmitExam(false)}
                className="text-xs font-bold text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                id="finish-exam-now"
              >
                End Exam
              </button>
            </div>

            {/* Question Grid Card */}
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4 space-y-4" id="exam-question-grid-card">
              <div className="flex flex-col gap-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center justify-between">
                  <span>Syllabus Grid</span>
                  <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">{filterGrid} filtered</span>
                </h4>
                {/* Filters */}
                <div className="flex flex-wrap gap-1" id="grid-filters">
                  {(['all', 'answered', 'unanswered', 'flagged'] as const).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setFilterGrid(mode)}
                      className={`text-[9px] font-bold px-2 py-1 rounded capitalize transition-all cursor-pointer ${
                        filterGrid === mode
                          ? 'bg-indigo-600 text-white shadow-[0_0_10px_rgba(79,70,229,0.4)]'
                          : 'bg-slate-950/60 text-slate-400 hover:bg-slate-800'
                      }`}
                      id={`grid-filter-${mode}`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              {/* Number Buttons */}
              <div className="grid grid-cols-5 gap-1.5" id="grid-number-buttons">
                {shuffledQuestions.map((q, idx) => {
                  const isCurrent = idx === currentIdx;
                  const isAnswered = answers[q.id] !== undefined;
                  const isFlagged = flagged[q.id];

                  // Filter logic
                  if (filterGrid === 'answered' && !isAnswered) return null;
                  if (filterGrid === 'unanswered' && isAnswered) return null;
                  if (filterGrid === 'flagged' && !isFlagged) return null;

                  return (
                    <button
                      key={idx}
                      onClick={() => setCurrentIdx(idx)}
                      className={`h-8 rounded-lg text-xs font-bold border transition-all flex items-center justify-center cursor-pointer relative ${
                        isCurrent
                          ? 'ring-2 ring-indigo-500 border-indigo-500 text-white font-bold bg-indigo-500/20'
                          : isFlagged
                          ? 'border-amber-500/50 bg-amber-500/25 text-amber-300'
                          : isAnswered
                          ? 'border-indigo-500/20 bg-indigo-500/10 text-indigo-300'
                          : 'border-white/5 bg-slate-950/40 text-slate-500 hover:border-white/10 hover:text-slate-300'
                      }`}
                      id={`grid-number-${idx}`}
                    >
                      {idx + 1}
                      {isFlagged && (
                        <span className="absolute top-0 right-0 h-1.5 w-1.5 rounded-full bg-amber-500" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. EXAM RESULTS COMPONENT */}
      {gameState === 'results' && (
        <div className="space-y-6 animate-in fade-in" id="exam-results-screen">
          {/* Score Summary Banner */}
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Pass Fail Indicator */}
            <div className="flex flex-col items-center justify-center text-center p-5 rounded-xl space-y-2 border border-white/5 bg-slate-950/60 relative overflow-hidden" id="pass-fail-card">
              {isPassed ? (
                <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
              ) : (
                <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
              )}
              
              <span className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded border ${
                isPassed 
                  ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.1)]' 
                  : 'bg-red-500/10 border-red-500/20 text-red-400'
              }`}>
                {isPassed ? 'Passed Official Criteria' : 'Below Passing Score'}
              </span>
              <div className="flex items-center gap-2 pt-2">
                {isPassed ? (
                  <Award className="h-8 w-8 text-emerald-400 filter drop-shadow-[0_0_5px_rgba(52,211,153,0.4)] shrink-0" />
                ) : (
                  <ShieldAlert className="h-8 w-8 text-red-400 shrink-0" />
                )}
                <h3 className="text-3xl font-black text-white leading-none">{scorePercent}%</h3>
              </div>
              <p className="text-xs text-slate-400 font-medium">
                {isPassed ? '🎯 Congratulations! You are exam-ready.' : 'Focus on weaker areas below and try again.'}
              </p>
            </div>

            {/* Performance metrics */}
            <div className="space-y-3 p-2 md:col-span-2" id="results-meta">
              <h4 className="text-lg font-black text-white font-sans tracking-tight">Practice Exam Scorecard</h4>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="text-slate-500 font-bold uppercase tracking-wider text-[9px]">Correct Questions</p>
                  <p className="text-sm font-semibold text-slate-200">{finalScore} / 40 correct</p>
                </div>
                <div>
                  <p className="text-slate-500 font-bold uppercase tracking-wider text-[9px]">Time Taken</p>
                  <p className="text-sm font-semibold text-slate-200">{formatTime(timeElapsed)} spent</p>
                </div>
                <div>
                  <p className="text-slate-500 font-bold uppercase tracking-wider text-[9px]">Questions Skipped</p>
                  <p className="text-sm font-semibold text-slate-200">{40 - answeredCount} unanswered</p>
                </div>
                <div>
                  <p className="text-slate-500 font-bold uppercase tracking-wider text-[9px]">Date Attempted</p>
                  <p className="text-sm font-semibold text-slate-200">{new Date().toLocaleDateString()}</p>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  onClick={handleStartExam}
                  className="flex items-center gap-1.5 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl cursor-pointer shadow-[0_0_15px_rgba(79,70,229,0.3)] transition-all"
                  id="retake-exam-button"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Retake Exam
                </button>
              </div>
            </div>
          </div>

          {currentAttempt && (
            <ExamAnalysis 
              attempt={currentAttempt} 
              onNavigateToMode={onNavigateToMode || (() => {})} 
            />
          )}

          {/* Performance breakdown by category */}
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-5 md:p-6 space-y-4" id="results-categories">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
              <BarChart3 className="h-4 w-4 text-indigo-400" />
              Syllabus Area Proficiency
            </h4>

            <div className="space-y-4" id="proficiency-bars">
              {Object.entries(
                shuffledQuestions.reduce((acc, q) => {
                  if (!acc[q.category]) acc[q.category] = { correct: 0, total: 0 };
                  acc[q.category].total++;
                  if (answers[q.id] === q.answer) acc[q.category].correct++;
                  return acc;
                }, {} as Record<string, { correct: number; total: number }>)
              ).map(([category, rawData]) => {
                const data = rawData as { correct: number; total: number };
                const percent = Math.round((data.correct / data.total) * 100);
                const isAreaPassed = percent >= 65;

                return (
                  <div key={category} className="space-y-1.5" id={`category-perf-${category.replace(/\s+/g, '-')}`}>
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-300 truncate max-w-[280px] sm:max-w-md">{category}</span>
                      <span className={`font-bold ${isAreaPassed ? 'text-emerald-400' : 'text-red-400'}`}>
                        {data.correct}/{data.total} ({percent}%)
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          percent >= 85 ? 'bg-emerald-500' : percent >= 65 ? 'bg-indigo-500' : 'bg-rose-400'
                        }`}
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Question Review Accordion */}
          <div className="space-y-4" id="results-review">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 bg-slate-900/60 p-4 rounded-xl border border-white/10">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <CheckSquare className="h-4 w-4 text-indigo-400" />
                Exam Review Portal
              </h4>

              {/* Review Filters */}
              <div className="flex flex-wrap gap-1" id="review-filters">
                {(['all', 'correct', 'incorrect', 'flagged'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setReviewFilter(mode)}
                    className={`text-[9px] font-bold px-2.5 py-1.5 rounded-lg capitalize cursor-pointer transition-colors ${
                      reviewFilter === mode
                        ? 'bg-indigo-600 text-white shadow-[0_0_10px_rgba(79,70,229,0.4)]'
                        : 'bg-slate-950 text-slate-400 hover:bg-slate-800'
                    }`}
                    id={`review-filter-${mode}`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* Questions list */}
            <div className="space-y-3" id="review-questions-list">
              {shuffledQuestions.map((q, idx) => {
                const isCorrect = answers[q.id] === q.answer;
                const isFlagged = flagged[q.id];

                // Filters
                if (reviewFilter === 'correct' && !isCorrect) return null;
                if (reviewFilter === 'incorrect' && isCorrect) return null;
                if (reviewFilter === 'flagged' && !isFlagged) return null;

                const isActive = activeReviewIdx === idx;

                return (
                  <div 
                    key={q.id} 
                    className={`bg-slate-900/60 rounded-xl border transition-all ${
                      isActive 
                        ? 'border-indigo-500/40 shadow-[0_0_15px_rgba(99,102,241,0.1)]' 
                        : 'border-white/5 hover:border-white/10'
                    }`}
                    id={`review-question-card-${q.id}`}
                  >
                    {/* Header Summary */}
                    <button
                      onClick={() => setActiveReviewIdx(isActive ? null : idx)}
                      className="w-full text-left p-4 flex justify-between items-start gap-3 cursor-pointer"
                    >
                      <div className="space-y-1 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                            Q{idx + 1} • {q.category}
                          </span>
                          {isFlagged && (
                            <span className="flex items-center gap-1 text-[9px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20 px-1.5 py-0.5 rounded">
                              <Flag className="h-2 w-2 fill-amber-400 text-amber-400" />
                              Flagged
                            </span>
                          )}
                        </div>
                        <p className="text-xs md:text-sm font-semibold text-slate-200 line-clamp-1 pr-6">
                          {q.question}
                        </p>
                      </div>
                      <div className="shrink-0 pt-0.5" id={`grade-icon-${q.id}`}>
                        {isCorrect ? (
                          <CheckCircle className="h-5 w-5 text-emerald-400 filter drop-shadow-[0_0_3px_rgba(16,185,129,0.4)]" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-400" />
                        )}
                      </div>
                    </button>

                    {/* Expandable Review Panel */}
                    {isActive && (
                      <div className="px-4 pb-5 border-t border-white/5 pt-4 space-y-4 animate-in fade-in duration-200" id={`review-panel-${q.id}`}>
                        {/* Question Text */}
                        <p className="text-sm font-semibold text-white leading-relaxed">
                          {q.question}
                        </p>

                        {/* Options breakdown */}
                        <div className="space-y-2.5">
                          {q.options.map((option, oIdx) => {
                            const isSelected = answers[q.id] === oIdx;
                            const isOptionCorrect = q.answer === oIdx;

                            return (
                              <div
                                key={oIdx}
                                className={`p-3 rounded-lg border text-xs leading-relaxed flex items-start gap-2.5 ${
                                  isOptionCorrect
                                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300 font-medium'
                                    : isSelected
                                    ? 'border-red-500/30 bg-red-500/10 text-red-300'
                                    : 'border-white/5 bg-slate-950/40 text-slate-300'
                                }`}
                              >
                                <span className={`h-5 w-5 rounded shrink-0 flex items-center justify-center font-bold text-[10px] ${
                                  isOptionCorrect
                                    ? 'bg-emerald-600 text-white'
                                    : isSelected
                                    ? 'bg-red-500 text-white'
                                    : 'bg-slate-800 text-slate-400'
                                }`}>
                                  {String.fromCharCode(65 + oIdx)}
                                </span>
                                <div className="flex-1">
                                  <span>{option}</span>
                                  {isOptionCorrect && <span className="ml-1.5 text-[9px] font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/25 px-1.5 py-0.5 rounded uppercase">Correct Answer</span>}
                                  {isSelected && !isOptionCorrect && <span className="ml-1.5 text-[9px] font-bold text-red-400 bg-red-500/15 border border-red-500/25 px-1.5 py-0.5 rounded uppercase">Your Choice</span>}
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Explanation */}
                        <div className="bg-slate-950/50 rounded-xl p-3.5 border border-white/5 text-xs text-slate-300 leading-relaxed space-y-1">
                          <p className="font-bold text-slate-400 uppercase tracking-widest text-[9px]">Official Explanation</p>
                          <p className="font-light">{q.explanation}</p>
                        </div>

                        {/* AI Explain Helper */}
                        <div className="flex justify-end pt-1">
                          <button
                            onClick={() => {
                              onOpenTutor({
                                type: 'question',
                                targetId: q.id,
                                contextText: q.question,
                                selectedAnswerText: answers[q.id] !== undefined ? q.options[answers[q.id]] : 'None',
                                correctAnswerText: q.options[q.answer],
                              });
                            }}
                            className="flex items-center gap-1.5 text-xs font-bold bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/30 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
                            id={`ask-ai-review-${q.id}`}
                          >
                            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
                            Ask AI Coach to Explain
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 4. MODAL CONFIRMATION DIALOG FOR SAFE SUBMISSION (IFRAME-SAFE) */}
      {showSubmitConfirm && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-200" id="submit-confirm-modal">
          <div className="bg-slate-900 border border-white/15 rounded-2xl max-w-md w-full p-6 space-y-6 shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-150">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                <CheckSquare className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-black text-white tracking-tight uppercase">Finish & Grade Exam?</h4>
                <p className="text-xs text-slate-400">Are you sure you want to end your exam session and submit for grading?</p>
              </div>
            </div>

            {/* Questions Answered Status */}
            <div className="bg-slate-950/50 rounded-xl p-4 border border-white/5 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Total Questions:</span>
                <span className="text-white font-mono font-bold">{totalQs}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Answered Questions:</span>
                <span className={`font-mono font-bold ${answeredCount === totalQs ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {answeredCount} / {totalQs}
                </span>
              </div>
              
              {totalQs - answeredCount > 0 && (
                <div className="p-2.5 bg-amber-500/10 border border-amber-500/20 rounded-lg flex gap-2 text-[11px] text-amber-300">
                  <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <p>You have <strong className="font-bold">{totalQs - answeredCount} unanswered</strong> questions. Unanswered questions will receive 0 points.</p>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setShowSubmitConfirm(false)}
                className="flex-1 py-3 bg-slate-950 hover:bg-slate-800 border border-white/10 rounded-xl text-xs font-bold text-slate-300 transition-colors cursor-pointer"
                id="cancel-submit-btn"
              >
                No, Continue Exam
              </button>
              <button
                onClick={() => handleConfirmSubmit()}
                className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-colors cursor-pointer"
                id="confirm-submit-btn"
              >
                Yes, Grade Exam
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
