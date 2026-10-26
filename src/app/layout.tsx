import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/context/AppContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { SearchModal } from '@/components/ui/SearchModal';
import { QuickViewModal } from '@/components/ui/QuickViewModal';

export const metadata: Metadata = {
  title: 'Time for Tea HK — Luxury Afternoon Tea, Mono Teapots & Event Styling',
  description:
    'Exclusive distributor of German Mono Filio teapots in Hong Kong. Curated porcelain tableware, French flax linen, single-estate loose leaf teas, and bespoke event styling.',
  keywords: [
    'Time for Tea HK',
    'Mono Filio Teapot',
    'Afternoon Tea Hong Kong',
    'Event Styling Hong Kong',
    'Luxury Tea Hampers',
    'Loose Leaf Tea HK',
    'Tableware Rentals',
  ],
  authors: [{ name: 'Time for Tea Hong Kong' }],
  openGraph: {
    title: 'Time for Tea HK — Luxury Afternoon Tea, Mono Teapots & Event Styling',
    description:
      'Elevating teatime into ritual. Exclusive distributor of German Mono Filio teaware, artisanal French linens, and curated hampers in Hong Kong.',
    url: 'https://www.timeforteahk.com',
    siteName: 'Time for Tea HK',
    locale: 'en_HK',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#3A3D42]">
        <AppProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <SearchModal />
          <QuickViewModal />
        </AppProvider>
      </body>
    </html>
  );
}
