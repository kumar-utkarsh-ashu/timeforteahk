'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Shield, Gift, Award, Calendar, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { TABLESCAPE_GALLERY } from '@/data/eventPackages';
import { JOURNAL_POSTS } from '@/data/journalPosts';
import { SITE_CONFIG } from '@/data/siteConfig';
import { ProductCard } from '@/components/product/ProductCard';
import { TablescapeHotspots } from '@/components/event/TablescapeHotspots';
import { Badge } from '@/components/ui/Badge';

export default function HomePage() {
  const featuredTeapots = PRODUCTS.filter((p) => p.categorySlug === 'teapots-and-accessories');
  const bestsellerProducts = PRODUCTS.filter((p) => p.badge === 'Bestseller' || p.badge === 'Mono Partner');
  const heroTablescape = TABLESCAPE_GALLERY[0];

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* 1. Hero Editorial Section */}
      <section className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center bg-[#0C2340] text-white overflow-hidden">
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=2000&q=85"
            alt="Mono Filio Teapot Candlelight Afternoon Tea"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40 mix-blend-luminosity scale-105 animate-pulse duration-[10000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C2340] via-[#0C2340]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340] via-transparent to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-2xl space-y-6">
            {/* Exclusive Partnership Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A880]/40 text-amber-200 text-xs font-semibold">
              <Award className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Official & Exclusive Distributor for Mono Germany in Hong Kong</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-white leading-[1.08] tracking-tight">
              Make Tea Time a Time to Remember.
            </h1>

            <p className="text-sm sm:text-base text-white/85 leading-relaxed font-light max-w-xl">
              Elevating the afternoon tea ritual from routine into mindful luxury. Explore German-engineered <strong>Mono Filio</strong> teaware, artisanal French flax linens, rare single-estate harvests, and turnkey event styling in Hong Kong.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/shop" className="btn-luxury-gold text-xs px-8 py-4">
                <span>Explore The Collection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/custom-hamper"
                className="btn-luxury-outline text-xs px-8 py-4 bg-white/10 text-white border-white/60 hover:bg-white hover:text-[#0C2340]"
              >
                <Gift className="w-4 h-4 text-[#C5A880]" />
                <span>Curate Bespoke Hamper</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-white/15 text-xs text-white/75">
              <div>
                <p className="font-serif text-base font-semibold text-white">Mono Germany</p>
                <p className="text-[11px] text-white/60">Exclusive HK Partner</p>
              </div>
              <div>
                <p className="font-serif text-base font-semibold text-white">100% French Flax</p>
                <p className="text-[11px] text-white/60">Hand-Embroidered</p>
              </div>
              <div>
                <p className="font-serif text-base font-semibold text-white">Central Atelier</p>
                <p className="text-[11px] text-white/60">148 Queen&apos;s Road</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Visual Category Architecture Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C5A880]">
            The Departments
          </span>
          <h2 className="text-3xl font-serif text-[#0C2340]">The Curated Teatime Universe</h2>
          <p className="text-xs text-[#6B7280]">
            Every element selected to create an atmosphere of refined tranquility.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Mono Filio */}
          <Link
            href="/shop/teapots-and-accessories"
            className="group relative h-96 rounded-lg overflow-hidden border border-[#E8E4DC] card-luxury block"
          >
            <Image
              src="https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=800&q=80"
              alt="Mono Filio Teapots"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/90 via-[#0C2340]/30 to-transparent" />
            <div className="absolute top-4 left-4">
              <Badge label="Exclusive Partner" variant="navy" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <p className="text-[10px] uppercase tracking-widest text-amber-200 font-semibold">
                German Engineering
              </p>
              <h3 className="text-xl font-serif text-white">Mono Filio Teapots</h3>
              <p className="text-xs text-white/70 line-clamp-2">
                Heat-resistant Duran® borosilicate glass with suspended mesh strainer and candlelight warmer base.
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-[#C5A880] font-semibold pt-2">
                Explore Teaware <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>

          {/* Card 2: Fine Tableware */}
          <Link
            href="/shop/tableware"
            className="group relative h-96 rounded-lg overflow-hidden border border-[#E8E4DC] card-luxury block"
          >
            <Image
              src="https://images.unsplash.com/photo-1615865417491-9941019fbc00?auto=format&fit=crop&w=800&q=80"
              alt="Fine Porcelain Tableware"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/90 via-[#0C2340]/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <p className="text-[10px] uppercase tracking-widest text-amber-200 font-semibold">
                Mulberry Reverie
              </p>
              <h3 className="text-xl font-serif text-white">Porcelain Tableware</h3>
              <p className="text-xs text-white/70 line-clamp-2">
                Hand-painted Oriental Blossom bone china dinner plates, dessert sets, and 3-tier cake stands.
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-[#C5A880] font-semibold pt-2">
                Discover Tableware <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>

          {/* Card 3: Table Linen */}
          <Link
            href="/shop/table-linen"
            className="group relative h-96 rounded-lg overflow-hidden border border-[#E8E4DC] card-luxury block"
          >
            <Image
              src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80"
              alt="Handcrafted Linen"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/90 via-[#0C2340]/30 to-transparent" />
            <div className="absolute top-4 left-4">
              <Badge label="Handcrafted" variant="gold" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <p className="text-[10px] uppercase tracking-widest text-amber-200 font-semibold">
                French Flax
              </p>
              <h3 className="text-xl font-serif text-white">Table Linen Atelier</h3>
              <p className="text-xs text-white/70 line-clamp-2">
                Hand-embroidered mimosa blossoms, scalloped border napkins, and pure Belgian table runners.
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-[#C5A880] font-semibold pt-2">
                View Linen Collection <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>

          {/* Card 4: Loose Leaf Tea */}
          <Link
            href="/shop/tea"
            className="group relative h-96 rounded-lg overflow-hidden border border-[#E8E4DC] card-luxury block"
          >
            <Image
              src="https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80"
              alt="Rare Loose Leaf Tea"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/90 via-[#0C2340]/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <p className="text-[10px] uppercase tracking-widest text-amber-200 font-semibold">
                Single-Origin
              </p>
              <h3 className="text-xl font-serif text-white">Rare Loose Leaf</h3>
              <p className="text-xs text-white/70 line-clamp-2">
                Formosa High Mountain Oolongs, 7-times night scented Jasmine pearls, and Royal Breakfast blends.
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-[#C5A880] font-semibold pt-2">
                Explore Teas <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* 3. The Mono Filio Engineering Spotlight */}
      <section className="bg-[#16325C] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual Teapot Showcase */}
            <div className="relative aspect-square sm:aspect-4/3 rounded-lg overflow-hidden border border-white/20 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=85"
                alt="Mono Filio Teapot with Candle Warmer"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-[#0C2340]/90 backdrop-blur-md p-4 rounded border border-[#C5A880]/30 max-w-xs">
                <span className="text-[9px] uppercase font-bold text-[#C5A880]">Design Classic</span>
                <p className="text-xs font-serif text-white">Designed in Germany by Tassilo von Grolman</p>
                <p className="text-[10px] text-white/60 mt-0.5">Permanent Collection at Design Museum London</p>
              </div>
            </div>

            {/* Story & Specifications */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C5A880]">
                  Engineering The Perfect Steep
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-white">
                  The Iconic Mono Filio Teapot
                </h2>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                  Suspended within a graceful 18/10 stainless steel frame, the heat-resistant Duran® borosilicate glass bowl allows you to witness the leaves unfurl in a dance of light and color. Powered by a single candlelight warmer beneath, your tea remains at the exact drinking temperature without growing bitter.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
                <div className="p-4 rounded bg-white/5 border border-white/10 space-y-1">
                  <Shield className="w-5 h-5 text-[#C5A880]" />
                  <p className="font-semibold text-white">Duran® Borosilicate Glass</p>
                  <p className="text-[11px] text-white/60">Thermal shock resistant up to 150°C</p>
                </div>

                <div className="p-4 rounded bg-white/5 border border-white/10 space-y-1">
                  <Sparkles className="w-5 h-5 text-amber-200" />
                  <p className="font-semibold text-white">Integrated Tea Warmer</p>
                  <p className="text-[11px] text-white/60">Gentle candlelight keeps tea at 65°C</p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/shop/teapots-and-accessories"
                  className="btn-luxury-gold text-xs py-3.5 px-6"
                >
                  <span>Shop Mono Filio Teapots</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/our-story"
                  className="btn-luxury-outline text-xs py-3.5 px-6 bg-transparent text-white border-white/40 hover:bg-white hover:text-[#0C2340]"
                >
                  <span>Read The Mono Heritage</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive "Shop The Look" Tablescape Hotspots */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C5A880]">
              The Art of Teatime Styling
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#0C2340] mt-1">Shop The Tablescape</h2>
            <p className="text-xs text-[#6B7280] mt-1 max-w-xl">
              Explore how our German Mono Filio teapots, fine porcelain china, and hand-embroidered French flax linens harmonize in an authentic afternoon tea setting.
            </p>
          </div>

          <Link
            href="/gallery"
            className="text-xs font-semibold text-[#0C2340] hover:text-[#C5A880] flex items-center gap-1.5 transition-colors shrink-0"
          >
            <span>View Full Tablescape Archive</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <TablescapeHotspots
          image={heroTablescape.image}
          title={heroTablescape.title}
          location={heroTablescape.location}
          hotspots={heroTablescape.hotspots}
        />
      </section>

      {/* 5. Bestseller Showcase Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C5A880]">
              Most Treasured Pieces
            </span>
            <h2 className="text-3xl font-serif text-[#0C2340] mt-1">The Connoisseur’s Edit</h2>
          </div>

          <Link
            href="/shop"
            className="text-xs font-semibold text-[#0C2340] hover:text-[#C5A880] flex items-center gap-1.5 transition-colors"
          >
            <span>View All 12 Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellerProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 6. Curate Your Afternoon Tea Hamper Preview Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-[#0C2340] via-[#16325C] to-[#0C2340] p-8 sm:p-14 text-white shadow-xl border border-[#C5A880]/30">
          <div className="max-w-xl space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C5A880]">
              The Bespoke Hamper Studio
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">
              Curate a Personalized Teatime Keepsake
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
              Select your presentation trunk, choose a centerpiece Mono Filio teapot, pair with single-origin teas, and add hand-embroidered linens with our complimentary calligraphy note service.
            </p>

            <div className="pt-2">
              <Link href="/custom-hamper" className="btn-luxury-gold text-xs py-3.5 px-8">
                <span>Enter The Hamper Studio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Event Styling & Hire Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C5A880]">
                Turnkey Decor Hire & Hospitality
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#0C2340]">
                Afternoon Tea Event Styling in Hong Kong
              </h2>
              <p className="text-xs sm:text-sm text-[#5C5C5C] leading-relaxed">
                Whether hosting an intimate bridal shower terrace gathering, a landmark birthday, or an executive brand launch, our styling atelier delivers complete tablescapes: tiered brass cake stands, vintage china, fine linens, and teaware.
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-4 rounded bg-[#FAF8F5] border border-[#E8E4DC] flex items-start gap-3">
                <Calendar className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#0C2340]">Seamless Delivery & Setup</p>
                  <p className="text-[#6B7280]">Our stylists dress the table and collect everything after your celebration.</p>
                </div>
              </div>

              <div className="p-4 rounded bg-[#FAF8F5] border border-[#E8E4DC] flex items-start gap-3">
                <Shield className="w-4 h-4 text-[#5B8276] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#0C2340]">Hong Kong&apos;s Largest Mono Hire Fleet</p>
                  <p className="text-[#6B7280]">Genuine candlelight borosilicate teapots for every dining guest.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="/event-styling" className="btn-luxury-navy text-xs py-3 px-6">
                <span>View Styling Packages</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={SITE_CONFIG.contact.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-gold text-xs py-3 px-6"
              >
                <span>WhatsApp Event Consultation</span>
              </a>
            </div>
          </div>

          <div className="relative aspect-4/3 rounded-lg overflow-hidden border border-[#E8E4DC] shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80"
              alt="Bridal Shower Afternoon Tea Styling Setup"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 8. Tea Journal Editorial Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C5A880]">
              The Tea Journal
            </span>
            <h2 className="text-3xl font-serif text-[#0C2340] mt-1">Brewing Wisdom & Culture</h2>
          </div>

          <Link
            href="/blog"
            className="text-xs font-semibold text-[#0C2340] hover:text-[#C5A880] flex items-center gap-1.5 transition-colors"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {JOURNAL_POSTS.slice(0, 3).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group card-luxury overflow-hidden border border-[#E8E4DC] rounded-lg block"
            >
              <div className="relative aspect-16/10 overflow-hidden bg-[#FAF8F5]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#0C2340] text-white">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-[11px] text-[#A38458]">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-base font-serif font-semibold text-[#0C2340] group-hover:text-[#A38458] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-[#6B7280] line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 9. Central Showroom Visit Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-12 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C5A880]">
              Central Showroom & Atelier
            </span>
            <h3 className="text-2xl font-serif text-[#0C2340]">
              Stag Building, 4/F, 148 Queen&apos;s Road Central
            </h3>
            <p className="text-xs text-[#5C5C5C]">
              Step inside our serene private showroom. Sample first-flush teas, handle fine French linens, and inspect genuine German Mono Filio models.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/get-in-touch" className="btn-luxury-navy text-xs py-3 px-6">
              <span>Book Tasting Appointment</span>
            </Link>
            <a
              href="https://maps.google.com/?q=148+Queens+Road+Central+Hong+Kong"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury-outline text-xs py-3 px-6 bg-white"
            >
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
