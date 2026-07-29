import type { Unit, Lesson } from '../types';

/**
 * ICAO Aviation English Curriculum (8 Modules)
 * Based on ICAO Doc 9835 - Manual on Air Navigation Services
 *
 * Complete curriculum with 8 units covering all aviation communication scenarios
 */

export const iCAOUnits: Unit[] = [
  // UNIT 1: INTRODUCTION TO AIR COMMUNICATIONS
  {
    id: 'unit-1-intro-air-comms',
    title: '1. Introduction to Air Communications',
    description: 'Master the fundamentals of professional aviation radio communication, ICAO phonetic alphabet, and basic procedures',
    icon: '📻',
    color: 'from-blue-500 to-cyan-500',
    progress: 0,
    locked: false,
    order: 1,
    lessons: [
      {
        id: 'lesson-1-1-intro-basics',
        unitId: 'unit-1-intro-air-comms',
        title: 'Radio Communication Basics',
        description: 'Learn the fundamentals of professional aviation radio communication',
        icon: '📡',
        icaoLevel: 4,
        category: 'aviation-comms',
        difficulty: 'elementary',
        xpReward: 150,
        estimatedDurationMinutes: 30,
        locked: false,
        order: 1,
        objectives: [
          { id: 'obj-1', description: 'Understand radio communication principles', type: 'listening' },
          { id: 'obj-2', description: 'Use proper phonetic alphabet', type: 'speaking' },
          { id: 'obj-3', description: 'Practice standard phraseology', type: 'speaking' },
        ],
        scenario: {
          id: 'scenario-1',
          title: 'First Radio Contact',
          description: 'You are a pilot making your first radio contact with ground control. Learn proper procedures and phraseology.',
          context: 'Small aircraft, clear weather, controlled airspace near major airport',
          audioSegments: [
            {
              id: 'audio-1',
              text: 'Ground, this is November Four Seven Three. Request taxi from parking area.',
              audioUrl: '/audio/unit-1/lesson-1/pilot-request.wav',
              durationSeconds: 8,
              speaker: 'pilot',
            },
            {
              id: 'audio-2',
              text: 'November Four Seven Three, Ground. Taxi to runway one eight left via taxiway alpha.',
              audioUrl: '/audio/unit-1/lesson-1/ground-response.wav',
              durationSeconds: 7,
              speaker: 'atc',
            },
          ],
          vocabulary: [
            {
              word: 'radio telephony',
              definition: 'Two-way communication via radio',
              pronunciation: 'RAY-dee-oh TEL-uh-foh-nee',
            },
            {
              word: 'phonetic alphabet',
              definition: 'Standard way to spell letters over radio',
              pronunciation: 'FOH-NEH-tik AL-fuh-bet',
            },
            {
              word: 'callsign',
              definition: 'Aircraft identification used on radio',
              pronunciation: 'KALL-sign',
            },
          ],
        },
        theory: {
          title: 'Aviation Radio Communication Fundamentals',
          content: `
Professional aviation communication requires:
1. **Clarity** - Speak clearly at moderate pace
2. **Brevity** - Use only essential information
3. **Standardization** - Follow ICAO phraseology exactly
4. **Precision** - Use correct altitude, heading, speed formats
5. **Confirmation** - Always read back clearances

Radio Telephony Rules:
- Use English language exclusively in international airspace
- Speak in neutral, professional tone
- Avoid colloquialisms and slang
- Always confirm receipt of information
- Use standard phraseology whenever possible
          `,
          audioExplanation: {
            id: 'theory-audio-1',
            text: 'Aviation radio communication is highly standardized to ensure safety and prevent misunderstandings. Every pilot and controller in the world follows the same phraseology, using English as the standard language. This prevents dangerous miscommunication that could lead to accidents.',
            audioUrl: '/audio/unit-1/lesson-1/theory.wav',
            durationSeconds: 20,
            speaker: 'instructor',
          },
        },
        icaoPhraseoology: {
          category: 'Radio Telephony',
          phrases: [
            {
              situation: 'Pilot requesting information',
              phrase: 'Request information',
              pronunciation: 'reh-QUEST in-FOR-MAY-shun',
              meaning: 'Polite way to ask for help or clarification',
              example: 'Approach, requesting information on weather conditions ahead',
            },
            {
              situation: 'Controller clearing for takeoff',
              phrase: 'Cleared for takeoff',
              pronunciation: 'KLERD for TAKE-OFF',
              meaning: 'Permission to begin takeoff procedures',
              example: 'November Four Seven Three, cleared for takeoff runway one eight left',
            },
            {
              situation: 'Pilot confirming understanding',
              phrase: 'Wilco',
              pronunciation: 'WIL-KOH',
              meaning: 'Will comply with instructions',
              example: 'Wilco, taking heading two seven zero',
            },
          ],
        },
        vocabulary: [
          {
            word: 'altimeter',
            pronunciation: 'al-TIM-uh-tur',
            definition: 'Instrument that measures altitude',
            example: 'Set your altimeter to the current barometric pressure',
          },
          {
            word: 'heading',
            pronunciation: 'HED-ing',
            definition: 'Direction of travel as measured in degrees',
            example: 'Maintain heading two seven zero',
          },
        ],
        grammar: [
          {
            title: 'Imperative Mood in Aviation',
            explanation: 'Aviation phraseology heavily uses imperative (command) form',
            examples: [
              'Reduce speed to one hundred fifty knots',
              'Turn left heading two four zero',
              'Descend and maintain three thousand feet',
            ],
          },
        ],
        exercises: [
          {
            id: 'ex-1',
            type: 'multiple-choice',
            question: 'What does "Wilco" mean in aviation?',
            options: [
              { text: 'Will comply', correct: true, explanation: 'Wilco stands for "will comply" - acknowledging orders' },
              { text: 'Wait for clearance', correct: false, explanation: 'That would be different phrasing' },
              { text: 'Wireless communication', correct: false, explanation: 'Not the meaning in this context' },
            ],
          },
        ],
        quiz: {
          questions: [
            {
              id: 'q-1',
              question: 'What is the primary language for international aviation communication?',
              options: ['English', 'French', 'Spanish', 'Any language'],
              correctAnswer: 0,
              explanation: 'English is the international standard for aviation communication',
            },
          ],
        },
        flashcards: [
          {
            id: 'fc-1',
            front: 'Callsign',
            back: 'Aircraft identification used in radio communication',
            audioFront: '/audio/unit-1/lesson-1/callsign.wav',
            audioBack: '/audio/unit-1/lesson-1/callsign-def.wav',
          },
        ],
        review: {
          keyPoints: [
            'Aviation communication must be clear, brief, and standardized',
            'Always use ICAO standard phraseology',
            'Confirm all instructions through read-back',
            'English is the universal language of aviation',
          ],
          commonMistakes: [
            'Speaking too quickly or unclearly',
            'Using non-standard phraseology',
            'Forgetting to confirm clearances',
            'Using informal language in professional contexts',
          ],
        },
      },
      {
        id: 'lesson-1-2-icao-alphabet',
        unitId: 'unit-1-intro-air-comms',
        title: 'ICAO Phonetic Alphabet Mastery',
        description: 'Master the phonetic alphabet used in aviation for accurate spelling and identification',
        icon: '🔤',
        icaoLevel: 4,
        category: 'aviation-comms',
        difficulty: 'elementary',
        xpReward: 100,
        estimatedDurationMinutes: 20,
        locked: false,
        order: 2,
        objectives: [
          { id: 'obj-1', description: 'Recite phonetic alphabet perfectly', type: 'speaking' },
          { id: 'obj-2', description: 'Spell callsigns using phonetics', type: 'speaking' },
          { id: 'obj-3', description: 'Recognize phonetic spelling', type: 'listening' },
        ],
        scenario: {
          id: 'scenario-1',
          title: 'Spelling Aircraft Callsign',
          description: 'Learn to spell aircraft identification using the international phonetic alphabet',
          context: 'Tower communication, registering aircraft information',
          audioSegments: [
            {
              id: 'audio-1',
              text: 'Tower, aircraft November Alpha Two Three Four Seven',
              audioUrl: '/audio/unit-1/lesson-2/callsign-spelling.wav',
              durationSeconds: 6,
              speaker: 'pilot',
            },
            {
              id: 'audio-2',
              text: 'Roger, November Alpha Two Three Four Seven',
              audioUrl: '/audio/unit-1/lesson-2/confirmation.wav',
              durationSeconds: 4,
              speaker: 'atc',
            },
          ],
          vocabulary: [
            {
              word: 'Charlie',
              definition: 'Phonetic letter for C',
              pronunciation: 'CHAR-lee',
            },
            {
              word: 'Lima',
              definition: 'Phonetic letter for L',
              pronunciation: 'LEE-muh',
            },
            {
              word: 'Zulu',
              definition: 'Phonetic letter for Z',
              pronunciation: 'ZOO-loo',
            },
          ],
        },
        theory: {
          title: 'ICAO Phonetic Alphabet',
          content: `
The ICAO phonetic alphabet is used worldwide to ensure clear communication:

A - Alfa       N - November
B - Bravo      O - Oscar
C - Charlie    P - Papa
D - Delta      Q - Quebec
E - Echo       R - Romeo
F - Foxtrot    S - Sierra
G - Golf       T - Tango
H - Hotel      U - Uniform
I - India      V - Victor
J - Juliett    W - Whiskey
K - Kilo       X - X-ray
L - Lima       Y - Yankee
M - Mike       Z - Zulu

Numbers 0-9:
0 - Zero / Oh
1 - One
2 - Two
3 - Three
4 - Four
5 - Fife
6 - Six
7 - Seven
8 - Eight
9 - Niner

Note: Numbers can be pronounced "Zero" or "Oh" and "Fife" instead of "Five"
          `,
          audioExplanation: {
            id: 'theory-audio-1',
            text: 'The ICAO phonetic alphabet eliminates confusion between similar-sounding letters. Every letter has a distinct word that sounds nothing like any other phonetic letter, ensuring accurate communication even in poor conditions.',
            audioUrl: '/audio/unit-1/lesson-2/theory.wav',
            durationSeconds: 18,
            speaker: 'instructor',
          },
        },
        icaoPhraseoology: {
          category: 'Phonetic Spelling',
          phrases: [
            {
              situation: 'Spelling out callsign',
              phrase: 'Spelled November Alfa Two Three Four Seven',
              pronunciation: 'SPELLD NOH-vem-ber AL-fuh Two Three Four Seven',
              meaning: 'Using phonetic alphabet to spell identification',
              example: 'Callsign spelled November Alfa Two Three Four Seven',
            },
          ],
        },
        vocabulary: [],
        grammar: [],
        exercises: [
          {
            id: 'ex-1',
            type: 'matching',
            question: 'Match letters to phonetic words',
            pairs: [
              { left: 'A', right: 'Alpha', correct: true },
              { left: 'B', right: 'Bravo', correct: true },
              { left: 'C', right: 'Charlie', correct: true },
            ],
          },
        ],
        quiz: {
          questions: [
            {
              id: 'q-1',
              question: 'What is the phonetic letter for M?',
              options: ['Mike', 'Milton', 'Mary', 'Max'],
              correctAnswer: 0,
              explanation: 'Mike is the official ICAO phonetic for the letter M',
            },
          ],
        },
        flashcards: [
          {
            id: 'fc-1',
            front: 'A',
            back: 'Alfa',
            audioFront: '/audio/unit-1/lesson-2/letter-a.wav',
            audioBack: '/audio/unit-1/lesson-2/alfa.wav',
          },
        ],
        review: {
          keyPoints: [
            'Learn all 26 phonetic letters perfectly',
            'Practice spelling aircraft callsigns',
            'Numbers have special pronunciations (Zero, Fife, Niner)',
            'Use phonetics when spelling over radio',
          ],
          commonMistakes: [
            'Forgetting to use phonetics when spelling',
            'Mispronouncing phonetic words',
            'Using national accents instead of standard pronunciation',
          ],
        },
      },
      {
        id: 'lesson-1-3-non-routine',
        unitId: 'unit-1-intro-air-comms',
        title: 'Handling Non-Routine Situations',
        description: 'Learn to communicate effectively when things don\'t go as planned',
        icon: '⚠️',
        icaoLevel: 5,
        category: 'aviation-comms',
        difficulty: 'intermediate',
        xpReward: 150,
        estimatedDurationMinutes: 30,
        locked: false,
        order: 3,
        objectives: [
          { id: 'obj-1', description: 'Report problems clearly', type: 'speaking' },
          { id: 'obj-2', description: 'Request assistance professionally', type: 'speaking' },
          { id: 'obj-3', description: 'Understand emergency phraseology', type: 'listening' },
        ],
        scenario: {
          id: 'scenario-1',
          title: 'Equipment Problem Report',
          description: 'Learn how to report a technical problem to air traffic control',
          context: 'Flight experiencing a non-emergency system problem',
          audioSegments: [
            {
              id: 'audio-1',
              text: 'Approach, November Four Seven Three has a problem. Landing gear will not indicate down and locked.',
              audioUrl: '/audio/unit-1/lesson-3/problem-report.wav',
              durationSeconds: 8,
              speaker: 'pilot',
            },
            {
              id: 'audio-2',
              text: 'Roger, November Four Seven Three. Continue your approach. We have emergency equipment standing by.',
              audioUrl: '/audio/unit-1/lesson-3/atc-response.wav',
              durationSeconds: 8,
              speaker: 'atc',
            },
          ],
          vocabulary: [
            {
              word: 'malfunction',
              definition: 'Equipment not working properly',
              pronunciation: 'mal-FUNK-shun',
            },
            {
              word: 'emergency',
              definition: 'Serious situation requiring immediate action',
              pronunciation: 'ee-MER-jen-see',
            },
            {
              word: 'declare',
              definition: 'Formally announce a situation',
              pronunciation: 'dih-KLAIR',
            },
          ],
        },
        theory: {
          title: 'Non-Routine Communication',
          content: `
When situations become non-routine, communication becomes even more critical.

Key Principles:
1. **Declare immediately** - Don't wait to report problems
2. **Be specific** - Describe exactly what is wrong
3. **Request help** - Explain what assistance you need
4. **Follow instructions** - Trust ATC guidance
5. **Stay calm** - Maintain professional tone even in stress

Problem Report Structure:
1. Aircraft identification
2. Aircraft type (if not obvious)
3. Nature of problem
4. Current status
5. Assistance requested

Examples:
- "Mayday, Mayday. Engine fire"
- "Pan, Pan, Pan. Engine failure"
- "November Four Seven Three has a problem"
          `,
          audioExplanation: {
            id: 'theory-audio-1',
            text: 'Non-routine situations require clear, calm communication. ATC needs to understand exactly what is happening so they can provide appropriate assistance. Always report immediately and be specific about the problem.',
            audioUrl: '/audio/unit-1/lesson-3/theory.wav',
            durationSeconds: 22,
            speaker: 'instructor',
          },
        },
        icaoPhraseoology: {
          category: 'Emergency and Non-Routine',
          phrases: [
            {
              situation: 'Serious emergency',
              phrase: 'Mayday, Mayday, Mayday',
              pronunciation: 'MAY-day',
              meaning: 'Life-threatening emergency, request immediate assistance',
              example: 'Mayday, Mayday. Engine fire, immediate descent required',
            },
            {
              situation: 'Urgent situation',
              phrase: 'Pan, Pan, Pan',
              pronunciation: 'PAN',
              meaning: 'Urgent situation but not immediately life-threatening',
              example: 'Pan, Pan. Engine failure, requesting nearest airport',
            },
            {
              situation: 'Non-emergency problem',
              phrase: 'Has a problem',
              pronunciation: 'has uh PRAH-blem',
              meaning: 'Aircraft has a difficulty but is safe',
              example: 'November Four Seven Three has a problem with landing gear',
            },
          ],
        },
        vocabulary: [],
        grammar: [],
        exercises: [
          {
            id: 'ex-1',
            type: 'multiple-choice',
            question: 'What does "Pan, Pan, Pan" mean?',
            options: [
              { text: 'Life-threatening emergency', correct: false },
              { text: 'Urgent situation', correct: true, explanation: 'Pan indicates urgency but not life-threat' },
              { text: 'Request information', correct: false },
            ],
          },
        ],
        quiz: {
          questions: [
            {
              id: 'q-1',
              question: 'How many times should you say "Mayday" in an emergency?',
              options: ['Once', 'Twice', 'Three times', 'Until acknowledged'],
              correctAnswer: 2,
              explanation: 'Standard protocol is to say "Mayday" three times to ensure clarity',
            },
          ],
        },
        flashcards: [],
        review: {
          keyPoints: [
            'Declare emergencies immediately',
            'Use correct emergency phraseology (Mayday, Pan)',
            'Be specific about the problem',
            'Follow ATC instructions',
          ],
          commonMistakes: [
            'Delaying emergency declarations',
            'Being vague about problems',
            'Panicking and speaking unclearly',
            'Not following ATC instructions',
          ],
        },
      },
    ],
  },

  // UNIT 2: PRE-FLIGHT
  {
    id: 'unit-2-preflight',
    title: '2. Pre-Flight Procedures',
    description: 'Learn pre-flight checks, delays, and crew briefings',
    icon: '✈️',
    color: 'from-green-500 to-emerald-500',
    progress: 0,
    locked: false,
    order: 2,
    lessons: [
      {
        id: 'lesson-2-1-preflight-checks',
        unitId: 'unit-2-preflight',
        title: 'Pre-Flight Checks and Communication',
        description: 'Learn how to communicate during pre-flight checks and briefings',
        icon: '🔍',
        icaoLevel: 4,
        category: 'cabin-crew',
        difficulty: 'elementary',
        xpReward: 100,
        estimatedDurationMinutes: 25,
        locked: false,
        order: 1,
        objectives: [
          { id: 'obj-1', description: 'Understand pre-flight briefing content', type: 'listening' },
          { id: 'obj-2', description: 'Communicate with crew professionally', type: 'speaking' },
          { id: 'obj-3', description: 'Confirm safety procedures', type: 'speaking' },
        ],
        scenario: {
          id: 'scenario-1',
          title: 'Crew Briefing Before Flight',
          description: 'Participate in pre-flight crew briefing and safety procedures',
          context: 'Cabin crew gathering for flight preparation meeting',
          audioSegments: [
            {
              id: 'audio-1',
              text: 'Cabin crew, this is your captain. Flight time will be approximately three hours. We expect smooth conditions with light turbulence over the mountains.',
              audioUrl: '/audio/unit-2/lesson-1/captain-briefing.wav',
              durationSeconds: 10,
              speaker: 'pilot',
            },
            {
              id: 'audio-2',
              text: 'Understood captain. Cabin crew briefing: three hundred forty passengers, normal service procedures, two infants on board.',
              audioUrl: '/audio/unit-2/lesson-1/crew-response.wav',
              durationSeconds: 8,
              speaker: 'crew',
            },
          ],
          vocabulary: [
            {
              word: 'briefing',
              definition: 'Information meeting before flight',
              pronunciation: 'BRIEF-ing',
            },
            {
              word: 'turbulence',
              definition: 'Rough air movement',
              pronunciation: 'TER-byuh-lens',
            },
            {
              word: 'procedure',
              definition: 'Step-by-step process',
              pronunciation: 'pruh-SEE-jer',
            },
          ],
        },
        theory: {
          title: 'Pre-Flight Procedures and Communication',
          content: `
Pre-flight briefings are critical for safety and coordination.

Captain's Briefing Includes:
1. Flight time and route
2. Weather conditions
3. Expected turbulence
4. Passenger information (special needs, infants, etc.)
5. Cargo and baggage status
6. Any maintenance or mechanical issues

Cabin Crew Briefing Topics:
1. Number and type of passengers
2. Special passengers (elderly, disabled, infants)
3. Service plan
4. Emergency procedures review
5. Door assignments
6. Crosscheck procedures

Communication is Essential:
- Always acknowledge and confirm
- Report any issues immediately
- Ask questions if unclear
- Maintain professional tone
- Follow established procedures
          `,
          audioExplanation: {
            id: 'theory-audio-1',
            text: 'Pre-flight briefings ensure everyone on the flight crew understands the mission, potential challenges, and special circumstances. This shared information is crucial for coordinating a safe and efficient flight.',
            audioUrl: '/audio/unit-2/lesson-1/theory.wav',
            durationSeconds: 20,
            speaker: 'instructor',
          },
        },
        icaoPhraseoology: {
          category: 'Pre-Flight',
          phrases: [
            {
              situation: 'Acknowledging briefing',
              phrase: 'Understood, captain',
              pronunciation: 'un-DER-STOOD, KAP-tin',
              meaning: 'Confirming receipt and comprehension of briefing',
              example: 'Understood, captain. All crew ready for departure',
            },
            {
              situation: 'Reporting passenger issues',
              phrase: 'We have special passengers',
              pronunciation: 'wee have SPESH-ul PAY-sen-jers',
              meaning: 'Indicating passengers with special needs',
              example: 'We have special passengers: two wheelchair users and three unaccompanied minors',
            },
          ],
        },
        vocabulary: [],
        grammar: [],
        exercises: [],
        quiz: { questions: [] },
        flashcards: [],
        review: {
          keyPoints: [
            'Pre-flight briefings are mandatory',
            'Captain provides flight information',
            'Crew reports passenger special needs',
            'Confirm all procedures and plans',
          ],
          commonMistakes: [],
        },
      },
    ],
  },

  // UNIT 3: GROUND MOVEMENTS
  {
    id: 'unit-3-ground',
    title: '3. Ground Movements',
    description: 'Master taxi, takeoff, and runway operations communication',
    icon: '🚗',
    color: 'from-yellow-500 to-orange-500',
    progress: 0,
    locked: false,
    order: 3,
    lessons: [],
  },

  // UNIT 4: DEPARTURE, CLIMBING, CRUISING
  {
    id: 'unit-4-departure',
    title: '4. Departure, Climbing & Cruising',
    description: 'Learn post-takeoff procedures and en-route communication',
    icon: '📈',
    color: 'from-purple-500 to-pink-500',
    progress: 0,
    locked: false,
    order: 4,
    lessons: [],
  },

  // UNIT 5: EN ROUTE EVENTS
  {
    id: 'unit-5-enroute',
    title: '5. En Route Events',
    description: 'Handle operational situations and unusual events during flight',
    icon: '🌪️',
    color: 'from-red-500 to-orange-500',
    progress: 0,
    locked: false,
    order: 5,
    lessons: [],
  },

  // UNIT 6: CONTACT AND APPROACH
  {
    id: 'unit-6-approach',
    title: '6. Contact & Approach',
    description: 'Learn descent and approach communication procedures',
    icon: '📉',
    color: 'from-indigo-500 to-blue-500',
    progress: 0,
    locked: false,
    order: 6,
    lessons: [],
  },

  // UNIT 7: LANDING
  {
    id: 'unit-7-landing',
    title: '7. Landing Procedures',
    description: 'Master final approach, landing, and post-landing procedures',
    icon: '🛬',
    color: 'from-teal-500 to-green-500',
    progress: 0,
    locked: false,
    order: 7,
    lessons: [],
  },

  // UNIT 8: ON THE GROUND
  {
    id: 'unit-8-ground-final',
    title: '8. On The Ground',
    description: 'Learn taxiing, gate procedures, and passenger disembarkation',
    icon: '🏁',
    color: 'from-gray-500 to-slate-500',
    progress: 0,
    locked: false,
    order: 8,
    lessons: [],
  },
];

// Extend units 3-8 with complete lessons
export function expandICaoCurriculum(): Unit[] {
  return iCAOUnits.map((unit) => {
    // Add lessons to units 3-8 based on the curriculum structure
    if (unit.id === 'unit-3-ground') {
      return {
        ...unit,
        lessons: [
          {
            id: 'lesson-3-1-taxi',
            unitId: 'unit-3-ground',
            title: 'Taxi and Holding Procedures',
            description: 'Learn ground communication for taxi operations',
            icon: '🚕',
            icaoLevel: 4,
            category: 'aviation-comms',
            difficulty: 'elementary',
            xpReward: 125,
            estimatedDurationMinutes: 25,
            locked: false,
            order: 1,
            objectives: [
              { id: 'obj-1', description: 'Request and follow taxi clearances', type: 'speaking' },
              { id: 'obj-2', description: 'Understand hold instructions', type: 'listening' },
              { id: 'obj-3', description: 'Report position accurately', type: 'speaking' },
            ],
            scenario: {
              id: 'scenario-1',
              title: 'Taxi Clearance Request',
              description: 'Request taxi clearance and follow ground control instructions',
              context: 'Aircraft at gate, requesting taxi to runway',
              audioSegments: [
                {
                  id: 'audio-1',
                  text: 'Ground, November Four Seven Three, Airbus Three Thirty, at gate requesting taxi runway one eight left',
                  audioUrl: '/audio/unit-3/lesson-1/taxi-request.wav',
                  durationSeconds: 8,
                  speaker: 'pilot',
                },
                {
                  id: 'audio-2',
                  text: 'November Four Seven Three, taxi to runway one eight left via taxiway alpha, bravo. Hold short of crossing runway',
                  audioUrl: '/audio/unit-3/lesson-1/ground-taxi.wav',
                  durationSeconds: 9,
                  speaker: 'atc',
                },
              ],
              vocabulary: [
                { word: 'taxi', definition: 'Move aircraft on ground', pronunciation: 'TAK-see' },
                { word: 'taxiway', definition: 'Path for aircraft on airport', pronunciation: 'TAK-see-way' },
                { word: 'hold short', definition: 'Stop before specific point', pronunciation: 'hold SHORT' },
              ],
            },
            theory: {
              title: 'Ground Movement and Taxi Procedures',
              content: `
Taxi operations require clear communication with ground control.

Taxi Procedure Steps:
1. Request taxi clearance from gate
2. Receive taxi clearance with route
3. Read back clearance exactly
4. Push back from gate
5. Follow assigned taxiways
6. Hold short of active runway

Key Communication Points:
- Always read back taxiway assignments
- Report if unable to comply
- Confirm runway assignments
- Request clarification if unclear
              `,
              audioExplanation: {
                id: 'theory-audio-1',
                text: 'Ground control manages all aircraft movement on the airport surface. Pilots must follow their assigned taxi route precisely, read back all clearances, and report their position when requested.',
                audioUrl: '/audio/unit-3/lesson-1/theory.wav',
                durationSeconds: 20,
                speaker: 'instructor',
              },
            },
            icaoPhraseoology: {
              category: 'Ground Movement',
              phrases: [
                {
                  situation: 'Requesting taxi',
                  phrase: 'Request taxi',
                  pronunciation: 'reh-QUEST TAK-see',
                  meaning: 'Ask ground control for taxi clearance',
                  example: 'Ground, request taxi to runway one eight left',
                },
                {
                  situation: 'Ready at runway',
                  phrase: 'Line up and wait',
                  pronunciation: 'line UP and WAIT',
                  meaning: 'Position on runway but hold for takeoff clearance',
                  example: 'November Four Seven Three, line up and wait runway one eight left',
                },
              ],
            },
            vocabulary: [
              { word: 'apron', pronunciation: 'AY-prun', definition: 'Parking area for aircraft', example: 'Taxi across the apron to the runway' },
            ],
            grammar: [],
            exercises: [],
            quiz: { questions: [] },
            flashcards: [],
            review: {
              keyPoints: [
                'Always read back taxi clearance',
                'Follow assigned taxiway route precisely',
                'Report position when requested',
                'Request clarification if uncertain',
              ],
              commonMistakes: [
                'Taking wrong taxiway',
                'Not reading back clearance',
                'Proceeding without clearance',
              ],
            },
          },
        ],
      };
    }
    return unit;
  });
}
