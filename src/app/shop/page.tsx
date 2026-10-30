'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { CATEGORIES_DATA } from '@/data/categories';
import { ProductCard } from '@/components/product/ProductCard';

const CATEGORIES = [
  { id: 'all', name: 'All Collections' },
  { id: 'tableware', name: 'Tableware' },
  { id: 'table-linen', name: 'Table Linen' },
  { id: 'teapots-and-accessories', name: 'Mono Teapots & Accessories' },
  { id: 'tea', name: 'Loose Leaf Tea' },
  { id: 'gift-boxes', name: 'Gifts & Hampers' },
  { id: 'pinkribbon', name: 'Pink Ribbon October' },
  { id: 'christmas', name: 'Christmas Collection' },
];

function ShopPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedCategory = searchParams.get('category') || 'all';
  const selectedSubcategory = searchParams.get('sub') || 'all';

  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const activeCategoryData = useMemo(() => {
    return CATEGORIES_DATA.find((c) => c.slug === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (catId: string) => {
    if (catId === 'all') {
      router.push('/shop', { scroll: false });
    } else {
      router.push(`/shop?category=${catId}`, { scroll: false });
    }
  };

  const handleSubcategoryChange = (subSlug: string) => {
    if (subSlug === 'all') {
      router.push(selectedCategory === 'all' ? '/shop' : `/shop?category=${selectedCategory}`, { scroll: false });
    } else {
      router.push(`/shop?category=${selectedCategory}&sub=${subSlug}`, { scroll: false });
    }
  };

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (selectedCategory !== 'all') {
      list = list.filter((p) => p.categorySlug === selectedCategory);
    }

    if (selectedSubcategory !== 'all') {
      list = list.filter((p) => p.subcategorySlug === selectedSubcategory);
    }

    if (selectedMaterial !== 'all') {
      list = list.filter((p) =>
        p.specifications.some((s) => {
          if (!s.label.toLowerCase().includes('material')) return false;
          const val = s.value.toLowerCase();
          if (selectedMaterial === 'china') {
            return val.includes('china') || val.includes('porcelain') || val.includes('ceramic');
          }
          return val.includes(selectedMaterial.toLowerCase());
        })
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
  }, [selectedCategory, selectedSubcategory, sortBy, selectedMaterial, inStockOnly]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14 space-y-8">
      {/* Breadcrumb & Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-[#6B7280]">
          <Link href="/" className="hover:text-[#0048BA]">Home</Link>
          <span>/</span>
          <span className="text-[#0048BA] font-medium">The Complete Collection</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E8E4DC] pb-6">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#D1A345]">
              Curated Catalog
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif text-[#0048BA] mt-1">
              Tea, Tableware &amp; Artisanal Linen
            </h1>
            <p className="text-xs text-[#5C5C5C] mt-1 max-w-xl">
              Authentic German Mono Filio teapots, fine dinnerware &amp; tableware, French flax linens, and single-origin teas.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="lg:hidden px-3.5 py-2 rounded border border-[#E8E4DC] bg-white text-xs font-semibold text-[#0048BA] flex items-center gap-1.5"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters</span>
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#B88A2D]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'featured' | 'price-low' | 'price-high' | 'rating')}
                className="p-2 rounded border border-[#E8E4DC] bg-white text-xs text-[#0048BA] font-semibold outline-none focus:ring-1 focus:ring-[#D1A345]"
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-[#0048BA] text-white shadow-sm'
                : 'bg-white text-[#5C5C5C] border border-[#E8E4DC] hover:border-[#D1A345] hover:text-[#0048BA]'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Subcategory Filter Pills (Shown when a specific category with subcategories is selected) */}
      {activeCategoryData && activeCategoryData.subcategories.length > 0 && (
        <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#E8E4DC] space-y-2">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#B88A2D] block">
            Subcategories in {activeCategoryData.name}:
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleSubcategoryChange('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedSubcategory === 'all'
                  ? 'bg-[#0048BA] text-white shadow-xs'
                  : 'bg-white text-[#5C5C5C] hover:text-[#0048BA] border border-[#E8E4DC]'
              }`}
            >
              All {activeCategoryData.name}
            </button>
            {activeCategoryData.subcategories.map((sub) => {
              const count = PRODUCTS.filter((p) => p.subcategorySlug === sub.slug).length;
              return (
                <button
                  key={sub.slug}
                  onClick={() => handleSubcategoryChange(sub.slug)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    selectedSubcategory === sub.slug
                      ? 'bg-[#0048BA] text-white shadow-xs'
                      : 'bg-white text-[#5C5C5C] hover:text-[#0048BA] border border-[#E8E4DC]'
                  }`}
                >
                  {sub.name} {count > 0 && `(${count})`}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Grid & Faceted Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Filter Sidebar (Desktop) */}
        <div
          className={`lg:block space-y-6 ${
            isMobileFilterOpen ? 'block' : 'hidden'
          } p-5 lg:p-0 bg-white lg:bg-transparent rounded-lg border lg:border-none border-[#E8E4DC]`}
        >
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0048BA]">
              Filter by Material
            </h3>
            <div className="space-y-2 text-xs">
              {[
                { id: 'all', label: 'All Materials' },
                { id: 'borosilicate', label: 'Duran® Borosilicate Glass' },
                { id: 'china', label: 'Fine Bone China & Ceramics' },
                { id: 'flax', label: '100% French Flax Linen' },
                { id: 'steel', label: '18/10 Stainless Steel' },
              ].map((mat) => (
                <label key={mat.id} className="flex items-center gap-2.5 cursor-pointer text-[#5C5C5C] hover:text-[#0048BA]">
                  <input
                    type="radio"
                    name="material"
                    checked={selectedMaterial === mat.id}
                    onChange={() => setSelectedMaterial(mat.id)}
                    className="text-[#0048BA] focus:ring-[#D1A345]"
                  />
                  <span>{mat.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#E8E4DC] space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0048BA]">
              Availability
            </h3>
            <label className="flex items-center gap-2.5 cursor-pointer text-xs text-[#5C5C5C]">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="rounded text-[#0048BA] focus:ring-[#D1A345]"
              />
              <span>In Stock at Central Showroom</span>
            </label>
          </div>

          <div className="p-4 bg-[#FAF8F5] rounded border border-[#E8E4DC] space-y-2 text-xs">
            <p className="font-serif font-semibold text-[#0048BA]">Looking for Event Hire?</p>
            <p className="text-[11px] text-[#6B7280]">
              We offer full tea sets and Mono teapots for hire for private parties.
            </p>
            <Link
              href="/event-styling"
              className="text-xs font-bold text-[#B88A2D] hover:text-[#0048BA] inline-block pt-1"
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
              <h3 className="text-lg font-serif text-[#0048BA]">No Products Match Your Filter</h3>
              <p className="text-xs text-[#6B7280]">Try clearing your filters or selecting another category.</p>
              <button
                onClick={() => {
                  setSelectedMaterial('all');
                  setInStockOnly(false);
                  router.push('/shop');
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

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14 space-y-8">
          <div className="p-12 text-center text-xs text-[#6B7280]">Loading luxury collections...</div>
        </div>
      }
    >
      <ShopPageContent />
    </Suspense>
  );
}
