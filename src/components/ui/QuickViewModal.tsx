'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Star, ShoppingBag, ArrowRight } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { Badge } from '@/components/ui/Badge';

export function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart, formatPrice } = useApp();
  const [selectedVariant, setSelectedVariant] = useState<string>('');
  const [quantity, setQuantity] = useState(1);

  if (!quickViewProduct) return null;

  const currentVariant = quickViewProduct.variants?.find((v) => v.name === selectedVariant);
  const priceHKD = currentVariant ? currentVariant.priceHKD : quickViewProduct.priceHKD;
  const priceGBP = currentVariant ? currentVariant.priceGBP : quickViewProduct.priceGBP;

  const handleAdd = () => {
    addToCart(quickViewProduct, quantity, selectedVariant || undefined);
    setQuickViewProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-3xl bg-white rounded-md shadow-2xl overflow-hidden z-10 border border-[#E8E4DC] max-h-[90vh] flex flex-col md:flex-row">
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-3 right-3 z-20 p-1.5 rounded-full bg-white/80 hover:bg-white text-[#0048BA] shadow-md transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Column */}
        <div className="relative md:w-1/2 h-64 md:h-auto bg-[#FAF8F5]">
          <Image
            src={quickViewProduct.image}
            alt={quickViewProduct.name}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover"
          />
          {quickViewProduct.badge && (
            <div className="absolute top-4 left-4">
              <Badge label={quickViewProduct.badge} variant="gold" />
            </div>
          )}
        </div>

        {/* Product Details Column */}
        <div className="md:w-1/2 p-6 overflow-y-auto flex flex-col justify-between space-y-4">
          <div>
            <p className="text-xs font-semibold text-[#B88A2D] uppercase tracking-wider">
              {quickViewProduct.category}
            </p>
            <h2 className="text-xl font-serif font-semibold text-[#0048BA] mt-1">
              {quickViewProduct.name}
            </h2>
            <p className="text-xs text-[#6B7280] mt-1">{quickViewProduct.subtitle}</p>

            <div className="flex items-center gap-2 mt-2">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs text-[#6B7280]">({quickViewProduct.reviewCount} reviews)</span>
            </div>

            <div className="mt-4 pt-3 border-t border-[#E8E4DC]">
              <span className="text-2xl font-bold font-serif text-[#0048BA]">
                {formatPrice(priceHKD, priceGBP)}
              </span>
            </div>

            <p className="text-xs text-[#3A3D42] mt-3 line-clamp-3 leading-relaxed">
              {quickViewProduct.description}
            </p>

            {/* Variant Selector */}
            {quickViewProduct.variants && (
              <div className="mt-4 space-y-1.5">
                <label className="text-xs font-semibold text-[#0048BA]">Select Option:</label>
                <div className="flex flex-wrap gap-2">
                  {quickViewProduct.variants.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVariant(v.name)}
                      className={`px-3 py-1.5 text-xs rounded border transition-all ${
                        (selectedVariant || quickViewProduct.variants?.[0].name) === v.name
                          ? 'border-[#0048BA] bg-[#0048BA] text-white font-semibold'
                          : 'border-[#E8E4DC] bg-white text-[#3A3D42] hover:border-[#D1A345]'
                      }`}
                    >
                      {v.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-[#E8E4DC] space-y-3">
            <div className="flex gap-3">
              {/* Quantity Stepper */}
              <div className="flex items-center border border-[#E8E4DC] rounded bg-[#FAF8F5] px-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-2 py-1 text-sm text-[#0048BA] hover:text-[#B88A2D]"
                >
                  -
                </button>
                <span className="px-2 text-xs font-semibold text-[#0048BA]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-2 py-1 text-sm text-[#0048BA] hover:text-[#B88A2D]"
                >
                  +
                </button>
              </div>

              {/* Add to Bag Button */}
              <button
                onClick={handleAdd}
                className="btn-luxury-gold flex-1 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider py-2.5"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Bag</span>
              </button>
            </div>

            <Link
              href={`/shop/product/${quickViewProduct.slug}`}
              onClick={() => setQuickViewProduct(null)}
              className="flex items-center justify-center gap-1.5 text-xs text-[#0048BA] hover:text-[#B88A2D] font-medium py-1 transition-colors"
            >
              <span>View Full Details &amp; Tasting/Care Notes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
