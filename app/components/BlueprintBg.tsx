"use client";

export default function BlueprintBg() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.08 }}
    >
      <defs>
        <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C8D6E5" strokeWidth="0.5" />
        </pattern>
        <pattern id="grid" width="200" height="200" patternUnits="userSpaceOnUse">
          <rect width="200" height="200" fill="url(#smallGrid)" />
          <path d="M 200 0 L 0 0 0 200" fill="none" stroke="#C8D6E5" strokeWidth="1.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />

      {/* Diagonal accent lines — like structural section cuts */}
      <line x1="0" y1="30%" x2="15%" y2="0" stroke="#FF6B2B" strokeWidth="0.8" opacity="0.4" />
      <line x1="85%" y1="100%" x2="100%" y2="70%" stroke="#FF6B2B" strokeWidth="0.8" opacity="0.4" />

      {/* Circle markers — like survey reference points */}
      <circle cx="10%" cy="20%" r="60" fill="none" stroke="#C8D6E5" strokeWidth="0.5" opacity="0.5" />
      <circle cx="90%" cy="75%" r="90" fill="none" stroke="#C8D6E5" strokeWidth="0.5" opacity="0.3" />

      {/* Cross-hair markers */}
      <g opacity="0.4" stroke="#FF6B2B" strokeWidth="0.8">
        <line x1="9.5%" y1="19%" x2="10.5%" y2="21%" />
        <line x1="10.5%" y1="19%" x2="9.5%" y2="21%" />
        <line x1="89.5%" y1="74%" x2="90.5%" y2="76%" />
        <line x1="90.5%" y1="74%" x2="89.5%" y2="76%" />
      </g>

      {/* Data flow lines */}
      <path
        d="M 5% 50% Q 30% 30% 50% 50% Q 70% 70% 95% 45%"
        fill="none"
        stroke="#FF6B2B"
        strokeWidth="1"
        opacity="0.25"
        strokeDasharray="8 4"
      />
    </svg>
  );
}
