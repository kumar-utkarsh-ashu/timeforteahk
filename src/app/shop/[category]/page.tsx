import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';

interface CategoryMeta {
  title: string;
  subtitle: string;
  description: string;
  partnerBadge?: string;
}

const CATEGORY_DATA: Record<string, CategoryMeta> = {
  'teapots-and-accessories': {
    title: 'Mono Filio Teapots & Accessories',
    subtitle: 'German-Engineered Duran® Borosilicate Glass & Stainless Steel',
    description:
      'Time for Tea HK is the official exclusive distributor of Mono Germany in Hong Kong. Discover iconic teapots, replacement glass bowls, tea warmers, and micro-mesh strainers designed by Tassilo von Grolman.',
    partnerBadge: '🇩🇪 Official Mono Germany Partner',
  },
  'tableware': {
    title: 'Fine Porcelain & Tableware',
    subtitle: 'Oriental Blossom Bone China & Tiered Stands',
    description:
      'Fine bone china dining plates, dessert plates, and three-tier afternoon tea stands finished with 24k gold rims and painterly botanical mulberry motifs.',
  },
  'table-linen': {
    title: 'Handcrafted Table Linen',
    subtitle: '100% Pre-Washed French Flax Linen with Hand Embroidery',
    description:
      'Crafted in collaboration with artisanal embroidery cooperatives. Delicate scalloped borders, mimosa blossom details, and generous Belgian linen table runners.',
  },
  'tea': {
    title: 'Rare Loose Leaf Tea Harvests',
    subtitle: 'Single-Origin Oolongs, Jasmine Pearls & Royal Blends',
    description:
      'Single-estate whole leaf teas sourced directly from small growers. Packed in airtight signature caddies complete with water temperature guides and sommelier tasting profiles.',
  },
  'gift-boxes': {
    title: 'Curated Afternoon Tea Gift Hampers',
    subtitle: 'Gold-Embossed Keepsake Trunks & Bespoke Gift Presentations',
    description:
      'The ultimate gift for weddings, housewarmings, and holidays. Paired with complimentary handwritten calligraphy cards and white-glove Hong Kong delivery.',
  },
  'pinkribbon': {
    title: 'Pink Ribbon October Charity Edition',
    subtitle: 'Supporting the Hong Kong Breast Cancer Foundation',
    description:
      'Limited-edition blush gift boxes and organic French rose blends. 20% of all net proceeds are donated directly to funding free mammograms for underprivileged women in Hong Kong.',
    partnerBadge: '🎗️ Charity Edition',
  },
};

export function generateStaticParams() {
  return [
    { category: 'teapots-and-accessories' },
    { category: 'tableware' },
    { category: 'table-linen' },
    { category: 'tea' },
    { category: 'gift-boxes' },
    { category: 'pinkribbon' },
  ];
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const meta = CATEGORY_DATA[category];

  if (!meta) {
    notFound();
  }

  const products = PRODUCTS.filter((p) => p.categorySlug === category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14 space-y-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[#6B7280]">
        <Link href="/" className="hover:text-[#0C2340]">Home</Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-[#0C2340]">Shop All</Link>
        <span>/</span>
        <span className="text-[#0C2340] font-medium">{meta.title}</span>
      </div>

      {/* Category Hero Banner */}
      <div className="bg-[#FAF8F5] p-8 sm:p-12 rounded-xl border border-[#E8E4DC] relative overflow-hidden">
        <div className="max-w-2xl space-y-3 relative z-10">
          {meta.partnerBadge && (
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded bg-[#0C2340] text-amber-200 shadow-xs">
              {meta.partnerBadge}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl font-serif text-[#0C2340]">
            {meta.title}
          </h1>
          <p className="text-xs uppercase tracking-wider font-semibold text-[#A38458]">
            {meta.subtitle}
          </p>
          <p className="text-xs sm:text-sm text-[#5C5C5C] leading-relaxed pt-1">
            {meta.description}
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="space-y-4">
        <div className="flex justify-between items-center text-xs text-[#6B7280]">
          <span>Showing {products.length} curated pieces</span>
          <Link href="/shop" className="text-[#0C2340] hover:text-[#C5A880] font-semibold">
            View All Categories →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
