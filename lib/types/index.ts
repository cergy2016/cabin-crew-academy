// ICAO Levels
export type ICAOLevel = 1 | 2 | 3 | 4 | 5 | 6;

// User Profile
export interface UserProfile {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  level: number;
  xp: number;
  streak: number;
  totalHoursStudied: number;
  targetAirline?: string;
  createdAt: string;
}

// Lesson Structure
export interface LessonObjective {
  id: string;
  description: string;
  type: 'speaking' | 'listening' | 'reading' | 'writing' | 'grammar' | 'vocabulary';
}

export interface AudioSegment {
  id: string;
  text: string;
  audioUrl: string;
  audioFilePath?: string; // for local MP3 files
  durationSeconds: number;
  speaker?: 'pilot' | 'crew' | 'passenger' | 'instructor' | 'native';
  transcription?: string;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  context: string;
  audioSegments: AudioSegment[];
  vocabulary: { word: string; definition: string; pronunciation?: string }[];
}

export interface ExerciseOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation?: string;
}

export interface Exercise {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'drag-drop' | 'matching' | 'ordering' | 'speaking' | 'writing' | 'listening-dictation';
  question: string;
  audio?: AudioSegment;
  options?: ExerciseOption[];
  correctAnswer?: string;
  explanation?: string;
  points: number;
}

export interface Quiz {
  id: string;
  title: string;
  exercises: Exercise[];
  passingScore: number;
  timeLimit?: number; // seconds
}

export interface ICAOPhraseoology {
  category: string;
  phrases: {
    situation: string;
    phrase: string;
    audioUrl?: string;
    pronunciation?: string;
    meaning: string;
    example?: string;
  }[];
}

export interface Lesson {
  id: string;
  unitId: string;
  title: string;
  description: string;
  icon: string;
  icaoLevel: ICAOLevel;
  category: 'cabin-crew' | 'ground-staff' | 'airport' | 'interview' | 'emergency' | 'general';
  difficulty: 'beginner' | 'elementary' | 'pre-intermediate' | 'intermediate' | 'upper-intermediate' | 'advanced';

  // Content
  objectives: LessonObjective[];
  scenario: Scenario;
  theory: {
    title: string;
    content: string;
    audioExplanation?: AudioSegment;
  };
  icaoPhraseoology: ICAOPhraseoology;
  cabinCrewPhraseoology: ICAOPhraseoology;
  airlineVocabulary: {
    category: string;
    terms: {
      term: string;
      definition: string;
      pronunciation?: string;
      audioUrl?: string;
      example: string;
    }[];
  }[];
  professionalExpressions: {
    situation: string;
    expression: string;
    audioUrl?: string;
    alternativeExpressions: string[];
  }[];
  pronunciation: AudioSegment[];
  grammar: {
    rule: string;
    examples: { sentence: string; audioUrl?: string }[];
    exercise?: Exercise;
  }[];

  // Exercises
  exercises: Exercise[];
  quiz: Quiz;

  // Interactive
  flashcards: {
    id: string;
    front: string;
    back: string;
    audioFront?: string;
    audioBack?: string;
  }[];
  aiConversation?: {
    initialPrompt: string;
    topics: string[];
  };
  review?: {
    keyPoints: string[];
    commonMistakes: { mistake: string; correction: string; explanation: string }[];
  };

  // Gamification
  xpReward: number;
  badgeReward?: string;
  estimatedDurationMinutes: number;
  locked: boolean;
  prerequisiteLessonIds?: string[];

  // Metadata
  createdAt: string;
  updatedAt: string;
  order: number;
}

export interface Unit {
  id: string;
  title: string;
  description: string;
  icon: string;
  lessons: Lesson[];
  color: string;
  progress: number;
  locked: boolean;
  order: number;
}

export interface LearningPath {
  id: string;
  name: string;
  description: string;
  levels: {
    level: ICAOLevel;
    units: Unit[];
  }[];
}

// User Progress
export interface LessonProgress {
  lessonId: string;
  unitId: string;
  completedAt?: string;
  progress: number;
  xpEarned: number;
  exercisesCompleted: number;
  exercisesTotal: number;
  quizScore?: number;
  quizPassed: boolean;
  audioRecordings?: {
    exerciseId: string;
    audioUrl: string;
    feedback?: string;
  }[];
}

export interface UserStats {
  totalXp: number;
  level: number;
  streak: number;
  totalHoursStudied: number;
  lessonsCompleted: number;
  vocabularyLearned: number;
  pronunciationScore: number;
  grammarScore: number;
  listeningScore: number;
  speakingScore: number;
  readingScore: number;
  writingScore: number;
  confidenceScore: number;
  fluencyScore: number;
}

// Interview
export interface InterviewQuestion {
  id: string;
  airline?: string;
  category: 'hr' | 'behavioral' | 'technical' | 'situational' | 'language';
  question: string;
  audioUrl?: string;
  difficulty: number;
  modelAnswers: {
    text?: string;
    answer?: string;
    audioUrl?: string;
    scoreBreakdown: {
      pronunciation: number;
      grammar: number;
      vocabulary: number;
      fluency: number;
      confidence: number;
      professionalism: number;
    };
    tips?: string[];
  }[];
  mistakesToAvoid?: string[];
}

export interface InterviewBank {
  id: string;
  airline: string;
  questions: InterviewQuestion[];
}

// AI Feedback
export interface VoiceFeedback {
  score: number;
  pronunciation: number;
  grammar: number;
  vocabulary: number;
  fluency: number;
  confidence: number;
  professionalism: number;
  transcription: string;
  corrections: {
    original: string;
    correction: string;
    explanation: string;
  }[];
  suggestions: string[];
}

// Gamification
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: string;
  xpReward: number;
  unlockedAt?: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: string;
}

// Daily Challenge
export interface DailyChallenge {
  id: string;
  date: string;
  title: string;
  description: string;
  lessonId: string;
  xpReward: number;
  completed: boolean;
  completedAt?: string;
}
