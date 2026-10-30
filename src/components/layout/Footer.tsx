'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, MessageSquare, MapPin, Phone, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteConfig';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#00225A] text-white pt-16 pb-12 border-t border-[#00358A]">
      {/* Newsletter Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-14 border-b border-white/10">
        <div className="bg-gradient-to-r from-[#00358A] to-[#00225A] p-8 md:p-10 rounded-lg border border-[#D1A345]/30 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D1A345]">
              The Teatime Society
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white mt-1">
              Join Our Private Afternoon Tea Circle
            </h3>
            <p className="text-xs text-white/70 mt-2">
              Receive private invitations to first-flush tea tastings, exclusive German Mono Filio arrivals, and seasonal tablescape inspiration.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row gap-2.5">
            <div className="relative">
              <Mail className="w-4 h-4 text-[#B88A2D] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-72 pl-10 pr-4 py-3 rounded text-xs bg-white text-[#00225A] placeholder-[#9CA3AF] outline-none focus:ring-2 focus:ring-[#D1A345]"
              />
            </div>
            <button
              type="submit"
              className="btn-luxury-gold py-3 text-xs whitespace-nowrap flex items-center justify-center gap-2"
            >
              {subscribed ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Welcome to the Circle</span>
                </>
              ) : (
                <>
                  <span>Request Invitation</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Main 4-Column Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Brand & Mono Germany Partnership */}
        <div className="space-y-4">
          <Logo variant="light" />
          <p className="text-xs text-white/70 leading-relaxed">
            Elevating afternoon tea from routine to ritual. Official and exclusive distributor of German-engineered <strong>Mono Filio</strong> teaware in Hong Kong.
          </p>
          <div className="pt-2 flex items-center gap-3">
            <a
              href={SITE_CONFIG.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D1A345] hover:text-[#00225A] flex items-center justify-center text-white transition-all"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href={SITE_CONFIG.contact.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D1A345] hover:text-[#00225A] flex items-center justify-center text-white transition-all"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
          <div className="p-3 bg-white/5 border border-white/10 rounded text-[11px] text-[#DFBE77]">
            🇩🇪 Official Hong Kong Partner for <strong>Mono Germany</strong> (Mettmann, Est. 1895)
          </div>
        </div>

        {/* Column 2: The Collections (Matching Image 2 Taxonomy) */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#D1A345]">
            The Collections
          </h4>
          <ul className="space-y-2 text-xs text-white/75">
            <li>
              <Link href="/shop/tableware" className="hover:text-[#D1A345] transition-colors">
                Tableware (Plates, Placemats, Rings)
              </Link>
            </li>
            <li>
              <Link href="/shop/table-linen" className="hover:text-[#D1A345] transition-colors">
                Handcrafted Table Linen &amp; Napkins
              </Link>
            </li>
            <li>
              <Link href="/shop/teapots-and-accessories" className="hover:text-[#D1A345] transition-colors">
                Mono Teapots &amp; Accessories
              </Link>
            </li>
            <li>
              <Link href="/shop/tea" className="hover:text-[#D1A345] transition-colors">
                Single-Origin Loose Leaf Teas
              </Link>
            </li>
            <li>
              <Link href="/shop/gift-boxes" className="hover:text-[#D1A345] transition-colors">
                Curated Gift Boxes &amp; Hampers
              </Link>
            </li>
            <li>
              <Link href="/shop/pinkribbon" className="hover:text-[#D1A345] transition-colors">
                Pink Ribbon October Charity Collection
              </Link>
            </li>
            <li>
              <Link href="/shop/christmas" className="hover:text-[#D1A345] transition-colors">
                Christmas Tableware &amp; Decor (Soon)
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Services & Experiences */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#D1A345]">
            Bespoke Services
          </h4>
          <ul className="space-y-2 text-xs text-white/75">
            <li>
              <Link href="/event-styling" className="hover:text-[#D1A345] transition-colors">
                Afternoon Tea Event Styling
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-[#D1A345] transition-colors">
                Tablescape Gallery Archive
              </Link>
            </li>
            <li>
              <Link href="/get-in-touch" className="hover:text-[#D1A345] transition-colors">
                Central Showroom Tasting Appointments
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-[#D1A345] transition-colors">
                Tea Journal & Brewing Guides
              </Link>
            </li>
            <li>
              <Link href="/returns-policy" className="hover:text-[#D1A345] transition-colors">
                Customer Care & Returns Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Showroom & Concierge */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#D1A345]">
            Central Showroom
          </h4>
          <div className="space-y-2.5 text-xs text-white/75">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#D1A345] shrink-0 mt-0.5" />
              <span>{SITE_CONFIG.showroom.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#D1A345] shrink-0" />
              <span>{SITE_CONFIG.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#D1A345] shrink-0" />
              <span>{SITE_CONFIG.contact.email}</span>
            </div>
            <p className="text-[11px] text-white/60 pt-1">
              Hours: {SITE_CONFIG.showroom.hours}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
        <div className="flex items-center gap-2 text-[11px]">
          <ShieldCheck className="w-4 h-4 text-[#D1A345]" />
          <span>© 2026 Time for Tea Hong Kong Limited. All Rights Reserved.</span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <Link href="/returns-policy" className="hover:text-white transition-colors">
            Returns & Exchanges
          </Link>
          <span>•</span>
          <Link href="/returns-policy#shipping" className="hover:text-white transition-colors">
            Shipping Rates
          </Link>
          <span>•</span>
          <Link href="/get-in-touch" className="hover:text-white transition-colors">
            Showroom Directions
          </Link>
        </div>
      </div>
    </footer>
  );
}
