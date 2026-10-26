'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Gift,
  ArrowLeft,
  Check,
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { SITE_CONFIG } from '@/data/siteConfig';

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    formatPrice,
    subtotalHKD,
    subtotalGBP,
    freeShippingProgress,
    remainingForFreeShipping,
    currency,
  } = useApp();

  const [addGiftBox, setAddGiftBox] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const handleCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-10">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#E8E4DC] pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#6B7280]">
            <Link href="/" className="hover:text-[#0C2340]">Home</Link>
            <span>/</span>
            <span className="text-[#0C2340] font-medium">Shopping Bag</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif text-[#0C2340] mt-1">
            Your Afternoon Tea Selection
          </h1>
        </div>

        <Link
          href="/shop"
          className="text-xs font-semibold text-[#0C2340] hover:text-[#C5A880] flex items-center gap-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Continue Shopping</span>
        </Link>
      </div>

      {orderComplete ? (
        <div className="max-w-md mx-auto p-10 bg-white rounded-lg border border-[#E8E4DC] text-center space-y-4 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-[#EBF2EE] text-[#5B8276] flex items-center justify-center mx-auto">
            <Check className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-serif text-[#0C2340]">Order Confirmed</h2>
          <p className="text-xs text-[#5C5C5C] leading-relaxed">
            Thank you for your order. Our Central showroom team is preparing your selection with white-glove packaging.
          </p>
          <div className="p-4 bg-[#FAF8F5] rounded text-left text-xs space-y-1 text-[#0C2340]">
            <p className="text-[#6B7280]">Collection & Support:</p>
            <p className="font-semibold">{SITE_CONFIG.showroom.address}</p>
            <p className="text-[#A38458]">WhatsApp: {SITE_CONFIG.contact.phone}</p>
          </div>
          <Link href="/shop" className="btn-luxury-navy w-full text-xs py-3 block">
            Return to Collection
          </Link>
        </div>
      ) : cart.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-lg border border-[#E8E4DC] space-y-4 max-w-xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-[#FAF8F5] text-[#A38458] flex items-center justify-center mx-auto border border-[#E8E4DC]">
            <ShoppingBag className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-serif text-[#0C2340]">Your Bag is Currently Empty</h2>
          <p className="text-xs text-[#6B7280] max-w-sm mx-auto">
            Discover German Mono Filio teapots, fine porcelain dinnerware, and rare single-origin loose leaf teas.
          </p>
          <Link href="/shop" className="btn-luxury-gold text-xs py-3 px-8 inline-block">
            Explore All Collections
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left 2 Cols: Cart Table */}
          <div className="lg:col-span-2 space-y-6">
            {/* Free Shipping Alert */}
            <div className="p-4 rounded bg-[#FAF8F5] border border-[#E8E4DC]">
              <div className="flex justify-between items-center text-xs mb-1.5">
                {freeShippingProgress >= 100 ? (
                  <span className="font-semibold text-[#5B8276]">
                    🎉 You have unlocked complimentary Hong Kong delivery!
                  </span>
                ) : (
                  <span className="text-[#3A3D42]">
                    Add{' '}
                    <strong className="text-[#0C2340]">
                      {currency === 'GBP'
                        ? `£${remainingForFreeShipping.gbp.toFixed(0)}`
                        : `HK$ ${remainingForFreeShipping.hkd.toLocaleString()}`}
                    </strong>{' '}
                    more for free delivery
                  </span>
                )}
                <span className="text-[11px] font-bold text-[#A38458]">
                  {freeShippingProgress}%
                </span>
              </div>
              <div className="w-full bg-[#E8E4DC] h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#C5A880] to-[#5B8276] h-full transition-all duration-500 ease-out"
                  style={{ width: `${freeShippingProgress}%` }}
                />
              </div>
            </div>

            {/* Items Table */}
            <div className="bg-white rounded-lg border border-[#E8E4DC] divide-y divide-[#E8E4DC]">
              {cart.map((item, idx) => (
                <div key={`${item.product.id}-${item.selectedVariant || idx}`} className="p-5 flex gap-5">
                  <div className="relative w-24 h-24 rounded overflow-hidden bg-[#FAF8F5] border border-[#E8E4DC] shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <Link
                          href={`/shop/product/${item.product.slug}`}
                          className="text-sm font-serif font-semibold text-[#0C2340] hover:text-[#A38458] transition-colors"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.selectedVariant)}
                          className="text-[#9CA3AF] hover:text-[#DC2626] transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      {item.selectedVariant && (
                        <p className="text-xs text-[#A38458] mt-0.5">{item.selectedVariant}</p>
                      )}
                      <p className="text-[11px] text-[#6B7280]">{item.product.category}</p>
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <div className="flex items-center border border-[#E8E4DC] rounded bg-[#FAF8F5]">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1, item.selectedVariant)
                          }
                          className="px-2.5 py-1 text-sm text-[#0C2340] hover:text-[#A38458]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs font-semibold text-[#0C2340]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1, item.selectedVariant)
                          }
                          className="px-2.5 py-1 text-sm text-[#0C2340] hover:text-[#A38458]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-sm font-bold font-serif text-[#0C2340]">
                        {formatPrice(
                          item.product.priceHKD * item.quantity,
                          item.product.priceGBP * item.quantity
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Gift Box Options */}
            <div className="p-4 bg-white rounded-lg border border-[#E8E4DC]">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={addGiftBox}
                  onChange={(e) => setAddGiftBox(e.target.checked)}
                  className="rounded text-[#0C2340] focus:ring-[#C5A880]"
                />
                <Gift className="w-4 h-4 text-[#A38458]" />
                <div className="text-xs">
                  <span className="font-semibold text-[#0C2340]">
                    Include Complimentary Royal Gift Box & Gold Ribbon
                  </span>
                  <p className="text-[#6B7280]">
                    Finished by hand with a personalized handwritten card in our Central atelier.
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Right Col: Order Summary */}
          <div className="bg-white p-6 rounded-lg border border-[#E8E4DC] space-y-6 h-fit shadow-xs">
            <h3 className="text-lg font-serif font-semibold text-[#0C2340] border-b border-[#E8E4DC] pb-3">
              Order Summary
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between text-[#5C5C5C]">
                <span>Items Subtotal:</span>
                <span className="font-medium text-[#0C2340]">
                  {formatPrice(subtotalHKD, subtotalGBP)}
                </span>
              </div>

              <div className="flex justify-between text-[#5C5C5C]">
                <span>Estimated Delivery:</span>
                <span className="font-medium text-[#0C2340]">
                  {freeShippingProgress >= 100 ? 'Complimentary' : 'HK$ 50 (or Central Pickup)'}
                </span>
              </div>

              <div className="flex justify-between text-[#5C5C5C]">
                <span>Luxury Gift Box & Ribbon:</span>
                <span className="font-medium text-[#5B8276]">Complimentary</span>
              </div>

              <div className="pt-3 border-t border-[#E8E4DC] flex justify-between items-baseline">
                <span className="text-sm font-semibold text-[#0C2340]">Total:</span>
                <span className="text-2xl font-serif font-bold text-[#0C2340]">
                  {formatPrice(subtotalHKD, subtotalGBP)}
                </span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isProcessing}
              className="btn-luxury-gold w-full py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <span>Processing Order...</span>
              ) : (
                <>
                  <span>Complete Purchase</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="space-y-2 pt-2 border-t border-[#E8E4DC] text-[11px] text-[#6B7280]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#5B8276]" />
                <span>256-Bit SSL Encrypted Checkout</span>
              </div>
              <p>Stripe, Apple Pay, Google Pay, Visa & Mastercard accepted.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
