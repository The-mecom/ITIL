import React, { useState, useEffect } from 'react';
import { 
  BookOpen, HelpCircle, Sparkles, CheckCircle2, XCircle, ChevronRight, ChevronLeft,
  RotateCcw, LogOut, Award, BarChart3, Shuffle, RefreshCw, ArrowLeft
} from 'lucide-react';
import { Question, SyllabusArea } from '../types';
import { ITIL_QUESTIONS } from '../data/questions';

interface PracticeModeProps {
  onOpenTutor: (req: any) => void;
}

type PracticeState = 'setup' | 'active' | 'summary';

export default function PracticeMode({ onOpenTutor }: PracticeModeProps) {
  // State
  const [sessionState, setSessionState] = useState<PracticeState>('setup');
  const [selectedCategory, setSelectedCategory] = useState<SyllabusArea | 'All' | 'Random40'>('All');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [sessionHistory, setSessionHistory] = useState<{ questionId: number; correct: boolean }[]>([]);

  // Categories
  const categories: { label: string; value: SyllabusArea | 'All' | 'Random40'; desc: string; count: number }[] = [
    { 
      label: 'All Syllabus Topics', 
      value: 'All', 
      desc: 'Practice across all standard ITIL v4 categories simultaneously.',
      count: ITIL_QUESTIONS.length
    },
    { 
      label: 'ITIL Standard 40 Challenge', 
      value: 'Random40', 
      desc: 'A full-length challenge of 40 randomized questions with immediate feedback.',
      count: 40
    },
    { 
      label: 'Key Concepts of Service Management', 
      value: 'Key Concepts of Service Management', 
      desc: 'Focus on Utility, Warranty, Service Relationships, and Value Co-creation.',
      count: ITIL_QUESTIONS.filter(q => q.category === 'Key Concepts of Service Management').length
    },
    { 
      label: 'The 7 Guiding Principles', 
      value: 'The 7 Guiding Principles', 
      desc: 'Practice Focus on Value, Start Where You Are, Progress Iteratively, etc.',
      count: ITIL_QUESTIONS.filter(q => q.category === 'The 7 Guiding Principles').length
    },
    { 
      label: 'The Four Dimensions of Service Management', 
      value: 'The Four Dimensions of Service Management', 
      desc: 'Review Organizations & People, Information & Tech, Partners, Value Streams.',
      count: ITIL_QUESTIONS.filter(q => q.category === 'The Four Dimensions of Service Management').length
    },
    { 
      label: 'The Service Value System & Value Chain', 
      value: 'The Service Value System & Service Value Chain', 
      desc: 'Understand how Plan, Improve, Engage, Obtain/Build, Design and Deliver operate.',
      count: ITIL_QUESTIONS.filter(q => q.category === 'The Service Value System & Service Value Chain').length
    },
    { 
      label: 'Key ITIL Practices', 
      value: 'Key ITIL Practices', 
      desc: 'Focus on Incident, Change, Problem, Desk, Requests and Service Level practices.',
      count: ITIL_QUESTIONS.filter(q => q.category === 'Key ITIL Practices').length
    },
  ];

  // Start Session
  const handleStartPractice = () => {
    let pool: Question[] = [];

    if (selectedCategory === 'All') {
      pool = [...ITIL_QUESTIONS];
    } else if (selectedCategory === 'Random40') {
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

      if (examPool.length < 40) {
        pool = [...ITIL_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 40);
      } else {
        pool = examPool;
      }
    } else {
      pool = ITIL_QUESTIONS.filter(q => q.category === selectedCategory);
    }

    // Shuffle practice pool
    pool = pool.sort(() => Math.random() - 0.5);

    setQuestions(pool);
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setSessionHistory([]);
    setSessionState('active');
  };

  // Check Answer
  const handleCheckAnswer = () => {
    if (selectedOption === null || isSubmitted) return;

    const currentQ = questions[currentIdx];
    const correct = selectedOption === currentQ.answer;

    if (correct) {
      setScore(prev => prev + 1);
    }

    setSessionHistory(prev => [...prev, { questionId: currentQ.id, correct }]);
    setIsSubmitted(true);
  };

  // Previous Question
  const handlePrevQuestion = () => {
    if (currentIdx > 0) {
      setCurrentIdx(prev => prev - 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    }
  };

  // Next Question
  const handleNextQuestion = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setSessionState('summary');
    }
  };

  const activeQ = questions[currentIdx];
  const answeredCount = sessionHistory.length;

  return (
    <div className="w-full max-w-4xl mx-auto animate-in fade-in" id="practice-mode-container">
      {/* SETUP VIEW */}
      {sessionState === 'setup' && (
        <div className="space-y-6" id="practice-setup-screen">
          <div className="bg-slate-900/60 dark:bg-slate-900/60 border border-white/10 dark:border-white/10 rounded-2xl p-6 md:p-8 space-y-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
            <div>
              <span className="inline-block text-xs font-bold bg-indigo-500/20 text-indigo-300 dark:text-indigo-300 px-3 py-1 rounded border border-indigo-500/30 uppercase tracking-widest mb-2">
                Immediate Feedback Practice
              </span>
              <h2 className="text-2xl font-black text-white font-sans tracking-tight">ITIL® V4 Topic-focused Q&A</h2>
              <p className="text-sm text-slate-400 max-w-2xl">
                Master individual sections of the syllabus at your own pace. Choose a focus area below. Every question will immediately show the correct solution and ITIL guidance reference.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="practice-categories-grid">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`text-left p-5 rounded-2xl border transition-all relative flex flex-col justify-between cursor-pointer group ${
                    isSelected
                      ? 'bg-indigo-950/40 border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.15)]'
                      : 'bg-slate-900/40 border-white/5 hover:border-white/10 hover:bg-slate-900/60'
                  }`}
                  id={`practice-category-${cat.value.replace(/\s+/g, '-')}`}
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className={`text-sm font-bold tracking-tight transition-colors ${
                        isSelected ? 'text-indigo-300' : 'text-white group-hover:text-indigo-400'
                      }`}>
                        {cat.label}
                      </h4>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded shrink-0 ${
                        isSelected ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {cat.count} Qs
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {cat.desc}
                    </p>
                  </div>
                  {isSelected && (
                    <div className="absolute right-3 bottom-3 w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={handleStartPractice}
              className="flex items-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black uppercase tracking-widest rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all cursor-pointer"
              id="start-practice-btn"
            >
              <BookOpen className="h-4 w-4" />
              Start Practice Session
            </button>
          </div>
        </div>
      )}

      {/* ACTIVE QUESTIONING VIEW */}
      {sessionState === 'active' && activeQ && (
        <div className="space-y-5" id="practice-active-screen">
          {/* Header Progress Header with PROMINENT BACK BUTTON */}
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4 flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setSessionState('setup')}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl text-xs font-bold border border-white/10 transition-colors cursor-pointer"
                title="Back to Topic Selection"
                id="back-to-topics-btn"
              >
                <ArrowLeft className="h-4 w-4 text-indigo-400" />
                <span>Back to Topics</span>
              </button>

              <div className="h-5 w-[1px] bg-white/10 hidden sm:block"></div>

              <div>
                <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">
                  {selectedCategory === 'Random40' ? 'ITIL Standard 40 Practice' : activeQ.category}
                </span>
                <div className="text-xs text-slate-300 font-bold font-mono mt-0.5">
                  Question {currentIdx + 1} of {questions.length}
                </div>
              </div>
            </div>

            {/* Micro Stats */}
            <div className="flex items-center gap-4 text-xs font-bold" id="practice-micro-stats">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Score: {score}/{answeredCount}</span>
              </div>
              <div className="text-slate-500">|</div>
              <div className="font-mono text-slate-400">
                Accuracy: {answeredCount > 0 ? Math.round((score / answeredCount) * 100) : 0}%
              </div>
            </div>
          </div>

          {/* Progress Tracker Bar */}
          <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden" id="practice-progress-bar">
            <div 
              className="bg-indigo-500 h-full transition-all duration-300"
              style={{ width: `${((currentIdx + (isSubmitted ? 1 : 0)) / questions.length) * 100}%` }}
            ></div>
          </div>

          {/* Core Question Card */}
          <div className="bg-slate-900/80 border border-white/10 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl relative overflow-hidden" id="practice-question-card">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-500/50"></div>
            
            {/* TOP ACTION BAR (RAISED NEXT / CHECK BUTTON) */}
            <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 gap-2" id="practice-top-action-bar">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevQuestion}
                  disabled={currentIdx === 0}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold border border-white/10 text-slate-300 hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer transition-colors"
                  id="practice-top-prev-btn"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Previous</span>
                </button>
              </div>

              {/* TOP RAISED NEXT & CHECK SOLUTION BUTTONS */}
              <div className="flex items-center gap-2">
                {!isSubmitted ? (
                  <button
                    disabled={selectedOption === null}
                    onClick={handleCheckAnswer}
                    className={`px-5 py-2 text-xs font-black uppercase tracking-wider rounded-xl transition-all flex items-center gap-1.5 ${
                      selectedOption !== null
                        ? 'bg-indigo-600 text-white cursor-pointer hover:bg-indigo-700 shadow-[0_0_15px_rgba(79,70,229,0.3)]'
                        : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    }`}
                    id="top-check-answer-btn"
                  >
                    Check Solution
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="flex items-center justify-center gap-1.5 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer shadow-[0_0_15px_rgba(79,70,229,0.3)] transition-all"
                    id="top-next-practice-question-btn"
                  >
                    <span>{currentIdx + 1 < questions.length ? 'Next Question' : 'View Results'}</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Question Stem */}
            <h3 className="text-lg md:text-xl font-bold text-white tracking-tight leading-relaxed">
              {activeQ.question}
            </h3>

            {/* Multiple Choice Options */}
            <div className="grid grid-cols-1 gap-3" id="practice-options-container">
              {activeQ.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrectOption = idx === activeQ.answer;

                let btnStyles = 'bg-slate-950/40 border-white/5 hover:border-white/10 hover:bg-slate-900 text-slate-300';
                
                if (isSubmitted) {
                  if (isCorrectOption) {
                    btnStyles = 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.1)]';
                  } else if (isSelected) {
                    btnStyles = 'bg-rose-500/10 border-rose-500/30 text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.1)]';
                  } else {
                    btnStyles = 'bg-slate-950/20 border-white/5 text-slate-500 opacity-60';
                  }
                } else if (isSelected) {
                  btnStyles = 'bg-indigo-600/10 border-indigo-500 text-indigo-200 shadow-[0_0_15px_rgba(99,102,241,0.1)]';
                }

                return (
                  <button
                    key={idx}
                    disabled={isSubmitted}
                    onClick={() => setSelectedOption(idx)}
                    className={`w-full text-left p-4 rounded-xl border text-xs font-semibold leading-relaxed transition-all flex items-start gap-3 cursor-pointer ${btnStyles}`}
                    id={`practice-option-${idx}`}
                  >
                    <span className={`w-5 h-5 rounded-md flex items-center justify-center font-bold text-[10px] uppercase shrink-0 ${
                      isSelected ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1">{opt}</span>

                    {isSubmitted && isCorrectOption && (
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    )}
                    {isSubmitted && isSelected && !isCorrectOption && (
                      <XCircle className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* EXPLANATION / FEEDBACK DRAWER */}
            {isSubmitted && (
              <div className="pt-6 border-t border-white/5 space-y-4 animate-in slide-in-from-top-4 duration-300" id="practice-explanation-drawer">
                <div className="bg-slate-950/50 border border-white/5 rounded-2xl p-4 md:p-5 space-y-3">
                  <div className="flex items-center gap-2 text-indigo-400">
                    <HelpCircle className="h-4 w-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">ITIL Official Guidance</span>
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed whitespace-pre-line">
                    {activeQ.explanation}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                  {/* AI Tutor Option */}
                  <button
                    onClick={() => {
                      onOpenTutor({
                        type: 'question',
                        targetId: activeQ.id,
                        contextText: activeQ.question,
                        selectedAnswerText: activeQ.options[selectedOption || 0],
                        correctAnswerText: activeQ.options[activeQ.answer],
                      });
                    }}
                    className="flex items-center gap-1.5 text-xs font-bold bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 hover:bg-indigo-500/25 px-4 py-2 rounded-xl transition-all cursor-pointer w-full sm:w-auto"
                    id="ask-ai-practice"
                  >
                    <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
                    Explain with AI Tutor
                  </button>

                  {/* Bottom Next Question Navigation */}
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                    <button
                      onClick={handlePrevQuestion}
                      disabled={currentIdx === 0}
                      className="px-4 py-2.5 rounded-xl text-xs font-bold border border-white/10 text-slate-300 hover:bg-slate-800 disabled:opacity-30 cursor-pointer transition-colors"
                    >
                      Previous
                    </button>
                    <button
                      onClick={handleNextQuestion}
                      className="flex items-center justify-center gap-1.5 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer transition-colors"
                      id="next-practice-question-btn"
                    >
                      <span>
                        {currentIdx + 1 < questions.length ? 'Next Question' : 'View Session Results'}
                      </span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Check/Submit controls before check */}
            {!isSubmitted && (
              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={handlePrevQuestion}
                  disabled={currentIdx === 0}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold border border-white/10 text-slate-300 hover:bg-slate-800 disabled:opacity-30 cursor-pointer transition-colors"
                >
                  Previous
                </button>
                <button
                  disabled={selectedOption === null}
                  onClick={handleCheckAnswer}
                  className={`px-8 py-3 text-xs font-black uppercase tracking-widest rounded-xl transition-all flex items-center gap-2 ${
                    selectedOption !== null
                      ? 'bg-indigo-600 text-white cursor-pointer hover:bg-indigo-700 shadow-[0_0_15px_rgba(79,70,229,0.3)]'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                  id="check-answer-btn"
                >
                  Check Solution
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SUMMARY RESULT VIEW */}
      {sessionState === 'summary' && (
        <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-6 md:p-10 text-center space-y-6" id="practice-summary-screen">
          <div className="w-16 h-16 bg-indigo-500/20 border border-indigo-500/30 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
            <Award className="h-8 w-8 text-indigo-400" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-black text-white font-sans tracking-tight">Practice Session Completed</h2>
            <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">
              Topic: <span className="text-indigo-400">{selectedCategory === 'All' ? 'All Syllabus Topics' : selectedCategory === 'Random40' ? 'ITIL Standard 40 Challenge' : selectedCategory}</span>
            </p>
          </div>

          {/* Large Accuracy Score Circle */}
          <div className="relative w-40 h-40 mx-auto flex items-center justify-center">
            {/* Glow background */}
            <div className="absolute inset-0 bg-indigo-500/10 blur-xl rounded-full"></div>
            
            <div className="relative w-36 h-36 rounded-full border-4 border-slate-950 flex flex-col justify-center items-center bg-slate-900/90 shadow-2xl">
              <span className="text-4xl font-mono font-black text-indigo-400">
                {questions.length > 0 ? Math.round((score / questions.length) * 100) : 0}%
              </span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">Accuracy</span>
            </div>
          </div>

          {/* Micro score metrics */}
          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto pt-2" id="practice-summary-metrics">
            <div className="p-4 bg-slate-950/40 border border-white/5 rounded-2xl">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Correct</span>
              <span className="text-xl font-mono font-bold text-emerald-400">{score}</span>
            </div>
            <div className="p-4 bg-slate-950/40 border border-white/5 rounded-2xl">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Total Questions</span>
              <span className="text-xl font-mono font-bold text-white">{questions.length}</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-4 border-t border-white/5">
            <button
              onClick={handleStartPractice}
              className="flex items-center justify-center gap-1.5 w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer transition-colors"
              id="retry-practice-btn"
            >
              <RefreshCw className="h-4 w-4" />
              Practice Again
            </button>

            <button
              onClick={() => setSessionState('setup')}
              className="flex items-center justify-center gap-1.5 w-full sm:w-auto px-6 py-3 bg-slate-950 hover:bg-slate-900 text-slate-300 border border-white/5 rounded-xl cursor-pointer transition-colors"
              id="change-topic-btn"
            >
              <ArrowLeft className="h-4 w-4 text-indigo-400" />
              Back to Topics Selection
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
