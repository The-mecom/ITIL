import React from 'react';
import { UserProgress } from '../types';
import { ITIL_FLASHCARDS } from '../data/flashcards';
import { 
  Trophy, BookOpen, BarChart3, HelpCircle, Sparkles, Shield, Flame, 
  ArrowRight, Clock, CheckCircle, Brain, Target, Compass, GraduationCap 
} from 'lucide-react';
import { motion } from 'motion/react';

interface DashboardProps {
  progress: UserProgress;
  onNavigateToMode: (mode: 'exam' | 'practice' | 'flashcard' | 'tracker') => void;
}

export default function Dashboard({ progress, onNavigateToMode }: DashboardProps) {
  const { attempts, flashcardStatus, streak, lastActive } = progress;

  // Stats computation
  const totalAttempts = attempts.length;
  const bestScore = totalAttempts > 0 ? Math.max(...attempts.map(a => a.score)) : 0;
  const bestScorePercent = Math.round((bestScore / 40) * 100);

  const totalTerms = ITIL_FLASHCARDS.length;
  const masteredTerms = Object.values(flashcardStatus).filter(s => s === 'mastered').length;
  const learningTerms = Object.values(flashcardStatus).filter(s => s === 'learning').length;
  const termMasteryPercent = totalTerms > 0 ? Math.round((masteredTerms / totalTerms) * 100) : 0;

  // Streak status and milestone calculation
  const nextStreakMilestone = streak < 3 ? 3 : streak < 7 ? 7 : streak < 14 ? 14 : streak + 5;
  const streakProgressPercent = Math.min(100, Math.round((streak / nextStreakMilestone) * 100));

  // Determine a personalized greeting based on time of day
  const getGreeting = () => {
    const hrs = new Date().getHours();
    if (hrs < 12) return 'Good Morning';
    if (hrs < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  // Syllabus dimensions completed vs remaining
  const studiedCategoriesCount = new Set(attempts.flatMap(a => Object.keys(a.categoryScores))).size;

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 animate-in fade-in" id="personalized-dashboard">
      {/* 1. Welcomer Banner & SVS Co-creation message */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-indigo-950/20 border border-white/10 rounded-3xl p-6 md:p-8" id="dash-welcome-banner">
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-indigo-500/10 blur-[80px] pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>

        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-2 border-indigo-500/40 p-0.5 shadow-[0_0_15px_rgba(99,102,241,0.25)] flex items-center justify-center bg-indigo-950/80">
                <GraduationCap className="w-8 h-8 text-indigo-400" />
              </div>
              <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-slate-950 rounded-full flex items-center justify-center" title="Session active">
                <Shield className="w-2.5 h-2.5 text-white" />
              </span>
            </div>

            <div className="space-y-1">
              <p className="text-xs text-indigo-400 font-bold uppercase tracking-wider">{getGreeting()}, Candidate</p>
              <h2 className="text-2xl font-black text-white tracking-tight">
                ITIL Candidate
              </h2>
              <p className="text-xs text-slate-400 font-light max-w-md">
                Co-creating study value. Your personalized performance stats are saved locally on your device.
              </p>
            </div>
          </div>

          <div className="flex gap-2.5 shrink-0 w-full md:w-auto justify-center">
            <div className="px-4 py-2.5 bg-slate-950/60 border border-white/5 rounded-xl text-center">
              <span className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest">Syllabus Areas</span>
              <span className="text-lg font-bold text-indigo-400 font-mono">{studiedCategoriesCount}/5</span>
            </div>
            <div className="px-4 py-2.5 bg-slate-950/60 border border-white/5 rounded-xl text-center">
              <span className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest">Best Sim</span>
              <span className="text-lg font-bold text-emerald-400 font-mono">{bestScorePercent}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Interactive Streaks Tracker & Study Engine Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="dash-bento-row">
        
        {/* Streak Flame Card */}
        <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden" id="streak-milestone-card">
          <div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Daily Streak Status</span>
              <span className="text-xs font-mono font-bold text-orange-400 flex items-center gap-1 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
                <Flame className="w-3.5 h-3.5 fill-current" />
                {streak} {streak === 1 ? 'Day' : 'Days'}
              </span>
            </div>

            <div className="flex items-center gap-4 py-1">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 animate-pulse">
                <Flame className="w-7 h-7 fill-current" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Daily Streak Active</h4>
                <p className="text-[11px] text-slate-400 leading-tight">Keep answering questions daily to safeguard your progress streak.</p>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                <span>Streak Milestone</span>
                <span>{streak}/{nextStreakMilestone} Days</span>
              </div>
              <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-white/5">
                <div 
                  className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-all duration-1000"
                  style={{ width: `${streakProgressPercent}%` }}
                />
              </div>
            </div>
          </div>

          <div className="text-[10px] text-slate-500 mt-4 pt-3 border-t border-white/5 flex justify-between items-center">
            <span>Last activity checked</span>
            <span className="font-mono text-slate-400">{lastActive ? new Date(lastActive).toLocaleDateString() : 'Today'}</span>
          </div>
        </div>

        {/* Study metrics summaries */}
        <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden" id="dash-quick-metrics">
          <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
          
          <div className="space-y-4">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Study Readiness</span>
            
            <div className="grid grid-cols-2 gap-3" id="dash-counters-grid">
              <div className="p-3 bg-slate-950/40 rounded-xl border border-white/5 text-center">
                <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest">Completed Exams</p>
                <p className="text-2xl font-bold text-white mt-1 font-mono">{totalAttempts}</p>
              </div>
              <div className="p-3 bg-slate-950/40 rounded-xl border border-white/5 text-center">
                <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest">Terminology Rate</p>
                <p className="text-2xl font-bold text-white mt-1 font-mono">{termMasteryPercent}%</p>
              </div>
            </div>

            <div className="p-3 bg-slate-950/60 border border-white/5 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-medium text-slate-300">Reviewed Terms</span>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400">{masteredTerms + learningTerms} / {totalTerms}</span>
            </div>
          </div>

          <div className="text-[10px] text-slate-500 mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
            <span>Storage Mode</span>
            <span className="text-indigo-400 font-bold uppercase tracking-widest">Local Session Saved</span>
          </div>
        </div>

        {/* Dynamic Study Recommendation Advisor */}
        <div className="bg-gradient-to-br from-indigo-950/20 to-slate-900/90 border border-indigo-500/20 rounded-2xl p-6 flex flex-col justify-between" id="dash-advisor-card">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 bg-indigo-600/20 rounded-lg text-indigo-400 border border-indigo-500/20">
                <Sparkles className="h-4 w-4" />
              </div>
              <h3 className="text-xs font-bold text-indigo-300 uppercase tracking-widest">
                Advisor Recommendation
              </h3>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-light">
              {totalAttempts === 0 ? (
                <>Welcome! The best way to start is reviewing the <strong className="text-indigo-300 font-semibold">ITIL Flashcards</strong> to master definitions. This counts for 40% of the syllabus.</>
              ) : termMasteryPercent < 40 ? (
                <>Improve your foundation: Complete more <strong className="text-indigo-300 font-semibold">Flashcards</strong> to secure correct service management definitions before your next simulated exam.</>
              ) : (
                <>Excellent groundwork. Challenge your readiness levels with a comprehensive, full-fidelity <strong className="text-indigo-300 font-semibold">Simulated Exam</strong> under 60-minute time limits.</>
              )}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[10px] text-slate-400">
            <span>Recommended focus:</span>
            <span className="text-white font-bold uppercase tracking-wider">
              {totalAttempts === 0 ? 'Review Flashcards' : termMasteryPercent < 40 ? 'Syllabus Terms' : 'Simulate Exam'}
            </span>
          </div>
        </div>

      </div>

      {/* 3. Main Study Modes Portal Links */}
      <div className="space-y-4" id="study-center-routes">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Study Center Sections</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="study-center-grid">
          {/* Practice Exam Mode */}
          <div 
            onClick={() => onNavigateToMode('exam')}
            className="group relative bg-slate-900/60 border border-white/10 hover:border-indigo-500/30 rounded-2xl p-5 flex items-start gap-4 transition-all duration-200 cursor-pointer hover:bg-slate-900 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)] hover:scale-[1.01]"
            id="mode-card-exam"
          >
            <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-200">
              <Trophy className="w-5 h-5" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">Exam Simulator</h4>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 transform group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-xs text-slate-400 leading-normal font-light">40 high-fidelity questions with standard 65% passing limits under 60-minute counters.</p>
              <div className="flex gap-2.5 pt-1 text-[9px] text-indigo-400 uppercase tracking-wider font-semibold">
                <span>SIMULATION BASED</span>
                <span>•</span>
                <span>40 QUESTIONS</span>
              </div>
            </div>
          </div>

          {/* Practice Topics */}
          <div 
            onClick={() => onNavigateToMode('practice')}
            className="group relative bg-slate-900/60 border border-white/10 hover:border-indigo-500/30 rounded-2xl p-5 flex items-start gap-4 transition-all duration-200 cursor-pointer hover:bg-slate-900 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)] hover:scale-[1.01]"
            id="mode-card-practice"
          >
            <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-200">
              <Compass className="w-5 h-5" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">Topic Practice</h4>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 transform group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-xs text-slate-400 leading-normal font-light">Focus on individual syllabus areas with immediate score feedback and on-demand AI coaching.</p>
              <div className="flex gap-2.5 pt-1 text-[9px] text-indigo-400 uppercase tracking-wider font-semibold">
                <span>IMMEDIATE FEEDBACK</span>
                <span>•</span>
                <span>BY SUBJECT AREA</span>
              </div>
            </div>
          </div>

          {/* Flashcards */}
          <div 
            onClick={() => onNavigateToMode('flashcard')}
            className="group relative bg-slate-900/60 border border-white/10 hover:border-indigo-500/30 rounded-2xl p-5 flex items-start gap-4 transition-all duration-200 cursor-pointer hover:bg-slate-900 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)] hover:scale-[1.01]"
            id="mode-card-flashcards"
          >
            <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-200">
              <Brain className="w-5 h-5" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">Interactive Flashcards</h4>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 transform group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-xs text-slate-400 leading-normal font-light">Review fundamental terminology to secure the 40% of standard recall questions in the syllabus.</p>
              <div className="flex gap-2.5 pt-1 text-[9px] text-indigo-400 uppercase tracking-wider font-semibold">
                <span>MEMORY RETENTION</span>
                <span>•</span>
                <span>SPACED RECALL</span>
              </div>
            </div>
          </div>

          {/* Progress & Charts */}
          <div 
            onClick={() => onNavigateToMode('tracker')}
            className="group relative bg-slate-900/60 border border-white/10 hover:border-indigo-500/30 rounded-2xl p-5 flex items-start gap-4 transition-all duration-200 cursor-pointer hover:bg-slate-900 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)] hover:scale-[1.01]"
            id="mode-card-tracker"
          >
            <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-200">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">My Study Analytics</h4>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 transform group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-xs text-slate-400 leading-normal font-light">Examine historical progress charts, performance progression lines, and detailed syllabus readiness maps.</p>
              <div className="flex gap-2.5 pt-1 text-[9px] text-indigo-400 uppercase tracking-wider font-semibold">
                <span>Syllabus map</span>
                <span>•</span>
                <span>readiness gauge</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
