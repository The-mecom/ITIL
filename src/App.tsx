import React, { useState, useEffect } from 'react';
import { 
  Trophy, BookOpen, BarChart3, HelpCircle, Sparkles, AlertCircle, 
  Home, Shield, Flame, GraduationCap, Sun, Moon, Tv
} from 'lucide-react';

import ExamMode from './components/ExamMode';
import PracticeMode from './components/PracticeMode';
import FlashcardMode from './components/FlashcardMode';
import ProgressTracker from './components/ProgressTracker';
import AITutor from './components/AITutor';
import Dashboard from './components/Dashboard';

import { UserProgress, ExplainRequest, FlashcardStatus, ExamAttempt } from './types';

export default function App() {
  // Navigation: Default to dashboard
  const [activeTab, setActiveTab] = useState<'dashboard' | 'exam' | 'practice' | 'flashcard' | 'tracker'>('dashboard');

  // Theme: Dark mode default, toggleable to Light mode
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('itil_v4_theme') as 'dark' | 'light') || 'dark';
  });

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('itil_v4_theme', nextTheme);
  };

  // Presentation Mode: Projector / High-Visibility Classroom Mode
  const [presentationMode, setPresentationMode] = useState<boolean>(() => {
    return localStorage.getItem('itil_v4_presentation') === 'true';
  });

  const togglePresentationMode = () => {
    setPresentationMode(prev => {
      const next = !prev;
      localStorage.setItem('itil_v4_presentation', String(next));
      return next;
    });
  };

  // AI Tutor Integration
  const [tutorOpen, setTutorOpen] = useState(false);
  const [tutorRequest, setTutorRequest] = useState<ExplainRequest | null>(null);

  // State tracker for user study metrics initialized directly from localStorage
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('itil_v4_progress');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          attempts: parsed.attempts || [],
          flashcardStatus: parsed.flashcardStatus || {},
          streak: parsed.streak || 1,
          lastActive: parsed.lastActive || new Date().toISOString(),
          totalStudyTime: parsed.totalStudyTime || 0,
        };
      } catch (e) {
        // Fallback
      }
    }
    return {
      attempts: [],
      flashcardStatus: {},
      streak: 1,
      lastActive: new Date().toISOString(),
      totalStudyTime: 0,
    };
  });

  // Validate & refresh daily study streak on load
  useEffect(() => {
    const today = new Date().toDateString();
    const lastActiveDate = progress.lastActive ? new Date(progress.lastActive).toDateString() : '';
    
    if (!lastActiveDate) {
      const updated = { ...progress, lastActive: new Date().toISOString() };
      setProgress(updated);
      localStorage.setItem('itil_v4_progress', JSON.stringify(updated));
    } else if (today !== lastActiveDate) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toDateString();
      
      let newStreak = progress.streak;
      if (lastActiveDate === yesterdayStr) {
        newStreak += 1;
      } else {
        newStreak = 1;
      }
      
      const updated = {
        ...progress,
        streak: newStreak,
        lastActive: new Date().toISOString(),
      };
      setProgress(updated);
      localStorage.setItem('itil_v4_progress', JSON.stringify(updated));
    }
  }, []);

  const saveProgress = (updatedProgress: UserProgress) => {
    setProgress(updatedProgress);
    localStorage.setItem('itil_v4_progress', JSON.stringify(updatedProgress));
  };

  // Sync handlers
  const handleAttemptCompleted = (attempt: ExamAttempt) => {
    const updated = {
      ...progress,
      attempts: [...progress.attempts, attempt],
      lastActive: new Date().toISOString(),
    };
    saveProgress(updated);
  };

  const handleFlashcardStatusChanged = (fcId: string, status: FlashcardStatus) => {
    const updated = {
      ...progress,
      flashcardStatus: {
        ...progress.flashcardStatus,
        [fcId]: status,
      },
      lastActive: new Date().toISOString(),
    };
    saveProgress(updated);
  };

  const handleResetFlashcards = () => {
    const updated = {
      ...progress,
      flashcardStatus: {},
      lastActive: new Date().toISOString(),
    };
    saveProgress(updated);
  };

  const handleClearHistory = () => {
    const updated = {
      ...progress,
      attempts: [],
      lastActive: new Date().toISOString(),
    };
    saveProgress(updated);
  };

  const handleOpenTutor = (req: ExplainRequest) => {
    setTutorRequest(req);
    setTutorOpen(true);
  };

  return (
    <div className={`min-h-screen font-sans flex flex-col overflow-x-hidden ${theme === 'light' ? 'theme-light bg-slate-100 text-slate-900' : 'bg-[#020617] text-slate-100'} ${presentationMode ? 'presentation-mode' : ''}`} id="app-viewport">
      {/* Immersive Theme Header Banner */}
      <header className="flex flex-col md:flex-row items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/40 backdrop-blur-md gap-4 shrink-0" id="app-header">
        {/* Brand identity with neon shield highlight */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)]">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight text-white flex items-center gap-2">
              ITIL V4 <span className="text-indigo-400">MAESTRO</span>
              {presentationMode && (
                <span className="text-[10px] bg-amber-500 text-slate-950 px-2 py-0.5 rounded font-black tracking-widest uppercase shadow">
                  PROJ VIEW
                </span>
              )}
            </h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">Strategic Exam Simulation</p>
          </div>
        </div>

        {/* Floating pill navigation */}
        <nav className="flex flex-wrap justify-center gap-1 bg-slate-950 p-1 rounded-full border border-white/5" id="navigation-bar">
          <button 
            onClick={() => { setActiveTab('dashboard'); setTutorOpen(false); }}
            className={`px-4 py-2 rounded-full text-[11px] font-bold transition-all uppercase tracking-wider cursor-pointer ${
              activeTab === 'dashboard'
                ? 'bg-indigo-600 text-white shadow-[0_0_10px_rgba(79,70,229,0.4)] border border-indigo-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
            id="tab-btn-dashboard"
          >
            Dashboard
          </button>
          <button 
            onClick={() => { setActiveTab('exam'); setTutorOpen(false); }}
            className={`px-4 py-2 rounded-full text-[11px] font-bold transition-all uppercase tracking-wider cursor-pointer ${
              activeTab === 'exam'
                ? 'bg-indigo-600 text-white shadow-[0_0_10px_rgba(79,70,229,0.4)] border border-indigo-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
            id="tab-btn-exam"
          >
            Exam Mode
          </button>
          <button 
            onClick={() => { setActiveTab('practice'); setTutorOpen(false); }}
            className={`px-4 py-2 rounded-full text-[11px] font-bold transition-all uppercase tracking-wider cursor-pointer ${
              activeTab === 'practice'
                ? 'bg-indigo-600 text-white shadow-[0_0_10px_rgba(79,70,229,0.4)] border border-indigo-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
            id="tab-btn-practice"
          >
            Topic Practice
          </button>
          <button 
            onClick={() => { setActiveTab('flashcard'); setTutorOpen(false); }}
            className={`px-4 py-2 rounded-full text-[11px] font-bold transition-all uppercase tracking-wider cursor-pointer ${
              activeTab === 'flashcard'
                ? 'bg-indigo-600 text-white shadow-[0_0_10px_rgba(79,70,229,0.4)] border border-indigo-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
            id="tab-btn-flashcards"
          >
            Flashcards
          </button>
          <button 
            onClick={() => { setActiveTab('tracker'); setTutorOpen(false); }}
            className={`px-4 py-2 rounded-full text-[11px] font-bold transition-all uppercase tracking-wider cursor-pointer ${
              activeTab === 'tracker'
                ? 'bg-indigo-600 text-white shadow-[0_0_10px_rgba(79,70,229,0.4)] border border-indigo-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
            id="tab-btn-tracker"
          >
            Analytics
          </button>
        </nav>

        {/* Dynamic Engagement telemetry count & Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-4" id="telemetry-bar">
          {/* Presentation Mode Toggle Button */}
          <button
            onClick={togglePresentationMode}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all cursor-pointer font-bold text-xs ${
              presentationMode
                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.5)] font-extrabold'
                : 'border-white/10 bg-slate-950/60 hover:bg-slate-800 text-slate-300'
            }`}
            title="Toggle Projector Presentation Mode (Larger Text & Maximum High-Contrast Visibility)"
            id="presentation-toggle-btn"
          >
            <Tv className={`w-4 h-4 ${presentationMode ? 'text-slate-950' : 'text-amber-400'}`} />
            <span className="hidden sm:inline">{presentationMode ? 'Projector ON' : 'Presentation'}</span>
          </button>

          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-slate-950/60 hover:bg-slate-800 text-xs font-bold transition-colors cursor-pointer"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            id="theme-toggle-btn"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-4 h-4 text-amber-400" />
                <span className="hidden sm:inline text-amber-300">Light</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-indigo-500" />
                <span className="hidden sm:inline text-indigo-600">Dark</span>
              </>
            )}
          </button>

          <div className="text-right hidden sm:block">
            <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Daily Streak</p>
            <p className="text-sm font-mono font-bold text-orange-400 flex items-center justify-end gap-1">
              <Flame className="w-3.5 h-3.5 fill-current" />
              {progress.streak} {progress.streak === 1 ? 'Day' : 'Days'}
            </p>
          </div>
          
          <div className="flex items-center gap-2 px-3.5 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-xs font-semibold">
            <GraduationCap className="w-4 h-4 text-indigo-400" />
            <span className="hidden md:inline">Candidate Portal</span>
          </div>
        </div>
      </header>

      {/* Main Study Arena with active route panel rendering */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto" id="main-content-scroll">
        {presentationMode && (
          <div className="mb-4 p-3 bg-amber-500/15 border-2 border-amber-500/40 rounded-xl flex items-center justify-between gap-4 text-amber-800 dark:text-amber-200 font-semibold text-xs md:text-sm shadow-md" id="presentation-mode-banner">
            <div className="flex items-center gap-2">
              <Tv className="w-5 h-5 text-amber-500 shrink-0" />
              <span><strong>Projector Presentation Mode Active</strong> — Text size, contrast, and line spacing are optimized for distance reading & lecture displays.</span>
            </div>
            <button 
              onClick={togglePresentationMode}
              className="px-3 py-1 bg-amber-500 text-slate-950 hover:bg-amber-400 font-bold rounded-lg text-xs cursor-pointer transition-colors shrink-0"
            >
              Exit Mode
            </button>
          </div>
        )}

        {activeTab === 'dashboard' && (
          <Dashboard 
            progress={progress} 
            onNavigateToMode={(mode) => setActiveTab(mode)} 
          />
        )}

        {activeTab === 'exam' && (
          <ExamMode 
            onAttemptCompleted={handleAttemptCompleted} 
            onOpenTutor={handleOpenTutor} 
            onNavigateToMode={(mode) => setActiveTab(mode)}
          />
        )}

        {activeTab === 'practice' && (
          <PracticeMode 
            onOpenTutor={handleOpenTutor}
          />
        )}

        {activeTab === 'flashcard' && (
          <FlashcardMode 
            flashcardStatus={progress.flashcardStatus} 
            onStatusChanged={handleFlashcardStatusChanged} 
            onOpenTutor={handleOpenTutor}
            onResetFlashcards={handleResetFlashcards}
          />
        )}

        {activeTab === 'tracker' && (
          <ProgressTracker 
            progress={progress} 
            onClearHistory={handleClearHistory} 
            onNavigateToMode={(mode) => setActiveTab(mode)}
          />
        )}
      </main>

      {/* Immersive AI side drawer component */}
      <AITutor 
        isOpen={tutorOpen} 
        onClose={() => setTutorOpen(false)} 
        request={tutorRequest} 
      />

      {/* Footer conforming to official simulation metrics */}
      <footer className="px-6 py-3 bg-slate-950/80 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[9px] tracking-widest text-slate-500 uppercase font-semibold gap-2 shrink-0" id="app-footer">
        <div>
          MODE: <span className="text-indigo-400">
            {activeTab === 'dashboard' ? 'PERSONALIZED STUDY INSIGHTS' : 
             activeTab === 'exam' ? 'FULL EXAM SIMULATION (TIME LIMIT: 60M)' : 
             activeTab === 'practice' ? 'IMMEDIATE FEEDBACK PRACTICE' : 
             activeTab === 'flashcard' ? 'FLASHCARD SYLLABUS MEMORIZATION' : 'STUDENT READINESS INDEX'}
          </span>
        </div>
        <div className="flex gap-6">
          <span>ITIL FOUNDATION V4.2.1</span>
          <span className="text-indigo-400/80">LOCAL SESSION SAVED</span>
        </div>
      </footer>
    </div>
  );
}
