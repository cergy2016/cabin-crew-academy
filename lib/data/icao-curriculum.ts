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

// ============================================================
// Unit 2, Lesson 2: Case Study - A Day in the Life
// A flight attendant's early-morning routine and the pre-flight briefing
// ============================================================
const A2B = '/audio/unit-2/lesson-2';

const CASE_STUDY_LESSON: any = {
  id: 'lesson-2-2',
  unitId: 'unit-2',
  title: 'Case Study: A Day in the Life',
  description: "A flight attendant's early-morning routine, from waking up to the pre-flight briefing",
  icon: '⏰',
  icaoLevel: 4,
  category: 'cabin-crew',
  difficulty: 'intermediate',
  xpReward: 150,
  estimatedDurationMinutes: 45,
  locked: false,
  order: 2,
  objectives: [
    { id: 'obj-1', description: 'Understand the daily routine of a flight attendant', type: 'reading' },
    { id: 'obj-2', description: 'Identify the purpose of pre-flight briefings', type: 'reading' },
    { id: 'obj-3', description: 'Discuss safety procedures and teamwork', type: 'speaking' },
    { id: 'obj-4', description: 'Practice speaking about work routines', type: 'speaking' },
  ],
  scenario: {
    id: 'scenario-day-in-the-life',
    title: 'A Day in the Life',
    description: "Follow a flight attendant's morning, from waking up before dawn to the final preparations before passengers board a flight to Tenerife.",
    context: 'Home, commute, and briefing room, early morning before a flight to Tenerife',
    audioSegments: [
      { id: 'reading-1', text: '03:30 - Good Morning! The flight attendant wakes up, prepares her uniform, checks travel documents, and travels to work early for a flight to Tenerife.', audioUrl: `${A2B}/reading-1.wav`, durationSeconds: 12, speaker: 'native' },
      { id: 'reading-2', text: '05:15 - Fifteen Minutes to the Pre-flight Briefing. She reviews the cabin crew manual, emergency procedures, and the location of safety equipment on the Boeing 757.', audioUrl: `${A2B}/reading-2.wav`, durationSeconds: 13, speaker: 'native' },
      { id: 'reading-3', text: '05:30 - The Pre-flight Briefing. The senior crew member reviews flight details, responsibilities, passenger information, security, and emergency procedures. Crew members may be asked safety questions.', audioUrl: `${A2B}/reading-3.wav`, durationSeconds: 14, speaker: 'native' },
      { id: 'reading-4', text: '06:00 - Pre-flight Preparations for Boarding. The crew checks emergency equipment, safety cards, meals, drinks, duty-free items, lavatory supplies, and prepares to welcome passengers.', audioUrl: `${A2B}/reading-4.wav`, durationSeconds: 14, speaker: 'native' },
    ],
    vocabulary: [
      { word: 'tucked away', definition: 'carefully put away' },
      { word: 'traffic', definition: 'cars, buses and other vehicles on the road' },
      { word: 'shuttle bus', definition: 'a bus that travels regularly between two places' },
      { word: 'refresh', definition: 'review or remind yourself of something' },
      { word: 'stock', definition: 'fill with supplies' },
      { word: 'freshen up', definition: 'make yourself clean and tidy' },
    ],
  },
  theory: {
    title: 'From Wake-Up to Boarding',
    content: "This case study follows a flight attendant's early morning routine, from waking up before dawn to the final preparations before passengers board. The pre-flight briefing is a critical moment where the senior crew member reviews safety procedures, assigns responsibilities, and makes sure the whole team is ready to work together.",
    audioExplanation: {
      id: 'theory-audio',
      text: "Explanation of a flight attendant's pre-flight routine",
      audioUrl: `${A2B}/theory-explanation.wav`,
      durationSeconds: 20,
      speaker: 'instructor',
    },
  },
  icaoPhraseoology: STANDARD_PHRASEOLOGY,
  cabinCrewPhraseoology: STANDARD_PHRASEOLOGY,
  airlineVocabulary: [{
    category: 'Daily Routine & Briefing',
    terms: [
      { term: 'Tucked away', definition: 'Carefully put away', example: 'Her travel documents were tucked away in her bag.' },
      { term: 'Shuttle bus', definition: 'A bus that travels regularly between two places', example: 'She took the shuttle bus to the airport.' },
      { term: 'Refresh', definition: 'Review or remind yourself of something', example: 'She refreshed her memory on emergency procedures.' },
      { term: 'Stock', definition: 'Fill with supplies', example: 'The crew stocked the galley with meals and drinks.' },
      { term: 'Freshen up', definition: 'Make yourself clean and tidy', example: 'She freshened up before boarding.' },
    ],
  }],
  professionalExpressions: [
    { situation: 'Starting the day', expression: 'Good morning!', alternativeExpressions: ['Morning!', 'Rise and shine!'] },
  ],
  pronunciation: [
    { id: 'pron-1', text: 'Pre-flight briefing', audioUrl: `${A2B}/pronunciation.wav`, durationSeconds: 3 },
  ],
  vocabulary: [
    { word: 'tucked away', definition: 'carefully put away' },
    { word: 'traffic', definition: 'cars, buses and other vehicles on the road' },
    { word: 'shuttle bus', definition: 'a bus that travels regularly between two places' },
    { word: 'refresh', definition: 'review or remind yourself of something' },
    { word: 'stock', definition: 'fill with supplies' },
    { word: 'freshen up', definition: 'make yourself clean and tidy' },
  ],
  grammar: [
    {
      rule: 'Present Simple for describing routines - used to sequence the steps of a daily work routine',
      examples: [
        { sentence: 'She wakes up early and prepares her uniform.', audioUrl: `${A2B}/grammar-1.wav` },
        { sentence: 'She checks her travel documents before she travels to work.', audioUrl: `${A2B}/grammar-2.wav` },
        { sentence: 'The crew reviews safety procedures during the pre-flight briefing.', audioUrl: `${A2B}/grammar-3.wav` },
      ],
    },
  ],
  exercises: [
    {
      id: 'ex-1', type: 'multiple-choice', points: 10,
      question: 'True or False: The flight attendant checks her passport and documents before passengers board.',
      options: [
        { id: 'o1', text: 'True', isCorrect: true },
        { id: 'o2', text: 'False', isCorrect: false },
      ],
    },
    {
      id: 'ex-2', type: 'multiple-choice', points: 10,
      question: 'True or False: She reviews emergency procedures before passengers board.',
      options: [
        { id: 'o1', text: 'True', isCorrect: true },
        { id: 'o2', text: 'False', isCorrect: false },
      ],
    },
    {
      id: 'ex-3', type: 'multiple-choice', points: 10,
      question: 'True or False: She attends the pre-flight briefing before passengers board.',
      options: [
        { id: 'o1', text: 'True', isCorrect: true },
        { id: 'o2', text: 'False', isCorrect: false },
      ],
    },
    {
      id: 'ex-4', type: 'multiple-choice', points: 10,
      question: 'True or False: The crew checks emergency equipment before passengers board.',
      options: [
        { id: 'o1', text: 'True', isCorrect: true },
        { id: 'o2', text: 'False', isCorrect: false },
      ],
    },
    {
      id: 'ex-5', type: 'multiple-choice', points: 10,
      question: 'True or False: The crew stocks meals and drinks before passengers board.',
      options: [
        { id: 'o1', text: 'True', isCorrect: true },
        { id: 'o2', text: 'False', isCorrect: false },
      ],
    },
    {
      id: 'ex-6', type: 'multiple-choice', points: 10,
      question: 'True or False: The crew welcomes passengers as part of the pre-flight preparation.',
      options: [
        { id: 'o1', text: 'True', isCorrect: true },
        { id: 'o2', text: 'False', isCorrect: false },
      ],
    },
    {
      id: 'ex-7', type: 'multiple-choice', points: 10,
      question: 'True or False: The crew serves meals before passengers board.',
      options: [
        { id: 'o1', text: 'True', isCorrect: false },
        { id: 'o2', text: 'False', isCorrect: true, explanation: 'Meal service happens during the flight, not before boarding.' },
      ],
    },
    {
      id: 'ex-8', type: 'speaking', points: 15,
      question: 'Why do safety procedures receive special attention during pre-flight briefings? Explain in your own words.',
      explanation: 'Because passenger safety and security are the highest priorities, and crew members must be prepared for emergencies.',
    },
    {
      id: 'ex-9', type: 'speaking', points: 15,
      question: 'Discuss the pre-flight briefing: Where does it take place? Who attends? Who leads it? What topics are discussed? What is the top priority? Why is it necessary?',
    },
    {
      id: 'ex-10', type: 'speaking', points: 15,
      question: 'Which of these topics are usually included in a pre-flight briefing? Discuss: Teamwork, Motivation, Personal appearance, Responsibilities, Task allocation, Introductions, Leadership, Cockpit entry procedures, Special needs passengers, Weather, Meal service, Emergency procedures, Safety.',
    },
    {
      id: 'ex-11', type: 'speaking', points: 15,
      question: 'Reflect: Why is the pre-flight briefing important? Which part of the briefing is the most important? How would you feel before a pre-flight briefing?',
    },
  ],
  quiz: {
    id: 'quiz-2-2',
    title: 'A Day in the Life Quiz',
    passingScore: 70,
    exercises: [
      {
        id: 'q-1', type: 'multiple-choice', points: 20,
        question: 'What time does the flight attendant wake up?',
        options: [
          { id: 'o1', text: '03:30', isCorrect: true },
          { id: 'o2', text: '04:30', isCorrect: false },
          { id: 'o3', text: '05:00', isCorrect: false },
          { id: 'o4', text: '06:00', isCorrect: false },
        ],
      },
      {
        id: 'q-2', type: 'multiple-choice', points: 20,
        question: 'What aircraft is mentioned in the case study?',
        options: [
          { id: 'o1', text: 'Boeing 757', isCorrect: true },
          { id: 'o2', text: 'Airbus A320', isCorrect: false },
          { id: 'o3', text: 'Boeing 777', isCorrect: false },
          { id: 'o4', text: 'Airbus A380', isCorrect: false },
        ],
      },
      {
        id: 'q-3', type: 'multiple-choice', points: 20,
        question: 'What time does the pre-flight briefing start?',
        options: [
          { id: 'o1', text: '05:30', isCorrect: true },
          { id: 'o2', text: '05:15', isCorrect: false },
          { id: 'o3', text: '06:00', isCorrect: false },
          { id: 'o4', text: '03:30', isCorrect: false },
        ],
      },
      {
        id: 'q-4', type: 'multiple-choice', points: 20,
        question: 'Who leads the pre-flight briefing?',
        options: [
          { id: 'o1', text: 'The senior crew member', isCorrect: true },
          { id: 'o2', text: 'The captain', isCorrect: false },
          { id: 'o3', text: 'Ground staff', isCorrect: false },
          { id: 'o4', text: 'A passenger', isCorrect: false },
        ],
      },
      {
        id: 'q-5', type: 'multiple-choice', points: 20,
        question: 'What happens at 06:00 according to the case study?',
        options: [
          { id: 'o1', text: 'Pre-flight preparations for boarding', isCorrect: true },
          { id: 'o2', text: 'She wakes up', isCorrect: false },
          { id: 'o3', text: 'The briefing starts', isCorrect: false },
          { id: 'o4', text: 'The flight departs', isCorrect: false },
        ],
      },
    ],
  },
  flashcards: [
    { id: 'fc-1', front: 'Tucked away', back: 'Carefully put away', audioFront: `${A2B}/fc1-front.wav`, audioBack: `${A2B}/fc1-back.wav` },
    { id: 'fc-2', front: 'Traffic', back: 'Cars, buses and other vehicles on the road', audioFront: `${A2B}/fc2-front.wav`, audioBack: `${A2B}/fc2-back.wav` },
    { id: 'fc-3', front: 'Shuttle bus', back: 'A bus that travels regularly between two places', audioFront: `${A2B}/fc3-front.wav`, audioBack: `${A2B}/fc3-back.wav` },
    { id: 'fc-4', front: 'Refresh', back: 'Review or remind yourself of something', audioFront: `${A2B}/fc4-front.wav`, audioBack: `${A2B}/fc4-back.wav` },
    { id: 'fc-5', front: 'Stock', back: 'Fill with supplies', audioFront: `${A2B}/fc5-front.wav`, audioBack: `${A2B}/fc5-back.wav` },
    { id: 'fc-6', front: 'Freshen up', back: 'Make yourself clean and tidy', audioFront: `${A2B}/fc6-front.wav`, audioBack: `${A2B}/fc6-back.wav` },
  ],
  review: {
    keyPoints: [
      'A flight attendant\'s day starts hours before boarding, with document checks and travel to the airport',
      'Crew review the cabin manual and emergency procedures shortly before the briefing',
      'The pre-flight briefing covers flight details, responsibilities, passenger information, security, and emergency procedures',
      'Final preparations include checking equipment, stocking supplies, and getting ready to welcome passengers',
      'Safety is the top priority throughout the pre-flight routine',
    ],
    commonMistakes: [
      { mistake: 'Confusing meal service with meal stocking', correction: 'Meals are stocked before boarding but served during the flight', explanation: 'These are two separate steps in the routine' },
      { mistake: 'Underestimating the briefing', correction: 'Treat the pre-flight briefing as essential, not routine', explanation: 'It ensures the whole team is aligned on safety and responsibilities' },
    ],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

// ============================================================
// Unit 2, Lesson 3: Welcome on Board
// Boarding passengers, seat problems, boarding pass vocabulary
// ============================================================
const A2C = '/audio/unit-2/lesson-3';

const WELCOME_ON_BOARD_LESSON: any = {
  id: 'lesson-2-3',
  unitId: 'unit-2',
  title: 'Welcome on Board',
  description: 'Welcoming passengers, handling seat problems, and boarding pass vocabulary',
  icon: '👋',
  icaoLevel: 4,
  category: 'cabin-crew',
  difficulty: 'intermediate',
  xpReward: 150,
  estimatedDurationMinutes: 45,
  locked: false,
  order: 3,
  objectives: [
    { id: 'obj-1', description: 'Welcome passengers on board using polite, professional language', type: 'speaking' },
    { id: 'obj-2', description: 'Understand a real boarding exchange between crew and passenger', type: 'listening' },
    { id: 'obj-3', description: 'Handle a passenger seating problem professionally', type: 'listening' },
    { id: 'obj-4', description: 'Learn boarding pass and boarding process vocabulary', type: 'vocabulary' },
  ],
  scenario: {
    id: 'scenario-welcome-on-board',
    title: 'Welcoming Passengers',
    description: "Jenny welcomes a passenger on board, checks her boarding pass, and directs her to seat 16C.",
    context: 'Aircraft door, during boarding',
    audioSegments: [
      { id: 'l3-01', text: 'Jenny: Good morning, madam. Welcome on board.', audioUrl: `${A2C}/l3-01-jenny.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'l3-02', text: 'Passenger: Good morning.', audioUrl: `${A2C}/l3-02-passenger.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 'l3-03', text: 'Jenny: Could I see your boarding pass, please?', audioUrl: `${A2C}/l3-03-jenny.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'l3-04', text: 'Passenger: Certainly.', audioUrl: `${A2C}/l3-04-passenger.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 'l3-05', text: 'Jenny: Thank you. Your seat is 16C.', audioUrl: `${A2C}/l3-05-jenny.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'l3-06', text: 'Jenny: Straight ahead and turn left.', audioUrl: `${A2C}/l3-06-jenny.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'l3-07', text: 'Passenger: Thank you.', audioUrl: `${A2C}/l3-07-passenger.wav`, durationSeconds: 2, speaker: 'passenger' },
    ],
    vocabulary: [
      { word: 'Boarding pass', definition: 'The document showing a passenger\'s flight, seat number and boarding time' },
      { word: 'Hand-baggage', definition: 'Small luggage passengers carry onto the aircraft themselves' },
      { word: 'Overhead lockers', definition: 'Storage compartments above the seats for hand-baggage' },
      { word: 'Seating arrangements', definition: 'The plan of which passenger sits in which seat' },
    ],
  },
  theory: {
    title: 'Welcoming Passengers on Board',
    content: 'When passengers board, crew greet each one with a smile, check their boarding pass, and direct them to their seat. Before boarding starts, crew make sure safety cards are in every seat, check the toilets, and check their uniform is smart. While passengers are boarding, crew help with luggage, greet passengers, and give special attention to older passengers or those who need help. Sometimes a passenger has a seating problem, for example if the seat they wanted is not available - crew handle this calmly, apologize, and explain what they will do to help.',
    audioExplanation: {
      id: 'theory-audio',
      text: 'Explanation of welcoming passengers on board',
      audioUrl: `${A2C}/theory-explanation.wav`,
      durationSeconds: 25,
      speaker: 'instructor',
    },
  },
  icaoPhraseoology: STANDARD_PHRASEOLOGY,
  cabinCrewPhraseoology: {
    category: 'Polite Requests for Boarding',
    phrases: [
      { situation: 'Asking for a boarding pass', phrase: 'Can I see your boarding pass?', meaning: 'Simple polite request', example: 'Can I see your boarding pass?' },
      { situation: 'Asking for a boarding pass (more formal)', phrase: 'Could I please see your boarding pass?', meaning: 'More formal, polite request', example: 'Could I please see your boarding pass?' },
      { situation: 'Checking a seat number', phrase: 'Can I look at your seat number, please?', meaning: 'Polite request to confirm seating', example: 'Can I look at your seat number, please?' },
      { situation: 'Asking someone to wait temporarily', phrase: 'Would you mind taking this seat until I have checked the passenger list?', meaning: 'Very polite way to ask a passenger to wait', example: 'Would you mind taking this seat until I have checked the passenger list?' },
      { situation: 'Guiding a passenger', phrase: 'Would you follow me, please?', meaning: 'Polite way to lead someone', example: 'Would you follow me, please?' },
      { situation: 'Asking someone to turn something off', phrase: 'Would you please turn off your mobile phone?', meaning: 'Polite instruction', example: 'Would you please turn off your mobile phone?' },
    ],
  },
  airlineVocabulary: [{
    category: 'Boarding Pass & Boarding Process',
    terms: [
      { term: 'Boarding pass', definition: 'Document showing flight, seat number and boarding time', example: 'Could I see your boarding pass, please?' },
      { term: 'Gate number', definition: 'The number of the departure gate a passenger must go to', example: 'Your gate number is printed on your boarding pass.' },
      { term: 'Seat number', definition: 'The specific seat assigned to a passenger', example: 'Your seat number is 16C.' },
      { term: 'Check-in', definition: 'The process of confirming a flight and getting a boarding pass before departure', example: 'Seating arrangements are made at check-in.' },
      { term: 'Hand-baggage', definition: 'Luggage passengers carry onto the aircraft themselves', example: 'Passengers proceed to the aircraft with their hand-baggage only.' },
      { term: 'Overhead lockers', definition: 'Storage compartments above the seats', example: 'Passengers put their hand-baggage into the overhead lockers.' },
      { term: 'Window seat', definition: 'A seat next to the aircraft window', example: 'Many passengers prefer window seats to aisle seats.' },
      { term: 'In advance', definition: 'Before the usual or necessary time', example: 'Passengers often book window seats in advance.' },
    ],
  }],
  professionalExpressions: [
    { situation: 'Welcoming a passenger', expression: 'Welcome on board.', alternativeExpressions: ['Good morning, welcome aboard.', 'Hello, welcome on board.'] },
    { situation: 'Apologizing for an inconvenience', expression: 'I\'m sorry about that.', alternativeExpressions: ['I apologize for the inconvenience.', 'I\'m sorry for the trouble.'] },
    { situation: 'Guiding a passenger to their seat', expression: 'Straight ahead and turn left.', alternativeExpressions: ['This way, please.', 'Carry on down the cabin.'] },
  ],
  pronunciation: [
    { id: 'pron-01', text: 'Welcome on board.', audioUrl: `${A2C}/pron-01.wav`, durationSeconds: 2 },
    { id: 'pron-02', text: 'Good morning.', audioUrl: `${A2C}/pron-02.wav`, durationSeconds: 2 },
    { id: 'pron-03', text: 'Good afternoon.', audioUrl: `${A2C}/pron-03.wav`, durationSeconds: 2 },
    { id: 'pron-04', text: 'Good evening.', audioUrl: `${A2C}/pron-04.wav`, durationSeconds: 2 },
    { id: 'pron-05', text: 'Hello, how are you?', audioUrl: `${A2C}/pron-05.wav`, durationSeconds: 2 },
    { id: 'pron-06', text: 'Hello there, how are you today?', audioUrl: `${A2C}/pron-06.wav`, durationSeconds: 3 },
    { id: 'pron-07', text: 'Could I please see your boarding pass?', audioUrl: `${A2C}/pron-07.wav`, durationSeconds: 3 },
    { id: 'pron-08', text: 'Would you mind just taking this seat until I have checked the passenger list?', audioUrl: `${A2C}/pron-08.wav`, durationSeconds: 5 },
    { id: 'pron-09', text: 'Can I help you, madam?', audioUrl: `${A2C}/pron-09.wav`, durationSeconds: 2 },
    { id: 'pron-10', text: 'Can I help you, sir?', audioUrl: `${A2C}/pron-10.wav`, durationSeconds: 2 },
    { id: 'pron-11', text: 'Would you follow me, please?', audioUrl: `${A2C}/pron-11.wav`, durationSeconds: 2 },
    { id: 'pron-12', text: 'This way, please.', audioUrl: `${A2C}/pron-12.wav`, durationSeconds: 2 },
    { id: 'pron-13', text: 'Here you are.', audioUrl: `${A2C}/pron-13.wav`, durationSeconds: 2 },
    { id: 'pron-14', text: 'Straight across the cabin and turn left.', audioUrl: `${A2C}/pron-14.wav`, durationSeconds: 3 },
    { id: 'pron-15', text: "That's right.", audioUrl: `${A2C}/pron-15.wav`, durationSeconds: 2 },
    { id: 'pron-16', text: 'Carry on down the cabin.', audioUrl: `${A2C}/pron-16.wav`, durationSeconds: 2 },
  ],
  vocabulary: [
    { word: 'Boarding pass', definition: 'Document showing flight, seat number and boarding time' },
    { word: 'Hand-baggage', definition: 'Luggage passengers carry onto the aircraft themselves' },
    { word: 'Overhead lockers', definition: 'Storage compartments above the seats' },
    { word: 'Window seat', definition: 'A seat next to the aircraft window' },
    { word: 'In advance', definition: 'Before the usual or necessary time' },
    { word: 'Check-in', definition: 'The process of confirming a flight and getting a boarding pass' },
  ],
  grammar: [
    {
      rule: 'Polite requests with Can / Could / Would - increasing levels of formality when asking passengers for something',
      examples: [
        { sentence: 'Can I see your boarding pass?' },
        { sentence: 'Could I please see your boarding pass?' },
        { sentence: 'Would you mind taking this seat until I have checked the passenger list?' },
      ],
    },
  ],
  exercises: [
    // Speaking-1: When is each task done? (Before boarding / During boarding / Later in the flight)
    {
      id: 'ex-1', type: 'multiple-choice', points: 10,
      question: 'When do you make sure the safety instruction cards are in every passenger seat?',
      options: [
        { id: 'o1', text: 'Before boarding', isCorrect: true },
        { id: 'o2', text: 'During boarding', isCorrect: false },
        { id: 'o3', text: 'Later in the flight', isCorrect: false },
      ],
    },
    {
      id: 'ex-2', type: 'multiple-choice', points: 10,
      question: 'When do you help passengers put their luggage in the overhead lockers?',
      options: [
        { id: 'o1', text: 'Before boarding', isCorrect: false },
        { id: 'o2', text: 'During boarding', isCorrect: true },
        { id: 'o3', text: 'Later in the flight', isCorrect: false },
      ],
    },
    {
      id: 'ex-3', type: 'multiple-choice', points: 10,
      question: 'When do you check the toilets?',
      options: [
        { id: 'o1', text: 'Before boarding', isCorrect: true },
        { id: 'o2', text: 'During boarding', isCorrect: false },
        { id: 'o3', text: 'Later in the flight', isCorrect: false },
      ],
    },
    {
      id: 'ex-4', type: 'multiple-choice', points: 10,
      question: 'When might you need to hurry passengers to their seats?',
      options: [
        { id: 'o1', text: 'Before boarding', isCorrect: false },
        { id: 'o2', text: 'During boarding', isCorrect: true },
        { id: 'o3', text: 'Later in the flight', isCorrect: false },
      ],
    },
    {
      id: 'ex-5', type: 'multiple-choice', points: 10,
      question: 'When do you check that your uniform is smart?',
      options: [
        { id: 'o1', text: 'Before boarding', isCorrect: true },
        { id: 'o2', text: 'During boarding', isCorrect: false },
        { id: 'o3', text: 'Later in the flight', isCorrect: false },
      ],
    },
    {
      id: 'ex-6', type: 'multiple-choice', points: 10,
      question: 'When do you greet passengers with a smile?',
      options: [
        { id: 'o1', text: 'Before boarding', isCorrect: false },
        { id: 'o2', text: 'During boarding', isCorrect: true },
        { id: 'o3', text: 'Later in the flight', isCorrect: false },
      ],
    },
    {
      id: 'ex-7', type: 'multiple-choice', points: 10,
      question: 'When do you hand out arrival immigration forms?',
      options: [
        { id: 'o1', text: 'Before boarding', isCorrect: false },
        { id: 'o2', text: 'During boarding', isCorrect: false },
        { id: 'o3', text: 'Later in the flight', isCorrect: true },
      ],
    },
    {
      id: 'ex-8', type: 'multiple-choice', points: 10,
      question: 'When do you give special attention to older passengers?',
      options: [
        { id: 'o1', text: 'Before boarding', isCorrect: false },
        { id: 'o2', text: 'During boarding', isCorrect: true },
        { id: 'o3', text: 'Later in the flight', isCorrect: false },
      ],
    },
    {
      id: 'ex-9', type: 'multiple-choice', points: 10,
      question: 'When do you ask children not to leave their seats?',
      options: [
        { id: 'o1', text: 'Before boarding', isCorrect: false },
        { id: 'o2', text: 'During boarding', isCorrect: false },
        { id: 'o3', text: 'Later in the flight', isCorrect: true },
      ],
    },
    {
      id: 'ex-10', type: 'multiple-choice', points: 10,
      question: 'When do you make sure everyone has a blanket?',
      options: [
        { id: 'o1', text: 'Before boarding', isCorrect: false },
        { id: 'o2', text: 'During boarding', isCorrect: false },
        { id: 'o3', text: 'Later in the flight', isCorrect: true },
      ],
    },
    {
      id: 'ex-11', type: 'multiple-choice', points: 10,
      question: 'When do you check the number of meals?',
      options: [
        { id: 'o1', text: 'Before boarding', isCorrect: true },
        { id: 'o2', text: 'During boarding', isCorrect: false },
        { id: 'o3', text: 'Later in the flight', isCorrect: false },
      ],
    },
    {
      id: 'ex-12', type: 'multiple-choice', points: 10,
      question: 'When do you make coffee for the flight crew?',
      options: [
        { id: 'o1', text: 'Before boarding', isCorrect: false },
        { id: 'o2', text: 'During boarding', isCorrect: false },
        { id: 'o3', text: 'Later in the flight', isCorrect: true },
      ],
    },
    // Speaking-2: ranking
    {
      id: 'ex-13', type: 'speaking', points: 15,
      question: 'Look at the boarding duties above. Put them in order of importance and explain your reasoning out loud.',
    },
    // Listening-3
    {
      id: 'ex-14', type: 'multiple-choice', points: 15,
      question: 'Listen to Jenny welcoming a passenger on board. How many passengers does Jenny greet?',
      audio: { id: 'l3-audio', text: 'Jenny welcomes a passenger on board', audioUrl: `${A2C}/l3-full-scene.wav`, durationSeconds: 16, speaker: 'crew' },
      options: [
        { id: 'o1', text: '1', isCorrect: true },
        { id: 'o2', text: '2', isCorrect: false },
        { id: 'o3', text: '3', isCorrect: false },
        { id: 'o4', text: '4', isCorrect: false },
      ],
    },
    // Listening-4: fill in the blanks from the real transcript
    {
      id: 'ex-15', type: 'fill-blank', points: 10,
      question: '_________ morning, madam. Welcome on board.',
      audio: { id: 'l3-01-audio', text: 'Jenny greeting', audioUrl: `${A2C}/l3-01-jenny.wav`, durationSeconds: 3, speaker: 'crew' },
      correctAnswer: 'Good',
    },
    {
      id: 'ex-16', type: 'fill-blank', points: 10,
      question: '_________ I see your boarding pass, please?',
      audio: { id: 'l3-03-audio', text: 'Jenny asking for boarding pass', audioUrl: `${A2C}/l3-03-jenny.wav`, durationSeconds: 3, speaker: 'crew' },
      correctAnswer: 'Could',
    },
    {
      id: 'ex-17', type: 'fill-blank', points: 10,
      question: 'Thank you. Your seat is _________.',
      audio: { id: 'l3-05-audio', text: 'Jenny giving the seat number', audioUrl: `${A2C}/l3-05-jenny.wav`, durationSeconds: 3, speaker: 'crew' },
      correctAnswer: '16C',
    },
    {
      id: 'ex-18', type: 'fill-blank', points: 10,
      question: '_________ ahead and turn left.',
      audio: { id: 'l3-06-audio', text: 'Jenny giving directions', audioUrl: `${A2C}/l3-06-jenny.wav`, durationSeconds: 4, speaker: 'crew' },
      correctAnswer: 'Straight',
    },
    // Listening-5: passenger problem
    {
      id: 'ex-19', type: 'multiple-choice', points: 15,
      question: 'Listen to the passenger problem. What is the problem?',
      audio: { id: 'l5-audio', text: 'A passenger seating problem', audioUrl: `${A2C}/l5-full-scene.wav`, durationSeconds: 48, speaker: 'passenger' },
      options: [
        { id: 'o1', text: 'She was given a seat other than the window seat she requested', isCorrect: true },
        { id: 'o2', text: 'She lost her boarding pass', isCorrect: false },
        { id: 'o3', text: 'She missed her flight', isCorrect: false },
        { id: 'o4', text: 'She has no ID', isCorrect: false },
      ],
    },
    // Listening-6: comprehension quiz
    {
      id: 'ex-20', type: 'multiple-choice', points: 10,
      question: 'True or False: The plane is full.',
      options: [
        { id: 'o1', text: 'True', isCorrect: true },
        { id: 'o2', text: 'False', isCorrect: false },
      ],
    },
    {
      id: 'ex-21', type: 'multiple-choice', points: 10,
      question: 'What seat number has the woman been given?',
      options: [
        { id: 'o1', text: '24E', isCorrect: true },
        { id: 'o2', text: '12A', isCorrect: false },
        { id: 'o3', text: '30C', isCorrect: false },
        { id: 'o4', text: '8D', isCorrect: false },
      ],
    },
    {
      id: 'ex-22', type: 'multiple-choice', points: 10,
      question: 'Why is she upset?',
      options: [
        { id: 'o1', text: 'She wanted a window seat but was given seat 24E', isCorrect: true },
        { id: 'o2', text: 'She wanted more legroom', isCorrect: false },
        { id: 'o3', text: 'She missed lunch', isCorrect: false },
        { id: 'o4', text: 'She lost her passport', isCorrect: false },
      ],
    },
    {
      id: 'ex-23', type: 'multiple-choice', points: 10,
      question: 'When did she request a window seat?',
      options: [
        { id: 'o1', text: 'Three weeks ago, when she checked in online', isCorrect: true },
        { id: 'o2', text: 'This morning, at the gate', isCorrect: false },
        { id: 'o3', text: 'Last year', isCorrect: false },
        { id: 'o4', text: 'She never requested one', isCorrect: false },
      ],
    },
    {
      id: 'ex-24', type: 'multiple-choice', points: 10,
      question: 'What will the flight attendant do?',
      options: [
        { id: 'o1', text: 'Check the passenger list for a window seat becoming available', isCorrect: true },
        { id: 'o2', text: 'Upgrade her to business class', isCorrect: false },
        { id: 'o3', text: 'Give her a refund', isCorrect: false },
        { id: 'o4', text: 'Ask her to leave the aircraft', isCorrect: false },
      ],
    },
    {
      id: 'ex-25', type: 'multiple-choice', points: 10,
      question: 'What does the flight attendant ask the passenger to do?',
      options: [
        { id: 'o1', text: 'Take the seat she was given for now and wait', isCorrect: true },
        { id: 'o2', text: 'Go to another gate', isCorrect: false },
        { id: 'o3', text: 'Speak to the captain', isCorrect: false },
        { id: 'o4', text: 'Complete a form', isCorrect: false },
      ],
    },
    // Vocabulary-7: boarding pass fields
    {
      id: 'ex-26', type: 'multiple-choice', points: 10,
      question: 'Which field on a boarding pass tells you when to be at the gate?',
      options: [
        { id: 'o1', text: 'Boarding time', isCorrect: true },
        { id: 'o2', text: 'Flight number', isCorrect: false },
        { id: 'o3', text: 'Seat number', isCorrect: false },
        { id: 'o4', text: 'Date', isCorrect: false },
      ],
    },
    {
      id: 'ex-27', type: 'multiple-choice', points: 10,
      question: 'Which field on a boarding pass tells you where to go to board the aircraft?',
      options: [
        { id: 'o1', text: 'Gate number', isCorrect: true },
        { id: 'o2', text: 'Seat number', isCorrect: false },
        { id: 'o3', text: 'Airline', isCorrect: false },
        { id: 'o4', text: 'Family name', isCorrect: false },
      ],
    },
    {
      id: 'ex-28', type: 'multiple-choice', points: 10,
      question: 'Which field on a boarding pass identifies which flight you are on?',
      options: [
        { id: 'o1', text: 'Flight number', isCorrect: true },
        { id: 'o2', text: 'Boarding time', isCorrect: false },
        { id: 'o3', text: 'Gate number', isCorrect: false },
        { id: 'o4', text: 'Date', isCorrect: false },
      ],
    },
    {
      id: 'ex-29', type: 'multiple-choice', points: 10,
      question: 'Which field on a boarding pass tells crew where you should sit?',
      options: [
        { id: 'o1', text: 'Seat number', isCorrect: true },
        { id: 'o2', text: 'Gate number', isCorrect: false },
        { id: 'o3', text: 'Boarding time', isCorrect: false },
        { id: 'o4', text: 'Flight number', isCorrect: false },
      ],
    },
    // Vocabulary-8: fill in the blanks (split from the word-bank paragraph)
    {
      id: 'ex-30', type: 'fill-blank', points: 10,
      question: 'After _________, passengers proceed to the aircraft with their hand-baggage only.',
      correctAnswer: 'check-in',
    },
    {
      id: 'ex-31', type: 'fill-blank', points: 10,
      question: 'Passengers proceed to the aircraft with their _________ only.',
      correctAnswer: 'hand-baggage',
    },
    {
      id: 'ex-32', type: 'fill-blank', points: 10,
      question: 'On arrival, passengers present their _________ to the flight attendant.',
      correctAnswer: 'boarding pass',
    },
    {
      id: 'ex-33', type: 'fill-blank', points: 10,
      question: 'The boarding pass has the _________ on it.',
      correctAnswer: 'seat number',
    },
    {
      id: 'ex-34', type: 'fill-blank', points: 10,
      question: '_________ are made at check-in.',
      correctAnswer: 'Seating arrangements',
    },
    {
      id: 'ex-35', type: 'fill-blank', points: 10,
      question: 'Many passengers prefer _________ to aisle seats.',
      correctAnswer: 'window seats',
    },
    {
      id: 'ex-36', type: 'fill-blank', points: 10,
      question: 'Passengers often insist on booking window seats _________.',
      correctAnswer: 'in advance',
    },
    {
      id: 'ex-37', type: 'fill-blank', points: 10,
      question: 'Passengers can ask for help to put their hand-baggage into the _________.',
      correctAnswer: 'overhead lockers',
    },
    // Speaking-10: role play
    {
      id: 'ex-38', type: 'speaking', points: 15,
      question: 'Role play: take turns welcoming different types of passengers on board and organizing their seating.',
    },
  ],
  quiz: {
    id: 'quiz-2-3',
    title: 'Welcome on Board Quiz',
    passingScore: 70,
    exercises: [
      {
        id: 'q-1', type: 'multiple-choice', points: 20,
        question: 'What seat is Jenny\'s passenger given?',
        options: [
          { id: 'o1', text: '16C', isCorrect: true },
          { id: 'o2', text: '24E', isCorrect: false },
          { id: 'o3', text: '12A', isCorrect: false },
          { id: 'o4', text: '8D', isCorrect: false },
        ],
      },
      {
        id: 'q-2', type: 'multiple-choice', points: 20,
        question: 'True or False: The flight in the passenger problem scene is full.',
        options: [
          { id: 'o1', text: 'True', isCorrect: true },
          { id: 'o2', text: 'False', isCorrect: false },
        ],
      },
      {
        id: 'q-3', type: 'multiple-choice', points: 20,
        question: 'What did the upset passenger request when she checked in online?',
        options: [
          { id: 'o1', text: 'A window seat', isCorrect: true },
          { id: 'o2', text: 'An aisle seat', isCorrect: false },
          { id: 'o3', text: 'Extra legroom', isCorrect: false },
          { id: 'o4', text: 'A vegetarian meal', isCorrect: false },
        ],
      },
      {
        id: 'q-4', type: 'multiple-choice', points: 20,
        question: 'What does Jenny say to politely ask for the boarding pass?',
        options: [
          { id: 'o1', text: 'Could I see your boarding pass, please?', isCorrect: true },
          { id: 'o2', text: 'Give me your boarding pass.', isCorrect: false },
          { id: 'o3', text: 'Boarding pass now, please.', isCorrect: false },
          { id: 'o4', text: 'Do you have a boarding pass?', isCorrect: false },
        ],
      },
      {
        id: 'q-5', type: 'multiple-choice', points: 20,
        question: 'According to the lesson, when should passengers book window seats?',
        options: [
          { id: 'o1', text: 'In advance', isCorrect: true },
          { id: 'o2', text: 'At the gate', isCorrect: false },
          { id: 'o3', text: 'After boarding', isCorrect: false },
          { id: 'o4', text: 'It is not possible to choose', isCorrect: false },
        ],
      },
    ],
  },
  flashcards: [
    { id: 'fc-1', front: 'Boarding pass', back: 'Document showing flight, seat number and boarding time' },
    { id: 'fc-2', front: 'Hand-baggage', back: 'Luggage passengers carry onto the aircraft themselves' },
    { id: 'fc-3', front: 'Overhead lockers', back: 'Storage compartments above the seats' },
    { id: 'fc-4', front: 'Window seat', back: 'A seat next to the aircraft window' },
    { id: 'fc-5', front: 'In advance', back: 'Before the usual or necessary time' },
  ],
  review: {
    keyPoints: [
      'Before boarding: check safety cards, toilets, uniform and meal count',
      'During boarding: greet passengers, help with luggage, give attention to those who need it',
      'Later in the flight: hand out immigration forms, offer blankets, tidy the galley',
      'Use polite request forms (Can / Could / Would) when speaking to passengers, more formal for more sensitive requests',
      'When there is a seating problem, apologize, explain calmly, and say what you will do to help',
    ],
    commonMistakes: [
      { mistake: 'Using overly direct language with passengers', correction: "Use polite forms like 'Could I...?' or 'Would you mind...?' instead of direct commands", explanation: 'Politeness is expected in passenger-facing communication' },
      { mistake: 'Not explaining what you will do next', correction: 'Always tell the passenger the next step, e.g. "I\'ll check the passenger list."', explanation: 'This reassures passengers and reduces frustration' },
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
        : unitIdx === 1 && lessonIdx === 1
        ? CASE_STUDY_LESSON
        : unitIdx === 1 && lessonIdx === 2
        ? WELCOME_ON_BOARD_LESSON
        : LESSON_TEMPLATE(unitIdx + 1, lessonIdx + 1, `Lesson ${lessonIdx + 1}`)
    )
  })) as Unit[]
];
