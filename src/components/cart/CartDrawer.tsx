'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Gift } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { SITE_CONFIG } from '@/data/siteConfig';

export function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
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
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => {
          setIsCartOpen(false);
          setOrderComplete(false);
        }}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10">
        {/* Top Header */}
        <div className="p-5 border-b border-[#E8E4DC] flex items-center justify-between bg-[#FAF8F5]">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#0048BA]" />
            <h2 className="text-base font-serif font-semibold text-[#0048BA]">Your Shopping Bag</h2>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#EBD6A7]/50 text-[#0048BA] font-semibold">
              {cart.reduce((s, i) => s + i.quantity, 0)}
            </span>
          </div>
          <button
            onClick={() => {
              setIsCartOpen(false);
              setOrderComplete(false);
            }}
            className="p-1.5 text-[#6B7280] hover:text-[#0048BA] rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div className="px-5 py-3 bg-[#F5F1EB] border-b border-[#E8E4DC]">
          <div className="flex justify-between items-center text-xs mb-1.5">
            {freeShippingProgress >= 100 ? (
              <span className="font-semibold text-[#436357]">
                🎉 You&apos;ve unlocked Complimentary Hong Kong Delivery!
              </span>
            ) : (
              <span className="text-[#3A3D42]">
                Add{' '}
                <strong className="text-[#0048BA]">
                  {currency === 'GBP'
                    ? `£${remainingForFreeShipping.gbp.toFixed(0)}`
                    : `HK$ ${remainingForFreeShipping.hkd.toLocaleString()}`}
                </strong>{' '}
                more for free delivery
              </span>
            )}
            <span className="text-[11px] font-bold text-[#B88A2D]">{freeShippingProgress}%</span>
          </div>
          <div className="w-full bg-[#E8E4DC] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#D1A345] to-[#5B8276] h-full transition-all duration-500 ease-out"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Order Success State */}
        {orderComplete ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#EBF2EE] text-[#436357] flex items-center justify-center shadow-inner">
              <ShieldCheck className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-serif text-[#0048BA]">Thank You for Your Order</h3>
            <p className="text-sm text-[#5C5C5C] max-w-xs">
              Your teatime selection has been received. Our Central atelier will prepare your luxury gift packaging with white-glove care.
            </p>
            <div className="p-4 bg-[#FAF8F5] border border-[#E8E4DC] rounded text-left text-xs space-y-1 w-full max-w-xs">
              <p className="text-[#6B7280]">Showroom Concierge:</p>
              <p className="font-semibold text-[#0048BA]">{SITE_CONFIG.showroom.address}</p>
              <p className="text-[#B88A2D]">WhatsApp: {SITE_CONFIG.contact.phone}</p>
            </div>
            <button
              onClick={() => {
                setOrderComplete(false);
                setIsCartOpen(false);
              }}
              className="btn-luxury-navy w-full max-w-xs"
            >
              Continue Exploring
            </button>
          </div>
        ) : cart.length === 0 ? (
          /* Empty Bag State */
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#FAF8F5] text-[#B88A2D] flex items-center justify-center border border-[#E8E4DC]">
              <ShoppingBag className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-serif text-[#0048BA]">Your Bag is Empty</h3>
            <p className="text-xs text-[#6B7280] max-w-xs">
              Explore our German Mono Filio teapots, fine dinnerware &amp; tableware, and single-estate loose leaf teas.
            </p>
            <Link
              href="/shop"
              onClick={() => setIsCartOpen(false)}
              className="btn-luxury-gold text-xs"
            >
              Discover The Collection
            </Link>
          </div>
        ) : (
          /* Cart Items List */
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-[#E8E4DC]">
            {cart.map((item, idx) => (
              <div key={`${item.product.id}-${item.selectedVariant || idx}`} className="py-4 flex gap-4">
                <div className="relative w-20 h-20 bg-[#FAF8F5] rounded border border-[#E8E4DC] overflow-hidden shrink-0">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="text-xs font-serif font-semibold text-[#0048BA] leading-snug line-clamp-2">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.selectedVariant)}
                        className="text-[#9CA3AF] hover:text-[#DC2626] transition-colors p-0.5"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    {item.selectedVariant && (
                      <p className="text-[11px] text-[#B88A2D] mt-0.5">{item.selectedVariant}</p>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-[#E8E4DC] rounded bg-[#FAF8F5]">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1, item.selectedVariant)
                        }
                        className="p-1 text-[#6B7280] hover:text-[#0048BA] transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-semibold text-[#0048BA]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1, item.selectedVariant)
                        }
                        className="p-1 text-[#6B7280] hover:text-[#0048BA] transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-xs font-bold text-[#0048BA]">
                        {formatPrice(
                          item.product.priceHKD * item.quantity,
                          item.product.priceGBP * item.quantity
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Gift Wrap Addon Option */}
            <div className="pt-4">
              <label className="flex items-center gap-3 p-3 rounded bg-[#FAF8F5] border border-[#E8E4DC] cursor-pointer hover:border-[#D1A345] transition-colors">
                <input
                  type="checkbox"
                  checked={addGiftBox}
                  onChange={(e) => setAddGiftBox(e.target.checked)}
                  className="rounded text-[#0048BA] focus:ring-[#D1A345]"
                />
                <Gift className="w-4 h-4 text-[#B88A2D] shrink-0" />
                <div className="flex-1 text-xs">
                  <p className="font-semibold text-[#0048BA]">Complimentary Royal Gift Packaging</p>
                  <p className="text-[11px] text-[#6B7280]">
                    Gold-embossed royal blue box, satin ribbon & handwritten note
                  </p>
                </div>
              </label>
            </div>
          </div>
        )}

        {/* Drawer Footer & Checkout Action */}
        {cart.length > 0 && !orderComplete && (
          <div className="p-5 border-t border-[#E8E4DC] bg-[#FAF8F5] space-y-3">
            <div className="flex justify-between items-center text-xs text-[#6B7280]">
              <span>Estimated Delivery:</span>
              <span className="font-medium text-[#0048BA]">
                {freeShippingProgress >= 100 ? 'Complimentary' : 'HK$ 50 (or pickup in Central)'}
              </span>
            </div>

            <div className="flex justify-between items-baseline pt-2 border-t border-[#E8E4DC]">
              <span className="text-sm font-semibold text-[#0048BA]">Subtotal:</span>
              <span className="text-xl font-bold font-serif text-[#0048BA]">
                {formatPrice(subtotalHKD, subtotalGBP)}
              </span>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="btn-luxury-gold w-full flex items-center justify-center gap-2 py-3.5 text-xs font-bold uppercase tracking-wider"
            >
              {isCheckingOut ? (
                <span>Securing Luxury Packaging...</span>
              ) : (
                <>
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-[#8C9099] pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#5B8276]" />
              <span>Stripe 256-Bit SSL Encryption • Central Showroom Collection</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
