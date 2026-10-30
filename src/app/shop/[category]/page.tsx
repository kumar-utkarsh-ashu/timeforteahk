import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/data/products';
import { CATEGORIES_DATA } from '@/data/categories';
import { CategoryProductView } from '@/components/shop/CategoryProductView';

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
    title: 'Tableware',
    subtitle: 'Plates & Tea Cups, Placemats, Napkin Rings & Candles',
    description:
      'Curated dining plates, tea cups, sculptural floral napkin rings, woven placemats, and candleholders designed to elevate your teatime rituals.',
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
  'christmas': {
    title: 'Christmas Collection',
    subtitle: 'Festive Holiday Placemats, Napkin Rings, Candleholders & Gift Sets',
    description:
      'Celebrate the festive season with our holiday table decor, candleholders, velvet-edged linens, and luxury afternoon tea gift selections.',
    partnerBadge: '🎄 Seasonal Holiday Collection',
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
    { category: 'christmas' },
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
        <Link href="/" className="hover:text-[#0048BA]">Home</Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-[#0048BA]">Shop All</Link>
        <span>/</span>
        <span className="text-[#0048BA] font-medium">{meta.title}</span>
      </div>

      {/* Category Hero Banner */}
      <div className="bg-[#FAF8F5] p-8 sm:p-12 rounded-xl border border-[#E8E4DC] relative overflow-hidden">
        <div className="max-w-2xl space-y-3 relative z-10">
          {meta.partnerBadge && (
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded bg-[#0048BA] text-white shadow-xs">
              {meta.partnerBadge}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl font-serif text-[#0048BA]">
            {meta.title}
          </h1>
          <p className="text-xs uppercase tracking-wider font-semibold text-[#B88A2D]">
            {meta.subtitle}
          </p>
          <p className="text-xs sm:text-sm text-[#5C5C5C] leading-relaxed pt-1">
            {meta.description}
          </p>
        </div>
      </div>

      {/* Subcategories & Product View */}
      <CategoryProductView
        categorySlug={category}
        categoryName={meta.title}
        subcategories={CATEGORIES_DATA.find((c) => c.slug === category)?.subcategories || []}
        products={products}
      />
    </div>
  );
}
