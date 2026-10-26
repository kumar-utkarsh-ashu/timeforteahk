import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Calendar, User, Share2 } from 'lucide-react';
import { JOURNAL_POSTS } from '@/data/journalPosts';
import { PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';

export function generateStaticParams() {
  return JOURNAL_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = JOURNAL_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const recommendedProduct = post.recommendedProductSlug
    ? PRODUCTS.find((p) => p.slug === post.recommendedProductSlug)
    : null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-10">
      {/* Back Link & Breadcrumb */}
      <div className="flex items-center justify-between text-xs text-[#6B7280]">
        <Link
          href="/blog"
          className="hover:text-[#0C2340] font-semibold flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Tea Journal</span>
        </Link>
        <span className="text-[#A38458] font-medium">{post.category}</span>
      </div>

      {/* Article Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C5A880]">
          {post.category}
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif text-[#0C2340] leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center justify-center gap-4 text-xs text-[#6B7280] pt-2">
          <span className="flex items-center gap-1">
            <User className="w-3.5 h-3.5 text-[#A38458]" />
            {post.author}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-[#A38458]" />
            {post.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#A38458]" />
            {post.readTime}
          </span>
        </div>
      </div>

      {/* Main Image */}
      <div className="relative aspect-16/9 rounded-xl overflow-hidden border border-[#E8E4DC] shadow-sm">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 900px"
          className="object-cover"
        />
      </div>

      {/* Editorial Body Content */}
      <div className="prose prose-stone max-w-none space-y-6 text-sm sm:text-base text-[#3A3D42] leading-relaxed">
        {post.content.map((paragraph, idx) => (
          <p key={idx} className={idx === 0 ? 'text-lg sm:text-xl font-serif italic text-[#0C2340] leading-relaxed border-l-2 border-[#C5A880] pl-4' : ''}>
            {paragraph}
          </p>
        ))}
      </div>

      {/* Recommended Teatime Companion Product */}
      {recommendedProduct && (
        <div className="p-8 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC] space-y-4 mt-12">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#A38458]">
            Featured in this Article
          </span>
          <div className="max-w-xs">
            <ProductCard product={recommendedProduct} />
          </div>
        </div>
      )}

      {/* Bottom Share & Return Strip */}
      <div className="pt-8 border-t border-[#E8E4DC] flex items-center justify-between">
        <Link
          href="/blog"
          className="btn-luxury-outline text-xs py-2.5 px-5"
        >
          ← Return to Journal
        </Link>
        <div className="flex items-center gap-2 text-xs text-[#6B7280]">
          <Share2 className="w-4 h-4 text-[#A38458]" />
          <span>Share Article</span>
        </div>
      </div>
    </div>
  );
}
