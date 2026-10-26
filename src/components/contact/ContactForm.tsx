'use client';

import React, { useState } from 'react';
import { Send, Check, Phone, Mail, MapPin, MessageSquare, Clock } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteConfig';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Showroom Private Tasting Appointment',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Left Column: Showroom Information & Map Card */}
      <div className="space-y-6">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C5A880]">
            Central Hong Kong Showroom
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#0C2340] mt-1">
            Experience Teatime in Person
          </h2>
          <p className="text-xs text-[#5C5C5C] mt-2 leading-relaxed">
            We welcome you to our private studio above Queen’s Road Central to handle our French flax linens, admire the candlelight warmth of the German Mono Filio teapots, and sample rare first-flush tea harvests.
          </p>
        </div>

        {/* Showroom Details Box */}
        <div className="p-6 rounded-lg bg-[#FAF8F5] border border-[#E8E4DC] space-y-4 text-xs">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#0C2340]">Address</p>
              <p className="text-[#5C5C5C]">{SITE_CONFIG.showroom.address}</p>
              <p className="text-[11px] text-[#A38458] mt-0.5">{SITE_CONFIG.showroom.mrt}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 pt-3 border-t border-[#E8E4DC]/60">
            <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#0C2340]">Atelier Hours</p>
              <p className="text-[#5C5C5C]">{SITE_CONFIG.showroom.hours}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 pt-3 border-t border-[#E8E4DC]/60">
            <Phone className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#0C2340]">Telephone & WhatsApp</p>
              <p className="text-[#5C5C5C]">{SITE_CONFIG.contact.phone}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 pt-3 border-t border-[#E8E4DC]/60">
            <Mail className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#0C2340]">Email Inquiries</p>
              <p className="text-[#5C5C5C]">{SITE_CONFIG.contact.email}</p>
            </div>
          </div>
        </div>

        {/* Visual Map Representation Card */}
        <div className="relative rounded-lg overflow-hidden border border-[#E8E4DC] bg-[#16325C] text-white p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#5B8276] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-200">
                Live Showroom Map
              </span>
            </div>
            <span className="text-[10px] text-white/70">Central MTR Exit D2 (3 min walk)</span>
          </div>

          <div className="space-y-2 text-xs text-white/90">
            <p className="font-serif text-lg text-white">Stag Building, 4th Floor</p>
            <p className="text-white/70">148 Queen&apos;s Road, Central, Hong Kong</p>
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href="https://maps.google.com/?q=148+Queens+Road+Central+Hong+Kong"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury-gold py-2 px-4 text-[11px]"
            >
              Open in Google Maps
            </a>
            <a
              href={SITE_CONFIG.contact.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury-outline py-2 px-4 text-[11px] bg-white text-[#0C2340] border-white"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: Contact Form */}
      <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#E8E4DC] shadow-sm">
        <h3 className="text-xl font-serif font-semibold text-[#0C2340] mb-2">
          Send a Message or Book an Appointment
        </h3>
        <p className="text-xs text-[#6B7280] mb-6">
          We reply promptly to all inquiries regarding orders, wholesale Mono distribution, and event decor hire.
        </p>

        {submitted ? (
          <div className="p-8 text-center bg-[#FAF8F5] rounded border border-[#E8E4DC] space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#EBF2EE] text-[#5B8276] flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-serif text-[#0C2340]">Message Dispatched</h4>
            <p className="text-xs text-[#5C5C5C]">
              Thank you, {formData.name}. Our team has received your note and will be in touch shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-luxury-outline text-xs py-2 px-4"
            >
              Send Another Note
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="font-semibold text-[#0C2340] block mb-1">Your Name</label>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2.5 rounded border border-[#E8E4DC] bg-[#FAF8F5] text-xs focus:ring-1 focus:ring-[#C5A880] outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-semibold text-[#0C2340] block mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-2.5 rounded border border-[#E8E4DC] bg-[#FAF8F5] text-xs focus:ring-1 focus:ring-[#C5A880] outline-none"
                />
              </div>

              <div>
                <label className="font-semibold text-[#0C2340] block mb-1">Phone / WhatsApp</label>
                <input
                  type="tel"
                  placeholder="+852 9865 6217"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-2.5 rounded border border-[#E8E4DC] bg-[#FAF8F5] text-xs focus:ring-1 focus:ring-[#C5A880] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="font-semibold text-[#0C2340] block mb-1">Reason for Inquiry</label>
              <select
                value={formData.inquiryType}
                onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                className="w-full p-2.5 rounded border border-[#E8E4DC] bg-[#FAF8F5] text-xs focus:ring-1 focus:ring-[#C5A880] outline-none"
              >
                <option>Showroom Private Tasting Appointment</option>
                <option>Mono Germany Teapot Inquiry & Parts</option>
                <option>Afternoon Tea Event Styling & Rental Quote</option>
                <option>Custom Hamper & Corporate Gifting</option>
                <option>Order Status or Return</option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-[#0C2340] block mb-1">Message</label>
              <textarea
                rows={5}
                required
                placeholder="How may our tea concierge assist you?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-2.5 rounded border border-[#E8E4DC] bg-[#FAF8F5] text-xs focus:ring-1 focus:ring-[#C5A880] outline-none"
              />
            </div>

            <button
              type="submit"
              className="btn-luxury-navy w-full py-3 text-xs flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Message</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
