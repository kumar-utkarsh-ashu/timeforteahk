'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Calendar, MessageSquare, ArrowRight } from 'lucide-react';
import { TABLESCAPE_GALLERY } from '@/data/eventPackages';
import { SITE_CONFIG } from '@/data/siteConfig';
import { TablescapeHotspots } from '@/components/event/TablescapeHotspots';

const GALLERY_TABS = [
  { id: 'all', label: 'All Tablescapes' },
  { id: 'outdoor', label: 'Outdoor & Garden' },
  { id: 'indoor', label: 'Indoor Elegance' },
  { id: 'party', label: 'Celebration Parties' },
  { id: 'moments', label: 'Teatime Moments' },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredItems =
    activeTab === 'all'
      ? TABLESCAPE_GALLERY
      : TABLESCAPE_GALLERY.filter((item) => item.categoryTab === activeTab);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="flex items-center justify-center gap-2 text-xs text-[#6B7280]">
          <Link href="/" className="hover:text-[#0C2340]">Home</Link>
          <span>/</span>
          <span className="text-[#0C2340] font-medium">The Tablescape Archive</span>
        </div>

        <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C5A880]">
          Visual Inspiration
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif text-[#0C2340]">
          The Afternoon Tea Tablescape Archive
        </h1>
        <p className="text-xs sm:text-sm text-[#5C5C5C] leading-relaxed">
          Explore past afternoon tea setups styled across Hong Kong’s private terraces, clubhouses, and residences. Click on the glowing pins to inspect the individual teaware, bone china, and French linens chosen for each look.
        </p>
      </div>

      {/* Filter Tabs (Horizontal scroll on mobile with safe padding) */}
      <div className="flex justify-start sm:justify-center items-center gap-2 overflow-x-auto pb-2 scrollbar-none px-2">
        {GALLERY_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
              activeTab === tab.id
                ? 'bg-[#0C2340] text-white shadow-sm'
                : 'bg-white text-[#5C5C5C] border border-[#E8E4DC] hover:border-[#C5A880] hover:text-[#0C2340]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Interactive Tablescape Showcase List (Full-Width Responsive Cards) */}
      <div className="space-y-12">
        {filteredItems.map((item) => (
          <div key={item.id} className="space-y-3">
            <TablescapeHotspots
              image={item.image}
              title={item.title}
              location={item.location}
              hotspots={item.hotspots}
            />
          </div>
        ))}
      </div>

      {/* Booking CTA Strip */}
      <div className="p-8 sm:p-12 rounded-xl bg-gradient-to-r from-[#0C2340] to-[#16325C] text-white text-center max-w-4xl mx-auto space-y-4 shadow-xl border border-[#C5A880]/30">
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C5A880]">
          Turnkey Event Styling in Hong Kong
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif text-white">
          Bring This Elegance to Your Next Celebration
        </h3>
        <p className="text-xs sm:text-sm text-white/80 max-w-xl mx-auto font-light leading-relaxed">
          Our styling team handles the full setup, brass 3-tier stands, candlelit Mono Filio teapots, floral centerpieces, and post-event collection across Hong Kong.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
          <Link href="/event-styling" className="btn-luxury-gold text-xs py-3 px-6">
            <span>Explore Event Packages</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={SITE_CONFIG.contact.whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury-outline text-xs py-3 px-6 bg-white/10 text-white border-white/60 hover:bg-white hover:text-[#0C2340]"
          >
            <MessageSquare className="w-4 h-4 text-[#C5A880]" />
            <span>Chat on WhatsApp Concierge</span>
          </a>
        </div>
      </div>
    </div>
  );
}
