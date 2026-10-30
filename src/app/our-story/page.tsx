import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, MapPin, ArrowRight } from 'lucide-react';

export default function OurStoryPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Hero Banner */}
      <section className="relative min-h-[50vh] flex items-center bg-[#0048BA] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=2000&q=80"
            alt="Time for Tea HK Craftsmanship and Heritage"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0048BA] via-[#00358A]/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2 text-xs text-white/80">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-[#DFBE77]">Our Story</span>
            </div>

            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#D1A345]">
              The Atelier Heritage
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif text-white leading-tight">
              Elevating Afternoon Tea from Routine into Ritual
            </h1>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light">
              Founded in Hong Kong to bring serenity, German design precision, and timeless European tablescaping to the modern home.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 1: The Founding Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#D1A345]">
              Chapter I
            </span>
            <h2 className="text-3xl font-serif text-[#0048BA]">The Mindful Tea Ritual</h2>
            <p className="text-xs sm:text-sm text-[#5C5C5C] leading-relaxed">
              In a city that moves as quickly as Hong Kong, teatime is an intentional act of pause. It is thirty minutes to breathe in the steam of wild alpine orchids, to feel the tactile softness of pre-washed French flax linen, and to savor delicate petit fours in the company of those you cherish.
            </p>
            <p className="text-xs sm:text-sm text-[#5C5C5C] leading-relaxed">
              Time for Tea HK was established with a singular conviction: that the objects you surround yourself with during teatime elevate the experience into something memorable.
            </p>
          </div>

          <div className="relative aspect-4/3 rounded-lg overflow-hidden border border-[#E8E4DC] shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&q=80"
              alt="Mindful Afternoon Tea Steeping"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Chapter 2: The Mono Germany Exclusive Partnership */}
      <section className="bg-[#00358A] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-lg overflow-hidden border border-white/20 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=1000&q=80"
                alt="Mono Germany Teapot Engineering"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#00225A]/90 backdrop-blur-md px-3 py-1.5 rounded text-[11px] text-[#DFBE77] border border-white/10 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>Mettmann, Germany • Est. 1895</span>
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#D1A345]">
                Chapter II
              </span>
              <h2 className="text-3xl font-serif text-white">
                Exclusive Hong Kong Distributor for Mono Germany
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                In Mettmann, Germany, the family-owned design house Mono has crafted world-renowned design classics for over a century. When industrial designer Tassilo von Grolman created the Mono Filio teapot in the 1980s, it entered the permanent design archives of modern museums worldwide.
              </p>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                Time for Tea HK is honored to be the sole official distributor of Mono teaware and accessories in Hong Kong. We stock original German Duran® borosilicate bowls, stainless mesh strainers, and replacement parts to guarantee your teapot remains an heirloom piece for decades.
              </p>
              <div className="pt-2">
                <Link
                  href="/shop/teapots-and-accessories"
                  className="btn-luxury-gold text-xs py-3 px-6"
                >
                  <span>Explore Mono Filio Inventory</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: Artisanal Linen & Fine Tableware */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#D1A345]">
              Chapter III
            </span>
            <h2 className="text-3xl font-serif text-[#0048BA]">
              Handcrafted Linen & Botanical Tableware
            </h2>
            <p className="text-xs sm:text-sm text-[#5C5C5C] leading-relaxed">
              Our textiles are woven from certified French flax that softens with every wash. Working closely with master embroidery artisans, each napkin is adorned with delicate mimosa blossoms and finished with scalloped borders.
            </p>
            <p className="text-xs sm:text-sm text-[#5C5C5C] leading-relaxed">
              Our <em>Oriental Blossom</em> tableware collection marries European high tea heritage with painterly Chinese mulberry branch motifs, triple-fired for luminous chip resistance and finished with 24k gold hand-painted rims.
            </p>
          </div>

          <div className="relative aspect-4/3 rounded-lg overflow-hidden border border-[#E8E4DC] shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1000&q=80"
              alt="Hand-Embroidered French Flax Linen Napkins"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Showroom Invitation */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-4">
        <div className="p-10 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC] space-y-3">
          <MapPin className="w-6 h-6 text-[#B88A2D] mx-auto" />
          <h3 className="text-2xl font-serif text-[#0048BA]">Visit Our Central Atelier</h3>
          <p className="text-xs text-[#5C5C5C] max-w-lg mx-auto">
            Stag Building, 4/F, 148 Queen&apos;s Road Central, Hong Kong. Experience our collections in person by appointment or walk-in.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link href="/get-in-touch" className="btn-luxury-navy text-xs py-3 px-6">
              Book Private Tasting
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
