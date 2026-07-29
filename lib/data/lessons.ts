import type { Unit, Lesson } from '../types';

/**
 * Cabin Crew Academy - Complete Curriculum
 *
 * Structure:
 * - 6 Learning Paths (ICAO Levels)
 * - Multiple Units per path
 * - Rich lessons with all content types
 */

export const lessonData: Unit[] = [
  {
    id: 'unit-1-preflight',
    title: 'Pre-Flight Briefing',
    description: 'Learn essential pre-flight communication and procedures',
    icon: '✈️',
    color: 'from-blue-500 to-indigo-500',
    progress: 100,
    locked: false,
    order: 1,
    lessons: [
      {
        id: 'lesson-1-1',
        unitId: 'unit-1-preflight',
        title: 'Welcome On Board - Greeting Passengers',
        description: 'Master professional greeting phrases and passenger welcome protocols',
        icon: '👋',
        icaoLevel: 4,
        category: 'cabin-crew',
        difficulty: 'elementary',
        xpReward: 100,
        estimatedDurationMinutes: 25,
        locked: false,
        order: 1,

        objectives: [
          { id: 'obj-1', description: 'Greet passengers professionally', type: 'speaking' },
          { id: 'obj-2', description: 'Use proper ICAO phraseology', type: 'speaking' },
          { id: 'obj-3', description: 'Understand passenger expectations', type: 'listening' },
        ],

        scenario: {
          id: 'scenario-1',
          title: 'Welcoming Passengers During Boarding',
          description:
            'You are a cabin crew member greeting passengers as they board Flight EK301 to London. You must welcome them warmly, direct them to their seats, and answer basic questions.',
          context:
            'The aircraft is a Boeing 777. It is morning. The cabin is busy with passengers boarding.',
          audioSegments: [
            {
              id: 'audio-1',
              text: 'Good morning! Welcome aboard Emirates Flight EK301 to London. May I see your boarding pass, please?',
              audioUrl: '/audio/lesson-1-1/welcome-01.m4a',
              durationSeconds: 8,
              speaker: 'crew',
            },
            {
              id: 'audio-2',
              text: 'Thank you. Your seat is 12B on the right side. Enjoy your flight!',
              audioUrl: '/audio/lesson-1-1/welcome-02.m4a',
              durationSeconds: 6,
              speaker: 'crew',
            },
          ],
          vocabulary: [
            {
              word: 'boarding pass',
              definition: 'The document you need to enter the aircraft',
              pronunciation: 'BOR-ding pass',
            },
            {
              word: 'aisle',
              definition: 'The passage between rows of seats',
              pronunciation: 'AYL',
            },
            {
              word: 'overhead bin',
              definition: 'Storage compartment above the seats',
              pronunciation: 'O-ver-hed bin',
            },
            {
              word: 'beverage service',
              definition: 'Serving drinks to passengers',
              pronunciation: 'BEV-er-ij SER-vis',
            },
          ],
        },

        theory: {
          title: 'Professional Cabin Crew Communication',
          content: `
Cabin crew communication must be:
1. **Clear and Audible** - Speak clearly so all passengers can hear you
2. **Professional** - Use formal language and respectful tone
3. **Friendly** - Show genuine warmth and hospitality
4. **Efficient** - Deliver information concisely

Key principles:
- Smile when speaking (it's heard in your voice)
- Maintain eye contact
- Use hand gestures appropriately
- Adjust speed and volume for clarity
- Be patient with non-English speakers
          `,
          audioExplanation: {
            id: 'theory-audio-1',
            text: 'In professional cabin crew communication, clarity is paramount. Always speak at a moderate pace, enunciate your words carefully, and maintain a pleasant tone throughout all passenger interactions.',
            audioUrl: '/audio/lesson-1-1/theory-explanation.m4a',
            durationSeconds: 15,
            speaker: 'instructor',
          },
        },

        icaoPhraseoology: {
          category: 'Boarding and Departure',
          phrases: [
            {
              situation: 'Greeting a passenger',
              phrase: 'Good morning/afternoon. Welcome aboard.',
              pronunciation: 'GOOD MOR-ning. WEL-come a-BORD.',
              meaning: 'Professional greeting for boarding passengers',
              example:
                'When the passenger enters the aircraft, smile and say "Good morning. Welcome aboard."',
            },
            {
              situation: 'Checking boarding pass',
              phrase: 'May I see your boarding pass, please?',
              pronunciation: 'May I SEE your BOR-ding pass, PLEASE?',
              meaning: 'Polite request to verify boarding documentation',
            },
            {
              situation: 'Directing to seat',
              phrase: 'Your seat is [number] on the [left/right] side.',
              pronunciation: 'Your SEAT is [number] on the [LEFT/RIGHT] SIDE.',
              meaning: 'Providing seat location to passenger',
            },
            {
              situation: 'Safety reminder',
              phrase: 'Please ensure your seatbelt is securely fastened.',
              pronunciation: 'PLEASE en-SURE your SEAT-belt is se-CURE-ly FAST-ened.',
              meaning: 'Safety instruction before departure',
            },
          ],
        },

        cabinCrewPhraseoology: {
          category: 'Day-to-Day Operations',
          phrases: [
            {
              situation: 'Before departure',
              phrase: 'All doors to arrival, cross-check.',
              meaning: 'Standard call between flight attendants to secure all doors',
            },
            {
              situation: 'Safety check complete',
              phrase: 'All secure in the cabin.',
              meaning: 'Confirming all safety checks completed',
            },
            {
              situation: 'Passenger assistance',
              phrase: 'Is there anything I can help you with?',
              meaning: 'Offering passenger service assistance',
            },
            {
              situation: 'Seatbelt fastening',
              phrase: 'Please keep your seatbelt fastened.',
              meaning: 'Reminding passenger of safety requirement',
            },
          ],
        },

        airlineVocabulary: [
          {
            category: 'Aircraft Parts',
            terms: [
              {
                term: 'Galley',
                definition: 'The kitchen area on the aircraft',
                pronunciation: 'GAL-ee',
                example:
                  'The galley is located at the front and rear of the cabin.',
              },
              {
                term: 'Lavatory',
                definition: 'Restroom on the aircraft',
                pronunciation: 'LAV-a-tor-ee',
                example:
                  'The lavatories are located in the rear of the aircraft.',
              },
              {
                term: 'Emergency exit',
                definition: 'Door used for emergency evacuation',
                pronunciation: 'e-MER-jen-see EG-zit',
                example:
                  'The emergency exits are clearly marked.',
              },
              {
                term: 'Oxygen mask',
                definition: 'Device that provides oxygen in emergencies',
                pronunciation: 'OK-si-jen MASK',
                example:
                  'Oxygen masks will drop automatically if cabin pressure is lost.',
              },
            ],
          },
          {
            category: 'Service Equipment',
            terms: [
              {
                term: 'Beverage cart',
                definition: 'Mobile cart used for serving drinks',
                pronunciation: 'BEV-er-ij CART',
                example: 'Please keep the aisle clear when we push the beverage cart.',
              },
              {
                term: 'Tray table',
                definition: 'Fold-out table in front of passenger seats',
                pronunciation: 'TRAY TAY-bul',
                example:
                  'Please return your tray table to its locked position.',
              },
              {
                term: 'Armrest',
                definition: 'Rest for passenger arms between seats',
                pronunciation: 'ARM-rest',
                example:
                  'The armrest can be raised to create more space for passenger comfort.',
              },
            ],
          },
        ],

        professionalExpressions: [
          {
            situation: 'Greeting a VIP or first-class passenger',
            expression: 'Welcome aboard. We are delighted to have you on board today.',
            alternativeExpressions: [
              'We are pleased to welcome you aboard.',
              'Thank you for choosing our airline.',
            ],
          },
          {
            situation: 'Helping a passenger with luggage',
            expression: 'May I assist you with your luggage?',
            alternativeExpressions: [
              'Can I help you with your bag?',
              'Would you like assistance with your carry-on?',
            ],
          },
          {
            situation: 'Responding to a passenger complaint',
            expression:
              'I apologize for the inconvenience. Let me see what I can do to help.',
            alternativeExpressions: [
              'I understand your concern. I will do my best to assist.',
              'I am sorry to hear that. Let me find a solution for you.',
            ],
          },
        ],

        pronunciation: [
          {
            id: 'pron-1',
            text: 'Welcome',
            audioUrl: '/audio/lesson-1-1/pronunciation-welcome.m4a',
            durationSeconds: 2,
            speaker: 'native',
          },
          {
            id: 'pron-2',
            text: 'Boarding pass',
            audioUrl: '/audio/lesson-1-1/pronunciation-boarding.m4a',
            durationSeconds: 2,
            speaker: 'native',
          },
          {
            id: 'pron-3',
            text: 'Appreciate',
            audioUrl: '/audio/lesson-1-1/pronunciation-appreciate.m4a',
            durationSeconds: 2,
            speaker: 'native',
          },
        ],

        grammar: [
          {
            rule: 'Present Simple for habitual actions and instructions',
            examples: [
              {
                sentence: 'We serve complimentary beverages on all flights.',
                audioUrl: '/audio/lesson-1-1/grammar-1.m4a',
              },
              {
                sentence: 'Passengers fasten their seatbelts during takeoff and landing.',
                audioUrl: '/audio/lesson-1-1/grammar-2.m4a',
              },
            ],
          },
          {
            rule: 'Imperative mood for instructions',
            examples: [
              {
                sentence: 'Please keep your seatbelt fastened.',
              },
              {
                sentence: 'Return your tray table to its locked position.',
              },
            ],
          },
        ],

        exercises: [
          {
            id: 'ex-1-1-1',
            type: 'multiple-choice',
            question: 'What is the correct way to greet a passenger boarding?',
            options: [
              {
                id: 'opt-1',
                text: 'Hey! Welcome aboard!',
                isCorrect: false,
                explanation: 'Too informal for professional cabin crew communication.',
              },
              {
                id: 'opt-2',
                text: 'Good morning. Welcome aboard.',
                isCorrect: true,
                explanation:
                  'This is the appropriate level of formality and warmth.',
              },
              {
                id: 'opt-3',
                text: 'Board the aircraft now.',
                isCorrect: false,
                explanation: 'This is not a greeting and sounds rude.',
              },
            ],
            points: 10,
          },
          {
            id: 'ex-1-1-2',
            type: 'fill-blank',
            question: 'Your seat is 12B on the _________ side.',
            options: [
              { id: 'opt-1', text: 'right', isCorrect: true },
              { id: 'opt-2', text: 'left', isCorrect: true },
              { id: 'opt-3', text: 'middle', isCorrect: false },
            ],
            points: 10,
            explanation: 'Both "right" and "left" are correct directions.',
          },
          {
            id: 'ex-1-1-3',
            type: 'listening-dictation',
            question: 'Listen to the audio and write what you hear:',
            audio: {
              id: 'listen-1',
              text: 'Good morning. Welcome aboard Flight EK301.',
              audioUrl: '/audio/lesson-1-1/welcome-01.m4a',
              durationSeconds: 5,
              speaker: 'crew',
            },
            correctAnswer: 'Good morning. Welcome aboard Flight EK301.',
            points: 15,
          },
          {
            id: 'ex-1-1-4',
            type: 'speaking',
            question: 'Greet a passenger and ask to see their boarding pass.',
            points: 20,
          },
        ],

        quiz: {
          id: 'quiz-1-1',
          title: 'Pre-Flight Briefing Quiz',
          exercises: [
            {
              id: 'quiz-q-1',
              type: 'multiple-choice',
              question: 'What should you say when a passenger boards?',
              options: [
                {
                  id: 'q-opt-1',
                  text: 'Sit down quickly.',
                  isCorrect: false,
                },
                {
                  id: 'q-opt-2',
                  text: 'Good morning. Welcome aboard.',
                  isCorrect: true,
                },
                {
                  id: 'q-opt-3',
                  text: 'Move faster please.',
                  isCorrect: false,
                },
              ],
              points: 10,
            },
            {
              id: 'quiz-q-2',
              type: 'multiple-choice',
              question:
                'What is the most important aspect of cabin crew communication?',
              options: [
                {
                  id: 'q-opt-1',
                  text: 'Speaking very loudly',
                  isCorrect: false,
                },
                {
                  id: 'q-opt-2',
                  text: 'Clarity and professionalism',
                  isCorrect: true,
                },
                {
                  id: 'q-opt-3',
                  text: 'Speaking quickly',
                  isCorrect: false,
                },
              ],
              points: 10,
            },
          ],
          passingScore: 70,
          timeLimit: 300,
        },

        flashcards: [
          {
            id: 'fc-1',
            front: 'How do you greet a passenger in English?',
            back: 'Say "Good morning/afternoon. Welcome aboard."',
            audioFront: '/audio/lesson-1-1/fc-1-front.mp3',
            audioBack: '/audio/lesson-1-1/fc-1-back.mp3',
          },
          {
            id: 'fc-2',
            front: 'What do you ask before directing to seat?',
            back: 'Ask to see their boarding pass: "May I see your boarding pass, please?"',
          },
          {
            id: 'fc-3',
            front: 'How do you describe seat location?',
            back: 'Example: "Your seat is 12B on the right side."',
          },
          {
            id: 'fc-4',
            front: 'What is an overhead bin?',
            back: 'Storage compartment above the seats for carry-on luggage.',
          },
        ],

        aiConversation: {
          initialPrompt:
            'You are a passenger boarding Flight EK301. I am the cabin crew member. Greet me appropriately.',
          topics: [
            'Greetings',
            'Seat location',
            'Luggage assistance',
            'Boarding process',
          ],
        },

        review: {
          keyPoints: [
            'Always greet passengers with warmth and professionalism',
            'Check boarding passes courteously',
            'Clearly direct passengers to their seats',
            'Offer assistance when needed',
            'Maintain a friendly and helpful demeanor',
          ],
          commonMistakes: [
            {
              mistake: 'Greeting informally: "Hey, welcome!"',
              correction: 'Greeting formally: "Good morning. Welcome aboard."',
              explanation: 'Professionalism sets the tone for the entire flight.',
            },
            {
              mistake: 'Not making eye contact with passengers',
              correction: 'Make eye contact and smile when greeting',
              explanation:
                'Personal connection builds passenger confidence and comfort.',
            },
            {
              mistake: 'Speaking too quickly during instructions',
              correction: 'Speak at a moderate pace for clarity',
              explanation:
                'International passengers may need more time to process English.',
            },
          ],
        },
        createdAt: new Date('2024-01-15').toISOString(),
        updatedAt: new Date('2024-07-29').toISOString(),
      },
    ],
  },

  {
    id: 'unit-2-welcome',
    title: 'Welcome On Board',
    description: 'Safety announcements and passenger orientation',
    icon: '🛫',
    color: 'from-emerald-500 to-teal-500',
    progress: 82,
    locked: false,
    order: 2,
    lessons: [
      {
        id: 'lesson-1-2',
        unitId: 'unit-2-welcome',
        title: 'Safety Briefing - Key Announcements',
        description: 'Master critical safety announcements required by aviation regulations',
        icon: '🛟',
        icaoLevel: 4,
        category: 'cabin-crew',
        difficulty: 'intermediate',
        xpReward: 150,
        estimatedDurationMinutes: 30,
        locked: false,
        order: 1,

        objectives: [
          {
            id: 'obj-1',
            description: 'Deliver safety briefing clearly and confidently',
            type: 'speaking',
          },
          {
            id: 'obj-2',
            description: 'Explain emergency procedures in English',
            type: 'speaking',
          },
          {
            id: 'obj-3',
            description: 'Understand aviation safety terminology',
            type: 'vocabulary',
          },
        ],

        scenario: {
          id: 'scenario-2',
          title: 'Delivering Safety Briefing Before Departure',
          description:
            'As cabin crew, you must deliver a clear safety briefing to international passengers before departure. This is both a regulatory requirement and critical for passenger safety.',
          context:
            'Boeing 777, 350 passengers, mixed nationalities, Flight to London.',
          audioSegments: [
            {
              id: 'audio-1',
              text: 'Ladies and gentlemen, on behalf of the flight crew, welcome aboard.',
              audioUrl: '/audio/lesson-1-2/safety-welcome.m4a',
              durationSeconds: 5,
              speaker: 'crew',
            },
            {
              id: 'audio-2',
              text: 'For your safety and comfort, please pay close attention to the following safety information.',
              audioUrl: '/audio/lesson-1-2/safety-attention.m4a',
              durationSeconds: 6,
              speaker: 'crew',
            },
          ],
          vocabulary: [
            {
              word: 'seatbelt',
              definition: 'Safety device that holds you in your seat',
              pronunciation: 'SEAT-belt',
            },
            {
              word: 'oxygen mask',
              definition: 'Device providing breathable air in emergencies',
              pronunciation: 'OK-si-jen mask',
            },
            {
              word: 'emergency exit',
              definition: 'Door for emergency evacuation',
              pronunciation: 'i-MER-jen-see EXIT',
            },
          ],
        },

        theory: {
          title: 'Safety Briefing Delivery',
          content: `
Safety briefings must be:
1. **Clear and Loud** - All passengers must hear you
2. **Slow and Deliberate** - Ensure understanding
3. **Authoritative** - Build passenger confidence
4. **Practiced** - Know it by heart

Key components:
- Welcome and attention getter
- Seatbelt fastening
- Emergency exits location
- Oxygen mask deployment
- Life vest procedures
- Brace position
          `,
        },

        icaoPhraseoology: {
          category: 'Safety Announcements',
          phrases: [
            {
              situation: 'Requesting attention',
              phrase: 'Ladies and gentlemen, for your safety, please pay attention.',
              pronunciation: 'LAY-deez and GEN-tle-men, for your SAY-fee, PLEASE pay a-TEN-shun.',
              meaning: 'Getting passenger attention for important safety information',
            },
            {
              situation: 'Seatbelt instruction',
              phrase: 'Please ensure your seatbelt is securely fastened.',
              meaning: 'Instruction to secure safety device',
            },
            {
              situation: 'Emergency exits',
              phrase: 'In the event of an emergency, oxygen masks will automatically deploy.',
              meaning: 'Explaining emergency oxygen system',
            },
            {
              situation: 'Evacuation',
              phrase: 'In the unlikely event of evacuation, proceed to the nearest exit.',
              meaning: 'Emergency evacuation instruction',
            },
          ],
        },

        cabinCrewPhraseoology: {
          category: 'Safety Operations',
          phrases: [
            {
              situation: 'Safety check',
              phrase: 'All secure in the cabin.',
              meaning: 'Confirming all safety checks completed',
            },
            {
              situation: 'Emergency preparation',
              phrase: 'Prepare for emergency landing.',
              meaning: 'Alert to prepare for crash landing scenario',
            },
            {
              situation: 'Passenger evacuation',
              phrase: 'Exit the aircraft immediately.',
              meaning: 'Command to evacuate aircraft',
            },
          ],
        },

        airlineVocabulary: [
          {
            category: 'Emergency Equipment',
            terms: [
              {
                term: 'Life vest',
                definition: 'Inflatable device for water evacuation',
                pronunciation: 'LIFE vest',
                example:
                  'Your life vest is located beneath your seat or between the armrests.',
              },
              {
                term: 'Brace position',
                definition: 'Protective body position during emergency landing',
                pronunciation: 'BRACE po-ZISH-un',
                example:
                  'In the brace position, lean forward with your hands protecting your head.',
              },
              {
                term: 'Evacuation slide',
                definition: 'Inflatable slide used to exit aircraft quickly',
                pronunciation: 'i-VAK-you-AY-shun SLIDE',
                example:
                  'The evacuation slide deploys automatically when the door is opened.',
              },
            ],
          },
        ],

        professionalExpressions: [
          {
            situation: 'Emphasizing safety',
            expression:
              'Your safety is our top priority. Please follow all crew member instructions.',
            alternativeExpressions: [
              'We take your safety very seriously.',
              'Safety is paramount on all our flights.',
            ],
          },
        ],

        pronunciation: [
          {
            id: 'pron-1',
            text: 'Emergency',
            audioUrl: '/audio/lesson-1-2/pronunciation-emergency.m4a',
            durationSeconds: 2,
            speaker: 'native',
          },
          {
            id: 'pron-2',
            text: 'Evacuation',
            audioUrl: '/audio/lesson-1-2/pronunciation-evacuation.m4a',
            durationSeconds: 2,
            speaker: 'native',
          },
        ],

        grammar: [
          {
            rule: 'Imperative mood for safety instructions (must be clear and direct)',
            examples: [
              {
                sentence: 'Please fasten your seatbelt.',
              },
              {
                sentence: 'Keep your seatbelt fastened at all times.',
              },
            ],
          },
        ],

        exercises: [
          {
            id: 'ex-1-2-1',
            type: 'speaking',
            question: 'Deliver the opening of a safety briefing.',
            points: 25,
          },
          {
            id: 'ex-1-2-2',
            type: 'listening-dictation',
            question: 'Listen and repeat the seatbelt instruction.',
            audio: {
              id: 'listen-1',
              text: 'Please ensure your seatbelt is securely fastened.',
              audioUrl: '/audio/lesson-1-2/dictation-seatbelt.m4a',
              durationSeconds: 4,
              speaker: 'crew',
            },
            correctAnswer: 'Please ensure your seatbelt is securely fastened.',
            points: 15,
          },
        ],

        quiz: {
          id: 'quiz-1-2',
          title: 'Safety Briefing Quiz',
          exercises: [
            {
              id: 'quiz-q-1',
              type: 'multiple-choice',
              question: 'What is the most important tone for safety announcements?',
              options: [
                { id: 'q-opt-1', text: 'Casual and friendly', isCorrect: false },
                {
                  id: 'q-opt-2',
                  text: 'Clear, authoritative, and calm',
                  isCorrect: true,
                },
                { id: 'q-opt-3', text: 'Quick and hurried', isCorrect: false },
              ],
              points: 10,
            },
          ],
          passingScore: 70,
          timeLimit: 300,
        },

        flashcards: [
          {
            id: 'fc-1',
            front: 'What should you say to get passenger attention?',
            back: 'Ladies and gentlemen, for your safety, please pay attention.',
          },
        ],

        review: {
          keyPoints: [
            'Safety announcements must be crystal clear',
            'Speak slowly and deliberately',
            'Use authoritative but calm tone',
            'Ensure all passengers understand',
          ],
          commonMistakes: [
            {
              mistake: 'Speaking too quickly during safety briefing',
              correction: 'Speak slowly and deliberately for international passengers',
              explanation:
                'Not all passengers understand English natively. Clarity is essential.',
            },
          ],
        },
        createdAt: new Date('2024-01-15').toISOString(),
        updatedAt: new Date('2024-07-29').toISOString(),
      },
    ],
  },
];
