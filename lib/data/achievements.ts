import type { Achievement, Badge } from '../types';

export const achievements: Achievement[] = [
  {
    id: 'first-lesson',
    name: 'First Step ✈️',
    description: 'Complete your first lesson',
    icon: '🎬',
    requirement: 'Complete any lesson',
    xpReward: 50,
  },
  {
    id: 'speaking-master',
    name: 'Speaking Master 🎤',
    description: 'Achieve 90%+ score in speaking exercises',
    icon: '🎤',
    requirement: 'Score 90% in speaking exercises',
    xpReward: 200,
  },
  {
    id: 'perfect-score',
    name: 'Perfect Score 💯',
    description: 'Get 100% on any quiz',
    icon: '💯',
    requirement: 'Score 100% on any quiz',
    xpReward: 300,
  },
  {
    id: 'seven-day-streak',
    name: 'Consistency Champion 🔥',
    description: 'Maintain a 7-day learning streak',
    icon: '🔥',
    requirement: 'Study for 7 consecutive days',
    xpReward: 250,
  },
  {
    id: 'vocabulary-master',
    name: 'Vocabulary Master 📖',
    description: 'Learn 500+ vocabulary words',
    icon: '📖',
    requirement: 'Learn 500 vocabulary words',
    xpReward: 400,
  },
  {
    id: 'interview-ready',
    name: 'Interview Ready 💼',
    description: 'Complete 10 interview practice sessions',
    icon: '💼',
    requirement: 'Complete 10 interview practices',
    xpReward: 500,
  },
  {
    id: 'level-10',
    name: 'Aviation Expert ✈️',
    description: 'Reach Level 10',
    icon: '✈️',
    requirement: 'Earn 9,000+ XP to reach Level 10',
    xpReward: 1000,
  },
  {
    id: 'night-owl',
    name: 'Night Owl 🌙',
    description: 'Study between midnight and 6 AM',
    icon: '🌙',
    requirement: 'Study during night hours',
    xpReward: 75,
  },
  {
    id: 'grammar-genius',
    name: 'Grammar Genius 📝',
    description: 'Score 95%+ in all grammar exercises',
    icon: '📝',
    requirement: 'Perfect grammar performance',
    xpReward: 350,
  },
  {
    id: 'listening-expert',
    name: 'Listening Expert 👂',
    description: 'Score 95%+ in listening comprehension',
    icon: '👂',
    requirement: 'Perfect listening comprehension',
    xpReward: 350,
  },
  {
    id: 'all-units-complete',
    name: 'Graduate 🎓',
    description: 'Complete all available units',
    icon: '🎓',
    requirement: 'Complete all units',
    xpReward: 2000,
  },
  {
    id: 'social-butterfly',
    name: 'Social Butterfly 🦋',
    description: 'Join the community and introduce yourself',
    icon: '🦋',
    requirement: 'Participate in community',
    xpReward: 100,
  },
];

export const badges: Badge[] = [
  {
    id: 'bronze-badge',
    name: 'Bronze Badge',
    description: 'Reach Level 5',
    icon: '🥉',
  },
  {
    id: 'silver-badge',
    name: 'Silver Badge',
    description: 'Reach Level 15',
    icon: '🥈',
  },
  {
    id: 'gold-badge',
    name: 'Gold Badge',
    description: 'Reach Level 25',
    icon: '🥇',
  },
  {
    id: 'platinum-badge',
    name: 'Platinum Badge',
    description: 'Reach Level 50',
    icon: '💎',
  },
  {
    id: 'icao-level-4',
    name: 'ICAO Level 4',
    description: 'Complete all ICAO Level 4 lessons',
    icon: '✈️',
  },
  {
    id: 'icao-level-5',
    name: 'ICAO Level 5',
    description: 'Complete all ICAO Level 5 lessons',
    icon: '✈️✈️',
  },
  {
    id: 'icao-level-6',
    name: 'ICAO Level 6',
    description: 'Complete all ICAO Level 6 lessons',
    icon: '✈️✈️✈️',
  },
  {
    id: 'perfect-week',
    name: 'Perfect Week',
    description: 'Study every day for a week',
    icon: '📅',
  },
];

export const dailyChallenges = [
  {
    title: 'Pronunciation Challenge',
    description: 'Perfect your pronunciation of 5 aviation terms',
    xpReward: 50,
  },
  {
    title: 'Listening Sprint',
    description: 'Complete 3 listening exercises without mistakes',
    xpReward: 75,
  },
  {
    title: 'Interview Practice',
    description: 'Practice one interview question and score 80%+',
    xpReward: 100,
  },
  {
    title: 'Vocabulary Builder',
    description: 'Learn and master 10 new vocabulary words',
    xpReward: 60,
  },
  {
    title: 'Grammar Master',
    description: 'Complete all grammar exercises in a lesson',
    xpReward: 80,
  },
];
