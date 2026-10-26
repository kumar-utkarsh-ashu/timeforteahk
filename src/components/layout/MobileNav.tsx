'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { X, Phone, MessageSquare, MapPin, ChevronDown } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { SITE_CONFIG } from '@/data/siteConfig';
import { Logo } from '@/components/ui/Logo';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const { currency, setCurrency } = useApp();
  const [isShopExpanded, setIsShopExpanded] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Slide-out Menu Panel */}
      <div className="relative w-full max-w-xs bg-[#FAF8F5] h-full shadow-2xl flex flex-col z-10 overflow-y-auto">
        {/* Top Header */}
        <div className="p-5 border-b border-[#E8E4DC] flex items-center justify-between bg-white">
          <Logo variant="dark" showSubtitle={false} onClick={onClose} />
          <button
            onClick={onClose}
            className="p-2 text-[#0C2340] hover:text-[#C5A880] transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Currency Switcher */}
        <div className="px-5 py-3 bg-[#F5F1EB] border-b border-[#E8E4DC] flex items-center justify-between text-xs">
          <span className="font-medium text-[#6B7280]">Currency</span>
          <div className="flex gap-1">
            <button
              onClick={() => setCurrency('HKD')}
              className={`px-2.5 py-1 rounded text-xs font-semibold transition-all ${
                currency === 'HKD'
                  ? 'bg-[#0C2340] text-white shadow-sm'
                  : 'bg-white text-[#6B7280] hover:text-[#0C2340]'
              }`}
            >
              HKD ($)
            </button>
            <button
              onClick={() => setCurrency('GBP')}
              className={`px-2.5 py-1 rounded text-xs font-semibold transition-all ${
                currency === 'GBP'
                  ? 'bg-[#0C2340] text-white shadow-sm'
                  : 'bg-white text-[#6B7280] hover:text-[#0C2340]'
              }`}
            >
              GBP (£)
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-5 py-4 space-y-1 text-sm font-medium text-[#0C2340]">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center justify-between py-3 border-b border-[#E8E4DC]/60 hover:text-[#C5A880] transition-colors"
          >
            <span>Home</span>
          </Link>

          {/* Shop with Accordion Subcategories */}
          <div className="border-b border-[#E8E4DC]/60 py-1">
            <button
              onClick={() => setIsShopExpanded(!isShopExpanded)}
              className="w-full flex items-center justify-between py-2 text-left font-medium hover:text-[#C5A880] transition-colors"
            >
              <span className="text-sm">Shop</span>
              <ChevronDown
                className={`w-4 h-4 text-[#A38458] transition-transform ${
                  isShopExpanded ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isShopExpanded && (
              <div className="pl-3 py-1 space-y-1 bg-[#FAF8F5] rounded">
                {SITE_CONFIG.shopCategories.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    onClick={onClose}
                    className="flex items-center justify-between py-2 text-xs text-[#5C5C5C] hover:text-[#0C2340] transition-colors"
                  >
                    <span>{sub.title}</span>
                    {sub.badge && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-white text-[#A38458] border border-[#E8E4DC]">
                        {sub.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/event-styling"
            onClick={onClose}
            className="flex items-center justify-between py-3 border-b border-[#E8E4DC]/60 hover:text-[#C5A880] transition-colors"
          >
            <span>Event Styling</span>
          </Link>

          <Link
            href="/our-story"
            onClick={onClose}
            className="flex items-center justify-between py-3 border-b border-[#E8E4DC]/60 hover:text-[#C5A880] transition-colors"
          >
            <span>Our Story</span>
          </Link>

          <Link
            href="/gallery"
            onClick={onClose}
            className="flex items-center justify-between py-3 border-b border-[#E8E4DC]/60 hover:text-[#C5A880] transition-colors"
          >
            <span>Gallery</span>
          </Link>

          <Link
            href="/blog"
            onClick={onClose}
            className="flex items-center justify-between py-3 border-b border-[#E8E4DC]/60 hover:text-[#C5A880] transition-colors"
          >
            <span>Blog</span>
          </Link>

          <Link
            href="/get-in-touch"
            onClick={onClose}
            className="flex items-center justify-between py-3 border-b border-[#E8E4DC]/60 hover:text-[#C5A880] transition-colors"
          >
            <span>Get in Touch</span>
          </Link>
        </nav>

        {/* Showroom & Quick Contact */}
        <div className="p-5 bg-white border-t border-[#E8E4DC] space-y-3 text-xs">
          <div className="flex items-start gap-2.5 text-[#5C5C5C]">
            <MapPin className="w-4 h-4 text-[#A38458] shrink-0 mt-0.5" />
            <span>Stag Building, 4/F, 148 Queen&apos;s Road, Central, HK</span>
          </div>

          <div className="flex gap-2 pt-2">
            <a
              href={SITE_CONFIG.contact.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded bg-[#0C2340] text-white text-xs font-semibold hover:bg-[#16325C] transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`tel:${SITE_CONFIG.contact.phone}`}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded border border-[#E8E4DC] text-[#0C2340] text-xs font-semibold hover:bg-[#FAF8F5] transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#A38458]" />
              <span>Call Showroom</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
