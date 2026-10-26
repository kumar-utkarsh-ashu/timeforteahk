import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark';
  showSubtitle?: boolean;
  className?: string;
}

export function Logo({ variant = 'dark', showSubtitle = true, className = '' }: LogoProps) {
  const isLight = variant === 'light';

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 sm:gap-3 group shrink-0 ${className}`}>
      {/* Heraldic Teapot & Botanical Crest SVG */}
      <div
        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${
          isLight
            ? 'bg-amber-100/10 border border-amber-200/30 text-amber-200'
            : 'bg-[#0C2340] text-[#C5A880] shadow-sm'
        }`}
      >
        <svg
          viewBox="0 0 40 40"
          className="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-current"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Teapot Body */}
          <path d="M11 25 C11 17, 29 17, 29 25 C29 30, 11 30, 11 25 Z" />
          {/* Teapot Spout */}
          <path d="M29 22 C33 21, 35 17, 33 15 C31 16, 28 19, 28 20" />
          {/* Teapot Handle */}
          <path d="M11 20 C7 19, 6 27, 11 28" />
          {/* Teapot Lid & Finial */}
          <path d="M15 17 C15 15, 25 15, 25 17" />
          <circle cx="20" cy="13.5" r="1.5" />
          {/* Botanical Steam Leaves */}
          <path d="M18 10 C18 7, 21 6, 21 8 C21 10, 18 10, 18 10" />
          <path d="M22 10 C22 8, 24 7, 25 9" />
          {/* Base Warmer Glow */}
          <line x1="14" y1="33" x2="26" y2="33" strokeOpacity="0.7" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span
          className={`font-serif tracking-[0.16em] sm:tracking-[0.2em] uppercase text-base sm:text-lg leading-tight transition-colors whitespace-nowrap ${
            isLight
              ? 'text-white group-hover:text-[#E0CEB5]'
              : 'text-[#0C2340] group-hover:text-[#C5A880]'
          }`}
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Time for Tea
        </span>
        {showSubtitle && (
          <span
            className={`hidden sm:block text-[8.5px] sm:text-[9px] tracking-[0.25em] uppercase font-semibold mt-0.5 whitespace-nowrap ${
              isLight ? 'text-amber-200/70' : 'text-[#A38458]'
            }`}
          >
            Hong Kong • Est. 2018
          </span>
        )}
      </div>
    </Link>
  );
}
