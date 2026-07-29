import type { Unit, Lesson } from '../types';

// Quiz factory for all lessons
const createQuiz = (unitNum: number, lessonNum: number) => ({
  id: `quiz-${unitNum}-${lessonNum}`,
  title: `Quiz ${unitNum}-${lessonNum}`,
  passingScore: 70,
  exercises: [
    { id: 'q-1', type: 'multiple-choice' as const, question: 'What is the main objective?', options: [{ id: 'o1', text: 'A', isCorrect: false }, { id: 'o2', text: 'B', isCorrect: false }, { id: 'o3', text: 'C', isCorrect: false }, { id: 'o4', text: 'D', isCorrect: true }], points: 10 },
    { id: 'q-2', type: 'multiple-choice' as const, question: 'What does Roger mean?', options: [{ id: 'o1', text: 'Understood', isCorrect: true }, { id: 'o2', text: 'Right', isCorrect: false }, { id: 'o3', text: 'Wait', isCorrect: false }, { id: 'o4', text: 'Copy', isCorrect: false }], points: 10 }
  ]
});

// Vocabulary standard
const standardVocab = [
  { word: 'Altimeter', pronunciation: 'al-TIM-uh-ter', definition: 'Altitude measurement instrument', example: 'Set altimeter to 1013' },
  { word: 'Transponder', pronunciation: 'TRANS-pon-der', definition: 'Aircraft identification transmitter', example: 'Squawk 2500' },
  { word: 'Heading', pronunciation: 'HED-ing', definition: 'Direction in degrees', example: 'Maintain heading 270' },
  { word: 'Flight Level', pronunciation: 'FLYT LEV-ul', definition: 'Altitude in hundreds of feet', example: 'Climb to FL350' },
  { word: 'Approach', pronunciation: 'uh-PROHCH', definition: 'Landing phase', example: 'Contact approach control' },
  { word: 'Descent', pronunciation: 'dih-SENT', definition: 'Going down', example: 'Begin descent 3000 feet' },
  { word: 'Speed', pronunciation: 'SPEED', definition: 'Aircraft velocity', example: 'Reduce speed 150 knots' },
  { word: 'Hold', pronunciation: 'HOHLD', definition: 'Remain in position', example: 'Hold current altitude' }
];

// Phraseology standard
const standardPhraseology = {
  category: 'Aviation Radio Phraseology',
  phrases: [
    { situation: 'Acknowledgment', phrase: 'Roger', pronunciation: 'RAH-jer', meaning: 'Message received and understood', example: 'Tower: Descend to 5000. Pilot: Roger descending to 5000' },
    { situation: 'Affirmation', phrase: 'Affirmative', pronunciation: 'AFF-ur-muh-tiv', meaning: 'Yes/confirmed', example: 'ATC: Ready for takeoff? Pilot: Affirmative' },
    { situation: 'Negation', phrase: 'Negative', pronunciation: 'NEG-uh-tiv', meaning: 'No/denied', example: 'Tower: Can you make the runway? Pilot: Negative, request go-around' },
    { situation: 'Standby', phrase: 'Stand by', pronunciation: 'STAND BY', meaning: 'Wait for next transmission', example: 'Flight 123, stand by for clearance' },
    { situation: 'Repeat', phrase: 'Say again', pronunciation: 'SAY uh-GEN', meaning: 'Repeat your last message', example: 'Say again your altitude' },
    { situation: 'Permission', phrase: 'Cleared', pronunciation: 'KLERD', meaning: 'Permission granted', example: 'Cleared to land runway 27' },
    { situation: 'Request', phrase: 'Request', pronunciation: 'ree-KWEST', meaning: 'Ask for something', example: 'Request climb to FL350' },
    { situation: 'Compliance', phrase: 'Wilco', pronunciation: 'WIL-koh', meaning: 'Will comply', example: 'Wilco, turning left heading 180' }
  ]
};

// Create lesson for each unit
const createLesson = (unitNum: number, lessonNum: number, title: string): Lesson => ({
  id: `lesson-${unitNum}-${lessonNum}`,
  unitId: `unit-${unitNum}`,
  title,
  description: `Master ${title.toLowerCase()}`,
  icon: '📚',
  icaoLevel: 4,
  category: 'cabin-crew',
  difficulty: 'intermediate',
  xpReward: 100,
  estimatedDurationMinutes: 25,
  locked: false,
  order: lessonNum,
  objectives: [
    { id: 'obj-1', description: 'Understand the lesson topic', type: 'listening' },
    { id: 'obj-2', description: 'Practice communication', type: 'speaking' },
    { id: 'obj-3', description: 'Apply in real scenarios', type: 'reading' }
  ],
  scenario: {
    id: 'scenario-1',
    title,
    description: `Learn ${title} in realistic aviation scenarios`,
    context: 'Professional aviation environment',
    audioSegments: [
      {
        id: 'audio-1',
        text: 'Example radio transmission',
        audioUrl: `/audio/unit-${unitNum}/lesson-${lessonNum}/example-1.wav`,
        durationSeconds: 6,
        speaker: 'pilot'
      },
      {
        id: 'audio-2',
        text: 'Response transmission',
        audioUrl: `/audio/unit-${unitNum}/lesson-${lessonNum}/example-2.wav`,
        durationSeconds: 5,
        speaker: 'instructor'
      }
    ],
    vocabulary: standardVocab
  },
  theory: {
    title: `${title} Fundamentals`,
    content: `Professional explanation of ${title} in aviation communication`,
    audioExplanation: {
      id: 'theory-1',
      text: 'Detailed audio explanation of the lesson topic and best practices',
      audioUrl: `/audio/unit-${unitNum}/lesson-${lessonNum}/theory-explanation.wav`,
      durationSeconds: 20,
      speaker: 'instructor'
    }
  },
  icaoPhraseoology: standardPhraseology,
  cabinCrewPhraseoology: standardPhraseology,
  airlineVocabulary: [
    {
      category: 'Cabin Crew Terms',
      terms: standardVocab.map(v => ({
        term: v.word,
        definition: v.definition,
        pronunciation: v.pronunciation,
        example: v.example
      }))
    }
  ],
  professionalExpressions: [
    {
      situation: 'Customer Service',
      expression: 'Good morning/afternoon',
      alternativeExpressions: ['Hello', 'Welcome aboard']
    }
  ],
  pronunciation: [
    {
      id: 'pron-1',
      text: 'Example pronunciation guide',
      audioUrl: `/audio/unit-${unitNum}/lesson-${lessonNum}/pronunciation.wav`,
      durationSeconds: 10
    }
  ],
  vocabulary: standardVocab,
  grammar: [
    {
      rule: 'Imperative Mood',
      examples: [
        { sentence: 'Descend and maintain 3000 feet' },
        { sentence: 'Turn left heading 270' },
        { sentence: 'Reduce speed to 150 knots' }
      ]
    }
  ],
  exercises: [
    {
      id: 'ex-1',
      type: 'multiple-choice',
      question: 'What is correct phraseology?',
      options: [
        { id: 'opt-1', text: 'Hey buddy can you help?', isCorrect: false, explanation: 'Too informal' },
        { id: 'opt-2', text: 'Request climb to FL350', isCorrect: true, explanation: 'Proper aviation phraseology' },
        { id: 'opt-3', text: 'I need to go up', isCorrect: false, explanation: 'Not professional' },
        { id: 'opt-4', text: 'Going up now', isCorrect: false, explanation: 'Needs proper request' }
      ],
      points: 10
    }
  ],
  quiz: createQuiz(unitNum, lessonNum),
  flashcards: [
    {
      id: 'fc-1',
      front: 'Roger',
      back: 'Message received and understood',
      audioFront: `/audio/unit-${unitNum}/lesson-${lessonNum}/roger.wav`,
      audioBack: `/audio/unit-${unitNum}/lesson-${lessonNum}/roger.wav`
    }
  ],
  review: {
    keyPoints: [
      'Aviation communication must be clear and standardized',
      'Always use ICAO phraseology',
      'Confirm all critical clearances',
      'Maintain professional tone',
      'Brevity is important but never sacrifice clarity'
    ],
    commonMistakes: [
      'Speaking too quickly',
      'Using non-standard phraseology',
      'Forgetting to confirm clearances',
      'Being too informal',
      'Not listening carefully'
    ]
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
});

// Create all 24 lessons (8 units × 3 lessons)
const allLessons: Lesson[] = [];
for (let unit = 1; unit <= 8; unit++) {
  for (let lesson = 1; lesson <= 3; lesson++) {
    allLessons.push(
      createLesson(unit, lesson, `Unit ${unit} - Lesson ${lesson}`)
    );
  }
}

export const iCAOUnits: Unit[] = [
  {
    id: 'unit-1-intro-air-comms',
    title: '1. Introduction to Air Communications',
    description: 'Radio fundamentals and basic procedures',
    icon: '📻',
    color: 'from-blue-500 to-cyan-500',
    progress: 0,
    locked: false,
    order: 1,
    lessons: allLessons.slice(0, 3)
  },
  {
    id: 'unit-2-preflight',
    title: '2. Pre-Flight Procedures',
    description: 'Aircraft preparation and crew briefing',
    icon: '✈️',
    color: 'from-green-500 to-emerald-500',
    progress: 0,
    locked: false,
    order: 2,
    lessons: allLessons.slice(3, 6)
  },
  {
    id: 'unit-3-ground',
    title: '3. Ground Movements',
    description: 'Taxiing and ground operations',
    icon: '🛣️',
    color: 'from-yellow-500 to-orange-500',
    progress: 0,
    locked: false,
    order: 3,
    lessons: allLessons.slice(6, 9)
  },
  {
    id: 'unit-4-departure',
    title: '4. Departure, Climb & Cruise',
    description: 'Takeoff through cruise flight',
    icon: '📈',
    color: 'from-purple-500 to-pink-500',
    progress: 0,
    locked: false,
    order: 4,
    lessons: allLessons.slice(9, 12)
  },
  {
    id: 'unit-5-enroute',
    title: '5. En Route Events',
    description: 'Operational situations during flight',
    icon: '⚡',
    color: 'from-red-500 to-rose-500',
    progress: 0,
    locked: false,
    order: 5,
    lessons: allLessons.slice(12, 15)
  },
  {
    id: 'unit-6-approach',
    title: '6. Contact & Approach',
    description: 'Descent and approach procedures',
    icon: '📍',
    color: 'from-indigo-500 to-blue-500',
    progress: 0,
    locked: false,
    order: 6,
    lessons: allLessons.slice(15, 18)
  },
  {
    id: 'unit-7-landing',
    title: '7. Landing Procedures',
    description: 'Final approach through landing',
    icon: '🛬',
    color: 'from-cyan-500 to-teal-500',
    progress: 0,
    locked: false,
    order: 7,
    lessons: allLessons.slice(18, 21)
  },
  {
    id: 'unit-8-ground',
    title: '8. On The Ground',
    description: 'Post-flight procedures and completion',
    icon: '🏁',
    color: 'from-slate-500 to-gray-500',
    progress: 0,
    locked: false,
    order: 8,
    lessons: allLessons.slice(21, 24)
  }
];
