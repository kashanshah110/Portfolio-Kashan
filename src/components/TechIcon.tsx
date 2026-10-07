import React from 'react';

interface TechIconProps {
  iconKey: string;
  name: string;
  className?: string;
  customImage?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({
  iconKey,
  name,
  className = 'w-6 h-6',
  customImage,
}) => {
  // If user provides a custom image path, render the image with an SVG fallback
  if (customImage) {
    return (
      <img
        src={customImage}
        alt={`${name} icon`}
        className={`${className} object-contain`}
        referrerPolicy="no-referrer"
        onError={(e) => {
          // If image fails, hide it and reveal SVG
          (e.target as HTMLElement).style.display = 'none';
        }}
      />
    );
  }

  // Crisp, optimized tech SVGs with authentic branding colors
  switch (iconKey.toLowerCase()) {
    case 'html':
    case 'html5':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
          <path
            d="M3 2L4.8 19.5L12 21.5L19.2 19.5L21 2H3Z"
            fill="#E34F26"
            stroke="none"
          />
          <path
            d="M12 3.8V19.6L17.5 18L19 3.8H12Z"
            fill="#EF652A"
            stroke="none"
          />
          <path
            d="M8.2 7.2H15.8L15.5 10H8.4L8.7 12.8H15.2L14.8 16.2L12 17L9.2 16.2L9 14.5H6.2L6.6 18.2L12 19.8L17.4 18.2L18.2 7.2H8.2Z"
            fill="#FFFFFF"
            stroke="none"
          />
        </svg>
      );

    case 'css':
    case 'css3':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M3 2L4.8 19.5L12 21.5L19.2 19.5L21 2H3Z"
            fill="#1572B6"
          />
          <path
            d="M12 3.8V19.6L17.5 18L19 3.8H12Z"
            fill="#33A9DC"
          />
          <path
            d="M15.8 7.2H8.2L8.5 10H15.5L15.1 13.5L12 14.4L8.9 13.5L8.7 11.5H6.2L6.6 15.5L12 17.2L17.4 15.5L18.2 7.2Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'javascript':
    case 'js':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="3" fill="#F7DF1E" />
          <path
            d="M7 17.5C7.8 18.3 9 18.7 10.3 18.2C11.5 17.7 11.8 16.3 11.5 14.3L11.2 12H9.2L9.4 14.3C9.5 15.3 9.4 15.9 8.7 16.1C8 16.3 7.5 15.8 7.2 15.3L6 16.3C6.3 16.8 6.6 17.2 7 17.5ZM14.1 18.3C15.5 18.5 17 18 17.7 16.7C18.2 15.7 18 14.3 16.8 13.7C15.9 13.2 15.1 12.9 14.9 12.3C14.8 11.9 15 11.5 15.6 11.4C16.2 11.3 17 11.6 17.6 12.1L18.5 10.7C17.6 9.9 16.4 9.6 15.3 9.8C13.9 10 13.1 11.3 13.3 12.8C13.5 14.1 14.5 14.6 15.5 15.1C16.3 15.5 16.5 16 16.4 16.4C16.2 16.9 15.5 17 14.8 16.8C13.9 16.5 13.3 15.8 12.9 15.1L12 16.6C12.5 17.5 13.3 18.1 14.1 18.3Z"
            fill="#000000"
          />
        </svg>
      );

    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M12 6C9 6 7.5 7.5 7.5 10.5C8.25 9.75 9.15 9.3 10.2 9.45C11.4 9.6 12.3 10.5 13.35 11.55C15.15 13.35 17.25 14.25 21 14.25C24 14.25 25.5 12.75 25.5 9.75C24.75 10.5 23.85 10.95 22.8 10.8C21.6 10.65 20.7 9.75 19.65 8.7C17.85 6.9 15.75 6 12 6ZM3 13.5C0 13.5 -1.5 15 -1.5 18C-0.75 17.25 0.15 16.8 1.2 16.95C2.4 17.1 3.3 18 4.35 19.05C6.15 20.85 8.25 21.75 12 21.75C15 21.75 16.5 20.25 16.5 17.25C15.75 18 14.85 18.45 13.8 18.3C12.6 18.15 11.7 17.25 10.65 16.2C8.85 14.4 6.75 13.5 3 13.5Z"
            fill="#38BDF8"
            transform="scale(0.8) translate(3, 1)"
          />
        </svg>
      );

    case 'react':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1.2" fill="none">
            <ellipse cx="12" cy="12" rx="10" ry="4" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
          </g>
        </svg>
      );

    case 'git':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M21.6 10.6L13.4 2.4C12.8 1.8 11.8 1.8 11.2 2.4L9.4 4.2L12.3 7.1C13 6.9 13.9 7 14.5 7.6C15.2 8.3 15.3 9.3 14.9 10.1L17.7 12.9C18.5 12.5 19.5 12.7 20.2 13.4C21.1 14.3 21.1 15.7 20.2 16.6C19.3 17.5 17.9 17.5 17 16.6C16.4 16 16.2 15.1 16.5 14.3L13.8 11.6V16.8C14.2 17.1 14.5 17.6 14.5 18.2C14.5 19.3 13.6 20.2 12.5 20.2C11.4 20.2 10.5 19.3 10.5 18.2C10.5 17.5 10.9 17 11.4 16.6V11.3C10.9 11 10.5 10.4 10.5 9.8C10.5 9.1 10.8 8.6 11.3 8.2L8.4 5.3L2.4 11.3C1.8 11.9 1.8 12.9 2.4 13.5L10.6 21.7C11.2 22.3 12.2 22.3 12.8 21.7L21.6 12.9C22.2 12.3 22.2 11.3 21.6 10.6Z"
            fill="#F05032"
          />
        </svg>
      );

    case 'vscode':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M17.5 1.8L8.7 9.8L3.5 5.8L1.5 6.8V17.2L3.5 18.2L8.7 14.2L17.5 22.2L22.5 20V4L17.5 1.8ZM17.5 17.8L9.8 12L17.5 6.2V17.8Z"
            fill="#007ACC"
          />
        </svg>
      );

    case 'node':
    case 'nodejs':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M12 2L2 7.8V16.2L12 22L22 16.2V7.8L12 2Z"
            fill="#339933"
          />
          <path
            d="M12 4.2L19.8 8.7V15.3L12 19.8L4.2 15.3V8.7L12 4.2Z"
            fill="#215732"
          />
          <path
            d="M12 6.5L17.5 9.7V14.3L12 17.5L6.5 14.3V9.7L12 6.5Z"
            fill="#339933"
          />
        </svg>
      );

    case 'express':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="4" fill="#18181B" stroke="#3F3F46" strokeWidth="1" />
          <text
            x="12"
            y="16"
            textAnchor="middle"
            fill="#F4F4F5"
            fontSize="10"
            fontFamily="monospace"
            fontWeight="bold"
          >
            ex
          </text>
        </svg>
      );

    case 'mongodb':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M12 2C11.5 2.5 7 8 7 13.5C7 17.5 9.5 20.8 11.5 21.8L12 22L12.5 21.8C14.5 20.8 17 17.5 17 13.5C17 8 12.5 2.5 12 2Z"
            fill="#47A248"
          />
          <path
            d="M12 2.5V21.5C14.2 20.5 16.5 17.3 16.5 13.5C16.5 8.2 12.4 3 12 2.5Z"
            fill="#499D4A"
          />
          <path
            d="M12 21.5V11L11.5 10.5C9.5 12.5 9.2 15.8 9.5 17.8L12 21.5Z"
            fill="#FFFFFF"
            opacity="0.3"
          />
        </svg>
      );

    default:
      return (
        <div className={`${className} rounded bg-slate-800 flex items-center justify-center text-xs font-mono text-cyan-400 font-bold border border-slate-700`}>
          {name.slice(0, 2).toUpperCase()}
        </div>
      );
  }
};
