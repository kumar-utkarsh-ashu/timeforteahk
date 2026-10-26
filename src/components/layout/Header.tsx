'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Search,
  ShoppingBag,
  Heart,
  Menu,
  MessageSquare,
  MapPin,
  ChevronDown,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { SITE_CONFIG } from '@/data/siteConfig';
import { Logo } from '@/components/ui/Logo';
import { MobileNav } from '@/components/layout/MobileNav';

export function Header() {
  const pathname = usePathname();
  const {
    currency,
    setCurrency,
    setIsSearchOpen,
    setIsCartOpen,
    cartCount,
    wishlist,
    formatPrice,
    subtotalHKD,
    subtotalGBP,
  } = useApp();

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownContainerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsShopDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsShopDropdownOpen(false);
    }, 200);
  };

  useEffect(() => {
    setIsShopDropdownOpen(false);
  }, [pathname]);

  // Click outside listener for touch devices & clicking away
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(event.target as Node)
      ) {
        setIsShopDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#0C2340] text-white border-b border-[#1A3B6B] shadow-md">
        {/* Top Utility Announcement Bar */}
        <div className="bg-[#081629] text-white text-[11px] py-2 px-4 sm:px-6 lg:px-8 border-b border-[#16325C]">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            {/* Showroom & Announcement */}
            <div className="flex items-center gap-4 truncate">
              <span className="hidden sm:inline-flex items-center gap-1.5 text-amber-200/90 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                Showroom: 148 Queen&apos;s Road Central, HK
              </span>
              <span className="text-white/80 truncate">
                Complimentary HK Delivery on Orders Over HK$ 800
              </span>
            </div>

            {/* Currency & Concierge */}
            <div className="flex items-center gap-4 shrink-0">
              {/* Currency Selector */}
              <div className="flex items-center bg-[#16325C] rounded-sm p-0.5 border border-[#20457A]">
                <button
                  onClick={() => setCurrency('HKD')}
                  className={`px-2 py-0.5 rounded-xs text-[10px] font-bold transition-all ${
                    currency === 'HKD'
                      ? 'bg-[#C5A880] text-[#0C2340]'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  HKD ($)
                </button>
                <button
                  onClick={() => setCurrency('GBP')}
                  className={`px-2 py-0.5 rounded-xs text-[10px] font-bold transition-all ${
                    currency === 'GBP'
                      ? 'bg-[#C5A880] text-[#0C2340]'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  GBP (£)
                </button>
              </div>

              {/* WhatsApp Quick Link */}
              <a
                href={SITE_CONFIG.contact.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1 text-amber-200 hover:text-white transition-colors"
              >
                <MessageSquare className="w-3 h-3 text-[#C5A880]" />
                <span>Concierge</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Brand & Clean Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4 lg:gap-6">
          {/* Mobile/Tablet Menu Toggle (Visible up to lg: 1024px) */}
          <button
            onClick={() => setIsMobileNavOpen(true)}
            className="lg:hidden p-2 -ml-2 text-white hover:text-[#C5A880] transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo (Light/Gold for seamless luxury theme) */}
          <Logo variant="light" />

          {/* Clean Desktop Navigation Menu (Visible on lg: 1024px+ screens) */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 2xl:gap-8 text-[11px] xl:text-xs font-semibold uppercase tracking-wider text-white/90 whitespace-nowrap">
            <Link
              href="/"
              onClick={(e) => {
                if (pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className={`hover:text-[#C5A880] transition-colors py-1 whitespace-nowrap ${
                pathname === '/' ? 'text-[#C5A880] border-b-2 border-[#C5A880]' : ''
              }`}
            >
              HOME
            </Link>

            {/* SHOP Dropdown Link */}
            <div
              ref={dropdownContainerRef}
              className="relative py-1"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
                className={`hover:text-[#C5A880] transition-colors flex items-center gap-1 cursor-pointer py-1 uppercase tracking-wider ${
                  pathname.startsWith('/shop') || pathname === '/custom-hamper'
                    ? 'text-[#C5A880] border-b-2 border-[#C5A880]'
                    : 'text-white/90'
                }`}
                aria-expanded={isShopDropdownOpen}
              >
                <Link href="/shop" onClick={(e) => e.stopPropagation()} className="hover:text-[#C5A880]">
                  SHOP
                </Link>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#C5A880] transition-transform ${
                    isShopDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Mega-Dropdown Panel: Clean 2-column category grid without awkward product card */}
              {isShopDropdownOpen && (
                <div
                  className="absolute top-full -left-6 xl:left-0 pt-3 w-[560px] max-w-[calc(100vw-32px)] z-50 animate-in fade-in zoom-in-95 duration-150"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white rounded-lg shadow-2xl border border-[#E8E4DC] p-5">
                    <div className="grid grid-cols-2 gap-3.5">
                      {/* Left Column */}
                      <div className="space-y-2">
                        <Link
                          href="/shop"
                          className="block p-2.5 rounded-md hover:bg-[#FAF8F5] transition-colors group"
                        >
                          <p className="text-xs font-serif font-bold text-[#0C2340] group-hover:text-[#A38458]">
                            All Products
                          </p>
                          <p className="text-[11px] text-[#6B7280] normal-case mt-0.5">
                            Complete afternoon tea collection
                          </p>
                        </Link>

                        <Link
                          href="/shop/teapots-and-accessories"
                          className="block p-2.5 rounded-md hover:bg-[#FAF8F5] transition-colors group"
                        >
                          <div className="flex items-center gap-1.5">
                            <p className="text-xs font-serif font-bold text-[#0C2340] group-hover:text-[#A38458]">
                              Mono Teapots
                            </p>
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#0C2340] text-amber-200">
                              Exclusive
                            </span>
                          </div>
                          <p className="text-[11px] text-[#6B7280] normal-case mt-0.5">
                            German Duran® glass & warmers
                          </p>
                        </Link>

                        <Link
                          href="/shop/tableware"
                          className="block p-2.5 rounded-md hover:bg-[#FAF8F5] transition-colors group"
                        >
                          <p className="text-xs font-serif font-bold text-[#0C2340] group-hover:text-[#A38458]">
                            Fine Tableware & Plates
                          </p>
                          <p className="text-[11px] text-[#6B7280] normal-case mt-0.5">
                            Oriental Blossom bone china
                          </p>
                        </Link>

                        <Link
                          href="/shop/table-linen"
                          className="block p-2.5 rounded-md hover:bg-[#FAF8F5] transition-colors group"
                        >
                          <p className="text-xs font-serif font-bold text-[#0C2340] group-hover:text-[#A38458]">
                            Table Linen Atelier
                          </p>
                          <p className="text-[11px] text-[#6B7280] normal-case mt-0.5">
                            Hand-embroidered French flax
                          </p>
                        </Link>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-2">
                        <Link
                          href="/shop/tea"
                          className="block p-2.5 rounded-md hover:bg-[#FAF8F5] transition-colors group"
                        >
                          <p className="text-xs font-serif font-bold text-[#0C2340] group-hover:text-[#A38458]">
                            Loose Leaf Tea
                          </p>
                          <p className="text-[11px] text-[#6B7280] normal-case mt-0.5">
                            Single-origin high mountain harvests
                          </p>
                        </Link>

                        <Link
                          href="/shop/gift-boxes"
                          className="block p-2.5 rounded-md hover:bg-[#FAF8F5] transition-colors group"
                        >
                          <p className="text-xs font-serif font-bold text-[#0C2340] group-hover:text-[#A38458]">
                            Gift Boxes & Hampers
                          </p>
                          <p className="text-[11px] text-[#6B7280] normal-case mt-0.5">
                            Gold-embossed royal presentation trunks
                          </p>
                        </Link>

                        <Link
                          href="/custom-hamper"
                          className="block p-2.5 rounded-md hover:bg-[#FAF8F5] transition-colors group"
                        >
                          <div className="flex items-center gap-1.5">
                            <p className="text-xs font-serif font-bold text-[#0C2340] group-hover:text-[#A38458]">
                              Curate Bespoke Hamper
                            </p>
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#FAF5EE] text-[#A38458] border border-[#E0CEB5]">
                              Studio
                            </span>
                          </div>
                          <p className="text-[11px] text-[#6B7280] normal-case mt-0.5">
                            Interactive custom gift curation
                          </p>
                        </Link>

                        <Link
                          href="/shop/pinkribbon"
                          className="block p-2.5 rounded-md hover:bg-[#FAF8F5] transition-colors group"
                        >
                          <div className="flex items-center gap-1.5">
                            <p className="text-xs font-serif font-bold text-[#0C2340] group-hover:text-[#A38458]">
                              Pink Ribbon October
                            </p>
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#FFF0F3] text-[#C24168]">
                              Charity
                            </span>
                          </div>
                          <p className="text-[11px] text-[#6B7280] normal-case mt-0.5">
                            Supporting HKBCF foundation
                          </p>
                        </Link>
                      </div>
                    </div>

                    {/* Bottom Strip */}
                    <div className="mt-3.5 pt-3 border-t border-[#E8E4DC] flex items-center justify-between text-[11px] text-[#6B7280] normal-case">
                      <span>Showroom appointments & complimentary delivery over HK$ 800</span>
                      <Link href="/shop" className="text-[#0C2340] font-bold hover:text-[#C5A880] flex items-center gap-1">
                        <span>View All Products</span>
                        <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/event-styling"
              className={`hover:text-[#C5A880] transition-colors py-1 whitespace-nowrap ${
                pathname === '/event-styling' ? 'text-[#C5A880] border-b-2 border-[#C5A880]' : ''
              }`}
            >
              EVENT STYLING
            </Link>

            <Link
              href="/our-story"
              className={`hover:text-[#C5A880] transition-colors py-1 whitespace-nowrap ${
                pathname === '/our-story' ? 'text-[#C5A880] border-b-2 border-[#C5A880]' : ''
              }`}
            >
              OUR STORY
            </Link>

            <Link
              href="/gallery"
              className={`hover:text-[#C5A880] transition-colors py-1 whitespace-nowrap ${
                pathname === '/gallery' ? 'text-[#C5A880] border-b-2 border-[#C5A880]' : ''
              }`}
            >
              GALLERY
            </Link>

            <Link
              href="/blog"
              className={`hover:text-[#C5A880] transition-colors py-1 whitespace-nowrap ${
                pathname === '/blog' ? 'text-[#C5A880] border-b-2 border-[#C5A880]' : ''
              }`}
            >
              BLOG
            </Link>

            <Link
              href="/get-in-touch"
              className={`hover:text-[#C5A880] transition-colors py-1 whitespace-nowrap ${
                pathname === '/get-in-touch' ? 'text-[#C5A880] border-b-2 border-[#C5A880]' : ''
              }`}
            >
              GET IN TOUCH
            </Link>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 sm:gap-3 xl:gap-4 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-1.5 sm:p-2 text-white/90 hover:text-[#C5A880] hover:bg-white/10 transition-colors rounded-full"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Indicator */}
            <Link
              href="/shop"
              className="p-1.5 sm:p-2 text-white/90 hover:text-[#C5A880] hover:bg-white/10 transition-colors rounded-full relative"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-4 h-4 rounded-full bg-[#C5A880] text-[#0C2340] text-[9px] font-bold flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Shopping Bag Trigger with dynamic subtotal */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 p-1.5 sm:px-3 sm:py-2 rounded bg-[#16325C] border border-[#20457A] hover:border-[#C5A880] hover:bg-[#1E4378] transition-all text-white"
              aria-label="Shopping Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-amber-200" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#C5A880] text-[#0C2340] text-[9px] font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden xl:inline text-xs font-bold text-white">
                {formatPrice(subtotalHKD, subtotalGBP)}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />
    </>
  );
}
