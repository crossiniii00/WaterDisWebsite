import React from 'react';

interface DistrictSealProps {
  className?: string;
  size?: number;
}

export const DistrictSeal: React.FC<DistrictSealProps> = ({ 
  className = 'w-10 h-10', 
  size 
}) => {
  return (
    <div 
      className={`relative shrink-0 select-none ${className}`} 
      style={size ? { width: size, height: size } : undefined}
      aria-label="San Isidro Water District Official Seal"
    >
      <svg 
        viewBox="0 0 240 240" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full drop-shadow-sm"
      >
        <defs>
          {/* Top text arc: Sweeps clockwise from 9 o'clock to 3 o'clock */}
          <path
            id="siwd-top-arc"
            d="M 28 120 A 92 92 0 0 1 212 120"
          />

          {/* Bottom text arc: Sweeps counter-clockwise from 9 o'clock to 3 o'clock */}
          <path
            id="siwd-bottom-arc"
            d="M 32 120 A 88 88 0 0 0 208 120"
          />

          {/* Sky Gradient */}
          <linearGradient id="skyGrad" x1="120" y1="50" x2="120" y2="150" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FEF9C3" stopOpacity="0.8" />
            <stop offset="35%" stopColor="#E0F2FE" />
            <stop offset="100%" stopColor="#BAE6FD" />
          </linearGradient>

          {/* Water Droplet Gradient */}
          <linearGradient id="dropletGrad" x1="105" y1="80" x2="135" y2="140" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0369A1" />
          </linearGradient>

          {/* Droplet Highlight Gradient */}
          <linearGradient id="highlightGrad" x1="110" y1="90" x2="130" y2="135" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.1" />
          </linearGradient>

          {/* Green Ring Gradient */}
          <radialGradient id="greenRingGrad" cx="120" cy="120" r="75" gradientUnits="userSpaceOnUse">
            <stop offset="70%" stopColor="#15803D" />
            <stop offset="100%" stopColor="#166534" />
          </radialGradient>
        </defs>

        {/* 1. Outer Background Disc (White/Crisp) */}
        <circle cx="120" cy="120" r="118" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2.5" />
        <circle cx="120" cy="120" r="115" stroke="#16A34A" strokeWidth="1" strokeDasharray="3 2" />

        {/* 2. Vibrant Green Ring Band */}
        <circle cx="120" cy="120" r="76" fill="url(#greenRingGrad)" />

        {/* 3. Inner Seal Medallion Disc */}
        <circle cx="120" cy="120" r="62" fill="url(#skyGrad)" stroke="#16A34A" strokeWidth="1.5" />

        {/* Soft Background Clouds & Hills */}
        <path
          d="M 68 122 Q 85 110 102 118 Q 120 108 142 116 Q 160 112 172 122"
          stroke="#FDE047"
          strokeWidth="3.5"
          strokeOpacity="0.75"
          fill="none"
        />
        <path
          d="M 65 125 C 75 120 85 126 95 124 C 110 120 130 126 145 123 C 158 120 168 125 175 126"
          fill="none"
          stroke="#93C5FD"
          strokeWidth="1.5"
          strokeOpacity="0.8"
        />

        {/* 4. Concentric Ripple Ellipses (Water Surface Splash) */}
        {/* Outer Green Ripple */}
        <ellipse cx="120" cy="148" rx="46" ry="14" fill="none" stroke="#16A34A" strokeWidth="3" />
        <ellipse cx="120" cy="148" rx="46" ry="14" fill="none" stroke="#4ADE80" strokeWidth="1.5" />

        {/* Middle Blue Ripple */}
        <ellipse cx="120" cy="148" rx="36" ry="10.5" fill="none" stroke="#0284C7" strokeWidth="2.5" />

        {/* Inner Green Ripple */}
        <ellipse cx="120" cy="148" rx="25" ry="7" fill="none" stroke="#15803D" strokeWidth="2.2" />

        {/* Center Ripple Core */}
        <ellipse cx="120" cy="148" rx="14" ry="4" fill="none" stroke="#0284C7" strokeWidth="2" />
        <ellipse cx="120" cy="148" rx="5" ry="1.5" fill="#0284C7" />

        {/* Lower Water Pool Shading */}
        <path
          d="M 64 135 C 70 160 90 180 120 182 C 150 180 170 160 176 135 C 160 155 140 162 120 162 C 100 162 80 155 64 135 Z"
          fill="#0284C7"
          fillOpacity="0.25"
        />

        {/* 5. Central Water Droplet (Vibrant 3D Teardrop) */}
        <g filter="drop-shadow(0 2px 4px rgba(0,0,0,0.18))">
          {/* Main Droplet Body */}
          <path
            d="M 120 74 
               C 120 74 100 106 100 122 
               C 100 134 109 143 120 143 
               C 131 143 140 134 140 122 
               C 140 106 120 74 120 74 Z"
            fill="url(#dropletGrad)"
            stroke="#0369A1"
            strokeWidth="1.5"
          />

          {/* Droplet Inner Highlight Curve (Yin-Yang Water Flow effect) */}
          <path
            d="M 120 79
               C 120 79 105 106 105 120
               C 105 130 112 137 120 137
               C 114 133 111 126 112 118
               C 113 108 120 95 120 79 Z"
            fill="url(#highlightGrad)"
          />

          {/* Top Specular Glint */}
          <ellipse cx="114" cy="98" rx="2" ry="4" transform="rotate(-20 114 98)" fill="#FFFFFF" fillOpacity="0.85" />
        </g>

        {/* 6. Typography along Top Arc: SAN ISIDRO WATER DISTRICT */}
        <text 
          fill="#1E3A8A" 
          fontSize="13" 
          fontWeight="900" 
          letterSpacing="0.12em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          <textPath href="#siwd-top-arc" startOffset="50%" textAnchor="middle">
            SAN ISIDRO WATER DISTRICT
          </textPath>
        </text>

        {/* 7. Typography along Bottom Arc: SAN ISIDRO, NORTHERN SAMAR */}
        <text 
          fill="#0F172A" 
          fontSize="11.5" 
          fontWeight="900" 
          letterSpacing="0.14em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          <textPath href="#siwd-bottom-arc" startOffset="50%" textAnchor="middle">
            SAN ISIDRO, NORTHERN SAMAR
          </textPath>
        </text>
      </svg>
    </div>
  );
};
