import React from 'react';

interface BadgeProps {
  label: string;
  variant?: 'gold' | 'navy' | 'sage' | 'rose' | 'outline';
  className?: string;
}

export function Badge({ label, variant = 'gold', className = '' }: BadgeProps) {
  let styleClasses = 'bg-[#FAF5EE] text-[#A38458] border-[#E0CEB5]';

  if (variant === 'navy') {
    styleClasses = 'bg-[#0C2340] text-white border-[#0C2340]';
  } else if (variant === 'sage') {
    styleClasses = 'bg-[#EBF2EE] text-[#436357] border-[#CFDFD6]';
  } else if (variant === 'rose') {
    styleClasses = 'bg-[#FFF0F3] text-[#C24168] border-[#FBCFE8]';
  } else if (variant === 'outline') {
    styleClasses = 'bg-white/80 text-[#0C2340] border-[#C5A880]';
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 text-[10px] uppercase font-semibold tracking-wider rounded-sm border ${styleClasses} ${className}`}
    >
      {label}
    </span>
  );
}
