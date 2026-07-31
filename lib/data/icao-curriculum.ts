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
// Unit 3, Lesson 1: Making the First Announcements
// Formal and informal language on short-haul flights
// ============================================================
const A3A = '/audio/unit-3/lesson-1';

const FIRST_ANNOUNCEMENTS_LESSON: any = {
  id: 'lesson-3-1',
  unitId: 'unit-3',
  title: 'Making the First Announcements',
  description: 'The first cabin announcements after take-off, and formal versus informal language',
  icon: '📢',
  icaoLevel: 4,
  category: 'cabin-crew',
  difficulty: 'intermediate',
  xpReward: 150,
  estimatedDurationMinutes: 40,
  locked: false,
  order: 1,
  objectives: [
    { id: 'obj-1', description: 'Understand the first cabin announcements after take-off', type: 'listening' },
    { id: 'obj-2', description: 'Distinguish formal and informal announcement language', type: 'vocabulary' },
    { id: 'obj-3', description: 'Read an announcement aloud with natural stress and intonation', type: 'speaking' },
  ],
  scenario: {
    id: 'scenario-first-announcements',
    title: 'Three Short-Haul Announcements',
    description: 'Three different flight attendants make the first announcement after take-off, each with a different style.',
    context: 'Cabin, just after the seatbelt sign is switched off on a short-haul flight',
    audioSegments: [
      { id: 'ann-1', text: "Ladies and gentlemen, boys and girls, it's great to have you on board! The seatbelt sign is off, but please don't leave your seats unless you have to. This is only a short flight and we'd like to serve you drinks and snacks as quickly as possible. There will only be time for one service and, er... apologies, we don't have any hot snacks today. Sorry about that. Speak to you again soon.", audioUrl: `${A3A}/ann1.wav`, durationSeconds: 20, speaker: 'crew' },
      { id: 'ann-2', text: "Hello, everyone, this is Stefan speaking. The seatbelt sign is off. Feel free to walk around. We want to serve you drinks shortly, so watch out for the trolley - we don't want to run you down, so don't block the aisles. We don't have a lot of time, so be quick with your order, please, and your money, of course. Thanks for your cooperation. Have a good flight.", audioUrl: `${A3A}/ann2.wav`, durationSeconds: 20, speaker: 'crew' },
      { id: 'ann-3', text: "Ladies and gentlemen, the seatbelt sign has been switched off and you can move around the cabin. We shall be coming through the cabin with refreshments in a few moments. Kindly look at the menu card in the pocket in front of you and have your order ready, please. We'd really appreciate it if you had the exact change for your purchases. Thank you, and enjoy the flight.", audioUrl: `${A3A}/ann3.wav`, durationSeconds: 18, speaker: 'crew' },
    ],
    vocabulary: [
      { word: 'Formal', definition: 'Polite and correct in style, following conventions' },
      { word: 'Informal', definition: 'Relaxed and friendly in style, like everyday speech' },
      { word: 'Cooperation', definition: 'Working together helpfully' },
      { word: 'Exact change', definition: 'The precise amount of money, without needing change back' },
    ],
  },
  theory: {
    title: 'Formal and Informal Announcements',
    content: "The first announcements after take-off set the tone for the flight. Cabin crew choose formal or informal language depending on the airline's style, but every announcement needs to clearly explain the seatbelt sign, the service to come, and any changes passengers should know about.",
    audioExplanation: {
      id: 'theory-audio',
      text: 'Explanation of formal and informal announcement language',
      audioUrl: `${A3A}/theory-explanation.wav`,
      durationSeconds: 20,
      speaker: 'instructor',
    },
  },
  icaoPhraseoology: STANDARD_PHRASEOLOGY,
  cabinCrewPhraseoology: {
    category: 'Formal and Informal Language',
    phrases: [
      { situation: 'Formal greeting', phrase: 'Ladies and gentlemen...', meaning: 'A formal way to open an announcement', example: 'Ladies and gentlemen, the seatbelt sign has been switched off.' },
      { situation: 'Informal greeting', phrase: 'Hello, everyone.', meaning: 'A relaxed way to open an announcement', example: 'Hello, everyone, this is Stefan speaking.' },
      { situation: 'Formal permission', phrase: 'You can move around the cabin.', meaning: 'A neutral, formal way to give permission', example: 'You can move around the cabin.' },
      { situation: 'Informal permission', phrase: 'Feel free to walk around.', meaning: 'A relaxed way to give the same permission', example: 'Feel free to walk around.' },
      { situation: 'Formal instruction', phrase: 'Kindly look at the menu card.', meaning: 'A polite, formal instruction', example: 'Kindly look at the menu card in the pocket in front of you.' },
      { situation: 'Informal instruction', phrase: 'Be ready with your order.', meaning: 'A relaxed, direct instruction', example: 'Be ready with your order, please.' },
    ],
  },
  airlineVocabulary: [{
    category: 'Announcement Language',
    terms: [
      { term: 'Formal', definition: 'Polite and correct in style, following conventions', example: 'Ladies and gentlemen is a formal greeting.' },
      { term: 'Informal', definition: 'Relaxed and friendly in style', example: 'Hello, everyone is an informal greeting.' },
      { term: 'Cooperation', definition: 'Working together helpfully', example: 'Thanks for your cooperation.' },
      { term: 'Exact change', definition: 'The precise amount of money, without needing change back', example: "We'd appreciate it if you had the exact change." },
    ],
  }],
  professionalExpressions: [
    { situation: 'Apologizing for a limited service', expression: "Apologies, we don't have any hot snacks today.", alternativeExpressions: ["I'm sorry, that's not available today.", "Unfortunately, we don't have that today."] },
    { situation: 'Thanking passengers', expression: 'Thanks for your cooperation.', alternativeExpressions: ['We appreciate your patience.', 'Thank you for understanding.'] },
  ],
  pronunciation: [
    { id: 'pron-1', text: "It's great to have you on board.", audioUrl: `${A3A}/pronunciation.wav`, durationSeconds: 3 },
  ],
  vocabulary: [
    { word: 'Formal', definition: 'Polite and correct in style, following conventions' },
    { word: 'Informal', definition: 'Relaxed and friendly in style' },
    { word: 'Cooperation', definition: 'Working together helpfully' },
    { word: 'Exact change', definition: 'The precise amount of money, without needing change back' },
  ],
  grammar: [
    {
      rule: 'Formal vs informal phrasing for the same message - the choice of words changes the tone without changing the meaning',
      examples: [
        { sentence: 'The seatbelt sign has been switched off. (formal) / The seatbelt sign is off. (informal)' },
        { sentence: 'You can move around the cabin. (formal) / Feel free to walk around. (informal)' },
        { sentence: 'Kindly look at the menu card. (formal) / Be ready with your order. (informal)' },
      ],
    },
  ],
  exercises: [
    {
      id: 'ex-1', type: 'fill-blank', points: 10,
      question: "It's great to have you on _________!",
      audio: { id: 'ann1-audio', text: 'Announcement 1', audioUrl: `${A3A}/ann1.wav`, durationSeconds: 20, speaker: 'crew' },
      correctAnswer: 'board',
    },
    {
      id: 'ex-2', type: 'fill-blank', points: 10,
      question: "Please don't leave your seats _________ you have to.",
      correctAnswer: 'unless',
      hint: 'A conjunction meaning "except if".',
    },
    {
      id: 'ex-3', type: 'fill-blank', points: 10,
      question: "We'd like to serve you drinks and snacks as _________ as possible.",
      correctAnswer: 'quickly',
    },
    {
      id: 'ex-4', type: 'fill-blank', points: 10,
      question: 'Feel _________ to walk around.',
      audio: { id: 'ann2-audio', text: 'Announcement 2', audioUrl: `${A3A}/ann2.wav`, durationSeconds: 20, speaker: 'crew' },
      correctAnswer: 'free',
    },
    {
      id: 'ex-5', type: 'multiple-choice', points: 10,
      question: 'On which announcement(s) is payment for food or drink mentioned?',
      options: [
        { id: 'o1', text: 'Announcements 2 and 3 (money / exact change)', isCorrect: true },
        { id: 'o2', text: 'Only announcement 1', isCorrect: false },
        { id: 'o3', text: 'None of them', isCorrect: false },
        { id: 'o4', text: 'All three equally', isCorrect: false },
      ],
    },
    {
      id: 'ex-6', type: 'multiple-choice', points: 10,
      question: 'On which announcement is there a problem with the food service?',
      options: [
        { id: 'o1', text: 'Announcement 1 - no hot snacks today', isCorrect: true },
        { id: 'o2', text: 'Announcement 2', isCorrect: false },
        { id: 'o3', text: 'Announcement 3', isCorrect: false },
        { id: 'o4', text: 'None of them', isCorrect: false },
      ],
    },
    {
      id: 'ex-7', type: 'multiple-choice', points: 10,
      question: 'On which announcement do the cabin crew seem least in a hurry?',
      options: [
        { id: 'o1', text: 'Announcement 3', isCorrect: true },
        { id: 'o2', text: 'Announcement 1', isCorrect: false },
        { id: 'o3', text: 'Announcement 2', isCorrect: false },
        { id: 'o4', text: 'They are all equally rushed', isCorrect: false },
      ],
    },
    {
      id: 'ex-8', type: 'speaking', points: 15,
      question: 'Which of the three announcements is the most fun, the most serious, and the most friendly? Which do you like most, and why?',
    },
    {
      id: 'ex-9', type: 'multiple-choice', points: 10,
      question: 'Which is the formal version: "The seatbelt sign is off" or "The seatbelt sign has been switched off"?',
      options: [
        { id: 'o1', text: 'The seatbelt sign has been switched off', isCorrect: true },
        { id: 'o2', text: 'The seatbelt sign is off', isCorrect: false },
      ],
    },
    {
      id: 'ex-10', type: 'multiple-choice', points: 10,
      question: 'Which is the informal version of "Kindly look at the menu card"?',
      options: [
        { id: 'o1', text: 'Be ready with your order', isCorrect: true },
        { id: 'o2', text: 'You can move around the cabin', isCorrect: false },
        { id: 'o3', text: 'Ladies and gentlemen', isCorrect: false },
        { id: 'o4', text: 'Thanks for your cooperation', isCorrect: false },
      ],
    },
    {
      id: 'ex-11', type: 'speaking', points: 15,
      question: 'What other formal and informal words or expressions do you know in English? Give examples of each.',
    },
    {
      id: 'ex-12', type: 'speaking', points: 15,
      question: 'Read this sentence aloud, stressing the words you think are most important: "We\'d really appreciate it if you had the exact change for your purchases."',
    },
    {
      id: 'ex-13', type: 'speaking', points: 20,
      question: 'In groups of three, practise reading aloud the three announcements to each other. Then try to say them again from memory or short notes.',
    },
  ],
  quiz: {
    id: 'quiz-3-1',
    title: 'Making the First Announcements Quiz',
    passingScore: 70,
    exercises: [
      {
        id: 'q-1', type: 'multiple-choice', points: 20,
        question: 'What is missing from the service in announcement 1?',
        options: [
          { id: 'o1', text: 'Hot snacks', isCorrect: true },
          { id: 'o2', text: 'Drinks', isCorrect: false },
          { id: 'o3', text: 'Menu cards', isCorrect: false },
          { id: 'o4', text: 'Headphones', isCorrect: false },
        ],
      },
      {
        id: 'q-2', type: 'multiple-choice', points: 20,
        question: 'Who introduces themselves by name in the announcements?',
        options: [
          { id: 'o1', text: 'Stefan', isCorrect: true },
          { id: 'o2', text: 'Jenny', isCorrect: false },
          { id: 'o3', text: 'Marcus', isCorrect: false },
          { id: 'o4', text: 'No one', isCorrect: false },
        ],
      },
      {
        id: 'q-3', type: 'multiple-choice', points: 20,
        question: 'Which phrase is more formal?',
        options: [
          { id: 'o1', text: 'Ladies and gentlemen', isCorrect: true },
          { id: 'o2', text: 'Hello, everyone', isCorrect: false },
        ],
      },
      {
        id: 'q-4', type: 'multiple-choice', points: 20,
        question: 'What do announcements 2 and 3 both ask passengers to have ready?',
        options: [
          { id: 'o1', text: 'Money / exact change', isCorrect: true },
          { id: 'o2', text: 'Their boarding pass', isCorrect: false },
          { id: 'o3', text: 'Their passport', isCorrect: false },
          { id: 'o4', text: 'A pen', isCorrect: false },
        ],
      },
      {
        id: 'q-5', type: 'multiple-choice', points: 20,
        question: 'What is the informal equivalent of "You can move around the cabin"?',
        options: [
          { id: 'o1', text: 'Feel free to walk around', isCorrect: true },
          { id: 'o2', text: 'Kindly remain seated', isCorrect: false },
          { id: 'o3', text: 'Please stay in your seat', isCorrect: false },
          { id: 'o4', text: 'The cabin is now open', isCorrect: false },
        ],
      },
    ],
  },
  flashcards: [
    { id: 'fc-1', front: 'Formal', back: 'Polite and correct in style, following conventions' },
    { id: 'fc-2', front: 'Informal', back: 'Relaxed and friendly in style' },
    { id: 'fc-3', front: 'Cooperation', back: 'Working together helpfully' },
    { id: 'fc-4', front: 'Exact change', back: 'The precise amount of money, without needing change back' },
  ],
  review: {
    keyPoints: [
      'The first announcement after take-off explains the seatbelt sign and the service to come',
      'Formal and informal language can express the same message with a different tone',
      'Short-haul announcements are often brief because of limited service time',
      'Stress the most important words when reading an announcement aloud',
      'A confident, warm delivery matters as much as the words themselves',
    ],
    commonMistakes: [
      { mistake: 'Mixing formal and informal language inconsistently', correction: 'Choose one style and stay consistent throughout the announcement', explanation: 'Mixing styles can sound unprofessional or confusing' },
      { mistake: 'Reading announcements in a flat, monotone voice', correction: 'Stress key words and vary your intonation', explanation: 'This keeps passengers engaged and makes information clearer' },
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

// ============================================================
// Unit 3, Lesson 2: Getting Started
// Dealing with passenger needs at the start of the flight
// ============================================================
const A3B = '/audio/unit-3/lesson-2';

const GETTING_STARTED_LESSON: any = {
  id: 'lesson-3-2',
  unitId: 'unit-3',
  title: 'Getting Started',
  description: 'Dealing with passenger requests during the refreshment service at the start of the flight',
  icon: '🛎️',
  icaoLevel: 4,
  category: 'cabin-crew',
  difficulty: 'intermediate',
  xpReward: 150,
  estimatedDurationMinutes: 40,
  locked: false,
  order: 2,
  objectives: [
    { id: 'obj-1', description: 'Understand short passenger requests during the refreshment service', type: 'listening' },
    { id: 'obj-2', description: 'Respond politely and helpfully to passenger needs', type: 'speaking' },
    { id: 'obj-3', description: 'Politely ask a passenger to wait when busy', type: 'speaking' },
  ],
  scenario: {
    id: 'scenario-getting-started',
    title: 'Dealing with Passenger Requests',
    description: 'The refreshment service is beginning on a short-haul flight. The flight attendant deals with four different passenger requests.',
    context: 'Cabin, short-haul flight, refreshment service beginning',
    audioSegments: [
      { id: 'c1-01', text: "Flight attendant: Excuse me, could you sit down, please? We're about to start the drinks service.", audioUrl: `${A3B}/c1-01-fa.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'c1-02', text: 'Passenger 1: Oh, sorry, of course.', audioUrl: `${A3B}/c1-02-passenger.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 'c2-01', text: 'Passenger 2: Could I have a glass of water, please?', audioUrl: `${A3B}/c2-01-passenger.wav`, durationSeconds: 3, speaker: 'passenger' },
      { id: 'c2-02', text: 'Flight attendant: OK, no problem.', audioUrl: `${A3B}/c2-02-fa.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'c3-01', text: "Passenger 3: Could you check if there's a spare blanket?", audioUrl: `${A3B}/c3-01-passenger.wav`, durationSeconds: 3, speaker: 'passenger' },
      { id: 'c3-02', text: 'Flight attendant: Yes, of course.', audioUrl: `${A3B}/c3-02-fa.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'c4-01', text: 'Flight attendant: Can I help you?', audioUrl: `${A3B}/c4-01-fa.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'c4-02', text: "Passenger 4: Yes, I ordered a vegetarian meal but I don't think it's on board.", audioUrl: `${A3B}/c4-02-passenger.wav`, durationSeconds: 5, speaker: 'passenger' },
      { id: 'c4-03', text: "Flight attendant: Leave it with me... I'll do it as quickly as possible.", audioUrl: `${A3B}/c4-03-fa.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'c4-04', text: 'Passenger 4: Thank you.', audioUrl: `${A3B}/c4-04-passenger.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 'c4-05', text: 'Flight attendant: What can I do for you?', audioUrl: `${A3B}/c4-05-fa.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'c4-06', text: 'Passenger 4: Any news about my meal?', audioUrl: `${A3B}/c4-06-passenger.wav`, durationSeconds: 3, speaker: 'passenger' },
      { id: 'c4-07', text: "Flight attendant: Listen, don't worry. I'll get back to you.", audioUrl: `${A3B}/c4-07-fa.wav`, durationSeconds: 3, speaker: 'crew' },
    ],
    vocabulary: [
      { word: 'Refreshment service', definition: 'The drinks and snacks service on a flight' },
      { word: 'Spare', definition: 'Extra, available if needed' },
      { word: 'Vegetarian meal', definition: 'A special meal without meat, ordered in advance' },
    ],
  },
  theory: {
    title: 'Dealing with Passenger Needs',
    content: 'At the beginning of the flight, cabin crew deal with many small passenger requests at once. Being polite, quick, and reassuring helps everyone feel looked after, even when the crew are busy. When crew cannot help immediately, a promise to return builds trust.',
    audioExplanation: {
      id: 'theory-audio',
      text: 'Explanation of dealing with passenger needs',
      audioUrl: `${A3B}/theory-explanation.wav`,
      durationSeconds: 20,
      speaker: 'instructor',
    },
  },
  icaoPhraseoology: STANDARD_PHRASEOLOGY,
  cabinCrewPhraseoology: {
    category: 'Dealing with Passenger Needs',
    phrases: [
      { situation: 'Offering help', phrase: 'Can I help you? / What can I do for you?', meaning: 'Polite and helpful opener', example: 'Can I help you?' },
      { situation: 'Agreeing readily', phrase: 'Yes, of course. / OK, no problem.', meaning: 'Immediate, friendly agreement', example: 'Yes, of course.' },
      { situation: 'Asking a passenger to wait', phrase: "I'm afraid we're busy just now. Can you wait a moment?", meaning: 'Polite way to delay a request when busy', example: "I'm afraid we're busy just now. Can you wait a moment?" },
      { situation: 'Promising to return', phrase: "Leave it with me and I'll do it as soon as possible.", meaning: 'Reassuring the passenger their request will be handled', example: "Leave it with me and I'll do it as soon as possible." },
      { situation: 'Promising an update', phrase: "I'll get back to you. I promise.", meaning: 'Committing to follow up on a request', example: "I'll get back to you. I promise." },
    ],
  },
  airlineVocabulary: [{
    category: 'Passenger Requests',
    terms: [
      { term: 'Refreshment service', definition: 'The drinks and snacks service on a flight', example: 'The refreshment service is beginning on a short-haul flight.' },
      { term: 'Spare blanket', definition: 'An extra blanket kept for passengers who need one', example: "Could you check if there's a spare blanket?" },
      { term: 'Vegetarian meal', definition: 'A special meal without meat, ordered in advance', example: 'I ordered a vegetarian meal.' },
      { term: 'Disembarkation card', definition: 'A form completed before landing in some countries', example: 'I need another disembarkation card.' },
    ],
  }],
  professionalExpressions: [
    { situation: 'Asking someone to sit for safety', expression: 'Could you sit down, please? We\'re about to start the service.', alternativeExpressions: ['Please take your seat, we\'re starting the service.', 'Would you mind sitting down for a moment?'] },
    { situation: 'Reassuring a waiting passenger', expression: "Don't worry, I'll get back to you.", alternativeExpressions: ["I haven't forgotten, I'll be right with you.", "Bear with me, I'll sort this out."] },
  ],
  pronunciation: [
    { id: 'pron-1', text: 'Can I help you?', audioUrl: `${A3B}/pronunciation.wav`, durationSeconds: 2 },
  ],
  vocabulary: [
    { word: 'Refreshment service', definition: 'The drinks and snacks service on a flight' },
    { word: 'Spare', definition: 'Extra, available if needed' },
    { word: 'Vegetarian meal', definition: 'A special meal without meat, ordered in advance' },
    { word: 'Disembarkation card', definition: 'A form completed before landing in some countries' },
  ],
  grammar: [
    {
      rule: 'Polite promises with "will" (I\'ll...) - used to reassure a passenger that something will be done',
      examples: [
        { sentence: "I'll do it as soon as possible.", audioUrl: `${A3B}/lf-6.wav` },
        { sentence: "I'll get back to you.", audioUrl: `${A3B}/lf-7.wav` },
        { sentence: "I'm afraid we're busy just now. Can you wait a moment?", audioUrl: `${A3B}/lf-4.wav` },
      ],
    },
  ],
  exercises: [
    {
      id: 'ex-1', type: 'multiple-choice', points: 10,
      question: 'What does the first passenger need to do?',
      options: [
        { id: 'o1', text: 'Sit down', isCorrect: true },
        { id: 'o2', text: 'Fasten a seatbelt', isCorrect: false },
        { id: 'o3', text: 'Move to another seat', isCorrect: false },
        { id: 'o4', text: 'Turn off a device', isCorrect: false },
      ],
    },
    {
      id: 'ex-2', type: 'multiple-choice', points: 10,
      question: 'What does the second passenger want?',
      options: [
        { id: 'o1', text: 'A glass of water', isCorrect: true },
        { id: 'o2', text: 'A blanket', isCorrect: false },
        { id: 'o3', text: 'A vegetarian meal', isCorrect: false },
        { id: 'o4', text: 'A newspaper', isCorrect: false },
      ],
    },
    {
      id: 'ex-3', type: 'multiple-choice', points: 10,
      question: 'What does the third passenger want the flight attendant to do?',
      options: [
        { id: 'o1', text: 'Check if there is a spare blanket', isCorrect: true },
        { id: 'o2', text: 'Bring a glass of water', isCorrect: false },
        { id: 'o3', text: 'Find their vegetarian meal', isCorrect: false },
        { id: 'o4', text: 'Help with their bag', isCorrect: false },
      ],
    },
    {
      id: 'ex-4', type: 'multiple-choice', points: 10,
      question: 'What does the fourth passenger want to know?',
      options: [
        { id: 'o1', text: 'Whether their vegetarian meal is on board', isCorrect: true },
        { id: 'o2', text: 'What time the flight lands', isCorrect: false },
        { id: 'o3', text: 'Where the toilet is', isCorrect: false },
        { id: 'o4', text: 'How to recline their seat', isCorrect: false },
      ],
    },
    {
      id: 'ex-5', type: 'fill-blank', points: 10,
      question: 'Excuse me, could you sit _________, please?',
      correctAnswer: 'down',
    },
    {
      id: 'ex-6', type: 'fill-blank', points: 10,
      question: 'OK, no _________.',
      correctAnswer: 'problem',
    },
    {
      id: 'ex-7', type: 'fill-blank', points: 10,
      question: 'Yes, _________ course.',
      correctAnswer: 'of',
    },
    {
      id: 'ex-8', type: 'fill-blank', points: 10,
      question: 'Can I _________ you?',
      correctAnswer: 'help',
    },
    {
      id: 'ex-9', type: 'fill-blank', points: 10,
      question: 'Leave it _________ me...',
      correctAnswer: 'with',
    },
    {
      id: 'ex-10', type: 'fill-blank', points: 10,
      question: "I'll do it as _________ as possible.",
      correctAnswer: 'quickly',
    },
    {
      id: 'ex-11', type: 'fill-blank', points: 10,
      question: 'What can I _________ for you?',
      correctAnswer: 'do',
    },
    {
      id: 'ex-12', type: 'fill-blank', points: 10,
      question: "Listen, don't _________.",
      correctAnswer: 'worry',
    },
    {
      id: 'ex-13', type: 'fill-blank', points: 10,
      question: "I'll _________ back to you.",
      correctAnswer: 'get',
    },
    {
      id: 'ex-14', type: 'speaking', points: 15,
      question: 'How well does the flight attendant deal with the four requests? Discuss.',
    },
    {
      id: 'ex-15', type: 'speaking', points: 20,
      question: 'Role-play with a partner: Student A is the passenger with one of these needs (change seat, need another disembarkation card, very cold, very thirsty, bad headache, feeling sick) using "I need to.../I have to.../Could you...". Student B is the flight attendant, responding using the phrases from this lesson.',
    },
    {
      id: 'ex-16', type: 'speaking', points: 15,
      question: 'What other passenger needs do you have to deal with at the beginning of the flight? Discuss with examples.',
    },
  ],
  quiz: {
    id: 'quiz-3-2',
    title: 'Getting Started Quiz',
    passingScore: 70,
    exercises: [
      {
        id: 'q-1', type: 'multiple-choice', points: 20,
        question: 'What meal problem does the fourth passenger have?',
        options: [
          { id: 'o1', text: 'Their vegetarian meal seems to not be on board', isCorrect: true },
          { id: 'o2', text: 'Their meal is too cold', isCorrect: false },
          { id: 'o3', text: 'They were charged twice', isCorrect: false },
          { id: 'o4', text: 'They want a second meal', isCorrect: false },
        ],
      },
      {
        id: 'q-2', type: 'multiple-choice', points: 20,
        question: 'Which phrase politely asks a passenger to wait?',
        options: [
          { id: 'o1', text: "I'm afraid we're busy just now. Can you wait a moment?", isCorrect: true },
          { id: 'o2', text: 'Not now.', isCorrect: false },
          { id: 'o3', text: 'You have to wait.', isCorrect: false },
          { id: 'o4', text: 'Later.', isCorrect: false },
        ],
      },
      {
        id: 'q-3', type: 'multiple-choice', points: 20,
        question: 'What does passenger 3 ask about?',
        options: [
          { id: 'o1', text: 'A spare blanket', isCorrect: true },
          { id: 'o2', text: 'A spare pillow', isCorrect: false },
          { id: 'o3', text: 'Headphones', isCorrect: false },
          { id: 'o4', text: 'A newspaper', isCorrect: false },
        ],
      },
      {
        id: 'q-4', type: 'multiple-choice', points: 20,
        question: 'Which phrase reassures a passenger their request will be handled?',
        options: [
          { id: 'o1', text: "Leave it with me and I'll do it as soon as possible.", isCorrect: true },
          { id: 'o2', text: "I can't help with that.", isCorrect: false },
          { id: 'o3', text: "That's not my job.", isCorrect: false },
          { id: 'o4', text: 'Ask someone else.', isCorrect: false },
        ],
      },
      {
        id: 'q-5', type: 'multiple-choice', points: 20,
        question: 'Why does passenger 1 need to sit down?',
        options: [
          { id: 'o1', text: 'The drinks service is about to start', isCorrect: true },
          { id: 'o2', text: 'The seatbelt sign has come on', isCorrect: false },
          { id: 'o3', text: 'There is turbulence', isCorrect: false },
          { id: 'o4', text: 'The aircraft is about to land', isCorrect: false },
        ],
      },
    ],
  },
  flashcards: [
    { id: 'fc-1', front: 'Refreshment service', back: 'The drinks and snacks service on a flight' },
    { id: 'fc-2', front: 'Vegetarian meal', back: 'A special meal without meat, ordered in advance' },
    { id: 'fc-3', front: 'Disembarkation card', back: 'A form completed before landing in some countries' },
    { id: 'fc-4', front: 'Spare', back: 'Extra, available if needed' },
  ],
  review: {
    keyPoints: [
      'Deal with requests politely and quickly: "Yes, of course" / "OK, no problem"',
      "When busy, politely ask passengers to wait rather than ignoring them",
      "Always follow up on a promise to help, e.g. \"I'll get back to you\"",
      'Common early-flight requests include seating, drinks, blankets, and special meals',
      'A calm, reassuring tone matters as much as the words used',
    ],
    commonMistakes: [
      { mistake: 'Ignoring a request because the crew are busy', correction: 'Acknowledge the request even if you cannot help immediately', explanation: 'Passengers feel respected when their request is at least acknowledged' },
      { mistake: 'Forgetting to follow up on a promised request', correction: 'Always return to the passenger as promised', explanation: 'Broken promises damage trust in the crew' },
    ],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

// ============================================================
// Unit 3, Lesson 3: Helping to Settle Passengers
// 'Comfort' expressions + Case Study: Flying with Children
// ============================================================
const A3C = '/audio/unit-3/lesson-3';

const SETTLE_PASSENGERS_LESSON: any = {
  id: 'lesson-3-3',
  unitId: 'unit-3',
  title: 'Helping to Settle Passengers',
  description: "Caring for different types of passengers with 'comfort' expressions, and the case study: Flying with Children",
  icon: '🧸',
  icaoLevel: 4,
  category: 'cabin-crew',
  difficulty: 'intermediate',
  xpReward: 180,
  estimatedDurationMinutes: 55,
  locked: false,
  order: 3,
  objectives: [
    { id: 'obj-1', description: 'Identify what different types of passengers might need', type: 'speaking' },
    { id: 'obj-2', description: 'Understand short and long-haul passenger conversations', type: 'listening' },
    { id: 'obj-3', description: 'Use comfort expressions in a caring, attentive tone', type: 'speaking' },
    { id: 'obj-4', description: 'Discuss the challenges of flying with children', type: 'reading' },
  ],
  scenario: {
    id: 'scenario-settle-passengers',
    title: 'Caring for Different Passengers',
    description: 'A flight attendant deals with four short-haul passenger situations, then four longer requests at the start of a long-haul flight.',
    context: 'Cabin, short-haul and long-haul flights',
    audioSegments: [
      { id: 'sh1-01', text: 'Flight attendant: Hello, madam, are you feeling better now?', audioUrl: `${A3C}/sh1-01-fa.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'sh1-02', text: 'Passenger 1: Yes, thank you, much better.', audioUrl: `${A3C}/sh1-02-passenger.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 'sh2-01', text: 'Flight attendant: Did you call, sir? Can I help you?', audioUrl: `${A3C}/sh2-01-fa.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'sh2-02', text: 'Passenger 2: Yes, I pressed the button ages ago!', audioUrl: `${A3C}/sh2-02-passenger.wav`, durationSeconds: 3, speaker: 'passenger' },
      { id: 'sh2-03', text: "Flight attendant: I'm so sorry, how can I help?", audioUrl: `${A3C}/sh2-03-fa.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'sh3-01', text: "Passenger 3: Excuse me, I still haven't got my headphones.", audioUrl: `${A3C}/sh3-01-passenger.wav`, durationSeconds: 3, speaker: 'passenger' },
      { id: 'sh3-02', text: "Flight attendant: I do apologize. I'll get it immediately.", audioUrl: `${A3C}/sh3-02-fa.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'sh4-01', text: 'Passenger 4: Is it OK if I recline my seat a little?', audioUrl: `${A3C}/sh4-01-passenger.wav`, durationSeconds: 3, speaker: 'passenger' },
      { id: 'sh4-02', text: "Flight attendant: Yes, that's fine, go ahead.", audioUrl: `${A3C}/sh4-02-fa.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'lh1-01', text: 'Passenger 1: Excuse me, how long is this flight?', audioUrl: `${A3C}/lh1-01-passenger.wav`, durationSeconds: 3, speaker: 'passenger' },
      { id: 'lh1-02', text: "Flight attendant: It's about eleven hours.", audioUrl: `${A3C}/lh1-02-fa.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'lh2-01', text: 'Passenger 2: When will the meal be served? My children are getting hungry and a bit restless.', audioUrl: `${A3C}/lh2-01-passenger.wav`, durationSeconds: 5, speaker: 'passenger' },
      { id: 'lh2-02', text: "Flight attendant: We'll start the meal service in about thirty minutes.", audioUrl: `${A3C}/lh2-02-fa.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'lh3-01', text: 'Passenger 3: Could you tell me which channel the films are on?', audioUrl: `${A3C}/lh3-01-passenger.wav`, durationSeconds: 3, speaker: 'passenger' },
      { id: 'lh3-02', text: 'Flight attendant: The films are on channel nine.', audioUrl: `${A3C}/lh3-02-fa.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'lh4-01', text: 'Passenger 4: Could I have another pillow, please?', audioUrl: `${A3C}/lh4-01-passenger.wav`, durationSeconds: 3, speaker: 'passenger' },
      { id: 'lh4-02', text: "Flight attendant: Of course. I'll put your call light on so the other flight attendants know you need something, in case I get held up.", audioUrl: `${A3C}/lh4-02-fa.wav`, durationSeconds: 7, speaker: 'crew' },
    ],
    vocabulary: [
      { word: 'Restless', definition: 'Unable to stay still or relaxed' },
      { word: 'Call light', definition: 'A light that shows a flight attendant is needed at a seat' },
      { word: 'To recline', definition: 'To lean a seat back' },
      { word: 'Held up', definition: 'Delayed by something' },
    ],
  },
  theory: {
    title: 'Comfort and Care in the Cabin',
    content: 'Settling passengers on a long flight means noticing who might need extra care - nervous first-time flyers, families with children, older passengers, or anyone travelling alone. Comfort expressions and a caring tone help everyone feel looked after throughout the flight.',
    audioExplanation: {
      id: 'theory-audio',
      text: 'Explanation of comfort and care in the cabin',
      audioUrl: `${A3C}/theory-explanation.wav`,
      durationSeconds: 20,
      speaker: 'instructor',
    },
  },
  icaoPhraseoology: STANDARD_PHRASEOLOGY,
  cabinCrewPhraseoology: {
    category: "'Comfort' Expressions",
    phrases: [
      { situation: 'Giving something to a passenger', phrase: 'Here you are.', meaning: 'Handing over the menu, headphones, a blanket, or a glass', example: 'Here you are.' },
      { situation: 'Offering more help', phrase: 'Can I get you anything else? / Anything else I can do for you?', meaning: 'Checking if the passenger needs more', example: 'Can I get you anything else?' },
      { situation: 'Flagging a need to colleagues', phrase: 'Let me put the call light on for you.', meaning: 'Making sure the passenger gets help even if you are busy', example: 'Let me put the call light on for you.' },
      { situation: 'Reassuring a nervous passenger', phrase: "Don't worry, you'll be fine.", meaning: 'Calming a worried passenger', example: "Don't worry, you'll be fine." },
      { situation: 'Agreeing warmly', phrase: 'Of course, no problem at all.', meaning: 'Friendly, immediate agreement', example: 'Of course, no problem at all.' },
      { situation: 'Promising to return', phrase: "I'll be back in five minutes.", meaning: 'Giving a passenger a clear time to expect help', example: "I'll be back in five minutes." },
    ],
  },
  airlineVocabulary: [{
    category: 'Passenger Care',
    terms: [
      { term: 'Restless', definition: 'Unable to stay still or relaxed', example: 'My children are getting hungry and a bit restless.' },
      { term: 'Call light', definition: 'A light that shows a flight attendant is needed at a seat', example: "I'll put your call light on." },
      { term: 'To recline', definition: 'To lean a seat back', example: 'Is it OK if I recline my seat a little?' },
      { term: 'Held up', definition: 'Delayed by something', example: 'In case I get held up.' },
      { term: 'Cramped', definition: 'Small, with not much space', example: 'A cramped cabin can be difficult with small children.' },
      { term: 'Unruly', definition: 'Badly behaved, difficult to control', example: "I've never had an unruly child on board with a hands-on parent." },
    ],
  }],
  professionalExpressions: [
    { situation: 'Checking on a passenger who was unwell', expression: 'Are you feeling better now?', alternativeExpressions: ['How are you feeling?', 'Is everything all right now?'] },
    { situation: 'Apologizing for a delay', expression: 'I do apologize. I\'ll get it immediately.', alternativeExpressions: ["I'm so sorry for the wait.", "My apologies, I'll sort that out right away."] },
  ],
  pronunciation: [
    { id: 'pron-1', text: 'Hello, madam, are you feeling better now?', audioUrl: `${A3C}/pron-1.wav`, durationSeconds: 3 },
    { id: 'pron-2', text: 'Can I help you, sir?', audioUrl: `${A3C}/pron-2.wav`, durationSeconds: 2 },
    { id: 'pron-3', text: 'Did you call, sir?', audioUrl: `${A3C}/pron-3.wav`, durationSeconds: 2 },
    { id: 'pron-4', text: 'Hello there, is everything all right?', audioUrl: `${A3C}/pron-4.wav`, durationSeconds: 3 },
    { id: 'pron-5', text: 'No problem, madam.', audioUrl: `${A3C}/pron-5.wav`, durationSeconds: 2 },
    { id: 'pron-6', text: 'I do apologize. I\'ll get it immediately.', audioUrl: `${A3C}/pron-6.wav`, durationSeconds: 3 },
    { id: 'pron-7', text: "You're quite right, sir.", audioUrl: `${A3C}/pron-7.wav`, durationSeconds: 2 },
    { id: 'pron-8', text: "Yes, that's fine. Go ahead.", audioUrl: `${A3C}/pron-8.wav`, durationSeconds: 2 },
  ],
  vocabulary: [
    { word: 'Restless', definition: 'Unable to stay still or relaxed' },
    { word: 'Call light', definition: 'A light that shows a flight attendant is needed at a seat' },
    { word: 'To recline', definition: 'To lean a seat back' },
    { word: 'Cramped', definition: 'Small, with not much space' },
    { word: 'Unruly', definition: 'Badly behaved, difficult to control' },
    { word: 'Hands-on parent', definition: 'A parent who takes responsibility for their child' },
  ],
  grammar: [
    {
      rule: 'Reassuring language with future and modal forms - used to comfort or promise help to a passenger',
      examples: [
        { sentence: "Don't worry, you'll be fine.", audioUrl: `${A3C}/comfort-5.wav` },
        { sentence: "I'll be back in five minutes.", audioUrl: `${A3C}/comfort-7.wav` },
        { sentence: 'Can I get you anything else?', audioUrl: `${A3C}/comfort-2.wav` },
      ],
    },
  ],
  exercises: [
    {
      id: 'ex-1', type: 'speaking', points: 15,
      question: 'What might these types of passenger need to get settled on a long-haul flight: passengers travelling alone, groups, families with small children, older people? Discuss with examples.',
    },
    {
      id: 'ex-2', type: 'speaking', points: 15,
      question: 'These passenger types can sometimes seem shy, nervous, unpleasant, noisy, arrogant, or demanding. Who do you think makes a "difficult" passenger, and why?',
    },
    {
      id: 'ex-3', type: 'multiple-choice', points: 10,
      question: "What was passenger 1's problem?",
      options: [
        { id: 'o1', text: 'She had not been feeling well', isCorrect: true },
        { id: 'o2', text: 'She missed her meal', isCorrect: false },
        { id: 'o3', text: 'She lost her headphones', isCorrect: false },
        { id: 'o4', text: 'She wanted to change seats', isCorrect: false },
      ],
    },
    {
      id: 'ex-4', type: 'multiple-choice', points: 10,
      question: "What was passenger 2's problem?",
      options: [
        { id: 'o1', text: 'He pressed the call button a while ago and no one came', isCorrect: true },
        { id: 'o2', text: 'He wanted extra headphones', isCorrect: false },
        { id: 'o3', text: 'He felt unwell', isCorrect: false },
        { id: 'o4', text: 'He wanted to recline his seat', isCorrect: false },
      ],
    },
    {
      id: 'ex-5', type: 'multiple-choice', points: 10,
      question: "What was passenger 3's problem?",
      options: [
        { id: 'o1', text: 'They still had not received their headphones', isCorrect: true },
        { id: 'o2', text: 'They felt unwell', isCorrect: false },
        { id: 'o3', text: 'They wanted a blanket', isCorrect: false },
        { id: 'o4', text: 'They wanted to know the flight time', isCorrect: false },
      ],
    },
    {
      id: 'ex-6', type: 'multiple-choice', points: 10,
      question: 'What did passenger 4 ask?',
      options: [
        { id: 'o1', text: 'If it was OK to recline their seat', isCorrect: true },
        { id: 'o2', text: 'For a spare pillow', isCorrect: false },
        { id: 'o3', text: 'For the call light to be turned on', isCorrect: false },
        { id: 'o4', text: 'To move to another seat', isCorrect: false },
      ],
    },
    {
      id: 'ex-7', type: 'speaking', points: 15,
      question: 'Practise saying the caring, attentive pronunciation sentences from this lesson, copying the intonation you hear.',
    },
    {
      id: 'ex-8', type: 'multiple-choice', points: 10,
      question: 'What does passenger 1 want to know on the long-haul flight?',
      options: [
        { id: 'o1', text: 'How long the flight is', isCorrect: true },
        { id: 'o2', text: 'When the meal is served', isCorrect: false },
        { id: 'o3', text: 'Which channel the films are on', isCorrect: false },
        { id: 'o4', text: 'Where the toilets are', isCorrect: false },
      ],
    },
    {
      id: 'ex-9', type: 'multiple-choice', points: 10,
      question: 'When will the meal be served, according to conversation 2?',
      options: [
        { id: 'o1', text: 'In about thirty minutes', isCorrect: true },
        { id: 'o2', text: 'Immediately', isCorrect: false },
        { id: 'o3', text: 'In two hours', isCorrect: false },
        { id: 'o4', text: 'After the films', isCorrect: false },
      ],
    },
    {
      id: 'ex-10', type: 'multiple-choice', points: 10,
      question: "What is the problem with the passenger's children in conversation 2?",
      options: [
        { id: 'o1', text: 'They are hungry and a bit restless', isCorrect: true },
        { id: 'o2', text: 'They are asleep and cannot be woken for the meal', isCorrect: false },
        { id: 'o3', text: 'They do not have seats', isCorrect: false },
        { id: 'o4', text: 'They are feeling sick', isCorrect: false },
      ],
    },
    {
      id: 'ex-11', type: 'multiple-choice', points: 10,
      question: 'Which channel are the films on?',
      options: [
        { id: 'o1', text: 'Channel 9', isCorrect: true },
        { id: 'o2', text: 'Channel 3', isCorrect: false },
        { id: 'o3', text: 'Channel 12', isCorrect: false },
        { id: 'o4', text: 'Channel 1', isCorrect: false },
      ],
    },
    {
      id: 'ex-12', type: 'multiple-choice', points: 10,
      question: 'Why does the flight attendant put on the call light for passenger 4?',
      options: [
        { id: 'o1', text: 'So other crew know to help if she gets held up', isCorrect: true },
        { id: 'o2', text: 'Because the passenger is unwell', isCorrect: false },
        { id: 'o3', text: 'To signal the meal service is starting', isCorrect: false },
        { id: 'o4', text: 'By mistake', isCorrect: false },
      ],
    },
    {
      id: 'ex-13', type: 'speaking', points: 20,
      question: "Look at these passenger types: an old lady travelling alone, a group of happy friends, a young man with a guitar, a nervous first-time flyer, excited children and parents, a mother and baby, a special needs traveller, a quiet elderly couple, a woman who is not very well. What could you say to help settle each one? Role-play a few of them with a partner.",
      hint: 'Try phrases like "Don\'t worry, you\'ll be fine." or "Is everything all right?"',
    },
    {
      id: 'ex-14', type: 'multiple-choice', points: 15,
      question: 'Give an example from the "Flying with Children" text of behaviour that can annoy adult passengers.',
      options: [
        { id: 'o1', text: 'Kids kicking the back of a seat while the parent looks elsewhere', isCorrect: true },
        { id: 'o2', text: 'Children reading quietly', isCorrect: false },
        { id: 'o3', text: 'Babies sleeping the whole flight', isCorrect: false },
        { id: 'o4', text: 'Parents keeping children in their seats at all times', isCorrect: false },
      ],
    },
    {
      id: 'ex-15', type: 'multiple-choice', points: 15,
      question: 'What solutions are proposed or outlined in the text?',
      options: [
        { id: 'o1', text: 'Family-only sections, and cards/colouring books or child-friendly areas at the gate', isCorrect: true },
        { id: 'o2', text: 'Banning children from flights entirely', isCorrect: false },
        { id: 'o3', text: 'Charging parents extra for noisy children', isCorrect: false },
        { id: 'o4', text: 'No solutions are mentioned', isCorrect: false },
      ],
    },
    {
      id: 'ex-16', type: 'speaking', points: 15,
      question: "Do you agree that the purser's action of escorting the mother and screaming baby off the plane was 'a little harsh'? Why, or why not?",
    },
    {
      id: 'ex-17', type: 'speaking', points: 15,
      question: 'When you know in advance about young flyers and babies on your flight, how do you prepare to settle them in? Why do you think there are so many negative comments from other passengers about them? Is it really the flight attendants\' duty to keep the peace?',
    },
    {
      id: 'ex-18', type: 'speaking', points: 15,
      question: 'Discuss common duties and challenges flight attendants face after take-off, on both short-haul and long-haul flights, and share tips for handling them well.',
    },
    {
      id: 'ex-19', type: 'speaking', points: 15,
      question: 'After take-off, flight attendants have a duty of customer care for all passengers, including babies. With all their other duties, is there enough time? Do young flyers present the biggest challenge, or are there other types of passenger who cause more problems on board?',
    },
  ],
  quiz: {
    id: 'quiz-3-3',
    title: 'Helping to Settle Passengers Quiz',
    passingScore: 70,
    exercises: [
      {
        id: 'q-1', type: 'multiple-choice', points: 20,
        question: 'How long is the flight in the first long-haul conversation?',
        options: [
          { id: 'o1', text: 'About eleven hours', isCorrect: true },
          { id: 'o2', text: 'About five hours', isCorrect: false },
          { id: 'o3', text: 'About two hours', isCorrect: false },
          { id: 'o4', text: 'About twenty hours', isCorrect: false },
        ],
      },
      {
        id: 'q-2', type: 'multiple-choice', points: 20,
        question: 'What phrase hands something to a passenger?',
        options: [
          { id: 'o1', text: 'Here you are.', isCorrect: true },
          { id: 'o2', text: 'Take this now.', isCorrect: false },
          { id: 'o3', text: 'This is yours.', isCorrect: false },
          { id: 'o4', text: 'Have it.', isCorrect: false },
        ],
      },
      {
        id: 'q-3', type: 'multiple-choice', points: 20,
        question: 'According to the case study, why was a mother and baby escorted off a plane?',
        options: [
          { id: 'o1', text: 'The purser thought other passengers could not hear the safety announcement', isCorrect: true },
          { id: 'o2', text: 'The baby had no ticket', isCorrect: false },
          { id: 'o3', text: 'The mother refused to sit down', isCorrect: false },
          { id: 'o4', text: 'The baby was sick', isCorrect: false },
        ],
      },
      {
        id: 'q-4', type: 'multiple-choice', points: 20,
        question: 'What does "unruly" mean?',
        options: [
          { id: 'o1', text: 'Badly behaved, difficult to control', isCorrect: true },
          { id: 'o2', text: 'Very quiet and calm', isCorrect: false },
          { id: 'o3', text: 'Extremely tired', isCorrect: false },
          { id: 'o4', text: 'Well-organized', isCorrect: false },
        ],
      },
      {
        id: 'q-5', type: 'multiple-choice', points: 20,
        question: 'What have some airlines provided to keep small passengers happy before boarding?',
        options: [
          { id: 'o1', text: 'Child-friendly tables, chairs and toys at the gate', isCorrect: true },
          { id: 'o2', text: 'A separate check-in desk', isCorrect: false },
          { id: 'o3', text: 'Free extra luggage allowance', isCorrect: false },
          { id: 'o4', text: 'Priority boarding only', isCorrect: false },
        ],
      },
    ],
  },
  flashcards: [
    { id: 'fc-1', front: 'Restless', back: 'Unable to stay still or relaxed' },
    { id: 'fc-2', front: 'Call light', back: 'A light that shows a flight attendant is needed at a seat' },
    { id: 'fc-3', front: 'Cramped', back: 'Small, with not much space' },
    { id: 'fc-4', front: 'Unruly', back: 'Badly behaved, difficult to control' },
    { id: 'fc-5', front: 'Hands-on parent', back: 'A parent who takes responsibility for their child' },
  ],
  review: {
    keyPoints: [
      'Different passenger types (alone, groups, families, older people) need different kinds of care',
      'A caring, attentive tone matters as much as the words used',
      'Comfort expressions reassure passengers and build trust throughout the flight',
      'Flying with children is challenging for parents, crew, and other passengers alike',
      'Cabin crew must balance customer care duties with limited time, especially on short-haul flights',
    ],
    commonMistakes: [
      { mistake: 'Assuming all passengers of a type need the same thing', correction: 'Treat each passenger as an individual, even within a group type', explanation: 'A "difficult" passenger is often just someone with unmet needs' },
      { mistake: 'Reacting harshly to a crying baby or misbehaving child', correction: 'Address the parent calmly and offer practical help first', explanation: 'A harsh response, as in the case study, can escalate the situation unnecessarily' },
    ],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

// ============================================================
// Unit 4, Lesson 1: Giving a Choice
// Reading a long-haul menu, offering choices at meal time
// ============================================================
const A4A = '/audio/unit-4/lesson-1';

const GIVING_CHOICE_LESSON: any = {
  id: 'lesson-4-1',
  unitId: 'unit-4',
  title: 'Giving a Choice',
  description: 'Reading a long-haul menu and offering passengers a choice of food and drink',
  icon: '🍽️',
  icaoLevel: 4,
  category: 'cabin-crew',
  difficulty: 'intermediate',
  xpReward: 150,
  estimatedDurationMinutes: 40,
  locked: false,
  order: 1,
  objectives: [
    { id: 'obj-1', description: 'Read and understand a long-haul flight menu', type: 'reading' },
    { id: 'obj-2', description: 'Offer passengers a choice of meals politely', type: 'speaking' },
    { id: 'obj-3', description: 'Handle a meal-choice problem gracefully', type: 'listening' },
  ],
  scenario: {
    id: 'scenario-giving-choice',
    title: 'Serving the Meal',
    description: 'A flight attendant serves the meal to a man and a woman travelling with children, offering choices and handling a small problem.',
    context: 'Cabin, long-haul flight, lunch service',
    audioSegments: [
      { id: 'd1-01', text: 'Flight attendant: Good afternoon, sir. What would you like for your main course? We have chicken, beef, or vegetable lasagne.', audioUrl: `${A4A}/d1-01-fa.wav`, durationSeconds: 6, speaker: 'crew' },
      { id: 'd1-02', text: "Man: I'll have the beef, please.", audioUrl: `${A4A}/d1-02-man.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 'd1-03', text: 'Flight attendant: Excellent choice. Would you like red or white wine with that?', audioUrl: `${A4A}/d1-03-fa.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'd1-04', text: 'Man: Red, please.', audioUrl: `${A4A}/d1-04-man.wav`, durationSeconds: 1, speaker: 'passenger' },
      { id: 'd1-05', text: 'Flight attendant: Here we are - this is a French Bordeaux.', audioUrl: `${A4A}/d1-05-fa.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'd1-06', text: 'Man: Lovely, thank you.', audioUrl: `${A4A}/d1-06-man.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 'd1-07', text: 'Flight attendant: And for you, madam?', audioUrl: `${A4A}/d1-07-fa.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'd1-08', text: "Woman: What's in the chicken dish?", audioUrl: `${A4A}/d1-08-woman.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 'd1-09', text: "Flight attendant: It's marinated with Arabic spices, quite fragrant but not too spicy.", audioUrl: `${A4A}/d1-09-fa.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'd1-10', text: "Woman: Oh good, I don't like anything too spicy. I'll have the chicken then.", audioUrl: `${A4A}/d1-10-woman.wav`, durationSeconds: 4, speaker: 'passenger' },
      { id: 'd1-11', text: 'Flight attendant: And for your children?', audioUrl: `${A4A}/d1-11-fa.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'd1-12', text: 'Woman: Could they have the vegetable lasagne, please?', audioUrl: `${A4A}/d1-12-woman.wav`, durationSeconds: 3, speaker: 'passenger' },
      { id: 'd1-13', text: "Flight attendant: I'm so sorry, madam, I'm afraid we've run out of the children's lasagne portions - we only have the adult-sized ones left. Would that be all right, or would you prefer something else for them?", audioUrl: `${A4A}/d1-13-fa.wav`, durationSeconds: 8, speaker: 'crew' },
      { id: 'd1-14', text: 'Woman: The adult portion should be fine, just less of it maybe.', audioUrl: `${A4A}/d1-14-woman.wav`, durationSeconds: 3, speaker: 'passenger' },
      { id: 'd1-15', text: "Flight attendant: Of course, I'll make sure it's a smaller portion. And to drink?", audioUrl: `${A4A}/d1-15-fa.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'd1-16', text: 'Woman: Sparkling water for me, please, and Coke for the children.', audioUrl: `${A4A}/d1-16-woman.wav`, durationSeconds: 4, speaker: 'passenger' },
      { id: 'd1-17', text: "Flight attendant: Certainly. And just a tip - for your return flight, it's a good idea to pre-order children's meals in advance, that way we can guarantee availability.", audioUrl: `${A4A}/d1-17-fa.wav`, durationSeconds: 7, speaker: 'crew' },
      { id: 'd1-18', text: "Woman: Oh, that's good to know, thank you.", audioUrl: `${A4A}/d1-18-woman.wav`, durationSeconds: 2, speaker: 'passenger' },
    ],
    vocabulary: [
      { word: 'Marinated', definition: 'Soaked in a seasoned liquid before cooking' },
      { word: 'Garnished', definition: 'Decorated or finished with a small extra ingredient' },
      { word: 'Vinaigrette', definition: 'A sauce made of oil, vinegar and seasoning' },
      { word: 'Tenderloin', definition: 'A tender cut of meat' },
    ],
  },
  theory: {
    title: 'Reading a Long-Haul Menu',
    content: "Continental breakfast and lunch. Breakfast: orange juice, yoghurt, fresh fruit appetizer of seasonal fruit, croissant served with butter and jam, muffin, tea or coffee. Lunch starter: seasonal salad with assorted seafood and crunchy garlic bread topped with shredded parmesan, accompanied by vinaigrette dressing. Main course options: tender pieces of chicken marinated with Arabic spices, cooked with rice, tomatoes, cauliflower and garnished with fried onions, accompanied by French beans and peas; or charcoal-grilled beef tenderloin, served with a creamy forest mushroom sauce topped with chopped chives, accompanied by roasted potatoes and red pepper; or vegetable lasagne with a light cheese sauce, accompanied by a fresh green salad. Dessert: a rich dark chocolate mousse, topped with fresh orange and strawberries, accompanied by fresh cream. Roll and butter. Tea or coffee with chocolates.",
    audioExplanation: {
      id: 'theory-audio',
      text: 'Menu reading',
      audioUrl: `${A4A}/menu-reading.wav`,
      durationSeconds: 45,
      speaker: 'instructor',
    },
  },
  icaoPhraseoology: STANDARD_PHRASEOLOGY,
  cabinCrewPhraseoology: {
    category: 'Offering a Choice',
    phrases: [
      { situation: 'Service with a smile', phrase: 'What would you like, sir?', meaning: 'Friendly opener when taking an order', example: 'What would you like, sir?' },
      { situation: 'Offering a drink', phrase: 'What would you like to drink?', meaning: 'Asking specifically about drinks', example: 'What would you like to drink?' },
      { situation: 'Service with a smile', phrase: 'What can I get you, madam?', meaning: 'Friendly opener when taking an order', example: 'What can I get you, madam?' },
      { situation: 'Handing over the tray', phrase: 'Here we are, sir. / There you are, madam.', meaning: 'Giving the meal tray or serving a drink', example: 'Here we are, sir.' },
    ],
  },
  airlineVocabulary: [{
    category: 'Meal Tray Items',
    terms: [
      { term: 'Meal tray', definition: 'The tray holding the passenger\'s meal', example: 'Here we are, sir - your meal tray.' },
      { term: 'Cutlery', definition: 'Knife, fork and spoon', example: 'The cutlery is wrapped in the napkin.' },
      { term: 'Napkin', definition: 'A cloth or paper used to keep clean while eating', example: 'Please find your napkin under the cutlery.' },
      { term: 'Bread roll', definition: 'A small individual loaf of bread', example: 'Would you like your bread roll now?' },
      { term: 'Salt and pepper sachets', definition: 'Small individual packets of salt and pepper', example: 'The salt and pepper sachets are on the tray.' },
      { term: 'Main dish container', definition: 'The covered container holding the hot main course', example: 'Please be careful, the main dish container is hot.' },
    ],
  }],
  professionalExpressions: [
    { situation: 'Describing a dish', expression: "It's marinated with Arabic spices, quite fragrant but not too spicy.", alternativeExpressions: ['It has a mild, aromatic flavour.', "It's seasoned but not hot."] },
    { situation: 'Apologizing for an unavailable item', expression: "I'm so sorry, I'm afraid we've run out of that.", alternativeExpressions: ["Unfortunately that's no longer available.", "I'm afraid that's finished, could I offer you something else?"] },
  ],
  pronunciation: [
    { id: 'pron-1', text: 'What would you like, sir?', audioUrl: `${A4A}/pronunciation.wav`, durationSeconds: 2 },
  ],
  vocabulary: [
    { word: 'Marinated', definition: 'Soaked in a seasoned liquid before cooking' },
    { word: 'Garnished', definition: 'Decorated or finished with a small extra ingredient' },
    { word: 'Vinaigrette', definition: 'A sauce made of oil, vinegar and seasoning' },
    { word: 'Tenderloin', definition: 'A tender cut of meat' },
    { word: 'Appetizer', definition: 'A small dish served before the main course' },
    { word: 'Mousse', definition: 'A light, airy dessert, often chocolate-flavoured' },
  ],
  grammar: [
    {
      rule: "Offering a choice with 'or' - a short question form lists two or more options",
      examples: [
        { sentence: 'Coffee or tea?', audioUrl: `${A4A}/list-1.wav` },
        { sentence: 'Red or white wine?', audioUrl: `${A4A}/list-2.wav` },
        { sentence: 'Beef or chicken?', audioUrl: `${A4A}/list-4.wav` },
      ],
    },
  ],
  exercises: [
    {
      id: 'ex-1', type: 'multiple-choice', points: 10,
      question: 'Which meals are served on this flight?',
      options: [
        { id: 'o1', text: 'Breakfast and lunch', isCorrect: true },
        { id: 'o2', text: 'Lunch and dinner', isCorrect: false },
        { id: 'o3', text: 'Only breakfast', isCorrect: false },
        { id: 'o4', text: 'Only a snack', isCorrect: false },
      ],
    },
    {
      id: 'ex-2', type: 'multiple-choice', points: 10,
      question: 'How many courses are there for lunch?',
      options: [
        { id: 'o1', text: 'Three (starter, main, dessert)', isCorrect: true },
        { id: 'o2', text: 'Two', isCorrect: false },
        { id: 'o3', text: 'Four', isCorrect: false },
        { id: 'o4', text: 'One', isCorrect: false },
      ],
    },
    {
      id: 'ex-3', type: 'multiple-choice', points: 10,
      question: 'How many choices are there for the main course at lunch?',
      options: [
        { id: 'o1', text: 'Three (chicken, beef, or vegetable lasagne)', isCorrect: true },
        { id: 'o2', text: 'Two', isCorrect: false },
        { id: 'o3', text: 'Five', isCorrect: false },
        { id: 'o4', text: 'One, no choice', isCorrect: false },
      ],
    },
    {
      id: 'ex-4', type: 'speaking', points: 15,
      question: 'Do you think this flight departed in the morning, afternoon or evening? Explain why, based on the menu.',
      hint: 'Think about which meals are served and in what order.',
    },
    {
      id: 'ex-5', type: 'speaking', points: 15,
      question: 'With a partner, put items from the menu into these categories: Fruit, Meat and fish, Vegetables and herbs, Dairy food.',
    },
    {
      id: 'ex-6', type: 'multiple-choice', points: 10,
      question: 'True or False: The man chooses beef.',
      options: [
        { id: 'o1', text: 'True', isCorrect: true },
        { id: 'o2', text: 'False', isCorrect: false },
      ],
    },
    {
      id: 'ex-7', type: 'multiple-choice', points: 10,
      question: 'True or False: The man chooses white wine to drink.',
      options: [
        { id: 'o1', text: 'True', isCorrect: false },
        { id: 'o2', text: 'False', isCorrect: true, explanation: 'He chooses red wine.' },
      ],
    },
    {
      id: 'ex-8', type: 'multiple-choice', points: 10,
      question: 'True or False: The wine is French.',
      options: [
        { id: 'o1', text: 'True', isCorrect: true, explanation: "It's a French Bordeaux." },
        { id: 'o2', text: 'False', isCorrect: false },
      ],
    },
    {
      id: 'ex-9', type: 'multiple-choice', points: 10,
      question: 'True or False: The woman wants fish for her main course.',
      options: [
        { id: 'o1', text: 'True', isCorrect: false },
        { id: 'o2', text: 'False', isCorrect: true, explanation: 'She chooses the chicken.' },
      ],
    },
    {
      id: 'ex-10', type: 'multiple-choice', points: 10,
      question: 'True or False: The woman does not like food which is too spicy.',
      options: [
        { id: 'o1', text: 'True', isCorrect: true },
        { id: 'o2', text: 'False', isCorrect: false },
      ],
    },
    {
      id: 'ex-11', type: 'multiple-choice', points: 10,
      question: 'True or False: The woman asks for the lasagne for her children.',
      options: [
        { id: 'o1', text: 'True', isCorrect: true },
        { id: 'o2', text: 'False', isCorrect: false },
      ],
    },
    {
      id: 'ex-12', type: 'multiple-choice', points: 10,
      question: "True or False: There is a problem with the woman's choice for her children.",
      options: [
        { id: 'o1', text: 'True', isCorrect: true, explanation: "The children's portions of lasagne have run out." },
        { id: 'o2', text: 'False', isCorrect: false },
      ],
    },
    {
      id: 'ex-13', type: 'multiple-choice', points: 10,
      question: 'True or False: The woman chooses sparkling water for herself and Coke for her children.',
      options: [
        { id: 'o1', text: 'True', isCorrect: true },
        { id: 'o2', text: 'False', isCorrect: false },
      ],
    },
    {
      id: 'ex-14', type: 'multiple-choice', points: 10,
      question: "True or False: The flight attendant advises her to pre-order the children's meals for the flight home.",
      options: [
        { id: 'o1', text: 'True', isCorrect: true },
        { id: 'o2', text: 'False', isCorrect: false },
      ],
    },
    {
      id: 'ex-15', type: 'speaking', points: 15,
      question: 'With a partner, take turns ordering and taking orders from the menu. Ask and answer questions like "Is the chicken very spicy?" and "What are chives?"',
    },
  ],
  quiz: {
    id: 'quiz-4-1',
    title: 'Giving a Choice Quiz',
    passingScore: 70,
    exercises: [
      {
        id: 'q-1', type: 'multiple-choice', points: 20,
        question: 'What main course does the man choose?',
        options: [
          { id: 'o1', text: 'Beef', isCorrect: true },
          { id: 'o2', text: 'Chicken', isCorrect: false },
          { id: 'o3', text: 'Vegetable lasagne', isCorrect: false },
          { id: 'o4', text: 'Fish', isCorrect: false },
        ],
      },
      {
        id: 'q-2', type: 'multiple-choice', points: 20,
        question: 'Why does the woman choose the chicken?',
        options: [
          { id: 'o1', text: "It's not too spicy", isCorrect: true },
          { id: 'o2', text: "It's the cheapest option", isCorrect: false },
          { id: 'o3', text: "It's the only option left", isCorrect: false },
          { id: 'o4', text: 'Her children want it too', isCorrect: false },
        ],
      },
      {
        id: 'q-3', type: 'multiple-choice', points: 20,
        question: "What problem occurs with the children's meal?",
        options: [
          { id: 'o1', text: "The children's lasagne portions have run out", isCorrect: true },
          { id: 'o2', text: 'There is no lasagne at all', isCorrect: false },
          { id: 'o3', text: 'The children refuse to eat', isCorrect: false },
          { id: 'o4', text: 'The lasagne is too spicy', isCorrect: false },
        ],
      },
      {
        id: 'q-4', type: 'multiple-choice', points: 20,
        question: 'What drinks does the woman choose for herself and her children?',
        options: [
          { id: 'o1', text: 'Sparkling water for herself, Coke for the children', isCorrect: true },
          { id: 'o2', text: 'Wine for herself, juice for the children', isCorrect: false },
          { id: 'o3', text: 'Still water for everyone', isCorrect: false },
          { id: 'o4', text: 'Tea for herself, milk for the children', isCorrect: false },
        ],
      },
      {
        id: 'q-5', type: 'multiple-choice', points: 20,
        question: 'What tip does the flight attendant give the woman for her return flight?',
        options: [
          { id: 'o1', text: "Pre-order children's meals in advance", isCorrect: true },
          { id: 'o2', text: 'Bring her own food', isCorrect: false },
          { id: 'o3', text: 'Book an earlier flight', isCorrect: false },
          { id: 'o4', text: 'Avoid the lasagne', isCorrect: false },
        ],
      },
    ],
  },
  flashcards: [
    { id: 'fc-1', front: 'Marinated', back: 'Soaked in a seasoned liquid before cooking' },
    { id: 'fc-2', front: 'Vinaigrette', back: 'A sauce made of oil, vinegar and seasoning' },
    { id: 'fc-3', front: 'Tenderloin', back: 'A tender cut of meat' },
    { id: 'fc-4', front: 'Appetizer', back: 'A small dish served before the main course' },
  ],
  review: {
    keyPoints: [
      'Describe dishes clearly, including spice level and ingredients',
      'Offer choices with short "or" questions: "Beef or chicken?"',
      'Apologize sincerely and offer alternatives when an item runs out',
      'Give useful tips to passengers, like pre-ordering meals for future flights',
      'Handing over a tray or drink: "Here we are" / "There you are"',
    ],
    commonMistakes: [
      { mistake: 'Not explaining what a dish contains when asked', correction: 'Describe ingredients and spice level clearly', explanation: 'Passengers with allergies or preferences need this information' },
      { mistake: 'Apologizing without offering a solution', correction: 'Always suggest an alternative when something is unavailable', explanation: 'This keeps the passenger informed and reduces frustration' },
    ],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

// ============================================================
// Unit 4, Lesson 2: Serving Drinks
// Naming drinks, listing choices, and intonation in lists
// ============================================================
const A4B = '/audio/unit-4/lesson-2';

const SERVING_DRINKS_LESSON: any = {
  id: 'lesson-4-2',
  unitId: 'unit-4',
  title: 'Serving Drinks',
  description: 'Naming a wide range of drinks and using natural intonation when listing choices',
  icon: '🥂',
  icaoLevel: 4,
  category: 'cabin-crew',
  difficulty: 'intermediate',
  xpReward: 150,
  estimatedDurationMinutes: 40,
  locked: false,
  order: 2,
  objectives: [
    { id: 'obj-1', description: 'Recognize a wide range of drink names', type: 'vocabulary' },
    { id: 'obj-2', description: 'List drink options with natural intonation', type: 'speaking' },
    { id: 'obj-3', description: 'Politely decline to serve more alcohol when needed', type: 'speaking' },
  ],
  scenario: {
    id: 'scenario-serving-drinks',
    title: 'Serving Seven Passengers',
    description: 'A flight attendant serves drinks to seven passengers, offering choices and handling a delicate situation with the last passenger.',
    context: 'Cabin, drinks service',
    audioSegments: [
      { id: 'p1-01', text: 'Passenger 1: Could I have a large glass of water, please?', audioUrl: `${A4B}/p1-01.wav`, durationSeconds: 3, speaker: 'passenger' },
      { id: 'p1-02', text: 'Flight attendant: Certainly, with or without ice?', audioUrl: `${A4B}/p1-02.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'p1-03', text: 'Passenger 1: No ice, thank you.', audioUrl: `${A4B}/p1-03.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 'p2-01', text: 'Passenger 2: Do you have any juice?', audioUrl: `${A4B}/p2-01.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 'p2-02', text: 'Flight attendant: Yes, we have apple, orange, pineapple, or tomato juice.', audioUrl: `${A4B}/p2-02.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'p2-03', text: "Passenger 2: I'll have a pineapple juice, please.", audioUrl: `${A4B}/p2-03.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 'p3-01', text: 'Passenger 3: Could I have a gin and tonic?', audioUrl: `${A4B}/p3-01.wav`, durationSeconds: 3, speaker: 'passenger' },
      { id: 'p3-02', text: "Flight attendant: I'm so sorry, we don't have any gin left, but I could offer you a vodka tonic instead?", audioUrl: `${A4B}/p3-02.wav`, durationSeconds: 5, speaker: 'crew' },
      { id: 'p3-03', text: 'Passenger 3: Oh, alright then, a vodka, please.', audioUrl: `${A4B}/p3-03.wav`, durationSeconds: 3, speaker: 'passenger' },
      { id: 'p4-01', text: 'Passenger 4: Can I get a cold beer?', audioUrl: `${A4B}/p4-01.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 'p4-02', text: 'Flight attendant: Of course, we have Carlsberg or Kronenberg.', audioUrl: `${A4B}/p4-02.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'p4-03', text: 'Passenger 4: Carlsberg, please.', audioUrl: `${A4B}/p4-03.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 'p5-01', text: 'Passenger 5: Two large glasses of Coke with ice for my children, please.', audioUrl: `${A4B}/p5-01.wav`, durationSeconds: 4, speaker: 'passenger' },
      { id: 'p5-02', text: 'Flight attendant: Here you are, enjoy!', audioUrl: `${A4B}/p5-02.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'p6-01', text: 'Passenger 6: Could I have a glass of white wine, please?', audioUrl: `${A4B}/p6-01.wav`, durationSeconds: 3, speaker: 'passenger' },
      { id: 'p6-02', text: 'Flight attendant: Of course. And did you enjoy your meal?', audioUrl: `${A4B}/p6-02.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'p6-03', text: 'Passenger 6: Yes, it was lovely, thank you.', audioUrl: `${A4B}/p6-03.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 'p7-01', text: 'Passenger 7: Could I have a whisky, please?', audioUrl: `${A4B}/p7-01.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 'p7-02', text: "Flight attendant: I'm sorry sir, I'm afraid I can't serve you any more alcohol - I've noticed you've already had a few drinks this flight. Could I offer you a coffee or tea instead?", audioUrl: `${A4B}/p7-02.wav`, durationSeconds: 8, speaker: 'crew' },
    ],
    vocabulary: [
      { word: 'Sauvignon Blanc', definition: 'A type of white wine' },
      { word: 'Tonic water', definition: 'A carbonated soft drink, often mixed with gin' },
      { word: 'Cognac', definition: 'A type of French brandy' },
      { word: 'Espresso', definition: 'A strong, small coffee' },
    ],
  },
  theory: {
    title: 'Naming Drinks Confidently',
    content: 'Serving drinks means knowing a wide range of names for wines, spirits, soft drinks and hot drinks, listing options clearly, and sometimes tactfully declining to serve more alcohol to a passenger.',
    audioExplanation: {
      id: 'theory-audio',
      text: 'Explanation of naming drinks confidently',
      audioUrl: `${A4B}/theory-explanation.wav`,
      durationSeconds: 20,
      speaker: 'instructor',
    },
  },
  icaoPhraseoology: STANDARD_PHRASEOLOGY,
  cabinCrewPhraseoology: {
    category: 'Listing Drink Choices',
    phrases: [
      { situation: 'Listing juices', phrase: 'Apple, orange, pineapple or tomato.', meaning: 'A natural list with rising intonation until the last item', example: 'Apple, orange, pineapple or tomato.' },
      { situation: 'Listing sodas', phrase: 'Coke, Fanta, Sprite, 7up or Lilt.', meaning: 'A natural list of soft drinks', example: 'Coke, Fanta, Sprite, 7up or Lilt.' },
      { situation: 'Listing wines', phrase: 'Red wine, white wine, sherry or champagne.', meaning: 'A natural list of wines', example: 'Red wine, white wine, sherry or champagne.' },
      { situation: 'Declining to serve alcohol', phrase: "I'm afraid I can't serve you any more alcohol.", meaning: 'A polite but firm refusal', example: "I'm afraid I can't serve you any more alcohol." },
    ],
  },
  airlineVocabulary: [{
    category: 'Drinks Menu',
    terms: [
      { term: 'Soft drinks', definition: 'Non-alcoholic fizzy or still drinks', example: 'Soda, lemonade, tonic water, ginger ale.' },
      { term: 'Wines and beers', definition: 'Alcoholic drinks made from grapes or grain', example: 'Sauvignon Blanc, Merlot, Bordeaux, Carlsberg, Kronenberg.' },
      { term: 'Spirits', definition: 'Strong distilled alcoholic drinks', example: 'Johnny Walker, vodka, Bacardi rum, bourbon, cognac.' },
      { term: 'Hot drinks', definition: 'Drinks served hot', example: 'Fruit tea, Earl Grey tea, English Breakfast tea, cappuccino, espresso.' },
    ],
  }],
  professionalExpressions: [
    { situation: 'Apologizing for a drink being unavailable', expression: "I'm so sorry, we don't have any left, but I could offer you...", alternativeExpressions: ["Unfortunately that's finished, would you like to try...", "I'm afraid we're out of that, can I suggest..."] },
    { situation: 'Refusing more alcohol tactfully', expression: "I've noticed you've already had a few drinks - could I offer you a coffee or tea instead?", alternativeExpressions: ['I think it might be best to switch to a soft drink.', "I'm not able to serve more alcohol right now, but I can get you something else."] },
  ],
  pronunciation: [
    { id: 'pron-1', text: 'Coke, Fanta, Sprite, 7up or Lilt.', audioUrl: `${A4B}/pronunciation.wav`, durationSeconds: 3 },
  ],
  vocabulary: [
    { word: 'Sauvignon Blanc', definition: 'A type of white wine' },
    { word: 'Tonic water', definition: 'A carbonated soft drink, often mixed with gin' },
    { word: 'Cognac', definition: 'A type of French brandy' },
    { word: 'Espresso', definition: 'A strong, small coffee' },
    { word: 'Decaffeinated', definition: 'Coffee or tea with the caffeine removed' },
    { word: 'Sherry', definition: 'A type of fortified wine' },
  ],
  grammar: [
    {
      rule: "Listing intonation - voice rises on each item except the last, which falls, e.g. 'Apple, orange, pineapple or tomato.'",
      examples: [
        { sentence: 'Apple, orange, pineapple or tomato.', audioUrl: `${A4B}/list-1.wav` },
        { sentence: 'Red wine, white wine, sherry or champagne.', audioUrl: `${A4B}/list-3.wav` },
        { sentence: 'Still water, sparkling water, soda water or tonic water.', audioUrl: `${A4B}/list-5.wav` },
      ],
    },
  ],
  exercises: [
    {
      id: 'ex-1', type: 'multiple-choice', points: 10,
      question: 'Does the first passenger want ice with her water?',
      options: [
        { id: 'o1', text: 'No', isCorrect: true },
        { id: 'o2', text: 'Yes', isCorrect: false },
      ],
    },
    {
      id: 'ex-2', type: 'multiple-choice', points: 10,
      question: 'How many different kinds of juice does the flight attendant offer the second passenger?',
      options: [
        { id: 'o1', text: 'Four (apple, orange, pineapple, tomato)', isCorrect: true },
        { id: 'o2', text: 'Two', isCorrect: false },
        { id: 'o3', text: 'Three', isCorrect: false },
        { id: 'o4', text: 'Five', isCorrect: false },
      ],
    },
    {
      id: 'ex-3', type: 'multiple-choice', points: 10,
      question: "What is the problem with the third passenger's order?",
      options: [
        { id: 'o1', text: 'There is no gin left', isCorrect: true },
        { id: 'o2', text: 'There is no tonic left', isCorrect: false },
        { id: 'o3', text: 'There is no ice left', isCorrect: false },
        { id: 'o4', text: 'There is no vodka left', isCorrect: false },
      ],
    },
    {
      id: 'ex-4', type: 'multiple-choice', points: 10,
      question: 'How many types of beer does the flight attendant offer the fourth passenger?',
      options: [
        { id: 'o1', text: 'Two (Carlsberg, Kronenberg)', isCorrect: true },
        { id: 'o2', text: 'One', isCorrect: false },
        { id: 'o3', text: 'Three', isCorrect: false },
        { id: 'o4', text: 'None, they are out of beer', isCorrect: false },
      ],
    },
    {
      id: 'ex-5', type: 'fill-blank', points: 10,
      question: 'What does the flight attendant say when she gives the young passenger the Cokes? "Here you are, _________!"',
      audio: { id: 'p5-audio', text: 'Giving the Cokes', audioUrl: `${A4B}/p5-02.wav`, durationSeconds: 2, speaker: 'crew' },
      correctAnswer: 'enjoy',
    },
    {
      id: 'ex-6', type: 'multiple-choice', points: 10,
      question: 'Does the sixth passenger like the food?',
      options: [
        { id: 'o1', text: 'Yes, she says it was lovely', isCorrect: true },
        { id: 'o2', text: 'No, she complains about it', isCorrect: false },
      ],
    },
    {
      id: 'ex-7', type: 'multiple-choice', points: 10,
      question: "Why can't the flight attendant serve the last passenger an alcoholic drink?",
      options: [
        { id: 'o1', text: "He's already had a few drinks this flight", isCorrect: true },
        { id: 'o2', text: 'The airline does not serve whisky', isCorrect: false },
        { id: 'o3', text: 'They have run out of all alcohol', isCorrect: false },
        { id: 'o4', text: 'He has not paid', isCorrect: false },
      ],
    },
    {
      id: 'ex-8', type: 'multiple-choice', points: 10,
      question: 'What does the flight attendant offer instead?',
      options: [
        { id: 'o1', text: 'Coffee or tea', isCorrect: true },
        { id: 'o2', text: 'Water only', isCorrect: false },
        { id: 'o3', text: 'A soft drink of his choice', isCorrect: false },
        { id: 'o4', text: 'Nothing', isCorrect: false },
      ],
    },
    {
      id: 'ex-9', type: 'speaking', points: 15,
      question: 'Practise saying these lists with natural intonation: Juices - Apple, orange, pineapple or tomato. Wines - Red wine, white wine, sherry or champagne. Waters - Still water, sparkling water, soda water or tonic water.',
    },
    {
      id: 'ex-10', type: 'speaking', points: 15,
      question: 'With a partner, take turns taking drink orders from a drinks menu you create together, sorting wines and beers, spirits, soft drinks, and hot drinks.',
    },
    {
      id: 'ex-11', type: 'speaking', points: 15,
      question: 'What problems can flight attendants have when serving food and drinks? Consider: the meal isn\'t hot enough, the meal is not what the passenger ordered, the passenger has already drunk too much but wants more, unexpected turbulence. Add your own ideas and discuss which are the worst.',
    },
  ],
  quiz: {
    id: 'quiz-4-2',
    title: 'Serving Drinks Quiz',
    passingScore: 70,
    exercises: [
      {
        id: 'q-1', type: 'multiple-choice', points: 20,
        question: 'What does the third passenger end up ordering?',
        options: [
          { id: 'o1', text: 'A vodka tonic', isCorrect: true },
          { id: 'o2', text: 'A gin and tonic', isCorrect: false },
          { id: 'o3', text: 'A beer', isCorrect: false },
          { id: 'o4', text: 'Nothing', isCorrect: false },
        ],
      },
      {
        id: 'q-2', type: 'multiple-choice', points: 20,
        question: 'Which two beers does the flight attendant offer?',
        options: [
          { id: 'o1', text: 'Carlsberg and Kronenberg', isCorrect: true },
          { id: 'o2', text: 'Heineken and Corona', isCorrect: false },
          { id: 'o3', text: 'Guinness and Budweiser', isCorrect: false },
          { id: 'o4', text: 'Stella and Peroni', isCorrect: false },
        ],
      },
      {
        id: 'q-3', type: 'multiple-choice', points: 20,
        question: 'Why is the seventh passenger refused an alcoholic drink?',
        options: [
          { id: 'o1', text: "He's already had several drinks", isCorrect: true },
          { id: 'o2', text: "It's against airline policy for everyone", isCorrect: false },
          { id: 'o3', text: 'He is under 18', isCorrect: false },
          { id: 'o4', text: 'The bar is closed', isCorrect: false },
        ],
      },
      {
        id: 'q-4', type: 'multiple-choice', points: 20,
        question: 'What does passenger 1 want with her water?',
        options: [
          { id: 'o1', text: 'No ice', isCorrect: true },
          { id: 'o2', text: 'Ice', isCorrect: false },
          { id: 'o3', text: 'A slice of lemon', isCorrect: false },
          { id: 'o4', text: 'Sparkling, not still', isCorrect: false },
        ],
      },
      {
        id: 'q-5', type: 'multiple-choice', points: 20,
        question: 'On which channel intonation pattern do lists usually end?',
        options: [
          { id: 'o1', text: 'Falling intonation on the last item', isCorrect: true },
          { id: 'o2', text: 'Rising intonation on every item', isCorrect: false },
          { id: 'o3', text: 'The same flat tone throughout', isCorrect: false },
          { id: 'o4', text: 'Falling on the first item only', isCorrect: false },
        ],
      },
    ],
  },
  flashcards: [
    { id: 'fc-1', front: 'Cognac', back: 'A type of French brandy' },
    { id: 'fc-2', front: 'Tonic water', back: 'A carbonated soft drink, often mixed with gin' },
    { id: 'fc-3', front: 'Espresso', back: 'A strong, small coffee' },
    { id: 'fc-4', front: 'Sherry', back: 'A type of fortified wine' },
  ],
  review: {
    keyPoints: [
      'Know a wide vocabulary of wines, spirits, soft drinks and hot drinks',
      'List choices with natural intonation, falling on the last item',
      'Apologize and offer an alternative when a drink is unavailable',
      'Tactfully decline to serve more alcohol when a passenger has had enough',
      'A friendly comment (e.g. asking about the meal) builds rapport during service',
    ],
    commonMistakes: [
      { mistake: 'Listing drink options in a flat, unnatural tone', correction: 'Practise the rising-then-falling intonation pattern for lists', explanation: 'Natural intonation makes announcements easier to understand' },
      { mistake: 'Being blunt when refusing to serve more alcohol', correction: 'Explain kindly and offer an alternative drink', explanation: 'This keeps the interaction professional and avoids conflict' },
    ],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

// ============================================================
// Unit 4, Lesson 3: Duty-Free Sales
// Money transactions + Case Study: Airline Food... Your Thoughts
// ============================================================
const A4C = '/audio/unit-4/lesson-3';

const DUTY_FREE_LESSON: any = {
  id: 'lesson-4-3',
  unitId: 'unit-4',
  title: 'Duty-Free Sales',
  description: 'Announcing and handling duty-free sales, money transactions, and the case study: Airline Food, Your Thoughts',
  icon: '💳',
  icaoLevel: 4,
  category: 'cabin-crew',
  difficulty: 'intermediate',
  xpReward: 180,
  estimatedDurationMinutes: 55,
  locked: false,
  order: 3,
  objectives: [
    { id: 'obj-1', description: 'Understand a duty-free sales announcement', type: 'listening' },
    { id: 'obj-2', description: 'Handle money transactions confidently in English', type: 'speaking' },
    { id: 'obj-3', description: 'Discuss opinions about airline food from passengers and crew', type: 'reading' },
  ],
  scenario: {
    id: 'scenario-duty-free',
    title: 'Duty-Free Sales',
    description: 'The duty-free sales announcement is made, and a flight attendant helps a passenger buy gifts and pay by card.',
    context: 'Cabin, duty-free sales service',
    audioSegments: [
      { id: 'announcement', text: 'Ladies and gentlemen, the duty-free sales will begin shortly. Please prepare your list of purchases. Check the Shopping on Board magazine in your seat pocket. All prices are in local currency and in US dollars, and you can pay by cash or by using a credit card. We accept most major credit cards. Frequent flyers earn points on all sales on board. There are some bargains and there are several items specially designed for our airline.', audioUrl: `${A4C}/announcement.wav`, durationSeconds: 25, speaker: 'crew' },
      { id: 'd3-01', text: "Passenger: I'd like to buy a present for my daughter - do you have any bracelets?", audioUrl: `${A4C}/d3-01-man.wav`, durationSeconds: 4, speaker: 'passenger' },
      { id: 'd3-02', text: "Flight attendant: Yes, we have a lovely crystal pendant bracelet, it's 45 dollars.", audioUrl: `${A4C}/d3-02-fa.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'd3-03', text: 'Passenger: Perfect, I\'ll take that. And could I also get a bottle of whisky for myself?', audioUrl: `${A4C}/d3-03-man.wav`, durationSeconds: 4, speaker: 'passenger' },
      { id: 'd3-04', text: "Flight attendant: Of course, that's 38 dollars, so 83 dollars in total.", audioUrl: `${A4C}/d3-04-fa.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'd3-05', text: 'Passenger: How should I pay?', audioUrl: `${A4C}/d3-05-man.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 'd3-06', text: 'Flight attendant: By card or cash, whichever you prefer.', audioUrl: `${A4C}/d3-06-fa.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'd3-07', text: "Passenger: Here's my credit card, and here's my frequent flyer card too, if that helps with points.", audioUrl: `${A4C}/d3-07-man.wav`, durationSeconds: 5, speaker: 'passenger' },
      { id: 'd3-08', text: "Flight attendant: Perfect, that'll earn you extra points. Here's your receipt, your card and your gifts - do you need a bag for these?", audioUrl: `${A4C}/d3-08-fa.wav`, durationSeconds: 6, speaker: 'crew' },
      { id: 'd3-09', text: "Passenger: Yes please, that'd be great.", audioUrl: `${A4C}/d3-09-man.wav`, durationSeconds: 2, speaker: 'passenger' },
    ],
    vocabulary: [
      { word: 'Bargain', definition: 'An item sold at a good, discounted price' },
      { word: 'Frequent flyer', definition: 'A passenger who is a member of an airline loyalty programme' },
      { word: 'Receipt', definition: 'A printed proof of purchase' },
      { word: 'Duty-free', definition: 'Goods sold without local tax, typically on board or at airports' },
    ],
  },
  theory: {
    title: 'Airline Food: Your Thoughts',
    content: "The in-flight meal was fine. We were offered a choice and a selection of drinks. There was no rush. The flight attendants even found time to chat a little and make the whole experience enjoyable. I'll definitely travel on this airline again.\n\nThat was the worst meal I've ever had. It was served in a box with a plastic fork and put on my tray table without a word or a smile. Even now, I'm not sure what it was.\n\nIf you're in Business class, you're fine. The meals are well prepared, look great and taste even better. In Economy, it's the opposite. The meal is bland, not very hot, badly presented and tasteless. It's better to take your own food on board. At least you can eat it.\n\nThe airlines long ago realized that their job - their product, and what people pay them for - is transportation, not food service. Some day the flying public will realize that, too.\n\nAn aircraft is not a flying restaurant.\n\nI am a flight attendant for a major international airline. I've been flying for nearly thirty years, and in that time people have always complained about airline food. I honestly think passengers are being unrealistic. This is a ride in an aircraft, not a trip to a top-class restaurant. It is what it is. It's not going to get any better either, with internet fares and the present state of the airline industry.\n\nYes, yes, yes, it's been said a million times before: the food on planes, even in the front of planes, is dreadful.\n\nI want to point out that of all the dreadful food in the world, perhaps no dreadful food is presented with more ridiculous fanfare than the dreadful food in the sky.\n\nOn a recent trip I had the misfortune to buy a snackbox. It was not fit for human consumption unless you were alone in the Arctic or lost in the jungle.\n\nI fly quite a bit, and to be honest I've never had a bad meal. I am much more irritated when there is no complimentary food at all.",
    audioExplanation: {
      id: 'theory-audio',
      text: 'Duty-free sales explanation',
      audioUrl: `${A4C}/theory-explanation.wav`,
      durationSeconds: 20,
      speaker: 'instructor',
    },
  },
  icaoPhraseoology: STANDARD_PHRASEOLOGY,
  cabinCrewPhraseoology: {
    category: 'Money Transactions',
    phrases: [
      { situation: 'Stating a price', phrase: 'The perfume costs 41 dollars.', meaning: 'Simple price statement', example: 'The perfume costs 41 dollars.' },
      { situation: 'Adding a total', phrase: 'Forty-one plus 72 makes 113 dollars.', meaning: 'Adding two prices together', example: 'Forty-one plus 72 makes 113 dollars.' },
      { situation: 'Multiplying a price', phrase: 'Four times eight equals 32 dollars.', meaning: 'Multiplying quantity by price', example: 'Four times eight equals 32 dollars.' },
      { situation: 'Giving change', phrase: 'A hundred dollars minus 85 - that\'s 15 dollars change.', meaning: 'Calculating change owed', example: 'A hundred dollars minus 85 - that\'s 15 dollars change.' },
      { situation: 'Asking how someone will pay', phrase: 'How will you be paying? By card or with cash?', meaning: 'Asking for the payment method', example: 'How will you be paying? By card or with cash?' },
    ],
  },
  airlineVocabulary: [{
    category: 'Duty-Free Goods',
    terms: [
      { term: 'Perfumes and jewellery', definition: 'Category including perfume spray, a brooch, earrings, a bracelet, a crystal pendant', example: 'Perfume, jewellery and watches are popular duty-free gifts.' },
      { term: 'Electric and electronic items', definition: 'Category including a USB key, headphones, a travel plug adaptor', example: 'A USB key is a useful electronic item.' },
      { term: 'Alcohol and tobacco', definition: 'Category including whisky, cognac, vodka, champagne, cigars, cigarettes', example: 'Whisky and champagne are common alcohol purchases.' },
      { term: 'Cosmetics', definition: 'Category including face cream, aftershave, mascara, lipstick, eau de toilette', example: 'Mascara and lipstick are popular cosmetics.' },
      { term: 'Gifts', definition: 'Category including a soft toy, chocolates, a model aircraft, a scarf, a pen', example: 'A model aircraft makes a fun gift.' },
    ],
  }],
  professionalExpressions: [
    { situation: 'Introducing the duty-free service', expression: 'The duty-free sales will begin shortly.', alternativeExpressions: ['We will start the duty-free service shortly.', 'Duty-free sales are starting now.'] },
    { situation: 'Confirming payment method', expression: 'How would you like to pay?', alternativeExpressions: ['Card or cash?', 'How will you be settling this?'] },
  ],
  pronunciation: [
    { id: 'pron-1', text: 'How would you like to pay?', audioUrl: `${A4C}/pronunciation.wav`, durationSeconds: 2 },
  ],
  vocabulary: [
    { word: 'Bargain', definition: 'An item sold at a good, discounted price' },
    { word: 'Frequent flyer', definition: 'A passenger who is a member of an airline loyalty programme' },
    { word: 'Receipt', definition: 'A printed proof of purchase' },
    { word: 'Duty-free', definition: 'Goods sold without local tax, typically on board or at airports' },
    { word: 'Bland', definition: 'Tasteless' },
    { word: 'Dreadful', definition: 'Very bad' },
  ],
  grammar: [
    {
      rule: 'Basic maths language for transactions (plus, minus, times, equals) - used when calculating prices and change',
      examples: [
        { sentence: 'Forty-one plus 72 makes 113 dollars.', audioUrl: `${A4C}/money-3.wav` },
        { sentence: 'Four times eight equals 32 dollars.', audioUrl: `${A4C}/money-4.wav` },
        { sentence: 'A hundred dollars minus 85 - that\'s 15 dollars change.', audioUrl: `${A4C}/money-5.wav` },
      ],
    },
  ],
  exercises: [
    {
      id: 'ex-1', type: 'fill-blank', points: 10,
      question: 'The duty-free sales will _________ shortly.',
      audio: { id: 'ann-audio', text: 'Duty-free announcement', audioUrl: `${A4C}/announcement.wav`, durationSeconds: 25, speaker: 'crew' },
      correctAnswer: 'begin',
    },
    {
      id: 'ex-2', type: 'fill-blank', points: 10,
      question: 'Please prepare your _________ of purchases.',
      correctAnswer: 'list',
    },
    {
      id: 'ex-3', type: 'fill-blank', points: 10,
      question: 'Check the Shopping on Board magazine in your seat _________.',
      correctAnswer: 'pocket',
    },
    {
      id: 'ex-4', type: 'fill-blank', points: 10,
      question: 'You can pay by cash or by _________ a credit card.',
      correctAnswer: 'using',
    },
    {
      id: 'ex-5', type: 'fill-blank', points: 10,
      question: 'We _________ most major credit cards.',
      correctAnswer: 'accept',
      hint: 'The opposite of "refuse".',
    },
    {
      id: 'ex-6', type: 'fill-blank', points: 10,
      question: 'Frequent flyers _________ points on all sales on board.',
      correctAnswer: 'earn',
    },
    {
      id: 'ex-7', type: 'multiple-choice', points: 10,
      question: 'Which word in the announcement means "soon"?',
      options: [
        { id: 'o1', text: 'Shortly', isCorrect: true },
        { id: 'o2', text: 'Bargains', isCorrect: false },
        { id: 'o3', text: 'Designed', isCorrect: false },
        { id: 'o4', text: 'Purchases', isCorrect: false },
      ],
    },
    {
      id: 'ex-8', type: 'multiple-choice', points: 10,
      question: 'Which word means "discounted items"?',
      options: [
        { id: 'o1', text: 'Bargains', isCorrect: true },
        { id: 'o2', text: 'Purchases', isCorrect: false },
        { id: 'o3', text: 'Points', isCorrect: false },
        { id: 'o4', text: 'Currency', isCorrect: false },
      ],
    },
    {
      id: 'ex-9', type: 'multiple-choice', points: 10,
      question: 'What does the passenger want to buy for his daughter?',
      options: [
        { id: 'o1', text: 'A crystal pendant bracelet', isCorrect: true },
        { id: 'o2', text: 'A watch', isCorrect: false },
        { id: 'o3', text: 'Earrings', isCorrect: false },
        { id: 'o4', text: 'Perfume', isCorrect: false },
      ],
    },
    {
      id: 'ex-10', type: 'multiple-choice', points: 10,
      question: "How much does he pay for his daughter's present?",
      options: [
        { id: 'o1', text: '45 dollars', isCorrect: true },
        { id: 'o2', text: '38 dollars', isCorrect: false },
        { id: 'o3', text: '83 dollars', isCorrect: false },
        { id: 'o4', text: '15 dollars', isCorrect: false },
      ],
    },
    {
      id: 'ex-11', type: 'multiple-choice', points: 10,
      question: 'What else does the passenger buy?',
      options: [
        { id: 'o1', text: 'A bottle of whisky', isCorrect: true },
        { id: 'o2', text: 'Cigars', isCorrect: false },
        { id: 'o3', text: 'Chocolates', isCorrect: false },
        { id: 'o4', text: 'A watch', isCorrect: false },
      ],
    },
    {
      id: 'ex-12', type: 'multiple-choice', points: 10,
      question: 'How does he pay for his purchase?',
      options: [
        { id: 'o1', text: 'By credit card', isCorrect: true },
        { id: 'o2', text: 'By cash', isCorrect: false },
        { id: 'o3', text: 'A mix of cash and card', isCorrect: false },
        { id: 'o4', text: 'He does not pay - it is free', isCorrect: false },
      ],
    },
    {
      id: 'ex-13', type: 'multiple-choice', points: 10,
      question: 'Why does the passenger give the flight attendant two cards?',
      options: [
        { id: 'o1', text: 'His credit card, and his frequent flyer card for points', isCorrect: true },
        { id: 'o2', text: 'His first card did not work', isCorrect: false },
        { id: 'o3', text: 'He wanted to split the payment', isCorrect: false },
        { id: 'o4', text: 'He gave the wrong card by mistake', isCorrect: false },
      ],
    },
    {
      id: 'ex-14', type: 'multiple-choice', points: 10,
      question: 'What does he need with his purchase?',
      options: [
        { id: 'o1', text: 'A bag', isCorrect: true },
        { id: 'o2', text: 'A box', isCorrect: false },
        { id: 'o3', text: 'Wrapping paper', isCorrect: false },
        { id: 'o4', text: 'Nothing extra', isCorrect: false },
      ],
    },
    {
      id: 'ex-15', type: 'speaking', points: 15,
      question: 'How good are you at counting money and adding up a total? Practise saying these totals aloud: $19.50 + $27.00, $20 − $11.75, €43.00 + €13.75, €6.75 × 2, £11.45 × 2, $33.39 + $7.20.',
    },
    {
      id: 'ex-16', type: 'speaking', points: 15,
      question: 'What is the currency in Spain, China, Saudi Arabia, Russia, Australia, the United Arab Emirates, Brazil, Nigeria, Singapore, and Pakistan? What is your local currency, and its exchange rate with the yen, US dollar, and euro?',
    },
    {
      id: 'ex-17', type: 'speaking', points: 15,
      question: "With a partner, take turns buying and selling duty-free goods, making up your own prices. Example: A: I'd like some mascara please. B: Certainly, madam. The mascara costs...",
    },
    {
      id: 'ex-18', type: 'multiple-choice', points: 15,
      question: 'In the "Airline Food" comments, which comment is clearly written by a flight attendant?',
      options: [
        { id: 'o1', text: '"I am a flight attendant for a major international airline. I\'ve been flying for nearly thirty years..."', isCorrect: true },
        { id: 'o2', text: '"That was the worst meal I\'ve ever had."', isCorrect: false },
        { id: 'o3', text: '"An aircraft is not a flying restaurant."', isCorrect: false },
        { id: 'o4', text: '"I fly quite a bit, and to be honest I\'ve never had a bad meal."', isCorrect: false },
      ],
    },
    {
      id: 'ex-19', type: 'speaking', points: 20,
      question: 'Read the ten "Airline Food" comments. Which are from passengers (P), which from crew (C), and which could be either (E)? Which express a positive opinion, which a negative one, and which express no opinion at all? Underline the adjectives and phrases used to describe food, and say whether they are positive or negative.',
    },
    {
      id: 'ex-20', type: 'speaking', points: 15,
      question: 'In your experience, are passengers difficult to please when it comes to in-flight food? What do they complain about most? Are the problems usually with the service or the food itself?',
    },
    {
      id: 'ex-21', type: 'speaking', points: 15,
      question: 'Is the solution to have one excellent meal on long-haul flights and no food at all on short-haul flights? Why or why not? What improvements would you suggest to your airline?',
    },
    {
      id: 'ex-22', type: 'speaking', points: 15,
      question: 'Discuss common experiences flight attendants have with the meals and drinks service - what do they enjoy about it, and what special incidents have they encountered?',
    },
    {
      id: 'ex-23', type: 'speaking', points: 15,
      question: 'Airlines spend a lot of money on food. Why do you think this is, and are they successful? What do you think about meals for the crew on board - are they adequate? Do you agree that "bar snacks on short flights are insulting, over-priced and tasteless, and meals on most long-haul flights are bland, poorly presented and served without grace"?',
    },
  ],
  quiz: {
    id: 'quiz-4-3',
    title: 'Duty-Free Sales Quiz',
    passingScore: 70,
    exercises: [
      {
        id: 'q-1', type: 'multiple-choice', points: 20,
        question: 'What can passengers use to pay for duty-free goods?',
        options: [
          { id: 'o1', text: 'Cash or credit card', isCorrect: true },
          { id: 'o2', text: 'Only cash', isCorrect: false },
          { id: 'o3', text: 'Only card', isCorrect: false },
          { id: 'o4', text: 'Airline points only', isCorrect: false },
        ],
      },
      {
        id: 'q-2', type: 'multiple-choice', points: 20,
        question: 'What do frequent flyers earn on duty-free purchases?',
        options: [
          { id: 'o1', text: 'Points', isCorrect: true },
          { id: 'o2', text: 'A discount voucher', isCorrect: false },
          { id: 'o3', text: 'Free gifts', isCorrect: false },
          { id: 'o4', text: 'Nothing extra', isCorrect: false },
        ],
      },
      {
        id: 'q-3', type: 'multiple-choice', points: 20,
        question: 'What does "bland" mean, according to the glossary?',
        options: [
          { id: 'o1', text: 'Tasteless', isCorrect: true },
          { id: 'o2', text: 'Very spicy', isCorrect: false },
          { id: 'o3', text: 'Overcooked', isCorrect: false },
          { id: 'o4', text: 'Expensive', isCorrect: false },
        ],
      },
      {
        id: 'q-4', type: 'multiple-choice', points: 20,
        question: 'What does "complimentary" mean?',
        options: [
          { id: 'o1', text: 'Free', isCorrect: true },
          { id: 'o2', text: 'Expensive', isCorrect: false },
          { id: 'o3', text: 'Delicious', isCorrect: false },
          { id: 'o4', text: 'Cold', isCorrect: false },
        ],
      },
      {
        id: 'q-5', type: 'multiple-choice', points: 20,
        question: 'According to the case study, where is food usually better - Business or Economy class?',
        options: [
          { id: 'o1', text: 'Business class', isCorrect: true },
          { id: 'o2', text: 'Economy class', isCorrect: false },
          { id: 'o3', text: 'They are described as the same', isCorrect: false },
          { id: 'o4', text: 'Neither - both are described as excellent', isCorrect: false },
        ],
      },
    ],
  },
  flashcards: [
    { id: 'fc-1', front: 'Duty-free', back: 'Goods sold without local tax, typically on board or at airports' },
    { id: 'fc-2', front: 'Bargain', back: 'An item sold at a good, discounted price' },
    { id: 'fc-3', front: 'Bland', back: 'Tasteless' },
    { id: 'fc-4', front: 'Dreadful', back: 'Very bad' },
    { id: 'fc-5', front: 'Complimentary', back: 'Free' },
  ],
  review: {
    keyPoints: [
      'Duty-free announcements explain timing, payment methods, and loyalty points',
      'Basic maths language (plus, minus, times, equals) is essential for transactions',
      'Always confirm the payment method and provide a receipt',
      'Opinions about airline food vary widely between passengers and crew',
      'Positive and negative comments both offer useful insight for improving service',
    ],
    commonMistakes: [
      { mistake: 'Rushing the payment process', correction: 'Clearly state prices, totals, and change owed', explanation: 'Passengers need to follow the transaction, especially in a foreign currency' },
      { mistake: 'Dismissing passenger complaints about food', correction: 'Listen and acknowledge feedback, even if you cannot change the menu', explanation: 'Passengers feel heard even when a solution is not immediately possible' },
    ],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

// ============================================================
// Unit 5, Lesson 1: Identifying Passenger Problems
// Finding out the problem, and the flight attendant's many roles
// ============================================================
const A5A = '/audio/unit-5/lesson-1';

const IDENTIFYING_PROBLEMS_LESSON: any = {
  id: 'lesson-5-1',
  unitId: 'unit-5',
  title: 'Identifying Passenger Problems',
  description: "Finding out what's wrong when a passenger has a problem, and the many roles a flight attendant plays",
  icon: '🔍',
  icaoLevel: 4,
  category: 'cabin-crew',
  difficulty: 'intermediate',
  xpReward: 150,
  estimatedDurationMinutes: 40,
  locked: false,
  order: 1,
  objectives: [
    { id: 'obj-1', description: 'Ask clear questions to identify a passenger problem', type: 'speaking' },
    { id: 'obj-2', description: 'Recognize different intonation for yes/no and open questions', type: 'listening' },
    { id: 'obj-3', description: "Understand the flight attendant's many roles", type: 'vocabulary' },
  ],
  scenario: {
    id: 'scenario-identifying-problems',
    title: 'Two Handset Problems',
    description: 'A flight attendant deals with two passengers who have problems with their in-flight entertainment.',
    context: 'Cabin, in-flight entertainment issues',
    audioSegments: [
      { id: 'd1-01', text: 'Flight attendant: Did you call, sir?', audioUrl: `${A5A}/d1-01-fa.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'd1-02', text: "Passenger 1: Yes, my handset isn't working, I can't turn on the entertainment screen.", audioUrl: `${A5A}/d1-02-p1.wav`, durationSeconds: 4, speaker: 'passenger' },
      { id: 'd1-03', text: "Flight attendant: Let's see... ah, I think it's just not plugged in properly. Let me fix that for you... there, try it now.", audioUrl: `${A5A}/d1-03-fa.wav`, durationSeconds: 6, speaker: 'crew' },
      { id: 'd1-04', text: "Passenger 1: Oh brilliant, it's working now, thank you!", audioUrl: `${A5A}/d1-04-p1.wav`, durationSeconds: 3, speaker: 'passenger' },
      { id: 'd1-05', text: 'Flight attendant: Did you call, madam?', audioUrl: `${A5A}/d1-05-fa.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'd1-06', text: "Passenger 2: Yes, I wanted to watch a film but I can't find it on the menu.", audioUrl: `${A5A}/d1-06-p2.wav`, durationSeconds: 4, speaker: 'passenger' },
      { id: 'd1-07', text: "Flight attendant: Let me check... I'm sorry, I'm afraid that film isn't available on this system, it might be on our next aircraft. Could I suggest one of these other films instead?", audioUrl: `${A5A}/d1-07-fa.wav`, durationSeconds: 8, speaker: 'crew' },
      { id: 'd1-08', text: "Passenger 2: Oh, that's a shame, but okay, I'll pick something else.", audioUrl: `${A5A}/d1-08-p2.wav`, durationSeconds: 3, speaker: 'passenger' },
    ],
    vocabulary: [
      { word: 'Handset', definition: 'The remote control for the in-flight entertainment screen' },
      { word: 'Plugged in', definition: 'Connected to a power or connection point' },
      { word: 'Available', definition: 'Able to be used or obtained' },
    ],
  },
  theory: {
    title: 'Finding Out the Problem',
    content: "Identifying a passenger's problem quickly and clearly is the first step to solving it. Flight attendants ask short, direct questions and listen carefully before deciding how to help.",
    audioExplanation: {
      id: 'theory-audio',
      text: 'Explanation of finding out the problem',
      audioUrl: `${A5A}/theory-explanation.wav`,
      durationSeconds: 20,
      speaker: 'instructor',
    },
  },
  icaoPhraseoology: STANDARD_PHRASEOLOGY,
  cabinCrewPhraseoology: {
    category: 'Finding Out the Problem',
    phrases: [
      { situation: 'Responding to a call button', phrase: 'Did you call, sir? / Did you call, madam?', meaning: 'Yes/no question - rising intonation', example: 'Did you call, sir?' },
      { situation: 'Open question about a problem', phrase: "What's the problem? / What's the matter?", meaning: 'Open question - falling intonation', example: "What's the problem?" },
      { situation: 'Offering assistance', phrase: 'How can I help?', meaning: 'Open question - falling intonation', example: 'How can I help?' },
    ],
  },
  airlineVocabulary: [{
    category: 'Passenger Problems',
    terms: [
      { term: 'Handset', definition: 'The remote control for the in-flight entertainment screen', example: "My handset isn't working." },
      { term: 'Call button', definition: 'A button passengers press to call a flight attendant', example: 'All the passengers pushed the call button.' },
      { term: 'Troublesome neighbour', definition: 'A nearby passenger who is causing a problem for someone', example: 'A troublesome neighbour can ruin a flight for others.' },
    ],
  }],
  professionalExpressions: [
    { situation: 'Checking a fix worked', expression: 'There, try it now.', alternativeExpressions: ['Try that now, does it work?', 'See if that helps now.'] },
    { situation: 'Suggesting an alternative', expression: "Could I suggest one of these instead?", alternativeExpressions: ['Would you like to try something else?', 'Can I offer you an alternative?'] },
  ],
  pronunciation: [
    { id: 'pron-1', text: "What's the matter?", audioUrl: `${A5A}/pronunciation.wav`, durationSeconds: 2 },
  ],
  vocabulary: [
    { word: 'Handset', definition: 'The remote control for the in-flight entertainment screen' },
    { word: 'Plugged in', definition: 'Connected to a power or connection point' },
    { word: 'Available', definition: 'Able to be used or obtained' },
    { word: 'Call button', definition: 'A button passengers press to call a flight attendant' },
  ],
  grammar: [
    {
      rule: 'Question intonation - yes/no questions rise at the end; open (wh-) questions fall at the end',
      examples: [
        { sentence: 'Did you call, sir? (rising)', audioUrl: `${A5A}/lf-1.wav` },
        { sentence: "What's the problem? (falling)", audioUrl: `${A5A}/lf-4.wav` },
        { sentence: 'How can I help? (falling)', audioUrl: `${A5A}/lf-6.wav` },
      ],
    },
  ],
  exercises: [
    {
      id: 'ex-1', type: 'speaking', points: 15,
      question: 'As a flight attendant, you deal with all sorts of minor problems, like a broken entertainment handset. With a partner, make a list of other regular, minor passenger problems you can have on flights.',
    },
    {
      id: 'ex-2', type: 'multiple-choice', points: 10,
      question: "What can't the first passenger do?",
      options: [
        { id: 'o1', text: 'Turn on the entertainment screen', isCorrect: true },
        { id: 'o2', text: 'Find the toilet', isCorrect: false },
        { id: 'o3', text: 'Fasten his seatbelt', isCorrect: false },
        { id: 'o4', text: 'Recline his seat', isCorrect: false },
      ],
    },
    {
      id: 'ex-3', type: 'multiple-choice', points: 10,
      question: 'Is his handset broken?',
      options: [
        { id: 'o1', text: 'No, it was just not plugged in properly', isCorrect: true },
        { id: 'o2', text: 'Yes, it needs replacing', isCorrect: false },
      ],
    },
    {
      id: 'ex-4', type: 'multiple-choice', points: 10,
      question: 'Does the flight attendant fix the first problem?',
      options: [
        { id: 'o1', text: 'Yes', isCorrect: true },
        { id: 'o2', text: 'No', isCorrect: false },
      ],
    },
    {
      id: 'ex-5', type: 'multiple-choice', points: 10,
      question: 'Does the second passenger want to watch a TV programme or a film?',
      options: [
        { id: 'o1', text: 'A film', isCorrect: true },
        { id: 'o2', text: 'A TV programme', isCorrect: false },
      ],
    },
    {
      id: 'ex-6', type: 'multiple-choice', points: 10,
      question: 'Does the flight attendant fix the second problem?',
      options: [
        { id: 'o1', text: "No, the film isn't available, but she suggests alternatives", isCorrect: true },
        { id: 'o2', text: 'Yes, completely', isCorrect: false },
      ],
    },
    {
      id: 'ex-7', type: 'speaking', points: 15,
      question: 'Practise saying the flight attendant questions with the correct intonation: rising for yes/no questions (Did you call, sir?), falling for open questions (What\'s the problem? What\'s the matter? How can I help?).',
    },
    {
      id: 'ex-8', type: 'speaking', points: 15,
      question: 'Listen to four exchanges where passengers press the call button for: a worried traveller, a hungry passenger, a cold passenger, and a sick child. Number the problems in the order you imagine hearing them, and describe what each passenger might say.',
    },
    {
      id: 'ex-9', type: 'multiple-choice', points: 15,
      question: 'Which role best describes a flight attendant helping a nervous or frightened passenger?',
      options: [
        { id: 'o1', text: 'Friend / nurse', isCorrect: true },
        { id: 'o2', text: 'Referee', isCorrect: false },
        { id: 'o3', text: 'Bank clerk', isCorrect: false },
        { id: 'o4', text: 'Police officer', isCorrect: false },
      ],
    },
    {
      id: 'ex-10', type: 'multiple-choice', points: 15,
      question: 'Which role best describes a flight attendant settling a dispute between two passengers?',
      options: [
        { id: 'o1', text: 'Referee / diplomat', isCorrect: true },
        { id: 'o2', text: 'Waiter', isCorrect: false },
        { id: 'o3', text: 'Receptionist', isCorrect: false },
        { id: 'o4', text: 'Lifesaver', isCorrect: false },
      ],
    },
    {
      id: 'ex-11', type: 'speaking', points: 20,
      question: 'Discuss with a partner: which two roles (diplomat, firefighter, referee, bank clerk, nurse, waiter/waitress, nanny, lifesaver, police officer, receptionist, friend, information officer) are the most important? Which are the least important? Which do you most commonly take, and what other roles do you sometimes take?',
    },
  ],
  quiz: {
    id: 'quiz-5-1',
    title: 'Identifying Passenger Problems Quiz',
    passingScore: 70,
    exercises: [
      {
        id: 'q-1', type: 'multiple-choice', points: 20,
        question: "Why couldn't the first passenger use his entertainment screen?",
        options: [
          { id: 'o1', text: 'The handset was not plugged in properly', isCorrect: true },
          { id: 'o2', text: 'The screen was broken', isCorrect: false },
          { id: 'o3', text: 'The system was down for the whole aircraft', isCorrect: false },
          { id: 'o4', text: 'He did not know how to use it', isCorrect: false },
        ],
      },
      {
        id: 'q-2', type: 'multiple-choice', points: 20,
        question: 'What did the second passenger want to watch?',
        options: [
          { id: 'o1', text: 'A film that was not available on this system', isCorrect: true },
          { id: 'o2', text: 'The news', isCorrect: false },
          { id: 'o3', text: 'A sports programme', isCorrect: false },
          { id: 'o4', text: 'A documentary', isCorrect: false },
        ],
      },
      {
        id: 'q-3', type: 'multiple-choice', points: 20,
        question: "Which question type has rising intonation: 'Did you call, sir?' or 'What's the problem?'",
        options: [
          { id: 'o1', text: 'Did you call, sir?', isCorrect: true },
          { id: 'o2', text: "What's the problem?", isCorrect: false },
        ],
      },
      {
        id: 'q-4', type: 'multiple-choice', points: 20,
        question: 'Which of these is an "open" question?',
        options: [
          { id: 'o1', text: 'How can I help?', isCorrect: true },
          { id: 'o2', text: 'Did you call, madam?', isCorrect: false },
          { id: 'o3', text: 'Is it OK now?', isCorrect: false },
          { id: 'o4', text: 'Was that your handset?', isCorrect: false },
        ],
      },
      {
        id: 'q-5', type: 'multiple-choice', points: 20,
        question: 'Which role is NOT typically listed among a flight attendant\'s roles in this lesson?',
        options: [
          { id: 'o1', text: 'Pilot', isCorrect: true },
          { id: 'o2', text: 'Nurse', isCorrect: false },
          { id: 'o3', text: 'Diplomat', isCorrect: false },
          { id: 'o4', text: 'Waiter/waitress', isCorrect: false },
        ],
      },
    ],
  },
  flashcards: [
    { id: 'fc-1', front: 'Handset', back: 'The remote control for the in-flight entertainment screen' },
    { id: 'fc-2', front: 'Call button', back: 'A button passengers press to call a flight attendant' },
    { id: 'fc-3', front: 'Available', back: 'Able to be used or obtained' },
  ],
  review: {
    keyPoints: [
      "Ask short, direct questions to quickly identify a passenger's problem",
      'Yes/no questions rise in intonation; open questions fall',
      'Not every problem can be fixed - offering an alternative is often the best solution',
      'A flight attendant plays many roles: diplomat, nurse, waiter, referee, and more',
      "Recognizing which role fits a situation helps you respond appropriately",
    ],
    commonMistakes: [
      { mistake: 'Assuming you know the problem before asking', correction: 'Always ask a clarifying question first', explanation: 'This avoids wasting time on the wrong solution' },
      { mistake: 'Sounding flat or bored when asking questions', correction: 'Use natural rising/falling intonation', explanation: 'This shows genuine attentiveness to the passenger' },
    ],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

// ============================================================
// Unit 5, Lesson 2: Dealing with Problems
// Offering to help (1) - immediate offers with "I'll..."
// ============================================================
const A5B = '/audio/unit-5/lesson-2';

const DEALING_PROBLEMS_LESSON: any = {
  id: 'lesson-5-2',
  unitId: 'unit-5',
  title: 'Dealing with Problems',
  description: 'Making immediate offers of help using "I\'ll..." for four common passenger problems',
  icon: '🛠️',
  icaoLevel: 4,
  category: 'cabin-crew',
  difficulty: 'intermediate',
  xpReward: 150,
  estimatedDurationMinutes: 40,
  locked: false,
  order: 2,
  objectives: [
    { id: 'obj-1', description: "Make an immediate offer to help using 'I'll...'", type: 'speaking' },
    { id: 'obj-2', description: 'Understand how different passenger problems are solved', type: 'listening' },
  ],
  scenario: {
    id: 'scenario-dealing-problems',
    title: 'Solving Four Problems',
    description: 'A flight attendant responds to a worried traveller, a hungry passenger, a cold passenger, and a passenger with a sick child.',
    context: 'Cabin, various passenger problems',
    audioSegments: [
      { id: 'p1-01', text: "Passenger: Excuse me, I'm worried I might miss my connecting flight.", audioUrl: `${A5B}/p1-01.wav`, durationSeconds: 3, speaker: 'passenger' },
      { id: 'p1-02', text: "Flight attendant: I'll check on our arrival time and get back to you.", audioUrl: `${A5B}/p1-02.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'p2-01', text: "Passenger: Is there any food? I'm starving.", audioUrl: `${A5B}/p2-01.wav`, durationSeconds: 3, speaker: 'passenger' },
      { id: 'p2-02', text: "Flight attendant: I'll get it for you. A sandwich or pot noodles?", audioUrl: `${A5B}/p2-02.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'p3-01', text: "Passenger: I'm quite cold, could I have something warm?", audioUrl: `${A5B}/p3-01.wav`, durationSeconds: 3, speaker: 'passenger' },
      { id: 'p3-02', text: "Flight attendant: I'll get you a blanket in a moment if you'd like.", audioUrl: `${A5B}/p3-02.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'p4-01', text: "Passenger: My daughter isn't feeling well, do you have any paracetamol?", audioUrl: `${A5B}/p4-01.wav`, durationSeconds: 4, speaker: 'passenger' },
      { id: 'p4-02', text: "Flight attendant: I'm afraid we can't give medication, but I'll ask if there's a doctor or nurse on board. I'll do what I can to help.", audioUrl: `${A5B}/p4-02.wav`, durationSeconds: 6, speaker: 'crew' },
    ],
    vocabulary: [
      { word: 'Connecting flight', definition: 'A second flight that continues a journey after the first' },
      { word: 'Starving', definition: 'Very hungry' },
      { word: 'Paracetamol', definition: 'A common pain-relief and fever-reducing medicine' },
    ],
  },
  theory: {
    title: "Offering to Help with 'I'll...'",
    content: "Once a problem is identified, cabin crew make an immediate offer to help using 'I'll...'. This reassures the passenger that action is being taken right away, even when the crew cannot fully solve the problem themselves.",
    audioExplanation: {
      id: 'theory-audio',
      text: "Explanation of offering to help with I'll",
      audioUrl: `${A5B}/theory-explanation.wav`,
      durationSeconds: 20,
      speaker: 'instructor',
    },
  },
  icaoPhraseoology: STANDARD_PHRASEOLOGY,
  cabinCrewPhraseoology: {
    category: 'Offering to Help (1)',
    phrases: [
      { situation: 'Promising to follow up', phrase: "I'll check on our arrival time and get back to you.", meaning: 'Immediate offer with a promise to return', example: "I'll check on our arrival time and get back to you." },
      { situation: 'Getting something for a passenger', phrase: "I'll get you a blanket. / I'll get it for you.", meaning: 'Immediate offer to bring something', example: "I'll get you a blanket." },
      { situation: 'Explaining how to help', phrase: "I'll show you how it works.", meaning: 'Offering a demonstration', example: "I'll show you how it works." },
      { situation: 'Replacing an item', phrase: "I'll get you another one.", meaning: 'Offering a replacement', example: "I'll get you another one." },
    ],
  },
  airlineVocabulary: [{
    category: 'Problem-Solving Vocabulary',
    terms: [
      { term: 'Connecting flight', definition: 'A second flight that continues a journey after the first', example: "I'm worried I might miss my connecting flight." },
      { term: 'Blanket', definition: 'A warm cover given to a cold passenger', example: "I'll get you a blanket in a moment." },
      { term: 'Paracetamol', definition: 'A common pain-relief and fever-reducing medicine', example: 'Do you have any paracetamol?' },
    ],
  }],
  professionalExpressions: [
    { situation: "Making an immediate offer", expression: "I'll... (do something) right away.", alternativeExpressions: ['Let me sort that out for you.', "I'll take care of that."] },
    { situation: 'Admitting a limit but still helping', expression: "I'm afraid I can't do X, but I'll do Y.", alternativeExpressions: ["I can't help with that directly, but I can...", "That's not something I can do, but I will..."] },
  ],
  pronunciation: [
    { id: 'pron-1', text: "I'll check on our arrival time and get back to you.", audioUrl: `${A5B}/pronunciation.wav`, durationSeconds: 3 },
  ],
  vocabulary: [
    { word: 'Connecting flight', definition: 'A second flight that continues a journey after the first' },
    { word: 'Starving', definition: 'Very hungry' },
    { word: 'Paracetamol', definition: 'A common pain-relief and fever-reducing medicine' },
    { word: 'Blanket', definition: 'A warm cover given to a cold passenger' },
  ],
  grammar: [
    {
      rule: "'Will' (short form I'll) for immediate offers - a spontaneous decision to help, made at the moment of speaking",
      examples: [
        { sentence: "I'll get you a blanket.", audioUrl: `${A5B}/lf-3.wav` },
        { sentence: "I'll ask if there is a doctor or nurse on board.", audioUrl: `${A5B}/lf-2.wav` },
        { sentence: "I'll show you how it works.", audioUrl: `${A5B}/lf-6.wav` },
      ],
    },
  ],
  exercises: [
    {
      id: 'ex-1', type: 'multiple-choice', points: 15,
      question: 'What does the flight attendant offer to do for the worried traveller?',
      options: [
        { id: 'o1', text: 'Check the arrival time and get back to them', isCorrect: true },
        { id: 'o2', text: 'Rebook their connecting flight', isCorrect: false },
        { id: 'o3', text: 'Speak to the captain immediately', isCorrect: false },
        { id: 'o4', text: 'Give them a refund', isCorrect: false },
      ],
    },
    {
      id: 'ex-2', type: 'multiple-choice', points: 15,
      question: 'What does the flight attendant agree to get the hungry passenger?',
      options: [
        { id: 'o1', text: 'A sandwich or pot noodles', isCorrect: true },
        { id: 'o2', text: 'A full hot meal', isCorrect: false },
        { id: 'o3', text: 'Only a snack bar', isCorrect: false },
        { id: 'o4', text: 'Nothing, food service has ended', isCorrect: false },
      ],
    },
    {
      id: 'ex-3', type: 'multiple-choice', points: 15,
      question: 'What does the flight attendant offer to get the cold passenger?',
      options: [
        { id: 'o1', text: 'A blanket', isCorrect: true },
        { id: 'o2', text: 'A hot drink', isCorrect: false },
        { id: 'o3', text: 'A jacket', isCorrect: false },
        { id: 'o4', text: 'To turn up the cabin heating', isCorrect: false },
      ],
    },
    {
      id: 'ex-4', type: 'multiple-choice', points: 15,
      question: 'Can the flight attendant get the sick child some paracetamol?',
      options: [
        { id: 'o1', text: 'No, crew cannot give medication', isCorrect: true },
        { id: 'o2', text: 'Yes, immediately', isCorrect: false },
      ],
    },
    {
      id: 'ex-5', type: 'multiple-choice', points: 15,
      question: 'What does the flight attendant offer to do for the passenger with the sick child?',
      options: [
        { id: 'o1', text: 'Ask if there is a doctor or nurse on board', isCorrect: true },
        { id: 'o2', text: 'Land the plane early', isCorrect: false },
        { id: 'o3', text: 'Call the child\'s own doctor', isCorrect: false },
        { id: 'o4', text: 'Nothing, it is not her responsibility', isCorrect: false },
      ],
    },
    {
      id: 'ex-6', type: 'fill-blank', points: 10,
      question: "I'll check on our arrival time and _________ to you.",
      audio: { id: 'p1-audio', text: 'Worried traveller response', audioUrl: `${A5B}/p1-02.wav`, durationSeconds: 3, speaker: 'crew' },
      correctAnswer: 'get back',
    },
    {
      id: 'ex-7', type: 'fill-blank', points: 10,
      question: "I'll _________ it for you. A sandwich or pot noodles?",
      correctAnswer: 'get',
    },
    {
      id: 'ex-8', type: 'fill-blank', points: 10,
      question: "I'll get you a blanket in a _________ if you'd like.",
      correctAnswer: 'moment',
    },
    {
      id: 'ex-9', type: 'fill-blank', points: 10,
      question: "I'll _________ what I can do. I'll _________ if there is a doctor or nurse on board.",
      correctAnswer: 'do',
      hint: 'Both blanks use the same short verb.',
    },
    {
      id: 'ex-10', type: 'speaking', points: 15,
      question: "Practise saying the 'I'll...' sentences, paying attention to the short form instead of saying 'I will' in full.",
    },
    {
      id: 'ex-11', type: 'speaking', points: 20,
      question: "Role-play with a partner using these problems: the video screen doesn't work, a baby is crying, the reading light goes on and off, a neighbour's music is too loud, a noisy group nearby, you can't open the overhead locker, the toilet is dirty, the seat cushion is wet, the headset is broken. Passenger: say the problem. Flight attendant: ask for information, then deal with it using 'I'll...'.",
    },
  ],
  quiz: {
    id: 'quiz-5-2',
    title: 'Dealing with Problems Quiz',
    passingScore: 70,
    exercises: [
      {
        id: 'q-1', type: 'multiple-choice', points: 20,
        question: "What tense/form is used for an immediate offer to help?",
        options: [
          { id: 'o1', text: "I'll... (will)", isCorrect: true },
          { id: 'o2', text: 'I am going to...', isCorrect: false },
          { id: 'o3', text: 'I was going to...', isCorrect: false },
          { id: 'o4', text: 'I have...', isCorrect: false },
        ],
      },
      {
        id: 'q-2', type: 'multiple-choice', points: 20,
        question: 'What two food options does the flight attendant offer the hungry passenger?',
        options: [
          { id: 'o1', text: 'A sandwich or pot noodles', isCorrect: true },
          { id: 'o2', text: 'Pizza or pasta', isCorrect: false },
          { id: 'o3', text: 'Soup or salad', isCorrect: false },
          { id: 'o4', text: 'Crisps or nuts', isCorrect: false },
        ],
      },
      {
        id: 'q-3', type: 'multiple-choice', points: 20,
        question: 'Why can\'t the flight attendant give medication to the sick child?',
        options: [
          { id: 'o1', text: 'Crew are not permitted to give medication', isCorrect: true },
          { id: 'o2', text: 'There is none on board', isCorrect: false },
          { id: 'o3', text: 'The child refuses to take it', isCorrect: false },
          { id: 'o4', text: 'It is against the parent\'s wishes', isCorrect: false },
        ],
      },
      {
        id: 'q-4', type: 'multiple-choice', points: 20,
        question: "Complete: I'll get you a blanket in a _____.",
        options: [
          { id: 'o1', text: 'Moment', isCorrect: true },
          { id: 'o2', text: 'Hour', isCorrect: false },
          { id: 'o3', text: 'While', isCorrect: false },
          { id: 'o4', text: 'Second class', isCorrect: false },
        ],
      },
      {
        id: 'q-5', type: 'multiple-choice', points: 20,
        question: 'What is the worried traveller worried about?',
        options: [
          { id: 'o1', text: 'Missing their connecting flight', isCorrect: true },
          { id: 'o2', text: 'Turbulence', isCorrect: false },
          { id: 'o3', text: 'Lost luggage', isCorrect: false },
          { id: 'o4', text: 'A delayed departure', isCorrect: false },
        ],
      },
    ],
  },
  flashcards: [
    { id: 'fc-1', front: 'Connecting flight', back: 'A second flight that continues a journey after the first' },
    { id: 'fc-2', front: 'Paracetamol', back: 'A common pain-relief and fever-reducing medicine' },
    { id: 'fc-3', front: 'Starving', back: 'Very hungry' },
  ],
  review: {
    keyPoints: [
      "Use 'I'll...' to make an immediate, reassuring offer of help",
      'Even when you cannot fully solve a problem, offer what you can do',
      'Practise the natural short form "I\'ll" rather than "I will"',
      'Common problems include worry about connections, hunger, cold, and a sick child',
      'Crew cannot give medication, but can ask if a doctor or nurse is on board',
    ],
    commonMistakes: [
      { mistake: 'Promising something you cannot deliver', correction: 'Only offer what you can realistically do', explanation: 'Broken promises damage passenger trust' },
      { mistake: 'Saying "I will" in full during casual speech', correction: 'Use the natural contracted form "I\'ll"', explanation: 'This sounds more natural and fluent' },
    ],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

// ============================================================
// Unit 5, Lesson 3: Saying Sorry
// Apologizing + Case Study: Pickpocket Strikes on Flight from
// Tokyo to Paris
// ============================================================
const A5C = '/audio/unit-5/lesson-3';

const SAYING_SORRY_LESSON: any = {
  id: 'lesson-5-3',
  unitId: 'unit-5',
  title: 'Saying Sorry',
  description: 'Apologizing sincerely to passengers, merged with the case study: Pickpocket Strikes on Flight from Tokyo to Paris',
  icon: '🙏',
  icaoLevel: 4,
  category: 'cabin-crew',
  difficulty: 'intermediate',
  xpReward: 180,
  estimatedDurationMinutes: 55,
  locked: false,
  order: 3,
  objectives: [
    { id: 'obj-1', description: 'Apologize sincerely and give a reason when appropriate', type: 'speaking' },
    { id: 'obj-2', description: 'Recognize apologetic intonation', type: 'listening' },
    { id: 'obj-3', description: 'Discuss a serious theft incident and airline responsibility', type: 'reading' },
  ],
  scenario: {
    id: 'scenario-saying-sorry',
    title: 'Running Out of Items',
    description: 'A flight attendant serves drinks and snacks to four passengers, and has to apologize when some items are unavailable.',
    context: 'Cabin, drinks and snacks service',
    audioSegments: [
      { id: 'd1-01', text: 'Flight attendant: What can I get you, sir?', audioUrl: `${A5C}/d1-01-fa.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'd1-02', text: 'Passenger 1: Two cheese sandwiches and two diet Cokes, please.', audioUrl: `${A5C}/d1-02-p1.wav`, durationSeconds: 3, speaker: 'passenger' },
      { id: 'd1-03', text: "Flight attendant: Oh dear, I am sorry, but we've run out of cheese. They've been very popular today. But I can offer you chicken sandwiches.", audioUrl: `${A5C}/d1-03-fa.wav`, durationSeconds: 6, speaker: 'crew' },
      { id: 'd1-04', text: "Passenger 1: I don't believe it - it's the old story. You always seem to run out.", audioUrl: `${A5C}/d1-04-p1.wav`, durationSeconds: 4, speaker: 'passenger' },
      { id: 'd1-05', text: 'Flight attendant: Once again, I can only apologize, sir. Would you like the chicken?', audioUrl: `${A5C}/d1-05-fa.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'd1-06', text: 'Passenger 1: No thanks, no thank you.', audioUrl: `${A5C}/d1-06-p1.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 'd1-07', text: 'Flight attendant: Sorry about that.', audioUrl: `${A5C}/d1-07-fa.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'd2-01', text: 'Passenger 2: Could I have a peppermint tea, please?', audioUrl: `${A5C}/d2-01-p2.wav`, durationSeconds: 3, speaker: 'passenger' },
      { id: 'd2-02', text: "Flight attendant: Sorry, we don't have any peppermint - my mistake. Would English Breakfast be OK?", audioUrl: `${A5C}/d2-02-fa.wav`, durationSeconds: 5, speaker: 'crew' },
      { id: 'd2-03', text: "Passenger 2: Sure, that's fine.", audioUrl: `${A5C}/d2-03-p2.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 'd3-01', text: 'Passenger 3: Do you have the beef option left?', audioUrl: `${A5C}/d3-01-p3.wav`, durationSeconds: 3, speaker: 'passenger' },
      { id: 'd3-02', text: "Flight attendant: I'm afraid we've only got the chicken and vegetarian pasta left today.", audioUrl: `${A5C}/d3-02-fa.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'd3-03', text: "Passenger 3: Oh, chicken's fine then.", audioUrl: `${A5C}/d3-03-p3.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 'd4-01', text: 'Passenger 4: Just a coffee, please.', audioUrl: `${A5C}/d4-01-p4.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 'd4-02', text: 'Flight attendant: Of course, here you are.', audioUrl: `${A5C}/d4-02-fa.wav`, durationSeconds: 2, speaker: 'crew' },
    ],
    vocabulary: [
      { word: 'Run out', definition: 'To have no more of something left' },
      { word: 'Popular', definition: 'Liked and chosen by many people' },
      { word: 'Mistake', definition: 'An error' },
    ],
  },
  theory: {
    title: 'Pickpocket Strikes on Flight from Tokyo to Paris',
    content: "A pickpocket stole thousands of pounds' worth of cash from Business class passengers as they slept on a flight from Tokyo to Paris. Cabin crew did not spot the thief at work as he went through wallets and handbags during the 12-hour overnight flight.\n\nPassengers woke to find large sums of cash missing. The captain alerted police, who met the Boeing 777 jet as it landed at Paris Charles de Gaulle airport on Tuesday morning, but they were unable to identify the thief.\n\nOne passenger told police that about £3,000 in mixed currencies had vanished from her handbag. Five others, who had paid up to £5,000 each for their tickets, said they had also lost thousands in cash.\n\nOne told the French news website Le Post: 'Most long haul travellers sleep on overnight flights like this. But at the prices we pay for tickets, you would expect the cabin crew to be watching over us and making sure our belongings are safe.'\n\nA spokesperson for the airline said it could not comment on this particular incident, but added: 'As a general rule, passengers' belongings in the cabin are their responsibility, while luggage in the hold is the airline's responsibility.'",
    audioExplanation: {
      id: 'theory-audio',
      text: 'Saying sorry explanation',
      audioUrl: `${A5C}/theory-explanation.wav`,
      durationSeconds: 20,
      speaker: 'instructor',
    },
  },
  icaoPhraseoology: STANDARD_PHRASEOLOGY,
  cabinCrewPhraseoology: {
    category: 'Apologizing',
    phrases: [
      { situation: 'Apologizing for a mistake', phrase: "Sorry, we don't have any peppermint - my mistake.", meaning: 'Sincere apology owning the error', example: "Sorry, we don't have any peppermint - my mistake." },
      { situation: 'Apologizing with a limitation', phrase: "I'm afraid we've only got apple juice and orange juice today.", meaning: 'Apologizing while stating what is available', example: "I'm afraid we've only got apple juice and orange juice today." },
      { situation: 'Formal apology', phrase: 'I do apologize.', meaning: 'A more formal way to say sorry', example: 'I do apologize.' },
      { situation: 'Apologizing with a reason', phrase: "I am sorry, but we've run out of cheese.", meaning: 'Sorry followed by a brief reason', example: "I am sorry, but we've run out of cheese." },
      { situation: 'Repeated apology', phrase: 'I can only apologize, sir.', meaning: 'Used when there is nothing more that can be done', example: 'I can only apologize, sir.' },
    ],
  },
  airlineVocabulary: [{
    category: 'Apologizing Vocabulary',
    terms: [
      { term: 'Run out', definition: 'To have no more of something left', example: "We've run out of cheese." },
      { term: 'Mistake', definition: 'An error', example: 'Sorry, my mistake.' },
      { term: 'Pickpocket', definition: "Someone who steals from people's bags and pockets", example: 'A pickpocket stole cash from Business class passengers.' },
      { term: 'To vanish', definition: 'To disappear', example: 'The cash had vanished from her handbag.' },
      { term: 'The hold', definition: 'The place where large suitcases are stored in a plane', example: 'Luggage in the hold is the airline\'s responsibility.' },
    ],
  }],
  professionalExpressions: [
    { situation: 'Apologizing sincerely', expression: 'Sorry about that.', alternativeExpressions: ["I'm really sorry.", 'My apologies.'] },
    { situation: 'Addressing a passenger politely while apologizing', expression: "I'm sorry, madam. / Sorry, sir.", alternativeExpressions: ['My apologies, madam.', "I do apologize, sir."] },
  ],
  pronunciation: [
    { id: 'pron-1', text: "Sorry, we don't have any peppermint - my mistake.", audioUrl: `${A5C}/pronunciation.wav`, durationSeconds: 3 },
  ],
  vocabulary: [
    { word: 'Run out', definition: 'To have no more of something left' },
    { word: 'Popular', definition: 'Liked and chosen by many people' },
    { word: 'Pickpocket', definition: "Someone who steals from people's bags and pockets" },
    { word: 'To vanish', definition: 'To disappear' },
    { word: 'To alert', definition: 'To warn someone, to make someone aware' },
    { word: 'The hold', definition: 'The place where large suitcases are stored in a plane' },
  ],
  grammar: [
    {
      rule: 'Apologetic stress and intonation - key words are stressed to sound genuinely sorry, not flat or robotic',
      examples: [
        { sentence: "I am **sorry**, but we've run out of cheese.", audioUrl: `${A5C}/lf-4.wav` },
        { sentence: "I can only **apologize**, sir.", audioUrl: `${A5C}/lf-5.wav` },
        { sentence: "I'm **really** sorry, we haven't got any left.", audioUrl: `${A5C}/lf-7.wav` },
      ],
    },
  ],
  exercises: [
    {
      id: 'ex-1', type: 'speaking', points: 15,
      question: 'How often do you have to apologize to passengers on a flight? What are some things you have to apologize for? What makes passengers angry, and how do you make them less angry?',
    },
    {
      id: 'ex-2', type: 'speaking', points: 15,
      question: 'Listen to the flight attendant serving drinks and snacks to four passengers. Make a note of three things the flight attendant has not got today.',
      hint: 'Cheese (sandwiches), peppermint (tea), and beef.',
    },
    {
      id: 'ex-3', type: 'multiple-choice', points: 10,
      question: 'Which passenger is the most angry about the situation?',
      options: [
        { id: 'o1', text: 'Passenger 1 (the cheese sandwich passenger)', isCorrect: true },
        { id: 'o2', text: 'Passenger 2 (the tea passenger)', isCorrect: false },
        { id: 'o3', text: 'Passenger 3 (the beef passenger)', isCorrect: false },
        { id: 'o4', text: 'Passenger 4 (the coffee passenger)', isCorrect: false },
      ],
    },
    {
      id: 'ex-4', type: 'multiple-choice', points: 10,
      question: 'To which passenger does the flight attendant give a reason or excuse for the problem?',
      options: [
        { id: 'o1', text: 'Passenger 1 - "they\'ve been very popular today"', isCorrect: true },
        { id: 'o2', text: 'Passenger 2', isCorrect: false },
        { id: 'o3', text: 'Passenger 3', isCorrect: false },
        { id: 'o4', text: 'Passenger 4', isCorrect: false },
      ],
    },
    {
      id: 'ex-5', type: 'multiple-choice', points: 10,
      question: 'How many times does the flight attendant use the word "sorry"?',
      options: [
        { id: 'o1', text: 'Three times', isCorrect: true },
        { id: 'o2', text: 'Once', isCorrect: false },
        { id: 'o3', text: 'Five times', isCorrect: false },
        { id: 'o4', text: 'Never', isCorrect: false },
      ],
    },
    {
      id: 'ex-6', type: 'multiple-choice', points: 10,
      question: 'How many times does the flight attendant apologize in total (using "sorry" or "apologize")?',
      options: [
        { id: 'o1', text: 'Four times', isCorrect: true },
        { id: 'o2', text: 'Two times', isCorrect: false },
        { id: 'o3', text: 'Six times', isCorrect: false },
        { id: 'o4', text: 'Once', isCorrect: false },
      ],
    },
    {
      id: 'ex-7', type: 'fill-blank', points: 10,
      question: 'What can I _________ you, sir?',
      audio: { id: 'd1-audio', text: 'Opening the order', audioUrl: `${A5C}/d1-01-fa.wav`, durationSeconds: 2, speaker: 'crew' },
      correctAnswer: 'get',
    },
    {
      id: 'ex-8', type: 'fill-blank', points: 10,
      question: 'Two cheese _________ and two diet Cokes, please.',
      correctAnswer: 'sandwiches',
    },
    {
      id: 'ex-9', type: 'fill-blank', points: 10,
      question: "Oh dear, I am sorry, but we've _________ out of cheese.",
      correctAnswer: 'run',
    },
    {
      id: 'ex-10', type: 'fill-blank', points: 10,
      question: "They've been very _________ today.",
      correctAnswer: 'popular',
    },
    {
      id: 'ex-11', type: 'fill-blank', points: 10,
      question: 'You always _________ run out.',
      correctAnswer: 'seem to',
    },
    {
      id: 'ex-12', type: 'fill-blank', points: 10,
      question: 'Once again, I can only _________, sir.',
      correctAnswer: 'apologize',
    },
    {
      id: 'ex-13', type: 'fill-blank', points: 10,
      question: 'No _________, no thank you.',
      correctAnswer: 'thanks',
    },
    {
      id: 'ex-14', type: 'fill-blank', points: 10,
      question: 'Sorry _________ that.',
      correctAnswer: 'about',
    },
    {
      id: 'ex-15', type: 'speaking', points: 15,
      question: 'Practise saying the apology sentences aloud, stressing the important words, to sound genuinely apologetic: "Sorry, we don\'t have any peppermint - my mistake." / "I do apologize." / "I am sorry, but we\'ve run out of cheese."',
    },
    {
      id: 'ex-16', type: 'speaking', points: 20,
      question: 'Role-play with a partner using these problems: the cabin is too hot, there isn\'t a vegetarian option, the choice of in-flight movies is poor, the seats are uncomfortable. Passenger: state the problem. Flight attendant: apologize fully, give a reason, and apologize again if needed.',
    },
    {
      id: 'ex-17', type: 'multiple-choice', points: 15,
      question: 'What exactly happened on the flight from Tokyo to Paris?',
      options: [
        { id: 'o1', text: 'A pickpocket stole cash from sleeping Business class passengers', isCorrect: true },
        { id: 'o2', text: 'A passenger\'s luggage was lost', isCorrect: false },
        { id: 'o3', text: 'A fight broke out between two passengers', isCorrect: false },
        { id: 'o4', text: 'A passenger became seriously ill', isCorrect: false },
      ],
    },
    {
      id: 'ex-18', type: 'multiple-choice', points: 15,
      question: 'How many passengers were affected, and in which part of the aircraft?',
      options: [
        { id: 'o1', text: 'At least six, in Business class', isCorrect: true },
        { id: 'o2', text: 'Two, in Economy class', isCorrect: false },
        { id: 'o3', text: 'The whole aircraft', isCorrect: false },
        { id: 'o4', text: 'Just one, in First class', isCorrect: false },
      ],
    },
    {
      id: 'ex-19', type: 'multiple-choice', points: 15,
      question: 'Did the airline spokesperson admit any responsibility for what happened?',
      options: [
        { id: 'o1', text: 'No - they said cabin belongings are the passenger\'s own responsibility', isCorrect: true },
        { id: 'o2', text: 'Yes, they admitted full responsibility', isCorrect: false },
        { id: 'o3', text: 'They offered a full refund to all passengers', isCorrect: false },
        { id: 'o4', text: 'They fired the cabin crew involved', isCorrect: false },
      ],
    },
    {
      id: 'ex-20', type: 'speaking', points: 15,
      question: 'How could such a serious theft happen in a secure environment? Could the cabin crew have done anything to prevent it? Is it the airline\'s responsibility to find stolen cash and belongings, or the thief? What is your airline\'s policy?',
    },
    {
      id: 'ex-21', type: 'speaking', points: 15,
      question: 'Make a list of five common problems you can usually solve, and two problems you were not able to solve. Why not? What is the most unusual problem you have experienced on a flight?',
    },
    {
      id: 'ex-22', type: 'speaking', points: 15,
      question: 'In general, are passengers difficult to please? What is the most common minor complaint? Is the passenger always right? Discuss based on your own experience or expectations.',
    },
    {
      id: 'ex-23', type: 'speaking', points: 15,
      question: 'Is it always the flight attendant\'s job to make sure passenger problems are solved? How do you feel boarding a flight knowing you are likely to have passenger problems - tense and nervous, or do you look forward to the challenge?',
    },
  ],
  quiz: {
    id: 'quiz-5-3',
    title: 'Saying Sorry Quiz',
    passingScore: 70,
    exercises: [
      {
        id: 'q-1', type: 'multiple-choice', points: 20,
        question: 'What food item has run out in the dialogue?',
        options: [
          { id: 'o1', text: 'Cheese sandwiches', isCorrect: true },
          { id: 'o2', text: 'Chicken sandwiches', isCorrect: false },
          { id: 'o3', text: 'Vegetarian pasta', isCorrect: false },
          { id: 'o4', text: 'Coffee', isCorrect: false },
        ],
      },
      {
        id: 'q-2', type: 'multiple-choice', points: 20,
        question: 'What does the flight attendant offer passenger 2 instead of peppermint tea?',
        options: [
          { id: 'o1', text: 'English Breakfast tea', isCorrect: true },
          { id: 'o2', text: 'Coffee', isCorrect: false },
          { id: 'o3', text: 'Green tea', isCorrect: false },
          { id: 'o4', text: 'Nothing', isCorrect: false },
        ],
      },
      {
        id: 'q-3', type: 'multiple-choice', points: 20,
        question: 'Where did the pickpocket incident take place?',
        options: [
          { id: 'o1', text: 'On a flight from Tokyo to Paris', isCorrect: true },
          { id: 'o2', text: 'On a flight from Paris to Tokyo', isCorrect: false },
          { id: 'o3', text: 'At Charles de Gaulle airport, before boarding', isCorrect: false },
          { id: 'o4', text: 'On a train', isCorrect: false },
        ],
      },
      {
        id: 'q-4', type: 'multiple-choice', points: 20,
        question: 'According to the airline, whose responsibility are cabin belongings?',
        options: [
          { id: 'o1', text: 'The passenger\'s', isCorrect: true },
          { id: 'o2', text: 'The airline\'s', isCorrect: false },
          { id: 'o3', text: 'The airport\'s', isCorrect: false },
          { id: 'o4', text: 'The captain\'s', isCorrect: false },
        ],
      },
      {
        id: 'q-5', type: 'multiple-choice', points: 20,
        question: 'What does "to vanish" mean?',
        options: [
          { id: 'o1', text: 'To disappear', isCorrect: true },
          { id: 'o2', text: 'To appear suddenly', isCorrect: false },
          { id: 'o3', text: 'To break', isCorrect: false },
          { id: 'o4', text: 'To multiply', isCorrect: false },
        ],
      },
    ],
  },
  flashcards: [
    { id: 'fc-1', front: 'Run out', back: 'To have no more of something left' },
    { id: 'fc-2', front: 'Pickpocket', back: "Someone who steals from people's bags and pockets" },
    { id: 'fc-3', front: 'To vanish', back: 'To disappear' },
    { id: 'fc-4', front: 'To alert', back: 'To warn someone, to make someone aware' },
    { id: 'fc-5', front: 'The hold', back: 'The place where large suitcases are stored in a plane' },
  ],
  review: {
    keyPoints: [
      'A genuine apology stresses key words and avoids sounding flat',
      'Giving a brief reason can reduce a passenger\'s frustration, but is not always possible',
      'Repeated apologies ("I can only apologize") are used when nothing more can be done',
      'Cabin security has limits - valuables in the cabin remain the passenger\'s responsibility',
      'Serious incidents like theft require calm reporting to the captain and authorities',
    ],
    commonMistakes: [
      { mistake: 'Apologizing without any stress or warmth in the voice', correction: 'Stress key words like "sorry" and "apologize" naturally', explanation: 'A flat apology can seem insincere and increase frustration' },
      { mistake: 'Making excuses instead of apologizing', correction: 'Apologize first, then offer a brief reason if helpful', explanation: 'Passengers want to feel heard before they hear explanations' },
    ],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

// ============================================================
// Unit 6, Lesson 1: Dealing with an On-Board Accident
// Check -> Call -> Care response to medical problems
// ============================================================
const A6A = '/audio/unit-6/lesson-1';

const ONBOARD_ACCIDENT_LESSON: any = {
  id: 'lesson-6-1',
  unitId: 'unit-6',
  title: 'Dealing with an On-Board Accident',
  description: 'Using the Check, Call, Care model to respond to an on-board accident',
  icon: '🩹',
  icaoLevel: 4,
  category: 'cabin-crew',
  difficulty: 'intermediate',
  xpReward: 150,
  estimatedDurationMinutes: 40,
  locked: false,
  order: 1,
  objectives: [
    { id: 'obj-1', description: 'Respond to an on-board accident using Check, Call, Care', type: 'listening' },
    { id: 'obj-2', description: 'Use correct intonation for open and yes/no questions', type: 'speaking' },
    { id: 'obj-3', description: 'Identify items in the emergency medical kit', type: 'vocabulary' },
  ],
  scenario: {
    id: 'scenario-onboard-accident',
    title: 'A Laptop Falls from the Locker',
    description: 'Flight attendants Leila and Hemal deal with a passenger injured when a laptop falls from the overhead locker.',
    context: 'Cabin, in-flight accident',
    audioSegments: [
      { id: 'd1-01', text: "Leila: What's happened?", audioUrl: `${A6A}/d1-01-leila.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'd1-02', text: 'Male passenger: A laptop fell out of the locker and hit that lady on the head!', audioUrl: `${A6A}/d1-02-male.wav`, durationSeconds: 4, speaker: 'passenger' },
      { id: 'd1-03', text: "Leila: This lady's been hurt. She's bleeding. Sir, could you please stay with her for a moment while I get help?", audioUrl: `${A6A}/d1-03-leila.wav`, durationSeconds: 6, speaker: 'crew' },
      { id: 'd1-04', text: 'Male passenger: Of course.', audioUrl: `${A6A}/d1-04-male.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 'd1-05', text: 'Leila: Hemal, can you bring the first aid kit right away?', audioUrl: `${A6A}/d1-05-leila.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'd1-06', text: "Hemal: On my way.", audioUrl: `${A6A}/d1-06-hemal.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'd2-01', text: "Leila: Hello, I'm Leila, a flight attendant. How are you feeling?", audioUrl: `${A6A}/d2-01-leila.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'd2-02', text: "Injured passenger: I was a bit dizzy, but I'm fine now.", audioUrl: `${A6A}/d2-02-injured.wav`, durationSeconds: 3, speaker: 'passenger' },
      { id: 'd2-03', text: "Leila: You've had a nasty bump on your head. Is your husband with you?", audioUrl: `${A6A}/d2-03-leila.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'd2-04', text: "Injured passenger: Yes, he's just gone to the toilet.", audioUrl: `${A6A}/d2-04-injured.wav`, durationSeconds: 3, speaker: 'passenger' },
      { id: 'd2-05', text: 'Leila: Can I get you a glass of water?', audioUrl: `${A6A}/d2-05-leila.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'd2-06', text: 'Injured passenger: Yes please, that would be good.', audioUrl: `${A6A}/d2-06-injured.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 'd2-07', text: "Leila: You've got a small cut on your forehead too. I'll clean it up and put a dressing over it.", audioUrl: `${A6A}/d2-07-leila.wav`, durationSeconds: 6, speaker: 'crew' },
      { id: 'd2-08', text: 'Injured passenger: Okay, thank you.', audioUrl: `${A6A}/d2-08-injured.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 'd2-09', text: 'Leila: Can you hold this compress against your forehead for me? And please try to stay still while I check you over.', audioUrl: `${A6A}/d2-09-leila.wav`, durationSeconds: 6, speaker: 'crew' },
    ],
    vocabulary: [
      { word: 'Dressing', definition: 'A covering placed over a wound to protect it' },
      { word: 'Compress', definition: 'A pad pressed against a wound to control bleeding or swelling' },
      { word: 'Dizzy', definition: 'Feeling unsteady, as if everything is spinning' },
      { word: 'Bump', definition: 'A swelling caused by a knock or blow' },
    ],
  },
  theory: {
    title: 'Check, Call, Care',
    content: "The Check, Call, Care model is the standard response to any on-board medical problem: check what's wrong, call for help and describe the situation, then care for the passenger and take action.",
    audioExplanation: {
      id: 'theory-audio',
      text: 'Explanation of Check, Call, Care',
      audioUrl: `${A6A}/theory-explanation.wav`,
      durationSeconds: 20,
      speaker: 'instructor',
    },
  },
  icaoPhraseoology: STANDARD_PHRASEOLOGY,
  cabinCrewPhraseoology: {
    category: 'Check -> Call -> Care',
    phrases: [
      { situation: 'Check - finding out what is wrong', phrase: 'Do you have any pain? / How are you feeling?', meaning: 'Assessing the passenger\'s condition', example: 'Do you have any pain?' },
      { situation: 'Call - describing and getting help', phrase: 'I need some help. / Get the first aid kit immediately.', meaning: 'Alerting colleagues and requesting equipment', example: 'Get the first aid kit immediately.' },
      { situation: 'Care - taking action', phrase: "I'm going to clean up the wound and put a dressing over it.", meaning: 'Explaining the care being given', example: "I'm going to clean up the wound and put a dressing over it." },
    ],
  },
  airlineVocabulary: [{
    category: 'Emergency Medical Kit',
    terms: [
      { term: 'Stethoscope', definition: 'An instrument used to listen to the heart and lungs', example: 'The doctor used a stethoscope to check his breathing.' },
      { term: 'Syringes', definition: 'Instruments used to inject medication', example: 'Syringes are kept in the medical kit.' },
      { term: 'Dressings', definition: 'Coverings used to protect a wound', example: 'She applied a dressing to the cut.' },
      { term: 'Gloves', definition: 'Worn to protect hands when giving first aid', example: 'Always wear gloves when treating a wound.' },
      { term: 'Automatic external defibrillator (AED)', definition: 'A device that can restart the heart in an emergency', example: 'They used the AED on the passenger.' },
      { term: 'Bandages', definition: 'Strips of material used to bind a wound', example: 'The bandage was wrapped around his arm.' },
      { term: 'Antiseptic wipes', definition: 'Wipes used to clean a wound and prevent infection', example: 'Clean the cut with antiseptic wipes first.' },
    ],
  }],
  professionalExpressions: [
    { situation: 'Reassuring an injured passenger', expression: "You've had a nasty bump, but you're going to be fine.", alternativeExpressions: ["That looks worse than it is, don't worry.", "We'll take good care of you."] },
    { situation: 'Asking someone to help temporarily', expression: 'Could you please stay with her for a moment while I get help?', alternativeExpressions: ['Would you mind keeping an eye on her while I get assistance?', 'Could you wait here with her, just for a minute?'] },
  ],
  pronunciation: [
    { id: 'pron-1', text: "What's happened?", audioUrl: `${A6A}/pronunciation.wav`, durationSeconds: 2 },
  ],
  vocabulary: [
    { word: 'Dressing', definition: 'A covering placed over a wound to protect it' },
    { word: 'Compress', definition: 'A pad pressed against a wound to control bleeding or swelling' },
    { word: 'Dizzy', definition: 'Feeling unsteady, as if everything is spinning' },
    { word: 'Bump', definition: 'A swelling caused by a knock or blow' },
    { word: 'Stethoscope', definition: 'An instrument used to listen to the heart and lungs' },
    { word: 'Antiseptic', definition: 'A substance that prevents infection' },
  ],
  grammar: [
    {
      rule: "Question intonation: open questions ('What's happened?', 'How are you feeling?') fall at the end; yes/no questions ('Are you all right?', 'Do you have any pain?') rise at the end",
      examples: [
        { sentence: "What's happened? (falling)", audioUrl: `${A6A}/cc-3.wav` },
        { sentence: 'Do you have any pain? (rising)', audioUrl: `${A6A}/cc-1.wav` },
        { sentence: 'Can you hold this compress against your forehead? (rising)', audioUrl: `${A6A}/cc-8.wav` },
      ],
    },
  ],
  exercises: [
    {
      id: 'ex-1', type: 'speaking', points: 15,
      question: 'What kinds of accident requiring medical attention can happen to both cabin crew and passengers on a flight? Make a list with a partner. What is the worst on-board accident you have seen or experienced? What first aid are you qualified to carry out, and what are you not qualified to do?',
    },
    {
      id: 'ex-2', type: 'multiple-choice', points: 10,
      question: 'Who has been injured?',
      options: [
        { id: 'o1', text: 'A female passenger', isCorrect: true },
        { id: 'o2', text: 'A male passenger', isCorrect: false },
        { id: 'o3', text: 'Hemal', isCorrect: false },
        { id: 'o4', text: 'Leila', isCorrect: false },
      ],
    },
    {
      id: 'ex-3', type: 'multiple-choice', points: 10,
      question: 'What kind of injury does the person have?',
      options: [
        { id: 'o1', text: 'A bump and a small cut on her head', isCorrect: true },
        { id: 'o2', text: 'A broken arm', isCorrect: false },
        { id: 'o3', text: 'A sprained ankle', isCorrect: false },
        { id: 'o4', text: 'Burns', isCorrect: false },
      ],
    },
    {
      id: 'ex-4', type: 'multiple-choice', points: 10,
      question: 'What caused the accident?',
      options: [
        { id: 'o1', text: 'A laptop fell from the overhead locker', isCorrect: true },
        { id: 'o2', text: 'She tripped in the aisle', isCorrect: false },
        { id: 'o3', text: 'Turbulence threw her from her seat', isCorrect: false },
        { id: 'o4', text: 'She hit her head on the tray table', isCorrect: false },
      ],
    },
    {
      id: 'ex-5', type: 'multiple-choice', points: 10,
      question: 'What does Leila ask the male passenger to do?',
      options: [
        { id: 'o1', text: 'Stay with the injured lady while she gets help', isCorrect: true },
        { id: 'o2', text: 'Fetch the first aid kit', isCorrect: false },
        { id: 'o3', text: 'Move to another seat', isCorrect: false },
        { id: 'o4', text: 'Call the captain', isCorrect: false },
      ],
    },
    {
      id: 'ex-6', type: 'multiple-choice', points: 10,
      question: 'What does Leila ask Hemal to do?',
      options: [
        { id: 'o1', text: 'Bring the first aid kit', isCorrect: true },
        { id: 'o2', text: 'Ask if there is a doctor on board', isCorrect: false },
        { id: 'o3', text: 'Inform the captain', isCorrect: false },
        { id: 'o4', text: 'Serve the other passengers', isCorrect: false },
      ],
    },
    {
      id: 'ex-7', type: 'multiple-choice', points: 10,
      question: 'Who is the injured passenger travelling with?',
      options: [
        { id: 'o1', text: 'Her husband', isCorrect: true },
        { id: 'o2', text: 'Alone', isCorrect: false },
        { id: 'o3', text: 'A tour group', isCorrect: false },
        { id: 'o4', text: 'Her children', isCorrect: false },
      ],
    },
    {
      id: 'ex-8', type: 'multiple-choice', points: 10,
      question: 'How is the injured passenger feeling?',
      options: [
        { id: 'o1', text: 'She was a bit dizzy but is fine now', isCorrect: true },
        { id: 'o2', text: 'She has fainted', isCorrect: false },
        { id: 'o3', text: 'She is in severe pain', isCorrect: false },
        { id: 'o4', text: 'She feels completely normal, no symptoms', isCorrect: false },
      ],
    },
    {
      id: 'ex-9', type: 'multiple-choice', points: 10,
      question: 'What does Leila offer her?',
      options: [
        { id: 'o1', text: 'A glass of water', isCorrect: true },
        { id: 'o2', text: 'A blanket', isCorrect: false },
        { id: 'o3', text: 'Painkillers', isCorrect: false },
        { id: 'o4', text: 'A seat upgrade', isCorrect: false },
      ],
    },
    {
      id: 'ex-10', type: 'multiple-choice', points: 10,
      question: "What has the injured passenger got on her forehead?",
      options: [
        { id: 'o1', text: 'A small cut', isCorrect: true },
        { id: 'o2', text: 'A burn', isCorrect: false },
        { id: 'o3', text: 'Nothing visible', isCorrect: false },
        { id: 'o4', text: 'A rash', isCorrect: false },
      ],
    },
    {
      id: 'ex-11', type: 'multiple-choice', points: 10,
      question: 'What does Leila say she is going to do?',
      options: [
        { id: 'o1', text: 'Clean the wound and put a dressing over it', isCorrect: true },
        { id: 'o2', text: 'Call for a doctor immediately', isCorrect: false },
        { id: 'o3', text: 'Move the passenger to another seat', isCorrect: false },
        { id: 'o4', text: 'Give her painkillers', isCorrect: false },
      ],
    },
    {
      id: 'ex-12', type: 'multiple-choice', points: 10,
      question: 'What two things does Leila want the injured passenger to do?',
      options: [
        { id: 'o1', text: 'Hold the compress against her forehead and stay still', isCorrect: true },
        { id: 'o2', text: 'Stand up and walk around', isCorrect: false },
        { id: 'o3', text: 'Drink water quickly and sleep', isCorrect: false },
        { id: 'o4', text: 'Remove her seatbelt and lie down', isCorrect: false },
      ],
    },
    {
      id: 'ex-13', type: 'fill-blank', points: 10,
      question: "This lady's been _________. She's bleeding.",
      correctAnswer: 'hurt',
    },
    {
      id: 'ex-14', type: 'fill-blank', points: 10,
      question: 'A laptop _________ onto her head.',
      correctAnswer: 'fell',
    },
    {
      id: 'ex-15', type: 'fill-blank', points: 10,
      question: "You've had a nasty _________ on your head.",
      correctAnswer: 'bump',
    },
    {
      id: 'ex-16', type: 'fill-blank', points: 10,
      question: "I'll put a _________ over it.",
      correctAnswer: 'dressing',
    },
    {
      id: 'ex-17', type: 'fill-blank', points: 10,
      question: 'I was a bit _________, but I\'m fine now.',
      correctAnswer: 'dizzy',
    },
    {
      id: 'ex-18', type: 'speaking', points: 15,
      question: "Practise the Check, Call, Care questions with correct intonation: 'What's happened?', 'Are you all right?', 'Can you hear me?', 'How are you feeling?', 'Do you have any pain?', 'Do you feel well enough to sit up?'",
    },
    {
      id: 'ex-19', type: 'speaking', points: 15,
      question: 'Label the items in the emergency medical kit: stethoscope, syringes, dressings, gloves, aspirin, CPR mask, AED, bandages, oxygen, antiseptic wipes. Describe what each is used for.',
    },
  ],
  quiz: {
    id: 'quiz-6-1',
    title: 'Dealing with an On-Board Accident Quiz',
    passingScore: 70,
    exercises: [
      {
        id: 'q-1', type: 'multiple-choice', points: 20,
        question: 'What is the correct order of the Check, Call, Care model?',
        options: [
          { id: 'o1', text: 'Check, then Call, then Care', isCorrect: true },
          { id: 'o2', text: 'Call, then Check, then Care', isCorrect: false },
          { id: 'o3', text: 'Care, then Check, then Call', isCorrect: false },
          { id: 'o4', text: 'Check, then Care, then Call', isCorrect: false },
        ],
      },
      {
        id: 'q-2', type: 'multiple-choice', points: 20,
        question: 'What caused the passenger\'s injury?',
        options: [
          { id: 'o1', text: 'A falling laptop', isCorrect: true },
          { id: 'o2', text: 'A hot drink spill', isCorrect: false },
          { id: 'o3', text: 'Turbulence', isCorrect: false },
          { id: 'o4', text: 'A trolley collision', isCorrect: false },
        ],
      },
      {
        id: 'q-3', type: 'multiple-choice', points: 20,
        question: 'What device can restart a heart in an emergency?',
        options: [
          { id: 'o1', text: 'AED (automatic external defibrillator)', isCorrect: true },
          { id: 'o2', text: 'Stethoscope', isCorrect: false },
          { id: 'o3', text: 'Syringe', isCorrect: false },
          { id: 'o4', text: 'CPR mask', isCorrect: false },
        ],
      },
      {
        id: 'q-4', type: 'multiple-choice', points: 20,
        question: 'What does a rising intonation usually signal in a question?',
        options: [
          { id: 'o1', text: 'A yes/no question', isCorrect: true },
          { id: 'o2', text: 'An open (wh-) question', isCorrect: false },
        ],
      },
      {
        id: 'q-5', type: 'multiple-choice', points: 20,
        question: 'What is a "compress" used for?',
        options: [
          { id: 'o1', text: 'Pressing against a wound to control bleeding or swelling', isCorrect: true },
          { id: 'o2', text: 'Measuring blood pressure', isCorrect: false },
          { id: 'o3', text: 'Cleaning a wound', isCorrect: false },
          { id: 'o4', text: 'Listening to the heart', isCorrect: false },
        ],
      },
    ],
  },
  flashcards: [
    { id: 'fc-1', front: 'Dressing', back: 'A covering placed over a wound to protect it' },
    { id: 'fc-2', front: 'Compress', back: 'A pad pressed against a wound to control bleeding or swelling' },
    { id: 'fc-3', front: 'AED', back: 'Automatic external defibrillator - restarts the heart in an emergency' },
    { id: 'fc-4', front: 'Stethoscope', back: 'An instrument used to listen to the heart and lungs' },
  ],
  review: {
    keyPoints: [
      'Check, Call, Care is the standard response to any on-board medical problem',
      "Open questions fall in intonation; yes/no questions rise",
      'Always ask a nearby passenger for temporary help while getting equipment',
      'Explain each step of care to reassure the passenger',
      'Know the contents of the emergency medical kit and what each item is for',
    ],
    commonMistakes: [
      { mistake: 'Rushing straight to "care" without checking or calling first', correction: 'Always check the situation and call for help before acting', explanation: 'This ensures you have the right equipment and support' },
      { mistake: 'Not explaining what you are doing to the injured passenger', correction: 'Narrate your actions clearly, e.g. "I\'m going to clean the wound now."', explanation: 'This reduces anxiety and builds trust' },
    ],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

// ============================================================
// Unit 6, Lesson 2: Dealing with a Serious Medical Incident
// Giving instructions to crew
// ============================================================
const A6B = '/audio/unit-6/lesson-2';

const SERIOUS_INCIDENT_LESSON: any = {
  id: 'lesson-6-2',
  unitId: 'unit-6',
  title: 'Dealing with a Serious Medical Incident',
  description: 'Giving clear instructions to crew during a major medical incident, and diverting the flight',
  icon: '🚑',
  icaoLevel: 4,
  category: 'cabin-crew',
  difficulty: 'upper-intermediate',
  xpReward: 180,
  estimatedDurationMinutes: 50,
  locked: false,
  order: 2,
  objectives: [
    { id: 'obj-1', description: 'Give clear, urgent instructions to fellow crew members', type: 'speaking' },
    { id: 'obj-2', description: 'Understand a captain-purser exchange about a diversion', type: 'listening' },
    { id: 'obj-3', description: 'Understand a flight diversion announcement', type: 'listening' },
  ],
  scenario: {
    id: 'scenario-serious-incident',
    title: 'A Suspected Heart Attack',
    description: 'Flight attendants Rani and Bilal respond to a passenger who has collapsed on a flight from Delhi to Colombo, and the purser informs the captain.',
    context: 'Cabin, major medical emergency, flight from Delhi to Colombo',
    audioSegments: [
      { id: 'd1-01', text: 'Rani: Sir? Sir, can you hear me?', audioUrl: `${A6B}/d1-01-rani.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'd1-02', text: "Rani: I think he's had a heart attack. He's not breathing!", audioUrl: `${A6B}/d1-02-rani.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'd1-03', text: 'Rani: Bilal, help me get him on the floor.', audioUrl: `${A6B}/d1-03-rani.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'd1-04', text: 'Bilal: OK, got him.', audioUrl: `${A6B}/d1-04-bilal.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'd1-05', text: 'Rani: Bilal, grab the oxygen.', audioUrl: `${A6B}/d1-05-rani.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'd1-06', text: 'Bilal: On it.', audioUrl: `${A6B}/d1-06-bilal.wav`, durationSeconds: 1, speaker: 'crew' },
      { id: 'd1-07', text: 'Rani: Help me get the mask over his head.', audioUrl: `${A6B}/d1-07-rani.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'd1-08', text: "Rani: Don't worry, we're taking care of him.", audioUrl: `${A6B}/d1-08-rani.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'd1-09', text: 'Rani: We administered CPR for two minutes, but his pulse is very weak.', audioUrl: `${A6B}/d1-09-rani.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'd1-10', text: 'Wife: Is he going to be alright? He takes pills for his heart...', audioUrl: `${A6B}/d1-10-wife.wav`, durationSeconds: 4, speaker: 'passenger' },
      { id: 'anton-1', text: "Anton: Captain, we have a passenger who's had a suspected heart attack. The doctor on board says it looks like a cardiac arrest, and he's in a serious condition.", audioUrl: `${A6B}/anton-captain-1.wav`, durationSeconds: 6, speaker: 'crew' },
      { id: 'captain-1', text: 'Captain: Is the passenger in danger?', audioUrl: `${A6B}/captain-1.wav`, durationSeconds: 2, speaker: 'pilot' },
      { id: 'anton-2', text: 'Anton: Yes, the doctor says he needs immediate hospitalization.', audioUrl: `${A6B}/anton-captain-2.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'captain-2', text: "Captain: Understood. I'll divert to Mumbai, the closest international airport.", audioUrl: `${A6B}/captain-2.wav`, durationSeconds: 4, speaker: 'pilot' },
    ],
    vocabulary: [
      { word: 'Cardiac arrest', definition: 'When the heart suddenly stops beating' },
      { word: 'Administer CPR', definition: 'To perform cardiopulmonary resuscitation' },
      { word: 'Divert', definition: 'To change a flight\'s route, usually to land somewhere unplanned' },
      { word: 'Hospitalization', definition: 'Admission to hospital for treatment' },
    ],
  },
  theory: {
    title: 'Giving Instructions to Crew',
    content: 'In a serious medical incident, cabin crew must give clear, short instructions to each other, get a doctor if possible, and keep the captain informed so a decision can be made about diverting the flight.',
    audioExplanation: {
      id: 'theory-audio',
      text: 'Explanation of giving instructions to crew',
      audioUrl: `${A6B}/theory-explanation.wav`,
      durationSeconds: 20,
      speaker: 'instructor',
    },
  },
  icaoPhraseoology: STANDARD_PHRASEOLOGY,
  cabinCrewPhraseoology: {
    category: 'Giving Instructions to Crew',
    phrases: [
      { situation: 'Assigning a task', phrase: 'Bilal, grab the oxygen.', meaning: 'Short, direct instruction using a name and imperative', example: 'Bilal, grab the oxygen.' },
      { situation: 'Relaying a message', phrase: 'Get Safiya to call Anton.', meaning: 'Instructing one crew member to pass a message via another', example: 'Get Safiya to call Anton.' },
      { situation: 'Asking for physical help', phrase: 'Help me get the mask over his head.', meaning: 'Direct request for physical assistance', example: 'Help me get the mask over his head.' },
      { situation: 'Escalating to the flight deck', phrase: 'Tell the captain. / Make an announcement immediately.', meaning: 'Urgent instructions to inform the captain or passengers', example: 'Tell the captain.' },
    ],
  },
  airlineVocabulary: [{
    category: 'Serious Medical Incidents',
    terms: [
      { term: 'Cardiac arrest', definition: 'When the heart suddenly stops beating', example: 'The doctor confirmed it was a cardiac arrest.' },
      { term: 'CPR', definition: 'Cardiopulmonary resuscitation - chest compressions and rescue breathing', example: 'We administered CPR for two minutes.' },
      { term: 'Divert', definition: "To change a flight's route, usually to land somewhere unplanned", example: "I'll divert to Mumbai." },
      { term: 'Purser', definition: 'The senior cabin crew member in charge of the flight', example: 'Anton, the purser, informed the captain.' },
    ],
  }],
  professionalExpressions: [
    { situation: 'Reassuring a worried family member', expression: "Don't worry, we're taking care of him.", alternativeExpressions: ["We're doing everything we can.", 'He is in good hands.'] },
    { situation: 'Explaining a diversion to passengers', expression: 'We need to divert to the closest airport as soon as possible.', alternativeExpressions: ['We will be landing at an alternative airport shortly.', 'For medical reasons, we are changing our destination.'] },
  ],
  pronunciation: [
    { id: 'pron-1', text: 'Bilal, grab the oxygen.', audioUrl: `${A6B}/pronunciation.wav`, durationSeconds: 2 },
  ],
  vocabulary: [
    { word: 'Cardiac arrest', definition: 'When the heart suddenly stops beating' },
    { word: 'Administer CPR', definition: 'To perform cardiopulmonary resuscitation' },
    { word: 'Divert', definition: "To change a flight's route, usually to land somewhere unplanned" },
    { word: 'Hospitalization', definition: 'Admission to hospital for treatment' },
    { word: 'Purser', definition: 'The senior cabin crew member in charge of the flight' },
  ],
  grammar: [
    {
      rule: 'Imperative instructions with a name - addressing a colleague by name before a short command makes urgent instructions clear',
      examples: [
        { sentence: 'Bilal, grab the oxygen.', audioUrl: `${A6B}/gi-1.wav` },
        { sentence: 'Get Safiya to call Anton.', audioUrl: `${A6B}/gi-2.wav` },
        { sentence: 'Tell the captain.', audioUrl: `${A6B}/gi-4.wav` },
      ],
    },
  ],
  exercises: [
    {
      id: 'ex-1', type: 'speaking', points: 15,
      question: 'Apart from accidental injuries, what other kinds of medical problem have you had to deal with on flights? Make a list of major and minor incidents. What is the most serious on-board medical incident you have had to deal with?',
    },
    {
      id: 'ex-2', type: 'multiple-choice', points: 10,
      question: 'True or False: The sick passenger is unconscious.',
      options: [
        { id: 'o1', text: 'True', isCorrect: true },
        { id: 'o2', text: 'False', isCorrect: false },
      ],
    },
    {
      id: 'ex-3', type: 'multiple-choice', points: 10,
      question: 'True or False: The sick passenger is travelling alone.',
      options: [
        { id: 'o1', text: 'True', isCorrect: false },
        { id: 'o2', text: 'False', isCorrect: true, explanation: 'He is travelling with his wife.' },
      ],
    },
    {
      id: 'ex-4', type: 'multiple-choice', points: 10,
      question: 'True or False: Rani wants to put the sick passenger in a seat.',
      options: [
        { id: 'o1', text: 'True', isCorrect: false },
        { id: 'o2', text: 'False', isCorrect: true, explanation: 'She wants him on the floor to give CPR.' },
      ],
    },
    {
      id: 'ex-5', type: 'multiple-choice', points: 10,
      question: 'True or False: Rani and Bilal give the sick passenger oxygen.',
      options: [
        { id: 'o1', text: 'True', isCorrect: true },
        { id: 'o2', text: 'False', isCorrect: false },
      ],
    },
    {
      id: 'ex-6', type: 'multiple-choice', points: 10,
      question: 'True or False: Rani and Bilal can deal with the situation themselves.',
      options: [
        { id: 'o1', text: 'True', isCorrect: false },
        { id: 'o2', text: 'False', isCorrect: true, explanation: 'They need a doctor and inform the purser and captain.' },
      ],
    },
    {
      id: 'ex-7', type: 'multiple-choice', points: 10,
      question: 'True or False: The sick passenger is on medication.',
      options: [
        { id: 'o1', text: 'True', isCorrect: true, explanation: 'His wife says he takes pills for his heart.' },
        { id: 'o2', text: 'False', isCorrect: false },
      ],
    },
    {
      id: 'ex-8', type: 'multiple-choice', points: 10,
      question: 'True or False: There is a doctor on board.',
      options: [
        { id: 'o1', text: 'True', isCorrect: true },
        { id: 'o2', text: 'False', isCorrect: false },
      ],
    },
    {
      id: 'ex-9', type: 'fill-blank', points: 10,
      question: 'Sir, can you _________ me?',
      audio: { id: 'd1-01-audio', text: 'Checking on the passenger', audioUrl: `${A6B}/d1-01-rani.wav`, durationSeconds: 3, speaker: 'crew' },
      correctAnswer: 'hear',
    },
    {
      id: 'ex-10', type: 'fill-blank', points: 10,
      question: "I think he's had a _________ attack.",
      correctAnswer: 'heart',
    },
    {
      id: 'ex-11', type: 'fill-blank', points: 10,
      question: "He's not _________.",
      correctAnswer: 'breathing',
    },
    {
      id: 'ex-12', type: 'fill-blank', points: 10,
      question: "Let's _________ him on the floor.",
      correctAnswer: 'get',
    },
    {
      id: 'ex-13', type: 'fill-blank', points: 10,
      question: 'Help me get the _________ over his head.',
      correctAnswer: 'mask',
    },
    {
      id: 'ex-14', type: 'fill-blank', points: 10,
      question: "We're taking _________ of him.",
      correctAnswer: 'care',
    },
    {
      id: 'ex-15', type: 'fill-blank', points: 10,
      question: 'We _________ CPR for two minutes.',
      correctAnswer: 'administered',
    },
    {
      id: 'ex-16', type: 'fill-blank', points: 10,
      question: 'His _________ is very weak.',
      correctAnswer: 'pulse',
    },
    {
      id: 'ex-17', type: 'speaking', points: 15,
      question: 'How well did Rani and Bilal follow the Check, Call, Care procedure? Discuss with a partner.',
    },
    {
      id: 'ex-18', type: 'multiple-choice', points: 15,
      question: "What's the doctor's diagnosis?",
      options: [
        { id: 'o1', text: 'A cardiac arrest', isCorrect: true },
        { id: 'o2', text: 'A panic attack', isCorrect: false },
        { id: 'o3', text: 'Food poisoning', isCorrect: false },
        { id: 'o4', text: 'A fainting spell', isCorrect: false },
      ],
    },
    {
      id: 'ex-19', type: 'multiple-choice', points: 15,
      question: 'Is the passenger in danger?',
      options: [
        { id: 'o1', text: 'Yes, he needs immediate hospitalization', isCorrect: true },
        { id: 'o2', text: 'No, he is stable', isCorrect: false },
      ],
    },
    {
      id: 'ex-20', type: 'multiple-choice', points: 15,
      question: 'What action does the captain say he will take?',
      options: [
        { id: 'o1', text: 'Divert to Mumbai, the closest international airport', isCorrect: true },
        { id: 'o2', text: 'Continue to Colombo as planned', isCorrect: false },
        { id: 'o3', text: 'Turn back to Delhi', isCorrect: false },
        { id: 'o4', text: 'Wait for further instructions from the doctor', isCorrect: false },
      ],
    },
    {
      id: 'ex-21', type: 'fill-blank', points: 10,
      question: 'Ladies and gentlemen, this is an _________ announcement.',
      audio: { id: 'announcement-audio', text: 'Captain announcement', audioUrl: `${A6B}/announcement.wav`, durationSeconds: 25, speaker: 'pilot' },
      correctAnswer: 'important',
    },
    {
      id: 'ex-22', type: 'fill-blank', points: 10,
      question: 'We need to _________ to Mumbai, the closest airport, as soon as possible.',
      correctAnswer: 'divert',
    },
    {
      id: 'ex-23', type: 'fill-blank', points: 10,
      question: 'The flight attendants will now _________ the cabin for landing.',
      correctAnswer: 'prepare',
    },
    {
      id: 'ex-24', type: 'fill-blank', points: 10,
      question: 'I do apologize for any _________ this diversion may cause.',
      correctAnswer: 'inconvenience',
    },
    {
      id: 'ex-25', type: 'speaking', points: 20,
      question: "Role-play a medical emergency in groups of four - two flight attendants, two passengers. Follow this pattern: A: What's happened? B: It's my husband, he's feeling ill. C: Are you on any medication, sir? D: Yes, I take pills for my heart... Then swap roles.",
    },
  ],
  quiz: {
    id: 'quiz-6-2',
    title: 'Serious Medical Incident Quiz',
    passingScore: 70,
    exercises: [
      {
        id: 'q-1', type: 'multiple-choice', points: 20,
        question: 'Which flight are Rani and Bilal working on?',
        options: [
          { id: 'o1', text: 'Delhi to Colombo', isCorrect: true },
          { id: 'o2', text: 'Colombo to Delhi', isCorrect: false },
          { id: 'o3', text: 'Mumbai to Delhi', isCorrect: false },
          { id: 'o4', text: 'Tokyo to Paris', isCorrect: false },
        ],
      },
      {
        id: 'q-2', type: 'multiple-choice', points: 20,
        question: 'Where does the captain decide to divert to?',
        options: [
          { id: 'o1', text: 'Mumbai', isCorrect: true },
          { id: 'o2', text: 'Delhi', isCorrect: false },
          { id: 'o3', text: 'Colombo', isCorrect: false },
          { id: 'o4', text: 'Chennai', isCorrect: false },
        ],
      },
      {
        id: 'q-3', type: 'multiple-choice', points: 20,
        question: 'Who informs the captain about the medical emergency?',
        options: [
          { id: 'o1', text: 'Anton, the purser', isCorrect: true },
          { id: 'o2', text: 'Rani', isCorrect: false },
          { id: 'o3', text: 'Bilal', isCorrect: false },
          { id: 'o4', text: "The passenger's wife", isCorrect: false },
        ],
      },
      {
        id: 'q-4', type: 'multiple-choice', points: 20,
        question: 'What does the passenger take pills for?',
        options: [
          { id: 'o1', text: 'His heart', isCorrect: true },
          { id: 'o2', text: 'Diabetes', isCorrect: false },
          { id: 'o3', text: 'High blood pressure only', isCorrect: false },
          { id: 'o4', text: 'Nothing, he takes no medication', isCorrect: false },
        ],
      },
      {
        id: 'q-5', type: 'multiple-choice', points: 20,
        question: 'How long do Rani and Bilal administer CPR before the pulse check?',
        options: [
          { id: 'o1', text: 'Two minutes', isCorrect: true },
          { id: 'o2', text: 'Thirty seconds', isCorrect: false },
          { id: 'o3', text: 'Ten minutes', isCorrect: false },
          { id: 'o4', text: 'One hour', isCorrect: false },
        ],
      },
    ],
  },
  flashcards: [
    { id: 'fc-1', front: 'Cardiac arrest', back: 'When the heart suddenly stops beating' },
    { id: 'fc-2', front: 'Divert', back: "To change a flight's route, usually to land somewhere unplanned" },
    { id: 'fc-3', front: 'Purser', back: 'The senior cabin crew member in charge of the flight' },
    { id: 'fc-4', front: 'Hospitalization', back: 'Admission to hospital for treatment' },
  ],
  review: {
    keyPoints: [
      'Give short, direct instructions using a colleague\'s name plus an imperative',
      'Escalate quickly: inform the purser, who informs the captain',
      'The captain decides whether to divert based on medical advice',
      'Diversion announcements should apologize, explain, and reassure passengers',
      'Stay calm and reassure family members even under pressure',
    ],
    commonMistakes: [
      { mistake: 'Giving vague instructions during an emergency', correction: "Use a name and a short, clear command, e.g. 'Bilal, grab the oxygen.'", explanation: 'Clarity saves time in a critical situation' },
      { mistake: 'Delaying informing the captain', correction: 'Escalate serious incidents to the purser and captain immediately', explanation: 'The captain needs time to plan a diversion if necessary' },
    ],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

// ============================================================
// Unit 6, Lesson 3: Reporting a Medical Incident
// Talking about the past; linking words
// + Case Study: Is There a Doctor on Board?
// ============================================================
const A6C = '/audio/unit-6/lesson-3';

const REPORTING_INCIDENT_LESSON: any = {
  id: 'lesson-6-3',
  unitId: 'unit-6',
  title: 'Reporting a Medical Incident',
  description: 'Talking about a past incident, linking words, and the case study: Is There a Doctor on Board?',
  icon: '📋',
  icaoLevel: 4,
  category: 'cabin-crew',
  difficulty: 'upper-intermediate',
  xpReward: 200,
  estimatedDurationMinutes: 60,
  locked: false,
  order: 3,
  objectives: [
    { id: 'obj-1', description: 'Report a past medical incident using correct past tense forms', type: 'speaking' },
    { id: 'obj-2', description: 'Use linking words to sequence events', type: 'grammar' },
    { id: 'obj-3', description: 'Discuss the experience of an on-board doctor', type: 'reading' },
  ],
  scenario: {
    id: 'scenario-reporting-incident',
    title: 'Telling a Colleague What Happened',
    description: 'Two flight attendants discuss the medical incident from yesterday\'s flight.',
    context: 'Crew room, after the flight',
    audioSegments: [
      { id: 'd1-01', text: 'Crew member A: Did you hear about our flight yesterday?', audioUrl: `${A6C}/d1-01.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'd1-02', text: 'Crew member B: No, what happened?', audioUrl: `${A6C}/d1-02.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'd1-03', text: 'Crew member A: Well...', audioUrl: `${A6C}/d1-03.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'd1-04', text: 'Crew member B: Really!', audioUrl: `${A6C}/d1-04.wav`, durationSeconds: 2, speaker: 'crew' },
    ],
    vocabulary: [
      { word: 'Collapsed', definition: 'Fell down suddenly, often due to illness' },
      { word: 'Administered', definition: 'Gave or applied, e.g. medication or treatment' },
      { word: 'Recovered', definition: 'Got better after being ill or injured' },
    ],
  },
  theory: {
    title: 'Talking About the Past',
    content: 'When reporting a past incident, cabin crew describe what happened using past tense verbs, and use linking words like "at first", "then", and "eventually" to put events in order clearly.',
    audioExplanation: {
      id: 'theory-audio',
      text: 'Explanation of talking about the past',
      audioUrl: `${A6C}/theory-explanation.wav`,
      durationSeconds: 20,
      speaker: 'instructor',
    },
  },
  icaoPhraseoology: STANDARD_PHRASEOLOGY,
  cabinCrewPhraseoology: {
    category: 'Reporting a Past Incident',
    phrases: [
      { situation: 'Asking what happened', phrase: 'What happened? / What was the problem?', meaning: 'Asking a colleague to describe a past incident', example: 'What happened?' },
      { situation: 'Asking what action was taken', phrase: 'What did you do?', meaning: 'Asking about the response to the incident', example: 'What did you do?' },
      { situation: 'Describing the outcome', phrase: 'We gave him oxygen and gave first aid.', meaning: 'Reporting the actions taken', example: 'We gave him oxygen and gave first aid.' },
    ],
  },
  airlineVocabulary: [{
    category: 'Linking Words',
    terms: [
      { term: 'At the beginning / At first', definition: 'Used to introduce the start of a sequence of events', example: "At first the turbulence wasn't too bad." },
      { term: 'Soon after / Then', definition: 'Used to show what happened next', example: 'Soon after, it started to get worse.' },
      { term: 'In the end / Eventually', definition: 'Used to introduce the final result', example: 'In the end, we had to stop the meals service.' },
      { term: 'First... then / after that', definition: 'Used to sequence two connected actions', example: 'First we fetched the first aid kit, and then we cleaned the wound.' },
      { term: 'Finally', definition: 'Used to introduce the last step', example: 'Finally we put a dressing on it.' },
    ],
  }],
  professionalExpressions: [
    { situation: 'Starting an incident report to a colleague', expression: 'Did you hear about our flight yesterday?', alternativeExpressions: ['You won\'t believe what happened on my flight.', 'Something happened on my last flight...'] },
    { situation: 'Reacting with interest', expression: 'Really! What happened?', alternativeExpressions: ['No way, tell me more.', 'Oh no, go on...'] },
  ],
  pronunciation: [
    { id: 'pron-1', text: 'The passenger collapsed during the flight.', audioUrl: `${A6C}/pronunciation.wav`, durationSeconds: 3 },
  ],
  vocabulary: [
    { word: 'Collapsed', definition: 'Fell down suddenly, often due to illness' },
    { word: 'Administered', definition: 'Gave or applied, e.g. medication or treatment' },
    { word: 'Recovered', definition: 'Got better after being ill or injured' },
    { word: 'Diagnosis', definition: 'A doctor\'s identification of what is wrong' },
    { word: 'Anxious', definition: 'Worried or nervous' },
  ],
  grammar: [
    {
      rule: 'Past tense -ed endings are pronounced three ways: /t/ after unvoiced sounds (checked, stopped), /d/ after voiced sounds (happened, arrived), and /ɪd/ after t/d sounds (wanted, decided)',
      examples: [
        { sentence: 'wanted, decided, reported (/ɪd/)', audioUrl: `${A6C}/linking-1.wav` },
        { sentence: 'collapsed, stopped, asked (/t/)', audioUrl: `${A6C}/linking-2.wav` },
        { sentence: 'happened, arrived, suffered (/d/)', audioUrl: `${A6C}/linking-3.wav` },
      ],
    },
  ],
  exercises: [
    {
      id: 'ex-1', type: 'speaking', points: 15,
      question: 'With a partner, role-play telling a colleague what happened during the serious medical incident from the previous lesson. Start with: "Did you hear about our flight yesterday?"',
    },
    {
      id: 'ex-2', type: 'multiple-choice', points: 10,
      question: 'Which sound does the -ed ending make in "wanted"?',
      options: [
        { id: 'o1', text: '/ɪd/ (extra syllable)', isCorrect: true },
        { id: 'o2', text: '/t/', isCorrect: false },
        { id: 'o3', text: '/d/', isCorrect: false },
      ],
      hint: 'The base verb ends in a /t/ sound, so an extra syllable is added.',
    },
    {
      id: 'ex-3', type: 'multiple-choice', points: 10,
      question: 'Which sound does the -ed ending make in "decided"?',
      options: [
        { id: 'o1', text: '/ɪd/ (extra syllable)', isCorrect: true },
        { id: 'o2', text: '/t/', isCorrect: false },
        { id: 'o3', text: '/d/', isCorrect: false },
      ],
    },
    {
      id: 'ex-4', type: 'multiple-choice', points: 10,
      question: 'Which sound does the -ed ending make in "reported"?',
      options: [
        { id: 'o1', text: '/ɪd/ (extra syllable)', isCorrect: true },
        { id: 'o2', text: '/t/', isCorrect: false },
        { id: 'o3', text: '/d/', isCorrect: false },
      ],
    },
    {
      id: 'ex-5', type: 'multiple-choice', points: 10,
      question: 'Which sound does the -ed ending make in "collapsed"?',
      options: [
        { id: 'o1', text: '/t/', isCorrect: true },
        { id: 'o2', text: '/ɪd/ (extra syllable)', isCorrect: false },
        { id: 'o3', text: '/d/', isCorrect: false },
      ],
      hint: '"Collapse" ends in an unvoiced /s/ sound.',
    },
    {
      id: 'ex-6', type: 'multiple-choice', points: 10,
      question: 'Which sound does the -ed ending make in "stopped"?',
      options: [
        { id: 'o1', text: '/t/', isCorrect: true },
        { id: 'o2', text: '/ɪd/ (extra syllable)', isCorrect: false },
        { id: 'o3', text: '/d/', isCorrect: false },
      ],
    },
    {
      id: 'ex-7', type: 'multiple-choice', points: 10,
      question: 'Which sound does the -ed ending make in "asked"?',
      options: [
        { id: 'o1', text: '/t/', isCorrect: true },
        { id: 'o2', text: '/ɪd/ (extra syllable)', isCorrect: false },
        { id: 'o3', text: '/d/', isCorrect: false },
      ],
    },
    {
      id: 'ex-8', type: 'multiple-choice', points: 10,
      question: 'Which sound does the -ed ending make in "happened"?',
      options: [
        { id: 'o1', text: '/d/', isCorrect: true },
        { id: 'o2', text: '/ɪd/ (extra syllable)', isCorrect: false },
        { id: 'o3', text: '/t/', isCorrect: false },
      ],
      hint: '"Happen" ends in a voiced /n/ sound.',
    },
    {
      id: 'ex-9', type: 'multiple-choice', points: 10,
      question: 'Which sound does the -ed ending make in "arrived"?',
      options: [
        { id: 'o1', text: '/d/', isCorrect: true },
        { id: 'o2', text: '/ɪd/ (extra syllable)', isCorrect: false },
        { id: 'o3', text: '/t/', isCorrect: false },
      ],
    },
    {
      id: 'ex-10', type: 'multiple-choice', points: 10,
      question: 'Which sound does the -ed ending make in "suffered"?',
      options: [
        { id: 'o1', text: '/d/', isCorrect: true },
        { id: 'o2', text: '/ɪd/ (extra syllable)', isCorrect: false },
        { id: 'o3', text: '/t/', isCorrect: false },
      ],
    },
    {
      id: 'ex-11', type: 'speaking', points: 15,
      question: 'Make sentences using these verbs in the context of medical incidents: loosened, informed, fainted, resumed, closed, remained, switched, assisted. Example: "The passenger collapsed during the flight."',
    },
    {
      id: 'ex-12', type: 'speaking', points: 15,
      question: 'Think about the on-board accident from the first lesson of this unit. Take turns telling a colleague what happened, using past tense verbs and linking words like "at first", "then", "in the end", and "finally".',
    },
    {
      id: 'ex-13', type: 'fill-blank', points: 10,
      question: 'The incident _________ at 16:40, two hours into the flight.',
      audio: { id: 'report-audio', text: 'Report form', audioUrl: `${A6C}/report-form.wav`, durationSeconds: 40, speaker: 'instructor' },
      correctAnswer: 'happened',
    },
    {
      id: 'ex-14', type: 'fill-blank', points: 10,
      question: 'A male passenger aged 63 suffered a _________ arrest.',
      correctAnswer: 'cardiac',
    },
    {
      id: 'ex-15', type: 'fill-blank', points: 10,
      question: "The flight attendants immediately checked the man's _________.",
      correctAnswer: 'pulse',
    },
    {
      id: 'ex-16', type: 'fill-blank', points: 10,
      question: 'The flight attendants made him _________.',
      correctAnswer: 'comfortable',
    },
    {
      id: 'ex-17', type: 'fill-blank', points: 10,
      question: 'They got the oxygen and a _________.',
      correctAnswer: 'defibrillator',
    },
    {
      id: 'ex-18', type: 'fill-blank', points: 10,
      question: 'The flight attendants gave _________ aid and then began CPR.',
      correctAnswer: 'first',
    },
    {
      id: 'ex-19', type: 'fill-blank', points: 10,
      question: 'The doctor confirmed the man was in a serious _________.',
      correctAnswer: 'condition',
    },
    {
      id: 'ex-20', type: 'fill-blank', points: 10,
      question: 'The doctor _________ immediate hospitalization.',
      correctAnswer: 'recommended',
    },
    {
      id: 'ex-21', type: 'fill-blank', points: 10,
      question: 'The captain made passengers _________ of the situation.',
      correctAnswer: 'aware',
    },
    {
      id: 'ex-22', type: 'fill-blank', points: 10,
      question: 'The captain requested full medical emergency _________ on arrival.',
      correctAnswer: 'services',
    },
    {
      id: 'ex-23', type: 'fill-blank', points: 10,
      question: 'The doctor remained with the patient _________ landing.',
      correctAnswer: 'until',
    },
    {
      id: 'ex-24', type: 'fill-blank', points: 10,
      question: 'The patient was _________ to hospital.',
      correctAnswer: 'transferred',
    },
    {
      id: 'ex-25', type: 'fill-blank', points: 10,
      question: 'The flight _________ at 18:10.',
      correctAnswer: 'resumed',
    },
    {
      id: 'ex-26', type: 'multiple-choice', points: 15,
      question: 'What happened on the transatlantic flight in "Is There a Doctor on Board?"',
      options: [
        { id: 'o1', text: 'A doctor treated three separate passengers with medical problems', isCorrect: true },
        { id: 'o2', text: 'A passenger had to be taken to hospital immediately', isCorrect: false },
        { id: 'o3', text: 'The flight was diverted', isCorrect: false },
        { id: 'o4', text: 'No passengers needed help', isCorrect: false },
      ],
    },
    {
      id: 'ex-27', type: 'multiple-choice', points: 15,
      question: 'How many passengers did the doctor see, and were these serious medical emergencies?',
      options: [
        { id: 'o1', text: 'Three - none were life-threatening emergencies', isCorrect: true },
        { id: 'o2', text: 'One - a life-threatening emergency', isCorrect: false },
        { id: 'o3', text: 'Five - all serious', isCorrect: false },
        { id: 'o4', text: 'None - the doctor was not needed', isCorrect: false },
      ],
    },
    {
      id: 'ex-28', type: 'multiple-choice', points: 15,
      question: 'What was the role of the flight attendants during the medical situations?',
      options: [
        { id: 'o1', text: 'Waking the doctor, fetching the medical kit, and giving oxygen', isCorrect: true },
        { id: 'o2', text: 'They handled everything without the doctor', isCorrect: false },
        { id: 'o3', text: 'They had no role at all', isCorrect: false },
        { id: 'o4', text: 'They refused to help the doctor', isCorrect: false },
      ],
    },
    {
      id: 'ex-29', type: 'speaking', points: 15,
      question: 'What is your opinion of the doctor and his behaviour on this flight? Discuss the actions of the flight attendants. What kind of medical training have most flight attendants had? What do you think would have happened if no doctor had been on board?',
    },
    {
      id: 'ex-30', type: 'speaking', points: 20,
      question: 'Discuss with a partner: what training do flight attendants typically receive for medical incidents on board? What is the most common minor complaint or incident? Is training for medical incidents the most important part of cabin crew training? What personal qualities are needed for dealing with medical incidents? Life-threatening incidents are rare during flights - do you know of any? What happened?',
    },
  ],
  quiz: {
    id: 'quiz-6-3',
    title: 'Reporting a Medical Incident Quiz',
    passingScore: 70,
    exercises: [
      {
        id: 'q-1', type: 'multiple-choice', points: 20,
        question: 'How is -ed pronounced in "checked"?',
        options: [
          { id: 'o1', text: '/t/', isCorrect: true },
          { id: 'o2', text: '/d/', isCorrect: false },
          { id: 'o3', text: '/ɪd/', isCorrect: false },
        ],
      },
      {
        id: 'q-2', type: 'multiple-choice', points: 20,
        question: 'How is -ed pronounced in "needed"?',
        options: [
          { id: 'o1', text: '/ɪd/', isCorrect: true },
          { id: 'o2', text: '/t/', isCorrect: false },
          { id: 'o3', text: '/d/', isCorrect: false },
        ],
      },
      {
        id: 'q-3', type: 'multiple-choice', points: 20,
        question: 'Which linking word introduces the final result of a story?',
        options: [
          { id: 'o1', text: 'Eventually / In the end', isCorrect: true },
          { id: 'o2', text: 'At first', isCorrect: false },
          { id: 'o3', text: 'Soon after', isCorrect: false },
          { id: 'o4', text: 'Meanwhile', isCorrect: false },
        ],
      },
      {
        id: 'q-4', type: 'multiple-choice', points: 20,
        question: 'In the case study, where did the doctor first hide when the call for a doctor was made?',
        options: [
          { id: 'o1', text: 'Behind a magazine, sinking into the seat', isCorrect: true },
          { id: 'o2', text: 'In the cockpit', isCorrect: false },
          { id: 'o3', text: 'In the galley', isCorrect: false },
          { id: 'o4', text: 'Nowhere, they responded immediately', isCorrect: false },
        ],
      },
      {
        id: 'q-5', type: 'multiple-choice', points: 20,
        question: 'What did the doctor decide about admitting to being a doctor on future flights?',
        options: [
          { id: 'o1', text: 'They would never again admit to being a doctor on a flight', isCorrect: true },
          { id: 'o2', text: 'They would always volunteer immediately next time', isCorrect: false },
          { id: 'o3', text: 'They would only help in Business class', isCorrect: false },
          { id: 'o4', text: 'They decided to stop flying altogether', isCorrect: false },
        ],
      },
    ],
  },
  flashcards: [
    { id: 'fc-1', front: 'Collapsed', back: 'Fell down suddenly, often due to illness' },
    { id: 'fc-2', front: 'Administered', back: 'Gave or applied, e.g. medication or treatment' },
    { id: 'fc-3', front: 'Diagnosis', back: 'A doctor\'s identification of what is wrong' },
    { id: 'fc-4', front: 'Anxious', back: 'Worried or nervous' },
  ],
  review: {
    keyPoints: [
      'Past tense -ed endings follow three pronunciation patterns: /t/, /d/, and /ɪd/',
      'Linking words (at first, then, eventually, finally) help sequence a story clearly',
      'A calm, organized incident report helps colleagues and management understand what happened',
      'Even experienced doctors can feel reluctant to volunteer on a flight',
      'Most on-board medical incidents are minor and resolved without a diversion',
    ],
    commonMistakes: [
      { mistake: 'Telling a story with no clear sequence', correction: 'Use linking words to show the order of events', explanation: 'This makes incident reports much easier to follow' },
      { mistake: 'Mispronouncing -ed endings', correction: 'Practise the three patterns: /t/, /d/, and /ɪd/', explanation: 'Correct pronunciation improves clarity in spoken reports' },
    ],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

// ============================================================
// Unit 7, Lesson 1: Taking Charge in an Emergency
// Giving instructions
// ============================================================
const A7A = '/audio/unit-7/lesson-1';

const TAKING_CHARGE_LESSON: any = {
  id: 'lesson-7-1',
  unitId: 'unit-7',
  title: 'Taking Charge in an Emergency',
  description: 'Giving clear instructions and taking charge during an in-flight emergency such as sudden cabin depressurization',
  icon: '🚨',
  icaoLevel: 5,
  category: 'cabin-crew',
  difficulty: 'upper-intermediate',
  xpReward: 200,
  estimatedDurationMinutes: 50,
  locked: false,
  order: 1,
  objectives: [
    { id: 'obj-1', description: 'Identify types of on-board emergency and their severity', type: 'vocabulary' },
    { id: 'obj-2', description: 'Give clear instructions during a sudden emergency', type: 'speaking' },
    { id: 'obj-3', description: 'Respond appropriately to different passenger reactions', type: 'speaking' },
  ],
  scenario: {
    id: 'scenario-taking-charge',
    title: 'Sudden Cabin Depressurization',
    description: 'The purser and a flight attendant give urgent instructions to passengers during a sudden loss of cabin pressure.',
    context: 'Cabin, sudden in-flight emergency',
    audioSegments: [
      { id: 'ann-1', text: 'Purser: Ladies and gentlemen, this is an emergency. Stay in your seats with your seatbelts fastened and follow these instructions. Pull down the oxygen mask. Put it over your nose and mouth immediately and breathe normally.', audioUrl: `${A7A}/announcement-1.wav`, durationSeconds: 12, speaker: 'crew' },
      { id: 'ann-2', text: 'Flight attendant: Grab your mask. Pull it down and place it over your nose and mouth. Remain calm.', audioUrl: `${A7A}/announcement-2.wav`, durationSeconds: 5, speaker: 'crew' },
      { id: 'ann-3', text: 'Purser: Remain calm. Stay in your seats and pull the mask towards you. Place the mask over your mouth and nose like this and breathe normally, adjusting the strap to secure it. Do make sure your own mask is fitted properly before helping anyone else.', audioUrl: `${A7A}/announcement-3.wav`, durationSeconds: 14, speaker: 'crew' },
    ],
    vocabulary: [
      { word: 'Depressurization', definition: 'A sudden loss of air pressure in the cabin' },
      { word: 'PAN-PAN', definition: 'A radio call signalling urgency, but not immediate danger to life' },
      { word: 'Mayday', definition: 'A radio call signalling a life-threatening emergency' },
      { word: 'Ditching', definition: "Landing an aircraft on water in an emergency" },
    ],
  },
  theory: {
    title: 'Giving Instructions in an Emergency',
    content: 'In an on-board emergency, cabin crew must take charge quickly - giving short, clear instructions, staying calm, and helping passengers stay calm too, even in a fast-moving, frightening situation.',
    audioExplanation: {
      id: 'theory-audio',
      text: 'Explanation of giving instructions in an emergency',
      audioUrl: `${A7A}/theory-explanation.wav`,
      durationSeconds: 20,
      speaker: 'instructor',
    },
  },
  icaoPhraseoology: STANDARD_PHRASEOLOGY,
  cabinCrewPhraseoology: {
    category: 'Giving Instructions',
    phrases: [
      { situation: 'Instructing passengers to stay put', phrase: 'Stay in your seats.', meaning: 'Short, direct safety instruction', example: 'Stay in your seats.' },
      { situation: 'Instructing passengers to be calm', phrase: 'Remain calm.', meaning: 'Short, direct instruction to reduce panic', example: 'Remain calm.' },
      { situation: 'Instructing mask use', phrase: 'Pull down the oxygen mask. Pull it down over your nose and mouth.', meaning: 'Step-by-step safety instruction', example: 'Pull down the oxygen mask.' },
      { situation: 'Instructing breathing', phrase: 'Breathe normally.', meaning: 'Reassuring, simple instruction', example: 'Breathe normally.' },
    ],
  },
  airlineVocabulary: [{
    category: 'Emergency Severity',
    terms: [
      { term: 'PAN-PAN', definition: 'A radio call signalling urgency, but not immediate danger to life', example: 'A cardiac arrest on board may result in a PAN-PAN call.' },
      { term: 'Mayday', definition: 'A radio call signalling a life-threatening emergency', example: 'Complete engine failure would require a Mayday call.' },
      { term: 'Ditching', definition: 'Landing an aircraft on water in an emergency', example: "The pilot's announcement prepared passengers for ditching." },
      { term: 'Aborted take-off', definition: 'Stopping a take-off before the aircraft leaves the ground', example: 'An aborted take-off is also called a rejected take-off.' },
    ],
  }],
  professionalExpressions: [
    { situation: 'Calming a hyperventilating passenger', expression: 'Breathe slowly and deeply. That\'s it.', alternativeExpressions: ['Try to slow your breathing down with me.', 'In through the nose, out through the mouth.'] },
    { situation: 'Managing a noisy group', expression: 'Listen carefully, please, these instructions are for you.', alternativeExpressions: ['I need everyone\'s full attention right now.', 'Please stop and listen - this is important.'] },
  ],
  pronunciation: [
    { id: 'pron-1', text: 'Remain calm.', audioUrl: `${A7A}/pronunciation.wav`, durationSeconds: 2 },
  ],
  vocabulary: [
    { word: 'Depressurization', definition: 'A sudden loss of air pressure in the cabin' },
    { word: 'PAN-PAN', definition: 'A radio call signalling urgency, but not immediate danger to life' },
    { word: 'Mayday', definition: 'A radio call signalling a life-threatening emergency' },
    { word: 'Ditching', definition: 'Landing an aircraft on water in an emergency' },
    { word: 'Aborted take-off', definition: 'Stopping a take-off before the aircraft leaves the ground' },
  ],
  grammar: [
    {
      rule: 'Short imperative instructions in emergencies - verb-first sentences with no subject, for maximum clarity and speed',
      examples: [
        { sentence: 'Stay in your seats.', audioUrl: `${A7A}/gi-1.wav` },
        { sentence: 'Remain calm.', audioUrl: `${A7A}/gi-2.wav` },
        { sentence: 'Breathe normally.', audioUrl: `${A7A}/gi-5.wav` },
      ],
    },
  ],
  exercises: [
    {
      id: 'ex-1', type: 'speaking', points: 15,
      question: 'In an on-board emergency, which roles might a flight attendant take: diplomat, nurse, policeman, firefighter, referee, lifesaver? Discuss with a partner. Which is the most important role?',
    },
    {
      id: 'ex-2', type: 'multiple-choice', points: 10,
      question: 'Which of these is the most life-threatening emergency to everyone on board?',
      options: [
        { id: 'o1', text: 'Complete engine failure', isCorrect: true },
        { id: 'o2', text: 'Passengers fighting', isCorrect: false },
        { id: 'o3', text: 'Lots of passengers suffering from nausea', isCorrect: false },
        { id: 'o4', text: 'A passenger giving birth', isCorrect: false },
      ],
    },
    {
      id: 'ex-3', type: 'multiple-choice', points: 10,
      question: 'Which of these events would usually be reported as a PAN-PAN rather than a Mayday?',
      options: [
        { id: 'o1', text: 'A cardiac arrest on board', isCorrect: true },
        { id: 'o2', text: 'An engine on fire', isCorrect: false },
        { id: 'o3', text: 'A sudden loss of cabin pressure and drop in altitude', isCorrect: false },
        { id: 'o4', text: 'Complete engine failure', isCorrect: false },
      ],
    },
    {
      id: 'ex-4', type: 'multiple-choice', points: 10,
      question: 'Which of these is usually a temporary, less serious problem?',
      options: [
        { id: 'o1', text: 'A fire in the toilets (once extinguished)', isCorrect: true },
        { id: 'o2', text: 'An engine on fire', isCorrect: false },
        { id: 'o3', text: 'Complete engine failure', isCorrect: false },
        { id: 'o4', text: 'Preparing for ditching', isCorrect: false },
      ],
    },
    {
      id: 'ex-5', type: 'multiple-choice', points: 10,
      question: 'In an emergency situation, what should you do first?',
      options: [
        { id: 'o1', text: 'Discuss the situation with your colleagues and follow the purser\'s lead', isCorrect: true },
        { id: 'o2', text: 'Ask the passengers for their advice', isCorrect: false },
        { id: 'o3', text: 'Wait silently for someone else to act', isCorrect: false },
        { id: 'o4', text: 'Leave the decision entirely to passengers', isCorrect: false },
      ],
    },
    {
      id: 'ex-6', type: 'fill-blank', points: 10,
      question: 'Ladies and gentlemen, this is an _________.',
      audio: { id: 'ann1-audio', text: 'Emergency announcement', audioUrl: `${A7A}/announcement-1.wav`, durationSeconds: 12, speaker: 'crew' },
      correctAnswer: 'emergency',
    },
    {
      id: 'ex-7', type: 'fill-blank', points: 10,
      question: '_________ down the oxygen mask.',
      correctAnswer: 'Pull',
    },
    {
      id: 'ex-8', type: 'fill-blank', points: 10,
      question: 'Put it over your nose and mouth immediately and breathe _________.',
      correctAnswer: 'normally',
    },
    {
      id: 'ex-9', type: 'fill-blank', points: 10,
      question: 'Do make sure your own mask is fitted properly before _________ anyone else.',
      correctAnswer: 'helping',
    },
    {
      id: 'ex-10', type: 'speaking', points: 15,
      question: 'Practise the emergency instructions with correct pronunciation: "Stay in your seats.", "Remain calm.", "Pull down the oxygen mask.", "Pull it down over your nose and mouth.", "Breathe normally."',
    },
    {
      id: 'ex-11', type: 'speaking', points: 20,
      question: 'What would you say to these people during an emergency: a worried passenger whose wife has just fainted; a pregnant woman experiencing contractions; a young boy running in the aisle; a panicky hyperventilating passenger; a loud noisy group ignoring instructions; a mother whose child is sick and vomiting; a woman with headphones listening to music? Choose appropriate phrases and explain your choices.',
    },
  ],
  quiz: {
    id: 'quiz-7-1',
    title: 'Taking Charge in an Emergency Quiz',
    passingScore: 70,
    exercises: [
      {
        id: 'q-1', type: 'multiple-choice', points: 20,
        question: 'What does "PAN-PAN" signal?',
        options: [
          { id: 'o1', text: 'Urgency, but not immediate danger to life', isCorrect: true },
          { id: 'o2', text: 'A life-threatening emergency', isCorrect: false },
          { id: 'o3', text: 'A routine announcement', isCorrect: false },
          { id: 'o4', text: 'A request for catering', isCorrect: false },
        ],
      },
      {
        id: 'q-2', type: 'multiple-choice', points: 20,
        question: 'What does "Mayday" signal?',
        options: [
          { id: 'o1', text: 'A life-threatening emergency', isCorrect: true },
          { id: 'o2', text: 'A minor delay', isCorrect: false },
          { id: 'o3', text: 'A request to land early', isCorrect: false },
          { id: 'o4', text: 'A weather warning', isCorrect: false },
        ],
      },
      {
        id: 'q-3', type: 'multiple-choice', points: 20,
        question: 'What does "ditching" mean?',
        options: [
          { id: 'o1', text: 'Landing an aircraft on water in an emergency', isCorrect: true },
          { id: 'o2', text: 'Cancelling a flight', isCorrect: false },
          { id: 'o3', text: 'Diverting to another airport', isCorrect: false },
          { id: 'o4', text: 'An aborted take-off', isCorrect: false },
        ],
      },
      {
        id: 'q-4', type: 'multiple-choice', points: 20,
        question: 'When should you put on your own oxygen mask relative to helping others?',
        options: [
          { id: 'o1', text: 'Before helping anyone else', isCorrect: true },
          { id: 'o2', text: 'After helping everyone nearby', isCorrect: false },
          { id: 'o3', text: 'It does not matter', isCorrect: false },
          { id: 'o4', text: 'Only if you feel dizzy', isCorrect: false },
        ],
      },
      {
        id: 'q-5', type: 'multiple-choice', points: 20,
        question: 'What style of sentence is typically used for emergency instructions?',
        options: [
          { id: 'o1', text: 'Short imperatives (e.g. "Remain calm.")', isCorrect: true },
          { id: 'o2', text: 'Long, formal explanations', isCorrect: false },
          { id: 'o3', text: 'Questions', isCorrect: false },
          { id: 'o4', text: 'Passive voice sentences', isCorrect: false },
        ],
      },
    ],
  },
  flashcards: [
    { id: 'fc-1', front: 'PAN-PAN', back: 'A radio call signalling urgency, but not immediate danger to life' },
    { id: 'fc-2', front: 'Mayday', back: 'A radio call signalling a life-threatening emergency' },
    { id: 'fc-3', front: 'Ditching', back: 'Landing an aircraft on water in an emergency' },
    { id: 'fc-4', front: 'Depressurization', back: 'A sudden loss of air pressure in the cabin' },
  ],
  review: {
    keyPoints: [
      'Not all on-board emergencies are equally serious - know the difference between Mayday and PAN-PAN',
      'Give short, clear, imperative instructions in an emergency',
      'Put on your own oxygen mask before helping others',
      'Match your tone and words to the passenger\'s emotional state',
      'Staying calm yourself is essential to helping passengers stay calm',
    ],
    commonMistakes: [
      { mistake: 'Using long, complex sentences during a fast-moving emergency', correction: 'Use short, direct imperatives', explanation: 'Passengers need to understand and act immediately' },
      { mistake: 'Helping others before securing your own oxygen mask', correction: 'Always secure your own mask first', explanation: 'You cannot help others if you lose consciousness first' },
    ],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

// ============================================================
// Unit 7, Lesson 2: Preparing for an Emergency Evacuation
// Instructions not to do something
// ============================================================
const A7B = '/audio/unit-7/lesson-2';

const EMERGENCY_EVACUATION_LESSON: any = {
  id: 'lesson-7-2',
  unitId: 'unit-7',
  title: 'Preparing for an Emergency Evacuation',
  description: 'Preparing passengers for an emergency landing and evacuation, with a focus on instructions not to do something',
  icon: '🛝',
  icaoLevel: 5,
  category: 'cabin-crew',
  difficulty: 'upper-intermediate',
  xpReward: 200,
  estimatedDurationMinutes: 55,
  locked: false,
  order: 2,
  objectives: [
    { id: 'obj-1', description: 'Understand a captain\'s emergency landing announcement', type: 'listening' },
    { id: 'obj-2', description: 'Give clear "do not" instructions before an evacuation', type: 'speaking' },
    { id: 'obj-3', description: 'Describe the emergency exit and evacuation procedure', type: 'vocabulary' },
  ],
  scenario: {
    id: 'scenario-emergency-evacuation',
    title: 'Flight JWZ157',
    description: 'A Boeing 747 with 174 passengers and 14 crew has an engine fire. The captain decides to make an emergency landing and evacuate using the slides.',
    context: 'Cabin, preparing for an emergency landing and evacuation',
    audioSegments: [
      { id: 'captain-ann', text: "Captain: Ladies and gentlemen, your captain speaking. We have a technical problem and for everyone's safety we've decided to land in the next fifteen minutes at the nearest airport. The landing should be perfectly normal, but for safety reasons we will evacuate the aircraft using the emergency slides. The cabin crew will now give you full instructions and prepare you for the landing. Please listen carefully to their instructions. Thank you.", audioUrl: `${A7B}/captain-announcement.wav`, durationSeconds: 25, speaker: 'pilot' },
      { id: 'purser-a', text: 'Purser (part 1): Ladies and gentlemen, as the captain has just told you, we shall be landing in twenty minutes. For safety reasons, after landing we shall be evacuating the aircraft using the emergency slides. So please listen very carefully and do exactly as instructed. Please return to your seats immediately and keep your seatbelts fastened securely.', audioUrl: `${A7B}/purser-part-a.wav`, durationSeconds: 20, speaker: 'crew' },
      { id: 'purser-b', text: "Purser (part 2): We are now starting to take you through our safety procedures... Emergency exits are on both sides of the aircraft. They are clearly marked and are being pointed out to you now... floor-level lighting is provided in the aisles.", audioUrl: `${A7B}/purser-part-b.wav`, durationSeconds: 35, speaker: 'crew' },
      { id: 'purser-c', text: 'Purser (part 3): Please remain seated and follow instructions given to you by your crew. Do not leave your seats until instructed to do so by your crew. When the seatbelt signs are switched off, make your way to your nearest exit. Leave all personal belongings behind. Ladies, please remove high-heeled shoes, as they may tear the slide.', audioUrl: `${A7B}/purser-part-c.wav`, durationSeconds: 20, speaker: 'crew' },
    ],
    vocabulary: [
      { word: 'Brace position', definition: 'The protective position adopted before an emergency landing' },
      { word: 'Emergency slide', definition: 'An inflatable slide used to evacuate an aircraft quickly' },
      { word: 'Floor-level lighting', definition: 'Lighting along the aisle floor to guide passengers to exits' },
      { word: 'High-heeled shoes', definition: 'Shoes with a raised heel, which can damage evacuation slides' },
    ],
  },
  theory: {
    title: 'Instructions Not to Do Something',
    content: "Preparing passengers for an emergency evacuation means giving very clear instructions about what NOT to do - don't collect your bags, don't wear high heels, don't leave your seat until told to.",
    audioExplanation: {
      id: 'theory-audio',
      text: 'Explanation of instructions not to do something',
      audioUrl: `${A7B}/theory-explanation.wav`,
      durationSeconds: 20,
      speaker: 'instructor',
    },
  },
  icaoPhraseoology: STANDARD_PHRASEOLOGY,
  cabinCrewPhraseoology: {
    category: 'Instructions Not to Do Something',
    phrases: [
      { situation: 'Preventing early movement', phrase: 'Do not leave your seats until instructed to do so by your crew.', meaning: 'A clear negative instruction for safety', example: 'Do not leave your seats until instructed to do so by your crew.' },
      { situation: 'Preventing passengers taking items', phrase: 'Do not take anything with you as you leave the aircraft.', meaning: 'A clear negative instruction to speed up evacuation', example: 'Do not take anything with you as you leave the aircraft.' },
      { situation: 'Being specific about bags', phrase: 'Do not take handbags or briefcases.', meaning: 'Specifying exactly which items are forbidden', example: 'Do not take handbags or briefcases.' },
    ],
  },
  airlineVocabulary: [{
    category: 'Evacuation Procedure',
    terms: [
      { term: 'Brace position', definition: 'The protective position adopted before an emergency landing', example: 'The safety card shows the brace position.' },
      { term: 'Emergency slide', definition: 'An inflatable slide used to evacuate an aircraft quickly', example: 'We will evacuate the aircraft using the emergency slides.' },
      { term: 'Floor-level lighting', definition: 'Lighting along the aisle floor to guide passengers to exits', example: 'Floor-level lighting is provided in the aisles.' },
      { term: 'Escape route', definition: 'The path passengers take to reach an emergency exit', example: 'The safety card details your escape routes.' },
    ],
  }],
  professionalExpressions: [
    { situation: 'Reassuring before an emergency landing', expression: 'The landing should be perfectly normal.', alternativeExpressions: ['This should be a routine landing.', 'We expect this to go smoothly.'] },
    { situation: 'Emphasizing an instruction', expression: 'I repeat, leave all personal hand-baggage behind.', alternativeExpressions: ['Once again, leave your belongings behind.', 'This is important: leave your bags.'] },
  ],
  pronunciation: [
    { id: 'pron-1', text: 'Do not leave your seats until instructed to do so by your crew.', audioUrl: `${A7B}/pronunciation.wav`, durationSeconds: 4 },
  ],
  vocabulary: [
    { word: 'Brace position', definition: 'The protective position adopted before an emergency landing' },
    { word: 'Emergency slide', definition: 'An inflatable slide used to evacuate an aircraft quickly' },
    { word: 'Floor-level lighting', definition: 'Lighting along the aisle floor to guide passengers to exits' },
    { word: 'Escape route', definition: 'The path passengers take to reach an emergency exit' },
  ],
  grammar: [
    {
      rule: "Negative imperatives ('Do not...' / 'Don't...') - used for critical safety instructions about what passengers must not do",
      examples: [
        { sentence: 'Do not leave your seats until instructed to do so by your crew.', audioUrl: `${A7B}/neg-1.wav` },
        { sentence: 'Do not take anything with you as you leave the aircraft.', audioUrl: `${A7B}/neg-2.wav` },
        { sentence: 'Do not take handbags or briefcases.', audioUrl: `${A7B}/neg-3.wav` },
      ],
    },
  ],
  exercises: [
    {
      id: 'ex-1', type: 'speaking', points: 15,
      question: 'Have you ever been in a situation like Flight JWZ157 (severe turbulence and an engine fire leading to an emergency landing)? If so, what happened? Tell a partner.',
    },
    {
      id: 'ex-2', type: 'fill-blank', points: 10,
      question: 'Ladies and gentlemen, your captain _________.',
      audio: { id: 'captain-audio', text: 'Captain announcement', audioUrl: `${A7B}/captain-announcement.wav`, durationSeconds: 25, speaker: 'pilot' },
      correctAnswer: 'speaking',
    },
    {
      id: 'ex-3', type: 'fill-blank', points: 10,
      question: 'We have a _________ problem and for everyone\'s safety we\'ve decided to land at the nearest airport.',
      correctAnswer: 'technical',
    },
    {
      id: 'ex-4', type: 'fill-blank', points: 10,
      question: 'The landing should be perfectly _________.',
      correctAnswer: 'normal',
    },
    {
      id: 'ex-5', type: 'fill-blank', points: 10,
      question: 'We will evacuate the aircraft using the emergency _________.',
      correctAnswer: 'slides',
    },
    {
      id: 'ex-6', type: 'multiple-choice', points: 10,
      question: 'After the emergency announcement, will cabin crew continue the food and drinks service?',
      options: [
        { id: 'o1', text: 'No, they will stop and secure the galleys', isCorrect: true },
        { id: 'o2', text: 'Yes, service continues as normal', isCorrect: false },
      ],
    },
    {
      id: 'ex-7', type: 'multiple-choice', points: 10,
      question: 'Will the crew help passengers get bags from the overhead lockers to collect precious items?',
      options: [
        { id: 'o1', text: 'No, this is exactly what must NOT happen', isCorrect: true },
        { id: 'o2', text: 'Yes, they will help with valuable items', isCorrect: false },
      ],
    },
    {
      id: 'ex-8', type: 'multiple-choice', points: 10,
      question: 'Will the crew point out the emergency exits?',
      options: [
        { id: 'o1', text: 'Yes', isCorrect: true },
        { id: 'o2', text: 'No', isCorrect: false },
      ],
    },
    {
      id: 'ex-9', type: 'fill-blank', points: 10,
      question: 'The safety card in your seat pocket details your escape routes, oxygen masks and life _________.',
      correctAnswer: 'jackets',
    },
    {
      id: 'ex-10', type: 'fill-blank', points: 10,
      question: 'It also shows the brace _________, which you must adopt in an emergency landing.',
      correctAnswer: 'position',
    },
    {
      id: 'ex-11', type: 'fill-blank', points: 10,
      question: 'Emergency exits are clearly _________ and are being pointed out to you now.',
      correctAnswer: 'marked',
    },
    {
      id: 'ex-12', type: 'fill-blank', points: 10,
      question: 'To help you find your way to the exits, floor-level _________ is provided in the aisles.',
      correctAnswer: 'lighting',
    },
    {
      id: 'ex-13', type: 'fill-blank', points: 10,
      question: 'Do not leave your seats _________ instructed to do so by your crew.',
      correctAnswer: 'until',
    },
    {
      id: 'ex-14', type: 'fill-blank', points: 10,
      question: 'Leave all personal _________ behind.',
      correctAnswer: 'belongings',
    },
    {
      id: 'ex-15', type: 'fill-blank', points: 10,
      question: 'Ladies, remove high-heeled _________, as they may tear the slide.',
      correctAnswer: 'shoes',
    },
    {
      id: 'ex-16', type: 'speaking', points: 20,
      question: 'In groups of three, practise speaking the three parts of the purser\'s announcement. Then say them again from memory or short notes.',
    },
  ],
  quiz: {
    id: 'quiz-7-2',
    title: 'Preparing for an Emergency Evacuation Quiz',
    passingScore: 70,
    exercises: [
      {
        id: 'q-1', type: 'multiple-choice', points: 20,
        question: 'What kind of aircraft is Flight JWZ157?',
        options: [
          { id: 'o1', text: 'A Boeing 747', isCorrect: true },
          { id: 'o2', text: 'An Airbus A320', isCorrect: false },
          { id: 'o3', text: 'A Boeing 777', isCorrect: false },
          { id: 'o4', text: 'An Airbus A380', isCorrect: false },
        ],
      },
      {
        id: 'q-2', type: 'multiple-choice', points: 20,
        question: 'Why must passengers remove high-heeled shoes before evacuating?',
        options: [
          { id: 'o1', text: 'They may tear the emergency slide', isCorrect: true },
          { id: 'o2', text: 'They are not allowed on the plane at all', isCorrect: false },
          { id: 'o3', text: 'They set off the metal detector', isCorrect: false },
          { id: 'o4', text: 'There is no reason given', isCorrect: false },
        ],
      },
      {
        id: 'q-3', type: 'multiple-choice', points: 20,
        question: 'What guides passengers to exits if the cabin is dark or smoky?',
        options: [
          { id: 'o1', text: 'Floor-level lighting', isCorrect: true },
          { id: 'o2', text: 'Overhead spotlights', isCorrect: false },
          { id: 'o3', text: 'Crew members carrying torches only', isCorrect: false },
          { id: 'o4', text: 'Nothing, passengers must feel their way', isCorrect: false },
        ],
      },
      {
        id: 'q-4', type: 'multiple-choice', points: 20,
        question: 'What must passengers do with their belongings during evacuation?',
        options: [
          { id: 'o1', text: 'Leave everything behind', isCorrect: true },
          { id: 'o2', text: 'Take only small bags', isCorrect: false },
          { id: 'o3', text: 'Take everything from the overhead locker', isCorrect: false },
          { id: 'o4', text: 'Hand bags to crew for storage', isCorrect: false },
        ],
      },
      {
        id: 'q-5', type: 'multiple-choice', points: 20,
        question: 'When can passengers leave their seats during preparation for evacuation?',
        options: [
          { id: 'o1', text: 'Only when instructed to do so by the crew', isCorrect: true },
          { id: 'o2', text: 'As soon as the announcement finishes', isCorrect: false },
          { id: 'o3', text: 'Whenever they feel ready', isCorrect: false },
          { id: 'o4', text: 'Only after landing is fully complete and taxiing has stopped', isCorrect: false },
        ],
      },
    ],
  },
  flashcards: [
    { id: 'fc-1', front: 'Brace position', back: 'The protective position adopted before an emergency landing' },
    { id: 'fc-2', front: 'Emergency slide', back: 'An inflatable slide used to evacuate an aircraft quickly' },
    { id: 'fc-3', front: 'Floor-level lighting', back: 'Lighting along the aisle floor to guide passengers to exits' },
    { id: 'fc-4', front: 'Escape route', back: 'The path passengers take to reach an emergency exit' },
  ],
  review: {
    keyPoints: [
      'The captain\'s announcement should reassure while explaining the safety plan clearly',
      'Negative instructions ("Do not...") are essential for critical safety rules',
      'Passengers must leave all belongings and remove high heels before evacuating',
      'Floor-level lighting and clearly marked exits are crucial in low visibility',
      'Practising announcements aloud builds confidence and clarity',
    ],
    commonMistakes: [
      { mistake: 'Being vague about what passengers must NOT do', correction: 'State negative instructions explicitly and repeat if necessary', explanation: 'Vague safety instructions can be dangerously misunderstood' },
      { mistake: 'Rushing through the safety card explanation', correction: 'Give passengers time to locate their nearest exit', explanation: 'The nearest usable exit may be behind them, which is easy to miss if rushed' },
    ],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

// ============================================================
// Unit 7, Lesson 3: Reporting an Evacuation
// Reporting instructions
// + Case Study: Crew's Response to Take-off Incident Criticized
// ============================================================
const A7C = '/audio/unit-7/lesson-3';

const REPORTING_EVACUATION_LESSON: any = {
  id: 'lesson-7-3',
  unitId: 'unit-7',
  title: 'Reporting an Evacuation',
  description: "Reporting instructions given during an emergency, the 'Miracle on the Hudson', and the case study: Crew's Response to Take-off Incident Criticized",
  icon: '🛬',
  icaoLevel: 5,
  category: 'cabin-crew',
  difficulty: 'upper-intermediate',
  xpReward: 220,
  estimatedDurationMinutes: 65,
  locked: false,
  order: 3,
  objectives: [
    { id: 'obj-1', description: 'Report instructions given during an emergency using reported speech', type: 'grammar' },
    { id: 'obj-2', description: 'Understand a real emergency landing news report', type: 'reading' },
    { id: 'obj-3', description: 'Discuss a criticized crew response to a take-off incident', type: 'reading' },
  ],
  scenario: {
    id: 'scenario-hudson',
    title: 'The Miracle on the Hudson',
    description: 'US Airways Flight 1549 lost both engines to a bird-strike and ditched safely in the Hudson River, with all 155 on board surviving.',
    context: 'US Airways Flight 1549, New York, February 2009',
    audioSegments: [
      { id: 'hudson-article', text: 'US Airways Flight 1549 lost both engines following a massive bird-strike three and a half minutes after take-off and made an emergency landing in the Hudson River yesterday in the late afternoon. There were 150 passengers and five crew members, including the captain, first officer and three flight attendants, on board. All 155 survived. The plane ditched at exactly 15:31, less than seven minutes after take-off. Four minutes later all the passengers and crew had been evacuated on to the wings of the floating aircraft or into the slightly submerged slides. They were then taken to safety on Hudson River ferries. Before leaving the aircraft himself, the captain made one last check inside to see that no one was left behind. There were no serious injuries. Many are calling this a miracle. However, aviation authorities are saying that the real reason for the success of the landing and evacuation was the first-class training of the pilots and cabin crew. They knew what to do and did it superbly.', audioUrl: `${A7C}/hudson-article.wav`, durationSeconds: 55, speaker: 'instructor' },
    ],
    vocabulary: [
      { word: 'Massive', definition: 'Very big' },
      { word: 'Bird-strike', definition: 'A collision between an aircraft and a bird' },
      { word: 'Ditched', definition: 'Landed on water in an emergency' },
      { word: 'Submerged', definition: 'Under water' },
    ],
  },
  theory: {
    title: 'Reporting Instructions',
    content: 'Reporting an evacuation means describing, calmly and accurately, what instructions were given and what actually happened - useful both for training and for official incident reports.',
    audioExplanation: {
      id: 'theory-audio',
      text: 'Explanation of reporting instructions',
      audioUrl: `${A7C}/theory-explanation.wav`,
      durationSeconds: 20,
      speaker: 'instructor',
    },
  },
  icaoPhraseoology: STANDARD_PHRASEOLOGY,
  cabinCrewPhraseoology: {
    category: 'Reporting Instructions',
    phrases: [
      { situation: 'Reporting a direct instruction', phrase: 'The captain told the crew to prepare the cabin for an emergency landing.', meaning: 'Reported speech: told + object + to + infinitive', example: 'The captain told the crew to prepare the cabin for an emergency landing.' },
      { situation: 'Reporting another instruction', phrase: 'The flight attendant told the passengers to take off their shoes.', meaning: 'Reported speech pattern for a positive instruction', example: 'The flight attendant told the passengers to take off their shoes.' },
      { situation: 'Reporting a negative instruction', phrase: 'The flight attendant told the passengers not to get anything from the overhead lockers.', meaning: 'Reported speech pattern for a negative instruction', example: 'The flight attendant told the passengers not to get anything from the overhead lockers.' },
      { situation: 'Reporting reassurance', phrase: 'The purser told the passengers not to worry.', meaning: 'Reported speech for a reassuring instruction', example: 'The purser told the passengers not to worry.' },
    ],
  },
  airlineVocabulary: [{
    category: 'The Hudson River Landing',
    terms: [
      { term: 'Massive', definition: 'Very big', example: 'A massive bird-strike caused both engines to fail.' },
      { term: 'Bird-strike', definition: 'A collision between an aircraft and a bird', example: 'The bird-strike happened shortly after take-off.' },
      { term: 'Survived', definition: 'Lived through a dangerous event', example: 'All 155 people on board survived.' },
      { term: 'Ditched', definition: 'Landed on water in an emergency', example: 'The plane ditched in the Hudson River.' },
      { term: 'Floating', definition: 'Not sinking, staying on the surface of water', example: 'Passengers stood on the floating aircraft.' },
      { term: 'Slightly', definition: 'Just a little', example: 'The slides were slightly submerged.' },
      { term: 'Submerged', definition: 'Under water', example: 'The slides were slightly submerged in the river.' },
      { term: 'Injuries', definition: 'Physical harm', example: 'There were no serious injuries.' },
      { term: 'Superbly', definition: 'Very, very well', example: 'They knew what to do and did it superbly.' },
      { term: 'First-class', definition: 'Very, very good (quality)', example: 'The first-class training of the crew made the difference.' },
    ],
  }],
  professionalExpressions: [
    { situation: 'Describing a successful outcome', expression: 'They knew what to do and did it superbly.', alternativeExpressions: ['Their training took over and they performed brilliantly.', 'Everything went exactly as trained.'] },
    { situation: 'Making a final safety check', expression: 'The captain made one last check to see that no one was left behind.', alternativeExpressions: ['A final sweep of the cabin confirmed everyone had evacuated.', 'The captain checked the cabin was empty before leaving.'] },
  ],
  pronunciation: [
    { id: 'pron-1', text: 'The captain told the crew to prepare the cabin for an emergency landing.', audioUrl: `${A7C}/pronunciation.wav`, durationSeconds: 4 },
  ],
  vocabulary: [
    { word: 'Massive', definition: 'Very big' },
    { word: 'Bird-strike', definition: 'A collision between an aircraft and a bird' },
    { word: 'Ditched', definition: 'Landed on water in an emergency' },
    { word: 'Submerged', definition: 'Under water' },
    { word: 'Superbly', definition: 'Very, very well' },
    { word: 'First-class', definition: 'Very, very good (quality)' },
  ],
  grammar: [
    {
      rule: "Reported instructions with 'told...to' / 'told...not to' - the weak form 'to' /tə/ is unstressed in natural speech",
      examples: [
        { sentence: 'The captain told the crew to prepare the cabin for an emergency landing.', audioUrl: `${A7C}/ri-1.wav` },
        { sentence: 'The flight attendant told the passengers to take off their shoes.', audioUrl: `${A7C}/ri-2.wav` },
        { sentence: 'The purser told the passengers not to worry.', audioUrl: `${A7C}/ri-4.wav` },
      ],
    },
  ],
  exercises: [
    {
      id: 'ex-1', type: 'multiple-choice', points: 10,
      question: 'What caused the engine failure on Flight 1549?',
      options: [
        { id: 'o1', text: 'A massive bird-strike', isCorrect: true },
        { id: 'o2', text: 'A fuel leak', isCorrect: false },
        { id: 'o3', text: 'A lightning strike', isCorrect: false },
        { id: 'o4', text: 'Mechanical failure unrelated to birds', isCorrect: false },
      ],
    },
    {
      id: 'ex-2', type: 'multiple-choice', points: 10,
      question: 'Where did the plane land?',
      options: [
        { id: 'o1', text: 'On water - the Hudson River', isCorrect: true },
        { id: 'o2', text: 'On a runway', isCorrect: false },
        { id: 'o3', text: 'On a field', isCorrect: false },
        { id: 'o4', text: 'On a highway', isCorrect: false },
      ],
    },
    {
      id: 'ex-3', type: 'multiple-choice', points: 10,
      question: 'How many people were injured?',
      options: [
        { id: 'o1', text: 'None seriously injured', isCorrect: true },
        { id: 'o2', text: 'All 155 people', isCorrect: false },
        { id: 'o3', text: 'Half of the passengers', isCorrect: false },
        { id: 'o4', text: 'Only the crew', isCorrect: false },
      ],
    },
    {
      id: 'ex-4', type: 'multiple-choice', points: 10,
      question: 'Who was the last person to leave the aircraft?',
      options: [
        { id: 'o1', text: 'The captain, after checking no one was left behind', isCorrect: true },
        { id: 'o2', text: 'A flight attendant', isCorrect: false },
        { id: 'o3', text: 'The first officer', isCorrect: false },
        { id: 'o4', text: 'A passenger', isCorrect: false },
      ],
    },
    {
      id: 'ex-5', type: 'multiple-choice', points: 10,
      question: "What reason do aviation authorities give for the 'miracle'?",
      options: [
        { id: 'o1', text: 'The first-class training of the pilots and cabin crew', isCorrect: true },
        { id: 'o2', text: 'Pure luck', isCorrect: false },
        { id: 'o3', text: 'Calm weather conditions', isCorrect: false },
        { id: 'o4', text: 'The aircraft\'s design alone', isCorrect: false },
      ],
    },
    {
      id: 'ex-6', type: 'fill-blank', points: 10,
      question: 'A pickpocket steals from bags. Something "very big" in the article is described as _________.',
      correctAnswer: 'massive',
      hint: 'Look at "a massive bird-strike".',
    },
    {
      id: 'ex-7', type: 'fill-blank', points: 10,
      question: 'To land a plane on water is to _________ the plane.',
      correctAnswer: 'ditch',
    },
    {
      id: 'ex-8', type: 'fill-blank', points: 10,
      question: 'Not sinking under the water means _________.',
      correctAnswer: 'floating',
    },
    {
      id: 'ex-9', type: 'fill-blank', points: 10,
      question: 'Under water is described as _________.',
      correctAnswer: 'submerged',
    },
    {
      id: 'ex-10', type: 'fill-blank', points: 10,
      question: 'To live after a bad accident is to _________.',
      correctAnswer: 'survive',
    },
    {
      id: 'ex-11', type: 'speaking', points: 15,
      question: 'Practise the reported instruction sentences, noticing how the weak "to" is not stressed: "The captain told the crew to prepare the cabin for an emergency landing." / "The flight attendant told the passengers to take off their shoes." / "The purser told the passengers not to worry."',
    },
    {
      id: 'ex-12', type: 'speaking', points: 20,
      question: 'Imagine what happened inside the aircraft during the Hudson River incident. With a partner, take turns telling the story using questions and answers: "What happened? What did you do? How did the passengers/crew react? Then what happened?" Situation 1: Student A is a TV reporter, Student B is a crew member. Situation 2: Student A is a passenger, Student B is a TV reporter.',
    },
    {
      id: 'ex-13', type: 'multiple-choice', points: 15,
      question: 'What happened FIRST in the tail-strike incident on the Dublin to London flight?',
      options: [
        { id: 'o1', text: 'The flight crew heard a bump on take-off', isCorrect: true },
        { id: 'o2', text: 'Nine oxygen masks failed to deploy', isCorrect: false },
        { id: 'o3', text: 'A passenger received medical assistance', isCorrect: false },
        { id: 'o4', text: 'The aircraft landed safely', isCorrect: false },
      ],
    },
    {
      id: 'ex-14', type: 'multiple-choice', points: 15,
      question: 'What did the flight crew do immediately after hearing the bump, even though they were not sure what had happened?',
      options: [
        { id: 'o1', text: 'They continued climbing and pressurizing the cabin', isCorrect: true },
        { id: 'o2', text: 'They immediately turned back to Dublin', isCorrect: false },
        { id: 'o3', text: 'They opened the cockpit door', isCorrect: false },
        { id: 'o4', text: 'They declared a Mayday', isCorrect: false },
      ],
    },
    {
      id: 'ex-15', type: 'multiple-choice', points: 15,
      question: 'How did the cabin supervisor finally get the flight crew\'s attention?',
      options: [
        { id: 'o1', text: 'She banged on the cockpit door', isCorrect: true },
        { id: 'o2', text: 'She pulled the fire alarm', isCorrect: false },
        { id: 'o3', text: 'A passenger did it for her', isCorrect: false },
        { id: 'o4', text: 'She used the emergency radio', isCorrect: false },
      ],
    },
    {
      id: 'ex-16', type: 'multiple-choice', points: 15,
      question: 'How did the flight attendants help when some oxygen masks did not deploy?',
      options: [
        { id: 'o1', text: 'They moved passengers to spare seats and used ID cards to try to open the mask units', isCorrect: true },
        { id: 'o2', text: 'They did nothing, as it was not their responsibility', isCorrect: false },
        { id: 'o3', text: 'They told passengers to share masks', isCorrect: false },
        { id: 'o4', text: 'They evacuated the aircraft immediately', isCorrect: false },
      ],
    },
    {
      id: 'ex-17', type: 'speaking', points: 20,
      question: 'What kind of training do flight attendants get for emergencies like the tail-strike incident? Would you have done things differently if you had been on this flight? What would you have said to the passengers and other crew members? Who is responsible for talking to the captain?',
    },
    {
      id: 'ex-18', type: 'speaking', points: 15,
      question: 'Discuss what could go wrong during a rejected or difficult take-off - communication between cabin and flight deck, oxygen mask deployment, and how passengers might react if something unexpected happens.',
    },
    {
      id: 'ex-19', type: 'speaking', points: 15,
      question: 'Complete and discuss this advice from an experienced flight attendant: "I think all flight attendants have to be able to cope with pressure and stress. They have to be able to demonstrate calmness, and they also have to be confident about what they are doing and what their role is. If you can be calm, if you can absorb your training and know your role, then the training will automatically take over." Do you agree with this analysis?',
    },
    {
      id: 'ex-20', type: 'speaking', points: 15,
      question: 'In emergencies, do you wait for orders or follow your training and act quickly? Do you think training prepares crew well for real emergency incidents? What was your worst experience of an emergency, either as a flight attendant or as a passenger?',
    },
  ],
  quiz: {
    id: 'quiz-7-3',
    title: 'Reporting an Evacuation Quiz',
    passingScore: 70,
    exercises: [
      {
        id: 'q-1', type: 'multiple-choice', points: 20,
        question: 'How many people were on board Flight 1549?',
        options: [
          { id: 'o1', text: '155 (150 passengers and 5 crew)', isCorrect: true },
          { id: 'o2', text: '100', isCorrect: false },
          { id: 'o3', text: '200', isCorrect: false },
          { id: 'o4', text: '50', isCorrect: false },
        ],
      },
      {
        id: 'q-2', type: 'multiple-choice', points: 20,
        question: 'How long after take-off did Flight 1549 ditch?',
        options: [
          { id: 'o1', text: 'Less than seven minutes', isCorrect: true },
          { id: 'o2', text: 'About one hour', isCorrect: false },
          { id: 'o3', text: 'Thirty minutes', isCorrect: false },
          { id: 'o4', text: 'It never took off', isCorrect: false },
        ],
      },
      {
        id: 'q-3', type: 'multiple-choice', points: 20,
        question: 'What caused the tail-strike incident?',
        options: [
          { id: 'o1', text: 'The aircraft tail hit the runway during take-off', isCorrect: true },
          { id: 'o2', text: 'A bird-strike', isCorrect: false },
          { id: 'o3', text: 'A lightning strike', isCorrect: false },
          { id: 'o4', text: 'A collision with another aircraft', isCorrect: false },
        ],
      },
      {
        id: 'q-4', type: 'multiple-choice', points: 20,
        question: 'How many oxygen masks failed to deploy in the tail-strike incident?',
        options: [
          { id: 'o1', text: 'Nine', isCorrect: true },
          { id: 'o2', text: 'All of them', isCorrect: false },
          { id: 'o3', text: 'None', isCorrect: false },
          { id: 'o4', text: 'Two', isCorrect: false },
        ],
      },
      {
        id: 'q-5', type: 'multiple-choice', points: 20,
        question: 'Reported speech: "Don\'t worry," said the purser to the passengers. How is this reported?',
        options: [
          { id: 'o1', text: 'The purser told the passengers not to worry.', isCorrect: true },
          { id: 'o2', text: 'The purser told the passengers to not worry ever.', isCorrect: false },
          { id: 'o3', text: 'The purser said don\'t worry to the passengers.', isCorrect: false },
          { id: 'o4', text: 'The purser worried the passengers.', isCorrect: false },
        ],
      },
    ],
  },
  flashcards: [
    { id: 'fc-1', front: 'Bird-strike', back: 'A collision between an aircraft and a bird' },
    { id: 'fc-2', front: 'Ditched', back: 'Landed on water in an emergency' },
    { id: 'fc-3', front: 'Submerged', back: 'Under water' },
    { id: 'fc-4', front: 'Tail-strike', back: 'When the aircraft tail hits the ground on take-off' },
    { id: 'fc-5', front: 'To deteriorate', back: 'To get worse' },
  ],
  review: {
    keyPoints: [
      "Reported speech uses 'told...to' for positive instructions and 'told...not to' for negative ones",
      'The weak form of "to" is unstressed in natural spoken English',
      'Flight 1549 succeeded because of first-class crew training, not luck alone',
      'Clear, fast communication between cabin crew and the flight deck is critical',
      'Even when an incident is minor, poor follow-up communication can upset passengers',
    ],
    commonMistakes: [
      { mistake: 'Delaying communication with the flight deck when something feels wrong', correction: 'Escalate promptly, even without full information', explanation: 'The tail-strike case study shows how delay worsened the situation' },
      { mistake: 'Assuming a "miracle" outcome was just luck', correction: 'Recognize the role of training and procedure in successful outcomes', explanation: 'This reinforces the value of taking training seriously' },
    ],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

// ============================================================
// Unit 8, Lesson 1: Responding to Passenger Complaints
// Offering to help (2)
// ============================================================
const A8A = '/audio/unit-8/lesson-1';

const RESPONDING_COMPLAINTS_LESSON: any = {
  id: 'lesson-8-1',
  unitId: 'unit-8',
  title: 'Responding to Passenger Complaints',
  description: 'Responding positively to meal-service complaints using sympathize, apologize, reason, solution',
  icon: '😤',
  icaoLevel: 5,
  category: 'cabin-crew',
  difficulty: 'upper-intermediate',
  xpReward: 180,
  estimatedDurationMinutes: 45,
  locked: false,
  order: 1,
  objectives: [
    { id: 'obj-1', description: 'Respond positively to common passenger complaints', type: 'speaking' },
    { id: 'obj-2', description: 'Apply the sympathize-apologize-reason-solution pattern', type: 'speaking' },
    { id: 'obj-3', description: 'Recognize a range of complaint-response phrases', type: 'listening' },
  ],
  scenario: {
    id: 'scenario-responding-complaints',
    title: 'Three Meal-Service Complaints',
    description: 'A flight attendant responds to three different passenger complaints during the meal service.',
    context: 'Cabin, meal service',
    audioSegments: [
      { id: 'c1-p', text: "Passenger: Excuse me, we've been waiting for drinks for a long time. We finished eating 20 minutes ago.", audioUrl: `${A8A}/c1-passenger.wav`, durationSeconds: 5, speaker: 'passenger' },
      { id: 'c1-fa', text: "Flight attendant: Oh, I do understand. I apologize. It's been so busy. What can I get you?", audioUrl: `${A8A}/c1-fa.wav`, durationSeconds: 5, speaker: 'crew' },
      { id: 'c2-p', text: "Passenger: I'm sorry, I can't eat this meal - it's cold!", audioUrl: `${A8A}/c2-passenger.wav`, durationSeconds: 3, speaker: 'passenger' },
      { id: 'c2-fa', text: "Flight attendant: Oh dear, that's not right. I'm so sorry. Let me take it for you and see if I can get you a hot cooked meal immediately.", audioUrl: `${A8A}/c2-fa.wav`, durationSeconds: 6, speaker: 'crew' },
      { id: 'c3-p', text: 'Passenger: This is not what I asked for. I ordered a vegetarian meal!', audioUrl: `${A8A}/c3-passenger.wav`, durationSeconds: 4, speaker: 'passenger' },
      { id: 'c3-fa', text: 'Flight attendant: Oh, I see. I\'m sorry about this. Please, be patient. Let me just check the meals list.', audioUrl: `${A8A}/c3-fa.wav`, durationSeconds: 5, speaker: 'crew' },
    ],
    vocabulary: [
      { word: 'Sympathize', definition: 'To show understanding of someone\'s feelings' },
      { word: 'Patient', definition: 'Able to wait calmly without complaining' },
      { word: 'Immediately', definition: 'Right away, without delay' },
    ],
  },
  theory: {
    title: 'The Complaint-Response Pattern',
    content: 'The flight attendant must be a diplomat. It is important to sympathize, apologize, give a good reason where possible, and then find a solution.',
    audioExplanation: {
      id: 'theory-audio',
      text: 'Explanation of the complaint-response pattern',
      audioUrl: `${A8A}/theory-explanation.wav`,
      durationSeconds: 20,
      speaker: 'instructor',
    },
  },
  icaoPhraseoology: STANDARD_PHRASEOLOGY,
  cabinCrewPhraseoology: {
    category: 'Offering to Help (2)',
    phrases: [
      { situation: 'Checking something for a passenger', phrase: 'Let me just check the special meals list.', meaning: 'Offering to investigate a problem', example: 'Let me just check the special meals list.' },
      { situation: 'Getting a form or document', phrase: 'Let me get an official form for you.', meaning: 'Offering to fetch paperwork', example: 'Let me get an official form for you.' },
      { situation: 'Offering a replacement', phrase: 'Let me see if I can get you another one.', meaning: 'Offering to try to fix a problem', example: 'Let me see if I can get you another one.' },
      { situation: 'Offering comfort items', phrase: 'Let me get you a blanket.', meaning: 'A simple, immediate offer', example: 'Let me get you a blanket.' },
    ],
  },
  airlineVocabulary: [{
    category: 'Common Complaints',
    terms: [
      { term: 'Flight delay', definition: 'Waiting time before or during a flight', example: 'Passengers often complain about flight delays and waiting time.' },
      { term: 'Cabin temperature', definition: 'How hot or cold the cabin feels', example: 'Some passengers complain about the cabin temperature.' },
      { term: 'Seating arrangements', definition: 'Where passengers are seated', example: 'Seating arrangements are a common complaint.' },
      { term: 'Lack of information', definition: 'Not being told enough about a situation', example: 'Passengers dislike a lack of information during delays.' },
    ],
  }],
  professionalExpressions: [
    { situation: 'Sympathizing with a complaint', expression: 'Oh, I do understand.', alternativeExpressions: ['I completely understand your frustration.', 'That must be frustrating.'] },
    { situation: 'Explaining a reason without excusing', expression: "It's been so busy.", alternativeExpressions: ['We\'ve had a lot to manage today.', 'The service has taken longer than usual.'] },
  ],
  pronunciation: [
    { id: 'pron-1', text: 'Let me just check the special meals list.', audioUrl: `${A8A}/pronunciation.wav`, durationSeconds: 3 },
  ],
  vocabulary: [
    { word: 'Sympathize', definition: 'To show understanding of someone\'s feelings' },
    { word: 'Patient', definition: 'Able to wait calmly without complaining' },
    { word: 'Immediately', definition: 'Right away, without delay' },
    { word: 'Frustrating', definition: 'Causing annoyance or a feeling of being unable to change something' },
  ],
  grammar: [
    {
      rule: "The complaint-response pattern: Sympathize -> Apologize -> Reason (optional) -> Solution",
      examples: [
        { sentence: 'Sympathize: "I do understand." Apologize: "I apologize." Reason: "It\'s been so busy." Solution: "What can I get you?"' },
        { sentence: 'Sympathize: "Oh dear, that\'s not right." Apologize: "I\'m so sorry." Solution: "Let me get you a hot meal immediately."' },
      ],
    },
  ],
  exercises: [
    {
      id: 'ex-1', type: 'speaking', points: 15,
      question: 'What do passengers commonly complain about: flight delays, the service, the food, the cabin temperature, seating arrangements, the drinks, lack of information, the state of the toilets, or even the cabin crew? What would passengers typically say when complaining about each?',
    },
    {
      id: 'ex-2', type: 'speaking', points: 15,
      question: 'What would you say in reply to these complaints? 1) "We\'ve been waiting for drinks for a long time. We finished eating 20 minutes ago." 2) "I can\'t eat this meal - it\'s cold!" 3) "This is not what I asked for. I ordered a vegetarian meal!"',
    },
    {
      id: 'ex-3', type: 'fill-blank', points: 10,
      question: "Oh, I do understand. I apologize. It's been so _________. What can I get you?",
      audio: { id: 'c1-audio', text: 'Response to drinks complaint', audioUrl: `${A8A}/c1-fa.wav`, durationSeconds: 5, speaker: 'crew' },
      correctAnswer: 'busy',
    },
    {
      id: 'ex-4', type: 'fill-blank', points: 10,
      question: "Oh dear, that's not right. I'm sorry. Let me take it for you and see if I can get you a hot cooked meal _________.",
      correctAnswer: 'immediately',
    },
    {
      id: 'ex-5', type: 'fill-blank', points: 10,
      question: "Oh, I see. I'm sorry about this. Please, be _________. Let me just check the meals list.",
      correctAnswer: 'patient',
    },
    {
      id: 'ex-6', type: 'multiple-choice', points: 10,
      question: 'What is the first step in the complaint-response pattern?',
      options: [
        { id: 'o1', text: 'Sympathize', isCorrect: true },
        { id: 'o2', text: 'Apologize', isCorrect: false },
        { id: 'o3', text: 'Give a reason', isCorrect: false },
        { id: 'o4', text: 'Find a solution', isCorrect: false },
      ],
    },
    {
      id: 'ex-7', type: 'multiple-choice', points: 10,
      question: 'What is the last step in the complaint-response pattern?',
      options: [
        { id: 'o1', text: 'Find a solution', isCorrect: true },
        { id: 'o2', text: 'Sympathize', isCorrect: false },
        { id: 'o3', text: 'Apologize', isCorrect: false },
        { id: 'o4', text: 'Blame someone else', isCorrect: false },
      ],
    },
    {
      id: 'ex-8', type: 'speaking', points: 15,
      question: 'Is it always a good idea to give a reason or excuse for a problem? Are there times when it is better not to give excuses? Discuss with examples.',
    },
    {
      id: 'ex-9', type: 'speaking', points: 15,
      question: "Practise saying the offering-to-help phrases: 'Let me just check the special meals list.', 'Let me get an official form for you.', 'Let me see if I can get you another one.', 'Let me get you a blanket.'",
    },
    {
      id: 'ex-10', type: 'fill-blank', points: 10,
      question: 'Thank you for _________ me know, and I do apologize.',
      correctAnswer: 'letting',
    },
    {
      id: 'ex-11', type: 'fill-blank', points: 10,
      question: 'I do apologize, sir. I know how _________ it is.',
      correctAnswer: 'frustrating',
    },
    {
      id: 'ex-12', type: 'fill-blank', points: 10,
      question: "I'm sorry that you haven't _________ your flight.",
      correctAnswer: 'enjoyed',
    },
    {
      id: 'ex-13', type: 'fill-blank', points: 10,
      question: "We've had many problems today and I can only _________.",
      correctAnswer: 'apologize',
    },
    {
      id: 'ex-14', type: 'speaking', points: 15,
      question: 'Listen to five different complaints in your mind and imagine identifying each problem. What would you say in response to each? How well do experienced flight attendants typically deal with such complaints?',
    },
  ],
  quiz: {
    id: 'quiz-8-1',
    title: 'Responding to Passenger Complaints Quiz',
    passingScore: 70,
    exercises: [
      {
        id: 'q-1', type: 'multiple-choice', points: 20,
        question: 'What does the flight attendant offer the passenger with the cold meal?',
        options: [
          { id: 'o1', text: 'A hot cooked meal immediately', isCorrect: true },
          { id: 'o2', text: 'A refund', isCorrect: false },
          { id: 'o3', text: 'Nothing, the meal cannot be changed', isCorrect: false },
          { id: 'o4', text: 'A different drink', isCorrect: false },
        ],
      },
      {
        id: 'q-2', type: 'multiple-choice', points: 20,
        question: 'What is the correct order of the complaint-response pattern?',
        options: [
          { id: 'o1', text: 'Sympathize, apologize, reason, solution', isCorrect: true },
          { id: 'o2', text: 'Solution, sympathize, apologize, reason', isCorrect: false },
          { id: 'o3', text: 'Reason, solution, apologize, sympathize', isCorrect: false },
          { id: 'o4', text: 'Apologize, solution, sympathize, reason', isCorrect: false },
        ],
      },
      {
        id: 'q-3', type: 'multiple-choice', points: 20,
        question: 'What meal problem does the third passenger have?',
        options: [
          { id: 'o1', text: 'They received the wrong meal - not the vegetarian one they ordered', isCorrect: true },
          { id: 'o2', text: 'Their meal was cold', isCorrect: false },
          { id: 'o3', text: 'They received no meal at all', isCorrect: false },
          { id: 'o4', text: 'Their meal was too spicy', isCorrect: false },
        ],
      },
      {
        id: 'q-4', type: 'multiple-choice', points: 20,
        question: 'Which phrase offers to investigate a problem?',
        options: [
          { id: 'o1', text: 'Let me just check the special meals list.', isCorrect: true },
          { id: 'o2', text: 'There is nothing I can do.', isCorrect: false },
          { id: 'o3', text: 'That is not my department.', isCorrect: false },
          { id: 'o4', text: 'You should have ordered earlier.', isCorrect: false },
        ],
      },
      {
        id: 'q-5', type: 'multiple-choice', points: 20,
        question: 'What does "immediately" mean?',
        options: [
          { id: 'o1', text: 'Right away, without delay', isCorrect: true },
          { id: 'o2', text: 'Eventually', isCorrect: false },
          { id: 'o3', text: 'Never', isCorrect: false },
          { id: 'o4', text: 'Rarely', isCorrect: false },
        ],
      },
    ],
  },
  flashcards: [
    { id: 'fc-1', front: 'Sympathize', back: 'To show understanding of someone\'s feelings' },
    { id: 'fc-2', front: 'Patient', back: 'Able to wait calmly without complaining' },
    { id: 'fc-3', front: 'Frustrating', back: 'Causing annoyance or a feeling of being unable to change something' },
  ],
  review: {
    keyPoints: [
      'The complaint-response pattern: sympathize, apologize, reason (optional), solution',
      'Always end a complaint response with a concrete offer of help',
      'A reason is not always necessary or wise to give',
      '"Let me..." phrases signal an immediate, personal offer to help',
      'A calm, understanding tone de-escalates most complaints',
    ],
    commonMistakes: [
      { mistake: 'Responding to a complaint with only an apology and no solution', correction: 'Always follow up with a concrete offer of help', explanation: 'Passengers want action, not just words' },
      { mistake: 'Making excuses that sound like blaming someone else', correction: 'Keep reasons brief and focused on the solution', explanation: 'Excessive excuse-making can seem defensive' },
    ],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

// ============================================================
// Unit 8, Lesson 2: Dealing with Complaints About Other Passengers
// If...
// ============================================================
const A8B = '/audio/unit-8/lesson-2';

const COMPLAINTS_OTHERS_LESSON: any = {
  id: 'lesson-8-2',
  unitId: 'unit-8',
  title: 'Dealing with Complaints About Other Passengers',
  description: 'Handling a passenger complaint about a noisy group, using conditional sentences with "if"',
  icon: '🗣️',
  icaoLevel: 5,
  category: 'cabin-crew',
  difficulty: 'upper-intermediate',
  xpReward: 180,
  estimatedDurationMinutes: 45,
  locked: false,
  order: 2,
  objectives: [
    { id: 'obj-1', description: 'Handle a complaint about another passenger diplomatically', type: 'speaking' },
    { id: 'obj-2', description: 'Use conditional sentences with "if" to explain next steps', type: 'grammar' },
    { id: 'obj-3', description: 'Make polite requests to disruptive passengers', type: 'speaking' },
  ],
  scenario: {
    id: 'scenario-complaints-others',
    title: 'A Noisy Group',
    description: 'Flight attendant Josef deals with a passenger complaint about a noisy group, then speaks to the group directly.',
    context: 'Cabin, passenger complaining about a noisy nearby group',
    audioSegments: [
      { id: 'd1-01', text: "Passenger: Excuse me, listen, I can't sit here any longer. That group of people is making too much noise. They are disturbing me and everyone around. If you can't do anything about it, you'll have to find me another seat. I don't want to sit here any longer.", audioUrl: `${A8B}/d1-01-passenger.wav`, durationSeconds: 8, speaker: 'passenger' },
      { id: 'd1-02', text: "Josef: Hmm, yes, I understand. I can hear how noisy they are and I'm sorry they are disturbing you. Have you spoken to them yourself?", audioUrl: `${A8B}/d1-02-josef.wav`, durationSeconds: 6, speaker: 'crew' },
      { id: 'd1-03', text: "Passenger: Of course not. I don't think they care about me or anyone else.", audioUrl: `${A8B}/d1-03-passenger.wav`, durationSeconds: 4, speaker: 'passenger' },
      { id: 'd1-04', text: "Josef: Let me have a word with them. If it doesn't get better, then I'll try to find you another seat, although the plane is pretty full. Is that alright about that?", audioUrl: `${A8B}/d1-04-josef.wav`, durationSeconds: 7, speaker: 'crew' },
      { id: 'd1-05', text: 'Passenger: Well, er... yes, OK. Thank you. That would be fine.', audioUrl: `${A8B}/d1-05-passenger.wav`, durationSeconds: 3, speaker: 'passenger' },
      { id: 'd2-01', text: "Josef: Hans, I've got a problem. A passenger is complaining about a noisy group nearby and wants to move seats.", audioUrl: `${A8B}/d2-01-josef.wav`, durationSeconds: 5, speaker: 'crew' },
      { id: 'd2-02', text: 'Hans: Is that possible?', audioUrl: `${A8B}/d2-02-hans.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'd2-03', text: "Josef: It'll be difficult, the plane's pretty full. I'm going to speak to the group first and ask them to quiet down.", audioUrl: `${A8B}/d2-03-josef.wav`, durationSeconds: 5, speaker: 'crew' },
      { id: 'd2-04', text: "Hans: OK, I'll check if there are any free seats just in case.", audioUrl: `${A8B}/d2-04-hans.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'd3-01', text: 'Josef: Excuse me, excuse me. Listen guys, are you enjoying the flight?', audioUrl: `${A8B}/d3-01-josef.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'd3-02', text: 'Passenger 2: Yes, yes, sure.', audioUrl: `${A8B}/d3-02-p2.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 'd3-03', text: "Passenger 3: You bet, it's great.", audioUrl: `${A8B}/d3-03-p3.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 'd3-04', text: "Josef: Could I ask you a special favour? Would you mind just keeping your voices down a little? You're getting a little loud and some people are trying to sleep or watch a film.", audioUrl: `${A8B}/d3-04-josef.wav`, durationSeconds: 8, speaker: 'crew' },
      { id: 'd3-05', text: "Passenger 2: Why? Who's complaining?", audioUrl: `${A8B}/d3-05-p2.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 'd3-06', text: 'Passenger 3: Are we making a lot of noise?', audioUrl: `${A8B}/d3-06-p3.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 'd3-07', text: "Josef: No-one's complained, but we can hear you all in the galley!", audioUrl: `${A8B}/d3-07-josef.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'd3-08', text: 'Passenger 2: Oh, OK, no problem.', audioUrl: `${A8B}/d3-08-p2.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 'd3-09', text: 'Passenger 3: OK.', audioUrl: `${A8B}/d3-09-p3.wav`, durationSeconds: 1, speaker: 'passenger' },
      { id: 'd3-10', text: 'Passenger 2: How about a drink?', audioUrl: `${A8B}/d3-10-p2.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 'd3-11', text: "Josef: Sure, I'll get you another drink if you keep your voices down. Thanks for your cooperation.", audioUrl: `${A8B}/d3-11-josef.wav`, durationSeconds: 5, speaker: 'crew' },
    ],
    vocabulary: [
      { word: 'Disturbing', definition: 'Interrupting or upsetting someone' },
      { word: 'Favour', definition: 'A kind or helpful act asked of someone' },
      { word: 'Cooperation', definition: 'Working together helpfully' },
    ],
  },
  theory: {
    title: "Complaints About Other Passengers",
    content: 'When passengers complain about each other, cabin crew must listen, address the source of the problem diplomatically, and only offer to move someone as a last resort if the plane has space.',
    audioExplanation: {
      id: 'theory-audio',
      text: 'Explanation of dealing with complaints about other passengers',
      audioUrl: `${A8B}/theory-explanation.wav`,
      durationSeconds: 20,
      speaker: 'instructor',
    },
  },
  icaoPhraseoology: STANDARD_PHRASEOLOGY,
  cabinCrewPhraseoology: {
    category: 'If... (Conditional Offers)',
    phrases: [
      { situation: 'Offering a conditional solution', phrase: "If the situation doesn't get better, then I'll try to find you another seat.", meaning: 'A conditional promise depending on future events', example: "If the situation doesn't get better, then I'll try to find you another seat." },
      { situation: 'Promising to follow up', phrase: "If there's still a problem, then I'll come over.", meaning: 'A conditional commitment to return', example: "If there's still a problem, then I'll come over." },
      { situation: 'Reassuring with a condition', phrase: "If there is still a problem, I won't leave you on your own.", meaning: 'A reassuring conditional promise', example: "If there is still a problem, I won't leave you on your own." },
      { situation: 'Trading a favour', phrase: "I'll get you another drink if you keep your voices down.", meaning: 'A conditional exchange', example: "I'll get you another drink if you keep your voices down." },
    ],
  },
  airlineVocabulary: [{
    category: 'Polite Requests',
    terms: [
      { term: 'Special favour', definition: 'A polite way to introduce an unusual request', example: 'Could I ask you a special favour?' },
      { term: 'Keep your voice down', definition: 'To speak more quietly', example: 'Would you mind just keeping your voices down a little?' },
      { term: 'Galley', definition: 'The kitchen area of an aircraft', example: 'We can hear you all in the galley!' },
    ],
  }],
  professionalExpressions: [
    { situation: 'Getting a group\'s attention politely', expression: 'Excuse me, excuse me. Listen guys...', alternativeExpressions: ['Sorry to interrupt, could I have a moment?', 'Excuse me, may I ask you something?'] },
    { situation: 'Softening a request', expression: 'No-one\'s complained, but we can hear you all in the galley!', alternativeExpressions: ['It\'s just that your voices carry quite far.', 'We can hear you from the back of the cabin.'] },
  ],
  pronunciation: [
    { id: 'pron-1', text: 'Could I ask you a special favour?', audioUrl: `${A8B}/pronunciation.wav`, durationSeconds: 3 },
  ],
  vocabulary: [
    { word: 'Disturbing', definition: 'Interrupting or upsetting someone' },
    { word: 'Favour', definition: 'A kind or helpful act asked of someone' },
    { word: 'Cooperation', definition: 'Working together helpfully' },
    { word: 'Galley', definition: 'The kitchen area of an aircraft' },
  ],
  grammar: [
    {
      rule: "First conditional (If + present simple, will + verb) - used for offers and promises that depend on a future condition",
      examples: [
        { sentence: "If the situation doesn't get better, then I'll try to find you another seat.", audioUrl: `${A8B}/if-1.wav` },
        { sentence: "If there's still a problem, then I'll come over.", audioUrl: `${A8B}/if-2.wav` },
        { sentence: "I'll get you another drink if you keep your voices down.", audioUrl: `${A8B}/if-4.wav` },
      ],
    },
  ],
  exercises: [
    {
      id: 'ex-1', type: 'speaking', points: 15,
      question: 'What sort of complaints can passengers make about other passengers? In your experience, which are the most common? What do you do when passengers complain about other passengers?',
    },
    {
      id: 'ex-2', type: 'multiple-choice', points: 10,
      question: 'Why is the passenger angry?',
      options: [
        { id: 'o1', text: 'A nearby group is making too much noise', isCorrect: true },
        { id: 'o2', text: 'The food is cold', isCorrect: false },
        { id: 'o3', text: 'The flight is delayed', isCorrect: false },
        { id: 'o4', text: 'Their seat is broken', isCorrect: false },
      ],
    },
    {
      id: 'ex-3', type: 'multiple-choice', points: 10,
      question: 'What does the passenger want to do?',
      options: [
        { id: 'o1', text: 'Move to another seat', isCorrect: true },
        { id: 'o2', text: 'Get off the plane', isCorrect: false },
        { id: 'o3', text: 'Speak to the captain', isCorrect: false },
        { id: 'o4', text: 'Have the group arrested', isCorrect: false },
      ],
    },
    {
      id: 'ex-4', type: 'multiple-choice', points: 10,
      question: 'What does Josef suggest first?',
      options: [
        { id: 'o1', text: 'Speaking to the noisy group before considering a seat move', isCorrect: true },
        { id: 'o2', text: 'Moving the passenger immediately', isCorrect: false },
        { id: 'o3', text: 'Ignoring the complaint', isCorrect: false },
        { id: 'o4', text: 'Calling the purser straight away', isCorrect: false },
      ],
    },
    {
      id: 'ex-5', type: 'multiple-choice', points: 10,
      question: 'Is the passenger satisfied with Josef\'s response?',
      options: [
        { id: 'o1', text: 'Yes, reluctantly, but satisfied', isCorrect: true },
        { id: 'o2', text: 'No, they demand to speak to the captain', isCorrect: false },
      ],
    },
    {
      id: 'ex-6', type: 'fill-blank', points: 10,
      question: 'They are _________ me and everyone around.',
      audio: { id: 'd1-01-audio', text: 'Passenger complaint', audioUrl: `${A8B}/d1-01-passenger.wav`, durationSeconds: 8, speaker: 'passenger' },
      correctAnswer: 'disturbing',
    },
    {
      id: 'ex-7', type: 'fill-blank', points: 10,
      question: 'I don\'t think they _________ about me or anyone else.',
      correctAnswer: 'care',
    },
    {
      id: 'ex-8', type: 'fill-blank', points: 10,
      question: 'Let me have a _________ with them.',
      correctAnswer: 'word',
    },
    {
      id: 'ex-9', type: 'multiple-choice', points: 10,
      question: 'Will it be easy for Josef to move the angry passenger?',
      options: [
        { id: 'o1', text: 'No, the plane is pretty full', isCorrect: true },
        { id: 'o2', text: 'Yes, there are many free seats', isCorrect: false },
      ],
    },
    {
      id: 'ex-10', type: 'multiple-choice', points: 10,
      question: 'What will Josef have to do first to deal with the situation?',
      options: [
        { id: 'o1', text: 'Speak to the noisy group', isCorrect: true },
        { id: 'o2', text: 'Inform the captain', isCorrect: false },
        { id: 'o3', text: 'File an incident report', isCorrect: false },
        { id: 'o4', text: 'Call security', isCorrect: false },
      ],
    },
    {
      id: 'ex-11', type: 'multiple-choice', points: 10,
      question: 'What will Hans do to help?',
      options: [
        { id: 'o1', text: 'Check if there are any free seats', isCorrect: true },
        { id: 'o2', text: 'Speak to the group himself', isCorrect: false },
        { id: 'o3', text: 'Serve the noisy group more drinks', isCorrect: false },
        { id: 'o4', text: 'Nothing', isCorrect: false },
      ],
    },
    {
      id: 'ex-12', type: 'fill-blank', points: 10,
      question: 'Listen guys, are you _________ the flight?',
      correctAnswer: 'enjoying',
    },
    {
      id: 'ex-13', type: 'fill-blank', points: 10,
      question: 'Would you mind just keeping your voices down a little? You\'re getting a little _________.',
      correctAnswer: 'loud',
    },
    {
      id: 'ex-14', type: 'fill-blank', points: 10,
      question: 'Some people are trying to sleep or watch a _________.',
      correctAnswer: 'film',
    },
    {
      id: 'ex-15', type: 'fill-blank', points: 10,
      question: 'No-one\'s complained, but we can _________ you all in the galley!',
      correctAnswer: 'hear',
    },
    {
      id: 'ex-16', type: 'speaking', points: 15,
      question: "How well do you think Josef dealt with the situation? Is there anything you would handle differently?",
    },
    {
      id: 'ex-17', type: 'speaking', points: 15,
      question: 'Practise these polite requests with very polite intonation: "Could I ask you a special favour?", "Would you mind just keeping the noise down a little?", "Please could you come over to help me?"',
    },
    {
      id: 'ex-18', type: 'speaking', points: 20,
      question: 'In pairs or groups of three, role-play a situation like Josef\'s: a flight attendant says hello to passengers, explains a problem, the passengers reply, the flight attendant responds, thanks them and makes an offer, and the passengers say thanks. Then swap roles and try again. Who dealt with the problem best?',
    },
  ],
  quiz: {
    id: 'quiz-8-2',
    title: 'Dealing with Complaints About Other Passengers Quiz',
    passingScore: 70,
    exercises: [
      {
        id: 'q-1', type: 'multiple-choice', points: 20,
        question: 'What does the noisy group agree to do?',
        options: [
          { id: 'o1', text: 'Keep their voices down', isCorrect: true },
          { id: 'o2', text: 'Move to different seats', isCorrect: false },
          { id: 'o3', text: 'Leave the aircraft', isCorrect: false },
          { id: 'o4', text: 'Stop drinking', isCorrect: false },
        ],
      },
      {
        id: 'q-2', type: 'multiple-choice', points: 20,
        question: 'What does Josef offer the group in exchange for quieting down?',
        options: [
          { id: 'o1', text: 'Another drink', isCorrect: true },
          { id: 'o2', text: 'A free upgrade', isCorrect: false },
          { id: 'o3', text: 'Extra snacks', isCorrect: false },
          { id: 'o4', text: 'Nothing', isCorrect: false },
        ],
      },
      {
        id: 'q-3', type: 'multiple-choice', points: 20,
        question: 'Complete: "If there\'s still a problem, then I\'ll _____."',
        options: [
          { id: 'o1', text: 'come over', isCorrect: true },
          { id: 'o2', text: 'ignore it', isCorrect: false },
          { id: 'o3', text: 'call the police', isCorrect: false },
          { id: 'o4', text: 'shout at them', isCorrect: false },
        ],
      },
      {
        id: 'q-4', type: 'multiple-choice', points: 20,
        question: 'What is Hans\'s role in this situation?',
        options: [
          { id: 'o1', text: 'A colleague who checks for free seats', isCorrect: true },
          { id: 'o2', text: 'The purser', isCorrect: false },
          { id: 'o3', text: 'The captain', isCorrect: false },
          { id: 'o4', text: 'A passenger', isCorrect: false },
        ],
      },
      {
        id: 'q-5', type: 'multiple-choice', points: 20,
        question: 'What does "galley" mean?',
        options: [
          { id: 'o1', text: 'The kitchen area of an aircraft', isCorrect: true },
          { id: 'o2', text: 'The cockpit', isCorrect: false },
          { id: 'o3', text: 'An emergency exit', isCorrect: false },
          { id: 'o4', text: 'The overhead locker', isCorrect: false },
        ],
      },
    ],
  },
  flashcards: [
    { id: 'fc-1', front: 'Disturbing', back: 'Interrupting or upsetting someone' },
    { id: 'fc-2', front: 'Favour', back: 'A kind or helpful act asked of someone' },
    { id: 'fc-3', front: 'Galley', back: 'The kitchen area of an aircraft' },
    { id: 'fc-4', front: 'Cooperation', back: 'Working together helpfully' },
  ],
  review: {
    keyPoints: [
      'Address the source of a complaint (the other passenger/group) before offering to move anyone',
      'Use first conditional sentences (if + will) to make clear, fair offers',
      'Very polite requests work well with disruptive groups: "Could I ask you a special favour?"',
      'A small gesture (like offering a drink) can help secure cooperation',
      'Moving a passenger should be a last resort, especially on a full flight',
    ],
    commonMistakes: [
      { mistake: 'Immediately promising to move a complaining passenger', correction: 'Try to resolve the root cause first', explanation: 'Moving passengers is often impossible on a full flight' },
      { mistake: 'Being too direct or confrontational with a noisy group', correction: 'Use very polite, indirect language', explanation: 'This avoids embarrassing or provoking the group' },
    ],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

// ============================================================
// Unit 8, Lesson 3: Managing Disruptive Passengers
// Expressing obligation
// + Case Study: Unruly and Disruptive Behaviour (six newspaper extracts)
// ============================================================
const A8C = '/audio/unit-8/lesson-3';

const DISRUPTIVE_PASSENGERS_LESSON: any = {
  id: 'lesson-8-3',
  unitId: 'unit-8',
  title: 'Managing Disruptive Passengers',
  description: "Managing a seriously disruptive passenger with clear obligation language, and the case study: Unruly and Disruptive Behaviour",
  icon: '🚫',
  icaoLevel: 5,
  category: 'cabin-crew',
  difficulty: 'upper-intermediate',
  xpReward: 220,
  estimatedDurationMinutes: 65,
  locked: false,
  order: 3,
  objectives: [
    { id: 'obj-1', description: 'Manage a seriously disruptive passenger', type: 'speaking' },
    { id: 'obj-2', description: 'Express obligation clearly (have to, must, need to)', type: 'grammar' },
    { id: 'obj-3', description: 'Discuss real cases of air rage and disruptive behaviour', type: 'reading' },
  ],
  scenario: {
    id: 'scenario-disruptive-passenger',
    title: 'A Disruptive Passenger',
    description: 'Flight attendants Jenny and Tom, and purser Ted, deal with a drunk and aggressive passenger who wants more alcohol.',
    context: 'Cabin, a seriously disruptive passenger incident',
    audioSegments: [
      { id: 'd1-01', text: "Jenny: Tom, I've got a problem in 24C - the passenger's been drinking and he's getting aggressive. He wants another drink but he's clearly had enough.", audioUrl: `${A8C}/d1-01-jenny.wav`, durationSeconds: 6, speaker: 'crew' },
      { id: 'd1-02', text: 'Tom: How aggressive?', audioUrl: `${A8C}/d1-02-tom.wav`, durationSeconds: 2, speaker: 'crew' },
      { id: 'd1-03', text: "Jenny: He's shouting, and he just said if we don't serve him he's going to cause trouble.", audioUrl: `${A8C}/d1-03-jenny.wav`, durationSeconds: 5, speaker: 'crew' },
      { id: 'd1-04', text: "Ted: Sir, I'm afraid we can't serve you any more alcohol.", audioUrl: `${A8C}/d1-04-ted.wav`, durationSeconds: 3, speaker: 'crew' },
      { id: 'd1-05', text: "Passenger: I'll do whatever I want!", audioUrl: `${A8C}/d1-05-passenger.wav`, durationSeconds: 2, speaker: 'passenger' },
      { id: 'd1-06', text: "Ted: I have to ask you to calm down, or I'll have to involve the captain.", audioUrl: `${A8C}/d1-06-ted.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'd1-07', text: "Ted: I have to inform the captain about this. We'll need police assistance after landing.", audioUrl: `${A8C}/d1-07-ted.wav`, durationSeconds: 4, speaker: 'crew' },
      { id: 'd1-08', text: 'Ted: Tom, please keep the other passengers calm and reassured while I deal with this.', audioUrl: `${A8C}/d1-08-ted.wav`, durationSeconds: 4, speaker: 'crew' },
    ],
    vocabulary: [
      { word: 'Aggressive', definition: 'Ready to attack or behave in a hostile way' },
      { word: 'Restrain', definition: 'To hold someone back or stop them from doing something' },
      { word: 'Assistance', definition: 'Help' },
    ],
  },
  theory: {
    title: 'Expressing Obligation',
    content: 'When a passenger becomes truly disruptive, cabin crew must express clear obligation - what they have to do - while keeping other passengers calm and involving the captain when necessary.',
    audioExplanation: {
      id: 'theory-audio',
      text: 'Explanation of expressing obligation',
      audioUrl: `${A8C}/theory-explanation.wav`,
      durationSeconds: 20,
      speaker: 'instructor',
    },
  },
  icaoPhraseoology: STANDARD_PHRASEOLOGY,
  cabinCrewPhraseoology: {
    category: 'Expressing Obligation',
    phrases: [
      { situation: 'Stating a personal obligation', phrase: 'I have to speak to the captain. / I\'ve got to speak to the captain. / I must speak to the captain.', meaning: 'Three ways to express the same obligation', example: 'I have to speak to the captain.' },
      { situation: 'Stating a shared obligation', phrase: 'We must call the police. / We need to call security.', meaning: 'Expressing group obligation in a serious situation', example: 'We must call the police.' },
      { situation: 'Instructing the passenger', phrase: 'You have to sit down, sir. / You have to be quiet.', meaning: 'Direct obligation instructions to a disruptive passenger', example: 'You have to sit down, sir.' },
    ],
  },
  airlineVocabulary: [{
    category: 'Managing Disruptive Passengers',
    terms: [
      { term: 'Aggressive', definition: 'Ready to attack or behave in a hostile way', example: 'The passenger became aggressive after being refused more alcohol.' },
      { term: 'Restrain', definition: 'To hold someone back or stop them from doing something', example: 'It took several crew members to restrain him.' },
      { term: 'Under control', definition: 'Being safely managed', example: 'Everything is under control.' },
      { term: 'Offloaded', definition: 'Removed from an aircraft before or after a flight', example: 'The abusive passenger was offloaded before take-off.' },
    ],
  }],
  professionalExpressions: [
    { situation: 'Reassuring nearby passengers', expression: 'Please don\'t worry. Everything is under control.', alternativeExpressions: ['There\'s no need for concern, we\'re handling it.', 'We have this fully under control.'] },
    { situation: 'Acknowledging a passenger\'s distress', expression: 'I can see how upset you are.', alternativeExpressions: ['I understand this is distressing.', 'I can tell this has shaken you.'] },
  ],
  pronunciation: [
    { id: 'pron-1', text: 'I have to speak to the captain.', audioUrl: `${A8C}/pronunciation.wav`, durationSeconds: 3 },
  ],
  vocabulary: [
    { word: 'Aggressive', definition: 'Ready to attack or behave in a hostile way' },
    { word: 'Restrain', definition: 'To hold someone back or stop them from doing something' },
    { word: 'Assistance', definition: 'Help' },
    { word: 'Under control', definition: 'Being safely managed' },
    { word: 'Offloaded', definition: 'Removed from an aircraft before or after a flight' },
  ],
  grammar: [
    {
      rule: "Expressing obligation with have to / must / need to - all express necessity, with slightly different formality",
      examples: [
        { sentence: 'I have to speak to the captain.', audioUrl: `${A8C}/eo-1.wav` },
        { sentence: 'We must call the police.', audioUrl: `${A8C}/eo-4.wav` },
        { sentence: 'You have to sit down, sir.', audioUrl: `${A8C}/eo-6.wav` },
      ],
    },
  ],
  exercises: [
    {
      id: 'ex-1', type: 'speaking', points: 15,
      question: 'What are your procedures for dealing with really disruptive passengers who become aggressive, insulting or drunk and refuse to do what they are asked? What can you do, and what can\'t you do?',
    },
    {
      id: 'ex-2', type: 'multiple-choice', points: 10,
      question: 'What is the problem with the passenger?',
      options: [
        { id: 'o1', text: 'He is drunk and aggressive', isCorrect: true },
        { id: 'o2', text: 'He is unwell', isCorrect: false },
        { id: 'o3', text: 'He lost his boarding pass', isCorrect: false },
        { id: 'o4', text: 'He is afraid of flying', isCorrect: false },
      ],
    },
    {
      id: 'ex-3', type: 'multiple-choice', points: 10,
      question: 'What does the passenger want?',
      options: [
        { id: 'o1', text: 'Another alcoholic drink', isCorrect: true },
        { id: 'o2', text: 'A different seat', isCorrect: false },
        { id: 'o3', text: 'To speak to the captain', isCorrect: false },
        { id: 'o4', text: 'A refund', isCorrect: false },
      ],
    },
    {
      id: 'ex-4', type: 'multiple-choice', points: 10,
      question: 'How does Jenny describe the passenger to Tom?',
      options: [
        { id: 'o1', text: 'Aggressive and shouting', isCorrect: true },
        { id: 'o2', text: 'Quiet but worried', isCorrect: false },
        { id: 'o3', text: 'Confused and sleepy', isCorrect: false },
        { id: 'o4', text: 'Polite but persistent', isCorrect: false },
      ],
    },
    {
      id: 'ex-5', type: 'multiple-choice', points: 10,
      question: 'What does the passenger say he is going to do?',
      options: [
        { id: 'o1', text: 'Cause trouble', isCorrect: true },
        { id: 'o2', text: 'Complain to the airline afterwards', isCorrect: false },
        { id: 'o3', text: 'Leave his seat calmly', isCorrect: false },
        { id: 'o4', text: 'Apologize', isCorrect: false },
      ],
    },
    {
      id: 'ex-6', type: 'multiple-choice', points: 10,
      question: 'How do the flight attendants deal with the situation?',
      options: [
        { id: 'o1', text: 'They refuse to serve more alcohol and involve the purser', isCorrect: true },
        { id: 'o2', text: 'They ignore the passenger', isCorrect: false },
        { id: 'o3', text: 'They give him whatever he wants', isCorrect: false },
        { id: 'o4', text: 'They ask other passengers to intervene', isCorrect: false },
      ],
    },
    {
      id: 'ex-7', type: 'multiple-choice', points: 10,
      question: 'What does Ted say he has to do?',
      options: [
        { id: 'o1', text: 'Inform the captain', isCorrect: true },
        { id: 'o2', text: 'Give the passenger a free drink', isCorrect: false },
        { id: 'o3', text: 'Move all nearby passengers', isCorrect: false },
        { id: 'o4', text: 'Nothing further', isCorrect: false },
      ],
    },
    {
      id: 'ex-8', type: 'multiple-choice', points: 10,
      question: 'What does Ted say they will need after landing?',
      options: [
        { id: 'o1', text: 'Police assistance', isCorrect: true },
        { id: 'o2', text: 'Medical assistance', isCorrect: false },
        { id: 'o3', text: 'A replacement crew', isCorrect: false },
        { id: 'o4', text: 'Nothing special', isCorrect: false },
      ],
    },
    {
      id: 'ex-9', type: 'multiple-choice', points: 10,
      question: 'What does Ted tell Tom to do with the other passengers?',
      options: [
        { id: 'o1', text: 'Keep them calm and reassured', isCorrect: true },
        { id: 'o2', text: 'Move them to another cabin', isCorrect: false },
        { id: 'o3', text: 'Ask them to help restrain the passenger', isCorrect: false },
        { id: 'o4', text: 'Give them all free drinks', isCorrect: false },
      ],
    },
    {
      id: 'ex-10', type: 'fill-blank', points: 10,
      question: 'About half an hour before _________, a drunk passenger became aggressive.',
      correctAnswer: 'landing',
    },
    {
      id: 'ex-11', type: 'fill-blank', points: 10,
      question: 'The passenger became aggressive because he was refused more _________.',
      correctAnswer: 'alcohol',
    },
    {
      id: 'ex-12', type: 'fill-blank', points: 10,
      question: 'He began to shout and scream, and it took several crew members to _________ him.',
      correctAnswer: 'restrain',
    },
    {
      id: 'ex-13', type: 'fill-blank', points: 10,
      question: 'The captain was informed and the local _________ met the plane on arrival.',
      correctAnswer: 'police',
    },
    {
      id: 'ex-14', type: 'speaking', points: 15,
      question: 'Practise these obligation sentences, noticing the pronunciation of "have to": "You have to sit down, sir.", "I have to speak to the captain.", "You have to stop that now.", "You have to be quiet.", "You have to do what the captain says."',
    },
    {
      id: 'ex-15', type: 'speaking', points: 15,
      question: 'Practise these calming phrases for other passengers affected by an incident: "Would you come to the back of the plane with me, please, madam?", "I can see how upset you are.", "Can you tell me exactly what happened?", "I do apologize. Incidents like this are extremely rare.", "Please don\'t worry. Everything is under control."',
    },
    {
      id: 'ex-16', type: 'speaking', points: 15,
      question: 'Read the six newspaper extracts about unruly and disruptive behaviour (football fan brawl, an attempted door opening, an assault leading to a diversion, a wine-related assault, an offloaded abusive passenger, and a rampage at 30,000 feet). Make a list of the different kinds of behaviour mentioned and put them in order of seriousness from 1 to 5.',
    },
    {
      id: 'ex-17', type: 'speaking', points: 15,
      question: 'What seems to be the main cause of the bad behaviour in these stories? Are there several reasons, or mainly one?',
      hint: 'Consider how many of the stories involve alcohol.',
    },
    {
      id: 'ex-18', type: 'multiple-choice', points: 10,
      question: 'What caused the emergency landing in Germany in one of the stories?',
      options: [
        { id: 'o1', text: 'A brawl between rival football fans', isCorrect: true },
        { id: 'o2', text: 'A bomb threat', isCorrect: false },
        { id: 'o3', text: 'A medical emergency', isCorrect: false },
        { id: 'o4', text: 'Bad weather', isCorrect: false },
      ],
    },
    {
      id: 'ex-19', type: 'multiple-choice', points: 10,
      question: 'What did the passenger in the "One too many" story do when refused a sixth drink?',
      options: [
        { id: 'o1', text: 'He became abusive and grabbed the flight attendant\'s arms', isCorrect: true },
        { id: 'o2', text: 'He apologized and calmed down', isCorrect: false },
        { id: 'o3', text: 'He fell asleep', isCorrect: false },
        { id: 'o4', text: 'He asked to leave the plane', isCorrect: false },
      ],
    },
    {
      id: 'ex-20', type: 'speaking', points: 15,
      question: 'Discuss the reactions of the cabin crew in these stories - fire extinguishers positioned near the cockpit, offloading a passenger, dumping fuel to land. Do you think flight attendants are given enough training to deal with unruly passengers?',
    },
    {
      id: 'ex-21', type: 'speaking', points: 15,
      question: 'Why is the problem of "air rage" growing? What can be done to prevent or limit it? Do you think alcohol should be banned on flights? How is airline security and the safety of all on board at risk from disruptive passengers?',
    },
    {
      id: 'ex-22', type: 'speaking', points: 15,
      question: 'Discuss the difference between "difficult" passengers (demanding, but not dangerous) and "disruptive" passengers (aggressive, dangerous, or a threat to safety). What is the best way to deal with each type? What special qualities do flight attendants need to manage these situations?',
    },
  ],
  quiz: {
    id: 'quiz-8-3',
    title: 'Managing Disruptive Passengers Quiz',
    passingScore: 70,
    exercises: [
      {
        id: 'q-1', type: 'multiple-choice', points: 20,
        question: 'Which modal verb expresses a strong personal obligation?',
        options: [
          { id: 'o1', text: 'Must', isCorrect: true },
          { id: 'o2', text: 'Might', isCorrect: false },
          { id: 'o3', text: 'Could', isCorrect: false },
          { id: 'o4', text: 'Would', isCorrect: false },
        ],
      },
      {
        id: 'q-2', type: 'multiple-choice', points: 20,
        question: 'Who does Ted need to inform about the disruptive passenger?',
        options: [
          { id: 'o1', text: 'The captain', isCorrect: true },
          { id: 'o2', text: 'Only the other passengers', isCorrect: false },
          { id: 'o3', text: 'No one, he handles it alone', isCorrect: false },
          { id: 'o4', text: 'The airline\'s head office immediately by phone', isCorrect: false },
        ],
      },
      {
        id: 'q-3', type: 'multiple-choice', points: 20,
        question: 'What is a common cause of air rage in the case study articles?',
        options: [
          { id: 'o1', text: 'Alcohol', isCorrect: true },
          { id: 'o2', text: 'Cabin temperature', isCorrect: false },
          { id: 'o3', text: 'Flight delays only', isCorrect: false },
          { id: 'o4', text: 'Poor food quality', isCorrect: false },
        ],
      },
      {
        id: 'q-4', type: 'multiple-choice', points: 20,
        question: 'What happened to the passenger who tried to get into first class during a rampage?',
        options: [
          { id: 'o1', text: 'He was jailed for eight months', isCorrect: true },
          { id: 'o2', text: 'He was given a warning only', isCorrect: false },
          { id: 'o3', text: 'Nothing happened to him', isCorrect: false },
          { id: 'o4', text: 'He was upgraded', isCorrect: false },
        ],
      },
      {
        id: 'q-5', type: 'multiple-choice', points: 20,
        question: 'What does "offloaded" mean in this context?',
        options: [
          { id: 'o1', text: 'Removed from the aircraft', isCorrect: true },
          { id: 'o2', text: 'Given extra luggage allowance', isCorrect: false },
          { id: 'o3', text: 'Promoted to Business class', isCorrect: false },
          { id: 'o4', text: 'Served a meal', isCorrect: false },
        ],
      },
    ],
  },
  flashcards: [
    { id: 'fc-1', front: 'Aggressive', back: 'Ready to attack or behave in a hostile way' },
    { id: 'fc-2', front: 'Restrain', back: 'To hold someone back or stop them from doing something' },
    { id: 'fc-3', front: 'Offloaded', back: 'Removed from an aircraft before or after a flight' },
    { id: 'fc-4', front: 'A brawl', back: 'A fight' },
    { id: 'fc-5', front: 'To go on a rampage', back: 'To go around causing damage' },
  ],
  review: {
    keyPoints: [
      'Refuse further alcohol clearly and calmly when a passenger has had enough',
      'Use clear obligation language (have to, must, need to) when escalating a serious incident',
      'Always inform the captain of a genuinely disruptive or dangerous passenger',
      'Reassure nearby passengers that the situation is under control',
      'Alcohol is a major factor in most reported air rage incidents',
    ],
    commonMistakes: [
      { mistake: 'Continuing to serve alcohol to an already intoxicated passenger', correction: 'Refuse further alcohol clearly, citing safety', explanation: 'This is often the trigger for serious incidents in the case studies' },
      { mistake: 'Trying to handle a dangerous passenger alone without informing the captain', correction: 'Escalate to the purser and captain promptly', explanation: 'The captain needs to know in case police assistance is required on arrival' },
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
        : unitIdx === 2 && lessonIdx === 0
        ? FIRST_ANNOUNCEMENTS_LESSON
        : unitIdx === 2 && lessonIdx === 1
        ? GETTING_STARTED_LESSON
        : unitIdx === 2 && lessonIdx === 2
        ? SETTLE_PASSENGERS_LESSON
        : unitIdx === 3 && lessonIdx === 0
        ? GIVING_CHOICE_LESSON
        : unitIdx === 3 && lessonIdx === 1
        ? SERVING_DRINKS_LESSON
        : unitIdx === 3 && lessonIdx === 2
        ? DUTY_FREE_LESSON
        : unitIdx === 4 && lessonIdx === 0
        ? IDENTIFYING_PROBLEMS_LESSON
        : unitIdx === 4 && lessonIdx === 1
        ? DEALING_PROBLEMS_LESSON
        : unitIdx === 4 && lessonIdx === 2
        ? SAYING_SORRY_LESSON
        : unitIdx === 5 && lessonIdx === 0
        ? ONBOARD_ACCIDENT_LESSON
        : unitIdx === 5 && lessonIdx === 1
        ? SERIOUS_INCIDENT_LESSON
        : unitIdx === 5 && lessonIdx === 2
        ? REPORTING_INCIDENT_LESSON
        : unitIdx === 6 && lessonIdx === 0
        ? TAKING_CHARGE_LESSON
        : unitIdx === 6 && lessonIdx === 1
        ? EMERGENCY_EVACUATION_LESSON
        : unitIdx === 6 && lessonIdx === 2
        ? REPORTING_EVACUATION_LESSON
        : unitIdx === 7 && lessonIdx === 0
        ? RESPONDING_COMPLAINTS_LESSON
        : unitIdx === 7 && lessonIdx === 1
        ? COMPLAINTS_OTHERS_LESSON
        : unitIdx === 7 && lessonIdx === 2
        ? DISRUPTIVE_PASSENGERS_LESSON
        : LESSON_TEMPLATE(unitIdx + 1, lessonIdx + 1, `Lesson ${lessonIdx + 1}`)
    )
  })) as Unit[]
];
