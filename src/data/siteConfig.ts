export const SITE_CONFIG = {
  brandName: 'Time for Tea HK',
  tagline: 'Make Tea Time a Time to Remember',
  exclusivePartner: 'Exclusive Partner for Mono Germany in Hong Kong',
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
      subtitle: 'Browse complete teatime catalog',
      href: '/shop',
    },
    {
      title: 'Mono Teapots & Accessories',
      subtitle: 'Exclusive German Borosilicate & Warmers',
      href: '/shop/teapots-and-accessories',
      badge: 'Mono Partner',
    },
    {
      title: 'Fine Tableware & Plates',
      subtitle: 'Oriental Blossom Porcelain & Cake Stands',
      href: '/shop/tableware',
    },
    {
      title: 'Table Linen Atelier',
      subtitle: 'Hand-Embroidered French Flax',
      href: '/shop/table-linen',
    },
    {
      title: 'Loose Leaf Tea',
      subtitle: 'Single-Origin Oolongs & Jasmine Pearls',
      href: '/shop/tea',
    },
    {
      title: 'Gift Boxes & Hampers',
      subtitle: 'Gold-Embossed Keepsake Trunks',
      href: '/shop/gift-boxes',
    },
    {
      title: 'Bespoke Hamper Studio',
      subtitle: 'Interactive 5-Step Custom Gift Builder',
      href: '/custom-hamper',
      badge: 'Interactive',
    },
    {
      title: 'Pink Ribbon October',
      subtitle: 'Charity Collection for HKBCF',
      href: '/shop/pinkribbon',
      badge: 'Charity',
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
