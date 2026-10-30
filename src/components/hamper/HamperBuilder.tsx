'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Check, Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { PRODUCTS, Product } from '@/data/products';

interface BoxOption {
  id: string;
  name: string;
  priceHKD: number;
  priceGBP: number;
  image: string;
  description: string;
}

const BOX_OPTIONS: BoxOption[] = [
  {
    id: 'navy-trunk',
    name: 'The Royal Navy Gold-Embossed Trunk',
    priceHKD: 480,
    priceGBP: 48,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80',
    description: 'Rigid handmade keepsake chest with brass hardware and champagne satin interior.',
  },
  {
    id: 'wicker-hamper',
    name: 'The Traditional English Wicker Hamper',
    priceHKD: 580,
    priceGBP: 58,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80',
    description: 'Handwoven natural willow wicker with genuine leather buckled straps.',
  },
];

export function HamperBuilder() {
  const { addToCart, formatPrice } = useApp();

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedBox, setSelectedBox] = useState<BoxOption>(BOX_OPTIONS[0]);
  const [selectedTeapot, setSelectedTeapot] = useState<Product>(PRODUCTS[0]); // Mono 1.5L
  const [selectedTea, setSelectedTea] = useState<Product>(PRODUCTS[8]); // High Mountain Oolong
  const [selectedLinen, setSelectedLinen] = useState<Product>(PRODUCTS[6]); // Mimosa Napkins
  const [recipientName, setRecipientName] = useState('');
  const [occasion, setOccasion] = useState('Birthday Celebration');
  const [giftNote, setGiftNote] = useState(
    'Wishing you moments of mindful calm and exquisite teatimes. Warmest regards.'
  );

  const totalHKD =
    selectedBox.priceHKD +
    selectedTeapot.priceHKD +
    selectedTea.priceHKD +
    selectedLinen.priceHKD;
  const totalGBP =
    selectedBox.priceGBP +
    selectedTeapot.priceGBP +
    selectedTea.priceGBP +
    selectedLinen.priceGBP;

  const handleAddHamperToCart = () => {
    // Construct custom bespoke hamper product
    const bespokeProduct: Product = {
      id: `bespoke-hamper-${Date.now()}`,
      slug: 'the-royal-afternoon-tea-hamper',
      name: `Bespoke Curated Hamper for ${recipientName || 'a Treasured Guest'}`,
      subtitle: `${selectedBox.name} • ${selectedTeapot.name} • ${selectedTea.name}`,
      category: 'Gift Boxes',
      categorySlug: 'gift-boxes',
      priceHKD: totalHKD,
      priceGBP: totalGBP,
      rating: 5.0,
      reviewCount: 1,
      image: selectedBox.image,
      galleryImages: [selectedBox.image, selectedTeapot.image, selectedTea.image, selectedLinen.image],
      badge: 'Gift Ready',
      inStock: true,
      description: `Custom curated afternoon tea hamper. Includes: ${selectedBox.name}, ${selectedTeapot.name}, ${selectedTea.name}, and ${selectedLinen.name}. Hand-calligraphed card: "${giftNote}"`,
      story: `Curated exclusively in our Central Showroom atelier for ${occasion}.`,
      specifications: [
        { label: 'Container', value: selectedBox.name },
        { label: 'Teapot', value: selectedTeapot.name },
        { label: 'Loose Leaf Tea', value: selectedTea.name },
        { label: 'Linen / Tableware', value: selectedLinen.name },
        { label: 'Recipient', value: recipientName || 'Honored Guest' },
        { label: 'Occasion', value: occasion },
      ],
      careInstructions: ['White-glove complimentary delivery in Hong Kong'],
    };

    addToCart(bespokeProduct, 1, `Occasion: ${occasion}`);
  };

  const teapotOptions = PRODUCTS.filter((p) => p.categorySlug === 'teapots-and-accessories');
  const teaOptions = PRODUCTS.filter((p) => p.categorySlug === 'tea');
  const linenOptions = PRODUCTS.filter(
    (p) => p.categorySlug === 'table-linen' || p.categorySlug === 'tableware'
  );

  return (
    <div className="bg-white rounded-lg border border-[#E8E4DC] shadow-sm overflow-hidden">
      {/* Wizard Progress Bar */}
      <div className="bg-[#0048BA] text-white p-6 border-b border-[#00358A]">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#DFBE77]">
              The Bespoke Hamper Studio
            </span>
            <h2 className="text-xl sm:text-2xl font-serif text-white">
              Curate Your Afternoon Tea Gift Box
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((step) => (
              <button
                key={step}
                onClick={() => setCurrentStep(step)}
                className={`w-7 h-7 rounded-full text-xs font-bold transition-all flex items-center justify-center ${
                  currentStep === step
                    ? 'bg-[#D1A345] text-white ring-2 ring-white/50'
                    : currentStep > step
                    ? 'bg-[#5B8276] text-white'
                    : 'bg-white/10 text-white/60 hover:bg-white/20'
                }`}
              >
                {currentStep > step ? <Check className="w-3.5 h-3.5" /> : step}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Cols: Step Customization */}
        <div className="lg:col-span-2 space-y-6">
          {/* Step 1: Choose Box */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-serif font-semibold text-[#0048BA]">
                Step 1: Select Your Keepsake Trunk or Hamper
              </h3>
              <p className="text-xs text-[#6B7280]">
                Choose the luxury vessel that will cradle your curated teatime gifts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {BOX_OPTIONS.map((box) => (
                  <div
                    key={box.id}
                    onClick={() => setSelectedBox(box)}
                    className={`p-4 rounded-md border-2 cursor-pointer transition-all ${
                      selectedBox.id === box.id
                        ? 'border-[#0048BA] bg-[#FAF8F5] shadow-md'
                        : 'border-[#E8E4DC] hover:border-[#D1A345]'
                    }`}
                  >
                    <div className="relative aspect-4/3 rounded overflow-hidden bg-gray-100 mb-3">
                      <Image
                        src={box.image}
                        alt={box.name}
                        fill
                        sizes="300px"
                        className="object-cover"
                      />
                      {selectedBox.id === box.id && (
                        <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#0048BA] text-[#DFBE77] flex items-center justify-center shadow">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                    <h4 className="text-sm font-serif font-semibold text-[#0048BA]">{box.name}</h4>
                    <p className="text-[11px] text-[#6B7280] mt-1 line-clamp-2">
                      {box.description}
                    </p>
                    <p className="text-xs font-bold text-[#B88A2D] mt-2">
                      {formatPrice(box.priceHKD, box.priceGBP)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Choose Teapot */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-serif font-semibold text-[#0048BA]">
                Step 2: Select Centerpiece Teaware
              </h3>
              <p className="text-xs text-[#6B7280]">
                German-engineered Mono Filio teapots with candlelight warming bases.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {teapotOptions.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedTeapot(item)}
                    className={`p-4 rounded-md border-2 cursor-pointer transition-all ${
                      selectedTeapot.id === item.id
                        ? 'border-[#0048BA] bg-[#FAF8F5] shadow-md'
                        : 'border-[#E8E4DC] hover:border-[#D1A345]'
                    }`}
                  >
                    <div className="relative aspect-square rounded overflow-hidden bg-gray-100 mb-3">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="300px"
                        className="object-cover"
                      />
                    </div>
                    <h4 className="text-xs font-serif font-semibold text-[#0048BA] line-clamp-2">
                      {item.name}
                    </h4>
                    <p className="text-xs font-bold text-[#B88A2D] mt-1">
                      {formatPrice(item.priceHKD, item.priceGBP)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Choose Loose Leaf Tea */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-serif font-semibold text-[#0048BA]">
                Step 3: Select Rare Loose Leaf Harvest
              </h3>
              <p className="text-xs text-[#6B7280]">
                Artisanal whole-leaf teas packaged in airtight signature caddies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {teaOptions.map((tea) => (
                  <div
                    key={tea.id}
                    onClick={() => setSelectedTea(tea)}
                    className={`p-3 rounded-md border-2 cursor-pointer transition-all ${
                      selectedTea.id === tea.id
                        ? 'border-[#0048BA] bg-[#FAF8F5] shadow-md'
                        : 'border-[#E8E4DC] hover:border-[#D1A345]'
                    }`}
                  >
                    <div className="relative aspect-square rounded overflow-hidden bg-gray-100 mb-2">
                      <Image
                        src={tea.image}
                        alt={tea.name}
                        fill
                        sizes="200px"
                        className="object-cover"
                      />
                    </div>
                    <h4 className="text-xs font-serif font-semibold text-[#0048BA] line-clamp-1">
                      {tea.name}
                    </h4>
                    <p className="text-[10px] text-[#5B8276] font-medium mt-0.5">
                      {tea.tastingNotes?.body} Body
                    </p>
                    <p className="text-xs font-bold text-[#B88A2D] mt-1">
                      {formatPrice(tea.priceHKD, tea.priceGBP)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Choose Linen or Tableware */}
          {currentStep === 4 && (
            <div className="space-y-4">
              <h3 className="text-lg font-serif font-semibold text-[#0048BA]">
                Step 4: Select Artisanal Linen or Tableware
              </h3>
              <p className="text-xs text-[#6B7280]">
                Hand-embroidered French flax napkins or Oriental Blossom tableware.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {linenOptions.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedLinen(item)}
                    className={`p-3 rounded-md border-2 cursor-pointer transition-all ${
                      selectedLinen.id === item.id
                        ? 'border-[#0048BA] bg-[#FAF8F5] shadow-md'
                        : 'border-[#E8E4DC] hover:border-[#D1A345]'
                    }`}
                  >
                    <div className="relative aspect-square rounded overflow-hidden bg-gray-100 mb-2">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="200px"
                        className="object-cover"
                      />
                    </div>
                    <h4 className="text-xs font-serif font-semibold text-[#0048BA] line-clamp-2">
                      {item.name}
                    </h4>
                    <p className="text-xs font-bold text-[#B88A2D] mt-1">
                      {formatPrice(item.priceHKD, item.priceGBP)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Calligraphy Note */}
          {currentStep === 5 && (
            <div className="space-y-4">
              <h3 className="text-lg font-serif font-semibold text-[#0048BA]">
                Step 5: Hand-Calligraphed Gift Card
              </h3>
              <p className="text-xs text-[#6B7280]">
                Our Hong Kong atelier inscribes each card by hand in gold ink.
              </p>

              <div className="space-y-3 pt-2">
                <div>
                  <label className="text-xs font-semibold text-[#0048BA]">Recipient Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Lady Charlotte or Julian & Eleanor"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded border border-[#E8E4DC] text-xs bg-[#FAF8F5] focus:ring-1 focus:ring-[#D1A345] outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#0048BA]">Occasion</label>
                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded border border-[#E8E4DC] text-xs bg-[#FAF8F5] focus:ring-1 focus:ring-[#D1A345] outline-none"
                  >
                    <option>Birthday Celebration</option>
                    <option>Wedding & Bridal Shower</option>
                    <option>Housewarming</option>
                    <option>Corporate Appreciation</option>
                    <option>Anniversary</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#0048BA]">Personal Message</label>
                  <textarea
                    rows={4}
                    value={giftNote}
                    onChange={(e) => setGiftNote(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded border border-[#E8E4DC] text-xs bg-[#FAF8F5] focus:ring-1 focus:ring-[#D1A345] outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="pt-6 border-t border-[#E8E4DC] flex justify-between items-center">
            {currentStep > 1 ? (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="btn-luxury-outline text-xs py-2.5 px-4"
              >
                Previous Step
              </button>
            ) : <div />}

            {currentStep < 5 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="btn-luxury-navy text-xs py-2.5 px-5 flex items-center gap-1.5"
              >
                <span>Continue to Step {currentStep + 1}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={handleAddHamperToCart}
                className="btn-luxury-gold text-xs py-2.5 px-6 flex items-center gap-1.5"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add Complete Hamper to Bag</span>
              </button>
            )}
          </div>
        </div>

        {/* Right Col: Live Hamper Summary & Price */}
        <div className="bg-[#FAF8F5] p-6 rounded-lg border border-[#E8E4DC] flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#B88A2D] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hamper Manifest</span>
            </div>
            <h4 className="text-base font-serif font-bold text-[#0048BA]">
              {selectedBox.name}
            </h4>

            <div className="mt-4 space-y-3 text-xs divide-y divide-[#E8E4DC]/60">
              <div className="pt-2 flex justify-between items-center">
                <span className="text-[#6B7280]">Vessel:</span>
                <span className="font-medium text-[#0048BA] text-right truncate max-w-[150px]">
                  {selectedBox.name}
                </span>
              </div>
              <div className="pt-2 flex justify-between items-center">
                <span className="text-[#6B7280]">Teapot:</span>
                <span className="font-medium text-[#0048BA] text-right truncate max-w-[150px]">
                  {selectedTeapot.name}
                </span>
              </div>
              <div className="pt-2 flex justify-between items-center">
                <span className="text-[#6B7280]">Loose Leaf:</span>
                <span className="font-medium text-[#0048BA] text-right truncate max-w-[150px]">
                  {selectedTea.name}
                </span>
              </div>
              <div className="pt-2 flex justify-between items-center">
                <span className="text-[#6B7280]">Tableware / Linen:</span>
                <span className="font-medium text-[#0048BA] text-right truncate max-w-[150px]">
                  {selectedLinen.name}
                </span>
              </div>
              <div className="pt-2 flex justify-between items-center">
                <span className="text-[#6B7280]">Calligraphy:</span>
                <span className="font-medium text-[#5B8276]">Complimentary</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#E8E4DC] space-y-3">
            <div className="flex justify-between items-baseline">
              <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                Total Price:
              </span>
              <span className="text-2xl font-serif font-bold text-[#0048BA]">
                {formatPrice(totalHKD, totalGBP)}
              </span>
            </div>

            <p className="text-[11px] text-[#5B8276] font-medium flex items-center gap-1">
              <Check className="w-3.5 h-3.5" />
              Includes white-glove complimentary delivery in HK
            </p>

            <button
              onClick={handleAddHamperToCart}
              className="btn-luxury-gold w-full flex items-center justify-center gap-2 py-3 text-xs"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add Custom Hamper to Bag</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
