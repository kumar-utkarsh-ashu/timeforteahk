'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, Heart, ShoppingBag } from 'lucide-react';
import { Product } from '@/data/products';
import { useApp } from '@/context/AppContext';
import { Badge } from '@/components/ui/Badge';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, formatPrice, wishlist, toggleWishlist, setQuickViewProduct } = useApp();
  const isWishlisted = wishlist.includes(product.id);

  return (
    <div className="group card-luxury flex flex-col justify-between overflow-hidden bg-white border border-[#E8E4DC] hover:border-[#D1A345] transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#FAF8F5]">
        <Link href={`/shop/product/${product.slug}`} className="relative block w-full h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </Link>

        {/* Badge Tag */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <Badge label={product.badge} variant={product.badge === 'Mono Partner' ? 'navy' : 'gold'} />
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={() => toggleWishlist(product.id)}
          className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            isWishlisted
              ? 'bg-[#D1A345] text-white shadow-md'
              : 'bg-white/80 backdrop-blur-xs text-[#0048BA] hover:bg-white hover:text-[#D1A345]'
          }`}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View Hover Button */}
        <div className="absolute inset-x-3 bottom-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => setQuickViewProduct(product)}
            className="w-full py-2 bg-white/95 backdrop-blur-xs text-[#0048BA] hover:bg-[#0048BA] hover:text-white rounded-xs text-[11px] font-bold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Content Details */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#B88A2D]">
            {product.category}
          </span>
          <h3 className="text-sm font-serif font-semibold text-[#0048BA] line-clamp-2 mt-1 group-hover:text-[#B88A2D] transition-colors leading-snug">
            <Link href={`/shop/product/${product.slug}`}>{product.name}</Link>
          </h3>
          <p className="text-[11px] text-[#6B7280] line-clamp-1 mt-0.5">{product.subtitle}</p>
        </div>

        {/* Price & Add to Bag */}
        <div className="pt-2 border-t border-[#E8E4DC]/60 flex items-center justify-between gap-2">
          <div>
            <span className="text-sm font-bold font-serif text-[#0048BA]">
              {formatPrice(product.priceHKD, product.priceGBP)}
            </span>
          </div>

          <button
            onClick={() => addToCart(product, 1)}
            className="px-3 py-1.5 rounded-xs bg-[#FAF8F5] border border-[#E8E4DC] text-[#0048BA] hover:bg-[#0048BA] hover:text-white hover:border-[#0048BA] text-xs font-semibold transition-all flex items-center gap-1"
            aria-label={`Add ${product.name} to bag`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
