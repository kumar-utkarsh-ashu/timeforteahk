'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, PRODUCTS } from '@/data/products';
import { SITE_CONFIG } from '@/data/siteConfig';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariant?: string;
}

interface AppContextType {
  currency: 'HKD' | 'GBP';
  setCurrency: (c: 'HKD' | 'GBP') => void;
  formatPrice: (priceHKD: number, priceGBP: number) => string;
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedVariant?: string) => void;
  removeFromCart: (productId: string, variant?: string) => void;
  updateQuantity: (productId: string, quantity: number, variant?: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  cartCount: number;
  subtotalHKD: number;
  subtotalGBP: number;
  freeShippingProgress: number;
  remainingForFreeShipping: { hkd: number; gbp: number };
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<'HKD' | 'GBP'>('HKD');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);

  // Initialize with initial sample cart item for preview richness
  useEffect(() => {
    // Schedule on microtask to avoid cascading renders warning in React 19
    queueMicrotask(() => {
      try {
        const savedCart = localStorage.getItem('t4t_cart');
        if (savedCart) {
          setCart(JSON.parse(savedCart));
        } else {
          // Pre-populate with one item so the user can immediately experience the cart
          const sample = PRODUCTS.find((p) => p.id === 'mono-filio-1-5l');
          if (sample) {
            setCart([{ product: sample, quantity: 1, selectedVariant: '1.5 Litre (Standard)' }]);
          }
        }

        const savedWishlist = localStorage.getItem('t4t_wishlist');
        if (savedWishlist) {
          setWishlist(JSON.parse(savedWishlist));
        }
        const savedCurrency = localStorage.getItem('t4t_currency') as 'HKD' | 'GBP';
        if (savedCurrency) {
          setCurrency(savedCurrency);
        }
      } catch {
        // Ignore SSR/storage errors
      }
    });
  }, []);

  const handleSetCurrency = (c: 'HKD' | 'GBP') => {
    setCurrency(c);
    try {
      localStorage.setItem('t4t_currency', c);
    } catch {}
  };

  const saveCart = (items: CartItem[]) => {
    setCart(items);
    try {
      localStorage.setItem('t4t_cart', JSON.stringify(items));
    } catch {}
  };

  const addToCart = (product: Product, quantity = 1, selectedVariant?: string) => {
    const existingIndex = cart.findIndex(
      (item) => item.product.id === product.id && item.selectedVariant === selectedVariant
    );

    let updated: CartItem[];
    if (existingIndex > -1) {
      updated = [...cart];
      updated[existingIndex].quantity += quantity;
    } else {
      updated = [...cart, { product, quantity, selectedVariant }];
    }
    saveCart(updated);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, variant?: string) => {
    const updated = cart.filter(
      (item) => !(item.product.id === productId && item.selectedVariant === variant)
    );
    saveCart(updated);
  };

  const updateQuantity = (productId: string, quantity: number, variant?: string) => {
    if (quantity <= 0) {
      removeFromCart(productId, variant);
      return;
    }
    const updated = cart.map((item) => {
      if (item.product.id === productId && item.selectedVariant === variant) {
        return { ...item, quantity };
      }
      return item;
    });
    saveCart(updated);
  };

  const clearCart = () => {
    saveCart([]);
  };

  const toggleWishlist = (productId: string) => {
    let updated: string[];
    if (wishlist.includes(productId)) {
      updated = wishlist.filter((id) => id !== productId);
    } else {
      updated = [...wishlist, productId];
    }
    setWishlist(updated);
    try {
      localStorage.setItem('t4t_wishlist', JSON.stringify(updated));
    } catch {}
  };

  const formatPrice = (priceHKD: number, priceGBP: number): string => {
    if (currency === 'GBP') {
      return `£${priceGBP.toFixed(0)}`;
    }
    return `HK$ ${priceHKD.toLocaleString()}`;
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const subtotalHKD = cart.reduce((sum, item) => sum + item.product.priceHKD * item.quantity, 0);
  const subtotalGBP = cart.reduce((sum, item) => sum + item.product.priceGBP * item.quantity, 0);

  const freeThreshold = currency === 'GBP' ? SITE_CONFIG.shipping.freeThresholdGBP : SITE_CONFIG.shipping.freeThresholdHKD;
  const currentSubtotal = currency === 'GBP' ? subtotalGBP : subtotalHKD;
  const freeShippingProgress = Math.min(100, Math.round((currentSubtotal / freeThreshold) * 100));

  const remainingForFreeShipping = {
    hkd: Math.max(0, SITE_CONFIG.shipping.freeThresholdHKD - subtotalHKD),
    gbp: Math.max(0, SITE_CONFIG.shipping.freeThresholdGBP - subtotalGBP),
  };

  return (
    <AppContext.Provider
      value={{
        currency,
        setCurrency: handleSetCurrency,
        formatPrice,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        isSearchOpen,
        setIsSearchOpen,
        quickViewProduct,
        setQuickViewProduct,
        wishlist,
        toggleWishlist,
        cartCount,
        subtotalHKD,
        subtotalGBP,
        freeShippingProgress,
        remainingForFreeShipping,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
