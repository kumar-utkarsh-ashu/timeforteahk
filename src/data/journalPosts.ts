export interface JournalPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'Afternoon Tea' | 'Tea Buying Guide' | 'Tea Culture' | 'Where to Drink Tea';
  readTime: string;
  date: string;
  image: string;
  author: string;
  content: string[];
  recommendedProductSlug?: string;
}

export const JOURNAL_POSTS: JournalPost[] = [
  {
    id: 'post-1',
    slug: 'the-art-of-borosilicate-glass-mono-filio',
    title: 'The Art of Borosilicate Glass: Why Mono Filio Teapots Redefined Modern Tea',
    excerpt: 'How German industrial designer Tassilo von Grolman created a functional sculpture that transformed tea brewing from opaque ritual to luminous visual theatre.',
    category: 'Tea Culture',
    readTime: '4 min read',
    date: 'October 18, 2026',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80',
    author: 'Eleanor Vance, Tea Sommelier',
    content: [
      'For centuries, traditional teapots concealed the quiet alchemy of steeping behind opaque porcelain and clay walls. While cast iron and Yixing teapots hold venerable places in tea history, the invention of heat-resistant borosilicate glass offered tea connoisseurs something unprecedented: pure optical clarity.',
      'In the early 1980s, German designer Tassilo von Grolman partnered with Mono in Mettmann to reimagine the teapot from first principles. His vision was simple yet radical: suspend whole tea leaves within a generous, micro-perforated stainless steel cylinder, allowing boiling water to circulate freely while leaves expand up to five times their dried volume.',
      'Resting upon a sculptural 18/10 stainless steel frame with an integrated tea-light warmer, the Mono Filio ensures tea stays at the ideal drinking temperature (60–65°C) for hours without stewing or becoming bitter.',
      'As the exclusive distributor of Mono in Hong Kong, Time for Tea HK is proud to introduce discerning tea lovers to this timeless German classic.',
    ],
    recommendedProductSlug: 'mono-filio-teapot-1-5l-with-warmer',
  },
  {
    id: 'post-2',
    slug: 'hosting-an-english-afternoon-tea-in-hong-kong',
    title: 'Hosting an English Afternoon Tea in Hong Kong: Etiquette & Tablescaping Guide',
    excerpt: 'From the sequence of savouries to the debate on cream vs. jam first, here is everything you need to stage a memorable afternoon tea at home.',
    category: 'Afternoon Tea',
    readTime: '6 min read',
    date: 'October 10, 2026',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
    author: 'Beatrice Chen, Event Stylist',
    content: [
      'The British afternoon tea was born in 1840 when Anna Russell, the 7th Duchess of Bedford, complained of a "sinking feeling" in late afternoon. What began as a private indulgence quickly became a glamorous high-society ritual.',
      'When setting your table, the tier sequence is sacred: bottom tier for finger sandwiches (cucumber with minted cream cheese, smoked salmon on brioche), middle tier for warm scones with clotted cream and strawberry preserve, and the top tier for delicate petit fours and pastries.',
      'Linen plays a pivotal sensory role. Crisp, pre-washed French flax linen with hand-embroidered botanical motifs immediately sets an air of quiet luxury and consideration for your guests.',
      'Discover our full event styling rental service in Hong Kong for turnkey setups featuring vintage tiered stands and fine bone china.',
    ],
    recommendedProductSlug: 'mimosa-hand-embroidered-linen-napkin-set',
  },
  {
    id: 'post-3',
    slug: 'high-mountain-oolong-brewing-secrets',
    title: 'Gong Fu vs. Western Steeping: A Connoisseur’s Guide to Rare Oolong',
    excerpt: 'Discover why high altitude terroir creates complex floral sweetness, and how adjusting your water temperature unlocks hidden layers of nectar and cream.',
    category: 'Tea Buying Guide',
    readTime: '5 min read',
    date: 'September 28, 2026',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=1200&q=80',
    author: 'Master Li, Tea Artisan',
    content: [
      'Grown at altitudes exceeding 1,500 metres in Ali Shan, high mountain tea leaves endure cold morning mists and intense alpine sunshine. This extreme temperature variance slows leaf growth, concentrating amino acids and sweet floral aromatic compounds.',
      'While Western steeping utilizes 3g of leaf in a 500ml pot for 3 minutes, the Gong Fu method uses a high leaf-to-water ratio (6g in 150ml) with quick 20-30 second infusions, unlocking distinct flavor stages across six or more steepings.',
      'We recommend pouring freshly boiled mountain spring water cooled to 92°C to prevent scalding delicate young leaves.',
    ],
    recommendedProductSlug: 'formosa-high-mountain-oolong-tea',
  },
  {
    id: 'post-4',
    slug: 'where-to-drink-tea-in-central-hong-kong',
    title: 'Where to Drink Tea in Central: Hidden Ateliers & Tearooms of Hong Kong',
    excerpt: 'Escape the frantic hum of Central. A curated guide to the most serene tea sanctuaries, including our private tasting showroom on Queen’s Road.',
    category: 'Where to Drink Tea',
    readTime: '4 min read',
    date: 'September 15, 2026',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80',
    author: 'Time for Tea HK Editorial',
    content: [
      'Tucked above the bustle of Queen’s Road Central, our private showroom in Stag Building offers an oasis of calm. Guests are invited to touch our artisanal linen, experience the candlelight glow of the Mono Filio teapots, and sample rare first-flush harvests.',
      'Book a complimentary 30-minute private consultation with our tea and styling experts to select wedding gifts or plan your next intimate celebration.',
    ],
    recommendedProductSlug: 'the-royal-afternoon-tea-hamper',
  },
];
