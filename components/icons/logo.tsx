export const MyIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="90"
    height="90"
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0F8C8C" />
        <stop offset="100%" stopColor="#0A2C4E" />
      </linearGradient>
    </defs>

    <circle cx="35" cy="35" r="35" fill="url(#grad)" />

    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      fontSize="44"
      fontWeight="bold"
      fill="white"
      fontFamily="Arial, Helvetica, sans-serif"
      dominantBaseline="middle"
    >
      UI
    </text>
  </svg>
);
