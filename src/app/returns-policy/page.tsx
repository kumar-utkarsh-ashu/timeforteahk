'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Truck, RotateCcw, ChevronDown, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteConfig';

export default function ReturnsPolicyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is your return and exchange window?',
      a: 'We accept returns and exchanges on non-perishable items (teapots, tableware, table linens) within 14 calendar days of receipt. Items must be in their original, unused condition with all original packaging, tags, and authenticity cards intact.',
    },
    {
      q: 'Can loose leaf teas and food hampers be returned?',
      a: 'Due to food safety and hygiene regulations, opened tea caddies, loose leaf infusions, and perishable gift hamper contents cannot be returned unless verified defective or damaged upon delivery.',
    },
    {
      q: 'What if my borosilicate glass or fine dinnerware arrives damaged?',
      a: 'Every shipment from Time for Tea HK is insured. In the unlikely event that an item arrives broken, please email time4teahk@gmail.com or WhatsApp us at +852 9865 6217 within 48 hours with a photograph of the damage. We will dispatch an immediate replacement or issue a full refund.',
    },
    {
      q: 'Do you sell replacement parts for Mono Filio teapots?',
      a: 'Yes! As the official Hong Kong distributor for Mono Germany, we stock genuine replacement Duran® borosilicate glass bowls (1.5L and 0.6L), stainless steel micro-mesh strainers, lids, and warmer bases.',
    },
    {
      q: 'How does Showroom Pickup work in Central?',
      a: 'You can choose Showroom Collection at checkout. Your order will be beautifully packed and ready within 2 hours at Stag Building, 4/F, 148 Queen’s Road, Central during our opening hours.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="flex items-center justify-center gap-2 text-xs text-[#6B7280]">
          <Link href="/" className="hover:text-[#0048BA]">Home</Link>
          <span>/</span>
          <span className="text-[#0048BA] font-medium">Returns Policy & Customer Care</span>
        </div>

        <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#D1A345]">
          Client Assurance
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif text-[#0048BA]">
          Returns, Delivery & Guarantees
        </h1>
        <p className="text-xs sm:text-sm text-[#5C5C5C] leading-relaxed">
          Our commitment to white-glove service. Everything you need to know about our return policy, delivery times, and product warranties.
        </p>
      </div>

      {/* 3 Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
        <div className="p-5 rounded bg-white border border-[#E8E4DC] text-center space-y-2">
          <RotateCcw className="w-6 h-6 text-[#B88A2D] mx-auto" />
          <h3 className="font-serif text-sm font-semibold text-[#0048BA]">14-Day Return Privilege</h3>
          <p className="text-[#6B7280]">Hassle-free returns on all teaware, tableware, and table linens.</p>
        </div>

        <div id="shipping" className="p-5 rounded bg-white border border-[#E8E4DC] text-center space-y-2">
          <Truck className="w-6 h-6 text-[#5B8276] mx-auto" />
          <h3 className="font-serif text-sm font-semibold text-[#0048BA]">Complimentary HK Delivery</h3>
          <p className="text-[#6B7280]">On all orders over HK$ 800 across Hong Kong Island, Kowloon, and NT.</p>
        </div>

        <div className="p-5 rounded bg-white border border-[#E8E4DC] text-center space-y-2">
          <ShieldCheck className="w-6 h-6 text-[#0048BA] mx-auto" />
          <h3 className="font-serif text-sm font-semibold text-[#0048BA]">Authenticity Guaranteed</h3>
          <p className="text-[#6B7280]">100% genuine German Mono Filio teaware with official warranty.</p>
        </div>
      </div>

      {/* Return Procedure Details */}
      <div className="bg-white p-8 rounded-lg border border-[#E8E4DC] space-y-6 text-xs sm:text-sm text-[#3A3D42] leading-relaxed">
        <h2 className="text-xl font-serif font-semibold text-[#0048BA]">Return & Exchange Protocol</h2>
        <p>
          To initiate a return or exchange, please contact our concierge team at <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-[#B88A2D] underline">{SITE_CONFIG.contact.email}</a> or via WhatsApp with your order number and the reason for return.
        </p>
        <p>
          Once your return is authorized, you may either drop off the item at our Central Showroom (Stag Building, 4/F, 148 Queen&apos;s Road Central) or send it via courier. Refunds will be processed to your original payment method (Stripe / Credit Card / PayPal) within 3–5 business days of inspection.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-4">
        <h2 className="text-xl font-serif font-semibold text-[#0048BA]">Frequently Asked Questions</h2>
        <div className="divide-y divide-[#E8E4DC] border border-[#E8E4DC] rounded-lg bg-white overflow-hidden">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-4 sm:p-5">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-semibold text-[#0048BA]"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#B88A2D] transition-transform ${
                    openFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <p className="text-xs text-[#5C5C5C] pt-3 leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Concierge Help Box */}
      <div className="p-6 rounded-lg bg-[#FAF8F5] border border-[#E8E4DC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div>
          <p className="font-semibold text-[#0048BA]">Need Immediate Assistance with an Order?</p>
          <p className="text-[#6B7280]">Our Central team is available Monday to Saturday via WhatsApp.</p>
        </div>
        <a
          href={SITE_CONFIG.contact.whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-luxury-gold py-2.5 px-5 text-xs whitespace-nowrap flex items-center gap-1.5"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
