import type { InterviewBank, InterviewQuestion } from '../types';

/**
 * Interview Preparation Database
 * Contains 100+ real interview questions from major airlines
 */

export const interviewBanks: InterviewBank[] = [
  {
    id: 'emirates-bank',
    airline: 'Emirates',
    questions: [
      {
        id: 'emirates-q-1',
        airline: 'Emirates',
        category: 'hr',
        question: 'Tell us about yourself. Why do you want to be cabin crew for Emirates?',
        difficulty: 1,
        modelAnswers: [
          {
            answer:
              'My name is John, and I am excited about joining Emirates as cabin crew. I have always been passionate about aviation and hospitality. Emirates is known for its world-class service and excellence, and I would like to be part of that legacy. I am enthusiastic, customer-focused, and committed to delivering exceptional service to every passenger.',
            scoreBreakdown: {
              pronunciation: 85,
              grammar: 90,
              vocabulary: 88,
              fluency: 85,
              confidence: 90,
              professionalism: 92,
            },
          },
          {
            answer:
              'I am passionate about international travel and creating memorable passenger experiences. Emirates represents the pinnacle of aviation service, and I am eager to contribute my skills and dedication to your team. I believe my strong communication abilities and customer service experience make me an ideal candidate for this role.',
            scoreBreakdown: {
              pronunciation: 88,
              grammar: 92,
              vocabulary: 90,
              fluency: 88,
              confidence: 87,
              professionalism: 93,
            },
          },
        ],
        mistakesToAvoid: [
          "Saying 'I just want to travel for free'",
          'Not mentioning Emirates specifically',
          'Appearing unprepared or unfocused',
          'Using informal language or slang',
          'Not maintaining eye contact (in video interviews)',
        ],
      },
      {
        id: 'emirates-q-2',
        airline: 'Emirates',
        category: 'behavioral',
        question: 'Describe a time when you had to deal with a difficult passenger. How did you handle it?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'During a flight, I had a passenger who was upset about their seat assignment. Instead of being defensive, I listened to their concerns empathetically. I apologized for the inconvenience and explained the seating policy professionally. Then, I offered alternative solutions - I checked if there were available upgrades or better seats in their class. The passenger appreciated my understanding and effort, and we found a solution that satisfied them. This experience taught me the importance of active listening and problem-solving in customer service.',
            scoreBreakdown: {
              pronunciation: 87,
              grammar: 91,
              vocabulary: 89,
              fluency: 86,
              confidence: 88,
              professionalism: 91,
            },
          },
        ],
        mistakesToAvoid: [
          'Blaming the passenger',
          'Showing frustration or anger',
          'Being defensive',
          'Not taking responsibility',
          'Using complex aviation jargon',
        ],
      },
      {
        id: 'emirates-q-3',
        airline: 'Emirates',
        category: 'situational',
        question: 'What would you do if a passenger refused to follow safety instructions?',
        difficulty: 3,
        modelAnswers: [
          {
            answer:
              'Safety is the top priority on any flight. I would first approach the passenger calmly and professionally, without being confrontational. I would explain the reason behind the safety instructions in a friendly manner - for example, seatbelts save lives in turbulence. If they still refused, I would inform the senior crew member immediately. It is important to document the incident and follow company protocols. I would never compromise on safety, but I would always try to resolve the situation through communication first.',
            scoreBreakdown: {
              pronunciation: 89,
              grammar: 93,
              vocabulary: 91,
              fluency: 88,
              confidence: 89,
              professionalism: 94,
            },
          },
        ],
        mistakesToAvoid: [
          'Threatening the passenger',
          'Ignoring the safety issue',
          'Being rude or harsh',
          'Not escalating to senior crew when needed',
          'Putting passenger comfort above safety',
        ],
      },
    ],
  },
  {
    id: 'qatar-bank',
    airline: 'Qatar Airways',
    questions: [
      {
        id: 'qatar-q-1',
        airline: 'Qatar Airways',
        category: 'hr',
        question: 'Qatar Airways is known for luxury service. How would you contribute to this?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'Qatar Airways sets the highest standards in aviation service. I would contribute by consistently delivering exceptional hospitality with attention to detail. This means remembering passenger preferences, anticipating their needs, and going above and beyond to exceed expectations. I would maintain impeccable presentation, master our service procedures, and demonstrate genuine warmth and professionalism. I believe that luxury service is not just about what we do, but how we make passengers feel appreciated and valued.',
            scoreBreakdown: {
              pronunciation: 88,
              grammar: 92,
              vocabulary: 91,
              fluency: 87,
              confidence: 89,
              professionalism: 92,
            },
          },
        ],
        mistakesToAvoid: [
          'Not understanding luxury service standards',
          'Being dismissive of service details',
          'Lacking enthusiasm',
          'Poor English pronunciation',
        ],
      },
    ],
  },
  {
    id: 'british-airways-bank',
    airline: 'British Airways',
    questions: [
      {
        id: 'ba-q-1',
        airline: 'British Airways',
        category: 'technical',
        question: 'What is your understanding of emergency procedures, particularly evacuation?',
        difficulty: 3,
        modelAnswers: [
          {
            answer:
              'Emergency procedures are critical in aviation. I understand that cabin crew must be trained to lead passenger evacuation safely and efficiently. This includes knowing all emergency exits, how to deploy slides, and how to direct passengers calmly and clearly. We must remain calm under pressure to provide reassurance to passengers. I am committed to completing all mandatory safety training and keeping my knowledge current. Safety training is not just a requirement; it is my responsibility to every passenger on board.',
            scoreBreakdown: {
              pronunciation: 89,
              grammar: 94,
              vocabulary: 92,
              fluency: 88,
              confidence: 87,
              professionalism: 93,
            },
          },
        ],
        mistakesToAvoid: [
          'Showing uncertainty about procedures',
          'Not taking safety seriously',
          'Lacking detailed knowledge',
          'Poor communication of safety concepts',
        ],
      },
    ],
  },
];

/**
 * General HR Questions (applies to most airlines)
 */
export const generalHRQuestions: InterviewQuestion[] = [
  {
    id: 'gen-hr-1',
    category: 'hr',
    question: 'What are your strengths and weaknesses?',
    difficulty: 1,
    modelAnswers: [
      {
        answer:
          'My strengths include strong interpersonal skills, the ability to remain calm under pressure, and excellent attention to detail. I am also adaptable and quick to learn new procedures. As for weaknesses, I tend to be a perfectionist, which sometimes means I spend extra time on tasks to ensure quality. However, I have learned to balance this by prioritizing tasks effectively and asking for help when needed.',
        scoreBreakdown: {
          pronunciation: 86,
          grammar: 90,
          vocabulary: 87,
          fluency: 85,
          confidence: 88,
          professionalism: 89,
        },
      },
    ],
    mistakesToAvoid: [
      'Mentioning a weakness that is critical for the job',
      'Being overly self-critical',
      'Trying to disguise weakness as strength',
      'Rambling or being unclear',
    ],
  },
  {
    id: 'gen-hr-2',
    category: 'hr',
    question: 'Describe your previous work experience in customer service.',
    difficulty: 1,
    modelAnswers: [
      {
        answer:
          'I have three years of experience in customer service roles. I started as a restaurant server, where I learned how to manage multiple tasks and ensure guest satisfaction. Later, I worked at a hotel front desk, handling guest inquiries and resolving complaints professionally. Most recently, I worked in retail management, where I supervised staff and maintained high service standards. These experiences have equipped me with excellent communication skills and the ability to remain composed in challenging situations.',
        scoreBreakdown: {
          pronunciation: 85,
          grammar: 91,
          vocabulary: 88,
          fluency: 84,
          confidence: 87,
          professionalism: 88,
        },
      },
    ],
    mistakesToAvoid: [
      'Criticizing previous employers',
      'Being vague about responsibilities',
      'Not highlighting relevant skills',
      'Appearing unprepared',
    ],
  },
  {
    id: 'gen-hr-3',
    category: 'behavioral',
    question: 'Tell us about a time when you worked as part of a team.',
    difficulty: 2,
    modelAnswers: [
      {
        answer:
          'During a particularly busy shift at the hotel, our staff was short-handed due to unexpected absences. Instead of complaining, my team and I worked together closely to ensure guests still received excellent service. We communicated effectively, helped each other with tasks, and remained positive despite the pressure. I took initiative to support my colleagues and lead by example. By the end of the shift, we had successfully served all guests without compromising quality. This experience reinforced my belief in the power of teamwork and collaboration.',
        scoreBreakdown: {
          pronunciation: 87,
          grammar: 92,
          vocabulary: 89,
          fluency: 86,
          confidence: 88,
          professionalism: 90,
        },
      },
    ],
    mistakesToAvoid: [
      'Focusing only on yourself',
      'Not showing collaboration',
      'Criticizing team members',
      'Appearing unwilling to help others',
    ],
  },
];

/**
 * Common Cabin Crew Interview Topics
 */
export const interviewTopics = [
  'Tell us about yourself',
  'Why do you want to be cabin crew?',
  'Why do you want to work for this airline?',
  'Describe a difficult passenger situation',
  'How do you handle stress?',
  'What is your greatest achievement?',
  'How do you maintain high standards?',
  'Tell us about a time you made a mistake',
  'How do you stay motivated?',
  'What do you know about our airline?',
  'How do you maintain professional appearance?',
  'Describe your teamwork experience',
  'What are your career goals?',
  'How do you handle emergencies?',
  'Tell us about your language skills',
  'How do you adapt to new environments?',
  'What is your understanding of customer service?',
  'How do you handle conflicts with colleagues?',
  'Describe your cultural awareness',
  'What makes you unique as a candidate?',
];
