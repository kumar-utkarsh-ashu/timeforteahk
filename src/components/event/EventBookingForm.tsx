'use client';

import React, { useState } from 'react';
import { MessageSquare, Calendar, Users, MapPin, Check } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteConfig';

export function EventBookingForm() {
  const [guestCount, setGuestCount] = useState('12');
  const [eventDate, setEventDate] = useState('');
  const [eventType, setEventType] = useState('Bridal Shower / Birthday Celebration');
  const [venueLocation, setVenueLocation] = useState('Private Residence (Hong Kong Island)');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello Time for Tea HK! I would like to inquire about Afternoon Tea Event Styling for ${guestCount} guests on ${eventDate || 'an upcoming date'} (${eventType}) at ${venueLocation}. My name is ${clientName || 'Guest'}.`;
    return `https://wa.me/${SITE_CONFIG.contact.whatsAppNumber.replace('+', '')}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-white rounded-lg border border-[#E8E4DC] p-6 sm:p-8 shadow-sm">
      <div className="border-b border-[#E8E4DC] pb-4 mb-6">
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C5A880]">
          Private Consultations
        </span>
        <h3 className="text-xl sm:text-2xl font-serif text-[#0C2340] mt-1">
          Reserve Event Styling & Teaware Hire
        </h3>
        <p className="text-xs text-[#6B7280] mt-1">
          From intimate 4-guest tea tables to 100+ guest corporate ateliers in Hong Kong.
        </p>
      </div>

      {submitted ? (
        <div className="p-8 text-center bg-[#FAF8F5] rounded border border-[#E8E4DC] space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#EBF2EE] text-[#5B8276] flex items-center justify-center mx-auto">
            <Check className="w-6 h-6" />
          </div>
          <h4 className="text-xl font-serif text-[#0C2340]">Inquiry Received</h4>
          <p className="text-xs text-[#5C5C5C] max-w-md mx-auto">
            Our head event stylist Beatrice will contact you via WhatsApp and email within 4 business hours with availability, lookbook options, and custom moodboards.
          </p>
          <a
            href={generateWhatsAppMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury-gold inline-flex items-center gap-2 text-xs"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Fast-Track via WhatsApp Now</span>
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold text-[#0C2340] flex items-center gap-1.5 mb-1">
                <Users className="w-3.5 h-3.5 text-[#A38458]" />
                Estimated Number of Guests
              </label>
              <select
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="w-full p-2.5 rounded border border-[#E8E4DC] bg-[#FAF8F5] text-xs focus:ring-1 focus:ring-[#C5A880] outline-none"
              >
                <option value="4">Intimate (2 – 6 Guests)</option>
                <option value="12">Celebration (8 – 16 Guests)</option>
                <option value="25">Grand Tea Party (18 – 35 Guests)</option>
                <option value="60">Corporate / VIP Gala (40 – 100+ Guests)</option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-[#0C2340] flex items-center gap-1.5 mb-1">
                <Calendar className="w-3.5 h-3.5 text-[#A38458]" />
                Preferred Date
              </label>
              <input
                type="date"
                required
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full p-2.5 rounded border border-[#E8E4DC] bg-[#FAF8F5] text-xs focus:ring-1 focus:ring-[#C5A880] outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold text-[#0C2340] mb-1 block">Event Type</label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full p-2.5 rounded border border-[#E8E4DC] bg-[#FAF8F5] text-xs focus:ring-1 focus:ring-[#C5A880] outline-none"
              >
                <option>Bridal Shower / Baby Shower</option>
                <option>Milestone Birthday Celebration</option>
                <option>Corporate Hospitality & Brand Launch</option>
                <option>Intimate Mother-Daughter Tea</option>
                <option>Showroom Private Tasting</option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-[#0C2340] flex items-center gap-1.5 mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#A38458]" />
                Venue Location in Hong Kong
              </label>
              <input
                type="text"
                placeholder="e.g. Mid-Levels, Repulse Bay, or Clubhouse"
                value={venueLocation}
                onChange={(e) => setVenueLocation(e.target.value)}
                className="w-full p-2.5 rounded border border-[#E8E4DC] bg-[#FAF8F5] text-xs focus:ring-1 focus:ring-[#C5A880] outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div>
              <label className="font-semibold text-[#0C2340] mb-1 block">Your Name</label>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full p-2.5 rounded border border-[#E8E4DC] bg-[#FAF8F5] text-xs focus:ring-1 focus:ring-[#C5A880] outline-none"
              />
            </div>

            <div>
              <label className="font-semibold text-[#0C2340] mb-1 block">Email</label>
              <input
                type="email"
                required
                placeholder="email@domain.com"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                className="w-full p-2.5 rounded border border-[#E8E4DC] bg-[#FAF8F5] text-xs focus:ring-1 focus:ring-[#C5A880] outline-none"
              />
            </div>

            <div>
              <label className="font-semibold text-[#0C2340] mb-1 block">WhatsApp / Phone</label>
              <input
                type="tel"
                required
                placeholder="+852 9865 6217"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="w-full p-2.5 rounded border border-[#E8E4DC] bg-[#FAF8F5] text-xs focus:ring-1 focus:ring-[#C5A880] outline-none"
              />
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="btn-luxury-navy flex-1 py-3 text-xs flex items-center justify-center gap-2"
            >
              <span>Submit Formal Styling Inquiry</span>
            </button>

            <a
              href={generateWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury-gold flex-1 py-3 text-xs flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Instant WhatsApp Consultation</span>
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
