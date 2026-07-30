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
const A1 = '/audio/unit-1/lesson-1';

const MEETING_COLLEAGUES_LESSON: any = {
  id: 'lesson-1-1',
  unitId: 'unit-1',
  title: 'Meeting Colleagues',
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
      { id: 'seg-01', text: 'Paola: Hi, I\'m Paola. Nice to meet you.', audioUrl: `${A1}/ex1-01-paola.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'seg-02', text: 'Tom: Hi Paola, I\'m Tom. Nice to meet you too. Is this your first flight to New York?', audioUrl: `${A1}/ex1-02-tom.wav`, durationSeconds: 5, speaker: 'crew' },
      { id: 'seg-03', text: 'Paola: No, I\'ve done this route a few times before. Have you flown to New York before?', audioUrl: `${A1}/ex1-03-paola.wav`, durationSeconds: 5, speaker: 'crew' },
      { id: 'seg-04', text: 'Tom: No, this is actually my first time on this route. I\'m a bit nervous!', audioUrl: `${A1}/ex1-04-tom.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'seg-05', text: 'Jenny: Hi everyone! Paola, great to see you again!', audioUrl: `${A1}/ex1-05-jenny.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'seg-06', text: 'Paola: Jenny! Hi! How are you? This is Tom, he\'s new to the New York route.', audioUrl: `${A1}/ex1-06-paola.wav`, durationSeconds: 5, speaker: 'crew' },
      { id: 'seg-07', text: 'Jenny: Hi Tom, nice to meet you. Sorry, I didn\'t catch your name properly. Was it Tom?', audioUrl: `${A1}/ex1-07-jenny.wav`, durationSeconds: 5, speaker: 'crew' },
      { id: 'seg-08', text: 'Tom: Yes, that\'s right, Tom.', audioUrl: `${A1}/ex1-08-tom.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'seg-09', text: 'Jenny: Great. Paola and I flew together to Madrid last month, it was a really fun flight.', audioUrl: `${A1}/ex1-09-jenny.wav`, durationSeconds: 5, speaker: 'crew' },
      { id: 'seg-10', text: 'Paola: Yes, it was! Anyway, the briefing starts in ten minutes, we should head over.', audioUrl: `${A1}/ex1-10-paola.wav`, durationSeconds: 5, speaker: 'crew' },
      { id: 'seg-11', text: 'Katrin: Hi everyone, I\'m Katrin!', audioUrl: `${A1}/ex2-01-katrin.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'seg-12', text: 'Paola: Katrin! Great to see you, how have you been? We flew together to Rome last year, remember?', audioUrl: `${A1}/ex2-02-paola.wav`, durationSeconds: 6, speaker: 'crew' },
      { id: 'seg-13', text: 'Katrin: Of course, I remember! How could I forget that turbulence!', audioUrl: `${A1}/ex2-03-katrin.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'seg-14', text: 'Tom: Hi Katrin, I\'m Tom, nice to meet you. This is my first time meeting you.', audioUrl: `${A1}/ex2-04-tom.wav`, durationSeconds: 5, speaker: 'crew' },
      { id: 'seg-15', text: 'Katrin: Nice to meet you too, Tom!', audioUrl: `${A1}/ex2-05-katrin.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'seg-16', text: 'Jenny: Hi Katrin, I don\'t think we\'ve met before. I\'m Jenny.', audioUrl: `${A1}/ex2-06-jenny.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'seg-17', text: 'Katrin: Hi Jenny, nice to meet you.', audioUrl: `${A1}/ex2-07-katrin.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'seg-18', text: 'Tom: So Katrin, are you looking forward to the flight to New York?', audioUrl: `${A1}/ex2-08-tom.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'seg-19', text: 'Katrin: Definitely, I love going to the US, the layover is always fun.', audioUrl: `${A1}/ex2-09-katrin.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'seg-20', text: 'Paola: Speaking of layovers, remember when I spilled a drink on a passenger during the Madrid flight, Jenny?', audioUrl: `${A1}/ex2-10-paola.wav`, durationSeconds: 6, speaker: 'crew' },
      { id: 'seg-21', text: 'Jenny: Oh no, I forgot about that! That was so embarrassing for you.', audioUrl: `${A1}/ex2-11-jenny.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'seg-22', text: 'Katrin: By the way, are we all on the same team for this flight?', audioUrl: `${A1}/ex2-12-katrin.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'seg-23', text: 'Tom: No, actually I heard Katrin and Leila are working together in business class, while the rest of us are in economy.', audioUrl: `${A1}/ex2-13-tom.wav`, durationSeconds: 7, speaker: 'crew' },
      { id: 'seg-24', text: 'Marcus: Good afternoon everyone, my name is Marcus and I\'ll be your purser today for the flight to New York. Let\'s go through the crew positions.', audioUrl: `${A1}/ex3-01-marcus.wav`, durationSeconds: 8, speaker: 'instructor' },
      { id: 'seg-25', text: 'Marcus: Katrin, you\'ll be working in economy class today, specifically at door four.', audioUrl: `${A1}/ex3-02-marcus.wav`, durationSeconds: 5, speaker: 'instructor' },
      { id: 'seg-26', text: 'Katrin: Got it, door four, economy.', audioUrl: `${A1}/ex3-03-katrin.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'seg-27', text: 'Marcus: Leila, you\'re in charge of business class today, and you\'ll be positioned at door two left.', audioUrl: `${A1}/ex3-04-marcus.wav`, durationSeconds: 6, speaker: 'instructor' },
      { id: 'seg-28', text: 'Leila: Perfect, business class, door two left.', audioUrl: `${A1}/ex3-05-leila.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'seg-29', text: 'Marcus: And Jutta, this is actually a very special flight for you, isn\'t it?', audioUrl: `${A1}/ex3-06-marcus.wav`, durationSeconds: 4, speaker: 'instructor' },
      { id: 'seg-30', text: 'Jutta: Yes, that\'s right! This is my last flight before retirement, after thirty-two years with the airline.', audioUrl: `${A1}/ex3-07-jutta.wav`, durationSeconds: 6, speaker: 'crew' },
      { id: 'seg-31', text: 'Marcus: Congratulations Jutta! You\'ll be working in economy with Katrin today.', audioUrl: `${A1}/ex3-08-marcus.wav`, durationSeconds: 5, speaker: 'instructor' },
      { id: 'seg-32', text: 'Jutta: Thank you so much, I\'m looking forward to it.', audioUrl: `${A1}/ex3-09-jutta.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'seg-33', text: 'Marcus: Alright everyone, let\'s have a great flight!', audioUrl: `${A1}/ex3-10-marcus.wav`, durationSeconds: 3, speaker: 'instructor' },
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
      audioUrl: `${A1}/theory-explanation.wav`,
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
    { id: 'pron-1', text: 'Purser', audioUrl: `${A1}/theory-explanation.wav`, durationSeconds: 2 },
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
    id: 'quiz-1-1',
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
    { id: 'fc-1', front: 'Purser', back: 'The senior cabin crew member in charge of the flight', audioFront: `${A1}/theory-explanation.wav`, audioBack: `${A1}/theory-explanation.wav` },
    { id: 'fc-2', front: 'Layover', back: 'A rest period between flights, often overnight in another city', audioFront: `${A1}/ex2-09-katrin.wav`, audioBack: `${A1}/ex2-09-katrin.wav` },
    { id: 'fc-3', front: "Sorry, I didn't catch your name. Was it...?", back: "Polite way to confirm a colleague's name", audioFront: `${A1}/ex1-07-jenny.wav`, audioBack: `${A1}/ex1-07-jenny.wav` },
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
// Unit 1, Lesson 2: Finding Out About the Flight
// The captain's pre-departure briefing: weather, cockpit procedures,
// checking and clarifying language
// ============================================================
const A1B = '/audio/unit-1/lesson-2';

const FINDING_OUT_LESSON: any = {
  id: 'lesson-1-2',
  unitId: 'unit-1',
  title: 'Finding Out About the Flight',
  description: "The captain's pre-departure briefing: weather, cockpit procedures, and checking information",
  icon: '🌩️',
  icaoLevel: 4,
  category: 'cabin-crew',
  difficulty: 'intermediate',
  xpReward: 150,
  estimatedDurationMinutes: 40,
  locked: false,
  order: 2,
  objectives: [
    { id: 'obj-1', description: "Understand a captain's pre-departure briefing", type: 'listening' },
    { id: 'obj-2', description: 'Use checking and clarifying language with colleagues', type: 'speaking' },
    { id: 'obj-3', description: 'Discuss how weather can affect flights and cabin service', type: 'speaking' },
    { id: 'obj-4', description: 'Learn vocabulary related to flight conditions and duties', type: 'vocabulary' },
  ],
  scenario: {
    id: 'scenario-finding-out-flight',
    title: "The Captain's Briefing",
    description: 'The captain introduces first officer Rick Schultz and briefs the crew on cockpit procedures and expected weather.',
    context: 'Briefing room, before departure',
    audioSegments: [
      { id: 'l2-01', text: "Captain: Good morning everyone, thanks for coming. Before we get started, I'd like to introduce our first officer today, Rick Schultz. Some of you may already know him.", audioUrl: `${A1B}/l2-01-captain.wav`, durationSeconds: 8, speaker: 'pilot' },
      { id: 'l2-02', text: 'Rick: Good morning, nice to see some familiar faces.', audioUrl: `${A1B}/l2-02-rick.wav`, durationSeconds: 3, speaker: 'pilot' },
      { id: 'l2-03', text: "Captain: I'm pleased to tell you that we have a full crew today and everyone is on time, which is always a good start.", audioUrl: `${A1B}/l2-03-captain.wav`, durationSeconds: 6, speaker: 'pilot' },
      { id: 'l2-04', text: 'Captain: Rick, could you talk the team through the cockpit entry procedures for today?', audioUrl: `${A1B}/l2-04-captain.wav`, durationSeconds: 4, speaker: 'pilot' },
      { id: 'l2-05', text: 'Rick: Sure. As usual, please knock twice before entering the cockpit and confirm your name over the interphone first.', audioUrl: `${A1B}/l2-05-rick.wav`, durationSeconds: 6, speaker: 'pilot' },
      { id: 'l2-06', text: "Captain: Now, I want to make sure everyone is aware of a possible weather problem today. We're expecting storms over the Atlantic, with strong winds and moderate turbulence about two hours into the flight.", audioUrl: `${A1B}/l2-06-captain.wav`, durationSeconds: 10, speaker: 'pilot' },
      { id: 'l2-07', text: 'Captain: The meal service should be finished by the time we reach that area, so please plan accordingly.', audioUrl: `${A1B}/l2-07-captain.wav`, durationSeconds: 5, speaker: 'pilot' },
      { id: 'l2-08', text: 'Captain: Because of this, the cabin crew will try to complete the service a little earlier than usual.', audioUrl: `${A1B}/l2-08-captain.wav`, durationSeconds: 5, speaker: 'pilot' },
      { id: 'l2-09', text: 'Captain: During the turbulence, please make sure all passengers are seated and strapped in, and that the cabin is secure.', audioUrl: `${A1B}/l2-09-captain.wav`, durationSeconds: 6, speaker: 'pilot' },
      { id: 'l2-10', text: "Captain: Finally, I want to make sure everyone is familiar with today's cockpit entry procedures. Any questions?", audioUrl: `${A1B}/l2-10-captain.wav`, durationSeconds: 5, speaker: 'pilot' },
    ],
    vocabulary: [
      { word: 'Moderate turbulence', definition: 'A little bumpy and very unpleasant, but not dangerous' },
      { word: 'Seat configuration', definition: 'The layout and number of seats in the cabin' },
      { word: 'Passenger load', definition: 'The number of passengers on a particular flight' },
      { word: 'All clear', definition: 'A signal that a situation is safe and normal' },
    ],
  },
  theory: {
    title: "Understanding the Captain's Briefing",
    content: "The captain's pre-departure briefing complements the cabin crew briefing. The captain introduces the flight deck crew, shares good news like a full and punctual crew, and covers cockpit entry procedures. Most importantly, the captain warns the cabin crew about any expected weather problems - like storms or turbulence - so the team can plan the meal service and passenger safety checks around it. Checking and clarifying language ('Can I just check...?', 'Can you confirm...?') helps crew make sure they have understood key details correctly.",
    audioExplanation: {
      id: 'theory-audio',
      text: "Explanation of the captain's pre-departure briefing",
      audioUrl: `${A1B}/theory-explanation.wav`,
      durationSeconds: 25,
      speaker: 'instructor',
    },
  },
  icaoPhraseoology: STANDARD_PHRASEOLOGY,
  cabinCrewPhraseoology: {
    category: 'Checking and Clarifying',
    phrases: [
      { situation: 'Checking a fact', phrase: 'Can I just check what the flight time is?', meaning: 'Politely confirming a piece of information', example: 'Can I just check what the flight time is?' },
      { situation: 'Confirming with a colleague', phrase: 'Can you confirm that your crew is familiar with the cockpit procedures?', meaning: 'Asking someone to verify something is true', example: 'Can you confirm that your crew is familiar with the cockpit procedures?' },
      { situation: 'Asking to clarify', phrase: 'Can I clarify something?', meaning: 'Signalling you want to ask a follow-up question', example: 'Can I clarify something?' },
      { situation: 'Clarifying a detail', phrase: 'Can I clarify the time of the meals service?', meaning: 'Asking for a specific detail to be made clearer', example: 'Can I clarify the time of the meals service?' },
    ],
  },
  airlineVocabulary: [{
    category: 'Flight Conditions & Duties',
    terms: [
      { term: 'Turbulence', definition: 'Irregular movement of the aircraft caused by air currents', example: 'We expect moderate turbulence over the Atlantic.' },
      { term: 'Seat configuration', definition: 'The layout and number of seats in the cabin', example: "Today's seat configuration has 180 economy seats." },
      { term: 'Special requirements', definition: 'Specific needs of a passenger, such as mobility assistance', example: 'Check the passenger list for any special requirements.' },
      { term: 'Emergency procedures', definition: 'The set of actions crew take in an emergency', example: 'All crew must know the emergency procedures.' },
      { term: 'Passenger load', definition: 'The number of passengers on a particular flight', example: "Today's passenger load is close to full capacity." },
      { term: 'All clear', definition: 'A signal that a situation is safe and normal', example: 'The captain gave the all clear after the turbulence.' },
      { term: 'Duties', definition: 'The tasks assigned to a crew member', example: 'Please review your duties before boarding.' },
      { term: 'Schedule', definition: 'The planned timing of the flight and its services', example: 'The weather may affect our schedule today.' },
    ],
  }],
  professionalExpressions: [
    { situation: 'Introducing a colleague', expression: "I'd like to introduce our first officer today.", alternativeExpressions: ['This is our first officer, Rick.', 'Let me introduce you to Rick.'] },
    { situation: 'Sharing good news', expression: "I'm pleased to tell you that...", alternativeExpressions: ["I'm happy to say...", 'Good news - ...'] },
  ],
  pronunciation: [
    { id: 'pron-1', text: 'Can I just check what the flight time is?', audioUrl: `${A1B}/pronunciation.wav`, durationSeconds: 3 },
  ],
  vocabulary: [
    { word: 'Turbulence', definition: 'Irregular movement of the aircraft caused by air currents' },
    { word: 'Seat configuration', definition: 'The layout and number of seats in the cabin' },
    { word: 'Special requirements', definition: 'Specific needs of a passenger' },
    { word: 'Emergency procedures', definition: 'The set of actions crew take in an emergency' },
    { word: 'Passenger load', definition: 'The number of passengers on a flight' },
    { word: 'All clear', definition: 'A signal that a situation is safe and normal' },
  ],
  grammar: [
    {
      rule: 'Checking and clarifying with "Can I...?" and "Can you...?" - polite questions to confirm information before acting on it',
      examples: [
        { sentence: 'Can I just check what the flight time is?', audioUrl: `${A1B}/grammar-1.wav` },
        { sentence: 'Can you confirm that your crew is familiar with the cockpit procedures?', audioUrl: `${A1B}/grammar-2.wav` },
        { sentence: 'Can I clarify the time of the meals service?', audioUrl: `${A1B}/grammar-3.wav` },
      ],
    },
  ],
  exercises: [
    {
      id: 'ex-1', type: 'multiple-choice', points: 10,
      question: 'Who does the captain introduce first?',
      options: [
        { id: 'o1', text: 'Rick Schultz, the first officer', isCorrect: true },
        { id: 'o2', text: 'The purser', isCorrect: false },
        { id: 'o3', text: 'A new flight attendant', isCorrect: false },
        { id: 'o4', text: 'The ground staff', isCorrect: false },
      ],
    },
    {
      id: 'ex-2', type: 'multiple-choice', points: 10,
      question: 'What is the captain pleased to tell the crew?',
      options: [
        { id: 'o1', text: 'They have a full crew today and everyone is on time', isCorrect: true },
        { id: 'o2', text: 'The flight has been upgraded', isCorrect: false },
        { id: 'o3', text: 'The flight is delayed', isCorrect: false },
        { id: 'o4', text: 'There will be extra pay today', isCorrect: false },
      ],
    },
    {
      id: 'ex-3', type: 'multiple-choice', points: 10,
      question: 'What does the captain ask Rick Schultz to talk about?',
      options: [
        { id: 'o1', text: 'Cockpit entry procedures', isCorrect: true },
        { id: 'o2', text: 'The meal service', isCorrect: false },
        { id: 'o3', text: 'The passenger list', isCorrect: false },
        { id: 'o4', text: 'Duty-free sales', isCorrect: false },
      ],
    },
    {
      id: 'ex-4', type: 'multiple-choice', points: 10,
      question: 'What is the possible weather problem on the flight?',
      options: [
        { id: 'o1', text: 'Storms over the Atlantic with strong winds and moderate turbulence', isCorrect: true },
        { id: 'o2', text: 'Heavy snow at the destination', isCorrect: false },
        { id: 'o3', text: 'Fog at departure', isCorrect: false },
        { id: 'o4', text: 'Extreme heat', isCorrect: false },
      ],
      hint: 'Listen for the ocean the captain mentions.',
    },
    {
      id: 'ex-5', type: 'multiple-choice', points: 10,
      question: 'What should be finished by the time of the weather problem?',
      options: [
        { id: 'o1', text: 'The meal service', isCorrect: true },
        { id: 'o2', text: 'The safety demonstration', isCorrect: false },
        { id: 'o3', text: 'Boarding', isCorrect: false },
        { id: 'o4', text: 'Duty-free sales', isCorrect: false },
      ],
    },
    {
      id: 'ex-6', type: 'multiple-choice', points: 10,
      question: 'Because of the weather problem, what will the cabin crew try to do?',
      options: [
        { id: 'o1', text: 'Complete the service a little earlier than usual', isCorrect: true },
        { id: 'o2', text: 'Cancel the meal service completely', isCorrect: false },
        { id: 'o3', text: 'Serve meals after the turbulence', isCorrect: false },
        { id: 'o4', text: 'Ask passengers to serve themselves', isCorrect: false },
      ],
    },
    {
      id: 'ex-7', type: 'multiple-choice', points: 10,
      question: 'What does the captain want to make sure of?',
      options: [
        { id: 'o1', text: 'Everyone is familiar with the cockpit entry procedures', isCorrect: true },
        { id: 'o2', text: 'Everyone has eaten breakfast', isCorrect: false },
        { id: 'o3', text: 'Everyone has their passport', isCorrect: false },
        { id: 'o4', text: 'Everyone knows the destination', isCorrect: false },
      ],
    },
    {
      id: 'ex-8', type: 'fill-blank', points: 10,
      question: 'We expect m_________ turbulence about two hours into the flight.',
      correctAnswer: 'moderate',
      hint: 'Not mild, not severe - somewhere in between.',
    },
    {
      id: 'ex-9', type: 'fill-blank', points: 10,
      question: 'We expect s_________ winds over the Atlantic.',
      correctAnswer: 'strong',
      hint: 'The opposite of weak.',
    },
    {
      id: 'ex-10', type: 'fill-blank', points: 10,
      question: "We're expecting storms o_________ the Atlantic.",
      correctAnswer: 'over',
      hint: 'A preposition meaning "above" a place.',
    },
    {
      id: 'ex-11', type: 'fill-blank', points: 10,
      question: 'Please make sure all passengers are seated and s_________ in.',
      correctAnswer: 'strapped',
      hint: 'What you do with a seatbelt.',
    },
    {
      id: 'ex-12', type: 'fill-blank', points: 10,
      question: "Rick talks the team through the c_________ entry procedures.",
      correctAnswer: 'cockpit',
      hint: 'Where the pilots sit.',
    },
    {
      id: 'ex-13', type: 'speaking', points: 15,
      question: 'The pre-departure crew meeting happens for several reasons: getting to know each other, coordinating duties, finding out the order of service, checking safety and emergency procedures, hearing about anything special, and hearing about the weather. Put these in order of importance and explain your reasoning out loud.',
    },
    {
      id: 'ex-14', type: 'multiple-choice', points: 10,
      question: 'What does "moderate turbulence" mean?',
      options: [
        { id: 'o1', text: 'A little bumpy and very unpleasant', isCorrect: true },
        { id: 'o2', text: 'Completely smooth flying', isCorrect: false },
        { id: 'o3', text: 'Extremely dangerous shaking', isCorrect: false },
        { id: 'o4', text: 'A change in cabin pressure', isCorrect: false },
      ],
    },
    {
      id: 'ex-15', type: 'multiple-choice', points: 10,
      question: 'What does "passenger load" mean?',
      options: [
        { id: 'o1', text: 'The number of passengers on a flight', isCorrect: true },
        { id: 'o2', text: 'The weight of the luggage', isCorrect: false },
        { id: 'o3', text: 'The amount of fuel needed', isCorrect: false },
        { id: 'o4', text: 'The number of crew on board', isCorrect: false },
      ],
    },
    {
      id: 'ex-16', type: 'speaking', points: 15,
      question: 'Besides storms, what other kinds of severe weather conditions can affect flights and flight schedules? Discuss with examples.',
    },
    {
      id: 'ex-17', type: 'speaking', points: 15,
      question: 'What happens when there are long delays before take-off because of severe weather? Have you ever served a meal on the ground? Discuss.',
    },
    {
      id: 'ex-18', type: 'speaking', points: 15,
      question: 'If you have to remain strapped in your seat for long periods because of severe turbulence, what do you do - read a magazine, chat with passengers nearby, plan for when you can continue your duties, or something else? Explain your choice.',
    },
    {
      id: 'ex-19', type: 'speaking', points: 15,
      question: 'After the briefing, flight attendants board the aircraft. Discuss what they have to do on board before passengers start to arrive.',
    },
  ],
  quiz: {
    id: 'quiz-1-2',
    title: 'Finding Out About the Flight Quiz',
    passingScore: 70,
    exercises: [
      {
        id: 'q-1', type: 'multiple-choice', points: 20,
        question: "Who is the first officer introduced in the captain's briefing?",
        options: [
          { id: 'o1', text: 'Rick Schultz', isCorrect: true },
          { id: 'o2', text: 'Marcus', isCorrect: false },
          { id: 'o3', text: 'Tom', isCorrect: false },
          { id: 'o4', text: 'Daniel', isCorrect: false },
        ],
      },
      {
        id: 'q-2', type: 'multiple-choice', points: 20,
        question: 'What weather problem does the captain warn the crew about?',
        options: [
          { id: 'o1', text: 'Storms over the Atlantic with strong winds and turbulence', isCorrect: true },
          { id: 'o2', text: 'A sandstorm at the destination', isCorrect: false },
          { id: 'o3', text: 'Freezing temperatures', isCorrect: false },
          { id: 'o4', text: 'A hurricane at departure', isCorrect: false },
        ],
      },
      {
        id: 'q-3', type: 'multiple-choice', points: 20,
        question: 'What should be finished before the turbulence begins?',
        options: [
          { id: 'o1', text: 'The meal service', isCorrect: true },
          { id: 'o2', text: 'The safety demo', isCorrect: false },
          { id: 'o3', text: 'Duty-free sales', isCorrect: false },
          { id: 'o4', text: 'Boarding', isCorrect: false },
        ],
      },
      {
        id: 'q-4', type: 'multiple-choice', points: 20,
        question: 'Which phrase is used to politely confirm information?',
        options: [
          { id: 'o1', text: 'Can I just check what the flight time is?', isCorrect: true },
          { id: 'o2', text: 'Tell me the flight time now.', isCorrect: false },
          { id: 'o3', text: 'What time, exactly?', isCorrect: false },
          { id: 'o4', text: 'I need the flight time.', isCorrect: false },
        ],
      },
      {
        id: 'q-5', type: 'multiple-choice', points: 20,
        question: 'What must crew do before entering the cockpit?',
        options: [
          { id: 'o1', text: 'Knock twice and confirm their name over the interphone', isCorrect: true },
          { id: 'o2', text: 'Wait for a green light', isCorrect: false },
          { id: 'o3', text: 'Radio the tower', isCorrect: false },
          { id: 'o4', text: 'Nothing special is required', isCorrect: false },
        ],
      },
    ],
  },
  flashcards: [
    { id: 'fc-1', front: 'Turbulence', back: 'Irregular movement of the aircraft caused by air currents' },
    { id: 'fc-2', front: 'Seat configuration', back: 'The layout and number of seats in the cabin' },
    { id: 'fc-3', front: 'Passenger load', back: 'The number of passengers on a flight' },
    { id: 'fc-4', front: 'All clear', back: 'A signal that a situation is safe and normal' },
  ],
  review: {
    keyPoints: [
      "The captain's briefing complements the cabin crew briefing with flight-deck information",
      'Crew are warned about weather problems in advance so they can plan the service',
      "Use 'Can I just check...?' / 'Can you confirm...?' / 'Can I clarify...?' to verify information politely",
      'Cockpit entry always requires a knock and a name confirmation over the interphone',
      'During turbulence, passenger safety (seated and strapped in) is the top priority',
    ],
    commonMistakes: [
      { mistake: 'Assuming information without checking', correction: "Use checking language like 'Can I just check...?' instead of guessing", explanation: 'Miscommunication about weather or timing can affect safety and service' },
      { mistake: 'Entering the cockpit without following procedure', correction: 'Always knock and confirm your name over the interphone first', explanation: 'This is a critical security procedure' },
    ],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

// ============================================================
// Unit 1, Lesson 3: Case Study - A Day in the Life
// A flight attendant's early-morning routine and the pre-flight briefing
// ============================================================
const A1C = '/audio/unit-1/lesson-3';

const CASE_STUDY_LESSON: any = {
  id: 'lesson-1-3',
  unitId: 'unit-1',
  title: 'Case Study: A Day in the Life',
  description: "A flight attendant's early-morning routine, from waking up to the pre-flight briefing",
  icon: '⏰',
  icaoLevel: 4,
  category: 'cabin-crew',
  difficulty: 'intermediate',
  xpReward: 150,
  estimatedDurationMinutes: 45,
  locked: false,
  order: 3,
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
      { id: 'reading-1', text: '03:30 - Good Morning! The flight attendant wakes up, prepares her uniform, checks travel documents, and travels to work early for a flight to Tenerife.', audioUrl: `${A1C}/reading-1.wav`, durationSeconds: 12, speaker: 'native' },
      { id: 'reading-2', text: '05:15 - Fifteen Minutes to the Pre-flight Briefing. She reviews the cabin crew manual, emergency procedures, and the location of safety equipment on the Boeing 757.', audioUrl: `${A1C}/reading-2.wav`, durationSeconds: 13, speaker: 'native' },
      { id: 'reading-3', text: '05:30 - The Pre-flight Briefing. The senior crew member reviews flight details, responsibilities, passenger information, security, and emergency procedures. Crew members may be asked safety questions.', audioUrl: `${A1C}/reading-3.wav`, durationSeconds: 14, speaker: 'native' },
      { id: 'reading-4', text: '06:00 - Pre-flight Preparations for Boarding. The crew checks emergency equipment, safety cards, meals, drinks, duty-free items, lavatory supplies, and prepares to welcome passengers.', audioUrl: `${A1C}/reading-4.wav`, durationSeconds: 14, speaker: 'native' },
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
      audioUrl: `${A1C}/theory-explanation.wav`,
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
    { id: 'pron-1', text: 'Pre-flight briefing', audioUrl: `${A1C}/pronunciation.wav`, durationSeconds: 3 },
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
        { sentence: 'She wakes up early and prepares her uniform.', audioUrl: `${A1C}/grammar-1.wav` },
        { sentence: 'She checks her travel documents before she travels to work.', audioUrl: `${A1C}/grammar-2.wav` },
        { sentence: 'The crew reviews safety procedures during the pre-flight briefing.', audioUrl: `${A1C}/grammar-3.wav` },
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
    id: 'quiz-1-3',
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
    { id: 'fc-1', front: 'Tucked away', back: 'Carefully put away', audioFront: `${A1C}/fc1-front.wav`, audioBack: `${A1C}/fc1-back.wav` },
    { id: 'fc-2', front: 'Traffic', back: 'Cars, buses and other vehicles on the road', audioFront: `${A1C}/fc2-front.wav`, audioBack: `${A1C}/fc2-back.wav` },
    { id: 'fc-3', front: 'Shuttle bus', back: 'A bus that travels regularly between two places', audioFront: `${A1C}/fc3-front.wav`, audioBack: `${A1C}/fc3-back.wav` },
    { id: 'fc-4', front: 'Refresh', back: 'Review or remind yourself of something', audioFront: `${A1C}/fc4-front.wav`, audioBack: `${A1C}/fc4-back.wav` },
    { id: 'fc-5', front: 'Stock', back: 'Fill with supplies', audioFront: `${A1C}/fc5-front.wav`, audioBack: `${A1C}/fc5-back.wav` },
    { id: 'fc-6', front: 'Freshen up', back: 'Make yourself clean and tidy', audioFront: `${A1C}/fc6-front.wav`, audioBack: `${A1C}/fc6-back.wav` },
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
  id: 'lesson-2-1',
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
  order: 1,
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
      hint: 'A common greeting - the same word you use in "___ afternoon" or "___ evening".',
    },
    {
      id: 'ex-16', type: 'fill-blank', points: 10,
      question: '_________ I see your boarding pass, please?',
      audio: { id: 'l3-03-audio', text: 'Jenny asking for boarding pass', audioUrl: `${A2C}/l3-03-jenny.wav`, durationSeconds: 3, speaker: 'crew' },
      correctAnswer: 'Could',
      hint: 'A polite modal verb - more formal than "Can".',
    },
    {
      id: 'ex-17', type: 'fill-blank', points: 10,
      question: 'Thank you. Your seat is _________.',
      audio: { id: 'l3-05-audio', text: 'Jenny giving the seat number', audioUrl: `${A2C}/l3-05-jenny.wav`, durationSeconds: 3, speaker: 'crew' },
      correctAnswer: '16C',
      hint: 'A row number followed by a letter.',
    },
    {
      id: 'ex-18', type: 'fill-blank', points: 10,
      question: '_________ ahead and turn left.',
      audio: { id: 'l3-06-audio', text: 'Jenny giving directions', audioUrl: `${A2C}/l3-06-jenny.wav`, durationSeconds: 4, speaker: 'crew' },
      correctAnswer: 'Straight',
      hint: 'Means "directly forward, without turning".',
    },
    // Listening-5: passenger problem (dialogue2.mp3)
    {
      id: 'ex-19', type: 'multiple-choice', points: 15,
      question: 'Listen to the passenger problem. What does the passenger ask for?',
      audio: { id: 'l5-audio', text: 'A passenger seating problem', audioUrl: `${A2C}/l5-full-scene.wav`, durationSeconds: 11, speaker: 'passenger' },
      options: [
        { id: 'o1', text: 'A window seat', isCorrect: true },
        { id: 'o2', text: 'An aisle seat', isCorrect: false },
        { id: 'o3', text: 'A different meal', isCorrect: false },
        { id: 'o4', text: 'A blanket', isCorrect: false },
      ],
    },
    {
      id: 'ex-20', type: 'multiple-choice', points: 10,
      question: 'What does Jenny say she will do?',
      options: [
        { id: 'o1', text: 'Check the seating arrangements', isCorrect: true },
        { id: 'o2', text: 'Give the passenger a refund', isCorrect: false },
        { id: 'o3', text: 'Move her to business class', isCorrect: false },
        { id: 'o4', text: 'Call the captain', isCorrect: false },
      ],
    },
    {
      id: 'ex-21', type: 'multiple-choice', points: 10,
      question: 'What time of day does this exchange take place?',
      options: [
        { id: 'o1', text: 'Afternoon', isCorrect: true, explanation: "Jenny says 'Good afternoon, madam.'" },
        { id: 'o2', text: 'Morning', isCorrect: false },
        { id: 'o3', text: 'Evening', isCorrect: false },
        { id: 'o4', text: 'Night', isCorrect: false },
      ],
    },
    {
      id: 'ex-22', type: 'fill-blank', points: 10,
      question: 'Excuse me, I asked for a _________.',
      correctAnswer: 'window seat',
      hint: 'A type of seat next to the window.',
    },
    {
      id: 'ex-23', type: 'fill-blank', points: 10,
      question: 'Let me check the _________.',
      correctAnswer: 'seating arrangements',
      hint: 'Two words - the plan of who sits where.',
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
      hint: 'The process of confirming your flight and getting a boarding pass.',
    },
    {
      id: 'ex-31', type: 'fill-blank', points: 10,
      question: 'Passengers proceed to the aircraft with their _________ only.',
      correctAnswer: 'hand-baggage',
      hint: 'Luggage small enough to carry yourself.',
    },
    {
      id: 'ex-32', type: 'fill-blank', points: 10,
      question: 'On arrival, passengers present their _________ to the flight attendant.',
      correctAnswer: 'boarding pass',
      hint: 'The document with your flight and seat number on it.',
    },
    {
      id: 'ex-33', type: 'fill-blank', points: 10,
      question: 'The boarding pass has the _________ on it.',
      correctAnswer: 'seat number',
      hint: "Tells you where you'll be sitting.",
    },
    {
      id: 'ex-34', type: 'fill-blank', points: 10,
      question: '_________ are made at check-in.',
      correctAnswer: 'Seating arrangements',
      hint: 'Two words - the plan of which passenger sits where.',
    },
    {
      id: 'ex-35', type: 'fill-blank', points: 10,
      question: 'Many passengers prefer _________ to aisle seats.',
      correctAnswer: 'window seats',
      hint: 'Seats next to the window.',
    },
    {
      id: 'ex-36', type: 'fill-blank', points: 10,
      question: 'Passengers often insist on booking window seats _________.',
      correctAnswer: 'in advance',
      hint: 'Means "ahead of time", before the day of travel.',
    },
    {
      id: 'ex-37', type: 'fill-blank', points: 10,
      question: 'Passengers can ask for help to put their hand-baggage into the _________.',
      correctAnswer: 'overhead lockers',
      hint: 'Storage compartments above the seats.',
    },
    // Speaking-10: role play
    {
      id: 'ex-38', type: 'speaking', points: 15,
      question: 'Role play: take turns welcoming different types of passengers on board and organizing their seating.',
    },
  ],
  quiz: {
    id: 'quiz-2-1',
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
        question: 'What does Jenny say she will do about the passenger\'s seat?',
        options: [
          { id: 'o1', text: 'Check the seating arrangements', isCorrect: true },
          { id: 'o2', text: 'Give her a refund', isCorrect: false },
          { id: 'o3', text: 'Move her to business class', isCorrect: false },
          { id: 'o4', text: 'Ask her to leave', isCorrect: false },
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

// ============================================================
// Unit 2, Lesson 2: Settling Passengers in Their Seats
// Moving a passenger, a family with a baby, welcoming a late
// passenger, and door checks before the safety demo
// ============================================================
const A2D = '/audio/unit-2/lesson-2';

const SETTLING_PASSENGERS_LESSON: any = {
  id: 'lesson-2-2',
  unitId: 'unit-2',
  title: 'Settling Passengers in Their Seats',
  description: 'Moving passengers to free seats, helping families with a baby, and door checks before the safety demo',
  icon: '💺',
  icaoLevel: 4,
  category: 'cabin-crew',
  difficulty: 'intermediate',
  xpReward: 150,
  estimatedDurationMinutes: 45,
  locked: false,
  order: 2,
  objectives: [
    { id: 'obj-1', description: 'Learn the names of cabin objects around a passenger seat', type: 'vocabulary' },
    { id: 'obj-2', description: 'Help a passenger move to a different seat', type: 'listening' },
    { id: 'obj-3', description: 'Assist a family travelling with a baby', type: 'listening' },
    { id: 'obj-4', description: 'Explain how cabin equipment works, step by step', type: 'speaking' },
  ],
  scenario: {
    id: 'scenario-settling-passengers',
    title: 'Settling Passengers In',
    description: 'Jenny moves a passenger to a free window seat, helps a mother travelling with a baby, and Sylvie welcomes the last, late passenger before door checks.',
    context: 'Aircraft cabin, during boarding',
    audioSegments: [
      { id: 's1-01', text: 'Jenny: Sylvie, do you have a free window seat in your section? A passenger has asked to move.', audioUrl: `${A2D}/s1-01-jenny.wav`, durationSeconds: 5, speaker: 'crew' },
      { id: 's1-02', text: 'Sylvie: Let me check... yes, seat 22A is free.', audioUrl: `${A2D}/s1-02-sylvie.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 's1-03', text: 'Jenny: Perfect, would you mind if I move her there?', audioUrl: `${A2D}/s1-03-jenny.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 's1-04', text: 'Sylvie: Not at all, go ahead.', audioUrl: `${A2D}/s1-04-sylvie.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 's1-05', text: "Jenny: Good news, I've found you a window seat, 22A. Would you like me to help you with your bag?", audioUrl: `${A2D}/s1-05-jenny.wav`, durationSeconds: 5, speaker: 'crew' },
      { id: 's1-06', text: 'Passenger: Oh, thank you so much!', audioUrl: `${A2D}/s1-06-passenger.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 's1-07', text: "Jenny: No problem at all. By the way, my name's Jenny, I'll be looking after you for this flight. If you need anything, just let me know.", audioUrl: `${A2D}/s1-07-jenny.wav`, durationSeconds: 6, speaker: 'crew' },
      { id: 's1-08', text: 'Passenger: Thank you, Jenny.', audioUrl: `${A2D}/s1-08-passenger.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 's2-01', text: 'Jenny: Hello, welcome on board. Is this your first time flying with a baby?', audioUrl: `${A2D}/s2-01-jenny.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 's2-02', text: "Mother: Yes, I'm a bit nervous, to be honest.", audioUrl: `${A2D}/s2-02-mother.wav`, durationSeconds: 3, speaker: 'passenger' },
      { id: 's2-03', text: "Jenny: Don't worry, we'll take good care of you both. How old is your baby?", audioUrl: `${A2D}/s2-03-jenny.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 's2-04', text: "Mother: She's four months old.", audioUrl: `${A2D}/s2-04-mother.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 's2-05', text: 'Jenny: Lovely. Does she need anything special, like a bottle warmed during the flight?', audioUrl: `${A2D}/s2-05-jenny.wav`, durationSeconds: 5, speaker: 'crew' },
      { id: 's2-06', text: 'Mother: Maybe later, thank you.', audioUrl: `${A2D}/s2-06-mother.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 's2-07', text: "Jenny: Of course. For take-off, she'll need to sit on your lap, and I'll fasten this infant loop belt around her, attached to your seatbelt, like this.", audioUrl: `${A2D}/s2-07-jenny.wav`, durationSeconds: 7, speaker: 'crew' },
      { id: 's2-08', text: 'Mother: Okay, thank you.', audioUrl: `${A2D}/s2-08-mother.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 's2-09', text: "Jenny: Once we've reached cruising altitude, we can set up the bassinet for her if you'd like her to sleep.", audioUrl: `${A2D}/s2-09-jenny.wav`, durationSeconds: 5, speaker: 'crew' },
      { id: 's2-10', text: 'Mother: That would be wonderful.', audioUrl: `${A2D}/s2-10-mother.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 's3-01', text: 'Sylvie: Hello, sir. Welcome on board. May I see your boarding pass, please?', audioUrl: `${A2D}/s3-01-sylvie.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 's3-02', text: "Passenger: Yes... sorry I'm late. I was delayed in traffic on the way from the city.", audioUrl: `${A2D}/s3-02-passenger.wav`, durationSeconds: 5, speaker: 'passenger' },
      { id: 's3-03', text: "Sylvie: No problem, we've been expecting you. You're in seat 4F. Straight across the cabin, to the other side, and turn left.", audioUrl: `${A2D}/s3-03-sylvie.wav`, durationSeconds: 6, speaker: 'crew' },
      { id: 's3-04', text: 'Passenger: Many thanks.', audioUrl: `${A2D}/s3-04-passenger.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 's3-05', text: 'Sylvie: Jenny, at last, everyone is on board. Can you check the doors?', audioUrl: `${A2D}/s3-05-sylvie.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 's3-06', text: 'Jenny: Tom, doors check, please.', audioUrl: `${A2D}/s3-06-jenny.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 's3-07', text: 'Tom: OK. Zone C cabin secure.', audioUrl: `${A2D}/s3-07-tom.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 's3-08', text: 'Jenny: OK. Zone D and E cabin secure. Prepare for the safety demo.', audioUrl: `${A2D}/s3-08-jenny.wav`, durationSeconds: 4, speaker: 'crew' },
    ],
    vocabulary: [
      { word: 'Arm-rest', definition: 'The part of the seat where you rest your arm' },
      { word: 'Call button', definition: 'A button passengers press to call a flight attendant' },
      { word: 'Head-rest', definition: 'The part of the seat that supports your head' },
      { word: 'Bassinet', definition: 'A small bed for a baby that attaches to the bulkhead' },
    ],
  },
  theory: {
    title: 'Settling Passengers In',
    content: "This lesson covers settling passengers into their seats: helping with special requests like moving to a free seat, assisting families travelling with a baby, welcoming a late passenger, and confirming the cabin is secure before the safety demonstration. Clear, step-by-step explanations ('First of all... then... is that OK?') help passengers understand how cabin equipment works.",
    audioExplanation: {
      id: 'theory-audio',
      text: 'Explanation of settling passengers into their seats',
      audioUrl: `${A2D}/theory-explanation.wav`,
      durationSeconds: 20,
      speaker: 'instructor',
    },
  },
  icaoPhraseoology: STANDARD_PHRASEOLOGY,
  cabinCrewPhraseoology: {
    category: 'Showing How Something Works',
    phrases: [
      { situation: 'Passenger asks for help', phrase: 'Can you show me how it works?', meaning: 'Passenger question when unsure how to use equipment', example: 'Can you show me how the bassinet works?' },
      { situation: 'Responding helpfully', phrase: 'Of course. / Certainly.', meaning: 'Polite agreement to help', example: 'Of course, let me show you.' },
      { situation: 'Giving step-by-step instructions', phrase: 'First of all, you... Then you...', meaning: 'Structuring an explanation in clear steps', example: 'First of all, you attach the bassinet to these two clips. Then you put the baby in.' },
      { situation: 'Checking understanding', phrase: 'Is that OK / all right with you?', meaning: 'Confirming the passenger has understood', example: 'Is that OK?' },
    ],
  },
  airlineVocabulary: [{
    category: 'Cabin Objects',
    terms: [
      { term: 'Arm-rest', definition: 'The part of the seat where you rest your arm', example: 'The call button is on the arm-rest.' },
      { term: 'Call button', definition: 'A button passengers press to call a flight attendant', example: 'Press the call button if you need anything.' },
      { term: 'Head-rest', definition: 'The part of the seat that supports your head', example: 'You can adjust the head-rest height.' },
      { term: 'Overhead locker', definition: 'Storage compartment above the seats', example: 'Please put your bag in the overhead locker.' },
      { term: 'Light button', definition: 'A button that turns the individual reading light on or off', example: 'The light button is above your seat.' },
      { term: 'Pull-out table', definition: 'A small table that folds out from the seat in front', example: 'Please fold away your pull-out table for landing.' },
      { term: 'Safety instruction card', definition: 'A card explaining emergency procedures for the aircraft', example: 'The safety instruction card is in the seat pocket.' },
      { term: 'TV handset control', definition: 'The remote control for the in-seat entertainment screen', example: 'Use the TV handset control to choose a film.' },
      { term: 'Seatbelt', definition: 'The belt that secures a passenger in their seat', example: 'Please fasten your seatbelt.' },
      { term: 'Bassinet', definition: 'A small bed for a baby that attaches to the bulkhead', example: "We'll set up the bassinet once we reach cruising altitude." },
    ],
  }],
  professionalExpressions: [
    { situation: 'Offering to help with luggage', expression: 'Would you like me to help you with your bag?', alternativeExpressions: ['Can I help with your bag?', 'Let me help you with that.'] },
    { situation: 'Reassuring a nervous passenger', expression: "Don't worry, we'll take good care of you.", alternativeExpressions: ["There's nothing to worry about.", "We're here to help."] },
  ],
  pronunciation: [
    { id: 'pron-1', text: 'Can you show me how it works?', audioUrl: `${A2D}/pronunciation.wav`, durationSeconds: 3 },
  ],
  vocabulary: [
    { word: 'Arm-rest', definition: 'The part of the seat where you rest your arm' },
    { word: 'Call button', definition: 'A button passengers press to call a flight attendant' },
    { word: 'Head-rest', definition: 'The part of the seat that supports your head' },
    { word: 'Overhead locker', definition: 'Storage compartment above the seats' },
    { word: 'Pull-out table', definition: 'A small table that folds out from the seat in front' },
    { word: 'Bassinet', definition: 'A small bed for a baby that attaches to the bulkhead' },
  ],
  grammar: [
    {
      rule: 'Step-by-step instructions with sequencing words (First of all, Then) - used when explaining how equipment works',
      examples: [
        { sentence: 'First of all, you attach the bassinet to these two clips.', audioUrl: `${A2D}/grammar-1.wav` },
        { sentence: 'Then you put the baby in and attach the cover.', audioUrl: `${A2D}/grammar-2.wav` },
        { sentence: 'Is that OK?', audioUrl: `${A2D}/grammar-3.wav` },
      ],
    },
  ],
  exercises: [
    {
      id: 'ex-1', type: 'multiple-choice', points: 10,
      question: 'What part of the seat do you press to call a flight attendant?',
      options: [
        { id: 'o1', text: 'The call button', isCorrect: true },
        { id: 'o2', text: 'The arm-rest', isCorrect: false },
        { id: 'o3', text: 'The head-rest', isCorrect: false },
        { id: 'o4', text: 'The light button', isCorrect: false },
      ],
    },
    {
      id: 'ex-2', type: 'multiple-choice', points: 10,
      question: 'Where do you store your hand-baggage during the flight?',
      options: [
        { id: 'o1', text: 'The overhead locker', isCorrect: true },
        { id: 'o2', text: 'The pull-out table', isCorrect: false },
        { id: 'o3', text: 'The head-rest', isCorrect: false },
        { id: 'o4', text: 'The call button', isCorrect: false },
      ],
    },
    {
      id: 'ex-3', type: 'multiple-choice', points: 10,
      question: 'What do you use to choose a film on the entertainment screen?',
      options: [
        { id: 'o1', text: 'The TV handset control', isCorrect: true },
        { id: 'o2', text: 'The safety instruction card', isCorrect: false },
        { id: 'o3', text: 'The seatbelt', isCorrect: false },
        { id: 'o4', text: 'The bassinet', isCorrect: false },
      ],
    },
    {
      id: 'ex-4', type: 'multiple-choice', points: 10,
      question: 'Where would you find emergency procedures for the aircraft?',
      options: [
        { id: 'o1', text: 'The safety instruction card', isCorrect: true },
        { id: 'o2', text: 'The pull-out table', isCorrect: false },
        { id: 'o3', text: 'The overhead locker', isCorrect: false },
        { id: 'o4', text: 'The light button', isCorrect: false },
      ],
    },
    {
      id: 'ex-5', type: 'multiple-choice', points: 15,
      question: 'What does Jenny ask her colleague, Sylvie, for?',
      options: [
        { id: 'o1', text: 'A free window seat in her section', isCorrect: true },
        { id: 'o2', text: 'A spare blanket', isCorrect: false },
        { id: 'o3', text: 'Help serving drinks', isCorrect: false },
        { id: 'o4', text: 'A wheelchair', isCorrect: false },
      ],
    },
    {
      id: 'ex-6', type: 'multiple-choice', points: 15,
      question: "What does Jenny ask Sylvie's permission to do?",
      options: [
        { id: 'o1', text: 'Move the passenger to seat 22A', isCorrect: true },
        { id: 'o2', text: 'Give the passenger a free drink', isCorrect: false },
        { id: 'o3', text: 'Upgrade the passenger', isCorrect: false },
        { id: 'o4', text: "Swap Sylvie's section", isCorrect: false },
      ],
    },
    {
      id: 'ex-7', type: 'multiple-choice', points: 15,
      question: 'What does Jenny offer to do for the passenger?',
      options: [
        { id: 'o1', text: 'Help her with her bag', isCorrect: true },
        { id: 'o2', text: 'Bring her a meal', isCorrect: false },
        { id: 'o3', text: 'Call her family', isCorrect: false },
        { id: 'o4', text: 'Give her a blanket', isCorrect: false },
      ],
    },
    {
      id: 'ex-8', type: 'multiple-choice', points: 15,
      question: 'What information does Jenny give the passenger about herself?',
      options: [
        { id: 'o1', text: "Her name, and that she'll be looking after her", isCorrect: true },
        { id: 'o2', text: 'How long she has worked for the airline', isCorrect: false },
        { id: 'o3', text: 'Where she lives', isCorrect: false },
        { id: 'o4', text: 'Her flight schedule', isCorrect: false },
      ],
    },
    {
      id: 'ex-9', type: 'speaking', points: 15,
      question: 'How well do you think Jenny dealt with the seat-move situation? Would you have done the same?',
    },
    {
      id: 'ex-10', type: 'multiple-choice', points: 15,
      question: 'When will Jenny and the mother set up the bassinet?',
      options: [
        { id: 'o1', text: 'Once the aircraft has reached cruising altitude', isCorrect: true },
        { id: 'o2', text: 'Immediately, before take-off', isCorrect: false },
        { id: 'o3', text: 'Only if the baby cries', isCorrect: false },
        { id: 'o4', text: 'During the safety demonstration', isCorrect: false },
      ],
    },
    {
      id: 'ex-11', type: 'multiple-choice', points: 15,
      question: 'What two questions does Jenny ask the mother about the baby?',
      options: [
        { id: 'o1', text: 'How old the baby is, and if she needs a bottle warmed', isCorrect: true },
        { id: 'o2', text: "The baby's name, and her weight", isCorrect: false },
        { id: 'o3', text: 'If the baby has a passport, and her seat number', isCorrect: false },
        { id: 'o4', text: 'If the baby is hungry, and if she is asleep', isCorrect: false },
      ],
    },
    {
      id: 'ex-12', type: 'multiple-choice', points: 15,
      question: 'Where will the baby be seated for take-off?',
      options: [
        { id: 'o1', text: "On the mother's lap", isCorrect: true },
        { id: 'o2', text: 'In the bassinet', isCorrect: false },
        { id: 'o3', text: 'In her own seat', isCorrect: false },
        { id: 'o4', text: 'On the floor in a car seat', isCorrect: false },
      ],
    },
    {
      id: 'ex-13', type: 'multiple-choice', points: 15,
      question: 'How will the baby be fastened during take-off?',
      options: [
        { id: 'o1', text: 'With an infant loop belt attached to the seatbelt', isCorrect: true },
        { id: 'o2', text: 'With a regular adult seatbelt', isCorrect: false },
        { id: 'o3', text: 'She will not be fastened at all', isCorrect: false },
        { id: 'o4', text: 'In a separate infant seat', isCorrect: false },
      ],
    },
    {
      id: 'ex-14', type: 'speaking', points: 15,
      question: 'What other special situations do you have to deal with when passengers come on board? Discuss with examples.',
    },
    {
      id: 'ex-15', type: 'speaking', points: 15,
      question: 'Practise explaining how these cabin objects work, step by step: a reclining seat, a pull-out table, the TV handset control, the overhead light.',
      hint: 'Use "First of all, you... Then you... Is that OK?"',
    },
    {
      id: 'ex-16', type: 'multiple-choice', points: 10,
      question: 'True or False: The late passenger apologizes for being late.',
      options: [
        { id: 'o1', text: 'True', isCorrect: true },
        { id: 'o2', text: 'False', isCorrect: false },
      ],
    },
    {
      id: 'ex-17', type: 'multiple-choice', points: 10,
      question: 'True or False: The passenger does not give a reason for being late.',
      options: [
        { id: 'o1', text: 'True', isCorrect: false },
        { id: 'o2', text: 'False', isCorrect: true, explanation: 'He says he was delayed in traffic.' },
      ],
    },
    {
      id: 'ex-18', type: 'multiple-choice', points: 10,
      question: 'True or False: Sylvie criticizes the passenger for being late.',
      options: [
        { id: 'o1', text: 'True', isCorrect: false },
        { id: 'o2', text: 'False', isCorrect: true, explanation: "Sylvie says 'No problem, we've been expecting you.'" },
      ],
    },
    {
      id: 'ex-19', type: 'fill-blank', points: 10,
      question: 'May I _________ your boarding pass, please?',
      correctAnswer: 'see',
      hint: 'A verb meaning "look at".',
    },
    {
      id: 'ex-20', type: 'fill-blank', points: 10,
      question: "You're in seat 4F. _________ across the cabin, to the other side, and turn left.",
      correctAnswer: 'Straight',
      hint: 'Means "directly forward".',
    },
  ],
  quiz: {
    id: 'quiz-2-2',
    title: 'Settling Passengers Quiz',
    passingScore: 70,
    exercises: [
      {
        id: 'q-1', type: 'multiple-choice', points: 20,
        question: 'What seat does Jenny move the passenger to?',
        options: [
          { id: 'o1', text: '22A', isCorrect: true },
          { id: 'o2', text: '4F', isCorrect: false },
          { id: 'o3', text: '16C', isCorrect: false },
          { id: 'o4', text: '12B', isCorrect: false },
        ],
      },
      {
        id: 'q-2', type: 'multiple-choice', points: 20,
        question: 'How old is the baby in the bassinet scene?',
        options: [
          { id: 'o1', text: 'Four months old', isCorrect: true },
          { id: 'o2', text: 'One year old', isCorrect: false },
          { id: 'o3', text: 'Two weeks old', isCorrect: false },
          { id: 'o4', text: 'Six months old', isCorrect: false },
        ],
      },
      {
        id: 'q-3', type: 'multiple-choice', points: 20,
        question: 'What seat is the late passenger given?',
        options: [
          { id: 'o1', text: '4F', isCorrect: true },
          { id: 'o2', text: '22A', isCorrect: false },
          { id: 'o3', text: '16C', isCorrect: false },
          { id: 'o4', text: '36B', isCorrect: false },
        ],
      },
      {
        id: 'q-4', type: 'multiple-choice', points: 20,
        question: 'Who does Jenny ask to do the doors check?',
        options: [
          { id: 'o1', text: 'Tom', isCorrect: true },
          { id: 'o2', text: 'Sylvie', isCorrect: false },
          { id: 'o3', text: 'Marcus', isCorrect: false },
          { id: 'o4', text: 'Katrin', isCorrect: false },
        ],
      },
      {
        id: 'q-5', type: 'multiple-choice', points: 20,
        question: 'What phrase checks a passenger has understood an explanation?',
        options: [
          { id: 'o1', text: 'Is that OK?', isCorrect: true },
          { id: 'o2', text: 'Do you get it?', isCorrect: false },
          { id: 'o3', text: 'Right?', isCorrect: false },
          { id: 'o4', text: 'Yes or no?', isCorrect: false },
        ],
      },
    ],
  },
  flashcards: [
    { id: 'fc-1', front: 'Arm-rest', back: 'The part of the seat where you rest your arm' },
    { id: 'fc-2', front: 'Call button', back: 'A button passengers press to call a flight attendant' },
    { id: 'fc-3', front: 'Bassinet', back: 'A small bed for a baby that attaches to the bulkhead' },
    { id: 'fc-4', front: 'TV handset control', back: 'The remote control for the in-seat entertainment screen' },
    { id: 'fc-5', front: 'Pull-out table', back: 'A small table that folds out from the seat in front' },
  ],
  review: {
    keyPoints: [
      'Always ask a colleague before moving a passenger into their section',
      'Reassure nervous passengers, especially families travelling with a baby',
      'Explain equipment step by step: "First of all... Then... Is that OK?"',
      'Confirm doors and zones are secure before starting the safety demo',
      'A polite, unhurried welcome matters even for the last, late passenger',
    ],
    commonMistakes: [
      { mistake: 'Moving a passenger without checking with the colleague responsible for that section', correction: 'Always ask permission first, e.g. "Would you mind if I move her there?"', explanation: 'Avoids confusion about seating and workload' },
      { mistake: 'Rushing the explanation of safety equipment', correction: 'Break it into clear steps and check understanding at the end', explanation: 'Passengers, especially with a baby, need reassurance and clarity' },
    ],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

// ============================================================
// Unit 2, Lesson 3: Demonstrating Safety Procedures
// The full safety demonstration + Case Study: Bags in Bins
// ============================================================
const A2E = '/audio/unit-2/lesson-3-safety';

const SAFETY_DEMO_LESSON: any = {
  id: 'lesson-2-3',
  unitId: 'unit-2',
  title: 'Demonstrating Safety Procedures',
  description: 'The full pre-take-off safety demonstration, final checks, and the case study: Bags in Bins',
  icon: '🦺',
  icaoLevel: 4,
  category: 'cabin-crew',
  difficulty: 'intermediate',
  xpReward: 180,
  estimatedDurationMinutes: 50,
  locked: false,
  order: 3,
  objectives: [
    { id: 'obj-1', description: 'Read the full safety demonstration clearly and confidently', type: 'speaking' },
    { id: 'obj-2', description: 'Understand life vest, oxygen mask, and brace position procedures', type: 'listening' },
    { id: 'obj-3', description: 'Make polite requests during final checks before take-off', type: 'speaking' },
    { id: 'obj-4', description: 'Discuss the hand-baggage problem during boarding', type: 'reading' },
  ],
  scenario: {
    id: 'scenario-safety-demo',
    title: 'The Safety Demonstration',
    description: 'The captain announces the safety demonstration, and the full safety instructions are read to passengers before take-off.',
    context: 'Aircraft cabin, just before take-off',
    audioSegments: [
      { id: 'safety-intro', text: 'Captain: This is your captain speaking. Welcome on board. We are almost ready for take-off. Now we request your full attention as we demonstrate the safety features of this aircraft.', audioUrl: `${A2E}/captain-intro.wav`, durationSeconds: 8, speaker: 'pilot' },
      { id: 'safety-a', text: 'A. Ladies and gentlemen, even if you are a frequent traveller, it is important that you listen carefully to the following safety instructions.', audioUrl: `${A2E}/safety-a.wav`, durationSeconds: 6, speaker: 'crew' },
      { id: 'safety-j', text: 'J. You will find a safety instruction card in the pocket in front of you. Please read this carefully before take-off and familiarize yourself with the emergency exits and procedures on board this Boeing 777S.', audioUrl: `${A2E}/safety-j.wav`, durationSeconds: 9, speaker: 'crew' },
      { id: 'safety-h', text: 'H. All electronic devices must now be switched off for take-off.', audioUrl: `${A2E}/safety-h.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'safety-l', text: 'L. When the seatbelt sign is on, you must fasten your seatbelt. To do this, insert the metal fitting into the buckle - like this - and tighten by pulling the strap - like this. To undo the seatbelt, lift the buckle - like this.', audioUrl: `${A2E}/safety-l.wav`, durationSeconds: 10, speaker: 'crew' },
      { id: 'safety-g', text: 'G. Finally, make sure your seat backs are upright, your tables are folded away and your hand-baggage is either in the overhead locker or under the seat in front of you.', audioUrl: `${A2E}/safety-g.wav`, durationSeconds: 8, speaker: 'crew' },
      { id: 'safety-d', text: 'D. There are several emergency exits on this aircraft. They are being pointed out to you now. Please take a few moments now to locate your nearest exit. It may be behind you. If you are sitting in an emergency exit, you must know how to open the door in an emergency and when instructed to do so by the crew.', audioUrl: `${A2E}/safety-d.wav`, durationSeconds: 12, speaker: 'crew' },
      { id: 'safety-f', text: 'F. If we need to evacuate the aircraft, floor-level lighting will guide you to the exits.', audioUrl: `${A2E}/safety-f.wav`, durationSeconds: 5, speaker: 'crew' },
      { id: 'safety-i', text: 'I. If the pressure drops, an oxygen mask will automatically drop from the compartment above your head. To start the flow of oxygen, pull the mask towards you, put it firmly over your mouth and nose and secure the elastic band behind your head, and breathe normally. If you are travelling with a child or a person who needs assistance, put your mask on first and then assist the other person.', audioUrl: `${A2E}/safety-i.wav`, durationSeconds: 15, speaker: 'crew' },
      { id: 'safety-c', text: 'C. Your life vest is under your seat. This is how you put it on.', audioUrl: `${A2E}/safety-c.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'safety-e', text: 'E. First, take it out of the pouch and put it over your head. Then pass the straps around your waist and tie them in front. Do not inflate the vest until you leave the aircraft. To inflate the vest, pull on this red cord. Use the whistle and light to attract attention.', audioUrl: `${A2E}/safety-e.wav`, durationSeconds: 13, speaker: 'crew' },
      { id: 'safety-k', text: "K. In the event of an emergency landing, you will hear 'Brace, brace' and you must adopt this position. Look at the card for the brace position.", audioUrl: `${A2E}/safety-k.wav`, durationSeconds: 7, speaker: 'crew' },
      { id: 'safety-b', text: 'B. We suggest you keep the seatbelt fastened throughout the flight.', audioUrl: `${A2E}/safety-b.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'safety-m', text: 'M. We wish you all an enjoyable flight.', audioUrl: `${A2E}/safety-m.wav`, durationSeconds: 3, speaker: 'crew' },
    ],
    vocabulary: [
      { word: 'Brace position', definition: 'The protective position passengers adopt before an emergency landing' },
      { word: 'Life vest', definition: 'An inflatable vest worn for safety over water' },
      { word: 'To evacuate', definition: 'To leave a place quickly in an emergency' },
      { word: 'To inflate', definition: 'To fill something with air' },
    ],
  },
  theory: {
    title: 'The Safety Demonstration',
    content: 'This lesson covers the full safety demonstration that cabin crew must be able to read confidently and clearly, from the opening address to the closing wishes for an enjoyable flight. It also covers the final checks crew make before take-off, such as seatbelts, tray tables, and window blinds.',
    audioExplanation: {
      id: 'theory-audio',
      text: 'Explanation of the safety demonstration and final checks',
      audioUrl: `${A2E}/theory-explanation.wav`,
      durationSeconds: 20,
      speaker: 'instructor',
    },
  },
  icaoPhraseoology: STANDARD_PHRASEOLOGY,
  cabinCrewPhraseoology: {
    category: 'Final Checks Before Take-Off',
    phrases: [
      { situation: 'Asking to switch off a phone', phrase: 'Excuse me, can you switch off your mobile phone now?', meaning: 'Polite request during final checks', example: 'Excuse me, can you switch off your mobile phone now?' },
      { situation: 'Asking to upright a seat', phrase: 'Could you put your seat back upright, please?', meaning: 'Polite request during final checks', example: 'Could you put your seat back upright, please?' },
      { situation: 'Asking to fold a table', phrase: 'Please could you fold away your table?', meaning: 'Polite request during final checks', example: 'Please could you fold away your table?' },
      { situation: 'Asking to open a window blind', phrase: 'Could you open your window blind, please?', meaning: 'Polite request during final checks', example: 'Could you open your window blind, please?' },
    ],
  },
  airlineVocabulary: [{
    category: 'Bags in Bins - Glossary',
    terms: [
      { term: 'Bins', definition: 'Overhead lockers', example: 'The fight for the overheads is on when the plane is full.' },
      { term: 'Bulky', definition: 'Large, very full', example: 'Some hand-baggage is too big, too bulky or too heavy.' },
      { term: 'Belongings', definition: 'Things that belong to someone', example: 'Passengers are left with nowhere to put their belongings.' },
      { term: 'Hold', definition: 'The part of the aircraft where goods are stored', example: 'Extra bags will have to be off-loaded and put in the hold.' },
      { term: 'To stow', definition: 'To put away', example: 'Crew ask passengers to stow small items under the seats.' },
      { term: 'Crucial', definition: 'Extremely important', example: 'This is a crucial moment before taxiing and take-off.' },
    ],
  }],
  professionalExpressions: [
    { situation: 'Opening the safety demo', expression: 'We request your full attention.', alternativeExpressions: ['Please pay close attention.', 'We ask for your attention now.'] },
    { situation: 'Closing the safety demo', expression: 'We wish you all an enjoyable flight.', alternativeExpressions: ['Thank you for your attention.', 'Enjoy your flight.'] },
  ],
  pronunciation: [
    { id: 'pron-1', text: 'We request your full attention.', audioUrl: `${A2E}/captain-intro.wav`, durationSeconds: 3 },
  ],
  vocabulary: [
    { word: 'Bins', definition: 'Overhead lockers' },
    { word: 'Bulky', definition: 'Large, very full' },
    { word: 'Belongings', definition: 'Things that belong to someone' },
    { word: 'Hold', definition: 'The part of the aircraft where goods are stored' },
    { word: 'To stow', definition: 'To put away' },
    { word: 'Crucial', definition: 'Extremely important' },
  ],
  grammar: [
    {
      rule: 'Sequencing safety instructions (First, Then, Finally) - used to give clear step-by-step safety procedures',
      examples: [
        { sentence: 'First, take it out of the pouch and put it over your head.' },
        { sentence: 'Then pass the straps around your waist and tie them in front.' },
        { sentence: 'Finally, make sure your seat backs are upright.' },
      ],
    },
  ],
  exercises: [
    {
      id: 'ex-1', type: 'multiple-choice', points: 10,
      question: 'Where is the safety instruction card?',
      options: [
        { id: 'o1', text: 'In the pocket in front of you', isCorrect: true },
        { id: 'o2', text: 'Under your seat', isCorrect: false },
        { id: 'o3', text: 'In the overhead locker', isCorrect: false },
        { id: 'o4', text: 'With the flight attendant', isCorrect: false },
      ],
    },
    {
      id: 'ex-2', type: 'multiple-choice', points: 10,
      question: 'Where is the life vest located?',
      options: [
        { id: 'o1', text: 'Under your seat', isCorrect: true },
        { id: 'o2', text: 'In the overhead locker', isCorrect: false },
        { id: 'o3', text: 'In the seat pocket', isCorrect: false },
        { id: 'o4', text: 'At the emergency exit', isCorrect: false },
      ],
    },
    {
      id: 'ex-3', type: 'multiple-choice', points: 10,
      question: 'When should you inflate the life vest?',
      options: [
        { id: 'o1', text: 'Only after leaving the aircraft', isCorrect: true },
        { id: 'o2', text: 'As soon as you put it on', isCorrect: false },
        { id: 'o3', text: 'Before boarding', isCorrect: false },
        { id: 'o4', text: 'Never - it inflates automatically', isCorrect: false },
      ],
      hint: 'Inflating it too early could trap you inside the aircraft.',
    },
    {
      id: 'ex-4', type: 'multiple-choice', points: 10,
      question: 'If travelling with a child, whose oxygen mask should you put on first?',
      options: [
        { id: 'o1', text: 'Your own mask first, then assist the child', isCorrect: true },
        { id: 'o2', text: "The child's mask first", isCorrect: false },
        { id: 'o3', text: "It doesn't matter", isCorrect: false },
        { id: 'o4', text: 'Wait for crew assistance', isCorrect: false },
      ],
      hint: 'You need to be able to help others, so help yourself first.',
    },
    {
      id: 'ex-5', type: 'multiple-choice', points: 10,
      question: 'What guides passengers to the exits during an evacuation?',
      options: [
        { id: 'o1', text: 'Floor-level lighting', isCorrect: true },
        { id: 'o2', text: 'Overhead announcements only', isCorrect: false },
        { id: 'o3', text: 'The safety instruction card', isCorrect: false },
        { id: 'o4', text: 'Cabin crew carrying torches', isCorrect: false },
      ],
    },
    {
      id: 'ex-6', type: 'multiple-choice', points: 10,
      question: "What must you do when you hear 'Brace, brace'?",
      options: [
        { id: 'o1', text: 'Adopt the brace position shown on the safety card', isCorrect: true },
        { id: 'o2', text: 'Stand up immediately', isCorrect: false },
        { id: 'o3', text: 'Put on your life vest', isCorrect: false },
        { id: 'o4', text: 'Move to the nearest exit', isCorrect: false },
      ],
    },
    {
      id: 'ex-7', type: 'fill-blank', points: 10,
      question: 'To undo the seatbelt, ______ the buckle.',
      correctAnswer: 'lift',
      hint: 'The opposite motion to pressing down.',
    },
    {
      id: 'ex-8', type: 'speaking', points: 20,
      question: 'Read the full safety demonstration aloud, clearly and confidently, as if to a cabin full of passengers.',
    },
    {
      id: 'ex-9', type: 'speaking', points: 15,
      question: 'Practise making these final-check requests to a partner: switching off phones, upright seat backs, folding tables, opening window blinds, fastening seatbelts, stowing bags. Start with a polite phrase like "Excuse me..." or "Could you...?"',
    },
    {
      id: 'ex-10', type: 'multiple-choice', points: 10,
      question: 'What is the "Bags in Bins" text mainly about?',
      options: [
        { id: 'o1', text: 'The struggle to fit hand-baggage in the overhead lockers when a flight is full', isCorrect: true },
        { id: 'o2', text: 'How to pack a suitcase efficiently', isCorrect: false },
        { id: 'o3', text: 'Airline baggage fees', isCorrect: false },
        { id: 'o4', text: 'Lost luggage procedures', isCorrect: false },
      ],
    },
    {
      id: 'ex-11', type: 'multiple-choice', points: 10,
      question: 'What happens to the last passengers to board if there is no more room in the bins?',
      options: [
        { id: 'o1', text: 'Their hand-baggage is off-loaded and put in the hold', isCorrect: true },
        { id: 'o2', text: 'They are not allowed to board', isCorrect: false },
        { id: 'o3', text: 'They must pay an extra fee', isCorrect: false },
        { id: 'o4', text: 'The flight is delayed until it fits', isCorrect: false },
      ],
    },
    {
      id: 'ex-12', type: 'multiple-choice', points: 10,
      question: 'According to the text, why can boarding be a difficult experience for everyone?',
      options: [
        { id: 'o1', text: 'Passengers arrive with baggage that is too big, bulky, or heavy, and sometimes with two bags', isCorrect: true },
        { id: 'o2', text: 'The aircraft doors are too narrow', isCorrect: false },
        { id: 'o3', text: 'There are not enough flight attendants', isCorrect: false },
        { id: 'o4', text: 'Passengers do not have boarding passes', isCorrect: false },
      ],
    },
    {
      id: 'ex-13', type: 'multiple-choice', points: 10,
      question: 'What do flight attendants ask passengers to do to help with the hand-baggage problem?',
      options: [
        { id: 'o1', text: 'Store small items under the seats to free up space and the aisle', isCorrect: true },
        { id: 'o2', text: 'Leave all bags at the gate', isCorrect: false },
        { id: 'o3', text: 'Check in extra bags for free', isCorrect: false },
        { id: 'o4', text: 'Wait outside until boarding is finished', isCorrect: false },
      ],
    },
    {
      id: 'ex-14', type: 'multiple-choice', points: 10,
      question: 'Why is the hand-baggage problem also a safety concern, according to the text?',
      options: [
        { id: 'o1', text: 'While stowing bags, crew are not concentrating on safety duties and passenger needs', isCorrect: true },
        { id: 'o2', text: 'Overhead lockers can fall open during turbulence', isCorrect: false },
        { id: 'o3', text: 'Heavy bags change the balance of the aircraft', isCorrect: false },
        { id: 'o4', text: 'It is not a safety concern, only a comfort issue', isCorrect: false },
      ],
    },
    {
      id: 'ex-15', type: 'speaking', points: 15,
      question: 'Discuss: Why does the "fight for the overheads" seem worse than it used to be? Do flight attendants have any control over the situation? Is it better to offer help, or let passengers manage by themselves?',
    },
    {
      id: 'ex-16', type: 'speaking', points: 15,
      question: 'Discuss common problems flight attendants encounter when welcoming passengers on board, and share tips you would give to a new flight attendant.',
    },
    {
      id: 'ex-17', type: 'speaking', points: 15,
      question: 'Which of these possible solutions to the hand-baggage problem do you prefer, and why? The ground crew should solve it before boarding / carry-on size and weight should be strictly controlled / airlines should be tougher / check-in should be stricter / oversized bags should be checked in / passengers should pay more for carry-on / overhead lockers should be bigger. Do you have any other ideas?',
    },
  ],
  quiz: {
    id: 'quiz-2-3',
    title: 'Demonstrating Safety Procedures Quiz',
    passingScore: 70,
    exercises: [
      {
        id: 'q-1', type: 'multiple-choice', points: 20,
        question: 'What must you do before inflating the life vest?',
        options: [
          { id: 'o1', text: 'Leave the aircraft', isCorrect: true },
          { id: 'o2', text: 'Fasten your seatbelt', isCorrect: false },
          { id: 'o3', text: 'Put on your oxygen mask', isCorrect: false },
          { id: 'o4', text: 'Nothing, inflate it immediately', isCorrect: false },
        ],
      },
      {
        id: 'q-2', type: 'multiple-choice', points: 20,
        question: 'What phrase is used to close the safety demonstration?',
        options: [
          { id: 'o1', text: 'We wish you all an enjoyable flight.', isCorrect: true },
          { id: 'o2', text: 'Thank you for flying with us.', isCorrect: false },
          { id: 'o3', text: 'Please remain seated.', isCorrect: false },
          { id: 'o4', text: 'The demonstration is now over.', isCorrect: false },
        ],
      },
      {
        id: 'q-3', type: 'multiple-choice', points: 20,
        question: 'According to "Bags in Bins", how many hand-baggage items is each passenger permitted?',
        options: [
          { id: 'o1', text: 'One', isCorrect: true },
          { id: 'o2', text: 'Two', isCorrect: false },
          { id: 'o3', text: 'Three', isCorrect: false },
          { id: 'o4', text: 'As many as they can carry', isCorrect: false },
        ],
      },
      {
        id: 'q-4', type: 'multiple-choice', points: 20,
        question: 'What happens to hand-baggage that does not fit in the bins?',
        options: [
          { id: 'o1', text: "It's off-loaded and put in the hold", isCorrect: true },
          { id: 'o2', text: 'It stays with the passenger in the aisle', isCorrect: false },
          { id: 'o3', text: 'The passenger is removed from the flight', isCorrect: false },
          { id: 'o4', text: 'It is thrown away', isCorrect: false },
        ],
      },
      {
        id: 'q-5', type: 'multiple-choice', points: 20,
        question: 'What does "to stow" mean?',
        options: [
          { id: 'o1', text: 'To put away', isCorrect: true },
          { id: 'o2', text: 'To lose', isCorrect: false },
          { id: 'o3', text: 'To carry', isCorrect: false },
          { id: 'o4', text: 'To weigh', isCorrect: false },
        ],
      },
    ],
  },
  flashcards: [
    { id: 'fc-1', front: 'Bins', back: 'Overhead lockers' },
    { id: 'fc-2', front: 'Bulky', back: 'Large, very full' },
    { id: 'fc-3', front: 'Hold', back: 'The part of the aircraft where goods are stored' },
    { id: 'fc-4', front: 'To stow', back: 'To put away' },
    { id: 'fc-5', front: 'Crucial', back: 'Extremely important' },
    { id: 'fc-6', front: 'Brace position', back: 'The protective position passengers adopt before an emergency landing' },
  ],
  review: {
    keyPoints: [
      'The safety demo always opens with a request for attention and closes with a wish for an enjoyable flight',
      'Life vests are inflated only after leaving the aircraft, never inside it',
      'Put your own oxygen mask on first before helping a child or someone who needs assistance',
      'Final checks (seatbelts, tables, seat backs, blinds, phones) must be completed before take-off',
      'The hand-baggage rush during boarding is a real safety concern, not just an inconvenience',
    ],
    commonMistakes: [
      { mistake: 'Reading the safety demo too quickly or without confidence', correction: 'Practise reading it aloud clearly - passengers rely on this information', explanation: 'A rushed or unclear safety demo reduces passenger safety awareness' },
      { mistake: 'Focusing only on stowing bags during boarding', correction: 'Balance helping with baggage against ongoing safety observation duties', explanation: 'Crew must stay alert to passenger behaviour and needs throughout boarding' },
    ],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

const UNIT_TITLES: Record<number, string> = {
  0: 'Unit 1: The Pre-Flight Briefing',
  1: 'Unit 2: Welcome on Board',
  2: 'Unit 3: After Take-Off and Into the Flight',
  3: 'Unit 4: Food and Drinks',
  4: 'Unit 5: Minor Passenger Problems',
  5: 'Unit 6: Is There a Doctor on Board?',
  6: 'Unit 7: In-Flight Emergencies',
  7: 'Unit 8: Complaints and Disruptive Passengers',
  8: 'Unit 9: Preparing for Landing',
  9: 'Unit 10: Saying Goodbye',
};

const UNIT_ICONS: Record<number, string> = {
  0: '🧳', 1: '👋', 2: '✈️', 3: '🍽️', 4: '🤔',
  5: '🩺', 6: '🚨', 7: '😤', 8: '🛬', 9: '👋',
};

export const iCAOUnits: Unit[] = [
  ...Array(10).fill(0).map((_, unitIdx) => ({
    id: `unit-${unitIdx + 1}`,
    title: UNIT_TITLES[unitIdx] ?? `Unit ${unitIdx + 1}: Topic`,
    description: 'Complete lesson unit',
    icon: UNIT_ICONS[unitIdx] ?? '📚',
    color: 'from-blue-500 to-cyan-500' as const,
    progress: 0,
    locked: false,
    order: unitIdx + 1,
    lessons: Array.from({ length: 3 }, (_, lessonIdx) =>
      unitIdx === 0 && lessonIdx === 0
        ? MEETING_COLLEAGUES_LESSON
        : unitIdx === 0 && lessonIdx === 1
        ? FINDING_OUT_LESSON
        : unitIdx === 0 && lessonIdx === 2
        ? CASE_STUDY_LESSON
        : unitIdx === 1 && lessonIdx === 0
        ? WELCOME_ON_BOARD_LESSON
        : unitIdx === 1 && lessonIdx === 1
        ? SETTLING_PASSENGERS_LESSON
        : unitIdx === 1 && lessonIdx === 2
        ? SAFETY_DEMO_LESSON
        : LESSON_TEMPLATE(unitIdx + 1, lessonIdx + 1, `Lesson ${lessonIdx + 1}`)
    )
  })) as Unit[]
];
