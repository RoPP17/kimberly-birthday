import React from 'react';

// Cinta Washi Tape decorativa
export const WashiTape = ({ color = 'peach', className = '', style = {} }) => {
  const colorMap = {
    peach: 'rgba(248, 177, 149, 0.75)',
    mint: 'rgba(162, 210, 191, 0.75)',
    lavender: 'rgba(212, 195, 224, 0.75)',
    mustard: 'rgba(233, 184, 114, 0.75)',
    coral: 'rgba(255, 107, 107, 0.65)'
  };

  return (
    <div
      className={`washi-tape ${className}`}
      style={{
        backgroundColor: colorMap[color] || colorMap.peach,
        ...style
      }}
    />
  );
};

// Alfiler de costura / chincheta dibujada a mano
export const HandDrawnPin = ({ color = '#FF6B6B', className = '', style = {} }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block drop-shadow-sm ${className}`}
    style={style}
  >
    <circle cx="16" cy="12" r="8" fill={color} />
    <circle cx="14" cy="10" r="2.5" fill="#FFFFFF" fillOpacity="0.6" />
    <path d="M16 20L16 29" stroke="#555" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Estrella irregular dibujada a mano
export const DoodleStar = ({ size = 28, color = '#E9B872', className = '', onClick = null }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block transition-transform hover:scale-125 cursor-pointer ${className}`}
    onClick={onClick}
  >
    <path
      d="M20 3 L24.5 14 L36 15.5 L27.5 24 L30 36 L19.5 30 L9.5 36.5 L12 24 L3.5 16 L15 14.5 Z"
      fill={color}
      stroke="#2A2525"
      strokeWidth="1.8"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

// Destello / Sparkle de cómic
export const DoodleSparkle = ({ size = 24, color = '#FF6B6B', className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <path
      d="M16 2 C16 10 22 16 30 16 C22 16 16 22 16 30 C16 22 10 16 2 16 C10 16 16 10 16 2 Z"
      fill={color}
    />
  </svg>
);

// Flecha dibujada a mano
export const DoodleArrow = ({ className = '', style = {} }) => (
  <svg
    width="50"
    height="36"
    viewBox="0 0 60 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <path
      d="M5 25 C18 10, 38 10, 52 22 M44 14 L53 23 L41 28"
      stroke="#FF6B6B"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Sello postal vintage interactivo con inicial K
export const StampPostmark = ({ onClick = null, className = '' }) => (
  <div
    onClick={onClick}
    className={`inline-flex items-center gap-2 px-3 py-1.5 border border-dashed border-[#685E5E] rounded-md bg-[#FAF4EF] cursor-pointer select-none transition-transform hover:scale-105 ${className}`}
    style={{ transform: 'rotate(-2deg)' }}
    title="Toca para descubrir un detalle secreto"
  >
    <div className="w-7 h-7 rounded-full border border-[#FF6B6B] flex items-center justify-center font-display text-sm font-bold text-[#FF6B6B]">
      K
    </div>
    <div className="text-left font-hand leading-none text-xs text-[#2A2525]">
      <span className="block font-bold text-sm tracking-wide">POSTAL • 2026</span>
      <span className="text-[#8C8282]">ESPECIAL KIMBERLY</span>
    </div>
  </div>
);
