export interface VisualGuide {
  id: string;
  title: string;
  description: string;
  /** 'image' posters are flattened raster posters; 'interactive' posters are vector HTML pages served from /posters */
  type: 'image' | 'interactive';
  src: string;
  termCount: number;
}

export const visualGuides: VisualGuide[] = [
  {
    id: 'exterior',
    title: 'Aircraft Exterior Vocabulary',
    description: 'Airbus A350 exterior — fuselage, wing, and landing gear terminology.',
    type: 'image',
    src: '/images/posters/exterior-vocabulary.webp',
    termCount: 32,
  },
  {
    id: 'cabin-interior',
    title: 'Aircraft Cabin Vocabulary',
    description: 'Inside a modern passenger aircraft — 3-3 economy layout, premium vector poster.',
    type: 'interactive',
    src: '/posters/aircraft-cabin-vocabulary.html',
    termCount: 28,
  },
  {
    id: 'cockpit',
    title: 'Cockpit Vocabulary',
    description: 'Airbus A350-900 flight deck — controls, displays, and crew positions.',
    type: 'image',
    src: '/images/posters/cockpit-vocabulary.webp',
    termCount: 18,
  },
  {
    id: 'cabin-service',
    title: 'Cabin Service Vocabulary',
    description: 'In-flight service scene — meal trays, beverages, and passenger amenities.',
    type: 'image',
    src: '/images/posters/cabin-service-vocabulary.webp',
    termCount: 20,
  },
  {
    id: 'galley',
    title: 'Aircraft Galley Vocabulary',
    description: 'Galley equipment and carts used for in-flight food and drink service.',
    type: 'image',
    src: '/images/posters/galley-vocabulary.webp',
    termCount: 18,
  },
  {
    id: 'emergency-equipment',
    title: 'Aircraft Emergency Equipment',
    description: 'Visual dictionary of safety and emergency gear carried on board.',
    type: 'image',
    src: '/images/posters/emergency-equipment.webp',
    termCount: 16,
  },
  {
    id: 'airport',
    title: 'Airport Vocabulary',
    description: 'International terminal — check-in, security, gates, and arrivals.',
    type: 'image',
    src: '/images/posters/airport-vocabulary.webp',
    termCount: 21,
  },
  {
    id: 'maintenance',
    title: 'Aircraft Maintenance Vocabulary',
    description: 'Hangar maintenance scene — tools, roles, and structural components.',
    type: 'interactive',
    src: '/posters/aircraft-maintenance-vocabulary.html',
    termCount: 25,
  },
  {
    id: 'nato-alphabet',
    title: 'NATO Phonetic Alphabet',
    description: 'World Aviation Alphabet, Alpha to Zulu — essential for clear radio communication.',
    type: 'image',
    src: '/images/posters/nato-alphabet.webp',
    termCount: 26,
  },
  {
    id: 'airport-signs',
    title: 'International Airport Signs',
    description: 'Essential wayfinding pictograms and vocabulary for navigating any airport.',
    type: 'image',
    src: '/images/posters/airport-signs.webp',
    termCount: 11,
  },
  {
    id: 'safety-demo',
    title: 'Safety Demonstration Sequence',
    description: 'The standard 6-step passenger safety briefing, illustrated step by step.',
    type: 'image',
    src: '/images/posters/safety-demo.webp',
    termCount: 6,
  },
  {
    id: 'flight-phases',
    title: 'Flight Phases',
    description: 'Cabin crew duties across all 9 phases of flight, from boarding to taxi-in.',
    type: 'image',
    src: '/images/posters/flight-phases.webp',
    termCount: 9,
  },
  {
    id: 'medical-emergencies',
    title: 'Medical Emergencies',
    description: 'Recognition signs and response for 8 common in-flight medical emergencies.',
    type: 'image',
    src: '/images/posters/medical-emergencies.webp',
    termCount: 8,
  },
  {
    id: 'body-language',
    title: 'Cabin Crew Body Language',
    description: 'Professional non-verbal communication standards — smile, eye contact, posture.',
    type: 'image',
    src: '/images/posters/body-language.webp',
    termCount: 6,
  },
  {
    id: 'interview-guide',
    title: 'Interview Success Guide',
    description: 'Visual guide to grooming, assessment day, group exercises, and the STAR method.',
    type: 'image',
    src: '/images/posters/interview-guide.webp',
    termCount: 8,
  },
  {
    id: 'training-pathway',
    title: 'Training Pathway Overview',
    description: 'The full Cabin Crew Academy curriculum — 10 core modules, aircraft basics to career prep.',
    type: 'image',
    src: '/images/posters/training-pathway.webp',
    termCount: 10,
  },
];
