import React from 'react';

export interface LogoProps {
  variant?: 'horizontal' | 'icon-only' | 'monogram' | 'badge' | 'stacked';
  theme?: 'dark' | 'light' | 'gold';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'nav';
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  theme = 'dark',
  size = 'md',
  showTagline = false,
  className = ''
}) => {
  // Size mapping for SVG icon container
  const iconSizes = {
    sm: 'w-7 h-7',
    nav: 'w-9 h-9 sm:w-10 sm:h-10',
    md: 'w-11 h-11 sm:w-12 sm:h-12',
    lg: 'w-14 h-14 sm:w-16 sm:h-16',
    xl: 'w-20 h-20 sm:w-24 sm:h-24'
  };

  // Text sizes
  const titleSizes = {
    sm: 'text-base',
    nav: 'text-xl sm:text-2xl',
    md: 'text-2xl sm:text-3xl',
    lg: 'text-3xl sm:text-4xl',
    xl: 'text-4xl sm:text-5xl'
  };

  const taglineSizes = {
    sm: 'text-[8px]',
    nav: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-[11px]',
    xl: 'text-xs'
  };

  const isLight = theme === 'light';

  // Metallic Gold Gradient SVG Defs ID
  const gradId = `gold-grad-${Math.random().toString(36).substring(2, 7)}`;

  // SVG Emblem/Crest with Laurel & Espresso Motif & 34
  const CrestIcon = () => (
    <svg
      viewBox="0 0 100 100"
      className={`${iconSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f4d093" />
          <stop offset="35%" stopColor="#c99a5b" />
          <stop offset="70%" stopColor="#a3763f" />
          <stop offset="100%" stopColor="#8c622e" />
        </linearGradient>
      </defs>

      {/* Outer Fine Double Circle Ring */}
      <circle cx="50" cy="50" r="47" stroke={`url(#${gradId})`} strokeWidth="1" strokeDasharray="3 1.5" />
      <circle cx="50" cy="50" r="44" stroke={`url(#${gradId})`} strokeWidth="1.5" opacity="0.9" />

      {/* Inner Decorative Bezel Ring */}
      <circle cx="50" cy="50" r="38" stroke={`url(#${gradId})`} strokeWidth="0.75" opacity="0.6" />

      {/* Top Espresso Steam / Crown Motif */}
      <path
        d="M 45 16 C 45 12, 50 14, 50 10 C 50 14, 55 12, 55 16"
        stroke={`url(#${gradId})`}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="50" cy="8" r="1.5" fill={`url(#${gradId})`} />

      {/* Left Laurel Leaves */}
      <path
        d="M 20 50 C 20 34 32 20 44 18 C 42 24 38 30 32 34 C 26 38 22 44 20 50 Z"
        fill={`url(#${gradId})`}
        opacity="0.35"
      />
      <path
        d="M 18 52 C 16 42 20 32 28 24 M 16 58 C 12 48 18 36 26 28"
        stroke={`url(#${gradId})`}
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* Right Laurel Leaves */}
      <path
        d="M 80 50 C 80 34 68 20 56 18 C 58 24 62 30 68 34 C 74 38 78 44 80 50 Z"
        fill={`url(#${gradId})`}
        opacity="0.35"
      />
      <path
        d="M 82 52 C 84 42 80 32 72 24 M 84 58 C 88 48 82 36 74 28"
        stroke={`url(#${gradId})`}
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* Bottom Star Accent */}
      <polygon
        points="50,86 52,89 55,89 53,91 54,94 50,92 46,94 47,91 45,89 48,89"
        fill={`url(#${gradId})`}
      />

      {/* Central "34" Serif Typography */}
      <text
        x="50"
        y="59"
        textAnchor="middle"
        fill={`url(#${gradId})`}
        fontFamily="Playfair Display, Georgia, serif"
        fontWeight="800"
        fontSize="33"
        letterSpacing="-1"
      >
        34
      </text>
    </svg>
  );

  // Circular Badge Seal Variant
  if (variant === 'badge') {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <svg
          viewBox="0 0 200 200"
          className={`${iconSizes[size] === 'w-8 h-8' ? 'w-24 h-24' : 'w-36 h-36 sm:w-44 sm:h-44'}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`${gradId}-badge`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f4d093" />
              <stop offset="50%" stopColor="#c99a5b" />
              <stop offset="100%" stopColor="#8c622e" />
            </linearGradient>
            <path id="circlePath" d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" />
          </defs>

          {/* Outer Gold Ring */}
          <circle cx="100" cy="100" r="95" stroke={`url(#${gradId}-badge)`} strokeWidth="2" />
          <circle cx="100" cy="100" r="90" stroke={`url(#${gradId}-badge)`} strokeWidth="1" strokeDasharray="4 2" />
          <circle cx="100" cy="100" r="68" stroke={`url(#${gradId}-badge)`} strokeWidth="1" opacity="0.6" />

          {/* Curved Text along path */}
          <text fill={`url(#${gradId}-badge)`} fontSize="10.5" fontWeight="700" letterSpacing="3">
            <textPath href="#circlePath" startOffset="0%">
              34 CAFE MILANO • ARTISANAL ESPRESSO •
            </textPath>
          </text>

          {/* Center 34 */}
          <text
            x="100"
            y="112"
            textAnchor="middle"
            fill={`url(#${gradId}-badge)`}
            fontFamily="Playfair Display, Georgia, serif"
            fontWeight="900"
            fontSize="46"
          >
            34
          </text>

          <text
            x="100"
            y="132"
            textAnchor="middle"
            fill="#f3eae1"
            fontFamily="sans-serif"
            fontSize="7"
            letterSpacing="2"
            opacity="0.8"
          >
            MILANO
          </text>
        </svg>
      </div>
    );
  }

  // Monogram Variant
  if (variant === 'monogram') {
    return (
      <div className={`inline-flex items-center justify-center p-3 rounded-2xl ${isLight ? 'bg-[#18120d] text-[#c99a5b]' : 'bg-[#140e0a] border border-[#c99a5b]/40'} ${className}`}>
        <span className="font-serif font-black text-3xl tracking-tighter gold-gradient-text">
          34<span className="text-xs font-sans font-light tracking-widest text-[#c99a5b] ml-1">MI</span>
        </span>
      </div>
    );
  }

  // Icon Only Variant
  if (variant === 'icon-only') {
    return <CrestIcon />;
  }

  // Stacked Logo Variant
  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center space-y-2 group ${className}`}>
        <CrestIcon />
        <div>
          <h1 className={`font-serif font-bold tracking-tight leading-none ${titleSizes[size]} ${isLight ? 'text-[#120d09]' : 'text-white'}`}>
            34 CAFE MILANO
          </h1>
        </div>
      </div>
    );
  }

  // Default Horizontal Logo Variant
  return (
    <div className={`flex items-center space-x-3 sm:space-x-4 group ${className}`}>
      {/* Icon with Soft Luxury Glow */}
      <div className="relative shrink-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-[#c99a5b]/25 rounded-full blur-md group-hover:bg-[#c99a5b]/40 transition-all duration-300 pointer-events-none" />
        <CrestIcon />
      </div>

      {/* Subtle Gold Decorative Vertical Divider */}
      <div className="h-6 sm:h-7 w-[1.5px] bg-gradient-to-b from-transparent via-[#c99a5b]/60 to-transparent shrink-0 opacity-80" />

      {/* Brand Name Text */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-serif font-extrabold tracking-wide leading-none transition-colors ${titleSizes[size]} ${
            isLight
              ? 'text-[#1d1610] group-hover:text-[#c99a5b]'
              : 'text-white group-hover:text-[#f4d093]'
          }`}
        >
          34 CAFE MILANO
        </span>
      </div>
    </div>
  );
};
