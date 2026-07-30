import type { Unit, Lesson } from '../types';

// Minimal quiz template
const createQuiz = (unitNum: number, lessonNum: number) => ({
  id: `quiz-${unitNum}-${lessonNum}`,
  title: `Quiz ${unitNum}-${lessonNum}`,
  passingScore: 70,
  exercises: [
    {
      id: 'q-1',
      type: 'multiple-choice' as const,
      question: 'What is the primary focus of this lesson?',
      options: [
        { id: 'opt-1', text: 'Communication', isCorrect: false },
        { id: 'opt-2', text: 'Procedures', isCorrect: false },
        { id: 'opt-3', text: 'Safety', isCorrect: false },
        { id: 'opt-4', text: 'All of the above', isCorrect: true, explanation: 'All aspects are important' }
      ],
      points: 10
    },
    {
      id: 'q-2',
      type: 'multiple-choice' as const,
      question: 'What does "Roger" mean?',
      options: [
        { id: 'opt-1', text: 'Understood', isCorrect: true, explanation: 'Message received and understood' },
        { id: 'opt-2', text: 'Turn right', isCorrect: false },
        { id: 'opt-3', text: 'Speed up', isCorrect: false },
        { id: 'opt-4', text: 'Descend', isCorrect: false }
      ],
      points: 10
    }
  ]
});

const STANDARD_VOCABULARY = [
  { word: 'Altimeter', pronunciation: 'al-TIM-uh-ter', definition: 'Altitude instrument', example: 'Check altimeter' },
  { word: 'Transponder', pronunciation: 'TRANS-pon-der', definition: 'ID equipment', example: 'Squawk 2500' },
  { word: 'Heading', pronunciation: 'HED-ing', definition: 'Direction', example: 'Maintain 270' },
  { word: 'Flight level', pronunciation: 'FLYT LEV-el', definition: 'Altitude notation', example: 'FL350' }
];

const STANDARD_PHRASEOLOGY = {
  category: 'Aviation Phraseology',
  phrases: [
    { situation: 'Acknowledgment', phrase: 'Roger', pronunciation: 'RAH-jer', meaning: 'Message received', example: 'Roger, turning left' },
    { situation: 'Affirmation', phrase: 'Affirmative', pronunciation: 'AFF-firm', meaning: 'Yes/confirmed', example: 'Affirmative' },
    { situation: 'Negation', phrase: 'Negative', pronunciation: 'NEG-uh-tiv', meaning: 'No/denied', example: 'Negative go-around' },
  ]
};

// Use only first 2 lessons as template, rest are minimal
const LESSON_TEMPLATE = (unitNum: number, lessonNum: number, title: string): any => ({
  id: `lesson-${unitNum}-${lessonNum}`,
  unitId: `unit-${unitNum}`,
  title,
  description: `Learn ${title.toLowerCase()}`,
  icon: '📚',
  icaoLevel: 4,
  category: 'aviation',
  difficulty: 'intermediate',
  xpReward: 100,
  estimatedDurationMinutes: 20,
  locked: false,
  order: lessonNum,
  objectives: [
    { id: 'obj-1', description: 'Master this topic', type: 'listening' as const },
    { id: 'obj-2', description: 'Practice speaking', type: 'speaking' as const },
    { id: 'obj-3', description: 'Apply knowledge', type: 'reading' as const }
  ],
  scenario: {
    id: 'scenario-1',
    title,
    description: `Real-world scenario for ${title}`,
    context: 'Operational environment',
    audioSegments: [
      { id: 'audio-1', text: 'Radio transmission', audioUrl: `/audio/unit-${unitNum}/lesson-${lessonNum}/example-1.wav`, durationSeconds: 5, speaker: 'pilot' },
      { id: 'audio-2', text: 'Response', audioUrl: `/audio/unit-${unitNum}/lesson-${lessonNum}/example-2.wav`, durationSeconds: 4, speaker: 'instructor' }
    ],
    vocabulary: STANDARD_VOCABULARY
  },
  theory: {
    title: `${title} Fundamentals`,
    content: `Key concepts and procedures for ${title}`,
    audioExplanation: {
      id: 'theory-1',
      text: 'Professional explanation',
      audioUrl: `/audio/unit-${unitNum}/lesson-${lessonNum}/theory-explanation.wav`,
      durationSeconds: 20,
      speaker: 'instructor'
    }
  },
  icaoPhraseoology: STANDARD_PHRASEOLOGY,
  cabinCrewPhraseoology: STANDARD_PHRASEOLOGY,
  airlineVocabulary: [{
    category: 'Aviation Terms',
    terms: STANDARD_VOCABULARY.map(v => ({
      term: v.word,
      definition: v.definition,
      pronunciation: v.pronunciation,
      example: v.example
    }))
  }],
  professionalExpressions: [
    { situation: 'Greeting', expression: 'Good morning', alternativeExpressions: ['Hello', 'Welcome'] }
  ],
  pronunciation: [
    { id: 'pron-1', text: 'Pronunciation guide', audioUrl: `/audio/unit-${unitNum}/lesson-${lessonNum}/pronunciation.wav`, durationSeconds: 10 }
  ],
  vocabulary: STANDARD_VOCABULARY,
  grammar: [{
    rule: 'Standard aviation patterns',
    examples: [
      { sentence: 'Example 1', audioUrl: `/audio/unit-${unitNum}/lesson-${lessonNum}/grammar-1.wav` },
      { sentence: 'Example 2', audioUrl: `/audio/unit-${unitNum}/lesson-${lessonNum}/grammar-2.wav` },
      { sentence: 'Example 3', audioUrl: `/audio/unit-${unitNum}/lesson-${lessonNum}/grammar-3.wav` }
    ]
  }],
  exercises: [{
    id: 'ex-1',
    type: 'multiple-choice' as const,
    question: 'Test your knowledge',
    options: [
      { id: 'opt-a', text: 'Option A', isCorrect: true, explanation: 'Correct' },
      { id: 'opt-b', text: 'Option B', isCorrect: false, explanation: 'Incorrect' }
    ],
    points: 10
  }],
  quiz: createQuiz(unitNum, lessonNum),
  flashcards: [
    { id: 'fc-1', front: 'Term', back: 'Definition', audioFront: `/audio/unit-${unitNum}/lesson-${lessonNum}/term.wav`, audioBack: `/audio/unit-${unitNum}/lesson-${lessonNum}/definition.wav` }
  ],
  review: {
    keyPoints: ['Point 1', 'Point 2', 'Point 3'],
    commonMistakes: ['Mistake 1', 'Mistake 2']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
});

export const iCAOUnits: Unit[] = [
  ...Array(8).fill(0).map((_, unitIdx) => ({
    id: `unit-${unitIdx + 1}`,
    title: `Unit ${unitIdx + 1}: Topic`,
    description: 'Complete lesson unit',
    icon: '📚',
    color: 'from-blue-500 to-cyan-500' as const,
    progress: 0,
    locked: false,
    order: unitIdx + 1,
    lessons: Array.from({ length: 3 }, (_, lessonIdx) =>
      LESSON_TEMPLATE(unitIdx + 1, lessonIdx + 1, `Lesson ${lessonIdx + 1}`)
    )
  })) as Unit[]
];
