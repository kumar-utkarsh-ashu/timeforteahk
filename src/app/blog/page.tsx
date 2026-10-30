'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JOURNAL_POSTS } from '@/data/journalPosts';

const CATEGORIES = [
  'All Articles',
  'Afternoon Tea',
  'Tea Buying Guide',
  'Tea Culture',
  'Where to Drink Tea',
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Articles');

  const filteredPosts =
    selectedCategory === 'All Articles'
      ? JOURNAL_POSTS
      : JOURNAL_POSTS.filter((post) => post.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="flex items-center justify-center gap-2 text-xs text-[#6B7280]">
          <Link href="/" className="hover:text-[#0048BA]">Home</Link>
          <span>/</span>
          <span className="text-[#0048BA] font-medium">The Tea Journal</span>
        </div>

        <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#D1A345]">
          Brewing Wisdom &amp; Culture
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif text-[#0048BA]">
          The Time for Tea Journal
        </h1>
        <p className="text-xs sm:text-sm text-[#5C5C5C] leading-relaxed">
          From the German engineering behind borosilicate glass teapots to the sacred etiquette of British scones, explore our editorial guides and tea masterclasses.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex justify-center items-center gap-2 overflow-x-auto pb-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-[#0048BA] text-white shadow-sm'
                : 'bg-white text-[#5C5C5C] border border-[#E8E4DC] hover:border-[#D1A345] hover:text-[#0048BA]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured / Lead Article */}
      {filteredPosts.length > 0 && (
        <Link
          href={`/blog/${filteredPosts[0].slug}`}
          className="group block card-luxury rounded-xl overflow-hidden border border-[#E8E4DC] bg-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-16/10 lg:aspect-auto h-72 sm:h-96 overflow-hidden bg-[#FAF8F5]">
              <Image
                src={filteredPosts[0].image}
                alt={filteredPosts[0].title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded bg-[#0048BA] text-[#DFBE77]">
                  Featured Story
                </span>
              </div>
            </div>

            <div className="p-8 sm:p-12 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#B88A2D]">
                  <span>{filteredPosts[0].category}</span>
                  <span>•</span>
                  <span>{filteredPosts[0].date}</span>
                  <span>•</span>
                  <span>{filteredPosts[0].readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif text-[#0048BA] group-hover:text-[#B88A2D] transition-colors leading-snug">
                  {filteredPosts[0].title}
                </h2>

                <p className="text-xs sm:text-sm text-[#5C5C5C] leading-relaxed">
                  {filteredPosts[0].excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E4DC] flex items-center justify-between">
                <span className="text-xs text-[#6B7280]">By {filteredPosts[0].author}</span>
                <span className="text-xs font-semibold text-[#0048BA] group-hover:text-[#B88A2D] flex items-center gap-1">
                  Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* Grid of Remaining Articles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredPosts.slice(1).map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group card-luxury overflow-hidden border border-[#E8E4DC] rounded-lg block bg-white"
          >
            <div className="relative aspect-16/10 overflow-hidden bg-[#FAF8F5]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3">
                <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#0048BA] text-white">
                  {post.category}
                </span>
              </div>
            </div>

            <div className="p-6 space-y-2.5">
              <div className="flex items-center gap-2 text-[11px] text-[#B88A2D]">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-base font-serif font-semibold text-[#0048BA] group-hover:text-[#B88A2D] transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-xs text-[#6B7280] line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
