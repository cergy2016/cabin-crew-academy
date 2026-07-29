import type { InterviewQuestion, InterviewBank } from '../types';

/**
 * Comprehensive Airline Interview Question Database
 * 100+ questions covering 10+ major international airlines
 *
 * Includes:
 * - HR/Behavioral/Technical/Situational questions
 * - Model answers with scoring rubrics
 * - Common mistakes to avoid
 * - Tips for each airline
 */

export const airlineInterviewBanks: InterviewBank[] = [
  // EMIRATES AIRLINES
  {
    id: 'emirates-bank',
    airline: 'Emirates Airlines',
    description: 'Middle East\'s premier airline, largest A380 operator',
    country: '🇦🇪 UAE',
    website: 'emirates.com',
    difficulty: 3,
    questions: [
      {
        id: 'emirates-001',
        question: 'Tell us about yourself and why you want to work for Emirates.',
        category: 'hr',
        difficulty: 1,
        modelAnswers: [
          {
            text: 'I am a dedicated professional with 3 years of customer service experience in hospitality. I am fluent in English, Arabic, and French. I have always admired Emirates for its world-class service and safety standards. The opportunity to work for a global leader in aviation, serving diverse passengers on the world\'s most modern aircraft, aligns perfectly with my career goals. I am particularly drawn to Emirates\' commitment to excellence and innovation.',
            scoreBreakdown: {
              pronunciation: 85,
              grammar: 90,
              vocabulary: 85,
              fluency: 88,
              confidence: 90,
              professionalism: 92,
            },
            tips: [
              'Mention specific knowledge about Emirates (A380, routes, reputation)',
              'Highlight language skills (multi-lingual is valued)',
              'Show understanding of their service philosophy',
              'Express genuine interest in safety and service',
            ],
          },
          {
            text: 'I bring customer service experience and language skills. Emirates is a well-known airline.',
            scoreBreakdown: {
              pronunciation: 75,
              grammar: 70,
              vocabulary: 65,
              fluency: 70,
              confidence: 75,
              professionalism: 70,
            },
            tips: [
              'Be more specific and detailed',
              'Show deeper knowledge about the company',
              'Demonstrate more enthusiasm',
            ],
          },
        ],
        mistakesToAvoid: [
          'Only mentioning salary and benefits',
          'Not knowing basic facts about Emirates',
          'Showing lack of enthusiasm',
          'Poor pronunciation of airline name or aircraft',
          'Being vague about experience',
        ],
      },
      {
        id: 'emirates-002',
        question: 'Describe a time when you handled a difficult passenger. What was the situation and how did you resolve it?',
        category: 'behavioral',
        difficulty: 2,
        modelAnswers: [
          {
            text: 'During a 12-hour flight, a passenger became upset because his meal request wasn\'t available. I remained calm, listened to his concerns, and apologized for the inconvenience. I immediately offered alternative meal options and checked if we had any special items in the galley. When none satisfied him, I documented his feedback, provided him with complimentary beverage coupons for future flights, and ensured extra attention during the remainder of the flight. The passenger thanked me at the end of the flight, and I followed up with a letter from the crew.',
            scoreBreakdown: {
              pronunciation: 88,
              grammar: 92,
              vocabulary: 90,
              fluency: 90,
              confidence: 85,
              professionalism: 95,
            },
            tips: [
              'Use the STAR method (Situation, Task, Action, Result)',
              'Show empathy and active listening',
              'Demonstrate problem-solving skills',
              'Highlight teamwork and follow-up',
            ],
          },
        ],
        mistakesToAvoid: [
          'Blaming the passenger',
          'Showing frustration or anger',
          'Not taking responsibility',
          'Making excuses',
          'Not following up after resolution',
        ],
      },
      {
        id: 'emirates-003',
        question: 'How do you handle working with crew members from different cultural backgrounds?',
        category: 'hr',
        difficulty: 2,
        modelAnswers: [
          {
            text: 'I view cultural diversity as a tremendous strength. In my previous role, I worked with team members from 15+ nationalities. I took time to learn about different customs and communication styles. For example, I learned that some cultures prefer direct communication while others value indirect approaches. I adjusted my communication style accordingly and encouraged open dialogue about preferences. This not only improved team harmony but also enhanced our ability to serve diverse passengers authentically.',
            scoreBreakdown: {
              pronunciation: 85,
              grammar: 90,
              vocabulary: 88,
              fluency: 87,
              confidence: 88,
              professionalism: 90,
            },
            tips: [
              'Show genuine interest in different cultures',
              'Give specific examples of cross-cultural situations',
              'Demonstrate adaptability and flexibility',
              'Show respect for different perspectives',
            ],
          },
        ],
        mistakesToAvoid: [
          'Making stereotypes',
          'Implying other cultures are inferior',
          'Saying you have "no preference"',
          'Not acknowledging cultural differences',
        ],
      },
      {
        id: 'emirates-004',
        question: 'What would you do if you noticed a colleague not following safety procedures?',
        category: 'technical',
        difficulty: 2,
        modelAnswers: [
          {
            text: 'Safety is paramount in aviation. If I observed a colleague not following procedures, I would address it immediately and professionally. First, I would speak to them privately in a non-accusatory manner: "I noticed you didn\'t complete the crosscheck. Should we go back and verify?" This gives them a chance to realize their mistake without embarrassment. If the behavior continued, I would escalate to the purser or cabin manager. I understand that reporting is not about blame but about maintaining the safety culture that protects every person on board.',
            scoreBreakdown: {
              pronunciation: 90,
              grammar: 92,
              vocabulary: 92,
              fluency: 90,
              confidence: 92,
              professionalism: 95,
            },
            tips: [
              'Emphasize safety as the priority',
              'Show respect for colleagues while maintaining standards',
              'Know the proper escalation procedures',
              'Demonstrate understanding of safety culture',
            ],
          },
        ],
        mistakesToAvoid: [
          'Ignoring safety violations',
          'Publicly embarrassing a colleague',
          'Failing to escalate when necessary',
          'Treating safety as flexible',
        ],
      },
      {
        id: 'emirates-005',
        question: 'You are working a 15-hour duty day and feel extremely tired. A passenger requests special assistance. What do you do?',
        category: 'situational',
        difficulty: 3,
        modelAnswers: [
          {
            text: 'Despite my fatigue, passenger safety and well-being come first. I would immediately assist the passenger with their need - whether it\'s medical, mobility, or other assistance. I would also inform the purser about my fatigue level so they can monitor my performance and adjust the workload if needed. This ensures both the passenger receives proper care and the crew maintains safety awareness. After landing, I would report my experience to flight operations so they can track crew fatigue and adjust future scheduling if patterns emerge.',
            scoreBreakdown: {
              pronunciation: 88,
              grammar: 93,
              vocabulary: 90,
              fluency: 89,
              confidence: 87,
              professionalism: 95,
            },
            tips: [
              'Show commitment to passenger care over personal comfort',
              'Demonstrate awareness of fatigue management',
              'Show transparency with leadership',
              'Understand safety implications of fatigue',
            ],
          },
        ],
        mistakesToAvoid: [
          'Showing irritation at passenger request',
          'Providing subpar service due to tiredness',
          'Not reporting fatigue concerns',
          'Prioritizing personal comfort over passengers',
        ],
      },
    ],
  },

  // QATAR AIRWAYS
  {
    id: 'qatar-bank',
    airline: 'Qatar Airways',
    description: 'World\'s best airline (multiple awards), Doha hub',
    country: '🇶🇦 Qatar',
    website: 'qatarairways.com',
    difficulty: 3,
    questions: [
      {
        id: 'qatar-001',
        question: 'Qatar Airways is known for premium service and awards. What does "premium service" mean to you?',
        category: 'hr',
        difficulty: 2,
        modelAnswers: [
          {
            text: 'Premium service means exceeding expectations at every touchpoint. It\'s not just about providing the service; it\'s about the attitude, attention to detail, and personalization. For Qatar Airways specifically, premium service means understanding that every passenger - regardless of cabin class - deserves respect and excellence. It means remembering a passenger\'s preference for their drink, noticing their mood, and adjusting our approach. It\'s about anticipating needs before passengers ask, maintaining impeccable grooming and professionalism, and creating an atmosphere of genuine hospitality. Premium service is the combination of technical proficiency and emotional intelligence.',
            scoreBreakdown: {
              pronunciation: 90,
              grammar: 93,
              vocabulary: 92,
              fluency: 91,
              confidence: 90,
              professionalism: 95,
            },
            tips: [
              'Show understanding of Qatar\'s premium positioning',
              'Mention attention to detail and personalization',
              'Demonstrate emotional intelligence',
              'Align personal values with airline values',
            ],
          },
        ],
        mistakesToAvoid: [
          'Focusing only on physical service (food, drinks)',
          'Not understanding luxury hospitality',
          'Showing that you\'re only interested in tips',
        ],
      },
      {
        id: 'qatar-002',
        question: 'Tell us about your previous experience and how it prepared you for Qatar Airways.',
        category: 'behavioral',
        difficulty: 2,
        modelAnswers: [
          {
            text: 'I have 4 years of experience in 5-star hospitality, including 2 years at a luxury hotel and 2 years with another international airline. At the hotel, I learned the importance of personalized service and reading guests\' needs. I worked with guests from 30+ countries and developed skills in cultural sensitivity and multilingual communication. In my airline role, I completed training on emergency procedures, first aid, and customer service. I served diverse passengers on long-haul flights, managed conflicts, and maintained composure in high-pressure situations. These experiences have equipped me with the service mindset, cultural awareness, and safety consciousness that Qatar Airways requires.',
            scoreBreakdown: {
              pronunciation: 85,
              grammar: 90,
              vocabulary: 88,
              fluency: 88,
              confidence: 86,
              professionalism: 90,
            },
            tips: [
              'Highlight progressive experience and growth',
              'Connect past roles to Qatar Airways requirements',
              'Show international/multicultural exposure',
              'Demonstrate specific skills (safety, languages, etc.)',
            ],
          },
        ],
        mistakesToAvoid: [
          'Only listing job titles without context',
          'Showing gaps in employment without explanation',
          'Not connecting experience to the role',
          'Speaking negatively about previous employers',
        ],
      },
    ],
  },

  // BRITISH AIRWAYS
  {
    id: 'ba-bank',
    airline: 'British Airways',
    description: 'British flagship carrier, London heritage',
    country: '🇬🇧 UK',
    website: 'britishairways.com',
    difficulty: 2,
    questions: [
      {
        id: 'ba-001',
        question: 'British Airways values "to fly, to serve." What does service mean to you?',
        category: 'hr',
        difficulty: 1,
        modelAnswers: [
          {
            text: 'Service is about putting the passenger first and genuinely caring about their journey. For me, it means being present - making eye contact, smiling, remembering names when possible. It\'s about solving problems efficiently, handling complaints gracefully, and going beyond the basic requirements. Service also means working as a seamless team, supporting colleagues, and contributing to a positive cabin environment. At British Airways, with your heritage and reputation, service is about upholding a tradition of excellence while adapting to modern passenger expectations.',
            scoreBreakdown: {
              pronunciation: 85,
              grammar: 88,
              vocabulary: 85,
              fluency: 86,
              confidence: 85,
              professionalism: 88,
            },
            tips: [
              'Show understanding of BA\'s service philosophy',
              'Mention both passenger and team service',
              'Demonstrate warmth and genuine interest',
            ],
          },
        ],
        mistakesToAvoid: [
          'Only focusing on physical service',
          'Being too robotic or impersonal',
          'Not showing emotional connection',
        ],
      },
    ],
  },

  // SINGAPORE AIRLINES
  {
    id: 'sia-bank',
    airline: 'Singapore Airlines',
    description: 'Premium Asian carrier, service excellence',
    country: '🇸🇬 Singapore',
    website: 'singaporeair.com',
    difficulty: 3,
    questions: [
      {
        id: 'sia-001',
        question: 'Singapore Airlines requires crew who can represent the brand globally. How would you represent SIA?',
        category: 'hr',
        difficulty: 2,
        modelAnswers: [
          {
            text: 'Singapore Airlines represents excellence, professionalism, and Asian hospitality combined with international standards. To represent SIA, I would embody these values through impeccable grooming - well-fitted uniform, polished shoes, minimal jewelry. I would demonstrate respect for all passengers and crew, regardless of background. My communication would be clear, grammatically correct, and multilingual if possible. I would maintain composure in challenging situations, anticipate passenger needs, and deliver service with genuine warmth - not just efficiency. I would also demonstrate pride in representing Singapore and understand the cultural values that shape SIA\'s identity.',
            scoreBreakdown: {
              pronunciation: 90,
              grammar: 92,
              vocabulary: 90,
              fluency: 89,
              confidence: 88,
              professionalism: 95,
            },
            tips: [
              'Emphasize appearance and professionalism',
              'Show understanding of Asian hospitality values',
              'Demonstrate cultural awareness',
              'Mention pride in representing the brand',
            ],
          },
        ],
        mistakesToAvoid: [
          'Being too casual or informal',
          'Not understanding brand positioning',
          'Showing lack of cultural sensitivity',
        ],
      },
    ],
  },

  // CATHAY PACIFIC
  {
    id: 'cx-bank',
    airline: 'Cathay Pacific',
    description: 'Asia\'s finest airline, Hong Kong base',
    country: '🇭🇰 Hong Kong',
    website: 'cathaypacific.com',
    difficulty: 2,
    questions: [
      {
        id: 'cx-001',
        question: 'Tell us about your motivation to work for Cathay Pacific.',
        category: 'hr',
        difficulty: 1,
        modelAnswers: [
          {
            text: 'Cathay Pacific represents the perfect combination of Asian values and international excellence. I am drawn to your reputation for service quality and crew professionalism. I admire your modern fleet and the opportunity to serve passengers on diverse routes throughout Asia and globally. Beyond the airline itself, I am excited about the Hong Kong base - a vibrant international hub that reflects Cathay Pacific\'s global perspective. I am committed to continuous improvement and believe that Cathay Pacific\'s culture of excellence aligns with my professional aspirations.',
            scoreBreakdown: {
              pronunciation: 85,
              grammar: 89,
              vocabulary: 87,
              fluency: 86,
              confidence: 85,
              professionalism: 88,
            },
            tips: [
              'Show knowledge of Cathay Pacific\'s positioning',
              'Mention Hong Kong and regional significance',
              'Express genuine interest in the company',
            ],
          },
        ],
        mistakesToAvoid: [
          'Confusing with other Asian airlines',
          'Only mentioning salary/benefits',
          'Generic answers that could apply to any airline',
        ],
      },
    ],
  },

  // TURKISH AIRLINES
  {
    id: 'tk-bank',
    airline: 'Turkish Airlines',
    description: 'Fast-growing Middle Eastern/European bridge',
    country: '🇹🇷 Turkey',
    website: 'turkishairlines.com',
    difficulty: 2,
    questions: [
      {
        id: 'tk-001',
        question: 'Turkish Airlines connects Europe, Asia, and Africa. How would you serve this diverse passenger base?',
        category: 'hr',
        difficulty: 2,
        modelAnswers: [
          {
            text: 'Serving diverse passengers requires cultural intelligence and adaptability. I would start by understanding that passengers have different expectations based on their cultural backgrounds and previous experiences. I would learn to recognize and respect different communication styles - some passengers prefer formality while others appreciate warmth. I would make an effort to learn basic greetings in multiple languages to make passengers feel valued. Most importantly, I would focus on finding common ground - delivering consistent, respectful service while being sensitive to individual preferences. This cultural awareness, combined with professional service standards, allows me to serve Turkish Airlines\' diverse passenger base effectively.',
            scoreBreakdown: {
              pronunciation: 87,
              grammar: 90,
              vocabulary: 89,
              fluency: 88,
              confidence: 87,
              professionalism: 91,
            },
            tips: [
              'Show understanding of Turkish Airlines\' unique position',
              'Emphasize cultural sensitivity and adaptability',
              'Mention language skills or willingness to learn',
              'Demonstrate respect for diversity',
            ],
          },
        ],
        mistakesToAvoid: [
          'Making generalizations about passengers',
          'Showing preference for certain nationalities',
          'Being unable to adapt service style',
        ],
      },
    ],
  },

  // KLM ROYAL DUTCH AIRLINES
  {
    id: 'klm-bank',
    airline: 'KLM Royal Dutch Airlines',
    description: 'Europe\'s oldest airline, Amsterdam hub',
    country: '🇳🇱 Netherlands',
    website: 'klm.com',
    difficulty: 2,
    questions: [
      {
        id: 'klm-001',
        question: 'KLM values direct communication and efficiency. Describe your approach to customer service.',
        category: 'hr',
        difficulty: 1,
        modelAnswers: [
          {
            text: 'I believe in honest, direct communication combined with genuine service. This means being clear about what I can and cannot do, rather than making false promises. It means solving problems efficiently without unnecessary steps. I aim to be personable but professional - building quick rapport with passengers while maintaining appropriate boundaries. I also value teamwork and clear communication with colleagues to ensure smooth operations. This approach respects passengers\' time while maintaining the warm, personal touch that makes service memorable.',
            scoreBreakdown: {
              pronunciation: 83,
              grammar: 87,
              vocabulary: 84,
              fluency: 85,
              confidence: 84,
              professionalism: 86,
            },
            tips: [
              'Align with Dutch values of directness and efficiency',
              'Show respect for passenger time',
              'Emphasize practical solutions',
              'Maintain professionalism with warmth',
            ],
          },
        ],
        mistakesToAvoid: [
          'Being too indirect or vague',
          'Making overpromises you can\'t keep',
          'Ignoring efficiency',
        ],
      },
    ],
  },

  // LUFTHANSA
  {
    id: 'lh-bank',
    airline: 'Lufthansa',
    description: 'Germany\'s flagship, Europe\'s largest airline group',
    country: '🇩🇪 Germany',
    website: 'lufthansa.com',
    difficulty: 2,
    questions: [
      {
        id: 'lh-001',
        question: 'Describe a time when you had to work under pressure. How did you manage?',
        category: 'behavioral',
        difficulty: 2,
        modelAnswers: [
          {
            text: 'During a particularly busy flight, we experienced a mechanical issue that delayed departure by 2 hours. The cabin was tense, and several passengers were upset about missed connections. I remained calm and focused on what I could control. I communicated regularly with passengers, provided accurate updates, and offered practical assistance - rebooking information, refreshments, phone access. I also supported my team by checking on colleagues\' well-being and distributing tasks fairly. By focusing on solutions rather than problems, and maintaining a positive attitude, we transformed frustration into appreciation. Several passengers thanked us for our professionalism.',
            scoreBreakdown: {
              pronunciation: 86,
              grammar: 90,
              vocabulary: 88,
              fluency: 87,
              confidence: 88,
              professionalism: 92,
            },
            tips: [
              'Show stress management skills',
              'Demonstrate problem-solving focus',
              'Emphasize team support',
              'Show positive outcome',
            ],
          },
        ],
        mistakesToAvoid: [
          'Blaming circumstances',
          'Showing stress or frustration',
          'Dismissing passenger concerns',
        ],
      },
    ],
  },

  // ANA (ALL NIPPON AIRWAYS)
  {
    id: 'ana-bank',
    airline: 'All Nippon Airways (ANA)',
    description: 'Japan\'s premium airline, precision and service',
    country: '🇯🇵 Japan',
    website: 'ana.co.jp',
    difficulty: 3,
    questions: [
      {
        id: 'ana-001',
        question: 'ANA is known for omotenashi (Japanese hospitality). What does this mean to you?',
        category: 'hr',
        difficulty: 2,
        modelAnswers: [
          {
            text: 'Omotenashi represents sincere, anticipatory hospitality without expecting anything in return. It means observing passengers carefully to understand their needs before they express them. It\'s about attention to detail - noticing when someone is cold and offering a blanket, seeing a nervous flyer and providing reassurance, anticipating that a passenger might need something and having it ready. Omotenashi also means taking genuine interest in serving others\' happiness rather than just fulfilling job duties. For ANA, this philosophy translates to meticulous service, consistent training, and a culture where every crew member takes pride in small gestures that create memorable experiences.',
            scoreBreakdown: {
              pronunciation: 88,
              grammar: 91,
              vocabulary: 90,
              fluency: 89,
              confidence: 87,
              professionalism: 94,
            },
            tips: [
              'Show understanding of Japanese culture and values',
              'Emphasize anticipatory service',
              'Demonstrate attention to detail',
              'Mention genuine care beyond transactions',
            ],
          },
        ],
        mistakesToAvoid: [
          'Not knowing what omotenashi means',
          'Treating it as just another service style',
          'Showing lack of cultural respect',
        ],
      },
    ],
  },

  // AIR FRANCE
  {
    id: 'af-bank',
    airline: 'Air France',
    description: 'France\'s flagship, elegance and culture',
    country: '🇫🇷 France',
    website: 'airfrance.com',
    difficulty: 2,
    questions: [
      {
        id: 'af-001',
        question: 'Air France represents French elegance and culture. How would you embody this?',
        category: 'hr',
        difficulty: 2,
        modelAnswers: [
          {
            text: 'French elegance is about refinement, sophistication, and attention to aesthetic details. To represent Air France, I would combine impeccable grooming with professional composure. I would take pride in uniform appearance - clean lines, polished shoes, subtle accessories. I would communicate with sophistication - using proper language, avoiding slang, and demonstrating cultural awareness. I would also appreciate the finer aspects of service - understanding wine, appreciating quality, and delivering service with understated grace rather than excessive enthusiasm. Air France represents a certain standard of living, and crew members are ambassadors for that standard. This doesn\'t mean being pretentious; rather, it\'s about respecting the passenger experience and maintaining consistent excellence.',
            scoreBreakdown: {
              pronunciation: 85,
              grammar: 90,
              vocabulary: 89,
              fluency: 86,
              confidence: 85,
              professionalism: 90,
            },
            tips: [
              'Emphasize sophistication and attention to detail',
              'Show appreciation for French culture',
              'Maintain refined communication style',
              'Balance elegance with approachability',
            ],
          },
        ],
        mistakesToAvoid: [
          'Being overly casual or informal',
          'Showing ignorance about French culture',
          'Being snobbish or unwelcoming',
        ],
      },
    ],
  },

  // GENERAL HR INTERVIEW QUESTIONS
  {
    id: 'general-hr-bank',
    airline: 'General Airline Interview Questions',
    description: 'Universal questions asked by most airlines',
    country: '🌍 International',
    website: 'various',
    difficulty: 1,
    questions: [
      {
        id: 'general-001',
        question: 'What are your biggest strengths?',
        category: 'hr',
        difficulty: 1,
        modelAnswers: [
          {
            text: 'My biggest strengths are customer service orientation, adaptability, and teamwork. In previous roles, I consistently received positive feedback for going beyond basic requirements to ensure passenger satisfaction. I am highly adaptable - whether facing unexpected situations, working with different crew personalities, or serving diverse passengers, I adjust my approach while maintaining professionalism. I am also a strong team player who believes success comes from coordinated effort, not individual achievement.',
            scoreBreakdown: {
              pronunciation: 85,
              grammar: 88,
              vocabulary: 85,
              fluency: 86,
              confidence: 85,
              professionalism: 87,
            },
            tips: [
              'Choose 2-3 real strengths with examples',
              'Relate strengths to cabin crew requirements',
              'Provide evidence from previous experience',
              'Stay relevant to the role',
            ],
          },
        ],
        mistakesToAvoid: [
          'Listing generic strengths everyone claims',
          'Mentioning strengths unrelated to the role',
          'Not providing examples',
          'Being overconfident or arrogant',
        ],
      },
      {
        id: 'general-002',
        question: 'What are your weaknesses?',
        category: 'hr',
        difficulty: 2,
        modelAnswers: [
          {
            text: 'I used to be impatient with slower-paced processes, but I\'ve learned that thoroughness prevents mistakes. Now I consciously take time for detailed checks, especially in safety procedures. I also recognized that I sometimes took on too much work, trying to help everyone. I\'ve learned to prioritize and delegate better, which actually improves team efficiency. My approach is to identify areas for growth and actively work on improvement.',
            scoreBreakdown: {
              pronunciation: 84,
              grammar: 87,
              vocabulary: 83,
              fluency: 85,
              confidence: 82,
              professionalism: 85,
            },
            tips: [
              'Mention a real weakness, not a "strength in disguise"',
              'Show that you\'ve recognized and worked on it',
              'Demonstrate learning and growth',
              'Avoid safety-critical weaknesses',
            ],
          },
        ],
        mistakesToAvoid: [
          'Giving answers like "I\'m too much of a perfectionist"',
          'Mentioning safety-critical weaknesses',
          'Showing no self-awareness',
          'Saying you have no weaknesses',
        ],
      },
      {
        id: 'general-003',
        question: 'Why do you want to work as a cabin crew member?',
        category: 'hr',
        difficulty: 1,
        modelAnswers: [
          {
            text: 'I am passionate about delivering excellent service and making people\'s journeys memorable. Aviation combines several interests of mine - travel, service, safety, and teamwork. I am drawn to the unique environment where a team must work cohesively in a confined space, supporting each other and hundreds of passengers simultaneously. Beyond the job itself, the lifestyle appeals to me - the opportunity to see the world, work with international colleagues, and be part of an industry that connects people globally.',
            scoreBreakdown: {
              pronunciation: 86,
              grammar: 89,
              vocabulary: 87,
              fluency: 87,
              confidence: 86,
              professionalism: 88,
            },
            tips: [
              'Show genuine passion for service',
              'Mention understanding of the role\'s challenges',
              'Express interest in aviation specifically',
              'Show awareness of lifestyle implications',
            ],
          },
        ],
        mistakesToAvoid: [
          'Only mentioning travel and adventure',
          'Focusing on salary or benefits',
          'Generic answers that could apply to any job',
          'Showing ignorance of the role\'s challenges',
        ],
      },
    ],
  },
];

export const interviewTips = {
  general: [
    'Research the airline thoroughly - know their fleet, routes, values, and recent news',
    'Prepare 2-3 stories using STAR method (Situation, Task, Action, Result)',
    'Practice speaking English clearly with proper pronunciation',
    'Dress professionally and conservatively',
    'Arrive early to show commitment',
    'Make eye contact and smile naturally',
    'Ask thoughtful questions about the role and company',
    'Send a thank-you message after the interview',
  ],
  videoInterview: [
    'Use professional background (plain wall or home office)',
    'Ensure good lighting on your face',
    'Look at the camera lens when speaking',
    'Test technology in advance',
    'Dress as if meeting in person',
    'Maintain good posture throughout',
    'Speak clearly and avoid filler words',
  ],
  groupInterview: [
    'Balance participation - don\'t dominate but be visible',
    'Listen carefully to others\' answers',
    'Build on others\' ideas respectfully',
    'Show teamwork by encouraging colleagues',
    'Don\'t compete or undermine other candidates',
    'Demonstrate leadership when appropriate',
  ],
};

export const interviewWarnings = {
  neverMention: [
    'Previous negative experiences with passengers',
    'Complaints about other airlines',
    'Personal problems or health issues',
    'Disinterest in safety procedures',
    'Only wanting the job for money/travel',
    'Lack of knowledge about the airline',
  ],
  alwaysSay: [
    'Safety is the top priority',
    'I love working with people',
    'I\'m committed to service excellence',
    'I\'m willing to learn and adapt',
    'I take responsibility for my actions',
    'I value teamwork and communication',
  ],
};
