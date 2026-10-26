'use client';

import React from 'react';
import Link from 'next/link';
import { ContactForm } from '@/components/contact/ContactForm';

export default function GetInTouchPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="flex items-center justify-center gap-2 text-xs text-[#6B7280]">
          <Link href="/" className="hover:text-[#0C2340]">Home</Link>
          <span>/</span>
          <span className="text-[#0C2340] font-medium">Showroom & Concierge</span>
        </div>

        <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C5A880]">
          Central Hong Kong Atelier
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif text-[#0C2340]">
          Get in Touch & Visit Our Showroom
        </h1>
        <p className="text-xs sm:text-sm text-[#5C5C5C] leading-relaxed">
          Whether arranging a private wedding tableware consultation, reserving Mono Filio inventory, or inquiring about event styling hire, our concierge is here to assist.
        </p>
      </div>

      <ContactForm />
    </div>
  );
}
