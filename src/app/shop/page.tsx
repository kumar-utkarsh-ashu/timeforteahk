'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';

const CATEGORIES = [
  { id: 'all', name: 'All Collections', href: '/shop' },
  { id: 'teapots-and-accessories', name: 'Mono Teapots', href: '/shop/teapots-and-accessories' },
  { id: 'tableware', name: 'Fine Tableware', href: '/shop/tableware' },
  { id: 'table-linen', name: 'Table Linen', href: '/shop/table-linen' },
  { id: 'tea', name: 'Loose Leaf Tea', href: '/shop/tea' },
  { id: 'gift-boxes', name: 'Curated Gift Boxes', href: '/shop/gift-boxes' },
  { id: 'pinkribbon', name: 'Pink Ribbon October', href: '/shop/pinkribbon' },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (selectedCategory !== 'all') {
      list = list.filter((p) => p.categorySlug === selectedCategory);
    }

    if (selectedMaterial !== 'all') {
      list = list.filter((p) =>
        p.specifications.some(
          (s) =>
            s.label.toLowerCase().includes('material') &&
            s.value.toLowerCase().includes(selectedMaterial.toLowerCase())
        )
      );
    }

    if (inStockOnly) {
      list = list.filter((p) => p.inStock);
    }

    if (sortBy === 'price-low') {
      list.sort((a, b) => a.priceHKD - b.priceHKD);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.priceHKD - a.priceHKD);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [selectedCategory, sortBy, selectedMaterial, inStockOnly]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14 space-y-8">
      {/* Breadcrumb & Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-[#6B7280]">
          <Link href="/" className="hover:text-[#0C2340]">Home</Link>
          <span>/</span>
          <span className="text-[#0C2340] font-medium">The Complete Collection</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E8E4DC] pb-6">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C5A880]">
              Curated Catalog
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif text-[#0C2340] mt-1">
              Tea, Tableware & Artisanal Linen
            </h1>
            <p className="text-xs text-[#5C5C5C] mt-1 max-w-xl">
              Authentic German Mono Filio teapots, hand-painted Oriental Blossom porcelain, French flax linens, and single-origin teas.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="lg:hidden px-3.5 py-2 rounded border border-[#E8E4DC] bg-white text-xs font-semibold text-[#0C2340] flex items-center gap-1.5"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters</span>
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#A38458]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort products"
                className="p-2 rounded border border-[#E8E4DC] bg-white text-xs text-[#0C2340] outline-none focus:ring-1 focus:ring-[#C5A880]"
              >
                <option value="featured">Sort by: Featured Edit</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat.id
                ? 'bg-[#0C2340] text-white shadow-sm'
                : 'bg-white text-[#5C5C5C] border border-[#E8E4DC] hover:border-[#C5A880] hover:text-[#0C2340]'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Main Grid & Faceted Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Filter Sidebar (Desktop) */}
        <div
          className={`lg:block space-y-6 ${
            isMobileFilterOpen ? 'block' : 'hidden'
          } p-5 lg:p-0 bg-white lg:bg-transparent rounded-lg border lg:border-none border-[#E8E4DC]`}
        >
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0C2340]">
              Filter by Material
            </h3>
            <div className="space-y-2 text-xs">
              {[
                { id: 'all', label: 'All Materials' },
                { id: 'borosilicate', label: 'Duran® Borosilicate Glass' },
                { id: 'porcelain', label: 'Fine Bone China & Porcelain' },
                { id: 'flax', label: '100% French Flax Linen' },
                { id: 'steel', label: '18/10 Stainless Steel' },
              ].map((mat) => (
                <label key={mat.id} className="flex items-center gap-2.5 cursor-pointer text-[#5C5C5C] hover:text-[#0C2340]">
                  <input
                    type="radio"
                    name="material"
                    checked={selectedMaterial === mat.id}
                    onChange={() => setSelectedMaterial(mat.id)}
                    className="text-[#0C2340] focus:ring-[#C5A880]"
                  />
                  <span>{mat.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#E8E4DC] space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0C2340]">
              Availability
            </h3>
            <label className="flex items-center gap-2.5 cursor-pointer text-xs text-[#5C5C5C]">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="rounded text-[#0C2340] focus:ring-[#C5A880]"
              />
              <span>In Stock at Central Showroom</span>
            </label>
          </div>

          <div className="p-4 bg-[#FAF8F5] rounded border border-[#E8E4DC] space-y-2 text-xs">
            <p className="font-serif font-semibold text-[#0C2340]">Looking for Event Hire?</p>
            <p className="text-[11px] text-[#6B7280]">
              We offer full tea sets and Mono teapots for hire for private parties.
            </p>
            <Link
              href="/event-styling"
              className="text-xs font-bold text-[#A38458] hover:text-[#0C2340] inline-block pt-1"
            >
              Explore Hire Catalog →
            </Link>
          </div>
        </div>

        {/* Right Product Grid */}
        <div className="lg:col-span-3 space-y-4">
          <div className="flex justify-between items-center text-xs text-[#6B7280]">
            <span>Showing {filteredProducts.length} items</span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-lg border border-[#E8E4DC] space-y-3">
              <h3 className="text-lg font-serif text-[#0C2340]">No Products Match Your Filter</h3>
              <p className="text-xs text-[#6B7280]">Try clearing your filters or selecting another category.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedMaterial('all');
                  setInStockOnly(false);
                }}
                className="btn-luxury-outline text-xs py-2 px-4"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
