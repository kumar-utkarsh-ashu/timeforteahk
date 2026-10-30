'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
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
    // Schedule on microtask to prevent synchronous cascading render warning
    queueMicrotask(() => {
      setIsShopDropdownOpen(false);
    });
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
      <header className="sticky top-0 z-40 bg-[#0048BA] text-white border-b border-[#00358A] shadow-md">
        {/* Top Utility Announcement Bar */}
        <div className="bg-[#00358A] text-white text-[11px] py-2 px-4 sm:px-6 lg:px-8 border-b border-[#00225A]">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            {/* Showroom & Announcement */}
            <div className="flex items-center gap-4 truncate">
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[#DFBE77] font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#D1A345]" />
                Showroom: 148 Queen&apos;s Road Central, HK
              </span>
              <span className="text-white/85 truncate">
                Complimentary HK Delivery on Orders Over HK$ 800
              </span>
            </div>

            {/* Currency & Concierge */}
            <div className="flex items-center gap-4 shrink-0">
              {/* Currency Selector - Styled with Gold Border matching Image 1 */}
              <div className="flex items-center bg-[#00225A]/60 rounded-xs p-0.5 border border-[#D1A345]">
                <button
                  onClick={() => setCurrency('HKD')}
                  className={`px-2 py-0.5 rounded-xs text-[10px] font-bold transition-all ${
                    currency === 'HKD'
                      ? 'bg-[#D1A345] text-white shadow-xs'
                      : 'text-[#DFBE77] hover:text-white'
                  }`}
                >
                  HKD ($)
                </button>
                <button
                  onClick={() => setCurrency('GBP')}
                  className={`px-2 py-0.5 rounded-xs text-[10px] font-bold transition-all ${
                    currency === 'GBP'
                      ? 'bg-[#D1A345] text-white shadow-xs'
                      : 'text-[#DFBE77] hover:text-white'
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
                className="hidden md:inline-flex items-center gap-1 text-[#DFBE77] hover:text-white transition-colors"
              >
                <MessageSquare className="w-3 h-3 text-[#D1A345]" />
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
            className="lg:hidden p-2 -ml-2 text-white hover:text-[#D1A345] transition-colors"
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
              className={`hover:text-[#D1A345] transition-colors py-1 whitespace-nowrap ${
                pathname === '/' ? 'text-[#D1A345] border-b-2 border-[#D1A345]' : ''
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
                className={`hover:text-[#D1A345] transition-colors flex items-center gap-1 cursor-pointer py-1 uppercase tracking-wider ${
                  pathname.startsWith('/shop') || pathname === '/custom-hamper'
                    ? 'text-[#D1A345] border-b-2 border-[#D1A345]'
                    : 'text-white/90'
                }`}
                aria-expanded={isShopDropdownOpen}
              >
                <Link href="/shop" onClick={(e) => e.stopPropagation()} className="hover:text-[#D1A345]">
                  SHOP
                </Link>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#D1A345] transition-transform ${
                    isShopDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Mega-Dropdown Panel: Spacious 3-column luxury category & subcategory hierarchy */}
              {isShopDropdownOpen && (
                <div
                  className="absolute top-full -left-6 xl:left-0 pt-3 w-[780px] xl:w-[840px] max-w-[calc(100vw-32px)] z-50 animate-in fade-in zoom-in-95 duration-150"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white rounded-xl shadow-2xl border border-[#E8E4DC] p-6 text-left">
                    {/* Seasonal Collections Banner Bar */}
                    <div className="mb-5 pb-3 border-b border-[#E8E4DC] flex items-center justify-between gap-4 bg-[#FAF8F5] p-3.5 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#D1A345]">
                          Seasonal
                        </span>
                        <span className="text-xs font-serif font-bold text-[#0048BA]">
                          Featured Holiday &amp; Charity Editions
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Link
                          href="/shop/pinkribbon"
                          className="px-3 py-1 rounded bg-[#FFF0F3] text-[#C24168] text-xs font-semibold hover:bg-[#FFE0E6] transition-colors flex items-center gap-1"
                        >
                          <span>🎗️ Pink Ribbon October</span>
                        </Link>
                        <Link
                          href="/shop/christmas"
                          className="px-3 py-1 rounded bg-[#EBF2EE] text-[#436357] text-xs font-semibold hover:bg-[#DCEAE2] transition-colors flex items-center gap-1"
                        >
                          <span>🎄 Christmas Collection</span>
                        </Link>
                      </div>
                    </div>

                    {/* 3 Balanced Hierarchy Columns: Category Headers with Clean Subcategory Lists */}
                    <div className="grid grid-cols-3 gap-6">
                      {/* Column 1: Tableware */}
                      <div className="space-y-4">
                        <div>
                          <Link
                            href="/shop/tableware"
                            className="group flex items-center justify-between pb-1.5 border-b border-[#E8E4DC]"
                          >
                            <span className="text-xs font-serif font-bold tracking-wider text-[#0048BA] group-hover:text-[#B88A2D] transition-colors">
                              TABLEWARE
                            </span>
                            <ArrowRight className="w-3 h-3 text-[#D1A345] opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                          <ul className="mt-2.5 space-y-2 text-xs text-[#5C5C5C]">
                            <li>
                              <Link
                                href="/shop/tableware?sub=plates-and-teacups"
                                className="block hover:text-[#0048BA] hover:translate-x-1 transition-all"
                              >
                                Plates and Tea Cups
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/shop/tableware?sub=placemats"
                                className="block hover:text-[#0048BA] hover:translate-x-1 transition-all"
                              >
                                Placemats
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/shop/tableware?sub=napkin-rings"
                                className="block hover:text-[#0048BA] hover:translate-x-1 transition-all"
                              >
                                Napkin Rings
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/shop/tableware?sub=candles-and-holders"
                                className="block hover:text-[#0048BA] hover:translate-x-1 transition-all"
                              >
                                Candles and Holders
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Column 2: Table Linen & Mono Teapots */}
                      <div className="space-y-5">
                        {/* Table Linen */}
                        <div>
                          <Link
                            href="/shop/table-linen"
                            className="group flex items-center justify-between pb-1.5 border-b border-[#E8E4DC]"
                          >
                            <span className="text-xs font-serif font-bold tracking-wider text-[#0048BA] group-hover:text-[#B88A2D] transition-colors">
                              TABLE LINEN
                            </span>
                            <ArrowRight className="w-3 h-3 text-[#D1A345] opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                          <ul className="mt-2.5 space-y-2 text-xs text-[#5C5C5C]">
                            <li>
                              <Link
                                href="/shop/table-linen?sub=napkins"
                                className="block hover:text-[#0048BA] hover:translate-x-1 transition-all"
                              >
                                Napkins
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/shop/table-linen?sub=tablecloths"
                                className="block hover:text-[#0048BA] hover:translate-x-1 transition-all"
                              >
                                Tablecloths
                              </Link>
                            </li>
                          </ul>
                        </div>

                        {/* Mono Teapots & Accessories */}
                        <div>
                          <Link
                            href="/shop/teapots-and-accessories"
                            className="group flex items-center justify-between pb-1.5 border-b border-[#E8E4DC]"
                          >
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-serif font-bold tracking-wider text-[#0048BA] group-hover:text-[#B88A2D] transition-colors">
                                MONO TEAPOTS
                              </span>
                              <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#0048BA] text-white font-sans font-normal">
                                Exclusive
                              </span>
                            </div>
                            <ArrowRight className="w-3 h-3 text-[#D1A345] opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                          <ul className="mt-2.5 space-y-2 text-xs text-[#5C5C5C]">
                            <li>
                              <Link
                                href="/shop/teapots-and-accessories?sub=teapots"
                                className="block hover:text-[#0048BA] hover:translate-x-1 transition-all"
                              >
                                Teapots (Mono Filio)
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/shop/teapots-and-accessories?sub=accessories"
                                className="block hover:text-[#0048BA] hover:translate-x-1 transition-all"
                              >
                                Accessories &amp; Replacement Glass
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Column 3: Loose Leaf Tea & Gifts */}
                      <div className="space-y-5">
                        {/* Loose Leaf Tea */}
                        <div>
                          <Link
                            href="/shop/tea"
                            className="group flex items-center justify-between pb-1.5 border-b border-[#E8E4DC]"
                          >
                            <span className="text-xs font-serif font-bold tracking-wider text-[#0048BA] group-hover:text-[#B88A2D] transition-colors">
                              LOOSE LEAF TEA
                            </span>
                            <ArrowRight className="w-3 h-3 text-[#D1A345] opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                          <ul className="mt-2.5 space-y-2 text-xs text-[#5C5C5C]">
                            <li>
                              <Link
                                href="/shop/tea?sub=single-origin"
                                className="block hover:text-[#0048BA] hover:translate-x-1 transition-all"
                              >
                                Single-Origin Harvests
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/shop/tea?sub=blends"
                                className="block hover:text-[#0048BA] hover:translate-x-1 transition-all"
                              >
                                Artisanal Blends
                              </Link>
                            </li>
                          </ul>
                        </div>

                        {/* Gifts & Hampers */}
                        <div>
                          <Link
                            href="/shop/gift-boxes"
                            className="group flex items-center justify-between pb-1.5 border-b border-[#E8E4DC]"
                          >
                            <span className="text-xs font-serif font-bold tracking-wider text-[#0048BA] group-hover:text-[#B88A2D] transition-colors">
                              GIFTS &amp; HAMPERS
                            </span>
                            <ArrowRight className="w-3 h-3 text-[#D1A345] opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                          <ul className="mt-2.5 space-y-2 text-xs text-[#5C5C5C]">
                            <li>
                              <Link
                                href="/shop/gift-boxes?sub=curated-hampers"
                                className="block hover:text-[#0048BA] hover:translate-x-1 transition-all"
                              >
                                Curated Gift Trunks
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/custom-hamper"
                                className="block hover:text-[#0048BA] hover:translate-x-1 transition-all"
                              >
                                Bespoke Hamper Studio
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Utility Strip */}
                    <div className="mt-6 pt-3.5 border-t border-[#E8E4DC] flex items-center justify-between text-xs text-[#6B7280]">
                      <span className="flex items-center gap-1.5 text-[11px]">
                        <span className="w-2 h-2 rounded-full bg-[#5B8276]" />
                        Complimentary White-Glove HK Delivery on Orders Over HK$ 800
                      </span>
                      <Link
                        href="/shop"
                        className="text-[#0048BA] font-bold hover:text-[#D1A345] flex items-center gap-1.5 group transition-colors"
                      >
                        <span>Browse Complete Catalog</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#D1A345] group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/event-styling"
              className={`hover:text-[#D1A345] transition-colors py-1 whitespace-nowrap ${
                pathname === '/event-styling' ? 'text-[#D1A345] border-b-2 border-[#D1A345]' : ''
              }`}
            >
              EVENT STYLING
            </Link>

            <Link
              href="/our-story"
              className={`hover:text-[#D1A345] transition-colors py-1 whitespace-nowrap ${
                pathname === '/our-story' ? 'text-[#D1A345] border-b-2 border-[#D1A345]' : ''
              }`}
            >
              OUR STORY
            </Link>

            <Link
              href="/gallery"
              className={`hover:text-[#D1A345] transition-colors py-1 whitespace-nowrap ${
                pathname === '/gallery' ? 'text-[#D1A345] border-b-2 border-[#D1A345]' : ''
              }`}
            >
              GALLERY
            </Link>

            <Link
              href="/blog"
              className={`hover:text-[#D1A345] transition-colors py-1 whitespace-nowrap ${
                pathname === '/blog' ? 'text-[#D1A345] border-b-2 border-[#D1A345]' : ''
              }`}
            >
              BLOG
            </Link>

            <Link
              href="/get-in-touch"
              className={`hover:text-[#D1A345] transition-colors py-1 whitespace-nowrap ${
                pathname === '/get-in-touch' ? 'text-[#D1A345] border-b-2 border-[#D1A345]' : ''
              }`}
            >
              GET IN TOUCH
            </Link>
          </nav>

          {/* Right Action Icons - Aligned with Image 1 */}
          <div className="flex items-center gap-2 sm:gap-3 xl:gap-4 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-1.5 sm:p-2 text-white/90 hover:text-[#D1A345] hover:bg-white/10 transition-colors rounded-full"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Indicator */}
            <Link
              href="/shop"
              className="p-1.5 sm:p-2 text-white/90 hover:text-[#D1A345] hover:bg-white/10 transition-colors rounded-full relative"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-4 h-4 rounded-full bg-[#D1A345] text-white text-[9px] font-bold flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Shopping Bag Trigger with Gold Cart Icon matching Image 1 */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 p-1.5 sm:px-3 sm:py-2 rounded bg-[#00225A]/70 border border-[#D1A345]/50 hover:border-[#D1A345] hover:bg-[#00225A] transition-all text-white shadow-xs"
              aria-label="Shopping Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-[#D1A345]" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#D1A345] text-white text-[9px] font-bold flex items-center justify-center">
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
