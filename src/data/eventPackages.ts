export interface EventPackage {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  capacity: string;
  pricePerGuestHKD: number;
  pricePerGuestGBP: number;
  image: string;
  description: string;
  includedFeatures: string[];
  stylingItems: string[];
}

export const EVENT_PACKAGES: EventPackage[] = [
  {
    id: 'intimate-bloom',
    slug: 'intimate-bloom-afternoon-tea',
    title: 'The Intimate Garden Bloom',
    subtitle: 'Private Residential & Balcony Afternoon Tea Styling',
    capacity: '2 – 8 Guests',
    pricePerGuestHKD: 680,
    pricePerGuestGBP: 69,
    image: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?auto=format&fit=crop&w=1000&q=80',
    description: 'An enchanting, romantic setup designed for birthdays, anniversaries, and intimate mother-daughter teatimes in your own home or garden terrace.',
    includedFeatures: [
      'Turnkey setup & breakdown by our styling team in HK',
      'Full table setting with French linen runners & napkins',
      'Genuine Mono Filio teapots with candlelight warmers',
      'Fine bone china dinner & dessert plates with gold accents',
      'Fresh floral centerpiece arrangements',
      'Handwritten personalized place cards',
    ],
    stylingItems: [
      'Oriental Blossom Plates (Mulberry Reverie)',
      'Mimosa Hand-Embroidered Scallop Napkins',
      'Mono Filio 1.5L Teapots',
      'Crystal Champagne Coupes & Silverware',
    ],
  },
  {
    id: 'royal-pavilion',
    slug: 'royal-pavilion-celebration',
    title: 'The Royal Pavilion Celebration',
    subtitle: 'Bridal Showers, Baby Showers & Milestone Birthdays',
    capacity: '10 – 30 Guests',
    pricePerGuestHKD: 850,
    pricePerGuestGBP: 86,
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1000&q=80',
    description: 'A showstopping luxury teatime experience. We transform private venues, clubhouses, or boutique terraces into a fairytale British tearoom with tiered stands and lavish floral backdrops.',
    includedFeatures: [
      'Full styling coordination & on-site teatime sommelier',
      'Three-tier brass Empress tea stands for pastries & scones',
      'Custom color-palette linen matching (Blush, Sage, or Navy)',
      'Welcome signage easel with custom calligraphy lettering',
      'Individual tea tasting flight featuring 3 rare blends',
      'Complimentary gift caddy for guest of honor',
    ],
    stylingItems: [
      'Empress 3-Tier Polished Brass Stands',
      'Bespoke Belgian Linen Drapes & Runners',
      'Mono Teapots on Every Table',
      'Curated Botanical Flower Installations',
    ],
  },
  {
    id: 'corporate-atelier',
    slug: 'corporate-brand-activation',
    title: 'Corporate & Luxury Brand Atelier',
    subtitle: 'VIP Hospitality, Product Launches & Media Previews',
    capacity: '30 – 100+ Guests',
    pricePerGuestHKD: 1100,
    pricePerGuestGBP: 112,
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1000&q=80',
    description: 'Impeccable high-society hospitality for luxury retail, private wealth, and corporate clients seeking an elevated, mindful teatime experience for their most valued partners.',
    includedFeatures: [
      'Dedicated event manager and white-glove tea service staff',
      'Bespoke co-branded tea menus and custom ribbon packaging',
      'Exclusive German Mono Filio teaware hire inventory',
      'Interactive Gong Fu & Western tea brewing demonstrations',
      'Strict venue protection and frictionless breakdown',
    ],
    stylingItems: [
      'Full Fleet of Mono Filio Teapots & Warmers',
      'Custom Embroidered Tablecloths with Brand Monogram',
      'Architectural Floral Sculptures',
    ],
  },
];

export const TABLESCAPE_GALLERY = [
  {
    id: 'gal-1',
    title: 'The Mulberry Reverie Garden Teatime',
    category: 'Outdoor & Garden',
    categoryTab: 'outdoor',
    image: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?auto=format&fit=crop&w=1200&q=80',
    location: 'Peak Villa Terrace, Hong Kong',
    hotspots: [
      { x: 48, y: 35, title: 'Mono Filio 1.5L Teapot with Warmer', price: 'HK$ 1,880', slug: 'mono-filio-teapot-1-5l-with-warmer' },
      { x: 72, y: 65, title: 'Oriental Blossom Plates', price: 'HK$ 420', slug: 'oriental-blossom-dinner-plate-mulberry-reverie' },
      { x: 25, y: 70, title: 'Mimosa Embroidered Napkins', price: 'HK$ 680', slug: 'mimosa-hand-embroidered-linen-napkin-set' },
    ],
  },
  {
    id: 'gal-2',
    title: 'Bridal Afternoon Tea at The Verandah',
    category: 'Celebration Parties',
    categoryTab: 'party',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1200&q=80',
    location: 'Repulse Bay, Hong Kong',
    hotspots: [
      { x: 50, y: 40, title: 'Empress 3-Tier Tea Stand', price: 'HK$ 1,280', slug: 'empress-tiered-afternoon-tea-stand' },
      { x: 30, y: 60, title: 'Formosa High Mountain Oolong', price: 'HK$ 320', slug: 'formosa-high-mountain-oolong-tea' },
    ],
  },
  {
    id: 'gal-3',
    title: 'Intimate Candlelit Teatime',
    category: 'Teatime Moments',
    categoryTab: 'moments',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80',
    location: 'Central Showroom Atelier',
    hotspots: [
      { x: 50, y: 50, title: 'Mono Teapot with Warmer Base', price: 'HK$ 1,880', slug: 'mono-filio-teapot-1-5l-with-warmer' },
    ],
  },
  {
    id: 'gal-4',
    title: 'Modern Minimalist Dining Setting',
    category: 'Indoor Elegance',
    categoryTab: 'indoor',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
    location: 'Mid-Levels Private Residence',
    hotspots: [
      { x: 38, y: 55, title: 'Mulberry Reverie Table Runner', price: 'HK$ 880', slug: 'mulberry-reverie-table-runner' },
      { x: 68, y: 65, title: 'Oriental Blossom Salad Plates', price: 'HK$ 350', slug: 'oriental-blossom-salad-plate-mulberry-reverie' },
    ],
  },
];
