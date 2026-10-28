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

export function Logo({ variant = 'dark', showSubtitle = false, className = '', onClick }: LogoProps) {
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
      <div className="relative h-12 sm:h-14 lg:h-16 w-44 sm:w-52 lg:w-60 shrink-0 transition-transform duration-300 group-hover:scale-102">
        <Image
          src="/images/logo.png"
          alt="Time for Tea HK"
          fill
          priority
          sizes="(max-width: 640px) 176px, (max-width: 1024px) 208px, 240px"
          className="object-contain object-left"
        />
      </div>

      {showSubtitle && (
        <span
          className={`hidden md:block text-[10px] tracking-[0.25em] uppercase font-medium pl-3 border-l border-white/20 whitespace-nowrap ${
            isLight ? 'text-amber-200/80' : 'text-[#A38458]'
          }`}
        >
          Hong Kong
        </span>
      )}
    </Link>
  );
}
