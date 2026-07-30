import type { Unit, Lesson } from '../types';

/**
 * ICAO Aviation English Curriculum (8 Modules)
 * Based on ICAO Doc 9835 - Manual on Air Navigation Services
 *
 * Complete curriculum with 8 units covering all aviation communication scenarios
 * Version 2.0: Audio files deployed to production
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
        category: 'cabin-crew',
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
              speaker: 'instructor',
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
            audioUrl: '/audio/unit-1/lesson-1/theory-explanation.wav',
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
            rule: 'Imperative Mood in Aviation - Aviation phraseology heavily uses imperative (command) form',
            examples: [
              { sentence: 'Reduce speed to one hundred fifty knots' },
              { sentence: 'Turn left heading two four zero' },
              { sentence: 'Descend and maintain three thousand feet' },
            ],
          },
        ],
        exercises: [
          {
            id: 'ex-1',
            type: 'multiple-choice',
            question: 'What does "Wilco" mean in aviation?',
            options: [
              { id: 'opt-1', text: 'Will comply', isCorrect: true, explanation: 'Wilco stands for "will comply" - acknowledging orders' },
              { id: 'opt-2', text: 'Wait for clearance', isCorrect: false, explanation: 'That would be different phrasing' },
              { id: 'opt-3', text: 'Wireless communication', isCorrect: false, explanation: 'Not the meaning in this context' },
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
            audioFront: '/audio/unit-1/lesson-1/pronunciation-callsign.wav',
            audioBack: '/audio/unit-1/lesson-1/pronunciation-callsign.wav',
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
        category: 'cabin-crew',
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
              audioUrl: '/audio/unit-1/lesson-2/phonetic-callsign.wav',
              durationSeconds: 6,
              speaker: 'pilot',
            },
            {
              id: 'audio-2',
              text: 'Roger, November Alpha Two Three Four Seven',
              audioUrl: '/audio/unit-1/lesson-2/phonetic-confirmation.wav',
              durationSeconds: 4,
              speaker: 'instructor',
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
            audioUrl: '/audio/unit-1/lesson-2/phonetic-theory.wav',
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
              { left: 'A', right: 'Alpha', isCorrect: true },
              { left: 'B', right: 'Bravo', isCorrect: true },
              { left: 'C', right: 'Charlie', isCorrect: true },
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
            audioFront: '/audio/unit-1/lesson-2/phonetic-a.wav',
            audioBack: '/audio/unit-1/lesson-2/phonetic-a.wav',
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
        category: 'cabin-crew',
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
              audioUrl: '/audio/unit-1/lesson-3/emergency-response.wav',
              durationSeconds: 8,
              speaker: 'instructor',
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
            audioUrl: '/audio/unit-1/lesson-3/emergency-theory.wav',
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
              { text: 'Life-threatening emergency', isCorrect: false },
              { text: 'Urgent situation', isCorrect: true, explanation: 'Pan indicates urgency but not life-threat' },
              { text: 'Request information', isCorrect: false },
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
              audioUrl: '/audio/unit-2/lesson-1/crew-briefing-response.wav',
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
            audioUrl: '/audio/unit-2/lesson-1/preflight-theory.wav',
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
            {
              situation: 'Requesting briefing information',
              phrase: 'Captain, request briefing',
              pronunciation: 'KAP-tin, reh-QUEST BRIEF-ing',
              meaning: 'Politely asking for flight and safety information',
              example: 'Captain, request briefing on expected weather and passenger count',
            },
            {
              situation: 'Confirming passenger count',
              phrase: 'Confirm passenger load',
              pronunciation: 'kuh-NFERM PAY-sen-jer LOHD',
              meaning: 'Verifying the total number of passengers on board',
              example: 'Confirm passenger load: three hundred twenty-five souls on board',
            },
            {
              situation: 'Reporting aircraft inspection complete',
              phrase: 'All doors cross-checked and armed',
              pronunciation: 'awl DORZ KROSS-chekt and ARMED',
              meaning: 'All cabin doors verified secure and emergency slides activated',
              example: 'All doors cross-checked and armed, cabin ready for departure',
            },
            {
              situation: 'Reporting final readiness',
              phrase: 'Cabin crew ready',
              pronunciation: 'KAB-in KROO RED-ee',
              meaning: 'Flight attendants are prepared for departure',
              example: 'Captain, cabin crew ready for departure',
            },
            {
              situation: 'Reporting flight delay',
              phrase: 'We anticipate departure delay',
              pronunciation: 'wee an-TIS-uh-payt dih-PAR-chur dih-LAY',
              meaning: 'Informing that takeoff will be postponed',
              example: 'We anticipate departure delay of thirty minutes due to weather',
            },
            {
              situation: 'Requesting passenger assistance',
              phrase: 'We have a passenger requiring assistance',
              pronunciation: 'wee hav uh PAY-sen-jer rih-KWIRING uh-SIS-tence',
              meaning: 'Indicating special medical or physical support needed',
              example: 'We have a passenger requiring assistance boarding the aircraft',
            },
          ],
        },
        vocabulary: [
          {
            word: 'briefing',
            pronunciation: 'BRIEF-ing',
            definition: 'Formal meeting to provide information before operation',
            example: 'The captain gave a comprehensive briefing on weather conditions',
          },
          {
            word: 'crosscheck',
            pronunciation: 'KROSS-chek',
            definition: 'Verification procedure where crew members confirm each other\'s tasks',
            example: 'All flight attendants perform crosschecks before departure',
          },
          {
            word: 'armed',
            pronunciation: 'ARMED',
            definition: 'Emergency equipment activated and ready for use',
            example: 'All emergency slides must be armed before takeoff',
          },
          {
            word: 'passenger load',
            pronunciation: 'PAY-sen-jer LOHD',
            definition: 'Total number of passengers on the aircraft',
            example: 'The passenger load today is three hundred twenty',
          },
          {
            word: 'turbulence',
            pronunciation: 'TER-byuh-lens',
            definition: 'Rough, unstable air that causes aircraft movement',
            example: 'We expect light turbulence over the mountain range',
          },
          {
            word: 'unaccompanied minor',
            pronunciation: 'un-uh-KUM-puh-need MY-ner',
            definition: 'Child traveling alone without adult supervision',
            example: 'We have two unaccompanied minors on this flight',
          },
          {
            word: 'special needs',
            pronunciation: 'SPESH-ul NEEDZ',
            definition: 'Additional assistance required by passenger',
            example: 'Three passengers have mobility special needs',
          },
          {
            word: 'cabin pressure',
            pronunciation: 'KAB-in PRESH-ur',
            definition: 'Air pressure maintained inside aircraft cabin',
            example: 'Cabin pressure is normal at cruising altitude',
          },
          {
            word: 'oxygen system',
            pronunciation: 'OK-suh-jen SIS-tem',
            definition: 'Equipment providing breathable air to cabin occupants',
            example: 'Oxygen system test completed successfully',
          },
          {
            word: 'emergency exits',
            pronunciation: 'ee-MER-jen-see EG-zits',
            definition: 'Doors and hatches for rapid aircraft evacuation',
            example: 'All emergency exits are clear and accessible',
          },
          {
            word: 'evacuation slide',
            pronunciation: 'ee-VAK-yoo-ay-shun SLYD',
            definition: 'Inflatable slide deployed for emergency evacuation',
            example: 'Each door has an operational evacuation slide',
          },
          {
            word: 'safety demonstration',
            pronunciation: 'SAY-fee dem-un-STRAY-shun',
            definition: 'Cabin crew presentation of emergency procedures',
            example: 'Safety demonstration is required before takeoff',
          },
          {
            word: 'flight plan',
            pronunciation: 'FLYHT PLAN',
            definition: 'Detailed route and timing for the flight',
            example: 'The flight plan shows an estimated flight time of four hours',
          },
          {
            word: 'aircraft type',
            pronunciation: 'AIR-kraft TYP',
            definition: 'Specific model and class of airplane',
            example: 'Today we are operating an Airbus A320 aircraft',
          },
          {
            word: 'galley',
            pronunciation: 'GAL-ee',
            definition: 'Flight kitchen where beverages and food are prepared',
            example: 'The galley is equipped with coffee and refreshments',
          },
          {
            word: 'lavatory',
            pronunciation: 'LAV-uh-tor-ee',
            definition: 'Aircraft bathroom facilities',
            example: 'All lavatories must be serviced before departure',
          },
          {
            word: 'first aid kit',
            pronunciation: 'FERST AID KIT',
            definition: 'Medical supplies for passenger emergencies',
            example: 'First aid kits are located in each galley area',
          },
          {
            word: 'defibrillator',
            pronunciation: 'dih-FIB-ruh-lay-tur',
            definition: 'Device for treating cardiac emergencies',
            example: 'Automated external defibrillator is installed in the cabin',
          },
        ],
        grammar: [
          {
            title: 'Conditional Statements in Aviation',
            explanation: 'Aviation communication often uses conditional forms to express procedures and requirements',
            examples: [
              { sentence: 'If passenger assistance is required, notify the captain immediately' },
              { sentence: 'Should turbulence occur, remain in designated positions' },
              { sentence: 'In the event of delays, passengers must be kept informed' },
            ],
          },
        ],
        exercises: [
          {
            id: 'ex-1',
            type: 'multiple-choice',
            question: 'What is the primary purpose of a crew briefing?',
            options: [
              { text: 'Social gathering', isCorrect: false, explanation: 'Briefings are formal operational meetings' },
              { text: 'To ensure all crew members understand flight details and safety procedures', isCorrect: true, explanation: 'Briefings provide critical information for safe and coordinated flight operations' },
              { text: 'To discuss passenger complaints', isCorrect: false, explanation: 'Briefings focus on flight operations' },
            ],
          },
        ],
        quiz: {
          questions: [
            {
              id: 'q-1',
              question: 'What does "armed" mean in the context of emergency equipment?',
              options: ['Locked in place', 'Activated and ready for use', 'Removed for inspection', 'Checked by maintenance'],
              correctAnswer: 1,
              explanation: 'Armed means emergency equipment is activated and ready for use in case of emergency evacuation',
            },
            {
              id: 'q-2',
              question: 'Which information is NOT typically included in the captain\'s briefing?',
              options: ['Flight time and route', 'Weather conditions', 'Passenger meal preferences', 'Expected turbulence'],
              correctAnswer: 2,
              explanation: 'Individual passenger meal preferences are not part of the pre-flight briefing',
            },
            {
              id: 'q-3',
              question: 'What is a crosscheck procedure?',
              options: ['Checking passports', 'Crew verification of each other\'s completed tasks', 'Financial audit', 'Passenger count verification'],
              correctAnswer: 1,
              explanation: 'Crosschecking is when crew members verify that safety-critical tasks have been completed correctly',
            },
            {
              id: 'q-4',
              question: 'How should special passenger requirements be reported?',
              options: ['Only to the purser', 'To the captain during briefing', 'In a written report after flight', 'Not necessary to report'],
              correctAnswer: 1,
              explanation: 'Special passenger needs must be communicated to the captain during pre-flight briefing for safety planning',
            },
            {
              id: 'q-5',
              question: 'What does "souls on board" refer to?',
              options: ['Religious passengers', 'Total number of people on aircraft', 'Flight crew only', 'Dead weight'],
              correctAnswer: 1,
              explanation: 'Souls on board means the total count of all persons aboard the aircraft, including crew and passengers',
            },
          ],
        },
        flashcards: [
          {
            id: 'fc-1',
            front: 'Briefing',
            back: 'Formal meeting to provide operational information before flight',
            audioFront: '/audio/unit-2/lesson-1/term-briefing.wav',
            audioBack: '/audio/unit-2/lesson-1/definition-briefing.wav',
          },
        ],
        review: {
          keyPoints: [
            'Pre-flight briefings are mandatory safety procedures',
            'Captain provides flight and weather information',
            'Crew reports passenger special needs and requirements',
            'All crew must confirm understanding and readiness',
            'Crosscheck procedures ensure safety-critical tasks are completed',
          ],
          commonMistakes: [
            'Skipping or rushing through safety briefings',
            'Not reporting special passenger needs',
            'Failing to confirm briefing information',
            'Not performing crosschecks properly',
            'Leaving equipment unarmed before departure',
          ],
        },
      },
      {
        id: 'lesson-2-2-flight-delays',
        unitId: 'unit-2-preflight',
        title: 'Communicating Flight Delays',
        description: 'Learn professional communication during flight delays and disruptions',
        icon: '⏰',
        icaoLevel: 4,
        category: 'cabin-crew',
        difficulty: 'intermediate',
        xpReward: 125,
        estimatedDurationMinutes: 30,
        locked: false,
        order: 2,
        objectives: [
          { id: 'obj-1', description: 'Communicate delays professionally', type: 'speaking' },
          { id: 'obj-2', description: 'Understand delay reasons and codes', type: 'listening' },
          { id: 'obj-3', description: 'Manage passenger inquiries', type: 'speaking' },
        ],
        scenario: {
          id: 'scenario-1',
          title: 'Announcing Flight Delay',
          description: 'Inform passengers professionally about departure delay',
          context: 'Aircraft at gate experiencing departure delay',
          audioSegments: [
            {
              id: 'audio-1',
              text: 'Ladies and gentlemen, this is the captain. We are currently experiencing a delay due to a mechanical check. We expect to be airborne within thirty minutes. Thank you for your patience.',
              audioUrl: '/audio/unit-2/lesson-2/delay-announcement.wav',
              durationSeconds: 12,
              speaker: 'pilot',
            },
            {
              id: 'audio-2',
              text: 'Passengers in rows fifteen to twenty, your boarding pass numbers are being called at gate seven. Please proceed with your carry-on baggage.',
              audioUrl: '/audio/unit-2/lesson-2/passenger-response.wav',
              durationSeconds: 9,
              speaker: 'crew',
            },
          ],
          vocabulary: [
            {
              word: 'mechanical',
              definition: 'Related to aircraft systems and components',
              pronunciation: 'muh-KAN-i-kul',
            },
            {
              word: 'delay',
              definition: 'Late departure from scheduled time',
              pronunciation: 'dih-LAY',
            },
          ],
        },
        theory: {
          title: 'Flight Delay Communication',
          content: `
Flight delays are common and require professional communication to manage passenger expectations.

Common Delay Reasons:
1. Mechanical issues - Aircraft maintenance checks
2. Crew scheduling - Flight crew availability
3. Ground handling - Baggage or boarding delays
4. Weather - Adverse conditions
5. Air traffic - Congestion or flow control
6. Passenger - Medical or security issues

Communication Principles:
- Inform passengers promptly and regularly
- Provide honest reasons for delays
- Give estimated departure times
- Apologize for inconvenience
- Maintain professional, calm tone
- Offer assistance when possible

Crew Responsibilities During Delays:
- Monitor passenger comfort
- Provide regular updates
- Ensure compliance with regulations
- Document delay reasons
- Assist passengers with connections
          `,
          audioExplanation: {
            id: 'theory-audio-1',
            text: 'Flight delays are unavoidable in aviation. Professional communication that is honest, regular, and empathetic helps manage passenger frustration and maintains airline reputation. Always keep passengers informed.',
            audioUrl: '/audio/unit-2/lesson-2/delay-theory.wav',
            durationSeconds: 22,
            speaker: 'instructor',
          },
        },
        icaoPhraseoology: {
          category: 'Delay Communication',
          phrases: [
            {
              situation: 'Announcing mechanical delay',
              phrase: 'We are experiencing a mechanical delay',
              pronunciation: 'wee ar ik-SPEER-ee-en-sing uh muh-KAN-i-kul dih-LAY',
              meaning: 'Informing that aircraft maintenance is causing departure postponement',
              example: 'We are experiencing a mechanical delay due to a minor system check',
            },
            {
              situation: 'Announcing weather delay',
              phrase: 'We are holding for weather clearance',
              pronunciation: 'wee ar HOLD-ing for WED-ur KLIR-ens',
              meaning: 'Waiting for weather conditions to improve',
              example: 'We are holding for weather clearance at the destination airport',
            },
            {
              situation: 'Providing update on delay status',
              phrase: 'We anticipate departure within fifteen minutes',
              pronunciation: 'wee an-TIS-uh-payt dih-PAR-chur with-IN FIF-teen MIN-its',
              meaning: 'Expected time when aircraft will begin takeoff',
              example: 'We anticipate departure within thirty minutes',
            },
            {
              situation: 'Apologizing for inconvenience',
              phrase: 'We apologize for this delay',
              pronunciation: 'wee uh-PAH-luh-jyz for this dih-LAY',
              meaning: 'Expressing regret for passenger inconvenience',
              example: 'We apologize for this unexpected delay',
            },
            {
              situation: 'Requesting passenger patience',
              phrase: 'Thank you for your patience',
              pronunciation: 'thank YOO for your PAY-shence',
              meaning: 'Appreciation for passenger understanding',
              example: 'Thank you for your patience as we resolve this matter',
            },
            {
              situation: 'Offering assistance',
              phrase: 'We will provide refreshments during delay',
              pronunciation: 'wee will pruh-VYD rih-FRESH-ments DUR-ing dih-LAY',
              meaning: 'Offering beverages or food while waiting',
              example: 'We will provide complimentary refreshments during this delay',
            },
            {
              situation: 'Explaining delay reason',
              phrase: 'Delay is due to air traffic congestion',
              pronunciation: 'dih-LAY iz DOO too air TRAF-ik kun-JES-chun',
              meaning: 'Too many aircraft in airspace',
              example: 'Delay is due to heavy air traffic at destination airport',
            },
            {
              situation: 'Crew coordination during delay',
              phrase: 'Notify captain of passenger issues',
              pronunciation: 'NOH-ti-fy KAP-tin uv PAY-sen-jer ISH-oos',
              meaning: 'Report passenger problems to flight captain',
              example: 'Notify captain if any passenger has missed connections',
            },
          ],
        },
        vocabulary: [
          {
            word: 'mechanical delay',
            pronunciation: 'muh-KAN-i-kul dih-LAY',
            definition: 'Departure postponement due to aircraft maintenance',
            example: 'The mechanical delay was caused by engine parameter checks',
          },
          {
            word: 'weather delay',
            pronunciation: 'WED-ur dih-LAY',
            definition: 'Postponement due to adverse weather conditions',
            example: 'Weather delay expected until visibility improves',
          },
          {
            word: 'air traffic delay',
            pronunciation: 'air TRAF-ik dih-LAY',
            definition: 'Postponement due to airport congestion',
            example: 'Air traffic delay caused by ground stop',
          },
          {
            word: 'crew rest',
            pronunciation: 'KROO REST',
            definition: 'Mandatory rest period required by regulations',
            example: 'Delay due to crew rest requirements',
          },
          {
            word: 'passenger boarding',
            pronunciation: 'PAY-sen-jer BORD-ing',
            definition: 'Process of passengers entering aircraft',
            example: 'Passenger boarding took longer than expected',
          },
          {
            word: 'luggage',
            pronunciation: 'LUG-ij',
            definition: 'Passenger baggage and cargo',
            example: 'Delay caused by luggage handling issues',
          },
          {
            word: 'ground handling',
            pronunciation: 'GROUND HAN-dul-ing',
            definition: 'Services provided to aircraft at gate',
            example: 'Ground handling delayed our departure',
          },
          {
            word: 'catering',
            pronunciation: 'KAY-tur-ing',
            definition: 'Food and beverage service preparation',
            example: 'Delay caused by late catering delivery',
          },
          {
            word: 'fueling',
            pronunciation: 'FYOO-ling',
            definition: 'Process of adding fuel to aircraft tanks',
            example: 'Fueling delay extended departure time',
          },
          {
            word: 'passenger compensation',
            pronunciation: 'PAY-sen-jer KOM-pen-SAY-shun',
            definition: 'Monetary or service reimbursement for delay',
            example: 'Passengers eligible for compensation under regulations',
          },
          {
            word: 'standby list',
            pronunciation: 'STAND-by LIST',
            definition: 'List of passengers waiting for available seats',
            example: 'Several passengers are on the standby list',
          },
          {
            word: 'missed connection',
            pronunciation: 'MIST kun-EK-shun',
            definition: 'Failure to make connecting flight',
            example: 'Delay caused passengers to miss connections',
          },
          {
            word: 'gate hold',
            pronunciation: 'GAYT HOLD',
            definition: 'Aircraft remains at gate due to airport conditions',
            example: 'Gate hold implemented due to airfield congestion',
          },
          {
            word: 'tarmac delay',
            pronunciation: 'TAR-mac dih-LAY',
            definition: 'Aircraft waiting on runway or taxiway',
            example: 'Tarmac delay limited to three hours',
          },
          {
            word: 'declared emergency',
            pronunciation: 'dih-KLARD ee-MER-jen-see',
            definition: 'Aircraft announcing critical situation',
            example: 'Delay caused by declared emergency aircraft landing',
          },
          {
            word: 'ground stop',
            pronunciation: 'GROUND STOP',
            definition: 'Airport prohibits all departures',
            example: 'Ground stop in effect due to severe weather',
          },
          {
            word: 'minimum equipment list',
            pronunciation: 'MIN-i-mum ee-KWIP-ment LIST',
            definition: 'Aircraft systems allowed to be inoperable',
            example: 'Delay for minor equipment not on minimum list',
          },
          {
            word: 'maintenance check',
            pronunciation: 'MAYN-ten-ence CHECK',
            definition: 'Inspection of aircraft systems',
            example: 'Maintenance check revealed need for adjustment',
          },
        ],
        grammar: [
          {
            title: 'Apology and Empathy Expressions',
            explanation: 'Professional communication requires expressing regret while maintaining authority',
            examples: [
              { sentence: 'We regret the inconvenience caused by this delay' },
              { sentence: 'We understand your frustration regarding the departure postponement' },
              { sentence: 'We appreciate your understanding and cooperation' },
            ],
          },
        ],
        exercises: [
          {
            id: 'ex-1',
            type: 'multiple-choice',
            question: 'How should you communicate a delay to passengers?',
            options: [
              { text: 'Ignore it and hope they do not notice', isCorrect: false },
              { text: 'Provide prompt, honest communication with regular updates', isCorrect: true, explanation: 'Transparent communication maintains passenger confidence' },
              { text: 'Only announce after one hour of delay', isCorrect: false },
            ],
          },
        ],
        quiz: {
          questions: [
            {
              id: 'q-1',
              question: 'What is the primary goal when communicating a flight delay?',
              options: ['Hide the delay reason', 'Manage passenger expectations with honest, timely information', 'Minimize compensation', 'Blame other departments'],
              correctAnswer: 1,
              explanation: 'Professional delay communication provides honest information and regular updates to manage passenger expectations',
            },
            {
              id: 'q-2',
              question: 'Which is NOT a common cause of flight delays?',
              options: ['Mechanical issues', 'Weather conditions', 'Air traffic congestion', 'Passenger preference for later departure'],
              correctAnswer: 3,
              explanation: 'Flight schedules are fixed; passenger preferences do not cause official delays',
            },
            {
              id: 'q-3',
              question: 'How often should updates be provided during a significant delay?',
              options: ['Only once at announcement', 'Every 15-30 minutes', 'When regulations require it', 'Never inform passengers'],
              correctAnswer: 1,
              explanation: 'Regular updates every 15-30 minutes help manage passenger expectations during delays',
            },
            {
              id: 'q-4',
              question: 'What should you do if a passenger asks about missed connections during delay?',
              options: ['Ignore the question', 'Notify captain and arrange rebooking assistance', 'Tell them it is their responsibility', 'Make promises about arrival time'],
              correctAnswer: 1,
              explanation: 'Crew should report connection issues to captain so rebooking can be arranged if necessary',
            },
            {
              id: 'q-5',
              question: 'What does "gate hold" mean?',
              options: ['Holding passengers at the gate counter', 'Aircraft remaining at gate due to airport conditions', 'Delaying boarding', 'Preventing aircraft entry to gate'],
              correctAnswer: 1,
              explanation: 'Gate hold means the aircraft remains at the gate rather than pushing back due to congestion or operational reasons',
            },
          ],
        },
        flashcards: [
          {
            id: 'fc-1',
            front: 'Mechanical Delay',
            back: 'Postponement of departure due to aircraft maintenance',
            audioFront: '/audio/unit-2/lesson-2/term-mechanical.wav',
            audioBack: '/audio/unit-2/lesson-2/definition-mechanical.wav',
          },
        ],
        review: {
          keyPoints: [
            'Inform passengers promptly about delays',
            'Provide honest reasons for postponements',
            'Give regular updates about expected departure',
            'Maintain professional and empathetic tone',
            'Assist passengers with connections and needs',
            'Document delay reasons and duration',
          ],
          commonMistakes: [
            'Delaying announcement of delays',
            'Providing inaccurate time estimates',
            'Being vague about delay reasons',
            'Failing to update passengers regularly',
            'Showing frustration or impatience',
            'Making promises you cannot keep',
          ],
        },
      },
      {
        id: 'lesson-2-3-special-passengers',
        unitId: 'unit-2-preflight',
        title: 'Communicating with Special Passengers',
        description: 'Learn to assist and communicate with passengers requiring special attention',
        icon: '♿',
        icaoLevel: 5,
        category: 'cabin-crew',
        difficulty: 'intermediate',
        xpReward: 150,
        estimatedDurationMinutes: 35,
        locked: false,
        order: 3,
        objectives: [
          { id: 'obj-1', description: 'Identify passenger special needs', type: 'listening' },
          { id: 'obj-2', description: 'Communicate with sensitivity and respect', type: 'speaking' },
          { id: 'obj-3', description: 'Provide appropriate assistance', type: 'speaking' },
        ],
        scenario: {
          id: 'scenario-1',
          title: 'Assisting Special Needs Passenger',
          description: 'Communicate professionally with passenger requiring mobility assistance',
          context: 'Passenger with mobility limitations boarding aircraft',
          audioSegments: [
            {
              id: 'audio-1',
              text: 'Good morning. We have a passenger in wheelchair who needs boarding assistance. Can you arrange a lift and aisle chair?',
              audioUrl: '/audio/unit-2/lesson-3/special-need-request.wav',
              durationSeconds: 8,
              speaker: 'crew',
            },
            {
              id: 'audio-2',
              text: 'Good morning, sir. Welcome aboard. We have assistance available. The aisle chair will help you reach your seat comfortably.',
              audioUrl: '/audio/unit-2/lesson-3/passenger-welcome.wav',
              durationSeconds: 7,
              speaker: 'crew',
            },
          ],
          vocabulary: [
            {
              word: 'wheelchair',
              definition: 'Mobility device for passenger movement',
              pronunciation: 'HWEEL-chair',
            },
            {
              word: 'assistance',
              definition: 'Help provided to passenger',
              pronunciation: 'uh-SIS-tence',
            },
          ],
        },
        theory: {
          title: 'Special Passenger Assistance and Communication',
          content: `
All passengers deserve respectful, dignified treatment regardless of special needs.

Categories of Special Passengers:
1. Mobility-Impaired - Wheelchair users, crutches, walkers
2. Visually Impaired - Blind or low vision passengers
3. Deaf or Hard of Hearing - Communication assistance
4. Elderly Passengers - May need additional time or support
5. Unaccompanied Minors - Children traveling alone
6. Pregnant Passengers - Seating and comfort modifications
7. Medical Conditions - Diabetes, heart conditions, etc.
8. Behavioral Needs - Autism, anxiety disorders

Communication Principles:
- Speak directly to passenger, not caregiver
- Ask before providing assistance
- Use respectful language
- Maintain eye contact when possible
- Listen carefully to specific requests
- Do not make assumptions
- Respect dignity and privacy
- Document special needs in crew briefing

Pre-Flight Coordination:
- Identify special passengers during check-in
- Notify ground services and crew
- Brief cabin crew on specific needs
- Arrange assistance equipment (wheelchairs, lifts, aisle chairs)
- Plan seating for accessibility
          `,
          audioExplanation: {
            id: 'theory-audio-1',
            text: 'Special passenger assistance requires compassion, respect, and clear communication. Every passenger deserves equal care and dignity. Always ask passengers what they need rather than assuming, and involve them in planning their flight experience.',
            audioUrl: '/audio/unit-2/lesson-3/special-theory.wav',
            durationSeconds: 25,
            speaker: 'instructor',
          },
        },
        icaoPhraseoology: {
          category: 'Special Passenger Communication',
          phrases: [
            {
              situation: 'Offering assistance to mobility-impaired passenger',
              phrase: 'May I offer assistance?',
              pronunciation: 'may I AW-fer uh-SIS-tence',
              meaning: 'Politely asking if passenger needs help',
              example: 'May I offer assistance with boarding or getting to your seat?',
            },
            {
              situation: 'Communicating with hearing-impaired passenger',
              phrase: 'We have assistance available',
              pronunciation: 'wee hav uh-SIS-tence uh-VAIL-uh-bul',
              meaning: 'Informing of available support',
              example: 'We have a written safety briefing available for you',
            },
            {
              situation: 'Greeting unaccompanied minor',
              phrase: 'Welcome aboard, young passenger',
              pronunciation: 'WEL-kum uh-BORD, YUNG PAY-sen-jer',
              meaning: 'Acknowledging and welcoming child traveler',
              example: 'Welcome aboard. We will take good care of you on this flight',
            },
            {
              situation: 'Assisting elderly passenger',
              phrase: 'Take your time, we are here to help',
              pronunciation: 'tayk your TYM, wee ar HERE too HELP',
              meaning: 'Offering patient, unhurried support',
              example: 'Take your time boarding. We are here to help you to your seat',
            },
            {
              situation: 'Communicating with visually impaired passenger',
              phrase: 'I will describe our route to your seat',
              pronunciation: 'I will dih-SKRYB our ROOT too your SEET',
              meaning: 'Verbal guidance for navigation',
              example: 'I will describe each step as we move to first class',
            },
            {
              situation: 'Addressing pregnant passenger needs',
              phrase: 'Do you require special seating accommodation?',
              pronunciation: 'doo you rih-KWYR SPESH-ul SEET-ing ak-KOM-uh-DAY-shun',
              meaning: 'Offering seat selection for comfort',
              example: 'Do you require aisle seating for easy lavatory access?',
            },
            {
              situation: 'Informing about accessible lavatories',
              phrase: 'We have an accessible lavatory available',
              pronunciation: 'wee hav an ak-SES-i-bul LAV-uh-tor-ee uh-VAIL-uh-bul',
              meaning: 'Indicating wheelchair-accessible bathroom',
              example: 'We have an accessible lavatory in the forward cabin',
            },
            {
              situation: 'Confirming special needs accommodation',
              phrase: 'We have arranged all requested assistance',
              pronunciation: 'wee hav uh-RANJD awl rih-KWES-ted uh-SIS-tence',
              meaning: 'Confirming all accommodations are ready',
              example: 'We have arranged all requested assistance for your flight',
            },
          ],
        },
        vocabulary: [
          {
            word: 'mobility-impaired',
            pronunciation: 'moh-BIL-i-tee im-PAIRD',
            definition: 'Person with limited ability to move',
            example: 'Mobility-impaired passengers may use wheelchairs or crutches',
          },
          {
            word: 'aisle chair',
            pronunciation: 'YL CHAIR',
            definition: 'Special narrow chair for aircraft aisle movement',
            example: 'The aisle chair allows wheelchair users to reach their seats',
          },
          {
            word: 'wheelchair lift',
            pronunciation: 'HWEEL-chair LIFT',
            definition: 'Equipment for raising wheelchair to aircraft door',
            example: 'Wheelchair lift provides safe boarding for disabled passengers',
          },
          {
            word: 'visually impaired',
            pronunciation: 'VIZH-oo-uh-lee im-PAIRD',
            definition: 'Person with limited or no vision',
            example: 'Visually impaired passengers may have guide dogs',
          },
          {
            word: 'hearing impaired',
            pronunciation: 'HEER-ing im-PAIRD',
            definition: 'Person with limited hearing ability',
            example: 'Hearing-impaired passengers may require written briefings',
          },
          {
            word: 'unaccompanied minor',
            pronunciation: 'un-uh-KUM-puh-need MY-ner',
            definition: 'Child traveling without adult guardian',
            example: 'Unaccompanied minors receive special supervision',
          },
          {
            word: 'guide dog',
            pronunciation: 'GYD DAWG',
            definition: 'Trained dog assisting blind passenger',
            example: 'Guide dogs are permitted to travel in aircraft cabins',
          },
          {
            word: 'service animal',
            pronunciation: 'SER-vis AN-i-mul',
            definition: 'Trained animal providing assistance to passenger',
            example: 'Service animals have special accommodation rights',
          },
          {
            word: 'accessible',
            pronunciation: 'ak-SES-i-bul',
            definition: 'Available and usable for people with disabilities',
            example: 'Accessible lavatories accommodate wheelchairs',
          },
          {
            word: 'accommodation',
            pronunciation: 'ak-kom-uh-DAY-shun',
            definition: 'Arrangement made for special passenger needs',
            example: 'Seat accommodation arranged near lavatory',
          },
          {
            word: 'caregiver',
            pronunciation: 'KAIR-gay-vur',
            definition: 'Person assisting passenger with special needs',
            example: 'Caregivers sit with passengers requiring assistance',
          },
          {
            word: 'dignity',
            pronunciation: 'DIG-ni-tee',
            definition: 'Worthy and respectful treatment',
            example: 'All passengers deserve treatment with dignity',
          },
          {
            word: 'pregnant',
            pronunciation: 'PREG-nunt',
            definition: 'Expectant mother carrying child',
            example: 'Pregnant passengers may require special seating',
          },
          {
            word: 'medical condition',
            pronunciation: 'MED-i-kul kun-DISH-un',
            definition: 'Health issue requiring special consideration',
            example: 'Passengers with medical conditions require documentation',
          },
          {
            word: 'medication',
            pronunciation: 'med-i-KAY-shun',
            definition: 'Medicine taken for health condition',
            example: 'Passengers may bring necessary medications',
          },
          {
            word: 'oxygen',
            pronunciation: 'OK-si-jen',
            definition: 'Gas necessary for breathing',
            example: 'Portable oxygen may be needed for elderly passengers',
          },
          {
            word: 'diabetic',
            pronunciation: 'dy-uh-BED-ik',
            definition: 'Person with diabetes requiring special diet',
            example: 'Diabetic passengers may request special meals',
          },
          {
            word: 'anxiety',
            pronunciation: 'ANG-ZY-uh-tee',
            definition: 'Feeling of worry or nervousness',
            example: 'Nervous passengers may experience flight anxiety',
          },
        ],
        grammar: [
          {
            title: 'Polite Request Forms in English',
            explanation: 'Professional service uses formal request language that shows respect',
            examples: [
              'May I assist you?',
              'Would you like me to help?',
              'How can I make your flight more comfortable?',
              'Is there anything I can do for you?',
            ],
          },
        ],
        exercises: [
          {
            id: 'ex-1',
            type: 'multiple-choice',
            question: 'When assisting a passenger with special needs, what should you do first?',
            options: [
              { text: 'Make decisions about what you think they need', isCorrect: false },
              { text: 'Ask the passenger what assistance they require', isCorrect: true, explanation: 'Always ask passengers what they need rather than assuming' },
              { text: 'Ignore their special needs', isCorrect: false },
            ],
          },
        ],
        quiz: {
          questions: [
            {
              id: 'q-1',
              question: 'When communicating with a deaf passenger, what should you provide?',
              options: ['Spoken instructions only', 'Written safety briefing and accommodations', 'Loud voice communication', 'Assume they can read lips'],
              correctAnswer: 1,
              explanation: 'Deaf passengers require written briefings and visual safety demonstrations',
            },
            {
              id: 'q-2',
              question: 'How should you address a visually impaired passenger?',
              options: ['Speak to their companion instead', 'Speak directly to the passenger using descriptive language', 'Avoid mentioning visual information', 'Ask them to wear sunglasses'],
              correctAnswer: 1,
              explanation: 'Speak respectfully and directly to the passenger, using descriptive language to guide them',
            },
            {
              id: 'q-3',
              question: 'What is an aisle chair?',
              options: ['Regular aircraft seat', 'Special narrow chair for cabin aisle movement', 'Wheelchair', 'Passenger seat for disabled persons'],
              correctAnswer: 1,
              explanation: 'An aisle chair is a special narrow chair that allows wheelchair users to move through the narrow aircraft aisle to their seat',
            },
            {
              id: 'q-4',
              question: 'What should you do when assisting an elderly passenger?',
              options: ['Hurry them along', 'Offer patient, unhurried support', 'Assume they are confused', 'Speak slowly and loudly'],
              correctAnswer: 1,
              explanation: 'Elderly passengers should be treated with respect and allowed to proceed at a comfortable pace',
            },
            {
              id: 'q-5',
              question: 'How should you refer to passengers with disabilities?',
              options: ['By their disability', 'With respectful, person-first language', 'As "special passengers" every time', 'Using outdated terminology'],
              correctAnswer: 1,
              explanation: 'Use respectful language that emphasizes the person first, not their disability',
            },
          ],
        },
        flashcards: [
          {
            id: 'fc-1',
            front: 'Aisle Chair',
            back: 'Special narrow chair for moving wheelchair users through aircraft cabin',
            audioFront: '/audio/unit-2/lesson-3/term-aisle-chair.wav',
            audioBack: '/audio/unit-2/lesson-3/definition-aisle-chair.wav',
          },
        ],
        review: {
          keyPoints: [
            'Always ask special passengers what assistance they need',
            'Speak with respect and dignity to all passengers',
            'Identify special needs during pre-flight briefing',
            'Arrange appropriate equipment and accommodations',
            'Communicate clearly and with empathy',
            'Document special requirements for safety',
            'Treat all passengers as individuals with agency',
          ],
          commonMistakes: [
            'Making assumptions about what passengers need',
            'Speaking to caregiver instead of passenger',
            'Using disrespectful or outdated terminology',
            'Rushing elderly or disabled passengers',
            'Failing to provide alternatives for deaf passengers',
            'Not confirming that accommodations are adequate',
            'Treating passengers as problems rather than guests',
          ],
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
    lessons: [
      {
        id: 'lesson-3-1-taxi',
        unitId: 'unit-3-ground',
        title: 'Taxi and Holding Procedures',
        description: 'Learn ground communication for taxi operations',
        icon: '🚕',
        icaoLevel: 4,
        category: 'cabin-crew',
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
              audioUrl: '/audio/unit-3/lesson-1/taxi-clearance.wav',
              durationSeconds: 9,
              speaker: 'instructor',
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
7. Proceed to holding point

Key Communication Points:
- Always read back taxiway assignments
- Report if unable to comply
- Confirm runway assignments
- Request clarification if unclear
- Report position on frequency when requested

Taxiway Terminology:
- Taxiway names: Alpha, Bravo, Charlie, etc.
- Holding point: Position before runway
- Crossing runway: Transverse runway intersection
- Run-up area: Position for engine checks
          `,
          audioExplanation: {
            id: 'theory-audio-1',
            text: 'Ground control manages all aircraft movement on the airport surface. Pilots must follow their assigned taxi route precisely, read back all clearances, and report their position when requested.',
            audioUrl: '/audio/unit-3/lesson-1/taxi-theory.wav',
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
              situation: 'Confirming taxi clearance',
              phrase: 'Taxi to runway via taxiway alpha',
              pronunciation: 'TAK-see too RUN-way VY-uh TAK-see-way AL-fuh',
              meaning: 'Pilot reading back taxi clearance',
              example: 'November Four Seven Three, taxi to runway one eight left via alpha',
            },
            {
              situation: 'Ready at runway',
              phrase: 'Line up and wait',
              pronunciation: 'line UP and WAIT',
              meaning: 'Position on runway but hold for takeoff clearance',
              example: 'November Four Seven Three, line up and wait runway one eight left',
            },
            {
              situation: 'Pilot reporting position',
              phrase: 'Position taxiway charlie',
              pronunciation: 'puh-ZISH-un TAK-see-way CHAR-lee',
              meaning: 'Aircraft location report',
              example: 'November Four Seven Three position taxiway charlie',
            },
            {
              situation: 'Hold short instruction',
              phrase: 'Hold short of runway zero nine',
              pronunciation: 'hold SHORT uv RUN-way ZEE-roh NINE',
              meaning: 'Stop before specific runway',
              example: 'Hold short of runway zero nine right',
            },
            {
              situation: 'Request clarification',
              phrase: 'Say again the taxiway assignment',
              pronunciation: 'say uh-GEN the TAK-see-way uh-SYN-ment',
              meaning: 'Pilot asking for repetition',
              example: 'Say again, did you say taxiway alpha or bravo?',
            },
            {
              situation: 'Report unable to comply',
              phrase: 'Unable to accept that taxiway',
              pronunciation: 'un-AY-bul too ak-SEP that TAK-see-way',
              meaning: 'Cannot follow assigned route',
              example: 'Unable to accept taxiway delta, aircraft size conflict',
            },
            {
              situation: 'Acknowledge ground instructions',
              phrase: 'Wilco, taxi to runway one eight',
              pronunciation: 'WIL-koh, TAK-see too RUN-way one eight',
              meaning: 'Will comply with taxi instructions',
              example: 'Wilco, taxi to runway one eight left via alpha',
            },
          ],
        },
        vocabulary: [
          {
            word: 'taxi',
            pronunciation: 'TAK-see',
            definition: 'Move aircraft on ground using own engines',
            example: 'Aircraft taxi to runway after push-back',
          },
          {
            word: 'taxiway',
            pronunciation: 'TAK-see-way',
            definition: 'Designated ground path for aircraft movement',
            example: 'Follow taxiway alpha to the holding point',
          },
          {
            word: 'holding point',
            pronunciation: 'HOLD-ing POINT',
            definition: 'Position aircraft waits before entering runway',
            example: 'Position aircraft at holding point alpha',
          },
          {
            word: 'apron',
            pronunciation: 'AY-prun',
            definition: 'Paved parking and movement area near terminal',
            example: 'Taxi across the apron to taxiway bravo',
          },
          {
            word: 'tug',
            pronunciation: 'TUG',
            definition: 'Vehicle that pulls aircraft from gate',
            example: 'Tug attached to aircraft for push-back',
          },
          {
            word: 'push-back',
            pronunciation: 'PUSH-bak',
            definition: 'Towing aircraft backward from gate',
            example: 'Commence push-back when tug is connected',
          },
          {
            word: 'runway',
            pronunciation: 'RUN-way',
            definition: 'Paved strip for aircraft takeoff and landing',
            example: 'Cleared to takeoff runway one eight left',
          },
          {
            word: 'crossing',
            pronunciation: 'KRAW-sing',
            definition: 'Transverse runway intersection',
            example: 'Hold short of runway crossing',
          },
          {
            word: 'run-up area',
            pronunciation: 'RUN-up AIR-ee-uh',
            definition: 'Area for engine checks before takeoff',
            example: 'Proceed to run-up area for engine test',
          },
          {
            word: 'ground control',
            pronunciation: 'GROUND kun-TROHL',
            definition: 'ATC frequency controlling airport surface movement',
            example: 'Contact ground control on one-two-one-point-nine',
          },
          {
            word: 'read-back',
            pronunciation: 'RED-bak',
            definition: 'Pilot repeating clearance to confirm understanding',
            example: 'Read back all taxi clearances for confirmation',
          },
          {
            word: 'unable',
            pronunciation: 'un-AY-bul',
            definition: 'Pilot cannot comply with instruction',
            example: 'Unable to accept that taxiway due to aircraft size',
          },
          {
            word: 'hold position',
            pronunciation: 'hold puh-ZISH-un',
            definition: 'Remain at current location',
            example: 'Hold position until further instructions',
          },
          {
            word: 'resume taxi',
            pronunciation: 'rih-ZOO-m TAK-see',
            meaning: 'Continue taxiing after stopping',
            example: 'Resume taxi to runway one eight',
          },
          {
            word: 'report',
            pronunciation: 'rih-PORT',
            definition: 'Inform ATC of position or status',
            example: 'Report position alpha one',
          },
          {
            word: 'with you',
            pronunciation: 'with YOO',
            definition: 'Acknowledge and ready for next instruction',
            example: 'With you at taxiway charlie',
          },
          {
            word: 'tower',
            pronunciation: 'TAU-ur',
            definition: 'ATC facility controlling runway operations',
            example: 'Contact tower one-two-four-point-eight',
          },
          {
            word: 'intersection',
            pronunciation: 'in-tur-SEK-shun',
            definition: 'Point where taxiways cross',
            example: 'Hold short of taxiway intersection',
          },
          {
            word: 'hold short',
            pronunciation: 'hold SHORT',
            definition: 'Stop before specific point',
            example: 'Hold short of runway zero nine right',
          },
          {
            word: 'proceed',
            pronunciation: 'pruh-SEED',
            definition: 'Continue movement on authorized route',
            example: 'Proceed to runway for takeoff',
          },
        ],
        grammar: [
          {
            title: 'Directional Language in Aviation',
            explanation: 'Aviation uses precise directional terms for clarity',
            examples: [
              { sentence: 'Via taxiway alpha - using that specific route' },
              { sentence: 'Hold short of crossing runway - stop before intersection' },
              { sentence: 'Report position taxiway bravo - indicate where you are' },
            ],
          },
        ],
        exercises: [
          {
            id: 'ex-1',
            type: 'multiple-choice',
            question: 'What should you do when receiving taxi clearance?',
            options: [
              { text: 'Proceed immediately without confirmation', isCorrect: false },
              { text: 'Read back the entire clearance to confirm understanding', isCorrect: true, explanation: 'Read-backs prevent communication errors' },
              { text: 'Taxi to a different runway than assigned', isCorrect: false },
            ],
          },
        ],
        quiz: {
          questions: [
            {
              id: 'q-1',
              question: 'What is the correct response to "Hold short of runway zero nine"?',
              options: ['Continue to runway', 'Stop before reaching runway zero nine', 'Go around and try again', 'Request new clearance'],
              correctAnswer: 1,
              explanation: 'Hold short means stop before reaching that runway and wait for further clearance',
            },
            {
              id: 'q-2',
              question: 'When should an aircraft read back its taxi clearance?',
              options: ['Never', 'After receiving clearance', 'Only if confused', 'When arriving at runway'],
              correctAnswer: 1,
              explanation: 'All taxi clearances must be read back immediately after receipt to prevent misunderstanding',
            },
            {
              id: 'q-3',
              question: 'What does "position taxiway charlie" mean?',
              options: ['Get ready for takeoff', 'Your current location is taxiway charlie', 'Go to taxiway charlie', 'Taxiway is clear'],
              correctAnswer: 1,
              explanation: 'Position report indicates where the aircraft currently is located',
            },
            {
              id: 'q-4',
              question: 'What is an "apron" at an airport?',
              options: ['Crew uniform', 'Runway surface', 'Paved parking and movement area', 'Taxiway lane'],
              correctAnswer: 2,
              explanation: 'Apron is the paved area where aircraft park and move near the terminal building',
            },
            {
              id: 'q-5',
              question: 'If unable to comply with assigned taxiway, what should pilot do?',
              options: ['Follow anyway', 'Choose different taxiway', 'Report "unable" immediately', 'Proceed slowly'],
              correctAnswer: 2,
              explanation: 'Pilots must immediately report "unable" and request alternative route for safety',
            },
          ],
        },
        flashcards: [
          {
            id: 'fc-1',
            front: 'Taxi',
            back: 'Move aircraft on ground using own engines',
            audioFront: '/audio/unit-3/lesson-1/term-taxi.wav',
            audioBack: '/audio/unit-3/lesson-1/definition-taxi.wav',
          },
        ],
        review: {
          keyPoints: [
            'Always read back taxi clearance',
            'Follow assigned taxiway route precisely',
            'Report position when requested',
            'Request clarification if uncertain',
            'Report unable if unable to comply',
            'Hold short when instructed',
            'Maintain contact with ground control',
          ],
          commonMistakes: [
            'Taking wrong taxiway',
            'Not reading back clearance',
            'Proceeding without clearance',
            'Ignoring hold short instructions',
            'Taxiing too fast on ground',
            'Not reporting position changes',
          ],
        },
      },
      {
        id: 'lesson-3-2-takeoff-clearance',
        unitId: 'unit-3-ground',
        title: 'Takeoff Clearance and Runway Operations',
        description: 'Learn takeoff procedures and runway communication',
        icon: '🛫',
        icaoLevel: 4,
        category: 'cabin-crew',
        difficulty: 'intermediate',
        xpReward: 150,
        estimatedDurationMinutes: 30,
        locked: false,
        order: 2,
        objectives: [
          { id: 'obj-1', description: 'Request takeoff clearance properly', type: 'speaking' },
          { id: 'obj-2', description: 'Understand runway conditions', type: 'listening' },
          { id: 'obj-3', description: 'Execute safe takeoff procedures', type: 'speaking' },
        ],
        scenario: {
          id: 'scenario-1',
          title: 'Requesting Takeoff Clearance',
          description: 'Request takeoff clearance from tower',
          context: 'Aircraft at holding point ready for departure',
          audioSegments: [
            {
              id: 'audio-1',
              text: 'Tower, November Four Seven Three, ready for departure',
              audioUrl: '/audio/unit-3/lesson-2/takeoff-request.wav',
              durationSeconds: 5,
              speaker: 'pilot',
            },
            {
              id: 'audio-2',
              text: 'November Four Seven Three, cleared for takeoff runway one eight left, wind two seven zero at eight knots',
              audioUrl: '/audio/unit-3/lesson-2/takeoff-clear.wav',
              durationSeconds: 8,
              speaker: 'instructor',
            },
          ],
          vocabulary: [
            { word: 'takeoff', definition: 'Aircraft departure from ground', pronunciation: 'TAKE-off' },
            { word: 'wind', definition: 'Air movement speed and direction', pronunciation: 'WIND' },
          ],
        },
        theory: {
          title: 'Takeoff Procedures and Runway Communication',
          content: `
Takeoff operations require precise communication and adherence to procedures.

Pre-Takeoff Checklist:
1. Flight deck: All systems checked
2. Cabin crew: All doors armed, passengers seated
3. Fuel: Adequate for flight
4. Weight and balance: Within limits
5. Weather: Suitable for departure
6. Runway: Clear and available

Takeoff Clearance Process:
1. Aircraft reaches holding point
2. Pilot requests takeoff clearance
3. Tower provides clearance with runway
4. Pilot reads back clearance
5. Pilot advances engines for takeoff
6. Pilot reports flight progress

Runway Condition Information:
- Wet or dry runway
- Crosswind component
- Runway length available
- Obstacles or restrictions
- Surface contamination
- Lighting conditions

Safety Considerations:
- No aircraft crossing runway
- Holding aircraft notify tower
- Rejected takeoff procedures
- Engine failure procedures
- Abort authority
          `,
          audioExplanation: {
            id: 'theory-audio-1',
            text: 'Takeoff is the most critical phase of flight. Tower provides final clearance after ensuring runway is clear and safe. Pilots must confirm all conditions and respond immediately to any issues.',
            audioUrl: '/audio/unit-3/lesson-2/takeoff-theory.wav',
            durationSeconds: 22,
            speaker: 'instructor',
          },
        },
        icaoPhraseoology: {
          category: 'Takeoff Operations',
          phrases: [
            {
              situation: 'Requesting takeoff clearance',
              phrase: 'Request takeoff',
              pronunciation: 'reh-QUEST TAKE-off',
              meaning: 'Pilot asking for permission to begin takeoff',
              example: 'Tower, November Four Seven Three, request takeoff runway one eight left',
            },
            {
              situation: 'Tower clearing for takeoff',
              phrase: 'Cleared for takeoff',
              pronunciation: 'KLERD for TAKE-off',
              meaning: 'Permission to begin departure roll',
              example: 'November Four Seven Three, cleared for takeoff runway one eight left',
            },
            {
              situation: 'Providing wind information',
              phrase: 'Wind two seven zero at eight knots',
              pronunciation: 'wind two seven zero at eight NOTS',
              meaning: 'Wind direction and speed',
              example: 'Wind two seven zero at eight knots, runway clear',
            },
            {
              situation: 'Providing runway information',
              phrase: 'Runway one eight left, light rain',
              pronunciation: 'RUN-way one eight left, LYT RAYN',
              meaning: 'Runway condition description',
              example: 'Runway one eight left, light rain, slippery',
            },
            {
              situation: 'Pilot confirming takeoff clearance',
              phrase: 'Cleared for takeoff runway one eight left, November Four Seven Three',
              pronunciation: 'KLERD for TAKE-off RUN-way one eight left',
              meaning: 'Pilot reading back takeoff clearance',
              example: 'Cleared for takeoff runway one eight left, November Four Seven Three',
            },
            {
              situation: 'Request to hold position',
              phrase: 'Hold position runway one eight',
              pronunciation: 'hold puh-ZISH-un RUN-way one eight',
              meaning: 'Aircraft must not begin takeoff roll',
              example: 'Hold position runway one eight left, traffic on final approach',
            },
            {
              situation: 'Reporting takeoff',
              phrase: 'Airborne, climbing to one thousand',
              pronunciation: 'AIR-born, KLIME-ing too one THAUzund',
              meaning: 'Aircraft has left ground and is ascending',
              example: 'November Four Seven Three, airborne',
            },
            {
              situation: 'Emergency takeoff abort',
              phrase: 'Rejecting takeoff',
              pronunciation: 'rih-JEK-ting TAKE-off',
              meaning: 'Canceling departure roll due to emergency',
              example: 'Rejecting takeoff, engine failure, runway one eight left',
            },
          ],
        },
        vocabulary: [
          {
            word: 'takeoff',
            pronunciation: 'TAKE-off',
            definition: 'Flight phase from start of takeoff roll until airborne',
            example: 'Takeoff clearance granted at one-zero hours',
          },
          {
            word: 'crosswind',
            pronunciation: 'KROSS-wind',
            definition: 'Wind perpendicular to runway direction',
            example: 'Crosswind component exceeds aircraft limits',
          },
          {
            word: 'headwind',
            pronunciation: 'HED-wind',
            definition: 'Wind opposing aircraft direction of flight',
            example: 'Strong headwind reduces takeoff distance required',
          },
          {
            word: 'tailwind',
            pronunciation: 'TAYL-wind',
            definition: 'Wind in same direction as aircraft motion',
            example: 'Tailwind component limits takeoff performance',
          },
          {
            word: 'runway',
            pronunciation: 'RUN-way',
            definition: 'Paved surface for takeoff and landing',
            example: 'Runway one eight left available',
          },
          {
            word: 'clearance',
            pronunciation: 'KLIR-ens',
            definition: 'Permission to proceed from ATC',
            example: 'Takeoff clearance issued at time one-zero-zero-five',
          },
          {
            word: 'holding point',
            pronunciation: 'HOLD-ing POINT',
            definition: 'Position where aircraft waits for takeoff',
            example: 'Position at holding point alpha',
          },
          {
            word: 'airborne',
            pronunciation: 'AIR-born',
            definition: 'Aircraft has left ground and is flying',
            example: 'Airborne at time zero-one-zero',
          },
          {
            word: 'reject',
            pronunciation: 'rih-JEK',
            definition: 'Abort takeoff before airborne',
            example: 'Reject takeoff if any emergency occurs',
          },
          {
            word: 'abort',
            pronunciation: 'uh-BORT',
            definition: 'Cancel procedure and stop immediately',
            example: 'Abort takeoff due to engine failure',
          },
          {
            word: 'contamination',
            pronunciation: 'kon-tam-i-NAY-shun',
            definition: 'Foreign material on runway',
            example: 'Runway contamination reduces braking',
          },
          {
            word: 'performance',
            pronunciation: 'per-FOR-mence',
            definition: 'Aircraft capability in current conditions',
            example: 'Aircraft performance degraded in hot weather',
          },
          {
            word: 'rotation',
            pronunciation: 'roh-TAY-shun',
            definition: 'Aircraft nose-up movement for takeoff',
            example: 'Rotation speed reached',
          },
          {
            word: 'acceleration',
            pronunciation: 'ak-sel-uh-RAY-shun',
            definition: 'Increase in speed',
            example: 'Normal acceleration during takeoff run',
          },
          {
            word: 'obstacles',
            pronunciation: 'AHB-stuh-kulz',
            definition: 'Objects that obstruct flight',
            example: 'Obstacles beyond runway cleared',
          },
          {
            word: 'V1 speed',
            pronunciation: 'VEE ONE SPEED',
            definition: 'Maximum speed for safe takeoff abort',
            example: 'V1 speed reached, continue takeoff',
          },
          {
            word: 'rotation speed',
            pronunciation: 'roh-TAY-shun SPEED',
            definition: 'Speed at which aircraft nose lifts for flight',
            example: 'Aircraft reaches rotation speed',
          },
          {
            word: 'liftoff',
            pronunciation: 'LIFT-off',
            definition: 'Moment aircraft leaves ground',
            example: 'Liftoff at runway end indicator',
          },
          {
            word: 'climb',
            pronunciation: 'KLYM',
            definition: 'Ascent to higher altitude',
            example: 'Continue climb to assigned altitude',
          },
          {
            word: 'visibility',
            pronunciation: 'viz-i-BIL-i-tee',
            definition: 'How far pilots can see',
            example: 'Visibility two thousand meters',
          },
        ],
        grammar: [
          {
            title: 'Numerical Reporting in Aviation',
            explanation: 'Wind direction, speed, altitude use specific formats',
            examples: [
              { sentence: 'Wind two seven zero at eight knots' },
              { sentence: 'Climb to flight level two-five-zero' },
              { sentence: 'Runway one eight left' },
            ],
          },
        ],
        exercises: [
          {
            id: 'ex-1',
            type: 'multiple-choice',
            question: 'How should wind be reported in aviation?',
            options: [
              { text: 'Approximately ninety degrees from west', isCorrect: false },
              { text: 'Magnetic heading and speed in knots', isCorrect: true, explanation: 'Wind: direction and speed format' },
              { text: 'General direction like north or south', isCorrect: false },
            ],
          },
        ],
        quiz: {
          questions: [
            {
              id: 'q-1',
              question: 'What does "cleared for takeoff" mean?',
              options: ['Begin taxi to runway', 'Permission to start takeoff roll', 'Position at holding point', 'Request permission to take off'],
              correctAnswer: 1,
              explanation: 'Cleared for takeoff is permission from tower to begin the takeoff roll',
            },
            {
              id: 'q-2',
              question: 'What is "crosswind"?',
              options: ['Wind helping takeoff', 'Wind perpendicular to runway', 'Wind opposing aircraft', 'Side wind assistance'],
              correctAnswer: 1,
              explanation: 'Crosswind is wind blowing perpendicular to the runway direction',
            },
            {
              id: 'q-3',
              question: 'When should pilot read back takeoff clearance?',
              options: ['Never necessary', 'Only on first flight', 'Immediately upon receipt', 'After engines start'],
              correctAnswer: 2,
              explanation: 'Takeoff clearance must be read back immediately to confirm accuracy',
            },
            {
              id: 'q-4',
              question: 'What is "V1 speed"?',
              options: ['Takeoff speed', 'Maximum speed for safe abort', 'Landing speed', 'Cruising speed'],
              correctAnswer: 1,
              explanation: 'V1 is the maximum speed at which pilot can safely reject takeoff',
            },
            {
              id: 'q-5',
              question: 'What action should pilot take if engine fails after V1?',
              options: ['Reject takeoff', 'Continue takeoff', 'Reduce speed', 'Request new runway'],
              correctAnswer: 1,
              explanation: 'After V1, takeoff must continue; before V1, takeoff can be rejected',
            },
          ],
        },
        flashcards: [
          {
            id: 'fc-1',
            front: 'Cleared for Takeoff',
            back: 'Permission from tower to begin takeoff roll',
            audioFront: '/audio/unit-3/lesson-2/term-cleared.wav',
            audioBack: '/audio/unit-3/lesson-2/definition-cleared.wav',
          },
        ],
        review: {
          keyPoints: [
            'Always read back takeoff clearance',
            'Confirm runway and wind information',
            'Understand crosswind limits',
            'Know abort procedures and V1 speed',
            'Report airborne status',
            'Maintain contact with tower',
            'Follow all safety procedures',
          ],
          commonMistakes: [
            'Proceeding without clearance',
            'Ignoring wind information',
            'Failing to read back clearance',
            'Attempting takeoff in unsuitable conditions',
            'Poor communication with tower',
            'Not monitoring runway status',
          ],
        },
      },
      {
        id: 'lesson-3-3-runway-safety',
        unitId: 'unit-3-ground',
        title: 'Runway Safety and Collision Avoidance',
        description: 'Learn safety procedures and avoid runway conflicts',
        icon: '⚠️',
        icaoLevel: 5,
        category: 'cabin-crew',
        difficulty: 'intermediate',
        xpReward: 150,
        estimatedDurationMinutes: 30,
        locked: false,
        order: 3,
        objectives: [
          { id: 'obj-1', description: 'Understand runway conflicts', type: 'listening' },
          { id: 'obj-2', description: 'Communicate safety concerns', type: 'speaking' },
          { id: 'obj-3', description: 'Execute collision avoidance', type: 'speaking' },
        ],
        scenario: {
          id: 'scenario-1',
          title: 'Runway Incursion Alert',
          description: 'Respond to potential runway conflict',
          context: 'Another aircraft on runway during takeoff roll',
          audioSegments: [
            {
              id: 'audio-1',
              text: 'November Four Seven Three, go around, traffic on the runway',
              audioUrl: '/audio/unit-3/lesson-3/goaround.wav',
              durationSeconds: 6,
              speaker: 'instructor',
            },
            {
              id: 'audio-2',
              text: 'Going around, climbing to two thousand, November Four Seven Three',
              audioUrl: '/audio/unit-3/lesson-3/goaround-confirm.wav',
              durationSeconds: 5,
              speaker: 'pilot',
            },
          ],
          vocabulary: [
            { word: 'go around', definition: 'Abort landing and return to fly', pronunciation: 'GO uh-ROUND' },
          ],
        },
        theory: {
          title: 'Runway Safety and Collision Avoidance',
          content: `
Runway safety is paramount in aviation operations.

Runway Incursion Types:
1. Unauthorized runway entry - Aircraft or vehicle on active runway
2. Take-off clearance confusion - Multiple aircraft on same runway
3. Landing confusion - Aircraft landing on occupied runway
4. Traffic on runway - Arriving or departing aircraft conflict

Collision Avoidance Procedures:
1. Tower monitors all runway activity
2. Pilots maintain runway awareness
3. Immediate go-around if traffic present
4. Report any runway concerns immediately
5. Never proceed unless certain runway is clear
6. Read-back all runway clearances

Communication During Go-Around:
- Tower provides new instructions
- Pilot acknowledges immediately
- Maintain separation from other traffic
- Report altitude and heading
- Request holding or pattern entry

Safety Principles:
- "When in doubt, go around"
- Never assume runway is clear
- Trust radar and tower information
- Report any confusion immediately
- Follow all ATC instructions precisely
          `,
          audioExplanation: {
            id: 'theory-audio-1',
            text: 'Runway safety incidents occur when communication breaks down. Always verify runway is clear before takeoff, and do not hesitate to go around if you have any doubt. Tower is responsible for preventing conflicts.',
            audioUrl: '/audio/unit-3/lesson-3/safety-theory.wav',
            durationSeconds: 23,
            speaker: 'instructor',
          },
        },
        icaoPhraseoology: {
          category: 'Runway Safety',
          phrases: [
            {
              situation: 'Tower ordering go-around',
              phrase: 'Go around, traffic on the runway',
              pronunciation: 'GO uh-ROUND, TRAF-ik on the RUN-way',
              meaning: 'Abort landing and climb away',
              example: 'Go around, traffic on the runway, climb to two thousand',
            },
            {
              situation: 'Pilot acknowledging go-around',
              phrase: 'Going around, climbing to assigned altitude',
              pronunciation: 'GO-ing uh-ROUND, KLIME-ing too uh-SYN-d al-TI-tood',
              meaning: 'Pilot executing go-around procedure',
              example: 'Going around, climbing to two thousand feet',
            },
            {
              situation: 'Reporting runway clear',
              phrase: 'Runway clear, proceed takeoff',
              pronunciation: 'RUN-way KLIR, pruh-SEED TAKE-off',
              meaning: 'Tower confirms runway is available',
              example: 'Runway clear, proceed takeoff runway one eight left',
            },
            {
              situation: 'Pilot reporting runway concern',
              phrase: 'Question, runway occupancy',
              pronunciation: 'KWES-chun, RUN-way AHK-yuh-pan-see',
              meaning: 'Pilot concerned about runway status',
              example: 'Question, is runway clear for takeoff?',
            },
            {
              situation: 'Tower confirming runway status',
              phrase: 'Confirm runway is clear',
              pronunciation: 'kun-FIRM RUN-way is KLIR',
              meaning: 'Verifying no traffic on runway',
              example: 'Confirm runway one eight left is clear',
            },
            {
              situation: 'Reporting missed go-around clearance',
              phrase: 'Did not receive go-around instruction',
              pronunciation: 'DID NOT rih-SEEV GO-uh-ROUND in-STRUK-shun',
              meaning: 'Pilot missed radio transmission',
              example: 'Tower, did not receive go-around, standing by for instruction',
            },
            {
              situation: 'Declaring immediate go-around',
              phrase: 'Declaring go-around, aircraft on runway',
              pronunciation: 'dih-KLAIR-ing GO uh-ROUND, AIR-kraft on RUN-way',
              meaning: 'Pilot initiating emergency go-around',
              example: 'Declaring go-around due to aircraft on runway',
            },
            {
              situation: 'Requesting holding pattern entry',
              phrase: 'Requesting hold, descend to one thousand',
              pronunciation: 'rih-KWES-ting HOLD, dih-SEND too one THAUzund',
              meaning: 'Requesting circling instructions after go-around',
              example: 'Requesting hold while runway is occupied',
            },
          ],
        },
        vocabulary: [
          {
            word: 'go-around',
            pronunciation: 'GO-uh-ROUND',
            definition: 'Abort landing and return to fly',
            example: 'Execute go-around if runway is not clear',
          },
          {
            word: 'runway incursion',
            pronunciation: 'RUN-way in-KER-zhun',
            definition: 'Unauthorized entry onto active runway',
            example: 'Runway incursion reported by tower',
          },
          {
            word: 'traffic',
            pronunciation: 'TRAF-ik',
            definition: 'Other aircraft in area',
            example: 'Traffic on runway, go around',
          },
          {
            word: 'conflict',
            pronunciation: 'KON-flikt',
            definition: 'Potential collision situation',
            example: 'Runway conflict avoided by go-around',
          },
          {
            word: 'separation',
            pronunciation: 'sep-uh-RAY-shun',
            definition: 'Minimum distance between aircraft',
            example: 'Maintain safe separation from other aircraft',
          },
          {
            word: 'holding pattern',
            pronunciation: 'HOLD-ing PAT-ern',
            definition: 'Oval flight pattern while waiting',
            example: 'Enter holding pattern at assigned altitude',
          },
          {
            word: 'missed approach',
            pronunciation: 'MIST uh-PROHCH',
            definition: 'Aborted landing procedure',
            example: 'Executing missed approach due to weather',
          },
          {
            word: 'radar',
            pronunciation: 'RAY-dar',
            definition: 'Electronic system detecting aircraft position',
            example: 'Tower radar shows aircraft on runway',
          },
          {
            word: 'ground control',
            pronunciation: 'GROUND kun-TROHL',
            definition: 'ATC frequency for surface movement',
            example: 'Contact ground control one-two-one-point-nine',
          },
          {
            word: 'tower',
            pronunciation: 'TAU-ur',
            definition: 'ATC facility controlling runway operations',
            example: 'Tower has authority to issue go-around',
          },
          {
            word: 'abort',
            pronunciation: 'uh-BORT',
            definition: 'Cancel procedure immediately',
            example: 'Abort landing if runway is unsafe',
          },
          {
            word: 'declare',
            pronunciation: 'dih-KLAIR',
            definition: 'Formally announce situation',
            example: 'Declare emergency if safety is threatened',
          },
          {
            word: 'proceed',
            pronunciation: 'pruh-SEED',
            definition: 'Continue with operation',
            example: 'Proceed takeoff when cleared',
          },
          {
            word: 'approach',
            pronunciation: 'uh-PROHCH',
            definition: 'Flight phase descending to land',
            example: 'Beginning approach to runway',
          },
          {
            word: 'descent',
            pronunciation: 'dih-SENT',
            definition: 'Downward altitude change',
            example: 'Descend to one thousand feet',
          },
          {
            word: 'altitude',
            pronunciation: 'AL-ti-tood',
            definition: 'Height above ground',
            example: 'Maintain altitude of two thousand feet',
          },
          {
            word: 'climb',
            pronunciation: 'KLYM',
            definition: 'Upward altitude change',
            example: 'Climb to five thousand feet',
          },
          {
            word: 'divert',
            pronunciation: 'dy-VERT',
            definition: 'Proceed to alternate destination',
            example: 'Divert to alternate airport due to weather',
          },
          {
            word: 'request',
            pronunciation: 'rih-KWEST',
            definition: 'Ask for permission or assistance',
            example: 'Request priority landing due to emergency',
          },
          {
            word: 'acknowledge',
            pronunciation: 'ak-NOL-ij',
            definition: 'Confirm receipt of information',
            example: 'Acknowledge go-around instruction',
          },
        ],
        grammar: [
          {
            title: 'Imperative Commands in Safety',
            explanation: 'Safety procedures use direct imperative language',
            examples: [
              'Go around immediately',
              'Climb to two thousand feet',
              'Maintain this heading',
              'Report your position',
            ],
          },
        ],
        exercises: [
          {
            id: 'ex-1',
            type: 'multiple-choice',
            question: 'If tower says "go around," what should pilot do immediately?',
            options: [
              { text: 'Continue landing', isCorrect: false },
              { text: 'Ask for clarification', isCorrect: false },
              { text: 'Abort landing and climb away', isCorrect: true, explanation: 'Go-around is immediate command' },
            ],
          },
        ],
        quiz: {
          questions: [
            {
              id: 'q-1',
              question: 'What is a runway incursion?',
              options: ['Aircraft landing without clearance', 'Unauthorized entry onto active runway', 'Delayed takeoff', 'Weather condition'],
              correctAnswer: 1,
              explanation: 'Runway incursion is unauthorized entry onto active runway by aircraft or vehicle',
            },
            {
              id: 'q-2',
              question: 'Who has authority to order go-around?',
              options: ['Pilot decision only', 'ATC tower only', 'Pilot or tower when safety requires', 'Flight crew vote'],
              correctAnswer: 2,
              explanation: 'Both pilot and tower can initiate go-around; pilot has emergency authority',
            },
            {
              id: 'q-3',
              question: 'What should pilot do if unsure runway is clear?',
              options: ['Proceed carefully', 'Request tower confirmation', 'Execute go-around', 'Land anyway'],
              correctAnswer: 1,
              explanation: 'When in doubt, pilot should request tower confirmation or go around',
            },
            {
              id: 'q-4',
              question: 'During go-around, what should pilot do?',
              options: ['Land immediately', 'Climb to assigned altitude and await instructions', 'Request new runway', 'Hold at current altitude'],
              correctAnswer: 1,
              explanation: 'During go-around, pilot climbs and follows tower instructions',
            },
            {
              id: 'q-5',
              question: 'How is runway conflict most commonly prevented?',
              options: ['Pilot vigilance only', 'Tower radar and clear communication', 'Aircraft anti-collision systems', 'Speed reduction'],
              correctAnswer: 1,
              explanation: 'Tower radar monitoring and clear ATC communication prevent most conflicts',
            },
          ],
        },
        flashcards: [
          {
            id: 'fc-1',
            front: 'Go-Around',
            back: 'Abort landing and climb away from runway',
            audioFront: '/audio/unit-3/lesson-3/term-goaround.wav',
            audioBack: '/audio/unit-3/lesson-3/definition-goaround.wav',
          },
        ],
        review: {
          keyPoints: [
            'Runway safety is top priority',
            'Obey all tower instructions immediately',
            'Execute go-around when instructed',
            'Maintain runway awareness at all times',
            'Report any runway concerns to tower',
            'Never assume runway is clear',
            'When in doubt, go around',
          ],
          commonMistakes: [
            'Hesitation in executing go-around',
            'Poor communication with tower',
            'Assuming runway is clear without confirmation',
            'Ignoring tower instructions',
            'Not maintaining separation from other aircraft',
            'Distraction during runway operations',
          ],
        },
      },
    ],
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
    lessons: [
      {
        id: 'lesson-4-1-initial-climb',
        unitId: 'unit-4-departure',
        title: 'Initial Climb and Departure Control',
        description: 'Learn communication during climb after takeoff',
        icon: '📈',
        icaoLevel: 4,
        category: 'cabin-crew',
        difficulty: 'intermediate',
        xpReward: 150,
        estimatedDurationMinutes: 30,
        locked: false,
        order: 1,
        objectives: [
          { id: 'obj-1', description: 'Contact departure control', type: 'speaking' },
          { id: 'obj-2', description: 'Report altitude and heading', type: 'speaking' },
          { id: 'obj-3', description: 'Follow climb instructions', type: 'listening' },
        ],
        scenario: {
          id: 'scenario-1',
          title: 'Initial Climb Communication',
          description: 'Contact departure control after takeoff',
          context: 'Aircraft climbing after takeoff from busy airport',
          audioSegments: [
            {
              id: 'audio-1',
              text: 'Departure, November Four Seven Three, airborne, passing one thousand feet, heading one eight zero',
              audioUrl: '/audio/unit-4/lesson-1/initial-climb.wav',
              durationSeconds: 7,
              speaker: 'pilot',
            },
            {
              id: 'audio-2',
              text: 'November Four Seven Three, departure, ident. Climb maintain three thousand feet',
              audioUrl: '/audio/unit-4/lesson-1/depart-response.wav',
              durationSeconds: 6,
              speaker: 'instructor',
            },
          ],
          vocabulary: [
            { word: 'departure', definition: 'ATC facility controlling aircraft after takeoff', pronunciation: 'dih-PAR-chur' },
            { word: 'airborne', definition: 'Aircraft in flight', pronunciation: 'AIR-born' },
          ],
        },
        theory: {
          title: 'Initial Climb and Departure Control',
          content: `
Post-takeoff communication transitions from tower to departure control.

Initial Climb Procedures:
1. Maintain takeoff heading initially
2. Contact departure when tower directs
3. Report altitude and heading
4. Receive assigned altitude
5. Proceed on departure route
6. Monitor radar vectors

Departure Control Responsibilities:
- Provide radar guidance
- Separate departing aircraft
- Issue altitude restrictions
- Assign headings for navigation
- Coordinate with other facilities
- Monitor radar return (ident)

Standard Climb Procedures:
- Continue climb to assigned altitude
- Follow departure routing
- Maintain assigned heading
- Report level-off at altitude
- Monitor fuel and systems
- Follow all radio instructions

Communication Timing:
- Report airborne status
- Request heading or altitude changes
- Report approach to assigned altitude
- Confirm altitude at level-off
          `,
          audioExplanation: {
            id: 'theory-audio-1',
            text: 'After takeoff, control transitions from tower to departure control. Departure uses radar to guide aircraft safely away from airport and other traffic. Clear, timely communication ensures safe separation.',
            audioUrl: '/audio/unit-4/lesson-1/climb-theory.wav',
            durationSeconds: 20,
            speaker: 'instructor',
          },
        },
        icaoPhraseoology: {
          category: 'Departure Control',
          phrases: [
            {
              situation: 'Reporting initial climb',
              phrase: 'Departure, airborne, passing one thousand feet',
              pronunciation: 'dih-PAR-chur, AIR-born, PASS-ing one THAUzund feet',
              meaning: 'Pilot reporting aircraft is flying and altitude',
              example: 'Departure, November Four Seven Three, airborne, passing one thousand',
            },
            {
              situation: 'Departure assigning altitude',
              phrase: 'Climb maintain three thousand',
              pronunciation: 'KLYM mayn-TAYN three THAUzund',
              meaning: 'Climb to altitude and maintain it',
              example: 'Climb maintain three thousand feet',
            },
            {
              situation: 'Pilot reporting level-off',
              phrase: 'Level at three thousand feet',
              pronunciation: 'LEV-ul at three THAUzund feet',
              meaning: 'Aircraft has reached assigned altitude',
              example: 'November Four Seven Three, level three thousand',
            },
            {
              situation: 'Departure issuing heading',
              phrase: 'Turn right heading two two zero',
              pronunciation: 'TURN right HED-ing two two zero',
              meaning: 'Change course to specific magnetic heading',
              example: 'Turn right heading two two zero, radar vectors',
            },
            {
              situation: 'Pilot acknowledging climb clearance',
              phrase: 'Climbing to three thousand, November Four Seven Three',
              pronunciation: 'KLYME-ing too three THAUzund',
              meaning: 'Pilot confirming climb instruction',
              example: 'Climbing to three thousand, heading two seven zero',
            },
            {
              situation: 'Request altitude change',
              phrase: 'Request climb to flight level one eight zero',
              pronunciation: 'rih-KWEST KLYM too FLYHT LEV-ul one eight zero',
              meaning: 'Pilot requesting higher altitude',
              example: 'Request climb to flight level one eight zero',
            },
            {
              situation: 'Radar identification',
              phrase: 'Ident',
              pronunciation: 'Y-dent',
              meaning: 'Pilot activates radar beacon to identify aircraft',
              example: 'Squawk ident to confirm radar target',
            },
            {
              situation: 'Reporting approach to altitude',
              phrase: 'Approaching two thousand eight hundred',
              pronunciation: 'uh-PROH-ching two THAUzund eight HUN-dred',
              meaning: 'Aircraft nearing assigned altitude',
              example: 'Approaching three thousand feet, will report level',
            },
          ],
        },
        vocabulary: [
          {
            word: 'departure control',
            pronunciation: 'dih-PAR-chur kun-TROHL',
            definition: 'ATC facility controlling aircraft after takeoff',
            example: 'Contact departure control on one-two-four-point-five',
          },
          {
            word: 'climb',
            pronunciation: 'KLYM',
            definition: 'Ascent to higher altitude',
            example: 'Begin climb to assigned altitude',
          },
          {
            word: 'maintain',
            pronunciation: 'mayn-TAYN',
            definition: 'Keep constant altitude or heading',
            example: 'Maintain flight level two-five-zero',
          },
          {
            word: 'heading',
            pronunciation: 'HED-ing',
            definition: 'Compass direction aircraft is flying',
            example: 'Maintain heading two seven zero',
          },
          {
            word: 'vector',
            pronunciation: 'VEK-tur',
            definition: 'Radar-guided heading toward destination',
            example: 'Radar vectors to approach',
          },
          {
            word: 'ident',
            pronunciation: 'Y-dent',
            definition: 'Radar beacon identification signal',
            example: 'Squawk ident on radar screen',
          },
          {
            word: 'flight level',
            pronunciation: 'FLYHT LEV-ul',
            definition: 'Altitude measured in hundreds of feet above 18,000',
            example: 'Climb to flight level two-five-zero',
          },
          {
            word: 'airborne',
            pronunciation: 'AIR-born',
            definition: 'Aircraft in flight',
            example: 'Aircraft airborne at zero-one-zero',
          },
          {
            word: 'passing',
            pronunciation: 'PAS-ing',
            definition: 'Moving through altitude',
            example: 'Passing two thousand feet',
          },
          {
            word: 'level',
            pronunciation: 'LEV-ul',
            definition: 'At assigned altitude',
            example: 'Level at three thousand feet',
          },
          {
            word: 'approach',
            pronunciation: 'uh-PROHCH',
            definition: 'Near specific altitude or location',
            example: 'Approaching assigned altitude',
          },
          {
            word: 'radar',
            pronunciation: 'RAY-dar',
            definition: 'Electronic system detecting aircraft',
            example: 'Departure radar shows clear separation',
          },
          {
            word: 'separation',
            pronunciation: 'sep-uh-RAY-shun',
            definition: 'Minimum distance between aircraft',
            example: 'Maintain radar separation from other traffic',
          },
          {
            word: 'routing',
            pronunciation: 'ROO-ting',
            definition: 'Assigned flight path',
            example: 'Follow departure routing',
          },
          {
            word: 'transition',
            pronunciation: 'tran-ZISH-un',
            definition: 'Change from one frequency to another',
            example: 'Transition from tower to departure',
          },
          {
            word: 'squawk',
            pronunciation: 'SKWAWK',
            definition: 'Transmit radar beacon code',
            example: 'Squawk two-four-seven-one',
          },
          {
            word: 'beacon code',
            pronunciation: 'BEE-kun KOHD',
            definition: 'Four-digit radar identification code',
            example: 'Aircraft beacon code is two-four-seven-one',
          },
          {
            word: 'altitude',
            pronunciation: 'AL-ti-tood',
            definition: 'Height above sea level',
            example: 'Maintain altitude three thousand feet',
          },
          {
            word: 'cruise',
            pronunciation: 'KROOZ',
            definition: 'Level flight at constant altitude',
            example: 'Transition to cruise at flight level two-seven-zero',
          },
          {
            word: 'expedite',
            pronunciation: 'EK-spi-dyt',
            definition: 'Increase speed of operation',
            example: 'Expedite climb to three thousand feet',
          },
        ],
        grammar: [
          {
            title: 'Altitude and Heading Reporting',
            explanation: 'Specific format for reporting aircraft position',
            examples: [
              { sentence: 'Passing one thousand feet, heading one eight zero' },
              { sentence: 'Level at flight level two-five-zero' },
              { sentence: 'Maintaining heading two seven zero, altitude three thousand' },
            ],
          },
        ],
        exercises: [],
        quiz: {
          questions: [
            {
              id: 'q-1',
              question: 'What is the correct response to "Climb maintain three thousand"?',
              options: ['Proceed to three thousand', 'Climb to three thousand and maintain that altitude', 'Request clarification', 'Descend to three thousand'],
              correctAnswer: 1,
              explanation: 'Maintain means hold that altitude once reached',
            },
            {
              id: 'q-2',
              question: 'When should pilot contact departure control?',
              options: ['At takeoff', 'When tower directs', 'At cruise altitude', 'Never'],
              correctAnswer: 1,
              explanation: 'Tower directs pilot to switch to departure frequency',
            },
            {
              id: 'q-3',
              question: 'What does "ident" mean?',
              options: ['Identify yourself', 'Activate radar beacon', 'Confirm altitude', 'Report position'],
              correctAnswer: 1,
              explanation: 'Ident activates distinctive radar beacon signal',
            },
            {
              id: 'q-4',
              question: 'What is a flight level?',
              options: ['Ground altitude', 'Altitude in hundreds of feet above 18,000', 'Assigned runway', 'Holding altitude'],
              correctAnswer: 1,
              explanation: 'Flight levels measure altitude in hundreds of feet above 18,000 feet',
            },
            {
              id: 'q-5',
              question: 'What should pilot report when approaching assigned altitude?',
              options: ['Nothing', 'Approaching assigned altitude', 'Current heading', 'Fuel remaining'],
              correctAnswer: 1,
              explanation: 'Always report when approaching altitude to confirm you will level off',
            },
          ],
        },
        flashcards: [],
        review: {
          keyPoints: [
            'Transition smoothly from tower to departure',
            'Report airborne status immediately',
            'Confirm all altitude and heading assignments',
            'Maintain precise altitude control',
            'Follow radar vectors for separation',
            'Report when approaching assigned altitude',
          ],
          commonMistakes: [
            'Failing to contact departure on time',
            'Incorrect altitude reporting',
            'Not following assigned headings',
            'Overflying assigned altitude',
            'Poor communication clarity',
          ],
        },
      },
      {
        id: 'lesson-4-2-cruise',
        unitId: 'unit-4-departure',
        title: 'Cruise Flight and En Route Communication',
        description: 'Learn cruise operations and level flight procedures',
        icon: '✈️',
        icaoLevel: 4,
        category: 'cabin-crew',
        difficulty: 'elementary',
        xpReward: 125,
        estimatedDurationMinutes: 25,
        locked: false,
        order: 2,
        objectives: [
          { id: 'obj-1', description: 'Manage cruise altitude', type: 'speaking' },
          { id: 'obj-2', description: 'Communicate with center', type: 'speaking' },
          { id: 'obj-3', description: 'Monitor systems during flight', type: 'listening' },
        ],
        scenario: {
          id: 'scenario-1',
          title: 'Cruise Flight Operations',
          description: 'Maintain cruise altitude and communicate with center',
          context: 'Aircraft at cruise altitude in busy airspace',
          audioSegments: [
            {
              id: 'audio-1',
              text: 'Center, November Four Seven Three, level flight level two-five-zero',
              audioUrl: '/audio/unit-4/lesson-2/cruise-report.wav',
              durationSeconds: 6,
              speaker: 'pilot',
            },
            {
              id: 'audio-2',
              text: 'November Four Seven Three, center, roger. Continue flight level two-five-zero',
              audioUrl: '/audio/unit-4/lesson-2/center-response.wav',
              durationSeconds: 5,
              speaker: 'instructor',
            },
          ],
          vocabulary: [
            { word: 'cruise', definition: 'Level flight at constant altitude', pronunciation: 'KROOZ' },
            { word: 'center', definition: 'ATC facility controlling en route airspace', pronunciation: 'SEN-tur' },
          ],
        },
        theory: {
          title: 'Cruise Flight Management',
          content: `
Cruise is the longest phase of flight requiring stable management.

Cruise Flight Characteristics:
1. Constant altitude and speed
2. Minimum fuel consumption
3. Stable weather monitoring
4. Regular system checks
5. Long-distance navigation
6. Traffic separation

En Route Center Communications:
- Contact center on assigned frequency
- Report level-off at altitude
- Acknowledge any altitude changes
- Report significant deviations
- Monitor frequency continuously
- Respond promptly to instructions

Cruise Procedures:
- Stabilize aircraft systems
- Monitor engine performance
- Check fuel consumption
- Verify navigation accuracy
- Monitor weather ahead
- Maintain assigned altitude precisely

Safety Checks During Cruise:
- Fuel quantity and consumption
- Engine parameters normal
- Aircraft systems functioning
- Navigation accuracy
- Weather forecast updates
- Traffic alerts and separation
          `,
          audioExplanation: {
            id: 'theory-audio-1',
            text: 'Cruise is the stable flight phase where aircraft maintains constant altitude. Pilots communicate periodically with center for traffic separation and navigation updates. System monitoring is routine but critical.',
            audioUrl: '/audio/unit-4/lesson-2/cruise-theory.wav',
            durationSeconds: 18,
            speaker: 'instructor',
          },
        },
        icaoPhraseoology: {
          category: 'Cruise Operations',
          phrases: [
            {
              situation: 'Reporting level at cruise',
              phrase: 'Level flight level two-five-zero',
              pronunciation: 'LEV-ul FLYHT LEV-ul two five zero',
              meaning: 'Aircraft has reached assigned cruise altitude',
              example: 'November Four Seven Three, level flight level two-five-zero',
            },
            {
              situation: 'Center acknowledging cruise',
              phrase: 'Roger, continue flight level two-five-zero',
              pronunciation: 'RAH-jer, kun-TIN-yoo FLYHT LEV-ul two five zero',
              meaning: 'Continue at assigned altitude',
              example: 'Roger, continue flight level two-five-zero',
            },
            {
              situation: 'Reporting cruise check complete',
              phrase: 'Cruise check complete, systems normal',
              pronunciation: 'KROOZ chek kum-PLEET, SIS-temz NOR-mul',
              meaning: 'Verification that all systems functioning',
              example: 'Cruise check complete, all systems normal',
            },
            {
              situation: 'Requesting altitude change',
              phrase: 'Request climb to flight level two-seven-zero',
              pronunciation: 'rih-KWEST KLYM too FLYHT LEV-ul two seven zero',
              meaning: 'Asking for higher cruising altitude',
              example: 'Request climb to flight level two-seven-zero for smoother ride',
            },
            {
              situation: 'Reporting fuel status',
              phrase: 'Fuel remaining four thousand pounds',
              pronunciation: 'FYOOL rih-MAYN-ing for THAUzund POUNDZ',
              meaning: 'Announcing fuel quantity',
              example: 'Fuel remaining four thousand pounds',
            },
            {
              situation: 'Requesting weather update',
              phrase: 'Request weather for destination',
              pronunciation: 'rih-KWEST WED-ur for des-ti-NAY-shun',
              meaning: 'Ask for updated forecast',
              example: 'Request weather update for destination',
            },
            {
              situation: 'Reporting routing compliance',
              phrase: 'Maintaining assigned routing',
              pronunciation: 'mayn-TAYN-ing uh-SYND ROO-ting',
              meaning: 'Following navigation track',
              example: 'Maintaining assigned routing, on time',
            },
            {
              situation: 'Reporting traffic sighting',
              phrase: 'Traffic in sight',
              pronunciation: 'TRAF-ik in SYT',
              meaning: 'Pilot has visually located another aircraft',
              example: 'Traffic in sight, at two o\'clock',
            },
          ],
        },
        vocabulary: [
          {
            word: 'cruise',
            pronunciation: 'KROOZ',
            definition: 'Level flight at constant altitude and speed',
            example: 'Aircraft in cruise at flight level two-five-zero',
          },
          {
            word: 'center',
            pronunciation: 'SEN-tur',
            definition: 'ATC facility controlling en route airspace',
            example: 'Contact center one-two-eight-point-four',
          },
          {
            word: 'en route',
            pronunciation: 'on ROOT',
            definition: 'During flight between departure and arrival',
            example: 'En route weather is favorable',
          },
          {
            word: 'level off',
            pronunciation: 'LEV-ul OFF',
            definition: 'Transition from climb to level flight',
            example: 'Level off at assigned altitude',
          },
          {
            word: 'stability',
            pronunciation: 'stuh-BIL-i-tee',
            definition: 'Aircraft maintaining constant flight path',
            example: 'Excellent stability at cruise altitude',
          },
          {
            word: 'systems check',
            pronunciation: 'SIS-temz CHECK',
            definition: 'Verification of aircraft equipment',
            example: 'Perform cruise systems check',
          },
          {
            word: 'fuel consumption',
            pronunciation: 'FYOOL kun-SUMP-shun',
            definition: 'Rate of fuel use during flight',
            example: 'Fuel consumption within limits',
          },
          {
            word: 'navigation',
            pronunciation: 'nav-i-GAY-shun',
            definition: 'Determining and following flight path',
            example: 'Navigation accurate to assigned routing',
          },
          {
            word: 'descent',
            pronunciation: 'dih-SENT',
            definition: 'Downward altitude change',
            example: 'Begin descent to lower altitude',
          },
          {
            word: 'holding',
            pronunciation: 'HOLD-ing',
            definition: 'Circular flight pattern while waiting',
            example: 'Enter holding pattern if delayed',
          },
          {
            word: 'waypoint',
            pronunciation: 'WAY-point',
            definition: 'Navigation reference point',
            example: 'Pass through waypoint on schedule',
          },
          {
            word: 'routing',
            pronunciation: 'ROO-ting',
            definition: 'Designated flight path',
            example: 'Follow assigned routing',
          },
          {
            word: 'forecast',
            pronunciation: 'FOR-cast',
            definition: 'Weather prediction',
            example: 'Forecast shows clear skies ahead',
          },
          {
            word: 'deviation',
            pronunciation: 'dee-vee-AY-shun',
            definition: 'Unintended departure from assigned path',
            example: 'Request deviation for weather avoidance',
          },
          {
            word: 'expedite',
            pronunciation: 'EK-spi-dyt',
            definition: 'Increase speed or urgency',
            example: 'Expedite descent to landing altitude',
          },
          {
            word: 'holding altitude',
            pronunciation: 'HOLD-ing AL-ti-tood',
            definition: 'Assigned altitude while waiting',
            example: 'Maintain holding altitude pending clearance',
          },
          {
            word: 'transition',
            pronunciation: 'tran-ZISH-un',
            definition: 'Change between flight phases',
            example: 'Transition from climb to cruise',
          },
          {
            word: 'descent planning',
            pronunciation: 'dih-SENT PLAN-ing',
            definition: 'Calculating descent profile',
            example: 'Begin descent planning for approach',
          },
          {
            word: 'traffic separation',
            pronunciation: 'TRAF-ik sep-uh-RAY-shun',
            definition: 'Minimum distance between aircraft',
            example: 'Center ensures traffic separation',
          },
          {
            word: 'traffic alert',
            pronunciation: 'TRAF-ik uh-LERT',
            definition: 'Warning of nearby aircraft',
            example: 'Traffic alert at two o\'clock',
          },
        ],
        grammar: [],
        exercises: [],
        quiz: {
          questions: [
            {
              id: 'q-1',
              question: 'What is the purpose of a cruise check?',
              options: ['Reduce altitude', 'Verify systems functioning normally', 'Increase speed', 'Prepare for landing'],
              correctAnswer: 1,
              explanation: 'Cruise check confirms all systems operating within limits',
            },
            {
              id: 'q-2',
              question: 'Which facility controls en route airspace?',
              options: ['Tower', 'Approach control', 'Center', 'Ground'],
              correctAnswer: 2,
              explanation: 'Center provides en route navigation and separation',
            },
            {
              id: 'q-3',
              question: 'When should pilot report level-off at cruise?',
              options: ['Never', 'Immediately upon reaching altitude', 'Only if requested', 'After 30 minutes'],
              correctAnswer: 1,
              explanation: 'Always report when reaching assigned cruise altitude',
            },
            {
              id: 'q-4',
              question: 'What should pilot do if unable to maintain assigned altitude?',
              options: ['Change altitude without notification', 'Request deviation from center', 'Ignore the problem', 'Turn back'],
              correctAnswer: 1,
              explanation: 'Always request clearance before deviating from assigned altitude',
            },
            {
              id: 'q-5',
              question: 'What does "traffic in sight" mean?',
              options: ['Radar shows traffic', 'Pilot visually sees another aircraft', 'Center reports traffic', 'Traffic light ahead'],
              correctAnswer: 1,
              explanation: 'Traffic in sight means pilot has visually located the other aircraft',
            },
          ],
        },
        flashcards: [],
        review: {
          keyPoints: [
            'Maintain precise assigned altitude',
            'Monitor fuel and systems continuously',
            'Respond promptly to center instructions',
            'Report significant changes immediately',
            'Plan descent well in advance',
            'Stay alert for traffic',
          ],
          commonMistakes: [
            'Altitude excursions during cruise',
            'Poor fuel planning',
            'Missing center transmissions',
            'Inadequate descent planning',
            'Distracted flying',
          ],
        },
      },
      {
        id: 'lesson-4-3-weather-reports',
        unitId: 'unit-4-departure',
        title: 'Weather Reports and Turbulence Communication',
        description: 'Learn to interpret weather and report turbulence',
        icon: '⛅',
        icaoLevel: 5,
        category: 'cabin-crew',
        difficulty: 'intermediate',
        xpReward: 150,
        estimatedDurationMinutes: 30,
        locked: false,
        order: 3,
        objectives: [
          { id: 'obj-1', description: 'Understand weather reports', type: 'listening' },
          { id: 'obj-2', description: 'Report turbulence accurately', type: 'speaking' },
          { id: 'obj-3', description: 'Request weather avoidance', type: 'speaking' },
        ],
        scenario: {
          id: 'scenario-1',
          title: 'Turbulence Encounter and Reporting',
          description: 'Encounter and report moderate turbulence',
          context: 'Aircraft in cruise encountering weather',
          audioSegments: [
            {
              id: 'audio-1',
              text: 'Center, November Four Seven Three, encountering moderate turbulence at flight level two-five-zero, request altitude change',
              audioUrl: '/audio/unit-4/lesson-3/turbulence-report.wav',
              durationSeconds: 8,
              speaker: 'pilot',
            },
            {
              id: 'audio-2',
              text: 'November Four Seven Three, roger. Climb to flight level two-seven-zero for smoother ride',
              audioUrl: '/audio/unit-4/lesson-3/center-weather.wav',
              durationSeconds: 6,
              speaker: 'instructor',
            },
          ],
          vocabulary: [
            { word: 'turbulence', definition: 'Rough air causing aircraft movement', pronunciation: 'TER-byuh-lens' },
          ],
        },
        theory: {
          title: 'Weather Reporting and Turbulence Communication',
          content: `
Weather information is critical for flight safety and comfort.

Turbulence Intensity Levels:
1. Light - Momentary bumps, no difficulty controlling aircraft
2. Moderate - Definite bumps, control maintained but annoying
3. Severe - Strong, abrupt movements, control difficult
4. Extreme - Aircraft out of control, structural damage risk

Weather Reports (METARs):
- Wind direction and speed
- Visibility distance
- Precipitation type
- Cloud height and coverage
- Temperature and dew point
- Altimeter setting
- Remarks section

Significant Weather Reports (SIGMETs):
- Thunderstorm activity
- Hail or severe icing
- Turbulence areas
- Wind shear information
- Volcanic ash
- Sand or dust storms

Turbulence Reporting:
- Report location and altitude
- Describe intensity
- Note duration
- Mention aircraft response
- Suggest alternative routing

Safety During Turbulence:
- Slow aircraft speed
- Reduce altitude if safe
- Advise cabin crew
- Seat belt sign on
- Monitor weather radar
          `,
          audioExplanation: {
            id: 'theory-audio-1',
            text: 'Weather information helps pilots avoid hazardous conditions and maintain passenger comfort. Accurate turbulence reports help future flights anticipate conditions. Always communicate weather encounters to ATC.',
            audioUrl: '/audio/unit-4/lesson-3/weather-theory.wav',
            durationSeconds: 21,
            speaker: 'instructor',
          },
        },
        icaoPhraseoology: {
          category: 'Weather Communication',
          phrases: [
            {
              situation: 'Reporting moderate turbulence',
              phrase: 'Encountering moderate turbulence',
              pronunciation: 'en-KAUN-tur-ing MOD-uh-rit TER-byuh-lens',
              meaning: 'Aircraft experiencing definite bumps',
              example: 'Encountering moderate turbulence at flight level two-five-zero',
            },
            {
              situation: 'Reporting severe turbulence',
              phrase: 'Severe turbulence, unable to maintain altitude',
              pronunciation: 'suh-VIR TER-byuh-lens, un-AY-bul too mayn-TAYN AL-ti-tood',
              meaning: 'Dangerous air conditions affecting control',
              example: 'Severe turbulence, unable to control altitude',
            },
            {
              situation: 'Requesting altitude change for weather',
              phrase: 'Request climb for smoother ride',
              pronunciation: 'rih-KWEST KLYM for SMOO-ther RYD',
              meaning: 'Asking for higher altitude',
              example: 'Request climb to flight level two-seven-zero for smoother conditions',
            },
            {
              situation: 'Requesting weather information',
              phrase: 'Request weather update for destination',
              pronunciation: 'rih-KWEST WED-ur UP-dayt for des-ti-NAY-shun',
              meaning: 'Ask for current forecast',
              example: 'Request latest weather at destination',
            },
            {
              situation: 'Reporting thunderstorm sighting',
              phrase: 'Thunderstorm activity ahead',
              pronunciation: 'THUN-der-storm AK-tiv-i-tee uh-HED',
              meaning: 'Pilot observes storm development',
              example: 'Thunderstorm activity fifteen miles ahead',
            },
            {
              situation: 'Reporting wind shear',
              phrase: 'Windshear alert',
              pronunciation: 'WIND-shair uh-LERT',
              meaning: 'Sudden wind direction or speed change',
              example: 'Windshear alert, wind change detected',
            },
            {
              situation: 'Requesting deviation for weather',
              phrase: 'Request deviation for weather avoidance',
              pronunciation: 'rih-KWEST dee-vee-AY-shun for WED-ur uh-VOID-ens',
              meaning: 'Asking to leave assigned routing',
              example: 'Request thirty degree deviation left for storm avoidance',
            },
            {
              situation: 'Reporting icing encounter',
              phrase: 'Moderate icing, request descent',
              pronunciation: 'MOD-uh-rit Y-sing, rih-KWEST dih-SENT',
              meaning: 'Aircraft accumulating ice on surfaces',
              example: 'Moderate icing at flight level two-five-zero, request descent',
            },
          ],
        },
        vocabulary: [
          {
            word: 'turbulence',
            pronunciation: 'TER-byuh-lens',
            definition: 'Rough air causing aircraft movement',
            example: 'Moderate turbulence encountered',
          },
          {
            word: 'thunderstorm',
            pronunciation: 'THUN-der-storm',
            definition: 'Intense storm system with lightning',
            example: 'Avoid thunderstorm activity',
          },
          {
            word: 'METAR',
            pronunciation: 'MEH-tar',
            definition: 'Routine weather report from airport',
            example: 'METAR shows visibility reduced to one mile',
          },
          {
            word: 'SIGMET',
            pronunciation: 'SIG-met',
            definition: 'Significant weather alert',
            example: 'SIGMET issued for moderate turbulence',
          },
          {
            word: 'icing',
            pronunciation: 'Y-sing',
            definition: 'Ice accumulation on aircraft',
            example: 'Moderate icing reported in clouds',
          },
          {
            word: 'visibility',
            pronunciation: 'viz-i-BIL-i-tee',
            definition: 'How far pilots can see',
            example: 'Visibility reduced to one thousand meters',
          },
          {
            word: 'ceiling',
            pronunciation: 'SEEL-ing',
            definition: 'Lowest cloud layer altitude',
            example: 'Ceiling one thousand feet overcast',
          },
          {
            word: 'wind shear',
            pronunciation: 'WIND SHAIR',
            definition: 'Sudden wind speed or direction change',
            example: 'Wind shear alert on approach',
          },
          {
            word: 'convection',
            pronunciation: 'kun-VEK-shun',
            definition: 'Rising warm air creating updrafts',
            example: 'Strong convection causing turbulence',
          },
          {
            word: 'moisture',
            pronunciation: 'MOYS-chur',
            definition: 'Water vapor in atmosphere',
            example: 'High moisture content causing clouds',
          },
          {
            word: 'pressure',
            pronunciation: 'PRESH-ur',
            definition: 'Atmospheric force',
            example: 'Low pressure system approaching',
          },
          {
            word: 'temperature',
            pronunciation: 'TEM-pur-uh-chur',
            definition: 'Heat measurement',
            example: 'Temperature minus forty-five degrees',
          },
          {
            word: 'dew point',
            pronunciation: 'DOO POINT',
            definition: 'Temperature at which moisture condenses',
            example: 'Dew point near temperature',
          },
          {
            word: 'altimeter setting',
            pronunciation: 'al-TIM-uh-tur SET-ing',
            definition: 'Barometric pressure adjustment',
            example: 'Altimeter setting two-nine-nine-two',
          },
          {
            word: 'precipitation',
            pronunciation: 'prih-sip-i-TAY-shun',
            definition: 'Rainfall, snow, or hail',
            example: 'Heavy precipitation reported',
          },
          {
            word: 'virga',
            pronunciation: 'VER-guh',
            definition: 'Precipitation that does not reach ground',
            example: 'Virga observed from clouds',
          },
          {
            word: 'microburst',
            pronunciation: 'MY-kroh-burst',
            definition: 'Powerful downdraft from thunderstorm',
            example: 'Microburst alert at destination',
          },
          {
            word: 'hazardous weather',
            pronunciation: 'HAZ-ard-us WED-ur',
            definition: 'Dangerous atmospheric conditions',
            example: 'Hazardous weather affecting airport',
          },
          {
            word: 'deviation',
            pronunciation: 'dee-vee-AY-shun',
            definition: 'Departure from assigned routing',
            example: 'Request deviation for weather',
          },
          {
            word: 'avoidance',
            pronunciation: 'uh-VOID-ens',
            definition: 'Steering clear of hazard',
            example: 'Storm avoidance routing approved',
          },
        ],
        grammar: [],
        exercises: [],
        quiz: {
          questions: [
            {
              id: 'q-1',
              question: 'How should moderate turbulence be described?',
              options: ['Smooth ride', 'Definite bumps but control maintained', 'Severe movements', 'No sensation'],
              correctAnswer: 1,
              explanation: 'Moderate turbulence creates noticeable bumps but aircraft remains controllable',
            },
            {
              id: 'q-2',
              question: 'What does METAR provide?',
              options: ['Wind direction only', 'Routine weather report from airport', 'Flight plan information', 'Aircraft position'],
              correctAnswer: 1,
              explanation: 'METAR is routine weather observation from airport with wind, visibility, clouds',
            },
            {
              id: 'q-3',
              question: 'What should pilot do when encountering moderate turbulence?',
              options: ['Continue climb', 'Request altitude change or slower speed', 'Descend immediately', 'Increase speed'],
              correctAnswer: 1,
              explanation: 'Request higher altitude or reduce speed to find smoother air',
            },
            {
              id: 'q-4',
              question: 'What is wind shear?',
              options: ['Steady wind', 'Wind direction only', 'Sudden wind speed or direction change', 'Wind at cloud top'],
              correctAnswer: 2,
              explanation: 'Wind shear is abrupt change in wind that affects aircraft control',
            },
            {
              id: 'q-5',
              question: 'When should pilot report turbulence to ATC?',
              options: ['Never', 'Only if severe', 'Immediately when encountered', 'After landing'],
              correctAnswer: 2,
              explanation: 'Report turbulence promptly to help other aircraft anticipate conditions',
            },
          ],
        },
        flashcards: [],
        review: {
          keyPoints: [
            'Request altitude changes for smoother air',
            'Reduce speed when in turbulence',
            'Report turbulence intensity accurately',
            'Monitor weather radar continuously',
            'Obtain current weather before descent',
            'Advise cabin crew of weather encounters',
          ],
          commonMistakes: [
            'Ignoring turbulence reports',
            'Inadequate weather monitoring',
            'Poor turbulence descriptions',
            'Not requesting altitude changes',
            'Flying through severe weather',
          ],
        },
      },
    ],
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
    lessons: [
      {
        id: 'lesson-5-1-system-failures',
        unitId: 'unit-5-enroute',
        title: 'En Route System Failures and Issues',
        description: 'Learn to report and manage in-flight system problems',
        icon: '⚠️',
        icaoLevel: 5,
        category: 'cabin-crew',
        difficulty: 'intermediate',
        xpReward: 150,
        estimatedDurationMinutes: 30,
        locked: false,
        order: 1,
        objectives: [
          { id: 'obj-1', description: 'Identify system failures', type: 'listening' },
          { id: 'obj-2', description: 'Report failures clearly', type: 'speaking' },
          { id: 'obj-3', description: 'Request assistance appropriately', type: 'speaking' },
        ],
        scenario: {
          id: 'scenario-1',
          title: 'Engine System Alert En Route',
          description: 'Report engine parameter problem during cruise',
          context: 'Aircraft experiencing non-emergency system problem',
          audioSegments: [
            {
              id: 'audio-1',
              text: 'Center, November Four Seven Three has a problem. Right engine oil temperature trending high',
              audioUrl: '/audio/unit-5/lesson-1/engine-problem.wav',
              durationSeconds: 8,
              speaker: 'pilot',
            },
            {
              id: 'audio-2',
              text: 'November Four Seven Three, roger. Descend to flight level two-zero-zero for cooling',
              audioUrl: '/audio/unit-5/lesson-1/center-response.wav',
              durationSeconds: 6,
              speaker: 'instructor',
            },
          ],
          vocabulary: [
            { word: 'system failure', definition: 'Equipment stops working', pronunciation: 'SIS-tem FAYL-yur' },
          ],
        },
        theory: {
          title: 'En Route System Failures and Operational Issues',
          content: `
System failures during cruise require careful management and communication.

Types of En Route Issues:
1. Engine problems - Temperature, pressure anomalies
2. Hydraulic failures - Loss of power system
3. Electrical problems - Generator or battery issues
4. Pressurization failure - Cabin pressure loss
5. Navigation problems - Equipment malfunction
6. Flight control degradation - Partial system loss

Failure Report Structure:
1. Aircraft identification
2. Nature of problem
3. Current status of aircraft
4. Assistance required
5. Alternate airport consideration
6. Crew intention

Crew Response Procedures:
- Verify actual failure (not indication error)
- Check checklists for emergency procedures
- Reduce altitude if needed
- Monitor situation closely
- Keep ATC informed of progress
- Plan diversion if necessary

Communication During Failure:
- Stay calm and professional
- Provide clear information
- Describe specific parameters
- Indicate safety of flight
- Request specific assistance
- Confirm ATC instructions
          `,
          audioExplanation: {
            id: 'theory-audio-1',
            text: 'En route system failures are usually manageable with proper checklist procedures. Communication with ATC is critical to receive landing clearance and appropriate routing to safest airport.',
            audioUrl: '/audio/unit-5/lesson-1/failure-theory.wav',
            durationSeconds: 20,
            speaker: 'instructor',
          },
        },
        icaoPhraseoology: {
          category: 'System Failures',
          phrases: [
            {
              situation: 'Reporting non-emergency problem',
              phrase: 'Has a problem',
              pronunciation: 'haz uh PRAH-blem',
              meaning: 'Aircraft has difficulty but is not in danger',
              example: 'November Four Seven Three has a problem with hydraulic pressure',
            },
            {
              situation: 'Requesting descent for cooling',
              phrase: 'Request descent to cooler air',
              pronunciation: 'rih-KWEST dih-SENT too KOO-ler AIR',
              meaning: 'Need lower altitude for system cooling',
              example: 'Request descent to flight level two-zero-zero for engine cooling',
            },
            {
              situation: 'Reporting system status',
              phrase: 'Engine parameters within limits',
              pronunciation: 'EN-jin puh-RAM-uh-ters with-IN LIM-its',
              meaning: 'Systems functioning normally despite alert',
              example: 'Right engine parameters now within normal limits',
            },
            {
              situation: 'Requesting diversion to alternate',
              phrase: 'Request diversion to alternate airport',
              pronunciation: 'rih-KWEST dy-VER-zhun too AL-tur-nit AIR-port',
              meaning: 'Need to land at different airport',
              example: 'Request diversion to nearest suitable airport',
            },
            {
              situation: 'Declaring intention to continue',
              phrase: 'Can continue to destination',
              pronunciation: 'kan kun-TIN-yoo too des-ti-NAY-shun',
              meaning: 'Aircraft safe to reach planned destination',
              example: 'Problem resolved, can continue to destination',
            },
            {
              situation: 'Reporting worsening situation',
              phrase: 'Situation deteriorating',
              pronunciation: 'sit-choo-AY-shun dih-TER-ee-uh-ray-ting',
              meaning: 'Problem is becoming worse',
              example: 'Engine temperature rising, situation deteriorating',
            },
            {
              situation: 'Requesting priority handling',
              phrase: 'Request priority handling',
              pronunciation: 'rih-KWEST PRI-or-i-tee HAN-dul-ing',
              meaning: 'Need special expedited treatment',
              example: 'Request priority landing at nearest airport',
            },
            {
              situation: 'Reporting system recovery',
              phrase: 'System status returned to normal',
              pronunciation: 'SIS-tem STAY-tus rih-TURND too NOR-mul',
              meaning: 'Problem resolved itself',
              example: 'Engine temperature normal, problem resolved',
            },
          ],
        },
        vocabulary: [
          {
            word: 'system failure',
            pronunciation: 'SIS-tem FAYL-yur',
            definition: 'Equipment or system stops functioning',
            example: 'Hydraulic system failure requires immediate descent',
          },
          {
            word: 'malfunction',
            pronunciation: 'mal-FUNK-shun',
            definition: 'Equipment not operating correctly',
            example: 'Engine malfunction reported',
          },
          {
            word: 'anomaly',
            pronunciation: 'uh-NOM-uh-lee',
            definition: 'Unusual or abnormal condition',
            example: 'Engine parameter anomaly detected',
          },
          {
            word: 'deterioration',
            pronunciation: 'dih-TER-ee-uh-ray-shun',
            definition: 'Gradual worsening of condition',
            example: 'Gradual deterioration of engine performance',
          },
          {
            word: 'parameter',
            pronunciation: 'puh-RAM-uh-tur',
            definition: 'Measurable characteristic or value',
            example: 'All engine parameters normal',
          },
          {
            word: 'indication',
            pronunciation: 'in-di-KAY-shun',
            definition: 'Instrument showing condition',
            example: 'Engine temperature indication high',
          },
          {
            word: 'hydraulic',
            pronunciation: 'hy-DRAW-lik',
            definition: 'System using pressurized fluid',
            example: 'Hydraulic pressure loss indicated',
          },
          {
            word: 'electrical',
            pronunciation: 'ih-LEK-tri-kul',
            definition: 'System using electricity',
            example: 'Electrical system degraded',
          },
          {
            word: 'pressurization',
            pronunciation: 'PRESH-ur-i-ZAY-shun',
            definition: 'Maintaining cabin air pressure',
            example: 'Cabin pressurization system failure',
          },
          {
            word: 'generator',
            pronunciation: 'JEN-uh-ray-tur',
            definition: 'Device producing electrical power',
            example: 'Left generator failure',
          },
          {
            word: 'checklist',
            pronunciation: 'CHECK-list',
            definition: 'Procedure verification list',
            example: 'Execute emergency checklist for engine failure',
          },
          {
            word: 'diversion',
            pronunciation: 'dy-VER-zhun',
            definition: 'Change to alternate destination',
            example: 'Diversion to nearest airport required',
          },
          {
            word: 'alternate airport',
            pronunciation: 'AWL-tur-nit AIR-port',
            definition: 'Backup landing destination',
            example: 'Divert to alternate airport for repair',
          },
          {
            word: 'priority',
            pronunciation: 'pry-OR-i-tee',
            definition: 'Precedence in handling',
            example: 'Request priority approach clearance',
          },
          {
            word: 'descent',
            pronunciation: 'dih-SENT',
            definition: 'Downward altitude change',
            example: 'Descend for engine cooling',
          },
          {
            word: 'emergency equipment',
            pronunciation: 'ee-MER-jen-see i-KWIP-ment',
            definition: 'Safety devices for crisis',
            example: 'Emergency equipment standing by',
          },
          {
            word: 'crew briefing',
            pronunciation: 'KROO BRIEF-ing',
            definition: 'Flight team information meeting',
            example: 'Conduct crew briefing before diversion',
          },
          {
            word: 'stabilize',
            pronunciation: 'STAY-buh-lyz',
            definition: 'Return to stable condition',
            example: 'Engine parameters stabilized',
          },
          {
            word: 'recovery',
            pronunciation: 'rih-KUV-uh-ree',
            definition: 'Return to normal operation',
            example: 'System recovery initiated',
          },
          {
            word: 'redundancy',
            pronunciation: 'rih-DUN-den-see',
            definition: 'Backup system for safety',
            example: 'Hydraulic system has redundant pump',
          },
        ],
        grammar: [],
        exercises: [],
        quiz: {
          questions: [
            {
              id: 'q-1',
              question: 'How should non-emergency system failure be reported?',
              options: ['"Mayday"', '"Pan, Pan, Pan"', '"Has a problem"', 'Not reported'],
              correctAnswer: 2,
              explanation: '"Has a problem" indicates aircraft is safe but has a difficulty',
            },
            {
              id: 'q-2',
              question: 'What should be included in system failure report?',
              options: ['Speculation about cause', 'Specific parameters and current status', 'Complaint about aircraft', 'Personal opinions'],
              correctAnswer: 1,
              explanation: 'Report specific parameter values and aircraft status',
            },
            {
              id: 'q-3',
              question: 'When should pilot request diversion?',
              options: ['Never', 'If safety questionable or repair needed', 'Only for emergencies', 'Only if destination weather bad'],
              correctAnswer: 1,
              explanation: 'Request diversion if aircraft safety or reaching destination is compromised',
            },
            {
              id: 'q-4',
              question: 'What is an alternate airport?',
              options: ['Any airport', 'Backup destination for emergency landing', 'Training facility', 'Maintenance base'],
              correctAnswer: 1,
              explanation: 'Alternate airport is backup landing destination selected pre-flight',
            },
            {
              id: 'q-5',
              question: 'What should crew do first when system failure occurs?',
              options: ['Declare emergency', 'Execute appropriate checklist', 'Descend immediately', 'Turn back'],
              correctAnswer: 1,
              explanation: 'Follow checklist procedures to verify failure and manage situation',
            },
          ],
        },
        flashcards: [],
        review: {
          keyPoints: [
            'Verify actual failure vs. indication error',
            'Follow checklist procedures immediately',
            'Communicate clearly with ATC',
            'Request descent or diversion as needed',
            'Monitor condition continuously',
            'Prepare for emergency if situation worsens',
          ],
          commonMistakes: [
            'Delaying problem reporting',
            'Vague system descriptions',
            'Not following checklists',
            'Ignoring worsening conditions',
            'Poor ATC communication',
          ],
        },
      },
      {
        id: 'lesson-5-2-medical-emergency',
        unitId: 'unit-5-enroute',
        title: 'Passenger Medical Emergencies',
        description: 'Learn to respond to in-flight medical situations',
        icon: '🏥',
        icaoLevel: 5,
        category: 'cabin-crew',
        difficulty: 'intermediate',
        xpReward: 150,
        estimatedDurationMinutes: 35,
        locked: false,
        order: 2,
        objectives: [
          { id: 'obj-1', description: 'Recognize medical emergencies', type: 'listening' },
          { id: 'obj-2', description: 'Communicate medical needs', type: 'speaking' },
          { id: 'obj-3', description: 'Coordinate emergency response', type: 'speaking' },
        ],
        scenario: {
          id: 'scenario-1',
          title: 'Passenger Chest Pain Report',
          description: 'Report passenger medical emergency to captain',
          context: 'Passenger experiencing chest discomfort during cruise',
          audioSegments: [
            {
              id: 'audio-1',
              text: 'Captain, we have a medical emergency. Passenger in seat 12A reporting chest pain and difficulty breathing.',
              audioUrl: '/audio/unit-5/lesson-2/medical-report.wav',
              durationSeconds: 7,
              speaker: 'crew',
            },
            {
              id: 'audio-2',
              text: 'Understood. Prepare medical kit and defibrillator. I will request priority descent and diversion.',
              audioUrl: '/audio/unit-5/lesson-2/captain-response.wav',
              durationSeconds: 6,
              speaker: 'pilot',
            },
          ],
          vocabulary: [
            { word: 'medical emergency', definition: 'Health crisis requiring treatment', pronunciation: 'MED-i-kul ee-MER-jen-see' },
          ],
        },
        theory: {
          title: 'In-Flight Medical Emergency Response',
          content: `
Medical emergencies require rapid assessment and coordination.

Common Medical Emergencies:
1. Chest pain or heart problems
2. Respiratory difficulty
3. Unconsciousness or seizures
4. Severe allergic reactions
5. Severe injuries
6. Diabetic emergencies
7. Stroke symptoms
8. Severe decompression sickness

Crew Response Steps:
1. Recognize symptoms
2. Alert captain immediately
3. Retrieve medical kit
4. Position patient appropriately
5. Provide oxygen if available
6. Monitor vital signs
7. Contact medical advisory service
8. Prepare for diversion if needed

Captain's Response:
- Request priority descent
- Divert to nearest suitable airport
- Request emergency services dispatch
- Maintain professional communication
- Land safely at designated airport
- Coordinate with ground medical team

Medical Kit Contents:
- Oxygen system
- Defibrillator (AED)
- First aid supplies
- Medications
- Gloves and masks
- Trauma equipment

Ground Support:
- Medical advisory services available
- Ground ambulance response
- Hospital coordination
- Incident documentation
          `,
          audioExplanation: {
            id: 'theory-audio-1',
            text: 'Medical emergencies require quick recognition and communication. Cabin crew must immediately alert captain, who will divert to nearest airport. Professional, calm response helps both patient and flight safety.',
            audioUrl: '/audio/unit-5/lesson-2/medical-theory.wav',
            durationSeconds: 22,
            speaker: 'instructor',
          },
        },
        icaoPhraseoology: {
          category: 'Medical Emergencies',
          phrases: [
            {
              situation: 'Reporting medical emergency to captain',
              phrase: 'We have a medical emergency',
              pronunciation: 'wee hav uh MED-i-kul ee-MER-jen-see',
              meaning: 'Passenger health crisis requiring immediate attention',
              example: 'Captain, we have a medical emergency in the cabin',
            },
            {
              situation: 'Describing patient condition',
              phrase: 'Passenger reporting chest pain',
              pronunciation: 'PAY-sen-jer rih-PORT-ing CHEST PAYN',
              meaning: 'Patient experiencing heart-related symptoms',
              example: 'Passenger in seat 12A reporting chest pain and shortness of breath',
            },
            {
              situation: 'Captain requesting medical diversion',
              phrase: 'Declare medical emergency, request priority descent',
              pronunciation: 'dih-KLAIR MED-i-kul ee-MER-jen-see',
              meaning: 'Announce emergency situation to ATC',
              example: 'Center, declare medical emergency, request immediate descent',
            },
            {
              situation: 'Requesting medical advisory service',
              phrase: 'Request medical advisory contact',
              pronunciation: 'rih-KWEST MED-i-kul AD-vy-sor-ee KON-takt',
              meaning: 'Ask for doctor consultation by radio',
              example: 'Request connection to medical advisory service',
            },
            {
              situation: 'Reporting patient response to treatment',
              phrase: 'Patient condition stabilized',
              pronunciation: 'PAY-shent kun-DISH-un STAY-buh-lyzd',
              meaning: 'Patient now in stable condition',
              example: 'Patient condition improved with oxygen',
            },
            {
              situation: 'Requesting ambulance dispatch',
              phrase: 'Request emergency ambulance standing by',
              pronunciation: 'rih-KWEST ee-MER-jen-see AM-byuh-lens',
              meaning: 'Ask ground to prepare paramedics',
              example: 'Request ambulance standing by at destination',
            },
            {
              situation: 'Coordinating with medical services',
              phrase: 'Medical emergency, patient unconscious',
              pronunciation: 'MED-i-kul ee-MER-jen-see, PAY-shent un-KON-shus',
              meaning: 'Report critical patient status',
              example: 'Medical emergency, patient unconscious, CPR in progress',
            },
            {
              situation: 'Briefing crew on response',
              phrase: 'Prepare defibrillator and oxygen',
              pronunciation: 'prih-PAIR dih-FIB-ruh-lay-tur and OK-si-jen',
              meaning: 'Instruct crew to ready medical equipment',
              example: 'Prepare AED and oxygen for immediate use',
            },
          ],
        },
        vocabulary: [
          {
            word: 'medical emergency',
            pronunciation: 'MED-i-kul ee-MER-jen-see',
            definition: 'Health crisis requiring immediate treatment',
            example: 'Medical emergency declared, aircraft diverting',
          },
          {
            word: 'chest pain',
            pronunciation: 'CHEST PAYN',
            definition: 'Discomfort in chest area',
            example: 'Patient reporting severe chest pain',
          },
          {
            word: 'shortness of breath',
            pronunciation: 'SHORT-nes uv BRETH',
            definition: 'Difficulty breathing',
            example: 'Passenger experiencing shortness of breath',
          },
          {
            word: 'unconscious',
            pronunciation: 'un-KON-shus',
            definition: 'Not awake or aware',
            example: 'Patient became unconscious suddenly',
          },
          {
            word: 'seizure',
            pronunciation: 'SEE-zhur',
            definition: 'Uncontrolled muscle movements',
            example: 'Passenger experienced seizure episode',
          },
          {
            word: 'allergic reaction',
            pronunciation: 'uh-LER-jik ree-AK-shun',
            definition: 'Immune system response to allergen',
            example: 'Severe allergic reaction to peanuts',
          },
          {
            word: 'defibrillator',
            pronunciation: 'dih-FIB-ruh-lay-tur',
            definition: 'Device to restart heart rhythm',
            example: 'AED defibrillator used to treat cardiac arrest',
          },
          {
            word: 'CPR',
            pronunciation: 'SEE-PEE-AR',
            definition: 'Cardiopulmonary resuscitation',
            example: 'CPR initiated for unconscious passenger',
          },
          {
            word: 'oxygen',
            pronunciation: 'OK-si-jen',
            definition: 'Essential gas for breathing',
            example: 'Oxygen provided to patient',
          },
          {
            word: 'medical kit',
            pronunciation: 'MED-i-kul KIT',
            definition: 'Emergency medical supplies',
            example: 'Medical kit retrieved from galley',
          },
          {
            word: 'vital signs',
            pronunciation: 'VY-tul SYNZ',
            definition: 'Heart rate, blood pressure, temperature',
            example: 'Monitor patient vital signs',
          },
          {
            word: 'stabilize',
            pronunciation: 'STAY-buh-lyz',
            definition: 'Make condition steady',
            example: 'Patient condition stabilized with medication',
          },
          {
            word: 'divert',
            pronunciation: 'dy-VERT',
            definition: 'Change destination airport',
            example: 'Divert to nearest medical facility',
          },
          {
            word: 'ambulance',
            pronunciation: 'AM-byuh-lens',
            definition: 'Emergency medical transport vehicle',
            example: 'Ambulance standing by at airport',
          },
          {
            word: 'paramedic',
            pronunciation: 'par-uh-MED-ik',
            definition: 'Emergency medical technician',
            example: 'Paramedics meeting aircraft at gate',
          },
          {
            word: 'medical advisory',
            pronunciation: 'MED-i-kul AD-vy-sor-ee',
            definition: 'Consultation with doctor by radio',
            example: 'Medical advisory service contacted',
          },
          {
            word: 'incapacitated',
            pronunciation: 'in-kuh-PAS-i-tay-ted',
            definition: 'Unable to function normally',
            example: 'Crew member incapacitated by illness',
          },
          {
            word: 'priority landing',
            pronunciation: 'PRI-or-i-tee LAN-ding',
            definition: 'Expedited approach and landing',
            example: 'Priority landing requested for medical',
          },
          {
            word: 'emergency descent',
            pronunciation: 'ee-MER-jen-see dih-SENT',
            definition: 'Rapid altitude loss for emergency',
            example: 'Emergency descent initiated for pressurization failure',
          },
          {
            word: 'incident documentation',
            pronunciation: 'IN-si-dent dok-yuh-men-TAY-shun',
            definition: 'Recording of emergency event',
            example: 'Document all medical emergency details',
          },
        ],
        grammar: [],
        exercises: [],
        quiz: {
          questions: [
            {
              id: 'q-1',
              question: 'What should crew do first when passenger has medical emergency?',
              options: ['Offer water', 'Alert captain immediately', 'Give medication', 'Move passenger'],
              correctAnswer: 1,
              explanation: 'Captain must be informed immediately to request diversion if necessary',
            },
            {
              id: 'q-2',
              question: 'What does AED stand for?',
              options: ['Aircraft Emergency Device', 'Automatic External Defibrillator', 'Airway Emergency Device', 'Advanced Electrical Display'],
              correctAnswer: 1,
              explanation: 'AED is device that administers shock to restart heart',
            },
            {
              id: 'q-3',
              question: 'When should aircraft divert for medical emergency?',
              options: ['Only for chest pain', 'Only if patient unconscious', 'For any serious medical condition', 'Never'],
              correctAnswer: 2,
              explanation: 'Divert for any emergency requiring hospital treatment',
            },
            {
              id: 'q-4',
              question: 'What is medical advisory service?',
              options: ['Flight attendant training', 'Doctor consultation by radio', 'Airport medical facility', 'Passenger insurance'],
              correctAnswer: 1,
              explanation: 'Medical advisory provides radio consultation with doctors on ground',
            },
            {
              id: 'q-5',
              question: 'What should crew monitor during medical emergency?',
              options: ['Departure time', 'Passenger vital signs and symptoms', 'Fuel consumption', 'Navigation'],
              correctAnswer: 1,
              explanation: 'Continuous monitoring of patient condition essential for safety',
            },
          ],
        },
        flashcards: [],
        review: {
          keyPoints: [
            'Alert captain immediately of medical emergency',
            'Retrieve medical kit and AED quickly',
            'Monitor passenger condition continuously',
            'Follow medical advisory guidance',
            'Prepare for emergency landing',
            'Coordinate with ground medical services',
          ],
          commonMistakes: [
            'Delaying captain notification',
            'Inadequate symptom assessment',
            'Not retrieving medical equipment',
            'Poor communication with ATC',
            'Ignoring patient worsening condition',
          ],
        },
      },
      {
        id: 'lesson-5-3-security-incidents',
        unitId: 'unit-5-enroute',
        title: 'Security Incidents and Unruly Passengers',
        description: 'Handle passenger behavior and security concerns',
        icon: '🛡️',
        icaoLevel: 5,
        category: 'cabin-crew',
        difficulty: 'intermediate',
        xpReward: 150,
        estimatedDurationMinutes: 35,
        locked: false,
        order: 3,
        objectives: [
          { id: 'obj-1', description: 'Recognize security threats', type: 'listening' },
          { id: 'obj-2', description: 'Report incidents appropriately', type: 'speaking' },
          { id: 'obj-3', description: 'De-escalate situations', type: 'speaking' },
        ],
        scenario: {
          id: 'scenario-1',
          title: 'Unruly Passenger Situation',
          description: 'Handle intoxicated passenger becoming disruptive',
          context: 'Passenger refusing to follow safety rules',
          audioSegments: [
            {
              id: 'audio-1',
              text: 'Captain, we have a security issue. Passenger intoxicated, refusing to wear seatbelt, becoming disruptive.',
              audioUrl: '/audio/unit-5/lesson-3/security-report.wav',
              durationSeconds: 8,
              speaker: 'crew',
            },
            {
              id: 'audio-2',
              text: 'Understood. Inform passenger of mandatory compliance. Prepare for emergency landing if behavior escalates.',
              audioUrl: '/audio/unit-5/lesson-3/captain-security.wav',
              durationSeconds: 7,
              speaker: 'pilot',
            },
          ],
          vocabulary: [
            { word: 'security', definition: 'Protection from danger', pronunciation: 'sih-KYOOR-i-tee' },
          ],
        },
        theory: {
          title: 'Security Incidents and Unruly Passenger Management',
          content: `
Security requires proactive recognition and appropriate response.

Types of Security Concerns:
1. Intoxicated passengers
2. Aggressive behavior
3. Refusal to comply with safety rules
4. Threatening language or actions
5. Suspicious objects or packages
6. Breach of flight deck access
7. Unauthorized device use
8. Theft or property damage

De-Escalation Techniques:
1. Remain calm and professional
2. Speak quietly and clearly
3. Maintain safe distance
4. Use respectful language
5. Listen to passenger concerns
6. Offer alternatives
7. Involve other crew members
8. Contact captain if needed

Passenger Rights and Limitations:
- Safety rules are mandatory
- Non-compliance results in consequences
- Captain has ultimate authority
- Police/security can be requested
- Restraint only in extreme cases
- Mandatory landing for severe behavior

Communication with Captain:
- Report incidents immediately
- Describe behavior specifically
- Assess threat level
- Request guidance
- Follow captain's instructions
- Document incident

Documentation:
- Write detailed incident report
- Note passenger information
- Record all statements
- Photograph evidence if safe
- Collect witness statements
- Preserve evidence
          `,
          audioExplanation: {
            id: 'theory-audio-1',
            text: 'Unruly passenger situations require calm, professional responses. Most issues resolve with clear communication about safety rules. Crew safety is paramount—report concerns immediately to captain.',
            audioUrl: '/audio/unit-5/lesson-3/security-theory.wav',
            durationSeconds: 20,
            speaker: 'instructor',
          },
        },
        icaoPhraseoology: {
          category: 'Security and Unruly Passengers',
          phrases: [
            {
              situation: 'Reporting unruly passenger',
              phrase: 'We have a disruptive passenger',
              pronunciation: 'wee hav uh dis-RUP-tiv PAY-sen-jer',
              meaning: 'Passenger exhibiting inappropriate behavior',
              example: 'We have a disruptive passenger refusing safety instructions',
            },
            {
              situation: 'Requesting compliance',
              phrase: 'Sir, you must comply with safety rules',
              pronunciation: 'SIR, yoo MUST kum-PLY with SAY-fee ROOLZ',
              meaning: 'Firm statement of mandatory requirement',
              example: 'You must fasten your seatbelt for your safety',
            },
            {
              situation: 'Warning of consequences',
              phrase: 'Failure to comply may result in emergency landing',
              pronunciation: 'FAYL-yur too kum-PLY may rih-ZUL in ee-MER-jen-see LAN-ding',
              meaning: 'Informing of potential serious consequences',
              example: 'Non-compliance with safety rules may require diversion',
            },
            {
              situation: 'Offering alternative solution',
              phrase: 'Would you like to move to a different seat?',
              pronunciation: 'wood yoo LYK too MOOV too uh DIF-rint SEET',
              meaning: 'Providing option to resolve situation peacefully',
              example: 'Would you be more comfortable in a different seat?',
            },
            {
              situation: 'Requesting backup',
              phrase: 'Second crew member, respond to cabin disturbance',
              pronunciation: 'SEK-und KROO MEM-ber, rih-SPOND too KAB-in dis-TUR-bens',
              meaning: 'Calling additional crew support',
              example: 'Request another crew member for assistance',
            },
            {
              situation: 'Informing of security protocol',
              phrase: 'Authorities will be notified upon landing',
              pronunciation: 'aw-THOR-i-teez will bee NOH-ti-fyd uh-PON LAN-ding',
              meaning: 'Police/security will meet aircraft',
              example: 'Law enforcement will meet aircraft at gate',
            },
            {
              situation: 'Documenting incident',
              phrase: 'Please fill out incident report',
              pronunciation: 'pleez FILL OUT IN-si-dent rih-PORT',
              meaning: 'Recording formal complaint',
              example: 'I need to complete an incident documentation form',
            },
            {
              situation: 'Requesting emergency landing clearance',
              phrase: 'Request priority landing for security issue',
              pronunciation: 'rih-KWEST PRI-or-i-tee LAN-ding for sih-KYOOR-i-tee ISH-oo',
              meaning: 'Need to land quickly due to passenger',
              example: 'Request immediate priority landing due to unruly passenger',
            },
          ],
        },
        vocabulary: [
          {
            word: 'unruly',
            pronunciation: 'un-ROO-lee',
            definition: 'Disorderly or disobedient',
            example: 'Unruly passenger removed from flight',
          },
          {
            word: 'disruptive',
            pronunciation: 'dis-RUP-tiv',
            definition: 'Causing disturbance',
            example: 'Disruptive behavior endangers flight safety',
          },
          {
            word: 'compliance',
            pronunciation: 'kum-PLY-ens',
            definition: 'Adherence to rules or instructions',
            example: 'Safety rule compliance is mandatory',
          },
          {
            word: 'intoxicated',
            pronunciation: 'in-TOK-si-kay-ted',
            definition: 'Under influence of alcohol or drugs',
            example: 'Intoxicated passenger escorted to seat',
          },
          {
            word: 'aggressive',
            pronunciation: 'uh-GRESH-iv',
            definition: 'Ready to attack or confront',
            example: 'Passenger exhibited aggressive behavior',
          },
          {
            word: 'threat',
            pronunciation: 'THRET',
            definition: 'Expression of intent to harm',
            example: 'Passenger made threatening statements',
          },
          {
            word: 'security',
            pronunciation: 'sih-KYOOR-i-tee',
            definition: 'Protection from danger or crime',
            example: 'Security concerns reported to captain',
          },
          {
            word: 'de-escalation',
            pronunciation: 'dee-ES-kuh-lay-shun',
            definition: 'Reducing tension or conflict',
            example: 'De-escalation techniques calmed situation',
          },
          {
            word: 'restraint',
            pronunciation: 'rih-STRAYNT',
            definition: 'Physical device limiting movement',
            example: 'Restraints only used as last resort',
          },
          {
            word: 'authority',
            pronunciation: 'aw-THOR-i-tee',
            definition: 'Power to give commands',
            example: 'Captain has ultimate authority on aircraft',
          },
          {
            word: 'emergency landing',
            pronunciation: 'ee-MER-jen-see LAN-ding',
            definition: 'Unscheduled landing for urgent reason',
            example: 'Emergency landing required for security threat',
          },
          {
            word: 'law enforcement',
            pronunciation: 'LAW en-FORS-ment',
            definition: 'Police or security forces',
            example: 'Law enforcement met aircraft at gate',
          },
          {
            word: 'incident report',
            pronunciation: 'IN-si-dent rih-PORT',
            definition: 'Formal documentation of event',
            example: 'Incident report filed for unruly passenger',
          },
          {
            word: 'witness',
            pronunciation: 'WIT-nes',
            definition: 'Person who saw incident',
            example: 'Collect statements from witnesses',
          },
          {
            word: 'evidence',
            pronunciation: 'EV-i-dens',
            definition: 'Information proving fact',
            example: 'Preserve evidence for investigation',
          },
          {
            word: 'cooperative',
            pronunciation: 'koh-OP-uh-ray-tiv',
            definition: 'Working together willingly',
            example: 'Passenger became cooperative after warning',
          },
          {
            word: 'volatile',
            pronunciation: 'VOL-uh-til',
            definition: 'Likely to change abruptly',
            example: 'Passenger volatile, situation unpredictable',
          },
          {
            word: 'confrontation',
            pronunciation: 'kon-frun-TAY-shun',
            definition: 'Heated disagreement',
            example: 'Avoid direct confrontation with unruly passenger',
          },
          {
            word: 'duty',
            pronunciation: 'DOO-tee',
            definition: 'Responsibility or obligation',
            example: 'Duty to ensure passenger safety',
          },
          {
            word: 'breach',
            pronunciation: 'BREECH',
            definition: 'Violation or break',
            example: 'Breach of flight deck security',
          },
        ],
        grammar: [],
        exercises: [],
        quiz: {
          questions: [
            {
              id: 'q-1',
              question: 'What should crew do first with unruly passenger?',
              options: ['Ignore behavior', 'Calmly request compliance', 'Restrain immediately', 'Land emergency'],
              correctAnswer: 1,
              explanation: 'First response is calm, professional request for compliance with safety rules',
            },
            {
              id: 'q-2',
              question: 'What are mandatory safety rules?',
              options: ['Voluntary suggestions', 'Recommendations for comfort', 'Non-negotiable legal requirements', 'Optional guidelines'],
              correctAnswer: 2,
              explanation: 'Seatbelts, no smoking, no device use are legally mandatory',
            },
            {
              id: 'q-3',
              question: 'Who has ultimate authority on aircraft?',
              options: ['Lead flight attendant', 'Captain', 'Passengers', 'Airline company'],
              correctAnswer: 1,
              explanation: 'Captain has absolute authority for flight safety',
            },
            {
              id: 'q-4',
              question: 'When should emergency landing be requested?',
              options: ['Never', 'For minor complaints', 'For serious security threats', 'Only for medical'],
              correctAnswer: 2,
              explanation: 'Emergency landing warranted for serious unruly passenger or security threat',
            },
            {
              id: 'q-5',
              question: 'What is de-escalation?',
              options: ['Increasing tension', 'Reducing conflict through calm communication', 'Calling security', 'Restraining passenger'],
              correctAnswer: 1,
              explanation: 'De-escalation uses calm, respectful techniques to reduce tension',
            },
          ],
        },
        flashcards: [],
        review: {
          keyPoints: [
            'Remain calm and professional',
            'Report incident to captain immediately',
            'Follow captain\'s guidance',
            'Use de-escalation techniques',
            'Document all details',
            'Cooperate with law enforcement',
          ],
          commonMistakes: [
            'Escalating conflict through confrontation',
            'Delaying captain notification',
            'Using excessive force',
            'Inadequate documentation',
            'Failing to secure evidence',
          ],
        },
      },
    ],
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
    lessons: [
      {
        id: 'lesson-6-1-descent-planning',
        unitId: 'unit-6-approach',
        title: 'Descent Planning and Initial Approach',
        description: 'Learn descent communication and approach briefing',
        icon: '📉',
        icaoLevel: 4,
        category: 'cabin-crew',
        difficulty: 'intermediate',
        xpReward: 150,
        estimatedDurationMinutes: 30,
        locked: false,
        order: 1,
        objectives: [
          { id: 'obj-1', description: 'Request descent clearance', type: 'speaking' },
          { id: 'obj-2', description: 'Follow descent profile', type: 'listening' },
          { id: 'obj-3', description: 'Conduct approach briefing', type: 'speaking' },
        ],
        scenario: {
          id: 'scenario-1',
          title: 'Descent Briefing and Planning',
          description: 'Prepare and conduct descent briefing',
          context: 'Aircraft approaching destination after cruise',
          audioSegments: [
            {
              id: 'audio-1',
              text: 'Center, November Four Seven Three, request descent to flight level one zero zero',
              audioUrl: '/audio/unit-6/lesson-1/descent-request.wav',
              durationSeconds: 6,
              speaker: 'pilot',
            },
            {
              id: 'audio-2',
              text: 'November Four Seven Three, descend to flight level one zero zero, expect approach in fifteen minutes',
              audioUrl: '/audio/unit-6/lesson-1/descent-clear.wav',
              durationSeconds: 7,
              speaker: 'instructor',
            },
          ],
          vocabulary: [
            { word: 'descent', definition: 'Lower altitude movement', pronunciation: 'dih-SENT' },
            { word: 'approach', definition: 'Flight phase preparing to land', pronunciation: 'uh-PROHCH' },
          ],
        },
        theory: {
          title: 'Descent Planning and Initial Approach',
          content: `
Descent planning begins well before arrival airport.

Descent Calculation:
- Rule of thumb: Altitude divided by 1000 = minutes to descent
- Plan to descend at constant rate
- Account for wind and routing
- Avoid steep or shallow descents
- Anticipate ATC restrictions

Descent Briefing Components:
1. Destination airport information
2. Weather conditions at arrival
3. Expected runway
4. Descent profile
5. Approach procedure
6. Alternate airport plans
7. Time estimates
8. Fuel calculations

Center to Approach Transition:
- Contact approach control on assigned frequency
- Report altitude and position
- Confirm approach routing
- Acknowledge speed restrictions
- Monitor descent progress

Safety Procedures:
- Descend only when cleared
- Monitor pressurization
- Check all systems
- Brief crew on descent
- Prepare cabin for landing
- Tighten seatbelts

Approach Briefing Topics:
- Type of approach (ILS, visual, etc.)
- Weather assessment
- Runway direction and length
- Descent rate and angle
- Speed schedule
- Go-around procedures
          `,
          audioExplanation: {
            id: 'theory-audio-1',
            text: 'Descent from cruise to approach altitude requires careful planning and coordination with ATC. Pilot must request descent clearance well in advance and follow assigned procedures.',
            audioUrl: '/audio/unit-6/lesson-1/descent-theory.wav',
            durationSeconds: 18,
            speaker: 'instructor',
          },
        },
        icaoPhraseoology: {
          category: 'Descent and Approach',
          phrases: [
            {
              situation: 'Requesting descent',
              phrase: 'Request descent to flight level one zero zero',
              pronunciation: 'rih-KWEST dih-SENT too FLYHT LEV-ul one zero zero',
              meaning: 'Pilot asking permission to lower altitude',
              example: 'Request descent when able',
            },
            {
              situation: 'Clearance to descend',
              phrase: 'Descend to flight level one zero zero',
              pronunciation: 'dih-SEND too FLYHT LEV-ul one zero zero',
              meaning: 'Permission to lower altitude',
              example: 'Descend to flight level one zero zero',
            },
            {
              situation: 'Reporting descent initiation',
              phrase: 'Descending to flight level one zero zero',
              pronunciation: 'dih-SEN-ding too FLYHT LEV-ul one zero zero',
              meaning: 'Pilot confirming descent has begun',
              example: 'Descending to flight level one zero zero',
            },
            {
              situation: 'Speed restriction notice',
              phrase: 'Reduce speed to two hundred fifty knots',
              pronunciation: 'rih-DOOS SPEED too two hun-dred FIFTY NOTS',
              meaning: 'ATC limiting aircraft speed',
              example: 'Reduce speed to two fifty knots',
            },
            {
              situation: 'Approach briefing',
              phrase: 'Approach briefing: ILS runway two eight left',
              pronunciation: 'uh-PROHCH BRIEF-ing: runway two eight left',
              meaning: 'Pilot planning approach procedure',
              example: 'Approach briefing complete, instrument landing runway two eight',
            },
            {
              situation: 'Contacting approach control',
              phrase: 'Approach, November Four Seven Three, descending to five thousand',
              pronunciation: 'uh-PROHCH, dih-SEN-ding too five THAUzund',
              meaning: 'Initial contact with approach control',
              example: 'Approach, November Four Seven Three, level five thousand',
            },
            {
              situation: 'Requesting approach clearance',
              phrase: 'Request approach clearance',
              pronunciation: 'rih-KWEST uh-PROHCH KLIR-ens',
              meaning: 'Pilot asking for landing preparation',
              example: 'Request approach control',
            },
            {
              situation: 'Confirming approach routing',
              phrase: 'Confirming approach runway two eight left',
              pronunciation: 'kun-FER-ming uh-PROHCH RUN-way two eight left',
              meaning: 'Verifying landing runway',
              example: 'Confirming runway assignment',
            },
          ],
        },
        vocabulary: [
          {
            word: 'descent',
            pronunciation: 'dih-SENT',
            definition: 'Lowering altitude from cruise',
            example: 'Begin descent planning now',
          },
          {
            word: 'approach',
            pronunciation: 'uh-PROHCH',
            definition: 'Flight phase preparing for landing',
            example: 'Entering approach phase',
          },
          {
            word: 'approach control',
            pronunciation: 'uh-PROHCH kun-TROHL',
            definition: 'ATC facility controlling descent to airport',
            example: 'Contact approach on one-two-eight-point-four',
          },
          {
            word: 'descent profile',
            pronunciation: 'dih-SENT PRO-fyl',
            definition: 'Planned altitude vs. time path',
            example: 'Maintain descent profile',
          },
          {
            word: 'speed restriction',
            pronunciation: 'SPEED rik-STRIK-shun',
            definition: 'Maximum speed limit imposed by ATC',
            example: 'Comply with speed restriction of two-fifty',
          },
          {
            word: 'descent rate',
            pronunciation: 'dih-SENT RAYT',
            definition: 'Altitude loss per minute',
            example: 'Maintain descent rate of one thousand feet per minute',
          },
          {
            word: 'transition altitude',
            pronunciation: 'tran-ZISH-un AL-ti-tood',
            definition: 'Altitude where pressure reference changes',
            example: 'Transition altitude at seven thousand feet',
          },
          {
            word: 'briefing',
            pronunciation: 'BRIEF-ing',
            definition: 'Formal information meeting',
            example: 'Conduct pre-approach briefing',
          },
          {
            word: 'procedure',
            pronunciation: 'pruh-SEE-jer',
            definition: 'Step-by-step process',
            example: 'Follow approach procedure exactly',
          },
          {
            word: 'routing',
            pronunciation: 'ROO-ting',
            definition: 'Assigned flight path',
            example: 'Maintain assigned routing',
          },
          {
            word: 'clearance',
            pronunciation: 'KLIR-ens',
            definition: 'Permission from ATC',
            example: 'Await descent clearance',
          },
          {
            word: 'confirmation',
            pronunciation: 'kon-fur-MAY-shun',
            definition: 'Verification of information',
            example: 'Confirm runway assignment',
          },
          {
            word: 'expectancy',
            pronunciation: 'ik-SPEK-ten-see',
            definition: 'What to anticipate in future',
            example: 'Expect approach in ten minutes',
          },
          {
            word: 'vector',
            pronunciation: 'VEK-tur',
            definition: 'Radar-guided heading',
            example: 'Radar vectors to runway',
          },
          {
            word: 'instrument approach',
            pronunciation: 'IN-struh-ment uh-PROHCH',
            definition: 'Landing using flight instruments',
            example: 'Instrument approach procedure ILS',
          },
          {
            word: 'visual approach',
            pronunciation: 'VIZH-oo-ul uh-PROHCH',
            definition: 'Landing using pilot sight',
            example: 'Visual approach to runway',
          },
          {
            word: 'go-around',
            pronunciation: 'GO-uh-ROUND',
            definition: 'Abort landing and climb away',
            example: 'Go-around procedures reviewed in briefing',
          },
          {
            word: 'alternate airport',
            pronunciation: 'AWL-tur-nit AIR-port',
            definition: 'Backup landing destination',
            example: 'Alternate airport due to weather',
          },
          {
            word: 'weather briefing',
            pronunciation: 'WED-ur BRIEF-ing',
            definition: 'Current and forecast conditions',
            example: 'Weather briefing indicates clear arrival',
          },
          {
            word: 'time estimate',
            pronunciation: 'TYM ES-ti-mit',
            definition: 'Predicted time to reach point',
            example: 'Estimate landing in twenty minutes',
          },
        ],
        grammar: [],
        exercises: [],
        quiz: {
          questions: [
            {
              id: 'q-1',
              question: 'When should descent planning begin?',
              options: ['At approach altitude', 'Well before descent', 'Only after ATC approval', 'At landing'],
              correctAnswer: 1,
              explanation: 'Descent should be planned early in flight for optimal profile',
            },
            {
              id: 'q-2',
              question: 'What is included in approach briefing?',
              options: ['Crew personal topics', 'Runway, weather, procedure, go-around', 'Passenger comfort only', 'Maintenance issues'],
              correctAnswer: 1,
              explanation: 'Approach briefing covers arrival runway, conditions, and procedures',
            },
            {
              id: 'q-3',
              question: 'Who controls aircraft during descent?',
              options: ['Passengers', 'Center or approach control', 'Tower', 'Pilot alone'],
              correctAnswer: 1,
              explanation: 'Center and approach control guide descent through routing',
            },
            {
              id: 'q-4',
              question: 'What does "descent profile" mean?',
              options: ['Fuel consumption', 'Planned altitude vs. time path', 'Weather', 'Crew assignment'],
              correctAnswer: 1,
              explanation: 'Descent profile is planned path from cruise to approach altitude',
            },
            {
              id: 'q-5',
              question: 'What should crew do when ATC restricts speed?',
              options: ['Ignore it', 'Comply immediately', 'Question it', 'Reduce gradually'],
              correctAnswer: 1,
              explanation: 'Immediately comply with all ATC speed restrictions',
            },
          ],
        },
        flashcards: [],
        review: {
          keyPoints: [
            'Plan descent early in flight',
            'Request descent clearance when appropriate',
            'Follow descent profile',
            'Conduct thorough approach briefing',
            'Monitor all ATC restrictions',
            'Prepare for approach procedures',
          ],
          commonMistakes: [
            'Poor descent planning',
            'Inadequate approach briefing',
            'Ignoring speed restrictions',
            'Late descent request',
            'Altitude excursions',
          ],
        },
      },
      {
        id: 'lesson-6-2-approach-control',
        unitId: 'unit-6-approach',
        title: 'Approach Control and Radar Vectors',
        description: 'Learn approach control procedures and radar navigation',
        icon: '📍',
        icaoLevel: 4,
        category: 'cabin-crew',
        difficulty: 'intermediate',
        xpReward: 150,
        estimatedDurationMinutes: 30,
        locked: false,
        order: 2,
        objectives: [
          { id: 'obj-1', description: 'Contact approach control', type: 'speaking' },
          { id: 'obj-2', description: 'Follow radar vectors', type: 'listening' },
          { id: 'obj-3', description: 'Report altitude and position', type: 'speaking' },
        ],
        scenario: {
          id: 'scenario-1',
          title: 'Approach Control Contact',
          description: 'Contact approach and follow radar vectors',
          context: 'Aircraft descending toward airport',
          audioSegments: [
            {
              id: 'audio-1',
              text: 'Approach, November Four Seven Three, level three thousand, request vectors to runway',
              audioUrl: '/audio/unit-6/lesson-2/approach-contact.wav',
              durationSeconds: 7,
              speaker: 'pilot',
            },
            {
              id: 'audio-2',
              text: 'November Four Seven Three, approach, vectors available. Turn right heading zero nine zero, maintain three thousand',
              audioUrl: '/audio/unit-6/lesson-2/approach-vector.wav',
              durationSeconds: 8,
              speaker: 'instructor',
            },
          ],
          vocabulary: [
            { word: 'vector', definition: 'Radar heading to destination', pronunciation: 'VEK-tur' },
            { word: 'approach control', definition: 'ATC facility near airport', pronunciation: 'uh-PROHCH kun-TROHL' },
          ],
        },
        theory: {
          title: 'Approach Control and Radar Vectoring',
          content: `
Approach control provides final guidance to landing airport.

Approach Control Functions:
1. Radar surveillance of arrival aircraft
2. Separation from other traffic
3. Routing to landing runway
4. Speed and altitude restrictions
5. Transition to tower frequency
6. Weather and runway updates

Radar Vector Procedures:
1. Pilot maintains assigned heading
2. Controller provides radar guidance
3. Periodic position updates
4. Altitude restrictions
5. Speed restrictions
6. Descent clearances

Standard Approach Patterns:
1. Initial approach fix
2. Intermediate approach segment
3. Final approach course
4. Landing threshold
5. Precision or non-precision approach

Communication Requirements:
- Confirm each vector immediately
- Report altitude reaching restrictions
- Advise of any aircraft problems
- Maintain assigned speed
- Report traffic in sight when given
- Request clarification if unsure

Handoff to Tower:
- Approach provides tower frequency
- Pilot acknowledges frequency
- Switch frequency when instructed
- Contact tower with specific info
- Tower provides landing clearance
          `,
          audioExplanation: {
            id: 'theory-audio-1',
            text: 'Approach control provides radar-guided vectors to align aircraft with runway. Pilot must follow all vectoring instructions precisely to maintain separation and ensure safe landing.',
            audioUrl: '/audio/unit-6/lesson-2/approach-theory.wav',
            durationSeconds: 19,
            speaker: 'instructor',
          },
        },
        icaoPhraseoology: {
          category: 'Approach Control',
          phrases: [
            {
              situation: 'Requesting approach vectors',
              phrase: 'Request vectors to runway',
              pronunciation: 'rih-KWEST VEK-turz too RUN-way',
              meaning: 'Asking for radar-guided routing',
              example: 'Request vectors for approach',
            },
            {
              situation: 'Approach providing vector',
              phrase: 'Turn right heading zero nine zero',
              pronunciation: 'TURN right HED-ing zero nine zero',
              meaning: 'Change course to specific magnetic heading',
              example: 'Turn right heading two two zero, descend three thousand',
            },
            {
              situation: 'Pilot confirming vector',
              phrase: 'Turning right heading zero nine zero',
              pronunciation: 'TER-ning right HED-ing zero nine zero',
              meaning: 'Pilot acknowledging heading change',
              example: 'November Four Seven Three, turning right heading zero nine zero',
            },
            {
              situation: 'Reporting altitude reaching',
              phrase: 'Level at three thousand feet',
              pronunciation: 'LEV-ul at three THAUzund FEET',
              meaning: 'Aircraft has reached assigned altitude',
              example: 'Level three thousand feet',
            },
            {
              situation: 'Traffic call-out',
              phrase: 'Traffic at two o\'clock, three miles',
              pronunciation: 'TRAF-ik at two OH-KLOK, three MYLZ',
              meaning: 'Other aircraft location description',
              example: 'Traffic at three o\'clock, five miles',
            },
            {
              situation: 'Distance to final approach',
              phrase: 'Distance from touchdown zone',
              pronunciation: 'DIS-tens from CHING ZOON',
              meaning: 'How far before runway threshold',
              example: 'Approximately ten miles from touchdown',
            },
            {
              situation: 'Approach handoff to tower',
              phrase: 'Contact tower one-two-four-point-one',
              pronunciation: 'KON-takt TAU-ur one-two-four-point-one',
              meaning: 'Switch to tower frequency',
              example: 'Contact tower, good day',
            },
            {
              situation: 'Reporting cleared for approach',
              phrase: 'Cleared to land runway two eight left',
              pronunciation: 'KLERD too LAND RUN-way two eight LEFT',
              meaning: 'Permission to begin landing procedure',
              example: 'Cleared for final approach',
            },
          ],
        },
        vocabulary: [
          {
            word: 'vector',
            pronunciation: 'VEK-tur',
            definition: 'Radar-guided heading to destination',
            example: 'Radar vectors to final approach',
          },
          {
            word: 'radar',
            pronunciation: 'RAY-dar',
            definition: 'Electronic system detecting aircraft',
            example: 'Radar control provides guidance',
          },
          {
            word: 'heading',
            pronunciation: 'HED-ing',
            definition: 'Compass direction of flight',
            example: 'Maintain assigned heading',
          },
          {
            word: 'final approach',
            pronunciation: 'FY-nul uh-PROHCH',
            definition: 'Last segment of landing approach',
            example: 'Cleared for final approach',
          },
          {
            word: 'initial approach',
            pronunciation: 'i-NISH-ul uh-PROHCH',
            definition: 'First segment of landing approach',
            example: 'Join initial approach from northwest',
          },
          {
            word: 'approach fix',
            pronunciation: 'uh-PROHCH FIKS',
            definition: 'Navigation point marking approach start',
            example: 'Cleared direct to approach fix',
          },
          {
            word: 'descent',
            pronunciation: 'dih-SENT',
            definition: 'Lowering altitude',
            example: 'Descend to two thousand feet',
          },
          {
            word: 'maintain',
            pronunciation: 'mayn-TAYN',
            definition: 'Keep constant altitude or heading',
            example: 'Maintain two thousand feet',
          },
          {
            word: 'clearance',
            pronunciation: 'KLIR-ens',
            definition: 'Permission from ATC',
            example: 'Cleared to land runway two eight',
          },
          {
            word: 'separation',
            pronunciation: 'sep-uh-RAY-shun',
            definition: 'Minimum distance between aircraft',
            example: 'Approach maintains radar separation',
          },
          {
            word: 'handoff',
            pronunciation: 'HAND-off',
            definition: 'Transition between ATC facilities',
            example: 'Handoff to tower at five miles',
          },
          {
            word: 'frequency',
            pronunciation: 'FREE-kwen-see',
            definition: 'Radio channel number',
            example: 'Switch to tower frequency',
          },
          {
            word: 'tower',
            pronunciation: 'TAU-ur',
            definition: 'ATC facility controlling runway operations',
            example: 'Contact tower one-two-four-point-one',
          },
          {
            word: 'traffic',
            pronunciation: 'TRAF-ik',
            definition: 'Other aircraft in area',
            example: 'Traffic at two o\'clock',
          },
          {
            word: 'distance',
            pronunciation: 'DIS-tens',
            definition: 'Space between aircraft and point',
            example: 'Ten miles from touchdown',
          },
          {
            word: 'altitude',
            pronunciation: 'AL-ti-tood',
            definition: 'Height above ground',
            example: 'Maintain altitude three thousand',
          },
          {
            word: 'speed restriction',
            pronunciation: 'SPEED rik-STRIK-shun',
            definition: 'Maximum speed limit',
            example: 'Reduce speed to two-fifty',
          },
          {
            word: 'level',
            pronunciation: 'LEV-ul',
            definition: 'At assigned altitude',
            example: 'Level two thousand feet',
          },
          {
            word: 'precision approach',
            pronunciation: 'PRIH-zhun uh-PROHCH',
            definition: 'Landing with radar guidance (ILS)',
            example: 'Precision approach runway two eight',
          },
          {
            word: 'non-precision approach',
            pronunciation: 'non-PRIH-zhun uh-PROHCH',
            definition: 'Landing with limited guidance (NDB, VOR)',
            example: 'Non-precision approach procedure',
          },
        ],
        grammar: [],
        exercises: [],
        quiz: {
          questions: [
            {
              id: 'q-1',
              question: 'What is a radar vector?',
              options: ['Wind direction', 'Radar-guided heading to destination', 'Altitude restriction', 'Speed limit'],
              correctAnswer: 1,
              explanation: 'Vector is ATC-assigned heading based on radar',
            },
            {
              id: 'q-2',
              question: 'What should pilot do when given vector?',
              options: ['Question it', 'Turn to assigned heading immediately', 'Wait for confirmation', 'Fly own routing'],
              correctAnswer: 1,
              explanation: 'Immediately acknowledge and turn to assigned vector',
            },
            {
              id: 'q-3',
              question: 'Who provides approach control vectors?',
              options: ['Tower', 'Center', 'Approach control facility', 'Pilot'],
              correctAnswer: 2,
              explanation: 'Approach control facility provides radar vectors',
            },
            {
              id: 'q-4',
              question: 'When does handoff to tower occur?',
              options: ['Immediately after takeoff', 'During cruise', 'Near end of approach', 'Never'],
              correctAnswer: 2,
              explanation: 'Approach hands off to tower near landing point',
            },
            {
              id: 'q-5',
              question: 'What does "cleared for final approach" mean?',
              options: ['Takeoff clearance', 'Permission to begin landing procedure', 'Hold position', 'Request new vector'],
              correctAnswer: 1,
              explanation: 'Cleared means permission to proceed with landing approach',
            },
          ],
        },
        flashcards: [],
        review: {
          keyPoints: [
            'Contact approach control on designated frequency',
            'Follow all radar vectors precisely',
            'Report altitude and position changes',
            'Acknowledge all ATC instructions',
            'Request clarification if unsure',
            'Prepare for tower handoff',
          ],
          commonMistakes: [
            'Taking wrong heading',
            'Not reporting altitude changes',
            'Missing radio transmissions',
            'Ignoring speed restrictions',
            'Late frequency change',
          ],
        },
      },
      {
        id: 'lesson-6-3-weather-approach',
        unitId: 'unit-6-approach',
        title: 'Weather Considerations for Approach',
        description: 'Understand weather impact on approach planning',
        icon: '⛈️',
        icaoLevel: 5,
        category: 'cabin-crew',
        difficulty: 'intermediate',
        xpReward: 150,
        estimatedDurationMinutes: 30,
        locked: false,
        order: 3,
        objectives: [
          { id: 'obj-1', description: 'Interpret approach weather', type: 'listening' },
          { id: 'obj-2', description: 'Request weather updates', type: 'speaking' },
          { id: 'obj-3', description: 'Make go-around decision', type: 'speaking' },
        ],
        scenario: {
          id: 'scenario-1',
          title: 'Weather Deterioration During Approach',
          description: 'Respond to worsening approach weather',
          context: 'Visibility decreasing during descent',
          audioSegments: [
            {
              id: 'audio-1',
              text: 'Approach, November Four Seven Three, visibility decreasing, request current weather for destination',
              audioUrl: '/audio/unit-6/lesson-3/weather-request.wav',
              durationSeconds: 8,
              speaker: 'pilot',
            },
            {
              id: 'audio-2',
              text: 'November Four Seven Three, visibility one mile, expect another update in five minutes',
              audioUrl: '/audio/unit-6/lesson-3/approach-weather.wav',
              durationSeconds: 6,
              speaker: 'instructor',
            },
          ],
          vocabulary: [
            { word: 'visibility', definition: 'How far pilots can see', pronunciation: 'viz-i-BIL-i-tee' },
          ],
        },
        theory: {
          title: 'Weather Impact on Approach Operations',
          content: `
Weather significantly affects approach procedures and safety.

Approach-Limiting Weather:
1. Low visibility (fog, rain, snow)
2. Low clouds (ceiling too low)
3. Strong crosswinds
4. Thunderstorms
5. Wind shear
6. Icing
7. Turbulence
8. Hail or severe precipitation

Go-Around Decision Factors:
1. Runway visual range below limits
2. Crosswind exceeds aircraft limit
3. Weather deterioration
4. Traffic or runway conflict
5. Instrument failure
6. Pilot discomfort with approach

Weather Information During Approach:
- METAR (current conditions)
- ATIS (airport information)
- Wind shear alerts
- Microbursts
- Lighting reports
- Braking action reports

Crew Communication Requirements:
- Request weather updates
- Report observed conditions
- Discuss go-around procedures
- Make final go/no-go decision
- Brief cabin crew before landing
- Prepare for instrument approach if needed

Alternative Options:
- Divert to alternate airport
- Hold for weather improvement
- Request different runway
- Request delay on ground
- Return to cruise altitude if safe
          `,
          audioExplanation: {
            id: 'theory-audio-1',
            text: 'Weather can change rapidly during descent. Pilots must continuously monitor conditions and be ready to go around if weather deteriorates below landing minimums. Safety is always the priority.',
            audioUrl: '/audio/unit-6/lesson-3/weather-approach-theory.wav',
            durationSeconds: 20,
            speaker: 'instructor',
          },
        },
        icaoPhraseoology: {
          category: 'Approach Weather',
          phrases: [
            {
              situation: 'Requesting weather update',
              phrase: 'Request latest weather for destination',
              pronunciation: 'rih-KWEST LAY-test WED-ur for des-ti-NAY-shun',
              meaning: 'Asking for current conditions report',
              example: 'Request weather update, considering approach',
            },
            {
              situation: 'Reporting observed weather',
              phrase: 'Observing heavy rain, decreasing visibility',
              pronunciation: 'ub-ZER-ving HEV-ee RAYN, dih-KRES-ing viz-i-BIL-i-tee',
              meaning: 'Pilot reporting weather conditions',
              example: 'Observing moderate to heavy rain',
            },
            {
              situation: 'Reporting wind shear',
              phrase: 'Wind shear alert, increasing tailwind',
              pronunciation: 'WIND SHAIR uh-LERT, in-KRES-ing TAYL-wind',
              meaning: 'Sudden wind change affecting landing',
              example: 'Wind shear reported, go around',
            },
            {
              situation: 'Reporting low visibility',
              phrase: 'Visibility one mile, will report if improving',
              pronunciation: 'viz-i-BIL-i-tee one MYL',
              meaning: 'Very limited sight distance',
              example: 'Visibility below landing minimums',
            },
            {
              situation: 'Decision to go-around',
              phrase: 'Weather below minimums, executing go-around',
              pronunciation: 'WED-ur bih-LOH MIN-i-mumz, ig-ZEK-uting GO-uh-ROUND',
              meaning: 'Aborting landing due to weather',
              example: 'Going around, ceiling below minimums',
            },
            {
              situation: 'Requesting diversion',
              phrase: 'Request diversion to alternate due to weather',
              pronunciation: 'rih-KWEST dy-VER-zhun too AL-tur-nit',
              meaning: 'Unable to land, going to backup airport',
              example: 'Request diversion, weather deteriorating',
            },
            {
              situation: 'Reporting runway condition',
              phrase: 'Runway wet, braking action poor',
              pronunciation: 'RUN-way WET, BRAY-king AK-shun POOR',
              meaning: 'Surface condition affects landing performance',
              example: 'Runway wet, expect reduced braking',
            },
            {
              situation: 'Requesting hold for weather',
              phrase: 'Request holding pattern, expecting weather improvement',
              pronunciation: 'rih-KWEST HOLD-ing PAT-ern',
              meaning: 'Requesting to circle while weather improves',
              example: 'Request hold for thirty minutes',
            },
          ],
        },
        vocabulary: [
          {
            word: 'visibility',
            pronunciation: 'viz-i-BIL-i-tee',
            definition: 'How far pilots can see ahead',
            example: 'Visibility reduced to one-half mile',
          },
          {
            word: 'ceiling',
            pronunciation: 'SEEL-ing',
            definition: 'Lowest cloud layer height',
            example: 'Ceiling one thousand feet overcast',
          },
          {
            word: 'METAR',
            pronunciation: 'MEH-tar',
            definition: 'Current weather observation',
            example: 'METAR shows low visibility',
          },
          {
            word: 'ATIS',
            pronunciation: 'AY-tis',
            definition: 'Automated weather and runway info',
            example: 'ATIS reports moderate turbulence in clouds',
          },
          {
            word: 'wind shear',
            pronunciation: 'WIND SHAIR',
            definition: 'Sudden wind speed or direction change',
            example: 'Wind shear alert during final approach',
          },
          {
            word: 'microburst',
            pronunciation: 'MY-kroh-burst',
            definition: 'Powerful downdraft from storm',
            example: 'Microburst reported near airport',
          },
          {
            word: 'crosswind',
            pronunciation: 'KROSS-wind',
            definition: 'Wind perpendicular to runway',
            example: 'Crosswind component exceeds limit',
          },
          {
            word: 'headwind',
            pronunciation: 'HED-wind',
            definition: 'Wind opposing aircraft direction',
            example: 'Strong headwind reduces landing distance',
          },
          {
            word: 'tailwind',
            pronunciation: 'TAYL-wind',
            definition: 'Wind in aircraft direction of flight',
            example: 'Tailwind component limits landing',
          },
          {
            word: 'turbulence',
            pronunciation: 'TER-byuh-lens',
            definition: 'Rough air causing aircraft movement',
            example: 'Expect turbulence in clouds',
          },
          {
            word: 'icing',
            pronunciation: 'Y-sing',
            definition: 'Ice accumulation on aircraft',
            example: 'Moderate icing in clouds',
          },
          {
            word: 'precipitation',
            pronunciation: 'prih-sip-i-TAY-shun',
            definition: 'Rain, snow, or hail',
            example: 'Heavy precipitation affects visibility',
          },
          {
            word: 'fog',
            pronunciation: 'FAWG',
            definition: 'Low cloud at ground level',
            example: 'Dense fog reduces visibility dramatically',
          },
          {
            word: 'thunderstorm',
            pronunciation: 'THUN-der-storm',
            definition: 'Intense storm with rain and lightning',
            example: 'Thunderstorm near airport',
          },
          {
            word: 'go-around',
            pronunciation: 'GO-uh-ROUND',
            definition: 'Abort landing and climb away',
            example: 'Execute go-around for safety',
          },
          {
            word: 'minimums',
            pronunciation: 'MIN-i-mumz',
            definition: 'Lowest conditions for landing',
            example: 'Weather below landing minimums',
          },
          {
            word: 'alternate airport',
            pronunciation: 'AWL-tur-nit AIR-port',
            definition: 'Backup destination',
            example: 'Divert to alternate airport',
          },
          {
            word: 'braking action',
            pronunciation: 'BRAY-king AK-shun',
            definition: 'Runway surface friction',
            example: 'Braking action poor on wet runway',
          },
          {
            word: 'runway condition',
            pronunciation: 'RUN-way kun-DISH-un',
            definition: 'Surface state (wet, dry, contaminated)',
            example: 'Runway condition wet',
          },
          {
            word: 'deterioration',
            pronunciation: 'dih-TER-ee-uh-ray-shun',
            definition: 'Worsening of conditions',
            example: 'Rapid weather deterioration observed',
          },
        ],
        grammar: [],
        exercises: [],
        quiz: {
          questions: [
            {
              id: 'q-1',
              question: 'When should pilot request weather update during approach?',
              options: ['Never', 'Only at descent', 'Continuously as conditions change', 'After landing'],
              correctAnswer: 2,
              explanation: 'Continuously request updates to monitor changing conditions',
            },
            {
              id: 'q-2',
              question: 'What triggers a go-around?',
              options: ['Passenger request', 'Weather below minimums', 'Scheduled descent time', 'Fuel remaining'],
              correctAnswer: 1,
              explanation: 'Go-around required if weather is below landing minimums',
            },
            {
              id: 'q-3',
              question: 'What does "ceiling one thousand feet" mean?',
              options: ['Maximum altitude', 'Lowest cloud layer at one thousand feet', 'Landing distance', 'Visibility distance'],
              correctAnswer: 1,
              explanation: 'Ceiling is lowest cloud layer height above ground',
            },
            {
              id: 'q-4',
              question: 'What is wind shear during approach?',
              options: ['General wind', 'Sudden wind speed or direction change', 'Steady wind', 'Turbulence'],
              correctAnswer: 1,
              explanation: 'Wind shear is abrupt wind change affecting control',
            },
            {
              id: 'q-5',
              question: 'What should crew communicate about approach weather?',
              options: ['Personal preferences', 'Observed conditions and landing minimums', 'Passenger anxiety', 'Crew meal timing'],
              correctAnswer: 1,
              explanation: 'Crew must communicate weather observations and safety concerns',
            },
          ],
        },
        flashcards: [],
        review: {
          keyPoints: [
            'Request weather updates during descent',
            'Monitor visibility and ceiling continuously',
            'Watch for wind shear alerts',
            'Make go-around decision early',
            'Divert if conditions deteriorate',
            'Brief crew on approach conditions',
          ],
          commonMistakes: [
            'Ignoring weather deterioration',
            'Inadequate weather requests',
            'Delayed go-around decision',
            'Inadequate crew briefing',
            'Taking risks in poor weather',
          ],
        },
      },
    ],
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
    lessons: [
      {
        id: 'lesson-7-1-final-approach',
        unitId: 'unit-7-landing',
        title: 'Final Approach and Landing Clearance',
        description: 'Learn final approach procedures and landing clearance',
        icon: '🎯',
        icaoLevel: 4,
        category: 'cabin-crew',
        difficulty: 'intermediate',
        xpReward: 150,
        estimatedDurationMinutes: 30,
        locked: false,
        order: 1,
        objectives: [
          { id: 'obj-1', description: 'Request landing clearance', type: 'speaking' },
          { id: 'obj-2', description: 'Follow final approach guidance', type: 'listening' },
          { id: 'obj-3', description: 'Execute stable landing', type: 'speaking' },
        ],
        scenario: {
          id: 'scenario-1',
          title: 'Final Approach and Landing',
          description: 'Execute final approach and receive landing clearance',
          context: 'Aircraft on final approach to runway',
          audioSegments: [
            {
              id: 'audio-1',
              text: 'Tower, November Four Seven Three, final approach for runway two eight left',
              audioUrl: '/audio/unit-7/lesson-1/final-approach.wav',
              durationSeconds: 6,
              speaker: 'pilot',
            },
            {
              id: 'audio-2',
              text: 'November Four Seven Three, cleared to land runway two eight left, wind two seven zero at five knots',
              audioUrl: '/audio/unit-7/lesson-1/landing-clear.wav',
              durationSeconds: 8,
              speaker: 'instructor',
            },
          ],
          vocabulary: [
            { word: 'final approach', definition: 'Last segment before landing', pronunciation: 'FY-nul uh-PROHCH' },
            { word: 'cleared to land', definition: 'Permission to land', pronunciation: 'KLERD too LAND' },
          ],
        },
        theory: {
          title: 'Final Approach and Landing Procedures',
          content: `
Final approach is critical phase requiring precision and focus.

Final Approach Characteristics:
1. Stable descent profile
2. Constant speed management
3. Precise altitude control
4. Runway alignment
5. Approach lighting guidance
6. Instrument or visual landing

Landing Clearance Requirements:
1. Runway confirmation
2. Wind information
3. Altimeter setting
4. Landing distance available
5. Runway surface condition
6. Traffic information

Stable Approach Criteria:
1. On proper glideslope
2. Aligned with runway
3. Correct descent rate
4. Appropriate speed
5. Proper configuration
6. No significant deviations

Tower Communication During Final:
- Confirm landing clearance
- Report established on final
- Report approach stability
- Request go-around if needed
- Report landing completion

Landing Techniques:
1. Maintain approach angle
2. Reduce power smoothly
3. Round out before touchdown
4. Touch down in landing zone
5. Apply reversers/spoilers
6. Brake smoothly and progressively

Crew Coordination:
- Pilot flying calls out configuration
- Pilot monitoring verifies
- Cross-check altitude and speed
- Monitor automation systems
- Call out go-around alternatives
- Communicate with cabin crew
          `,
          audioExplanation: {
            id: 'theory-audio-1',
            text: 'Final approach requires smooth, coordinated flying. Tower provides landing clearance when runway is clear and conditions are safe. Pilot must maintain stable approach and execute smooth landing.',
            audioUrl: '/audio/unit-7/lesson-1/final-theory.wav',
            durationSeconds: 20,
            speaker: 'instructor',
          },
        },
        icaoPhraseoology: {
          category: 'Final Approach and Landing',
          phrases: [
            {
              situation: 'Reporting established on final',
              phrase: 'Established on final approach',
              pronunciation: 'es-TAB-lisht on FY-nul uh-PROHCH',
              meaning: 'Aircraft aligned with runway on descent',
              example: 'November Four Seven Three, established final, runway two eight',
            },
            {
              situation: 'Tower clearing for landing',
              phrase: 'Cleared to land runway two eight left',
              pronunciation: 'KLERD too LAND RUN-way two eight LEFT',
              meaning: 'Permission to proceed with landing',
              example: 'Cleared to land',
            },
            {
              situation: 'Wind information',
              phrase: 'Wind two seven zero at five knots',
              pronunciation: 'WIND two seven zero at five NOTS',
              meaning: 'Wind direction and speed',
              example: 'Wind is light and steady',
            },
            {
              situation: 'Pilot confirming landing',
              phrase: 'Cleared to land runway two eight left, November Four Seven Three',
              pronunciation: 'KLERD too LAND',
              meaning: 'Pilot reading back landing clearance',
              example: 'Cleared to land, number one',
            },
            {
              situation: 'Reporting short final',
              phrase: 'Short final, runway in sight',
              pronunciation: 'SHORT FY-nul, RUN-way in SYT',
              meaning: 'Close to runway threshold',
              example: 'Short final, prepared to land',
            },
            {
              situation: 'Requesting go-around',
              phrase: 'Going around, unstable approach',
              pronunciation: 'GO-ing uh-ROUND, un-STAY-bul uh-PROHCH',
              meaning: 'Aborting landing due to instability',
              example: 'Going around, approach unstable',
            },
            {
              situation: 'Reporting touchdown',
              phrase: 'Touchdown',
              pronunciation: 'TING-down',
              meaning: 'Aircraft wheels contact runway',
              example: 'Touchdown, runway two eight',
            },
            {
              situation: 'Reporting landing complete',
              phrase: 'Landing complete, taxiing to gate',
              pronunciation: 'LAN-ding kum-PLEET, TAK-see-ing too GAYT',
              meaning: 'Aircraft safely on ground and moving',
              example: 'Landing complete, thank you',
            },
          ],
        },
        vocabulary: [
          {
            word: 'final approach',
            pronunciation: 'FY-nul uh-PROHCH',
            definition: 'Last segment before landing',
            example: 'Cleared for final approach',
          },
          {
            word: 'glideslope',
            pronunciation: 'GLYD-slohp',
            definition: 'Descent angle guidance',
            example: 'On glideslope, on localizer',
          },
          {
            word: 'localizer',
            pronunciation: 'LOH-kul-y-zur',
            definition: 'Runway alignment guidance',
            example: 'Established on localizer',
          },
          {
            word: 'stable',
            pronunciation: 'STAY-bul',
            definition: 'Steady, controlled descent',
            example: 'Approach is stable',
          },
          {
            word: 'unstable',
            pronunciation: 'un-STAY-bul',
            definition: 'Uncontrolled or improper descent',
            example: 'Approach is unstable, going around',
          },
          {
            word: 'descent rate',
            pronunciation: 'dih-SENT RAYT',
            definition: 'Altitude loss per minute',
            example: 'Maintain descent rate of five hundred feet per minute',
          },
          {
            word: 'configuration',
            pronunciation: 'kun-fig-yuh-RAY-shun',
            definition: 'Aircraft setup for landing',
            example: 'Landing configuration: flaps, gear down',
          },
          {
            word: 'flare',
            pronunciation: 'FLAIR',
            definition: 'Transition from descent to level',
            example: 'Flare for landing',
          },
          {
            word: 'touchdown',
            pronunciation: 'TING-down',
            definition: 'Wheels contact runway',
            example: 'Touchdown in landing zone',
          },
          {
            word: 'rollout',
            pronunciation: 'ROLL-out',
            definition: 'Aircraft settling after touchdown',
            example: 'Rollout and deceleration',
          },
          {
            word: 'go-around',
            pronunciation: 'GO-uh-ROUND',
            definition: 'Abort landing and climb away',
            example: 'Go-around for safety',
          },
          {
            word: 'reverse thrust',
            pronunciation: 'rih-VERS THRUST',
            definition: 'Engine thrust to slow aircraft',
            example: 'Engage reverse thrust after landing',
          },
          {
            word: 'spoilers',
            pronunciation: 'SPOYL-urs',
            definition: 'Wing devices to reduce lift',
            example: 'Deploy spoilers for braking',
          },
          {
            word: 'autoland',
            pronunciation: 'AW-toh-land',
            definition: 'Automatic landing system',
            example: 'Autoland engaged for precision',
          },
          {
            word: 'approach stability',
            pronunciation: 'uh-PROHCH stuh-BIL-i-tee',
            definition: 'Proper approach conditions',
            example: 'Ensure approach stability before commit',
          },
          {
            word: 'crosswind',
            pronunciation: 'KROSS-wind',
            definition: 'Wind perpendicular to runway',
            example: 'Crosswind limit for aircraft',
          },
          {
            word: 'headwind',
            pronunciation: 'HED-wind',
            definition: 'Wind opposing aircraft',
            example: 'Strong headwind shortens landing',
          },
          {
            word: 'tailwind',
            pronunciation: 'TAYL-wind',
            definition: 'Wind from behind aircraft',
            example: 'Tailwind increases landing distance',
          },
          {
            word: 'landing distance available',
            pronunciation: 'LAN-ding DIS-tens uh-VAIL-uh-bul',
            definition: 'Runway length for landing',
            example: 'Landing distance adequate',
          },
          {
            word: 'roundout',
            pronunciation: 'ROUND-out',
            definition: 'Transition to flare',
            example: 'Begin roundout at fifty feet',
          },
        ],
        grammar: [],
        exercises: [],
        quiz: {
          questions: [
            {
              id: 'q-1',
              question: 'What is "cleared to land"?',
              options: ['Request to land', 'Permission to land', 'Prepared to land', 'Approach clearance'],
              correctAnswer: 1,
              explanation: 'Cleared to land is tower permission to proceed with landing',
            },
            {
              id: 'q-2',
              question: 'What makes an approach "unstable"?',
              options: ['Any deviation', 'Improper descent or alignment', 'Passenger discomfort', 'Crew miscommunication'],
              correctAnswer: 1,
              explanation: 'Unstable approach means improper descent rate, alignment, or speed',
            },
            {
              id: 'q-3',
              question: 'When should go-around be executed?',
              options: ['On tower request only', 'If approach is unstable', 'At pilot discretion always', 'Never during final'],
              correctAnswer: 1,
              explanation: 'Go-around required if approach unstable or other safety concern',
            },
            {
              id: 'q-4',
              question: 'What does "glideslope" provide?',
              options: ['Runway alignment', 'Descent angle guidance', 'Speed reference', 'Altitude floor'],
              correctAnswer: 1,
              explanation: 'Glideslope gives descent angle guidance for precision landing',
            },
            {
              id: 'q-5',
              question: 'What should pilot do after reading back landing clearance?',
              options: ['Land immediately', 'Maintain stable approach', 'Notify cabin crew', 'Reduce speed significantly'],
              correctAnswer: 1,
              explanation: 'Maintain stable approach as planned, execute smooth landing',
            },
          ],
        },
        flashcards: [],
        review: {
          keyPoints: [
            'Maintain stable approach throughout final',
            'Confirm landing clearance read-back',
            'Monitor wind and runway conditions',
            'Execute smooth flare and touchdown',
            'Go-around if approach becomes unstable',
            'Communicate with cabin crew',
          ],
          commonMistakes: [
            'Unstable approach continuation',
            'Late go-around decision',
            'Improper landing configuration',
            'Inadequate wind awareness',
            'Poor crew coordination',
          ],
        },
      },
      {
        id: 'lesson-7-2-post-landing',
        unitId: 'unit-7-landing',
        title: 'Post-Landing Procedures and Communication',
        description: 'Learn post-landing checklist and taxi communication',
        icon: '✅',
        icaoLevel: 4,
        category: 'cabin-crew',
        difficulty: 'elementary',
        xpReward: 125,
        estimatedDurationMinutes: 25,
        locked: false,
        order: 2,
        objectives: [
          { id: 'obj-1', description: 'Execute post-landing checklist', type: 'speaking' },
          { id: 'obj-2', description: 'Contact ground control', type: 'speaking' },
          { id: 'obj-3', description: 'Follow taxi routing', type: 'listening' },
        ],
        scenario: {
          id: 'scenario-1',
          title: 'Post-Landing Taxi to Gate',
          description: 'Contact ground and taxi to gate after landing',
          context: 'Aircraft after landing, proceeding to parking',
          audioSegments: [
            {
              id: 'audio-1',
              text: 'Ground, November Four Seven Three, clear of runway, request taxi to gate',
              audioUrl: '/audio/unit-7/lesson-2/ground-request.wav',
              durationSeconds: 6,
              speaker: 'pilot',
            },
            {
              id: 'audio-2',
              text: 'November Four Seven Three, taxi to gate alpha two, follow the blue lights',
              audioUrl: '/audio/unit-7/lesson-2/ground-taxi.wav',
              durationSeconds: 7,
              speaker: 'instructor',
            },
          ],
          vocabulary: [
            { word: 'clear', definition: 'No longer occupying space', pronunciation: 'KLIR' },
            { word: 'gate', definition: 'Aircraft parking position', pronunciation: 'GAYT' },
          ],
        },
        theory: {
          title: 'Post-Landing Procedures and Ground Operations',
          content: `
Post-landing involves systematic procedures to secure aircraft and move to gate.

Post-Landing Checklist:
1. Confirm landing complete
2. Reduce engine power
3. Extend speed brakes/spoilers
4. Apply wheel brakes smoothly
5. Monitor aircraft status
6. Contact ground control
7. Request taxi clearance
8. Execute landing exit procedure

Exit from Runway:
- Vacate at appropriate taxiway
- Report runway clear to tower
- Monitor ground frequency
- Follow ground control directions
- Taxi at appropriate speed

Ground Control Communications:
- Report position and runway exit
- Receive taxi route
- Acknowledge taxiway assignments
- Report any aircraft issues
- Follow prescribed routing

Taxi to Gate Operations:
- Monitor taxiway signs
- Follow centerline markings
- Maintain safe speed
- Report position changes
- Report reaching gate

Gate Parking Procedures:
- Align with jet bridge
- Shut down engines when at gate
- Set parking brake
- Connect ground power
- Complete shutdown checklist
- Brief cabin crew for disembark

Post-Landing Safety:
- Monitor for emergency equipment
- Ensure no ground personnel in path
- Use wing walkers if needed
- Monitor tire and brake temperature
- Check cabin condition
          `,
          audioExplanation: {
            id: 'theory-audio-1',
            text: 'After landing, aircraft must exit runway safely and follow ground control to gate. Systematic procedures and clear communication ensure safe ground movement and parking.',
            audioUrl: '/audio/unit-7/lesson-2/post-theory.wav',
            durationSeconds: 18,
            speaker: 'instructor',
          },
        },
        icaoPhraseoology: {
          category: 'Post-Landing Operations',
          phrases: [
            {
              situation: 'Reporting clear of runway',
              phrase: 'Clear of runway',
              pronunciation: 'KLIR uv RUN-way',
              meaning: 'Aircraft has exited active runway',
              example: 'November Four Seven Three, clear of runway',
            },
            {
              situation: 'Requesting taxi to gate',
              phrase: 'Request taxi to gate',
              pronunciation: 'rih-KWEST TAK-see too GAYT',
              meaning: 'Asking ground control for routing',
              example: 'Request taxi to gate',
            },
            {
              situation: 'Ground providing taxi route',
              phrase: 'Taxi to gate alpha two, follow blue lights',
              pronunciation: 'TAK-see too GAYT AL-fuh two',
              meaning: 'Ground control giving routing',
              example: 'Taxi via taxiway bravo to gate',
            },
            {
              situation: 'Pilot confirming routing',
              phrase: 'Taxiing to gate alpha two',
              pronunciation: 'TAK-see-ing too GAYT',
              meaning: 'Pilot confirms and acknowledges routing',
              example: 'November Four Seven Three, taxiing to gate',
            },
            {
              situation: 'Reporting at gate',
              phrase: 'At gate, engines shutting down',
              pronunciation: 'at GAYT, EN-jinz SHUT-ing DOWN',
              meaning: 'Aircraft positioned at parking',
              example: 'At gate alpha two',
            },
            {
              situation: 'Reporting aircraft secure',
              phrase: 'Parking brake set, aircraft secure',
              pronunciation: 'PARK-ing BRAYK SET',
              meaning: 'Aircraft properly parked',
              example: 'Aircraft secure, ground power connected',
            },
            {
              situation: 'Post-landing checklist complete',
              phrase: 'Post-landing checklist complete',
              pronunciation: 'POST-LAN-ding CHECK-list kum-PLEET',
              meaning: 'All post-landing procedures finished',
              example: 'Checklist complete, ready for crew briefing',
            },
            {
              situation: 'Cabin crew briefing',
              phrase: 'Cabin crew, prepare for disembarkation',
              pronunciation: 'KAB-in KROO, prih-PAIR for dis-bar-KAY-shun',
              meaning: 'Inform crew passengers may exit',
              example: 'Cabin crew, we are at gate',
            },
          ],
        },
        vocabulary: [
          {
            word: 'clear of runway',
            pronunciation: 'KLIR uv RUN-way',
            definition: 'No longer on active runway',
            example: 'November Four Seven Three, clear of runway',
          },
          {
            word: 'exit',
            pronunciation: 'EG-zit',
            definition: 'Leave runway onto taxiway',
            example: 'Exit runway at taxiway alpha',
          },
          {
            word: 'taxi',
            pronunciation: 'TAK-see',
            definition: 'Move on ground under own power',
            example: 'Taxi to gate',
          },
          {
            word: 'gate',
            pronunciation: 'GAYT',
            definition: 'Aircraft parking position',
            example: 'Proceed to gate alpha two',
          },
          {
            word: 'taxiway',
            pronunciation: 'TAK-see-way',
            definition: 'Ground path for aircraft movement',
            example: 'Follow taxiway bravo',
          },
          {
            word: 'jet bridge',
            pronunciation: 'JET BRIJ',
            definition: 'Passenger boarding bridge',
            example: 'Align aircraft with jet bridge',
          },
          {
            word: 'parking brake',
            pronunciation: 'PARK-ing BRAYK',
            definition: 'Brake holding aircraft in place',
            example: 'Set parking brake',
          },
          {
            word: 'ground power',
            pronunciation: 'GROUND POW-ur',
            definition: 'Electrical power from airport',
            example: 'Connect ground power unit',
          },
          {
            word: 'shutdown',
            pronunciation: 'SHUT-down',
            definition: 'Turn off aircraft engines',
            example: 'Engine shutdown complete',
          },
          {
            word: 'checklist',
            pronunciation: 'CHECK-list',
            definition: 'Systematic procedure verification',
            example: 'Complete post-landing checklist',
          },
          {
            word: 'brief',
            pronunciation: 'BREEF',
            definition: 'Provide information to crew',
            example: 'Brief cabin crew on status',
          },
          {
            word: 'disembarkation',
            pronunciation: 'dis-bar-KAY-shun',
            definition: 'Passengers exiting aircraft',
            example: 'Prepare for disembarkation',
          },
          {
            word: 'secure',
            pronunciation: 'sih-KYOOR',
            definition: 'Make safe and stationary',
            example: 'Aircraft secure at gate',
          },
          {
            word: 'position',
            pronunciation: 'puh-ZISH-un',
            definition: 'Location or placement',
            example: 'Position at gate complete',
          },
          {
            word: 'alignment',
            pronunciation: 'uh-LYN-ment',
            definition: 'Proper positioning',
            example: 'Alignment with jet bridge',
          },
          {
            word: 'center line',
            pronunciation: 'SEN-tur LYN',
            definition: 'Taxiway guidance marking',
            example: 'Follow center line to gate',
          },
          {
            word: 'holding point',
            pronunciation: 'HOLD-ing POINT',
            definition: 'Wait position',
            example: 'Hold at taxiway intersection',
          },
          {
            word: 'report',
            pronunciation: 'rih-PORT',
            definition: 'Inform ATC of status',
            example: 'Report at gate',
          },
          {
            word: 'acknowledge',
            pronunciation: 'ak-NOL-ij',
            definition: 'Confirm receipt of information',
            example: 'Acknowledge taxi route',
          },
          {
            word: 'complete',
            pronunciation: 'kum-PLEET',
            definition: 'Finished or done',
            example: 'Procedures complete',
          },
        ],
        grammar: [],
        exercises: [],
        quiz: {
          questions: [
            {
              id: 'q-1',
              question: 'What should pilot report after landing?',
              options: ['Passenger count', 'Clear of runway', 'Favorite airline', 'Crew names'],
              correctAnswer: 1,
              explanation: 'Report clear of runway to tower, then contact ground',
            },
            {
              id: 'q-2',
              question: 'Who provides taxi routing after landing?',
              options: ['Tower', 'Ground control', 'Approach', 'Center'],
              correctAnswer: 1,
              explanation: 'Ground control provides taxi route to gate',
            },
            {
              id: 'q-3',
              question: 'What does "secure aircraft" mean?',
              options: ['Lock doors', 'Set parking brake and stabilize', 'Hide aircraft', 'Call security'],
              correctAnswer: 1,
              explanation: 'Secure means parking brake set, engines shut down, aircraft stable',
            },
            {
              id: 'q-4',
              question: 'When should ground power be connected?',
              options: ['During flight', 'After parking at gate', 'Never', 'Before takeoff'],
              correctAnswer: 1,
              explanation: 'Ground power connected after aircraft parked at gate',
            },
            {
              id: 'q-5',
              question: 'What is jet bridge?',
              options: ['Aircraft bridge connection', 'Passenger boarding bridge', 'Runway access', 'Taxiway name'],
              correctAnswer: 1,
              explanation: 'Jet bridge is structure connecting aircraft to terminal',
            },
          ],
        },
        flashcards: [],
        review: {
          keyPoints: [
            'Report clear of runway immediately',
            'Contact ground control for routing',
            'Follow assigned taxiway path',
            'Monitor position and braking',
            'Position properly at gate',
            'Complete shutdown checklist',
          ],
          commonMistakes: [
            'Delaying runway clear report',
            'Taxiing to wrong gate',
            'Excessive taxi speed',
            'Not following centerline',
            'Late checklist completion',
          ],
        },
      },
      {
        id: 'lesson-7-3-emergency-landing',
        unitId: 'unit-7-landing',
        title: 'Emergency Landing Procedures',
        description: 'Learn emergency landing communication and procedures',
        icon: '🚨',
        icaoLevel: 5,
        category: 'cabin-crew',
        difficulty: 'intermediate',
        xpReward: 150,
        estimatedDurationMinutes: 35,
        locked: false,
        order: 3,
        objectives: [
          { id: 'obj-1', description: 'Declare emergency', type: 'speaking' },
          { id: 'obj-2', description: 'Request priority landing', type: 'speaking' },
          { id: 'obj-3', description: 'Coordinate emergency services', type: 'speaking' },
        ],
        scenario: {
          id: 'scenario-1',
          title: 'Emergency Landing Declaration',
          description: 'Declare emergency and request priority landing',
          context: 'Aircraft with critical system failure',
          audioSegments: [
            {
              id: 'audio-1',
              text: 'Mayday, Mayday. Hydraulic system failure, request immediate descent and priority landing',
              audioUrl: '/audio/unit-7/lesson-3/emergency-decl.wav',
              durationSeconds: 8,
              speaker: 'pilot',
            },
            {
              id: 'audio-2',
              text: 'Understood. Descend immediately to two thousand feet, emergency services standing by',
              audioUrl: '/audio/unit-7/lesson-3/emergency-response.wav',
              durationSeconds: 7,
              speaker: 'instructor',
            },
          ],
          vocabulary: [
            { word: 'emergency', definition: 'Serious situation requiring immediate action', pronunciation: 'ee-MER-jen-see' },
          ],
        },
        theory: {
          title: 'Emergency Landing Procedures and Coordination',
          content: `
Emergency landings require immediate, coordinated response.

Types of Emergencies:
1. Engine failure or fire
2. Hydraulic system loss
3. Electrical system failure
4. Pressurization failure
5. Fire or smoke in cabin
6. Medical emergency aboard
7. Security threat
8. Structural damage

Emergency Declaration Process:
1. Assess situation severity
2. Use appropriate emergency phraseology
3. Request immediate assistance
4. Declare intentions clearly
5. Request priority handling
6. Provide aircraft information
7. Request emergency services

ATC Response to Emergency:
- Clear all traffic from path
- Provide priority routing
- Request nearest suitable airport
- Notify emergency services
- Provide navigation assistance
- Monitor aircraft status
- Coordinate ground response

Crew Procedures:
- Execute emergency checklist
- Stabilize aircraft systems
- Reduce altitude if needed
- Plan diversion to nearest airport
- Notify cabin crew
- Prepare passengers for emergency landing
- Brief on emergency procedures

Emergency Services Coordination:
- Fire trucks standing by runway
- Ambulances positioned
- Security forces alerted
- Hospital notification
- Media management
- Incident investigation

Communication Priority:
- Mayday call takes priority
- All other traffic clears
- Silence enforced on frequency
- Simplified communications only
- Immediate vector to airport
          `,
          audioExplanation: {
            id: 'theory-audio-1',
            text: 'Emergency landing requires declaring mayday, providing critical information, and accepting ATC guidance immediately. All other traffic clears. Emergency services mobilize. Safety of flight takes absolute priority.',
            audioUrl: '/audio/unit-7/lesson-3/emergency-theory.wav',
            durationSeconds: 21,
            speaker: 'instructor',
          },
        },
        icaoPhraseoology: {
          category: 'Emergency Landing',
          phrases: [
            {
              situation: 'Declaring life-threatening emergency',
              phrase: 'Mayday, Mayday, Mayday',
              pronunciation: 'MAY-day',
              meaning: 'Life-threatening emergency, request immediate assistance',
              example: 'Mayday, Mayday. Hydraulic failure, request descent',
            },
            {
              situation: 'Declaring urgent situation',
              phrase: 'Pan, Pan, Pan',
              pronunciation: 'PAN',
              meaning: 'Urgent situation but not immediately life-threatening',
              example: 'Pan, Pan. Engine failure, request descent',
            },
            {
              situation: 'Requesting priority descent',
              phrase: 'Request immediate descent',
              pronunciation: 'rih-KWEST i-MEE-dut dih-SENT',
              meaning: 'Need to lower altitude urgently',
              example: 'Request immediate descent to nearest airport',
            },
            {
              situation: 'Declaring emergency landing intention',
              phrase: 'Declare emergency landing, request priority approach',
              pronunciation: 'dih-KLAIR ee-MER-jen-see LAN-ding',
              meaning: 'Intending to land due to emergency',
              example: 'Declare emergency, proceeding to nearest suitable airport',
            },
            {
              situation: 'Providing emergency details',
              phrase: 'System failure, hydraulic pressure loss',
              pronunciation: 'SIS-tem FAYL-yur, hy-DRAW-lik PRESH-ur LOSS',
              meaning: 'Describing nature of problem',
              example: 'Hydraulic system failed, aircraft control degraded',
            },
            {
              situation: 'Requesting emergency services',
              phrase: 'Request emergency services standing by',
              pronunciation: 'rih-KWEST ee-MER-jen-see SER-vis-ez',
              meaning: 'Ask ground to prepare fire, ambulance, rescue',
              example: 'Request fire trucks and ambulances standing by',
            },
            {
              situation: 'Updating emergency status',
              phrase: 'Situation stabilized, proceeding to land',
              pronunciation: 'sit-choo-AY-shun STAY-buh-lyzd',
              meaning: 'Condition improved or controlled',
              example: 'Fire extinguished, proceeding to land',
            },
            {
              situation: 'Confirming emergency landing',
              phrase: 'Emergency landing imminent',
              pronunciation: 'ee-MER-jen-see LAN-ding IM-i-nent',
              meaning: 'Landing happening immediately',
              example: 'Emergency landing in five minutes',
            },
          ],
        },
        vocabulary: [
          {
            word: 'mayday',
            pronunciation: 'MAY-day',
            definition: 'International distress signal',
            example: 'Mayday declares life-threatening emergency',
          },
          {
            word: 'pan',
            pronunciation: 'PAN',
            definition: 'Urgent situation signal',
            example: 'Pan indicates urgent but stable situation',
          },
          {
            word: 'emergency landing',
            pronunciation: 'ee-MER-jen-see LAN-ding',
            definition: 'Unscheduled landing for urgent reason',
            example: 'Emergency landing required',
          },
          {
            word: 'priority',
            pronunciation: 'pry-OR-i-tee',
            definition: 'Precedence in handling',
            example: 'Emergency gets priority handling',
          },
          {
            word: 'descent',
            pronunciation: 'dih-SENT',
            definition: 'Lower altitude movement',
            example: 'Immediate descent approved',
          },
          {
            word: 'emergency services',
            pronunciation: 'ee-MER-jen-see SER-vis-ez',
            definition: 'Fire, ambulance, rescue response',
            example: 'Emergency services standing by',
          },
          {
            word: 'fire truck',
            pronunciation: 'FYR TRUK',
            definition: 'Emergency fire response vehicle',
            example: 'Fire trucks positioned at runway',
          },
          {
            word: 'ambulance',
            pronunciation: 'AM-byuh-lens',
            definition: 'Emergency medical transport',
            example: 'Ambulances standing by',
          },
          {
            word: 'rescue',
            pronunciation: 'RES-kyoo',
            definition: 'Emergency extraction services',
            example: 'Rescue teams alerted',
          },
          {
            word: 'stabilize',
            pronunciation: 'STAY-buh-lyz',
            definition: 'Control or manage situation',
            example: 'Stabilize aircraft systems',
          },
          {
            word: 'contingency',
            pronunciation: 'kun-TIN-jen-see',
            definition: 'Emergency plan or option',
            example: 'Contingency planning for emergencies',
          },
          {
            word: 'declare',
            pronunciation: 'dih-KLAIR',
            definition: 'Formally announce',
            example: 'Declare emergency to ATC',
          },
          {
            word: 'imminent',
            pronunciation: 'IM-i-nent',
            definition: 'About to happen',
            example: 'Emergency landing imminent',
          },
          {
            word: 'priority approach',
            pronunciation: 'pry-OR-i-tee uh-PROHCH',
            definition: 'Expedited landing clearance',
            example: 'Request priority approach clearance',
          },
          {
            word: 'nearest suitable airport',
            pronunciation: 'NIR-est SOO-tuh-bul AIR-port',
            definition: 'Closest airport with required facilities',
            example: 'Proceeding to nearest suitable airport',
          },
          {
            word: 'hydraulic system',
            pronunciation: 'hy-DRAW-lik SIS-tem',
            definition: 'Aircraft control fluid power',
            example: 'Hydraulic system failure reported',
          },
          {
            word: 'fire',
            pronunciation: 'FYR',
            definition: 'Uncontrolled flame',
            example: 'Engine fire reported',
          },
          {
            word: 'smoke',
            pronunciation: 'SMOHK',
            definition: 'Visible combustion byproduct',
            example: 'Smoke in cabin reported',
          },
          {
            word: 'structural',
            pronunciation: 'STRUK-chur-ul',
            definition: 'Related to aircraft frame',
            example: 'Structural damage assessment',
          },
          {
            word: 'system failure',
            pronunciation: 'SIS-tem FAYL-yur',
            definition: 'Equipment malfunction',
            example: 'Critical system failure',
          },
        ],
        grammar: [],
        exercises: [],
        quiz: {
          questions: [
            {
              id: 'q-1',
              question: 'What does "Mayday" indicate?',
              options: ['Good morning', 'Life-threatening emergency', 'Non-urgent request', 'Weather report'],
              correctAnswer: 1,
              explanation: 'Mayday is international distress signal for life-threatening emergency',
            },
            {
              id: 'q-2',
              question: 'What does ATC do when hearing Mayday?',
              options: ['Continues normal operations', 'Clears traffic and provides priority', 'Ignores it', 'Records for later'],
              correctAnswer: 1,
              explanation: 'ATC immediately clears all traffic and provides emergency handling',
            },
            {
              id: 'q-3',
              question: 'What should pilot include in emergency declaration?',
              options: ['Crew names', 'Nature of emergency and assistance needed', 'Passenger list', 'Favorite radio station'],
              correctAnswer: 1,
              explanation: 'Emergency declaration must describe problem and request',
            },
            {
              id: 'q-4',
              question: 'What services respond to emergency landing?',
              options: ['Only police', 'Fire, ambulance, rescue coordination', 'Just ground crew', 'No services'],
              correctAnswer: 1,
              explanation: 'Multiple emergency services respond to declared landing emergency',
            },
            {
              id: 'q-5',
              question: 'When should emergency be declared?',
              options: ['At discretion', 'After landing', 'Immediately when safety threatened', 'Never'],
              correctAnswer: 2,
              explanation: 'Declare emergency immediately when aircraft or persons threatened',
            },
          ],
        },
        flashcards: [],
        review: {
          keyPoints: [
            'Declare emergency immediately if needed',
            'Use correct phraseology (Mayday or Pan)',
            'Provide clear problem description',
            'Request immediate assistance',
            'Follow ATC guidance precisely',
            'Coordinate with emergency services',
          ],
          commonMistakes: [
            'Delaying emergency declaration',
            'Inadequate problem description',
            'Poor communication clarity',
            'Ignoring ATC guidance',
            'Inadequate crew coordination',
          ],
        },
      },
    ],
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
    lessons: [
      {
        id: 'lesson-8-1-gate-procedures',
        unitId: 'unit-8-ground-final',
        title: 'Gate Procedures and Aircraft Positioning',
        description: 'Learn gate parking and aircraft preparation',
        icon: '🚪',
        icaoLevel: 4,
        category: 'cabin-crew',
        difficulty: 'elementary',
        xpReward: 125,
        estimatedDurationMinutes: 25,
        locked: false,
        order: 1,
        objectives: [
          { id: 'obj-1', description: 'Position aircraft at gate', type: 'speaking' },
          { id: 'obj-2', description: 'Secure aircraft properly', type: 'speaking' },
          { id: 'obj-3', description: 'Coordinate with ground crew', type: 'speaking' },
        ],
        scenario: {
          id: 'scenario-1',
          title: 'Gate Positioning and Crew Coordination',
          description: 'Coordinate positioning at gate with ground crew',
          context: 'Aircraft at gate after flight',
          audioSegments: [
            {
              id: 'audio-1',
              text: 'Ground, November Four Seven Three, approaching gate alpha two, request alignment instructions',
              audioUrl: '/audio/unit-8/lesson-1/gate-approach.wav',
              durationSeconds: 7,
              speaker: 'pilot',
            },
            {
              id: 'audio-2',
              text: 'November Four Seven Three, position is good. Shuttle is standing by when ready',
              audioUrl: '/audio/unit-8/lesson-1/ground-clear.wav',
              durationSeconds: 6,
              speaker: 'ground-crew',
            },
          ],
          vocabulary: [
            { word: 'gate', definition: 'Aircraft parking position at terminal', pronunciation: 'GAYT' },
            { word: 'jet bridge', definition: 'Passenger boarding connector', pronunciation: 'JET BRIJ' },
          ],
        },
        theory: {
          title: 'Gate Procedures and Aircraft Positioning',
          content: `
Gate positioning requires coordination between flight crew and ground personnel.

Gate Positioning Requirements:
1. Align with jet bridge
2. Maintain proper distance
3. Monitor wing clearance
4. Approach at low speed
5. Communicate with ground personnel
6. Use marshaller signals
7. Stop at correct position
8. Set parking brake

Ground Crew Coordination:
- Wing walkers position aircraft
- Marshaller directs pilot
- Ground equipment personnel ready
- Safety lookouts monitoring
- Catering staff on standby
- Cleaning crews ready
- Baggage handlers positioned

Aircraft Securing Procedures:
1. Parking brake engaged
2. Engines shut down
3. Ground power connected
4. Hydraulic systems secured
5. Electrical systems stabilized
6. Water/waste systems managed
7. Cargo doors secured
8. Aircraft locked down

Gate Operations Communication:
- Position reports to ground
- Equipment status updates
- Timeline coordination
- Safety concerns reporting
- Special handling requests
- Passenger and crew updates

Safety Considerations:
- Jet bridge alignment
- Wing clearance
- Tail clearance
- Cabin door access
- Emergency equipment access
- Tug positioning
- Push-back readiness
          `,
          audioExplanation: {
            id: 'theory-audio-1',
            text: 'Gate positioning is precise operation requiring coordination between flight crew and ground personnel. Aircraft must be positioned carefully for passenger boarding, cargo handling, and servicing.',
            audioUrl: '/audio/unit-8/lesson-1/gate-theory.wav',
            durationSeconds: 19,
            speaker: 'instructor',
          },
        },
        icaoPhraseoology: {
          category: 'Gate Operations',
          phrases: [
            {
              situation: 'Requesting approach to gate',
              phrase: 'Request approach to gate',
              pronunciation: 'rih-KWEST uh-PROHCH too GAYT',
              meaning: 'Pilot requesting permission to move to gate',
              example: 'Request approach to gate alpha two',
            },
            {
              situation: 'Ground providing positioning guidance',
              phrase: 'Position is good, jet bridge aligned',
              pronunciation: 'puh-ZISH-un is GOOD, JET BRIJ uh-LYND',
              meaning: 'Pilot correctly positioned at gate',
              example: 'Positioning looks good',
            },
            {
              situation: 'Reporting at gate',
              phrase: 'At gate, parking brake set',
              pronunciation: 'at GAYT, PARK-ing BRAYK SET',
              meaning: 'Aircraft positioned and secured',
              example: 'At gate alpha two, parking brake set',
            },
            {
              situation: 'Coordinating with ground crew',
              phrase: 'Ground crew, ready for boarding',
              pronunciation: 'GROUND KROO, RED-ee for BORD-ing',
              meaning: 'Informing ground operations',
              example: 'Ground, aircraft ready for service',
            },
            {
              situation: 'Announcing engine shutdown',
              phrase: 'Engines shutting down',
              pronunciation: 'EN-jinz SHUT-ing DOWN',
              meaning: 'Turning off main engines',
              example: 'Engines off, all clear',
            },
            {
              situation: 'Connecting ground power',
              phrase: 'Ground power connected',
              pronunciation: 'GROUND POW-ur kun-EK-ted',
              meaning: 'External power source connected',
              example: 'Ground power is on',
            },
            {
              situation: 'Briefing for disembarkation',
              phrase: 'Cabin crew, prepare for disembarkation',
              pronunciation: 'KAB-in KROO, prih-PAIR for dis-bar-KAY-shun',
              meaning: 'Readying passengers to exit',
              example: 'Prepare cabin for passenger exit',
            },
            {
              situation: 'Coordinating jet bridge',
              phrase: 'Jet bridge can be attached',
              pronunciation: 'JET BRIJ kan bee uh-TACHT',
              meaning: 'Aircraft properly positioned for boarding',
              example: 'Jet bridge is aligned',
            },
          ],
        },
        vocabulary: [
          {
            word: 'gate',
            pronunciation: 'GAYT',
            definition: 'Aircraft parking and boarding position',
            example: 'Aircraft at gate alpha two',
          },
          {
            word: 'jet bridge',
            pronunciation: 'JET BRIJ',
            definition: 'Passenger boarding tunnel',
            example: 'Jet bridge connected to door',
          },
          {
            word: 'marshaller',
            pronunciation: 'MAR-shul-ur',
            definition: 'Ground personnel directing aircraft',
            example: 'Marshaller guided aircraft to gate',
          },
          {
            word: 'wing walker',
            pronunciation: 'WING WAW-kur',
            definition: 'Personnel monitoring wing clearance',
            example: 'Wing walkers checking clearance',
          },
          {
            word: 'parking brake',
            pronunciation: 'PARK-ing BRAYK',
            definition: 'Brake holding aircraft in place',
            example: 'Set parking brake at gate',
          },
          {
            word: 'ground power',
            pronunciation: 'GROUND POW-ur',
            definition: 'External electrical source',
            example: 'Connect ground power',
          },
          {
            word: 'ground equipment',
            pronunciation: 'GROUND i-KWIP-ment',
            definition: 'Vehicles and devices for servicing',
            example: 'Ground equipment standing by',
          },
          {
            word: 'boarding',
            pronunciation: 'BORD-ing',
            definition: 'Passengers entering aircraft',
            example: 'Boarding in progress',
          },
          {
            word: 'disembarkation',
            pronunciation: 'dis-bar-KAY-shun',
            definition: 'Passengers exiting aircraft',
            example: 'Disembarkation complete',
          },
          {
            word: 'catering',
            pronunciation: 'KAY-tur-ing',
            definition: 'Food and beverage service',
            example: 'Catering truck approaching',
          },
          {
            word: 'baggage handler',
            pronunciation: 'BAG-ij HAN-dur-ur',
            definition: 'Ground personnel handling luggage',
            example: 'Baggage handlers loading aircraft',
          },
          {
            word: 'baggage cart',
            pronunciation: 'BAG-ij KART',
            definition: 'Vehicle for baggage transport',
            example: 'Baggage carts queued at gate',
          },
          {
            word: 'tug',
            pronunciation: 'TUG',
            definition: 'Aircraft towing vehicle',
            example: 'Tug standing by for push-back',
          },
          {
            word: 'push-back',
            pronunciation: 'PUSH-bak',
            definition: 'Towing aircraft from gate',
            example: 'Push-back when all clear',
          },
          {
            word: 'alignment',
            pronunciation: 'uh-LYN-ment',
            definition: 'Proper positioning',
            example: 'Jet bridge alignment complete',
          },
          {
            word: 'clearance',
            pronunciation: 'KLIR-ens',
            definition: 'Space or permission to proceed',
            example: 'All clear for boarding',
          },
          {
            word: 'position',
            pronunciation: 'puh-ZISH-un',
            definition: 'Location or placement',
            example: 'Aircraft in position at gate',
          },
          {
            word: 'secure',
            pronunciation: 'sih-KYOOR',
            definition: 'Make safe and immobile',
            example: 'Aircraft secured at gate',
          },
          {
            word: 'shuttle',
            pronunciation: 'SHUT-ul',
            definition: 'Crew transport vehicle',
            example: 'Shuttle standing by for crew',
          },
          {
            word: 'coordination',
            pronunciation: 'koh-or-di-NAY-shun',
            definition: 'Working together',
            example: 'Ground and crew coordination',
          },
        ],
        grammar: [],
        exercises: [],
        quiz: {
          questions: [
            {
              id: 'q-1',
              question: 'Who directs aircraft during gate positioning?',
              options: ['Passengers', 'Marshaller on ground', 'Pilot alone', 'Gate agent'],
              correctAnswer: 1,
              explanation: 'Marshaller directs pilot into gate position',
            },
            {
              id: 'q-2',
              question: 'What is jet bridge?',
              options: ['Aircraft structure', 'Passenger boarding tunnel', 'Towing vehicle', 'Ground equipment'],
              correctAnswer: 1,
              explanation: 'Jet bridge connects terminal to aircraft door',
            },
            {
              id: 'q-3',
              question: 'What signals gate positioning completion?',
              options: ['Engines off', 'Parking brake set', 'Jet bridge aligned', 'All of above'],
              correctAnswer: 3,
              explanation: 'Complete positioning includes engine shutdown, brake, and alignment',
            },
            {
              id: 'q-4',
              question: 'When should ground power be connected?',
              options: ['Before landing', 'During flight', 'After parking at gate', 'Never'],
              correctAnswer: 2,
              explanation: 'Ground power connects after aircraft secured at gate',
            },
            {
              id: 'q-5',
              question: 'What is wing walker role?',
              options: ['Transport baggage', 'Monitor wing clearance', 'Drive tug', 'Board passengers'],
              correctAnswer: 1,
              explanation: 'Wing walkers ensure wings clear obstacles during positioning',
            },
          ],
        },
        flashcards: [],
        review: {
          keyPoints: [
            'Follow marshaller signals during positioning',
            'Monitor wing and tail clearance',
            'Set parking brake at gate',
            'Coordinate with ground crew',
            'Connect ground power after parking',
            'Brief cabin crew for disembarkation',
          ],
          commonMistakes: [
            'Inaccurate positioning',
            'Ignoring marshaller signals',
            'Not monitoring clearance',
            'Late brake setting',
            'Poor crew coordination',
          ],
        },
      },
      {
        id: 'lesson-8-2-passenger-disembark',
        unitId: 'unit-8-ground-final',
        title: 'Passenger Disembarkation and Farewell',
        description: 'Learn passenger exit procedures and crew communication',
        icon: '👋',
        icaoLevel: 4,
        category: 'cabin-crew',
        difficulty: 'elementary',
        xpReward: 100,
        estimatedDurationMinutes: 20,
        locked: false,
        order: 2,
        objectives: [
          { id: 'obj-1', description: 'Prepare cabin for disembarkation', type: 'speaking' },
          { id: 'obj-2', description: 'Assist passengers with exit', type: 'speaking' },
          { id: 'obj-3', description: 'Ensure safe disembarkation', type: 'listening' },
        ],
        scenario: {
          id: 'scenario-1',
          title: 'Passenger Disembarkation',
          description: 'Coordinate passenger exit from aircraft',
          context: 'Flight completed, passengers preparing to exit',
          audioSegments: [
            {
              id: 'audio-1',
              text: 'Cabin crew, aircraft is secure. Prepare cabin for disembarkation. Flight deck, all doors will be opened.',
              audioUrl: '/audio/unit-8/lesson-2/disembark-brief.wav',
              durationSeconds: 8,
              speaker: 'pilot',
            },
            {
              id: 'audio-2',
              text: 'Ladies and gentlemen, we have arrived at our destination. Thank you for flying with us. Please remain seated until the aircraft comes to a complete stop.',
              audioUrl: '/audio/unit-8/lesson-2/disembark-announcement.wav',
              durationSeconds: 9,
              speaker: 'crew',
            },
          ],
          vocabulary: [
            { word: 'disembark', definition: 'Exit aircraft', pronunciation: 'dis-BARK' },
            { word: 'arrive', definition: 'Reach destination', pronunciation: 'uh-RYV' },
          ],
        },
        theory: {
          title: 'Passenger Disembarkation Procedures',
          content: `
Disembarkation requires coordinated procedures for safe, orderly passenger exit.

Pre-Disembarkation Preparation:
1. All doors armed and ready
2. Cabin crew briefed on procedures
3. Jet bridge aligned and ready
4. Safety announcement made
5. Seatbelt sign turned off
6. Cabin secured

Disembarkation Announcement:
- Thank passengers for flying
- Announce arrival time
- Announce local time and weather
- Remind of seat belt requirement
- Request orderly deplaning
- Point out exit doors

Crew Responsibilities:
1. Open cabin doors
2. Position at exits
3. Direct passenger flow
4. Assist elderly or disabled
5. Monitor baggage removal
6. Ensure no left-behinds
7. Account for all passengers
8. Brief on connecting flights

Special Passenger Assistance:
- Wheelchair-bound passengers
- Unaccompanied minors
- Passengers needing assistance
- Connecting flight passengers
- VIP passengers
- Crew or employees

Ground Coordination:
- Gate agent timing
- Baggage handling start
- Connecting passenger info
- Special service requests
- Crew relief coordination
- Aircraft cleaning schedule

Farewell and Thanks:
- Professional farewell
- Thank passengers
- Request feedback
- Promote future flights
- Professional demeanor
- Smile and eye contact
          `,
          audioExplanation: {
            id: 'theory-audio-1',
            text: 'Disembarkation is final passenger contact point. Professional, courteous crew ensures safe exit and positive lasting impression. Thank passengers genuinely and professionally.',
            audioUrl: '/audio/unit-8/lesson-2/disembark-theory.wav',
            durationSeconds: 18,
            speaker: 'instructor',
          },
        },
        icaoPhraseoology: {
          category: 'Passenger Disembarkation',
          phrases: [
            {
              situation: 'Briefing cabin for disembarkation',
              phrase: 'Prepare cabin for disembarkation',
              pronunciation: 'prih-PAIR KAB-in for dis-bar-KAY-shun',
              meaning: 'Crew gets ready for passenger exit',
              example: 'Cabin crew, prepare for disembarkation',
            },
            {
              situation: 'Welcoming passengers at gate',
              phrase: 'Welcome to our destination',
              pronunciation: 'WEL-kum too our des-ti-NAY-shun',
              meaning: 'Greeting upon arrival',
              example: 'Welcome to our destination city',
            },
            {
              situation: 'Announcing disembarkation',
              phrase: 'We have arrived, thank you for flying',
              pronunciation: 'wee hav uh-RYVd, thank YOO for FLYH-ing',
              meaning: 'Formal disembarkation announcement',
              example: 'Ladies and gentlemen, we have arrived',
            },
            {
              situation: 'Directing passenger exit',
              phrase: 'Please exit through the forward door',
              pronunciation: 'pleez EG-zit throo the FOR-word DOR',
              meaning: 'Instructing passenger route',
              example: 'Please proceed to the jet bridge',
            },
            {
              situation: 'Assisting passengers',
              phrase: 'May I assist you with your baggage?',
              pronunciation: 'may I uh-SIST yoo with your BAG-ij',
              meaning: 'Offering help to passenger',
              example: 'Can I help with your luggage?',
            },
            {
              situation: 'Professional farewell',
              phrase: 'Thank you for flying with us',
              pronunciation: 'thank YOO for FLYH-ing with US',
              meaning: 'Professional farewell',
              example: 'Thank you and have a great day',
            },
            {
              situation: 'Assisting special passengers',
              phrase: 'We will help you with wheelchair assistance',
              pronunciation: 'wee will help yoo with HWEEL-chair uh-SIS-tence',
              meaning: 'Coordinating special assistance',
              example: 'Wheelchair will be available at gate',
            },
            {
              situation: 'Unaccompanied minor notification',
              phrase: 'Young passenger, please wait for assistance',
              pronunciation: 'YUNG PAY-sen-jer, pleez WAYT for uh-SIS-tence',
              meaning: 'Ensuring minor care at gate',
              example: 'Supervisor will meet you at gate',
            },
          ],
        },
        vocabulary: [
          {
            word: 'disembark',
            pronunciation: 'dis-BARK',
            definition: 'Exit aircraft',
            example: 'Passengers disembark via jet bridge',
          },
          {
            word: 'arrive',
            pronunciation: 'uh-RYV',
            definition: 'Reach destination',
            example: 'Aircraft arrives at gate',
          },
          {
            word: 'destination',
            pronunciation: 'des-ti-NAY-shun',
            definition: 'Final landing location',
            example: 'Welcome to destination',
          },
          {
            word: 'departure',
            pronunciation: 'dih-PAR-chur',
            definition: 'Leaving point or act of leaving',
            example: 'Thank you for departure',
          },
          {
            word: 'exit',
            pronunciation: 'EG-zit',
            definition: 'Leave aircraft',
            example: 'Proceed to exit',
          },
          {
            word: 'jet bridge',
            pronunciation: 'JET BRIJ',
            definition: 'Passenger boarding connector',
            example: 'Exit via jet bridge',
          },
          {
            word: 'gate',
            pronunciation: 'GAYT',
            definition: 'Boarding/parking position',
            example: 'Proceed to gate',
          },
          {
            word: 'baggage',
            pronunciation: 'BAG-ij',
            definition: 'Passenger luggage',
            example: 'Baggage will be available at carousel',
          },
          {
            word: 'connecting flight',
            pronunciation: 'kuh-NEK-ting FLYHT',
            definition: 'Flight between two cities',
            example: 'Connecting flight departs later',
          },
          {
            word: 'wheelchair',
            pronunciation: 'HWEEL-chair',
            definition: 'Mobility device',
            example: 'Wheelchair assistance available',
          },
          {
            word: 'assistance',
            pronunciation: 'uh-SIS-tence',
            definition: 'Help provided',
            example: 'Special assistance available',
          },
          {
            word: 'unaccompanied minor',
            pronunciation: 'un-uh-KUM-puh-need MY-ner',
            definition: 'Child traveling alone',
            example: 'Unaccompanied minor met at gate',
          },
          {
            word: 'supervisor',
            pronunciation: 'SOO-pur-vy-zur',
            definition: 'Supervisor or authority',
            example: 'Supervisor will meet passenger',
          },
          {
            word: 'professional',
            pronunciation: 'pruh-FESH-un-ul',
            definition: 'Expert or courteous manner',
            example: 'Professional farewell appreciated',
          },
          {
            word: 'courtesy',
            pronunciation: 'KER-ti-see',
            definition: 'Polite behavior',
            example: 'Courtesy appreciated by passengers',
          },
          {
            word: 'grateful',
            pronunciation: 'GRAYT-ful',
            definition: 'Thankful',
            example: 'We are grateful for flying',
          },
          {
            word: 'welcome',
            pronunciation: 'WEL-kum',
            definition: 'Warm greeting',
            example: 'Welcome to destination city',
          },
          {
            word: 'pleasant',
            pronunciation: 'PLEZ-ent',
            definition: 'Agreeable or nice',
            example: 'Pleasant flight experience',
          },
          {
            word: 'complimentary',
            pronunciation: 'kom-pli-MEN-tar-ee',
            definition: 'Praise or express approval',
            example: 'Complimentary remarks appreciated',
          },
          {
            word: 'feedback',
            pronunciation: 'FEED-bak',
            definition: 'Passenger comments or evaluation',
            example: 'We value your feedback',
          },
        ],
        grammar: [],
        exercises: [],
        quiz: {
          questions: [
            {
              id: 'q-1',
              question: 'What should cabin crew do first after parking?',
              options: ['Open all doors', 'Announce arrival', 'Prepare cabin for disembarkation', 'Collect baggage'],
              correctAnswer: 2,
              explanation: 'Crew must prepare cabin before opening doors',
            },
            {
              id: 'q-2',
              question: 'How should crew assist special passengers?',
              options: ['Ignore them', 'Offer specific help', 'Rush process', 'Complain about delays'],
              correctAnswer: 1,
              explanation: 'Crew must identify and assist special needs passengers',
            },
            {
              id: 'q-3',
              question: 'What is professional farewell?',
              options: ['Personal stories', 'Thank passengers and wish well', 'Complaints', 'Rushing goodbyes'],
              correctAnswer: 1,
              explanation: 'Professional farewell includes genuine thanks and well-wishes',
            },
            {
              id: 'q-4',
              question: 'How should unaccompanied minors be handled?',
              options: ['Allow unsupervised exit', 'Ensure supervisor meets at gate', 'Ignore them', 'Ask other passengers'],
              correctAnswer: 1,
              explanation: 'Minors must be met by supervisor before disembarkation',
            },
            {
              id: 'q-5',
              question: 'What information helps passenger experience?',
              options: ['Crew personal life', 'Arrival time and weather', 'Crew complaints', 'Airline gossip'],
              correctAnswer: 1,
              explanation: 'Passengers appreciate arrival information and professional service',
            },
          ],
        },
        flashcards: [],
        review: {
          keyPoints: [
            'Prepare cabin before opening doors',
            'Make welcoming announcement',
            'Assist special needs passengers',
            'Direct passenger flow smoothly',
            'Professional and courteous farewell',
            'Ensure all passengers safely exited',
          ],
          commonMistakes: [
            'Rushing disembarkation',
            'Inadequate assistance to special needs',
            'Rude or abrupt farewell',
            'Not monitoring passenger exit',
            'Leaving passengers behind',
          ],
        },
      },
      {
        id: 'lesson-8-3-post-flight',
        unitId: 'unit-8-ground-final',
        title: 'Post-Flight Procedures and Flight Completion',
        description: 'Complete flight operations and prepare for next flight',
        icon: '✔️',
        icaoLevel: 4,
        category: 'cabin-crew',
        difficulty: 'elementary',
        xpReward: 100,
        estimatedDurationMinutes: 20,
        locked: false,
        order: 3,
        objectives: [
          { id: 'obj-1', description: 'Complete post-flight checklist', type: 'speaking' },
          { id: 'obj-2', description: 'Coordinate with ground crew', type: 'speaking' },
          { id: 'obj-3', description: 'Prepare for next flight', type: 'speaking' },
        ],
        scenario: {
          id: 'scenario-1',
          title: 'Post-Flight Checklist and Aircraft Handoff',
          description: 'Complete flight and prepare for next operation',
          context: 'Flight completed, aircraft at gate',
          audioSegments: [
            {
              id: 'audio-1',
              text: 'Flight deck to maintenance: post-flight check complete, aircraft ready for service',
              audioUrl: '/audio/unit-8/lesson-3/postflight-brief.wav',
              durationSeconds: 7,
              speaker: 'pilot',
            },
            {
              id: 'audio-2',
              text: 'Maintenance acknowledges. Aircraft accepted for next departure',
              audioUrl: '/audio/unit-8/lesson-3/maint-response.wav',
              durationSeconds: 5,
              speaker: 'maintenance',
            },
          ],
          vocabulary: [
            { word: 'post-flight', definition: 'After landing procedures', pronunciation: 'POST-FLYHT' },
            { word: 'maintenance', definition: 'Aircraft service and repair', pronunciation: 'MAYN-ten-ens' },
          ],
        },
        theory: {
          title: 'Post-Flight Procedures and Flight Completion',
          content: `
Post-flight procedures systematically secure aircraft and prepare for next operation.

Post-Flight Checklist Items:
1. Aircraft systems shutdown
2. External safety checks
3. Damage inspection
4. Fuel status recording
5. Technical log completion
6. Maintenance coordination
7. Crew briefing debrief
8. Passenger count verification

Aircraft Securing:
1. All engines shut down
2. Hydraulic systems secured
3. Electrical power stabilized
4. Cargo doors locked
5. Baggage compartments closed
6. Emergency equipment checked
7. Lights turned off
8. Aircraft doors locked

Documentation Required:
- Technical log entry
- Maintenance discrepancies
- Flight time recording
- Fuel consumption data
- Passenger manifests
- Cargo documentation
- Incident reports if any
- Crew duty time

Ground Crew Coordination:
- Maintenance inspection
- Refueling operations
- Cargo loading/unloading
- Catering service
- Lavatory servicing
- Water system fill
- Aircraft cleaning
- Turnaround time management

Crew Debrief:
- Flight summary
- Any discrepancies noted
- Passenger incidents
- Weather encountered
- Equipment performance
- Maintenance issues
- Next flight briefing

Final Preparations:
- Aircraft ready for next flight
- Crew assigned for next flight
- Ground time utilized
- Passenger requirements met
- Safety standards confirmed
- Maintenance clearance received
          `,
          audioExplanation: {
            id: 'theory-audio-1',
            text: 'Post-flight procedures ensure aircraft is secure, documented, and ready for next flight. Complete checklists, coordinate with maintenance, and brief crew on any issues.',
            audioUrl: '/audio/unit-8/lesson-3/postflight-theory.wav',
            durationSeconds: 18,
            speaker: 'instructor',
          },
        },
        icaoPhraseoology: {
          category: 'Post-Flight Operations',
          phrases: [
            {
              situation: 'Announcing flight completion',
              phrase: 'Flight complete, aircraft secure',
              pronunciation: 'FLYHT kum-PLEET, AIR-kraft sih-KYOOR',
              meaning: 'Flight operations finished',
              example: 'This concludes flight operations',
            },
            {
              situation: 'Crew debrief notification',
              phrase: 'Flight deck to cabin: flight debrief at gate',
              pronunciation: 'FLYHT DEK too KAB-in: debrief at GAYT',
              meaning: 'Scheduling crew meeting',
              example: 'Crew meeting in crew room',
            },
            {
              situation: 'Notifying maintenance',
              phrase: 'Maintenance, aircraft ready for inspection',
              pronunciation: 'MAYN-ten-ens, AIR-kraft RED-ee for in-SPEK-shun',
              meaning: 'Informing maintenance of completion',
              example: 'Aircraft ready for technical check',
            },
            {
              situation: 'Reporting aircraft status',
              phrase: 'Aircraft systems normal, no discrepancies',
              pronunciation: 'AIR-kraft SIS-temz NOR-mul, no dis-KREP-en-seez',
              meaning: 'Confirming proper operation',
              example: 'All systems functioning normally',
            },
            {
              situation: 'Requesting aircraft release',
              phrase: 'Request release for next flight',
              pronunciation: 'rih-KWEST rih-LEES for next FLYHT',
              meaning: 'Asking approval for operations',
              example: 'Request release for turnaround',
            },
            {
              situation: 'Briefing next flight crew',
              phrase: 'Aircraft ready for next flight',
              pronunciation: 'AIR-kraft RED-ee for next FLYHT',
              meaning: 'Informing incoming crew',
              example: 'Next crew briefing on aircraft status',
            },
            {
              situation: 'Reporting technical issues',
              phrase: 'Aircraft has one maintenance discrepancy',
              pronunciation: 'AIR-kraft haz ONE mayn-TEN-ens dis-KREP-en-see',
              meaning: 'Informing of needed repairs',
              example: 'Minor maintenance item noted',
            },
            {
              situation: 'Crew duty time status',
              phrase: 'Crew duty time limits approaching',
              pronunciation: 'KROO DOO-tee TYM LIM-its uh-PROH-ching',
              meaning: 'Informing of regulatory timing',
              example: 'Crew rest required before next flight',
            },
          ],
        },
        vocabulary: [
          {
            word: 'post-flight',
            pronunciation: 'POST-FLYHT',
            definition: 'After landing procedures',
            example: 'Post-flight checklist complete',
          },
          {
            word: 'debrief',
            pronunciation: 'DEE-breef',
            definition: 'Crew meeting after flight',
            example: 'Crew debrief at gate',
          },
          {
            word: 'maintenance',
            pronunciation: 'MAYN-ten-ens',
            definition: 'Aircraft service and repair',
            example: 'Maintenance inspects aircraft',
          },
          {
            word: 'discrepancy',
            pronunciation: 'dis-KREP-en-see',
            definition: 'Noted problem or difference',
            example: 'Aircraft discrepancies logged',
          },
          {
            word: 'technical log',
            pronunciation: 'TEK-ni-kul LOG',
            definition: 'Aircraft maintenance record',
            example: 'Technical log entry completed',
          },
          {
            word: 'fuel status',
            pronunciation: 'FYOOL STAY-tus',
            definition: 'Remaining fuel quantity',
            example: 'Fuel status recorded',
          },
          {
            word: 'flight time',
            pronunciation: 'FLYHT TYM',
            definition: 'Duration of flight',
            example: 'Flight time recorded',
          },
          {
            word: 'turnaround',
            pronunciation: 'TER-uh-round',
            definition: 'Time between flights at airport',
            example: 'Turnaround time two hours',
          },
          {
            word: 'refueling',
            pronunciation: 'REE-FYOO-ling',
            definition: 'Adding fuel to aircraft',
            example: 'Refueling in progress',
          },
          {
            word: 'catering',
            pronunciation: 'KAY-tur-ing',
            definition: 'Food service preparation',
            example: 'Catering crew restocking',
          },
          {
            word: 'ground time',
            pronunciation: 'GROUND TYM',
            definition: 'Time aircraft on ground',
            example: 'Minimize ground time',
          },
          {
            word: 'cargo',
            pronunciation: 'KAR-goh',
            definition: 'Freight or baggage',
            example: 'Cargo unloading complete',
          },
          {
            word: 'manifest',
            pronunciation: 'MAN-i-fest',
            definition: 'Official list of contents',
            example: 'Passenger manifest verified',
          },
          {
            word: 'incident',
            pronunciation: 'IN-si-dent',
            definition: 'Unusual event or occurrence',
            example: 'Incident report filed',
          },
          {
            word: 'crew duty',
            pronunciation: 'KROO DOO-tee',
            definition: 'Crew working time',
            example: 'Crew duty time limits',
          },
          {
            word: 'rest period',
            pronunciation: 'REST PEER-ee-ud',
            definition: 'Mandatory crew break',
            example: 'Crew rest required',
          },
          {
            word: 'release',
            pronunciation: 'rih-LEES',
            definition: 'Permission to operate',
            example: 'Aircraft release granted',
          },
          {
            word: 'approval',
            pronunciation: 'uh-PROO-vul',
            definition: 'Formal agreement',
            example: 'Maintenance approval received',
          },
          {
            word: 'coordination',
            pronunciation: 'koh-or-di-NAY-shun',
            definition: 'Working together',
            example: 'Crew and maintenance coordination',
          },
          {
            word: 'completion',
            pronunciation: 'kum-PLEE-shun',
            definition: 'Finished or done',
            example: 'Flight completion acknowledged',
          },
        ],
        grammar: [],
        exercises: [],
        quiz: {
          questions: [
            {
              id: 'q-1',
              question: 'What is primary purpose of post-flight checklist?',
              options: ['Entertain passengers', 'Secure aircraft and document status', 'Rest crew', 'Clean aircraft'],
              correctAnswer: 1,
              explanation: 'Post-flight checklist secures aircraft and records condition',
            },
            {
              id: 'q-2',
              question: 'Who inspects aircraft after flight?',
              options: ['Passengers', 'Maintenance personnel', 'Gate agent', 'Catering crew'],
              correctAnswer: 1,
              explanation: 'Maintenance inspects aircraft and reviews technical log',
            },
            {
              id: 'q-3',
              question: 'What is technical log?',
              options: ['Passenger list', 'Aircraft maintenance record', 'Crew schedule', 'Menu list'],
              correctAnswer: 1,
              explanation: 'Technical log documents aircraft status and maintenance needs',
            },
            {
              id: 'q-4',
              question: 'What does "discrepancy" mean?',
              options: ['Passenger discount', 'Noted problem needing attention', 'Crew error', 'Delay reason'],
              correctAnswer: 1,
              explanation: 'Discrepancy is maintenance issue requiring repair or attention',
            },
            {
              id: 'q-5',
              question: 'When should next flight crew be briefed?',
              options: ['During flight', 'After passengers exit', 'Before boarding next flight', 'During crew rest'],
              correctAnswer: 2,
              explanation: 'Next crew briefed before boarding on aircraft status',
            },
          ],
        },
        flashcards: [],
        review: {
          keyPoints: [
            'Complete post-flight checklist systematically',
            'Document aircraft status accurately',
            'Brief maintenance on any issues',
            'Coordinate with ground crew',
            'Prepare for next flight',
            'Ensure crew duty limits observed',
          ],
          commonMistakes: [
            'Incomplete checklist',
            'Poor documentation',
            'Not notifying maintenance',
            'Inadequate crew briefing',
            'Ignoring regulatory limits',
          ],
        },
      },
    ],
  },
];

// All units (1-8) are now complete with 3 lessons each (24 total lessons)
// No need for expandICaoCurriculum() - all content is in iCAOUnits
// Deployed with complete curriculum
