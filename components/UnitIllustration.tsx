interface UnitIllustrationProps {
  unit: number;
  className?: string;
}

/**
 * Original hand-authored line-art illustrations, one per unit theme.
 * Uses currentColor so it inherits text color for light/dark theming.
 */
export default function UnitIllustration({ unit, className = 'w-full h-full' }: UnitIllustrationProps) {
  const common = {
    viewBox: '0 0 120 120',
    className,
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (unit) {
    // 1 — Pre-Flight Briefing: clipboard with checklist
    case 1:
      return (
        <svg {...common}>
          <rect x="34" y="24" width="52" height="72" rx="4" />
          <rect x="48" y="18" width="24" height="12" rx="3" />
          <line x1="46" y1="46" x2="74" y2="46" />
          <line x1="46" y1="58" x2="74" y2="58" />
          <line x1="46" y1="70" x2="64" y2="70" />
          <path d="M43 45 l2 2 l4 -5" strokeWidth="2" />
          <path d="M43 57 l2 2 l4 -5" strokeWidth="2" />
          <circle cx="86" cy="88" r="14" />
          <path d="M79 88 h14 M86 81 v14" strokeWidth="1.2" opacity="0.5" />
        </svg>
      );

    // 2 — Welcome on Board: open aircraft door with steps
    case 2:
      return (
        <svg {...common}>
          <path d="M30 100 V40 a30 30 0 0 1 60 0 v60 z" />
          <path d="M46 100 V44 a14 22 0 0 1 28 0 v56" />
          <line x1="24" y1="100" x2="96" y2="100" />
          <path d="M46 70 q-14 4 -14 16" strokeDasharray="1 5" opacity="0.6" />
          <circle cx="60" cy="56" r="3" fill="currentColor" stroke="none" />
        </svg>
      );

    // 3 — After Take-off: aircraft climbing through clouds
    case 3:
      return (
        <svg {...common}>
          <path d="M32 66 L88 40 L96 44 L60 68 L64 82 L54 86 L48 70 L32 74 L26 68 Z" />
          <path d="M22 90 q8 -8 16 0 q6 -6 14 0 q6 -6 14 0" opacity="0.55" />
          <path d="M60 96 q8 -8 16 0 q6 -6 14 0" opacity="0.35" />
        </svg>
      );

    // 4 — Food & Drinks: tray with cup and cutlery
    case 4:
      return (
        <svg {...common}>
          <rect x="20" y="78" width="80" height="10" rx="3" />
          <rect x="26" y="40" width="26" height="20" rx="3" />
          <circle cx="70" cy="50" r="12" />
          <path d="M70 38 v-4 M64 34 v6 M76 34 v6" opacity="0.6" />
          <line x1="88" y1="34" x2="88" y2="78" />
          <path d="M84 34 v10 M92 34 v10 M84 44 h8 v10" opacity="0.7" />
        </svg>
      );

    // 5 — Minor Passenger Problems: seat with question mark
    case 5:
      return (
        <svg {...common}>
          <path d="M40 96 V56 a10 10 0 0 1 10 -10 h20 a10 10 0 0 1 10 10 v40" />
          <line x1="34" y1="96" x2="86" y2="96" />
          <line x1="40" y1="70" x2="80" y2="70" opacity="0.5" />
          <circle cx="88" cy="34" r="16" />
          <path d="M83 30 a5 5 0 1 1 8 4 q-3 2 -3 6" strokeWidth="1.4" />
          <circle cx="88" cy="44" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );

    // 6 — Doctor on board: medical cross with pulse line
    case 6:
      return (
        <svg {...common}>
          <circle cx="60" cy="60" r="38" />
          <path d="M60 42 v18 h18" opacity="0" />
          <rect x="50" y="34" width="20" height="52" rx="4" />
          <rect x="34" y="50" width="52" height="20" rx="4" />
          <path d="M24 78 h14 l6 -14 l8 24 l6 -14 h14" opacity="0.5" strokeWidth="1.2" />
        </svg>
      );

    // 7 — In-Flight Emergencies: oxygen mask
    case 7:
      return (
        <svg {...common}>
          <path d="M42 58 a18 14 0 1 0 36 0 a18 14 0 1 0 -36 0" />
          <path d="M50 68 q10 8 20 0" opacity="0.6" />
          <path d="M60 44 v-14" />
          <circle cx="60" cy="24" r="6" />
          <path d="M40 60 q-14 4 -16 20" opacity="0.5" />
          <path d="M80 60 q14 4 16 20" opacity="0.5" />
        </svg>
      );

    // 8 — Complaints & disruptive passengers: speech bubble with exclamation
    case 8:
      return (
        <svg {...common}>
          <path d="M26 34 h68 a6 6 0 0 1 6 6 v34 a6 6 0 0 1 -6 6 H56 l-16 14 v-14 H26 a6 6 0 0 1 -6 -6 V40 a6 6 0 0 1 6 -6 Z" />
          <line x1="60" y1="48" x2="60" y2="62" strokeWidth="2.4" />
          <circle cx="60" cy="70" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      );

    // 9 — Preparing for landing: aircraft descending to runway
    case 9:
      return (
        <svg {...common}>
          <path d="M20 84 h80" strokeDasharray="6 6" opacity="0.5" />
          <path d="M34 68 L82 48 L90 52 L58 72 L62 84 L52 88 L46 74 L30 78 L24 72 Z" />
          <path d="M78 30 q6 -8 14 -6" opacity="0.5" />
        </svg>
      );

    // 10 — Saying Goodbye: waving hand beside a door
    case 10:
      return (
        <svg {...common}>
          <rect x="28" y="26" width="40" height="68" rx="3" />
          <line x1="28" y1="94" x2="68" y2="94" opacity="0.6" />
          <circle cx="60" cy="60" r="1.6" fill="currentColor" stroke="none" />
          <path d="M84 40 v20 M84 40 q6 -6 6 2 v10 q0 8 -8 10 h-6 q-8 0 -10 -8 l-4 -10 q-2 -5 3 -6 q4 -1 6 3 l3 6" strokeWidth="1.4" />
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <circle cx="60" cy="60" r="30" />
        </svg>
      );
  }
}
