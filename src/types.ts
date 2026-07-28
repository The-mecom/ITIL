export type SyllabusArea =
  | 'Key Concepts of Service Management'
  | 'The 7 Guiding Principles'
  | 'The Four Dimensions of Service Management'
  | 'The Service Value System & Service Value Chain'
  | 'Key ITIL Practices';

export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number; // Index (0 to 3) of the correct option
  category: SyllabusArea;
  explanation: string;
}

export interface Flashcard {
  id: string;
  term: string;
  definition: string;
  category: SyllabusArea;
  example: string;
}

export type FlashcardStatus = 'new' | 'learning' | 'mastered';

export interface ExamAttempt {
  id: string;
  date: string;
  score: number;
  totalQuestions: number;
  duration: number; // in seconds
  categoryScores: Record<string, { correct: number; total: number }>;
  userAnswers: Record<number, number>; // questionId -> selectedOptionIndex
}

export interface UserProgress {
  attempts: ExamAttempt[];
  flashcardStatus: Record<string, FlashcardStatus>;
  streak: number;
  lastActive: string; // ISO date string
  totalStudyTime: number; // in seconds
}

export interface ExplainRequest {
  type: 'question' | 'flashcard';
  targetId: string | number;
  contextText: string;
  selectedAnswerText?: string;
  correctAnswerText?: string;
  additionalQuery?: string;
}

export interface ExplainResponse {
  explanation: string;
  keyTakeaway: string;
  mnemonics?: string;
}
