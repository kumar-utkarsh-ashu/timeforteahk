'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Product } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import { ArrowUpDown } from 'lucide-react';

interface SubCategoryItem {
  slug: string;
  name: string;
}

interface CategoryProductViewProps {
  categorySlug: string;
  categoryName: string;
  subcategories: SubCategoryItem[];
  products: Product[];
}

function CategoryProductViewInner({
  categorySlug,
  categoryName,
  subcategories,
  products,
}: CategoryProductViewProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeSubcategory = searchParams.get('sub') || 'all';

  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');

  const handleSubcategoryClick = (slug: string) => {
    if (slug === 'all') {
      router.push(`/shop/${categorySlug}`, { scroll: false });
    } else {
      router.push(`/shop/${categorySlug}?sub=${slug}`, { scroll: false });
    }
  };

  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (activeSubcategory !== 'all') {
      list = list.filter((p) => p.subcategorySlug === activeSubcategory);
    }

    if (sortBy === 'price-low') {
      list.sort((a, b) => a.priceHKD - b.priceHKD);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.priceHKD - a.priceHKD);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [products, activeSubcategory, sortBy]);

  return (
    <div className="space-y-8">
      {/* Subcategories Filter Tabs */}
      {subcategories && subcategories.length > 0 && (
        <div className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#B88A2D]">
            Filter by Subcategory:
          </span>
          <div className="flex flex-wrap gap-2 pt-1">
            <button
              onClick={() => handleSubcategoryClick('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeSubcategory === 'all'
                  ? 'bg-[#0048BA] text-white shadow-md'
                  : 'bg-[#FAF8F5] text-[#5C5C5C] hover:text-[#0048BA] border border-[#E8E4DC]'
              }`}
            >
              All {categoryName} ({products.length})
            </button>

            {subcategories.map((sub) => {
              const count = products.filter((p) => p.subcategorySlug === sub.slug).length;
              return (
                <button
                  key={sub.slug}
                  onClick={() => handleSubcategoryClick(sub.slug)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    activeSubcategory === sub.slug
                      ? 'bg-[#0048BA] text-white shadow-md'
                      : 'bg-[#FAF8F5] text-[#5C5C5C] hover:text-[#0048BA] border border-[#E8E4DC]'
                  }`}
                >
                  {sub.name} {count > 0 && `(${count})`}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Sorting & Result Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 border-t border-[#E8E4DC] text-xs text-[#6B7280]">
        <p>
          Showing <span className="font-bold text-[#0048BA]">{filteredProducts.length}</span> curated item
          {filteredProducts.length !== 1 ? 's' : ''}
          {activeSubcategory !== 'all' && (
            <span> in &ldquo;{subcategories.find((s) => s.slug === activeSubcategory)?.name}&rdquo;</span>
          )}
        </p>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <ArrowUpDown className="w-3.5 h-3.5 text-[#B88A2D]" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'featured' | 'price-low' | 'price-high' | 'rating')}
            className="p-1.5 rounded border border-[#E8E4DC] bg-white text-xs text-[#0048BA] font-semibold outline-none focus:ring-1 focus:ring-[#D1A345]"
          >
            <option value="featured">Featured First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-xl bg-[#FAF8F5] border border-[#E8E4DC] space-y-3">
          <p className="text-sm font-serif text-[#0048BA]">No products currently in this subcategory.</p>
          <button
            onClick={() => handleSubcategoryClick('all')}
            className="btn-luxury-outline text-xs py-2 px-4"
          >
            View All {categoryName}
          </button>
        </div>
      )}
    </div>
  );
}

export function CategoryProductView(props: CategoryProductViewProps) {
  return (
    <Suspense
      fallback={
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {props.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      }
    >
      <CategoryProductViewInner {...props} />
    </Suspense>
  );
}
