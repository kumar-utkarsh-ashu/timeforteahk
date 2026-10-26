'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Star,
  ShoppingBag,
  Heart,
  Gift,
  ShieldCheck,
  Truck,
  ChevronDown,
  Sparkles,
  MapPin,
  Check,
} from 'lucide-react';
import { Product, PRODUCTS } from '@/data/products';
import { useApp } from '@/context/AppContext';
import { Badge } from '@/components/ui/Badge';
import { TastingRadar } from '@/components/product/TastingRadar';
import { BrewingGuide } from '@/components/product/BrewingGuide';
import { ProductCard } from '@/components/product/ProductCard';

interface ProductDetailViewProps {
  product: Product;
}

export function ProductDetailView({ product }: ProductDetailViewProps) {
  const { addToCart, formatPrice, wishlist, toggleWishlist } = useApp();
  const isWishlisted = wishlist.includes(product.id);

  const [activeImage, setActiveImage] = useState(product.galleryImages[0] || product.image);
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants ? product.variants[0].name : ''
  );
  const [quantity, setQuantity] = useState(1);
  const [addedToast, setAddedToast] = useState(false);

  // Accordion state
  const [openAccordion, setOpenAccordion] = useState<string>('story');

  const currentVariant = product.variants?.find((v) => v.name === selectedVariant);
  const priceHKD = currentVariant ? currentVariant.priceHKD : product.priceHKD;
  const priceGBP = currentVariant ? currentVariant.priceGBP : product.priceGBP;

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant || undefined);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 3000);
  };

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && p.categorySlug === product.categorySlug
  ).concat(
    PRODUCTS.filter((p) => p.id !== product.id && p.categorySlug !== product.categorySlug)
  ).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14 space-y-16">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[#6B7280]">
        <Link href="/" className="hover:text-[#0C2340]">Home</Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-[#0C2340]">Shop</Link>
        <span>/</span>
        <Link href={`/shop/${product.categorySlug}`} className="hover:text-[#0C2340]">
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-[#0C2340] font-medium truncate">{product.name}</span>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column: Media Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-[#FAF8F5] border border-[#E8E4DC] shadow-sm">
            <Image
              src={activeImage}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover object-center"
            />

            {product.badge && (
              <div className="absolute top-4 left-4 z-10">
                <Badge label={product.badge} variant={product.badge === 'Mono Partner' ? 'navy' : 'gold'} />
              </div>
            )}

            <button
              onClick={() => toggleWishlist(product.id)}
              className={`absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                isWishlisted
                  ? 'bg-[#C5A880] text-[#0C2340] shadow-md'
                  : 'bg-white/80 backdrop-blur-xs text-[#0C2340] hover:bg-white hover:text-[#C5A880]'
              }`}
              aria-label="Wishlist"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Thumbnail Strip */}
          {product.galleryImages.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {product.galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative w-20 h-20 rounded overflow-hidden shrink-0 border-2 transition-all ${
                    activeImage === img
                      ? 'border-[#0C2340] shadow-sm'
                      : 'border-[#E8E4DC] opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} angle ${idx + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Purchasing Narrative */}
        <div className="space-y-6">
          <div className="space-y-2 border-b border-[#E8E4DC] pb-6">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#A38458]">
                {product.category}
              </span>
              <span className="text-[11px] font-semibold text-[#5B8276] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                In Stock at Central Showroom
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-serif text-[#0C2340] leading-snug">
              {product.name}
            </h1>
            <p className="text-xs text-[#6B7280]">{product.subtitle}</p>

            <div className="flex items-center gap-3 pt-1">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs text-[#6B7280] font-medium">
                {product.rating} ({product.reviewCount} customer reviews)
              </span>
            </div>

            <div className="pt-3">
              <span className="text-3xl font-serif font-bold text-[#0C2340]">
                {formatPrice(priceHKD, priceGBP)}
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#3A3D42] leading-relaxed">
            {product.description}
          </p>

          {/* Variants Selector */}
          {product.variants && (
            <div className="space-y-2 pt-2">
              <label className="text-xs font-semibold text-[#0C2340] uppercase tracking-wider block">
                Select Edition / Capacity:
              </label>
              <div className="flex flex-wrap gap-2.5">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v.name)}
                    className={`px-4 py-2 text-xs rounded border transition-all ${
                      selectedVariant === v.name
                        ? 'border-[#0C2340] bg-[#0C2340] text-white font-semibold shadow-xs'
                        : 'border-[#E8E4DC] bg-white text-[#3A3D42] hover:border-[#C5A880]'
                    }`}
                  >
                    <span>{v.name}</span>
                    <span className="ml-2 opacity-80">({formatPrice(v.priceHKD, v.priceGBP)})</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="pt-4 space-y-3">
            <div className="flex gap-4">
              {/* Stepper */}
              <div className="flex items-center border border-[#E8E4DC] rounded bg-white px-3 py-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-2 text-sm text-[#0C2340] hover:text-[#A38458]"
                >
                  -
                </button>
                <span className="px-3 text-xs font-bold text-[#0C2340]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-2 text-sm text-[#0C2340] hover:text-[#A38458]"
                >
                  +
                </button>
              </div>

              {/* Add to Bag */}
              <button
                onClick={handleAddToCart}
                className="btn-luxury-gold flex-1 py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Shopping Bag</span>
              </button>
            </div>

            {/* Curate into Hamper CTA */}
            <Link
              href="/custom-hamper"
              className="w-full py-3 rounded border border-[#0C2340] text-[#0C2340] hover:bg-[#FAF8F5] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
            >
              <Gift className="w-4 h-4 text-[#A38458]" />
              <span>Include this in a Custom Gift Hamper</span>
            </Link>

            {addedToast && (
              <div className="p-3 bg-[#EBF2EE] text-[#436357] text-xs font-medium rounded flex items-center gap-2 animate-in fade-in">
                <Check className="w-4 h-4" />
                <span>Added to bag! Complimentary gift packaging included.</span>
              </div>
            )}
          </div>

          {/* Trust Guarantees */}
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#E8E4DC] text-xs text-[#5C5C5C]">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#5B8276] shrink-0" />
              <span>Free HK Delivery over HK$ 800</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A880] shrink-0" />
              <span>Authentic German Mono Partner</span>
            </div>
          </div>

          {/* Tea Sensory Notes & Brewing Guide */}
          {product.isTea && product.tastingNotes && product.brewingGuide && (
            <div className="pt-4 space-y-4">
              <TastingRadar tastingNotes={product.tastingNotes} />
              <BrewingGuide brewingGuide={product.brewingGuide} />
            </div>
          )}

          {/* Informational Accordions */}
          <div className="pt-4 border-t border-[#E8E4DC] divide-y divide-[#E8E4DC]">
            {/* Story Accordion */}
            <div className="py-3">
              <button
                onClick={() => setOpenAccordion(openAccordion === 'story' ? '' : 'story')}
                className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#0C2340]"
              >
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                  Design & Craftsmanship Legacy
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    openAccordion === 'story' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 'story' && (
                <p className="text-xs text-[#5C5C5C] pt-2.5 leading-relaxed">
                  {product.story}
                </p>
              )}
            </div>

            {/* Specifications Accordion */}
            <div className="py-3">
              <button
                onClick={() => setOpenAccordion(openAccordion === 'specs' ? '' : 'specs')}
                className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#0C2340]"
              >
                <span>Specifications & Dimensions</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    openAccordion === 'specs' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 'specs' && (
                <div className="pt-2.5 space-y-1.5 text-xs">
                  {product.specifications.map((s, idx) => (
                    <div key={idx} className="flex justify-between py-1 border-b border-[#E8E4DC]/40">
                      <span className="text-[#6B7280]">{s.label}</span>
                      <span className="font-medium text-[#0C2340]">{s.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Care Instructions Accordion */}
            <div className="py-3">
              <button
                onClick={() => setOpenAccordion(openAccordion === 'care' ? '' : 'care')}
                className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#0C2340]"
              >
                <span>Care & Maintenance</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    openAccordion === 'care' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 'care' && (
                <ul className="pt-2.5 list-disc list-inside space-y-1 text-xs text-[#5C5C5C]">
                  {product.careInstructions.map((c, idx) => (
                    <li key={idx}>{c}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related / "Complete Your Teatime" Section */}
      <div className="pt-12 border-t border-[#E8E4DC] space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C5A880]">
            The Curated Pairing
          </span>
          <h3 className="text-2xl font-serif text-[#0C2340]">Pairs Beautifully With</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
