'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, X, ArrowRight } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { PRODUCTS } from '@/data/products';
import { JOURNAL_POSTS } from '@/data/journalPosts';

export function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, formatPrice } = useApp();
  const [query, setQuery] = useState('');

  if (!isSearchOpen) return null;

  const filteredProducts = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      )
    : PRODUCTS.slice(0, 4);

  const filteredArticles = query.trim()
    ? JOURNAL_POSTS.filter(
        (a) =>
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.excerpt.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-md shadow-2xl overflow-hidden z-10 border border-[#E8E4DC]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#E8E4DC] flex items-center gap-3 bg-[#FAF8F5]">
          <Search className="w-5 h-5 text-[#A38458]" />
          <input
            type="text"
            placeholder="Search teapots, tableware, loose leaf teas, or articles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="flex-1 bg-transparent border-none outline-none text-[#0C2340] placeholder-[#9CA3AF] text-sm"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-xs text-[#6B7280] hover:text-[#0C2340]">
              Clear
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1 text-[#6B7280] hover:text-[#0C2340] rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-5 space-y-6">
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xs font-semibold text-[#0C2340] uppercase tracking-wider">
                {query ? 'Products' : 'Popular Collections'}
              </h3>
              <Link
                href="/shop"
                onClick={() => setIsSearchOpen(false)}
                className="text-xs text-[#A38458] hover:text-[#0C2340] flex items-center gap-1"
              >
                View all catalog <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/shop/product/${product.slug}`}
                  onClick={() => setIsSearchOpen(false)}
                  className="flex gap-3 p-2.5 rounded border border-[#E8E4DC] hover:border-[#C5A880] hover:bg-[#FAF8F5] transition-all group"
                >
                  <div className="relative w-14 h-14 rounded overflow-hidden bg-[#F5F1EB] shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="56px"
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-[#0C2340] line-clamp-1 group-hover:text-[#A38458]">
                      {product.name}
                    </p>
                    <p className="text-[11px] text-[#6B7280] truncate">{product.category}</p>
                    <p className="text-xs font-bold text-[#0C2340] mt-1">
                      {formatPrice(product.priceHKD, product.priceGBP)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {filteredArticles.length > 0 && (
            <div className="pt-4 border-t border-[#E8E4DC]">
              <h3 className="text-xs font-semibold text-[#0C2340] uppercase tracking-wider mb-3">
                Tea Journal & Guides
              </h3>
              <div className="space-y-2">
                {filteredArticles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/blog/${article.slug}`}
                    onClick={() => setIsSearchOpen(false)}
                    className="block p-3 rounded border border-[#E8E4DC] hover:border-[#C5A880] hover:bg-[#FAF8F5] transition-all"
                  >
                    <p className="text-xs font-serif font-semibold text-[#0C2340]">
                      {article.title}
                    </p>
                    <p className="text-[11px] text-[#6B7280] line-clamp-1 mt-0.5">
                      {article.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
