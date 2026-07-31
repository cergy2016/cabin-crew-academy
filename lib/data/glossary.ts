export interface GlossaryCategory {
  category: string;
  expressions: string[];
}

export interface GlossaryUnit {
  unitNumber: number;
  unitId: string;
  unitTitle: string;
  icon: string;
  categories: GlossaryCategory[];
}

export const glossaryUnits: GlossaryUnit[] = [
  {
    unitNumber: 1,
    unitId: 'unit-1',
    unitTitle: 'The Pre-Flight Briefing',
    icon: '🧳',
    categories: [
      {
        category: 'Introducing yourself to someone you do not know',
        expressions: ["My name's Paola. Pleased to meet you.", "Hi there, I'm Tom."],
      },
      {
        category: "Finding out someone's name",
        expressions: ["Sorry, what's your name?", 'Excuse me, could you tell me your name, please?'],
      },
      {
        category: 'Introducing other people',
        expressions: ['This is my colleague, Katrin.', 'This is Hemal.'],
      },
      {
        category: 'Giving directions',
        expressions: [
          'Can I help you, madam?',
          'Can I help you, sir?',
          'This way, please.',
          'Here you are.',
          'Straight across the cabin and turn left.',
          "That's right.",
          'Carry on down the cabin.',
        ],
      },
      {
        category: 'Showing how something works',
        expressions: ['Can you show me how it works?', 'Of course. / Certainly.', 'This is how it works.', 'First of all, you...'],
      },
      {
        category: 'Saying hello to people you know or have met before',
        expressions: [
          'Hello again, how are you? Fine thanks. And you?',
          "How's it going?",
          'How are you?',
          'Hi there! Hi!',
          'Is that OK / all right with you?',
        ],
      },
    ],
  },
  {
    unitNumber: 2,
    unitId: 'unit-2',
    unitTitle: 'Welcome on Board',
    icon: '👋',
    categories: [
      {
        category: 'Polite requests',
        expressions: [
          'Can I see your boarding pass?',
          'Can I look at your seat number, please?',
          'Could I please see your boarding pass?',
          'Could I check your seat number, please?',
          'Please can I check the seating arrangements?',
          'Please would you sit here for the moment?',
          'Would you follow me, please?',
          'Would you please turn off your mobile phone?',
          'Would you mind just taking this seat until I have checked the passenger list?',
        ],
      },
      {
        category: 'Being attentive and caring to passengers',
        expressions: [
          'Hello, madam, are you feeling better now?',
          'Can I help you, sir?',
          'Did you call, sir?',
          'Hello there, is everything all right?',
          'No problem, madam.',
          "I do apologize. I'll get it immediately.",
          'You are quite right, sir.',
          "Yes, that's fine. Go ahead.",
          'Welcome aboard.',
          'Good morning. Good afternoon. Good evening.',
          'Hello, how are you?',
          'Hello there, how are you today?',
        ],
      },
      {
        category: 'Comfort expressions',
        expressions: [
          'Here you are.',
          'Can I get you anything else?',
          'Anything else I can do for you?',
          'Let me put the call light on (for you).',
          "Don't worry, you'll be fine.",
          'Of course, no problem at all.',
          "I'll be back in five minutes.",
        ],
      },
    ],
  },
  {
    unitNumber: 3,
    unitId: 'unit-3',
    unitTitle: 'After Take-Off and Into the Flight',
    icon: '✈️',
    categories: [
      {
        category: 'Dealing with passenger needs',
        expressions: ['Very well, thanks.', 'Not too bad.', 'Can I help you?', 'What can I do for you?', 'How can I help?'],
      },
      {
        category: 'Checking and clarifying',
        expressions: [
          'Can I just check what the flight time is?',
          "Can you confirm that your crew is familiar with the cockpit procedures?",
          'Can I clarify something?',
          'Can I clarify the time of the meals service?',
          'Let me help you.',
          "I'll find out for you.",
          'Let me explain.',
          "What's the problem?",
        ],
      },
      {
        category: 'Asking passengers politely to wait',
        expressions: [
          "I'm afraid we're busy just now. Can you wait a moment?",
          "Can you wait until we've finished the service?",
          "Leave it with me and I'll do it as soon as possible. I'll get back to you, I promise.",
        ],
      },
    ],
  },
  {
    unitNumber: 4,
    unitId: 'unit-4',
    unitTitle: 'Food and Drinks',
    icon: '🍽️',
    categories: [
      {
        category: 'Offering a choice',
        expressions: [
          'What would you like, sir?',
          'What would you like to drink?',
          'What can I get you, madam?',
          'Here we are, sir.',
          'There you are, madam.',
        ],
      },
      {
        category: 'Money transactions',
        expressions: [
          'The perfume costs 41 dollars.',
          'The scarves are 72 dollars each.',
          'Forty-one plus [+] 72 makes 113 dollars.',
          'Four times [x] eight equals [=] 32 dollars.',
          "A hundred dollars minus [-] 85 - that's 15 dollars change.",
          'That comes to 120 euros.',
          'How will you be paying? By card or with cash?',
          'How would you like to pay?',
          "Here's your receipt, your card and your gifts.",
        ],
      },
    ],
  },
  {
    unitNumber: 5,
    unitId: 'unit-5',
    unitTitle: 'Minor Passenger Problems',
    icon: '🤔',
    categories: [
      {
        category: 'Finding out the problem',
        expressions: ['Did you call, sir?', "What's the problem?", "What's the matter?", 'How can I help (you)?'],
      },
      {
        category: 'Offering to help (1)',
        expressions: [
          "I'll check on our arrival time and get back to you.",
          "I'll ask if there is a doctor or nurse on board.",
          "I'll get you a blanket.",
          "I'll get it now.",
          "I'll show you how it works.",
          "I'll get you another one.",
        ],
      },
      {
        category: 'Apologizing',
        expressions: [
          "Sorry, we don't have any peppermint - my mistake.",
          "I'm afraid we've only got apple juice and orange juice today.",
          'I do apologize.',
          "I am sorry, but we've run out of cheese.",
          'I can only apologize, sir.',
          'Sorry about that.',
          "I'm really sorry, we haven't got any left.",
        ],
      },
    ],
  },
  {
    unitNumber: 6,
    unitId: 'unit-6',
    unitTitle: 'Is There a Doctor on Board?',
    icon: '🩺',
    categories: [
      {
        category: 'Check',
        expressions: ['Do you have any pain?', 'Do you feel well enough to sit up?', 'How are you feeling?'],
      },
      {
        category: 'Call',
        expressions: ['I need some help.', 'Get the first aid kit immediately.', 'Can you get her a glass of water, please?'],
      },
      {
        category: 'Care',
        expressions: [
          "I'm going to clean up the wound and put a dressing over it.",
          'Can you hold this compress against your forehead?',
        ],
      },
      {
        category: 'Giving instructions to crew',
        expressions: [
          'Bilal, grab the oxygen.',
          'Get Safiya to call Anton.',
          'Help me get the mask over his head.',
          'Tell the captain.',
          'Make an announcement immediately.',
        ],
      },
      {
        category: 'Talking about the past',
        expressions: ['What happened?', 'What was the problem?', 'What did you do?', 'Was there a doctor on board?'],
      },
    ],
  },
  {
    unitNumber: 7,
    unitId: 'unit-7',
    unitTitle: 'In-Flight Emergencies',
    icon: '🚨',
    categories: [
      {
        category: 'Giving instructions',
        expressions: [
          'Stay in your seats.',
          'Remain calm.',
          'Pull down the oxygen mask.',
          'Pull it down over your nose and mouth.',
          'Breathe normally.',
          'Please keep quiet.',
          "Don't worry, you'll be fine.",
          'Listen, stop.',
          "Don't be upset. We'll take care of her.",
          'Keep quiet please - you are disturbing others.',
          "Don't shout, speak normally.",
          "Breathe slowly and deeply. That's it.",
          'Calm down now, please.',
          "That's enough - control yourself.",
          "Try to relax. I'll stay with you.",
          'Listen carefully please, these instructions are for you.',
          'Wait until we land.',
        ],
      },
      {
        category: 'Instructions not to do something',
        expressions: [
          'Do not leave your seats until instructed to do so by your crew.',
          'Do not / Don\'t take anything with you as you leave the aircraft.',
          "Do not / Don't take handbags or briefcases.",
        ],
      },
    ],
  },
  {
    unitNumber: 8,
    unitId: 'unit-8',
    unitTitle: 'Complaints and Disruptive Passengers',
    icon: '😤',
    categories: [
      {
        category: 'Offering to help (2)',
        expressions: [
          'Let me just check the special meals list.',
          'Let me get an official form for you.',
          'Let me see if I can get you another one.',
          'Let me get you a blanket.',
          "If the situation doesn't get better, then I'll try to find you another seat.",
          "If there's still a problem, then I'll come over.",
          "If there is still a problem, I won't leave you on your own.",
          "I'll get you another drink if you keep your voices down.",
        ],
      },
      {
        category: 'Special requests',
        expressions: [
          'Could I ask you a special favour?',
          'Would you mind just keeping the noise down a little?',
          'Please could you come over to help me?',
        ],
      },
      {
        category: 'Expressing obligation',
        expressions: [
          'I have to speak to the captain.',
          "I've got to speak to the captain.",
          'I must speak to the captain.',
          'We must call the police / security.',
          'We need to call the police / security.',
          'You have to sit down, sir.',
          'You have to stop that now.',
          'You have to be quiet.',
          'You have to do what the captain says.',
        ],
      },
    ],
  },
  {
    unitNumber: 9,
    unitId: 'unit-9',
    unitTitle: 'Preparing for Landing',
    icon: '🛬',
    categories: [
      {
        category: 'Word order in multi-word verbs',
        expressions: [
          'Put away the case. Put it away.',
          'Turn / Switch off your electronic devices. Turn / Switch them off.',
          'Fold away your table. Fold it away.',
          'Turn up / down the heating. Turn it up / down.',
          'Put your seat back upright. Put it upright.',
          'Put your bags in the locker. Put them in the locker.',
        ],
      },
      {
        category: 'Talking about time',
        expressions: [
          'What time / When does the flight land / take off? It lands / takes off at 10.15.',
          'What time / When is the flight? At 10.15.',
          'How long does it take to get / go to the domestic terminal? It takes about five minutes.',
          'How long is the flight? About two hours.',
        ],
      },
      {
        category: 'Checking things have been done',
        expressions: [
          "Have you done all the checks? Yes, I've completed all the checks. / Yes, I have.",
          "Have you done all the clearing in? No, I haven't cleared in all the rows yet. / No, I haven't.",
          "Has she finished the bar paperwork? Yes, she has. / No, she hasn't.",
          "Has she done the final checks? No, she hasn't.",
          'Have you secured the trolley in the galley? Yes, I have.',
          "Have they checked the tables are upright? No, they haven't.",
          'Have we done everything? Yes, we have.',
        ],
      },
    ],
  },
];
