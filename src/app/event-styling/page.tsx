'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Check, MessageSquare, ArrowRight } from 'lucide-react';
import { EVENT_PACKAGES } from '@/data/eventPackages';
import { SITE_CONFIG } from '@/data/siteConfig';
import { EventBookingForm } from '@/components/event/EventBookingForm';

export default function EventStylingPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* 1. Hero Banner */}
      <section className="relative min-h-[55vh] flex items-center bg-[#0C2340] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=80"
            alt="Afternoon Tea Event Styling in Hong Kong"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C2340] via-[#0C2340]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2 text-xs text-white/70">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-amber-200">Event Styling & Decor Hire</span>
            </div>

            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C5A880]">
              Turnkey Hospitality & Tablescaping
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif text-white leading-tight">
              Afternoon Tea Event Styling & Decor Hire in Hong Kong
            </h1>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
              We bring the fairytale elegance of a classic British tearoom to your private residence, terrace, or corporate venue. Complete tableware rentals, tiered stands, artisanal French linens, and genuine German Mono Filio teapots.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a href="#packages" className="btn-luxury-gold text-xs py-3 px-6">
                <span>View Service Tiers</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.contact.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-outline-light text-xs py-3 px-6"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A880]" />
                <span>WhatsApp Event Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Service Packages Grid */}
      <section id="packages" className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C5A880]">
            Bespoke Tiers
          </span>
          <h2 className="text-3xl font-serif text-[#0C2340]">Our Event Styling Experiences</h2>
          <p className="text-xs text-[#6B7280]">
            Tailored for birthdays, bridal showers, baby showers, and luxury corporate brand previews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EVENT_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="card-luxury rounded-lg overflow-hidden border border-[#E8E4DC] flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-16/10 overflow-hidden bg-gray-100">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#0C2340]/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded">
                    {pkg.capacity}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-[#0C2340]">{pkg.title}</h3>
                    <p className="text-xs text-[#A38458] mt-0.5">{pkg.subtitle}</p>
                    <p className="text-xs text-[#5C5C5C] mt-2.5 leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#E8E4DC] space-y-2 text-xs">
                    <p className="font-semibold text-[#0C2340] uppercase tracking-wider text-[10px]">
                      Package Inclusions:
                    </p>
                    {pkg.includedFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[#5C5C5C]">
                        <Check className="w-3.5 h-3.5 text-[#5B8276] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[#FAF8F5] border-t border-[#E8E4DC] space-y-3">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-[#6B7280]">Starting Investment:</span>
                  <span className="text-lg font-serif font-bold text-[#0C2340]">
                    HK$ {pkg.pricePerGuestHKD} <span className="text-xs font-normal text-[#6B7280]">/ guest</span>
                  </span>
                </div>

                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsAppNumber.replace('+', '')}?text=${encodeURIComponent(
                    `Hello! I am interested in booking "${pkg.title}" for an event in Hong Kong.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury-navy w-full py-2.5 text-xs flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Reserve on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. The Tableware Hire Inventory Showcase */}
      <section className="bg-[#FAF8F5] py-16 border-y border-[#E8E4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C5A880]">
              The Hire Inventory
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#0C2340]">
              Curated Tableware for Event Hire
            </h3>
            <p className="text-xs text-[#6B7280]">
              Rent individual components or complete place settings with full delivery & collection service.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs">
            <div className="p-5 rounded bg-white border border-[#E8E4DC] space-y-2">
              <Sparkles className="w-5 h-5 text-[#C5A880] mx-auto" />
              <p className="font-semibold text-[#0C2340]">Mono Filio Teapots</p>
              <p className="text-[11px] text-[#6B7280]">Includes integrated stainless warmer base and tea-light</p>
            </div>
            <div className="p-5 rounded bg-white border border-[#E8E4DC] space-y-2">
              <Sparkles className="w-5 h-5 text-[#5B8276] mx-auto" />
              <p className="font-semibold text-[#0C2340]">Empress 3-Tier Stands</p>
              <p className="text-[11px] text-[#6B7280]">Polished brass central stems with fine bone china plates</p>
            </div>
            <div className="p-5 rounded bg-white border border-[#E8E4DC] space-y-2">
              <Sparkles className="w-5 h-5 text-[#A38458] mx-auto" />
              <p className="font-semibold text-[#0C2340]">Handcrafted Linen</p>
              <p className="text-[11px] text-[#6B7280]">French flax napkins and table runners, professionally laundered</p>
            </div>
            <div className="p-5 rounded bg-white border border-[#E8E4DC] space-y-2">
              <Sparkles className="w-5 h-5 text-[#0C2340] mx-auto" />
              <p className="font-semibold text-[#0C2340]">Silverware & Coupes</p>
              <p className="text-[11px] text-[#6B7280]">Victorian-pattern pastry forks, tea tongs, and crystal glassware</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Booking & Consultation Module */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <EventBookingForm />
      </section>
    </div>
  );
}
