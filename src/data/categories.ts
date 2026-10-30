export interface SubCategory {
  slug: string;
  name: string;
  href: string;
  description?: string;
}

export interface Category {
  slug: string;
  name: string;
  href: string;
  subtitle?: string;
  badge?: string;
  subcategories: SubCategory[];
}

export const CATEGORIES_DATA: Category[] = [
  {
    slug: 'tableware',
    name: 'Tableware',
    href: '/shop/tableware',
    subtitle: 'Fine dining plates, tea cups, placemats, napkin rings & candles',
    subcategories: [
      {
        slug: 'plates-and-teacups',
        name: 'Plates and Tea Cups',
        href: '/shop/tableware?sub=plates-and-teacups',
        description: 'Heirloom botanical dinner plates, tea sets & cake stands',
      },
      {
        slug: 'placemats',
        name: 'Placemats',
        href: '/shop/tableware?sub=placemats',
        description: 'Artisanal beaded & botanical woven placemats',
      },
      {
        slug: 'napkin-rings',
        name: 'Napkin Rings',
        href: '/shop/tableware?sub=napkin-rings',
        description: 'Sculptural brass and botanical cast napkin rings',
      },
      {
        slug: 'candles-and-holders',
        name: 'Candles and Holders',
        href: '/shop/tableware?sub=candles-and-holders',
        description: 'Fluted crystal and brass candlesticks & beeswax tapers',
      },
    ],
  },
  {
    slug: 'table-linen',
    name: 'Table Linen',
    href: '/shop/table-linen',
    subtitle: '100% Pre-washed French flax linen with artisanal embroidery',
    subcategories: [
      {
        slug: 'napkins',
        name: 'Napkins',
        href: '/shop/table-linen?sub=napkins',
        description: 'French flax hand-embroidered dinner & cocktail napkins',
      },
      {
        slug: 'tablecloths',
        name: 'Tablecloths',
        href: '/shop/table-linen?sub=tablecloths',
        description: 'Amber lattice runners and scalloped linen tablecloths',
      },
    ],
  },
  {
    slug: 'teapots-and-accessories',
    name: 'Mono Teapots and Accessories',
    href: '/shop/teapots-and-accessories',
    subtitle: 'German-engineered Duran® borosilicate glass & 18/10 stainless steel',
    badge: 'Exclusive',
    subcategories: [
      {
        slug: 'teapots',
        name: 'Teapots',
        href: '/shop/teapots-and-accessories?sub=teapots',
        description: 'Iconic Mono Filio 1.5L and 0.6L glass teapots',
      },
      {
        slug: 'accessories',
        name: 'Accessories',
        href: '/shop/teapots-and-accessories?sub=accessories',
        description: 'Replacement glass bowls, integrated warmers & strainers',
      },
    ],
  },
  {
    slug: 'tea',
    name: 'Loose Leaf Tea',
    href: '/shop/tea',
    subtitle: 'Single-origin harvests and organic botanical tea blends',
    subcategories: [
      {
        slug: 'single-origin',
        name: 'Single-Origin Harvests',
        href: '/shop/tea?sub=single-origin',
        description: 'High-mountain Alishan oolongs & Yunnan silver needle',
      },
      {
        slug: 'blends',
        name: 'Artisanal Blends',
        href: '/shop/tea?sub=blends',
        description: 'Signature royal breakfast and rose petal black teas',
      },
    ],
  },
  {
    slug: 'gift-boxes',
    name: 'Gifts & Hampers',
    href: '/shop/gift-boxes',
    subtitle: 'Gold-embossed keepsake trunks & bespoke teatime presentations',
    badge: 'Studio',
    subcategories: [
      {
        slug: 'curated-hampers',
        name: 'Curated Hampers',
        href: '/shop/gift-boxes?sub=curated-hampers',
        description: 'Signature luxury hampers and afternoon tea gift boxes',
      },
      {
        slug: 'bespoke-builder',
        name: 'Bespoke Hamper Studio',
        href: '/custom-hamper',
        description: 'Interactive step-by-step gift box customization',
      },
    ],
  },
  {
    slug: 'pinkribbon',
    name: 'Pink Ribbon October',
    href: '/shop/pinkribbon',
    subtitle: 'Annual charity collection supporting the HK Breast Cancer Foundation',
    badge: 'Charity',
    subcategories: [
      {
        slug: 'charity-collection',
        name: 'Charity Editions',
        href: '/shop/pinkribbon?sub=charity-collection',
        description: 'Limited-edition rose tea sets with 20% donated to HKBCF',
      },
    ],
  },
  {
    slug: 'christmas',
    name: 'Christmas Collection',
    href: '/shop/christmas',
    subtitle: 'Festive tablescapes, holiday candleholders & seasonal gift sets',
    badge: 'Seasonal',
    subcategories: [
      {
        slug: 'festive-tablescapes',
        name: 'Festive Tablescapes & Hampers',
        href: '/shop/christmas?sub=festive-tablescapes',
        description: 'Holiday afternoon tea hampers and velvet runners',
      },
      {
        slug: 'holiday-decor',
        name: 'Holiday Decor & Candleholders',
        href: '/shop/christmas?sub=holiday-decor',
        description: 'Brass and fluted glass holiday centerpiece sets',
      },
    ],
  },
];

