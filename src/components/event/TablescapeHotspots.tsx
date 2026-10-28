'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, ArrowRight, Sparkles, Check, Eye } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { PRODUCTS } from '@/data/products';

interface Hotspot {
  x: number;
  y: number;
  title: string;
  price: string;
  slug: string;
}

interface TablescapeHotspotsProps {
  image: string;
  title: string;
  location: string;
  hotspots: Hotspot[];
}

export function TablescapeHotspots({
  image,
  title,
  location,
  hotspots,
}: TablescapeHotspotsProps) {
  const { addToCart, setQuickViewProduct } = useApp();
  const [activeSlug, setActiveSlug] = useState<string>(hotspots[0]?.slug || '');

  // Get matching products from our catalog
  const featuredProducts = hotspots
    .map((h) => PRODUCTS.find((p) => p.slug === h.slug))
    .filter(Boolean);

  return (
    <div className="bg-white rounded-xl border border-[#E8E4DC] overflow-hidden shadow-sm">
      <div className="grid grid-cols-1 xl:grid-cols-12 items-stretch">
        {/* Left 7 Cols (on XL) / Full width (on tablet/mobile): High-Res Interactive Tablescape Image */}
        <div className="relative xl:col-span-7 min-h-[340px] sm:min-h-[460px] xl:min-h-[520px] overflow-hidden bg-[#FAF8F5] group">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 1280px) 100vw, 60vw"
            className="object-cover object-center group-hover:scale-102 transition-transform duration-700"
          />

          {/* Luxury ambient gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

          {/* Location Badge */}
          <div className="absolute top-4 left-4 z-10 bg-[#0C2340]/90 backdrop-blur-md px-3.5 py-1.5 rounded text-[11px] text-amber-200 border border-white/10 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>{location}</span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C5A880]">
              The Tablescape Edit
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif text-white mt-0.5">{title}</h3>
            <p className="text-xs text-white/80 max-w-md mt-1">
              Click on the glowing pins to inspect each piece chosen for this bespoke Hong Kong afternoon tea setting.
            </p>
          </div>

          {/* Glowing Pins */}
          {hotspots.map((pin, idx) => {
            const isActive = activeSlug === pin.slug;
            return (
              <div
                key={idx}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
              >
                <button
                  onClick={() => setActiveSlug(pin.slug)}
                  onMouseEnter={() => setActiveSlug(pin.slug)}
                  className={`relative w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center cursor-pointer ${
                    isActive
                      ? 'bg-[#C5A880] border-white scale-125 shadow-xl text-[#0C2340]'
                      : 'bg-[#0C2340]/90 border-white text-[#C5A880] animate-hotspot hover:scale-110'
                  }`}
                  aria-label={`Inspect ${pin.title}`}
                >
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#0C2340]' : 'bg-[#C5A880]'}`} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Right 5 Cols (on XL) / Full width (on tablet/mobile): Shoppable Sidebar */}
        <div className="xl:col-span-5 p-6 sm:p-8 bg-[#FAF8F5] flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="border-b border-[#E8E4DC] pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C5A880]">
                  Included in this Tablescape
                </span>
                <h4 className="text-lg font-serif font-bold text-[#0C2340]">
                  Shop The Individual Pieces
                </h4>
              </div>
              <span className="text-xs text-[#5B8276] font-semibold bg-[#EBF2EE] px-2.5 py-1 rounded shrink-0 self-start sm:self-auto">
                Available to Buy or Hire
              </span>
            </div>

            {/* List of Products in this look (2 cols on tablet for spaciousness) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-3">
              {featuredProducts.map((prod) => {
                if (!prod) return null;
                const isSelected = activeSlug === prod.slug;

                return (
                  <div
                    key={prod.id}
                    onClick={() => setActiveSlug(prod.slug)}
                    className={`p-3 rounded-lg border transition-all cursor-pointer flex gap-3 items-center ${
                      isSelected
                        ? 'bg-white border-[#C5A880] shadow-sm ring-1 ring-[#C5A880]/30'
                        : 'bg-white/60 border-[#E8E4DC] hover:border-[#C5A880] hover:bg-white'
                    }`}
                  >
                    <div className="relative w-16 h-16 rounded overflow-hidden bg-gray-100 shrink-0 border border-[#E8E4DC]">
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] uppercase font-bold text-[#A38458]">
                          {prod.category}
                        </span>
                        {isSelected && (
                          <span className="text-[9px] font-bold text-[#5B8276] bg-[#EBF2EE] px-1.5 py-0.2 rounded">
                            Pinned
                          </span>
                        )}
                      </div>
                      <h5 className="text-xs font-serif font-semibold text-[#0C2340] line-clamp-1 mt-0.5">
                        {prod.name}
                      </h5>
                      <p className="text-xs font-bold text-[#0C2340] mt-1">
                        HK$ {prod.priceHKD.toLocaleString()}
                      </p>
                    </div>

                    <div className="flex flex-col gap-1 shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(prod, 1);
                        }}
                        className="p-2 rounded bg-[#0C2340] text-white hover:bg-[#16325C] transition-colors"
                        title="Add to Shopping Bag"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setQuickViewProduct(prod);
                        }}
                        className="p-2 rounded border border-[#E8E4DC] text-[#0C2340] hover:border-[#C5A880] transition-colors"
                        title="Quick View"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-[#E8E4DC] space-y-3">
            <div className="flex flex-col sm:flex-row gap-2.5">
              <Link
                href="/shop"
                className="btn-luxury-gold flex-1 text-xs py-3 flex items-center justify-center gap-2"
              >
                <span>Shop All Tableware</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/event-styling"
                className="btn-luxury-outline flex-1 text-xs py-3 flex items-center justify-center gap-2 bg-white"
              >
                <span>Hire This Setup</span>
              </Link>
            </div>

            <p className="text-[11px] text-[#6B7280] text-center flex items-center justify-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#5B8276]" />
              <span>Full setup, floral centerpieces & teaware collection included</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
