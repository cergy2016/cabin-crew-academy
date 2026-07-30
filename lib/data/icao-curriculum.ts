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

// ============================================================
// Unit 2, Lesson 1: Pre-Flight Briefing (real cabin crew scenario)
// Characters: Paola, Tom, Jenny (crew), Katrin (crew), Leila (crew),
// Jutta (crew), Marcus (purser)
// ============================================================
const A2 = '/audio/unit-2/lesson-1';

const PREFLIGHT_BRIEFING_LESSON: any = {
  id: 'lesson-2-1',
  unitId: 'unit-2',
  title: 'Pre-Flight Briefing',
  description: 'Crew introductions and the formal pre-flight briefing with the purser',
  icon: '🧳',
  icaoLevel: 4,
  category: 'cabin-crew',
  difficulty: 'intermediate',
  xpReward: 150,
  estimatedDurationMinutes: 30,
  locked: false,
  order: 1,
  objectives: [
    { id: 'obj-1', description: 'Understand informal crew introductions before a flight', type: 'listening' },
    { id: 'obj-2', description: 'Follow a formal cabin crew briefing led by the purser', type: 'listening' },
    { id: 'obj-3', description: 'Introduce yourself professionally to new colleagues', type: 'speaking' },
  ],
  scenario: {
    id: 'scenario-preflight-briefing',
    title: 'Meeting the Crew Before Departure',
    description: 'Paola, Tom and Jenny meet before the pre-flight briefing, greet Katrin on the shuttle, then attend the formal briefing led by purser Marcus.',
    context: 'Crew room and shuttle bus, before a flight to New York',
    audioSegments: [
      { id: 'seg-01', text: 'Paola: Hi, I\'m Paola. Nice to meet you.', audioUrl: `${A2}/ex1-01-paola.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'seg-02', text: 'Tom: Hi Paola, I\'m Tom. Nice to meet you too. Is this your first flight to New York?', audioUrl: `${A2}/ex1-02-tom.wav`, durationSeconds: 5, speaker: 'crew' },
      { id: 'seg-03', text: 'Paola: No, I\'ve done this route a few times before. Have you flown to New York before?', audioUrl: `${A2}/ex1-03-paola.wav`, durationSeconds: 5, speaker: 'crew' },
      { id: 'seg-04', text: 'Tom: No, this is actually my first time on this route. I\'m a bit nervous!', audioUrl: `${A2}/ex1-04-tom.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'seg-05', text: 'Jenny: Hi everyone! Paola, great to see you again!', audioUrl: `${A2}/ex1-05-jenny.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'seg-06', text: 'Paola: Jenny! Hi! How are you? This is Tom, he\'s new to the New York route.', audioUrl: `${A2}/ex1-06-paola.wav`, durationSeconds: 5, speaker: 'crew' },
      { id: 'seg-07', text: 'Jenny: Hi Tom, nice to meet you. Sorry, I didn\'t catch your name properly. Was it Tom?', audioUrl: `${A2}/ex1-07-jenny.wav`, durationSeconds: 5, speaker: 'crew' },
      { id: 'seg-08', text: 'Tom: Yes, that\'s right, Tom.', audioUrl: `${A2}/ex1-08-tom.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'seg-09', text: 'Jenny: Great. Paola and I flew together to Madrid last month, it was a really fun flight.', audioUrl: `${A2}/ex1-09-jenny.wav`, durationSeconds: 5, speaker: 'crew' },
      { id: 'seg-10', text: 'Paola: Yes, it was! Anyway, the briefing starts in ten minutes, we should head over.', audioUrl: `${A2}/ex1-10-paola.wav`, durationSeconds: 5, speaker: 'crew' },
      { id: 'seg-11', text: 'Katrin: Hi everyone, I\'m Katrin!', audioUrl: `${A2}/ex2-01-katrin.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'seg-12', text: 'Paola: Katrin! Great to see you, how have you been? We flew together to Rome last year, remember?', audioUrl: `${A2}/ex2-02-paola.wav`, durationSeconds: 6, speaker: 'crew' },
      { id: 'seg-13', text: 'Katrin: Of course, I remember! How could I forget that turbulence!', audioUrl: `${A2}/ex2-03-katrin.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'seg-14', text: 'Tom: Hi Katrin, I\'m Tom, nice to meet you. This is my first time meeting you.', audioUrl: `${A2}/ex2-04-tom.wav`, durationSeconds: 5, speaker: 'crew' },
      { id: 'seg-15', text: 'Katrin: Nice to meet you too, Tom!', audioUrl: `${A2}/ex2-05-katrin.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'seg-16', text: 'Jenny: Hi Katrin, I don\'t think we\'ve met before. I\'m Jenny.', audioUrl: `${A2}/ex2-06-jenny.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'seg-17', text: 'Katrin: Hi Jenny, nice to meet you.', audioUrl: `${A2}/ex2-07-katrin.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'seg-18', text: 'Tom: So Katrin, are you looking forward to the flight to New York?', audioUrl: `${A2}/ex2-08-tom.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'seg-19', text: 'Katrin: Definitely, I love going to the US, the layover is always fun.', audioUrl: `${A2}/ex2-09-katrin.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'seg-20', text: 'Paola: Speaking of layovers, remember when I spilled a drink on a passenger during the Madrid flight, Jenny?', audioUrl: `${A2}/ex2-10-paola.wav`, durationSeconds: 6, speaker: 'crew' },
      { id: 'seg-21', text: 'Jenny: Oh no, I forgot about that! That was so embarrassing for you.', audioUrl: `${A2}/ex2-11-jenny.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'seg-22', text: 'Katrin: By the way, are we all on the same team for this flight?', audioUrl: `${A2}/ex2-12-katrin.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'seg-23', text: 'Tom: No, actually I heard Katrin and Leila are working together in business class, while the rest of us are in economy.', audioUrl: `${A2}/ex2-13-tom.wav`, durationSeconds: 7, speaker: 'crew' },
      { id: 'seg-24', text: 'Marcus: Good afternoon everyone, my name is Marcus and I\'ll be your purser today for the flight to New York. Let\'s go through the crew positions.', audioUrl: `${A2}/ex3-01-marcus.wav`, durationSeconds: 8, speaker: 'instructor' },
      { id: 'seg-25', text: 'Marcus: Katrin, you\'ll be working in economy class today, specifically at door four.', audioUrl: `${A2}/ex3-02-marcus.wav`, durationSeconds: 5, speaker: 'instructor' },
      { id: 'seg-26', text: 'Katrin: Got it, door four, economy.', audioUrl: `${A2}/ex3-03-katrin.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'seg-27', text: 'Marcus: Leila, you\'re in charge of business class today, and you\'ll be positioned at door two left.', audioUrl: `${A2}/ex3-04-marcus.wav`, durationSeconds: 6, speaker: 'instructor' },
      { id: 'seg-28', text: 'Leila: Perfect, business class, door two left.', audioUrl: `${A2}/ex3-05-leila.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'seg-29', text: 'Marcus: And Jutta, this is actually a very special flight for you, isn\'t it?', audioUrl: `${A2}/ex3-06-marcus.wav`, durationSeconds: 4, speaker: 'instructor' },
      { id: 'seg-30', text: 'Jutta: Yes, that\'s right! This is my last flight before retirement, after thirty-two years with the airline.', audioUrl: `${A2}/ex3-07-jutta.wav`, durationSeconds: 6, speaker: 'crew' },
      { id: 'seg-31', text: 'Marcus: Congratulations Jutta! You\'ll be working in economy with Katrin today.', audioUrl: `${A2}/ex3-08-marcus.wav`, durationSeconds: 5, speaker: 'instructor' },
      { id: 'seg-32', text: 'Jutta: Thank you so much, I\'m looking forward to it.', audioUrl: `${A2}/ex3-09-jutta.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'seg-33', text: 'Marcus: Alright everyone, let\'s have a great flight!', audioUrl: `${A2}/ex3-10-marcus.wav`, durationSeconds: 3, speaker: 'instructor' },
    ],
    vocabulary: [
      { word: 'Purser', pronunciation: 'PUR-ser', definition: 'The senior cabin crew member in charge of the flight' },
      { word: 'Layover', pronunciation: 'LAY-oh-ver', definition: 'A stop or rest period between flights, often overnight' },
      { word: 'Shuttle', pronunciation: 'SHUH-tul', definition: 'A bus that transports crew between locations' },
      { word: 'Positioned', pronunciation: 'puh-ZISH-und', definition: 'Assigned to a specific location or door on the aircraft' },
    ],
  },
  theory: {
    title: 'The Pre-Flight Briefing Process',
    content: 'Before every flight, cabin crew first meet each other informally in the crew room, introducing themselves and catching up if they have flown together before. On the way to the briefing room, crew often continue chatting casually. The formal briefing is then led by the purser, the senior crew member in charge of the flight, who assigns each crew member their working position (cabin class and door), reviews safety information, and welcomes new crew or acknowledges special occasions such as a final flight before retirement.',
    audioExplanation: {
      id: 'theory-audio',
      text: 'Explanation of the pre-flight briefing process',
      audioUrl: `${A2}/theory-explanation.wav`,
      durationSeconds: 25,
      speaker: 'instructor',
    },
  },
  icaoPhraseoology: STANDARD_PHRASEOLOGY,
  cabinCrewPhraseoology: {
    category: 'Crew Introductions & Briefing Language',
    phrases: [
      { situation: 'Introduction', phrase: "Hi, I'm [name]. Nice to meet you.", pronunciation: '', meaning: 'Standard informal self-introduction between crew', example: "Hi, I'm Paola. Nice to meet you." },
      { situation: 'Clarifying a name', phrase: "Sorry, I didn't catch your name. Was it...?", pronunciation: '', meaning: 'Polite way to confirm a colleague\'s name', example: 'Sorry, I didn\'t catch your name properly. Was it Tom?' },
      { situation: 'Assigning position', phrase: "You'll be working in... at door...", pronunciation: '', meaning: 'Purser assigning a crew member\'s working position', example: "Katrin, you'll be working in economy class today, at door four." },
      { situation: 'Being in charge', phrase: "You're in charge of...", pronunciation: '', meaning: 'Assigning responsibility for a cabin section', example: "Leila, you're in charge of business class today." },
    ],
  },
  airlineVocabulary: [
    {
      category: 'Briefing & Crew Positions',
      terms: [
        { term: 'Purser', definition: 'The senior cabin crew member in charge of the flight', pronunciation: 'PUR-ser', example: 'Marcus is the purser on today\'s flight.' },
        { term: 'Door position', definition: 'The specific aircraft door a crew member is responsible for', pronunciation: '', example: 'Katrin is assigned to door four.' },
        { term: 'In charge of', definition: 'Responsible for a cabin section or task', pronunciation: '', example: 'Leila is in charge of business class.' },
        { term: 'Layover', definition: 'A rest period between flights, often in another city', pronunciation: 'LAY-oh-ver', example: 'We have a two-day layover in New York.' },
      ],
    },
  ],
  professionalExpressions: [
    { situation: 'Meeting a colleague for the first time', expression: "Nice to meet you.", alternativeExpressions: ['Pleased to meet you.', 'Great to meet you.'] },
    { situation: 'Congratulating a colleague', expression: 'Congratulations!', alternativeExpressions: ['Well done!', 'That\'s wonderful news!'] },
  ],
  pronunciation: [
    { id: 'pron-1', text: 'Purser', audioUrl: `${A2}/theory-explanation.wav`, durationSeconds: 2 },
  ],
  grammar: [
    {
      rule: 'Future forms for assigning duties (will + verb) - the purser uses "will" to assign positions and duties during the briefing',
      examples: [
        { sentence: "You'll be working in economy class today." },
        { sentence: "You'll be positioned at door two left." },
        { sentence: "You'll be working in economy with Katrin today." },
      ],
    },
  ],
  exercises: [
    {
      id: 'ex-1', type: 'multiple-choice', points: 10,
      question: 'Where is the flight going to?',
      options: [
        { id: 'o1', text: 'New York', isCorrect: true, explanation: 'The crew repeatedly mention the flight to New York.' },
        { id: 'o2', text: 'London', isCorrect: false },
        { id: 'o3', text: 'Dubai', isCorrect: false },
        { id: 'o4', text: 'Sydney', isCorrect: false },
      ],
    },
    {
      id: 'ex-2', type: 'multiple-choice', points: 10,
      question: 'What does Paola say to introduce herself to Tom?',
      options: [
        { id: 'o1', text: "Hi, I'm Paola. Nice to meet you.", isCorrect: true },
        { id: 'o2', text: 'Hello, my name is Paola, pleased to work with you.', isCorrect: false },
        { id: 'o3', text: 'Good morning, I am Paola.', isCorrect: false },
        { id: 'o4', text: 'Hi Tom, I am Paola, how are you today?', isCorrect: false },
      ],
    },
    {
      id: 'ex-3', type: 'multiple-choice', points: 10,
      question: "What is Tom's reply to Paola's introduction?",
      options: [
        { id: 'o1', text: "Hi Paola, I'm Tom. Nice to meet you too. Is this your first flight to New York?", isCorrect: true },
        { id: 'o2', text: 'Hello Paola, nice to see you again.', isCorrect: false },
        { id: 'o3', text: "Hi, I'm Tom, I already know you.", isCorrect: false },
        { id: 'o4', text: 'Good morning, Tom speaking.', isCorrect: false },
      ],
    },
    {
      id: 'ex-4', type: 'multiple-choice', points: 10,
      question: "Jenny is not sure of Tom's name. What is her question?",
      options: [
        { id: 'o1', text: "Sorry, I didn't catch your name properly. Was it Tom?", isCorrect: true },
        { id: 'o2', text: 'What is your name again, please?', isCorrect: false },
        { id: 'o3', text: 'Can you repeat your name?', isCorrect: false },
        { id: 'o4', text: 'I forgot your name, sorry.', isCorrect: false },
      ],
    },
    {
      id: 'ex-5', type: 'multiple-choice', points: 10,
      question: 'Have Jenny and Paola met before?',
      options: [
        { id: 'o1', text: 'Yes, they flew together to Madrid last month.', isCorrect: true },
        { id: 'o2', text: 'No, this is their first time meeting.', isCorrect: false },
        { id: 'o3', text: 'Yes, they trained together at the airline academy.', isCorrect: false },
        { id: 'o4', text: 'No, but they know each other from social media.', isCorrect: false },
      ],
    },
    {
      id: 'ex-6', type: 'multiple-choice', points: 10,
      question: 'When does the briefing start?',
      options: [
        { id: 'o1', text: 'In ten minutes', isCorrect: true },
        { id: 'o2', text: 'In one hour', isCorrect: false },
        { id: 'o3', text: 'Immediately', isCorrect: false },
        { id: 'o4', text: 'In thirty minutes', isCorrect: false },
      ],
    },
    {
      id: 'ex-7', type: 'multiple-choice', points: 10,
      question: 'True or False: Tom and Katrin do not know each other.',
      options: [
        { id: 'o1', text: 'True', isCorrect: true, explanation: "Tom says: 'This is my first time meeting you.'" },
        { id: 'o2', text: 'False', isCorrect: false },
      ],
    },
    {
      id: 'ex-8', type: 'multiple-choice', points: 10,
      question: 'True or False: Paola and Katrin do not know each other.',
      options: [
        { id: 'o1', text: 'True', isCorrect: false },
        { id: 'o2', text: 'False', isCorrect: true, explanation: 'Paola and Katrin flew together to Rome last year.' },
      ],
    },
    {
      id: 'ex-9', type: 'multiple-choice', points: 10,
      question: 'True or False: Jenny and Katrin do not know each other.',
      options: [
        { id: 'o1', text: 'True', isCorrect: true, explanation: "Jenny says: 'I don't think we've met before.'" },
        { id: 'o2', text: 'False', isCorrect: false },
      ],
    },
    {
      id: 'ex-10', type: 'multiple-choice', points: 10,
      question: 'True or False: Katrin is not looking forward to going to the US.',
      options: [
        { id: 'o1', text: 'True', isCorrect: false },
        { id: 'o2', text: 'False', isCorrect: true, explanation: "Katrin says: 'Definitely, I love going to the US.'" },
      ],
    },
    {
      id: 'ex-11', type: 'multiple-choice', points: 10,
      question: 'True or False: Paola and Jenny were on a flight to Madrid together.',
      options: [
        { id: 'o1', text: 'True', isCorrect: true },
        { id: 'o2', text: 'False', isCorrect: false },
      ],
    },
    {
      id: 'ex-12', type: 'multiple-choice', points: 10,
      question: 'True or False: Paola spilled drinks on a passenger.',
      options: [
        { id: 'o1', text: 'True', isCorrect: true, explanation: 'Paola mentions this herself about the Madrid flight.' },
        { id: 'o2', text: 'False', isCorrect: false },
      ],
    },
    {
      id: 'ex-13', type: 'multiple-choice', points: 10,
      question: 'True or False: All four crew members are in the same team on the flight.',
      options: [
        { id: 'o1', text: 'True', isCorrect: false },
        { id: 'o2', text: 'False', isCorrect: true, explanation: 'Katrin and Leila work business class; the others work economy.' },
      ],
    },
    {
      id: 'ex-14', type: 'multiple-choice', points: 10,
      question: 'What is the name of the purser?',
      options: [
        { id: 'o1', text: 'Marcus', isCorrect: true },
        { id: 'o2', text: 'Daniel', isCorrect: false },
        { id: 'o3', text: 'Tom', isCorrect: false },
        { id: 'o4', text: 'Fred', isCorrect: false },
      ],
    },
    {
      id: 'ex-15', type: 'multiple-choice', points: 10,
      question: 'Where will Katrin be working on the flight?',
      options: [
        { id: 'o1', text: 'Economy class, door four', isCorrect: true },
        { id: 'o2', text: 'Business class, door two', isCorrect: false },
        { id: 'o3', text: 'First class, door one', isCorrect: false },
        { id: 'o4', text: 'Economy class, door two', isCorrect: false },
      ],
    },
    {
      id: 'ex-16', type: 'multiple-choice', points: 10,
      question: 'Where will Leila be in charge?',
      options: [
        { id: 'o1', text: 'Business class', isCorrect: true },
        { id: 'o2', text: 'Economy class', isCorrect: false },
        { id: 'o3', text: 'First class', isCorrect: false },
        { id: 'o4', text: 'The galley', isCorrect: false },
      ],
    },
    {
      id: 'ex-17', type: 'multiple-choice', points: 10,
      question: 'Why is this flight special for Jutta?',
      options: [
        { id: 'o1', text: "It's her last flight before retirement, after 32 years with the airline.", isCorrect: true },
        { id: 'o2', text: "It's her first flight with the airline.", isCorrect: false },
        { id: 'o3', text: "It's her birthday.", isCorrect: false },
        { id: 'o4', text: "She's just been promoted to purser.", isCorrect: false },
      ],
    },
    {
      id: 'ex-18', type: 'multiple-choice', points: 10,
      question: 'Who will Jutta be working with?',
      options: [
        { id: 'o1', text: 'Katrin', isCorrect: true },
        { id: 'o2', text: 'Leila', isCorrect: false },
        { id: 'o3', text: 'Tom', isCorrect: false },
        { id: 'o4', text: 'Marcus', isCorrect: false },
      ],
    },
    {
      id: 'ex-19', type: 'multiple-choice', points: 10,
      question: 'Where will Leila be positioned?',
      options: [
        { id: 'o1', text: 'Door two left', isCorrect: true },
        { id: 'o2', text: 'Door four', isCorrect: false },
        { id: 'o3', text: 'Door one right', isCorrect: false },
        { id: 'o4', text: 'Door three left', isCorrect: false },
      ],
    },
  ],
  quiz: {
    id: 'quiz-2-1',
    title: 'Pre-Flight Briefing Quiz',
    passingScore: 70,
    exercises: [
      {
        id: 'q-1', type: 'multiple-choice', points: 20,
        question: 'Who is the purser on this flight?',
        options: [
          { id: 'o1', text: 'Marcus', isCorrect: true },
          { id: 'o2', text: 'Tom', isCorrect: false },
          { id: 'o3', text: 'Katrin', isCorrect: false },
          { id: 'o4', text: 'Leila', isCorrect: false },
        ],
      },
      {
        id: 'q-2', type: 'multiple-choice', points: 20,
        question: 'Where is Leila positioned?',
        options: [
          { id: 'o1', text: 'Door two left, business class', isCorrect: true },
          { id: 'o2', text: 'Door four, economy class', isCorrect: false },
          { id: 'o3', text: 'Door one, first class', isCorrect: false },
          { id: 'o4', text: 'Galley', isCorrect: false },
        ],
      },
      {
        id: 'q-3', type: 'multiple-choice', points: 20,
        question: "Why is Jutta's flight special?",
        options: [
          { id: 'o1', text: 'It is her last flight before retirement', isCorrect: true },
          { id: 'o2', text: 'It is her first flight', isCorrect: false },
          { id: 'o3', text: 'She got promoted', isCorrect: false },
          { id: 'o4', text: 'It is a new route', isCorrect: false },
        ],
      },
      {
        id: 'q-4', type: 'multiple-choice', points: 20,
        question: 'Have Paola and Katrin flown together before?',
        options: [
          { id: 'o1', text: 'Yes, to Rome last year', isCorrect: true },
          { id: 'o2', text: 'No, never', isCorrect: false },
          { id: 'o3', text: 'Yes, to New York', isCorrect: false },
          { id: 'o4', text: 'Yes, to Madrid', isCorrect: false },
        ],
      },
      {
        id: 'q-5', type: 'multiple-choice', points: 20,
        question: 'What professional phrase does the purser use to assign duties?',
        options: [
          { id: 'o1', text: "You'll be working in... at door...", isCorrect: true },
          { id: 'o2', text: 'Go to your position now.', isCorrect: false },
          { id: 'o3', text: 'I need you at door four.', isCorrect: false },
          { id: 'o4', text: 'Please move to economy.', isCorrect: false },
        ],
      },
    ],
  },
  flashcards: [
    { id: 'fc-1', front: 'Purser', back: 'The senior cabin crew member in charge of the flight', audioFront: `${A2}/theory-explanation.wav`, audioBack: `${A2}/theory-explanation.wav` },
    { id: 'fc-2', front: 'Layover', back: 'A rest period between flights, often overnight in another city', audioFront: `${A2}/ex2-09-katrin.wav`, audioBack: `${A2}/ex2-09-katrin.wav` },
    { id: 'fc-3', front: "Sorry, I didn't catch your name. Was it...?", back: "Polite way to confirm a colleague's name", audioFront: `${A2}/ex1-07-jenny.wav`, audioBack: `${A2}/ex1-07-jenny.wav` },
  ],
  review: {
    keyPoints: [
      'Crew introduce themselves informally before the formal briefing',
      'The purser leads the briefing and assigns each crew member a door and cabin class',
      "Use 'you'll be working in... at door...' to assign or understand duties",
      'Special occasions, like a final flight before retirement, are often recognized during briefings',
      'Always confirm a colleague\'s name politely if you did not catch it',
    ],
    commonMistakes: [
      { mistake: 'Forgetting to introduce yourself to new colleagues', correction: 'Always say hello and give your name when meeting crew for the first time', explanation: 'Professional teamwork starts with clear introductions' },
      { mistake: 'Not confirming your assigned position', correction: "Repeat back your position, e.g. 'Got it, door four, economy.'", explanation: 'Confirming avoids confusion during the flight' },
    ],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export const iCAOUnits: Unit[] = [
  ...Array(8).fill(0).map((_, unitIdx) => ({
    id: `unit-${unitIdx + 1}`,
    title: unitIdx === 1 ? 'Unit 2: Pre-Flight Procedures' : `Unit ${unitIdx + 1}: Topic`,
    description: unitIdx === 1 ? 'Aircraft preparation and crew briefing' : 'Complete lesson unit',
    icon: unitIdx === 1 ? '🧳' : '📚',
    color: 'from-blue-500 to-cyan-500' as const,
    progress: 0,
    locked: false,
    order: unitIdx + 1,
    lessons: Array.from({ length: 3 }, (_, lessonIdx) =>
      unitIdx === 1 && lessonIdx === 0
        ? PREFLIGHT_BRIEFING_LESSON
        : LESSON_TEMPLATE(unitIdx + 1, lessonIdx + 1, `Lesson ${lessonIdx + 1}`)
    )
  })) as Unit[]
];
