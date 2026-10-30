import { CATEGORIES_DATA } from './categories';

export const SITE_CONFIG = {
  brandName: 'Time for Tea HK',
  tagline: 'Make Tea Time a Time to Remember',
  exclusivePartner: 'Exclusive Partner for Mono Germany in Hong Kong',
  categories: CATEGORIES_DATA,
  contact: {
    email: 'time4teahk@gmail.com',
    phone: '+852 9865 6217',
    whatsAppNumber: '+85298656217',
    whatsAppLink: 'https://wa.link/s5ndiv',
    instagram: 'https://instagram.com/timeforteaofficial',
  },
  showroom: {
    address: 'Stag Building, 4/F, 148 Queen’s Road, Central, Hong Kong',
    mrt: 'Central Station (Exit D2) or Sheung Wan (Exit E2)',
    hours: 'Mon – Sat: 11:00 AM – 7:00 PM (By Appointment & Walk-ins)',
    appointmentsPhone: '+852 9865 6217',
  },
  shipping: {
    freeThresholdHKD: 800,
    freeThresholdGBP: 80,
    hongKongStandardFeeHKD: 50,
    internationalAvailable: true,
  },
  currency: {
    rates: {
      HKD: 1,
      GBP: 0.101, // 1 HKD ~ 0.101 GBP
    },
    symbols: {
      HKD: 'HK$',
      GBP: '£',
    },
  },
  shopCategories: [
    {
      title: 'All Products',
      subtitle: 'Complete afternoon tea collection',
      href: '/shop',
    },
    {
      title: 'Tableware',
      subtitle: 'Plates & Cups, Placemats, Napkin Rings & Candles',
      href: '/shop/tableware',
    },
    {
      title: 'Table Linen',
      subtitle: 'French Flax Napkins & Luxury Tablecloths',
      href: '/shop/table-linen',
    },
    {
      title: 'Mono Teapots & Accessories',
      subtitle: 'Exclusive German Borosilicate Teapots & Warmers',
      href: '/shop/teapots-and-accessories',
      badge: 'Mono Partner',
    },
    {
      title: 'Loose Leaf Tea',
      subtitle: 'Single-Estate High Mountain & Organic Blends',
      href: '/shop/tea',
    },
    {
      title: 'Gift Boxes & Hampers',
      subtitle: 'Curated Keepsake Gift Trunks',
      href: '/shop/gift-boxes',
    },
    {
      title: 'Bespoke Hamper Studio',
      subtitle: 'Custom Personalized Hamper Builder',
      href: '/custom-hamper',
      badge: 'Studio',
    },
    {
      title: 'Pink Ribbon October',
      subtitle: 'Annual Charity Collection for HKBCF',
      href: '/shop/pinkribbon',
      badge: 'Seasonal',
    },
    {
      title: 'Christmas Collection',
      subtitle: 'Holiday Tableware, Decor & Festive Gifts',
      href: '/shop/christmas',
      badge: 'Coming Soon',
    },
  ],
  navigation: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Shop',
      href: '/shop',
      hasDropdown: true,
    },
    {
      title: 'Event Styling',
      href: '/event-styling',
    },
    {
      title: 'Our Story',
      href: '/our-story',
    },
    {
      title: 'Gallery',
      href: '/gallery',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
    {
      title: 'Get in Touch',
      href: '/get-in-touch',
    },
  ],
};
