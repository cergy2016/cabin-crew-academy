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
];
