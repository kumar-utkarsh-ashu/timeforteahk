import React from 'react';
import { Thermometer, Timer, Scale, RefreshCw } from 'lucide-react';

interface BrewingGuideProps {
  brewingGuide: {
    waterTemp: string;
    leafRatio: string;
    steepTime: string;
    infusions: number;
  };
}

export function BrewingGuide({ brewingGuide }: BrewingGuideProps) {
  return (
    <div className="p-5 rounded-lg bg-gradient-to-br from-[#FAF8F5] to-[#F5F1EB] border border-[#E8E4DC] space-y-4">
      <div className="flex items-center justify-between border-b border-[#E8E4DC] pb-3">
        <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-[#0048BA]">
          Brewing Masterclass & Ritual
        </h4>
        <span className="text-[10px] uppercase font-semibold text-[#B88A2D]">
          Gong Fu & Western Compatible
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
        {/* Water Temperature */}
        <div className="p-3 rounded bg-white border border-[#E8E4DC] flex flex-col items-center">
          <Thermometer className="w-5 h-5 text-[#5B8276] mb-1" />
          <span className="text-[10px] text-[#6B7280] uppercase">Water Temp</span>
          <span className="text-xs font-bold text-[#0048BA] mt-0.5">{brewingGuide.waterTemp}</span>
        </div>

        {/* Leaf-to-Water Ratio */}
        <div className="p-3 rounded bg-white border border-[#E8E4DC] flex flex-col items-center">
          <Scale className="w-5 h-5 text-[#D1A345] mb-1" />
          <span className="text-[10px] text-[#6B7280] uppercase">Leaf Ratio</span>
          <span className="text-xs font-bold text-[#0048BA] mt-0.5">{brewingGuide.leafRatio}</span>
        </div>

        {/* Steeping Time */}
        <div className="p-3 rounded bg-white border border-[#E8E4DC] flex flex-col items-center">
          <Timer className="w-5 h-5 text-[#436357] mb-1" />
          <span className="text-[10px] text-[#6B7280] uppercase">Steep Time</span>
          <span className="text-xs font-bold text-[#0048BA] mt-0.5">{brewingGuide.steepTime}</span>
        </div>

        {/* Multi-Infusion Capability */}
        <div className="p-3 rounded bg-white border border-[#E8E4DC] flex flex-col items-center">
          <RefreshCw className="w-5 h-5 text-[#B88A2D] mb-1" />
          <span className="text-[10px] text-[#6B7280] uppercase">Re-Steepings</span>
          <span className="text-xs font-bold text-[#0048BA] mt-0.5">Up to {brewingGuide.infusions}x</span>
        </div>
      </div>

      <p className="text-[11px] text-[#6B7280] italic text-center">
        Pro tip: Use fresh spring water and pre-warm your Mono Filio teapot with hot water prior to steeping.
      </p>
    </div>
  );
}
