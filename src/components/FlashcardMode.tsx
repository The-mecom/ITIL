import React, { useState, useEffect } from 'react';
import { 
  Sparkles, RotateCw, CheckCircle2, Circle, HelpCircle, Shuffle, 
  ChevronLeft, ChevronRight, BookmarkCheck, Bookmark, Trash2, ArrowRightLeft 
} from 'lucide-react';
import { Flashcard, SyllabusArea, FlashcardStatus } from '../types';
import { ITIL_FLASHCARDS } from '../data/flashcards';

interface FlashcardModeProps {
  flashcardStatus: Record<string, FlashcardStatus>;
  onStatusChanged: (fcId: string, status: FlashcardStatus) => void;
  onOpenTutor: (req: any) => void;
  onResetFlashcards: () => void;
}

export default function FlashcardMode({ 
  flashcardStatus, 
  onStatusChanged, 
  onOpenTutor,
  onResetFlashcards
}: FlashcardModeProps) {
  // State
  const [selectedCategory, setSelectedCategory] = useState<SyllabusArea | 'All'>('All');
  const [deck, setDeck] = useState<Flashcard[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [resetConfirm, setResetConfirm] = useState(false);

  // Re-build deck when category changes
  useEffect(() => {
    let filtered = [...ITIL_FLASHCARDS];
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(fc => fc.category === selectedCategory);
    }
    setDeck(filtered);
    setCurrentIdx(0);
    setIsFlipped(false);
  }, [selectedCategory]);

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIdx((prev) => (prev + 1) % deck.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIdx((prev) => (prev - 1 + deck.length) % deck.length);
    }, 150);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    setTimeout(() => {
      const shuffled = [...deck].sort(() => Math.random() - 0.5);
      setDeck(shuffled);
      setCurrentIdx(0);
    }, 150);
  };

  const handleStatusChange = (status: FlashcardStatus) => {
    if (deck.length === 0) return;
    const currentFc = deck[currentIdx];
    onStatusChanged(currentFc.id, status);
  };

  const categories: (SyllabusArea | 'All')[] = [
    'All',
    'Key Concepts of Service Management',
    'The 7 Guiding Principles',
    'The Four Dimensions of Service Management',
    'The Service Value System & Service Value Chain',
    'Key ITIL Practices'
  ];

  const activeCard = deck[currentIdx];

  // Calculate deck mastery progress
  const deckStats = deck.reduce(
    (acc, card) => {
      const status = flashcardStatus[card.id] || 'new';
      acc[status]++;
      return acc;
    },
    { mastered: 0, learning: 0, new: 0 }
  );

  return (
    <div className="w-full max-w-5xl mx-auto animate-in fade-in" id="flashcards-mode-container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6" id="flashcards-layout">
        {/* Category Sidebar Selector */}
        <div className="md:col-span-1 space-y-4" id="flashcards-sidebar">
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4 space-y-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500/50"></div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Flashcard Decks
            </h3>
            <div className="space-y-1.5" id="deck-categories-list">
              {categories.map((cat) => {
                const count = cat === 'All' 
                  ? ITIL_FLASHCARDS.length 
                  : ITIL_FLASHCARDS.filter(fc => fc.category === cat).length;
                const isSelected = selectedCategory === cat;

                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold leading-snug transition-all flex justify-between items-center cursor-pointer ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-[0_0_12px_rgba(99,102,241,0.4)] border border-indigo-500/30'
                        : 'text-slate-400 bg-slate-950/40 border border-white/5 hover:border-white/10 hover:text-white'
                    }`}
                    id={`deck-category-${cat.replace(/\s+/g, '-')}`}
                  >
                    <span className="truncate pr-2">{cat === 'All' ? 'Complete syllabus' : cat}</span>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                      isSelected ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-500'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="border-t border-white/5 pt-4" id="deck-reset-action">
              <button
                onClick={() => {
                  if (resetConfirm) {
                    onResetFlashcards();
                    setResetConfirm(false);
                  } else {
                    setResetConfirm(true);
                    setTimeout(() => setResetConfirm(false), 3000);
                  }
                }}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors border border-dashed ${
                  resetConfirm 
                    ? 'text-white bg-rose-600 border-rose-500 animate-pulse' 
                    : 'text-rose-400 hover:bg-rose-500/10 border-rose-500/10 hover:border-rose-500/30'
                }`}
                id="reset-flashcards-status-btn"
              >
                <Trash2 className="h-3.5 w-3.5 animate-bounce" />
                {resetConfirm ? "Click Again to Confirm Reset" : "Reset Flashcard States"}
              </button>
            </div>
          </div>
        </div>

        {/* Flashcard Player Area */}
        <div className="md:col-span-3 space-y-5" id="flashcards-player-area">
          {deck.length > 0 && activeCard ? (
            <div className="space-y-5">
              {/* Deck Progress Metrics */}
              <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4 flex flex-wrap justify-between items-center gap-3" id="deck-progress-bar">
                <div className="flex gap-4 text-xs font-bold">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>{deckStats.mastered} Mastered</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-amber-400">
                    <RotateCw className="h-4 w-4" />
                    <span>{deckStats.learning} Learning</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Circle className="h-4 w-4" />
                    <span>{deckStats.new} New</span>
                  </div>
                </div>

                <div className="text-xs text-slate-400 font-medium" id="deck-counter-text">
                  Card {currentIdx + 1} of {deck.length}
                </div>
              </div>

              {/* 3D-Flipping Card Container */}
              <div 
                onClick={() => setIsFlipped(!isFlipped)}
                className="perspective-1000 cursor-pointer h-[280px] w-full"
                id="flashcard-interactive-box"
              >
                <div className={`relative w-full h-full text-center transition-transform duration-500 transform-style-3d ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}>
                  {/* FRONT SIDE (Term) */}
                  <div className={`absolute w-full h-full backface-hidden bg-slate-900/80 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col justify-between transition-all duration-300 ${
                    isFlipped ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100 scale-100'
                  }`} id="flashcard-front">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
                    <div className="text-left flex justify-between items-start">
                      <span className="text-[9px] font-bold text-indigo-300 uppercase tracking-widest bg-indigo-500/20 px-2.5 py-1 rounded border border-indigo-500/20">
                        {activeCard.category}
                      </span>
                      <span className="text-[9px] text-slate-400 font-bold bg-slate-950 px-2 py-1 rounded flex items-center gap-1">
                        <ArrowRightLeft className="h-3 w-3" />
                        Click to Flip
                      </span>
                    </div>

                    <div className="my-auto py-4">
                      <h2 className="text-2xl md:text-3xl font-black text-white font-sans tracking-tight">
                        {activeCard.term}
                      </h2>
                    </div>

                    <div className="flex justify-between items-center text-xs text-slate-400 font-medium">
                      <span>Status: <span className={`font-bold capitalize ${
                        (flashcardStatus[activeCard.id] || 'new') === 'mastered' ? 'text-emerald-400' : 
                        (flashcardStatus[activeCard.id] || 'new') === 'learning' ? 'text-amber-400' : 'text-slate-500'
                      }`}>{flashcardStatus[activeCard.id] || 'new'}</span></span>
                      <span className="flex items-center gap-1 text-indigo-400 font-bold text-xs uppercase tracking-wider">
                        Flip Definition
                        <RotateCw className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* BACK SIDE (Definition & Example) */}
                  <div 
                    className={`absolute w-full h-full backface-hidden bg-slate-900/90 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col justify-between rotate-y-180 transition-all duration-300 ${
                      !isFlipped ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100 scale-100'
                    }`} 
                    id="flashcard-back" 
                    onClick={(e) => {
                      e.stopPropagation();
                      // Clicking the back card should flip it back, except on interactive elements
                      const isInteractive = (e.target as HTMLElement).closest('button, #flashcard-back-scrollable');
                      if (!isInteractive) {
                        setIsFlipped(false);
                      }
                    }}
                  >
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500"></div>
                    <div className="text-left flex justify-between items-start border-b border-white/5 pb-2.5">
                      <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                        Definition & Example
                      </span>
                      <button 
                        onClick={() => setIsFlipped(false)}
                        className="text-[9px] font-bold text-slate-400 hover:text-white bg-slate-950 px-2 py-1 rounded border border-white/5 flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <ArrowRightLeft className="h-3 w-3" />
                        Back to Term
                      </button>
                    </div>

                    {/* Content Section (Scrollable on small heights) */}
                    <div className="overflow-y-auto text-left py-3 space-y-3 flex-1" id="flashcard-back-scrollable">
                      <div className="space-y-1">
                        <h4 className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Concept Definition</h4>
                        <p className="text-sm text-slate-100 font-light leading-relaxed">
                          {activeCard.definition}
                        </p>
                      </div>

                      <div className="bg-indigo-950/40 rounded-xl p-3 border border-indigo-500/10 text-xs">
                        <p className="font-bold text-indigo-300 uppercase tracking-wider text-[9px] mb-1">Real-World Scenario</p>
                        <p className="text-indigo-200 leading-relaxed italic font-light">"{activeCard.example}"</p>
                      </div>
                    </div>

                    {/* Actions and Status Bar */}
                    <div className="flex justify-between items-center text-xs text-slate-500 pt-2 border-t border-white/5">
                      <span>Mark mastery status below</span>
                      <button
                        onClick={() => {
                          onOpenTutor({
                            type: 'flashcard',
                            targetId: activeCard.term,
                            contextText: activeCard.category,
                            correctAnswerText: activeCard.definition,
                          });
                        }}
                        className="flex items-center gap-1.5 text-xs font-bold bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/30 px-3 py-1.5 rounded-lg transition-all cursor-pointer"
                        id="ask-ai-flashcard"
                      >
                        <Sparkles className="h-3.5 w-3.5 text-indigo-400 animate-pulse" />
                        AI Coach Explain
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Controls & Mastery Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" id="flashcard-controls-grid">
                {/* 1. Mastery Sorters */}
                <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4 flex justify-around items-center sm:col-span-2 gap-2" id="mastery-markers">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pr-1 shrink-0">Study State:</span>
                  
                  <button
                    onClick={() => handleStatusChange('new')}
                    className={`flex-1 max-w-[100px] text-xs font-bold py-2 rounded-xl border transition-all cursor-pointer ${
                      (flashcardStatus[activeCard.id] || 'new') === 'new'
                        ? 'bg-slate-800 border-white/10 text-white shadow-sm'
                        : 'border-white/5 bg-slate-950/40 text-slate-500 hover:text-slate-300'
                    }`}
                    id="mark-status-new"
                  >
                    New
                  </button>
                  <button
                    onClick={() => handleStatusChange('learning')}
                    className={`flex-1 max-w-[100px] text-xs font-bold py-2 rounded-xl border transition-all cursor-pointer ${
                      (flashcardStatus[activeCard.id] || 'new') === 'learning'
                        ? 'bg-amber-500/10 border-amber-500/30 text-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.15)]'
                        : 'border-white/5 bg-slate-950/40 text-slate-500 hover:text-slate-300'
                    }`}
                    id="mark-status-learning"
                  >
                    Learning
                  </button>
                  <button
                    onClick={() => handleStatusChange('mastered')}
                    className={`flex-1 max-w-[100px] text-xs font-bold py-2 rounded-xl border transition-all cursor-pointer ${
                      (flashcardStatus[activeCard.id] || 'new') === 'mastered'
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.15)]'
                        : 'border-white/5 bg-slate-950/40 text-slate-500 hover:text-slate-300'
                    }`}
                    id="mark-status-mastered"
                  >
                    Mastered
                  </button>
                </div>

                {/* 2. Playlist Nav */}
                <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4 flex justify-between items-center gap-2" id="playlist-nav">
                  <button
                    onClick={handlePrev}
                    className="p-2 border border-white/5 bg-slate-950/40 hover:border-white/10 text-slate-400 hover:text-white rounded-xl cursor-pointer transition-colors"
                    aria-label="Previous card"
                    id="prev-flashcard"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    onClick={handleShuffle}
                    className="flex items-center gap-1.5 text-xs font-bold text-indigo-300 hover:bg-indigo-500/15 px-3 py-2 rounded-xl cursor-pointer transition-all border border-indigo-500/10 hover:border-indigo-500/20"
                    id="shuffle-flashcards"
                  >
                    <Shuffle className="h-4 w-4 text-indigo-400" />
                    Shuffle
                  </button>

                  <button
                    onClick={handleNext}
                    className="p-2 border border-white/5 bg-slate-950/40 hover:border-white/10 text-slate-400 hover:text-white rounded-xl cursor-pointer transition-colors"
                    aria-label="Next card"
                    id="next-flashcard"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-12 text-center space-y-4" id="empty-deck">
              <HelpCircle className="h-12 w-12 text-slate-700 mx-auto" />
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">Deck is Empty</h3>
                <p className="text-xs text-slate-500">There are no flashcards available matching your active filter criteria.</p>
              </div>
              <button 
                onClick={() => setSelectedCategory('All')} 
                className="text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl shadow-[0_0_15px_rgba(79,70,229,0.3)] transition-all cursor-pointer animate-pulse"
                id="empty-deck-reset"
              >
                Show All Flashcards
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
