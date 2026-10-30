'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface LogoProps {
  variant?: 'light' | 'dark';
  showSubtitle?: boolean;
  className?: string;
  onClick?: () => void;
}

export function Logo({ variant = 'dark', showSubtitle = true, className = '', onClick }: LogoProps) {
  const pathname = usePathname();
  const isLight = variant === 'light';

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick();
    }
    // If user is already on homepage, scroll smoothly back to top
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Link
      href="/"
      onClick={handleClick}
      className={`inline-flex items-center gap-2.5 sm:gap-3 group shrink-0 cursor-pointer ${className}`}
      aria-label="Time for Tea HK - Home"
    >
      {/* Official Brand Logo */}
      <div className="relative h-11 sm:h-12 w-28 sm:w-32 shrink-0 transition-transform duration-300 group-hover:scale-102">
        <Image
          src="/images/logo.png"
          alt="Time for Tea HK"
          fill
          priority
          sizes="(max-width: 640px) 112px, 128px"
          className="object-contain object-left"
        />
      </div>

      {showSubtitle && (
        <span
          className={`hidden md:block text-[9px] tracking-[0.2em] uppercase font-medium pl-2 border-l border-white/20 whitespace-nowrap ${
            isLight ? 'text-[#DFBE77]' : 'text-[#B88A2D]'
          }`}
        >
          Hong Kong
        </span>
      )}
    </Link>
  );
}
