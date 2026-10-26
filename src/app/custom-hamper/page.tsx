'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Gift, ShieldCheck, Heart } from 'lucide-react';
import { HamperBuilder } from '@/components/hamper/HamperBuilder';

export default function CustomHamperPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-12">
      {/* Header & Introduction */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="flex items-center justify-center gap-2 text-xs text-[#6B7280]">
          <Link href="/" className="hover:text-[#0C2340]">Home</Link>
          <span>/</span>
          <span className="text-[#0C2340] font-medium">Bespoke Hamper Studio</span>
        </div>

        <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C5A880]">
          The Art of Gifting
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif text-[#0C2340]">
          Curate a Bespoke Afternoon Tea Hamper
        </h1>
        <p className="text-xs sm:text-sm text-[#5C5C5C] leading-relaxed">
          Inspired by London&apos;s grand gifting traditions, create an unforgettable presentation of German Mono Filio teapots, fine porcelain tableware, and single-origin teas encased in gold-embossed keepsake trunks.
        </p>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto text-xs text-center">
        <div className="p-4 rounded bg-[#FAF8F5] border border-[#E8E4DC] flex flex-col items-center">
          <Sparkles className="w-5 h-5 text-[#C5A880] mb-1.5" />
          <span className="font-semibold text-[#0C2340]">Hand-Calligraphed Notes</span>
          <span className="text-[11px] text-[#6B7280]">Inscribed by hand with your bespoke message</span>
        </div>
        <div className="p-4 rounded bg-[#FAF8F5] border border-[#E8E4DC] flex flex-col items-center">
          <Gift className="w-5 h-5 text-[#5B8276] mb-1.5" />
          <span className="font-semibold text-[#0C2340]">Satin Ribbon & Wax Seal</span>
          <span className="text-[11px] text-[#6B7280]">Finished in our Central atelier</span>
        </div>
        <div className="p-4 rounded bg-[#FAF8F5] border border-[#E8E4DC] flex flex-col items-center">
          <ShieldCheck className="w-5 h-5 text-[#A38458] mb-1.5" />
          <span className="font-semibold text-[#0C2340]">White-Glove HK Delivery</span>
          <span className="text-[11px] text-[#6B7280]">Direct to your recipient&apos;s door</span>
        </div>
      </div>

      {/* Interactive Hamper Builder Studio */}
      <HamperBuilder />

      {/* Client Testimonials */}
      <div className="pt-8 border-t border-[#E8E4DC] max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h3 className="text-xl font-serif text-[#0C2340]">Cherished by Hosts & Gifters</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="p-6 rounded-lg bg-white border border-[#E8E4DC] space-y-2 shadow-xs">
            <div className="flex text-amber-500 gap-1">
              {[...Array(5)].map((_, i) => (
                <Heart key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <p className="italic text-[#3A3D42]">
              &ldquo;The navy trunk with the Mono 1.5L teapot and Mulberry plates was the most admired wedding gift at our goddaughter&apos;s celebration in Repulse Bay. Unbelievably refined presentation.&rdquo;
            </p>
            <p className="font-semibold text-[#0C2340] pt-1">— Victoria L., Mid-Levels</p>
          </div>

          <div className="p-6 rounded-lg bg-white border border-[#E8E4DC] space-y-2 shadow-xs">
            <div className="flex text-amber-500 gap-1">
              {[...Array(5)].map((_, i) => (
                <Heart key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <p className="italic text-[#3A3D42]">
              &ldquo;We ordered 15 curated hampers for our private bank VIP clients. The handwritten calligraphy cards and the Ali Shan Oolong were raved about for weeks.&rdquo;
            </p>
            <p className="font-semibold text-[#0C2340] pt-1">— Marcus T., Central</p>
          </div>
        </div>
      </div>
    </div>
  );
}
