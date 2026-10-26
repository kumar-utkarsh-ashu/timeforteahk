import React from 'react';

interface TastingRadarProps {
  tastingNotes: {
    aroma: string;
    flavorNotes: string[];
    body: 'Delicate' | 'Medium' | 'Full' | 'Velvety';
    astringency: 'Very Low' | 'Low' | 'Balanced' | 'Crisp';
    sweetness: 'High' | 'Medium' | 'Subtle';
  };
}

export function TastingRadar({ tastingNotes }: TastingRadarProps) {
  return (
    <div className="p-5 rounded-lg bg-[#FAF8F5] border border-[#E8E4DC] space-y-4">
      <div className="flex items-center justify-between border-b border-[#E8E4DC] pb-3">
        <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-[#0C2340]">
          Sensory Profile & Tasting Notes
        </h4>
        <span className="text-[10px] uppercase font-semibold text-[#5B8276] bg-[#EBF2EE] px-2 py-0.5 rounded">
          Sommelier Certified
        </span>
      </div>

      {/* Primary Aroma Descriptor */}
      <div>
        <span className="text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider">Aroma:</span>
        <p className="text-sm font-serif italic text-[#0C2340] mt-0.5">
          &ldquo;{tastingNotes.aroma}&rdquo;
        </p>
      </div>

      {/* Flavor Notes Tags */}
      <div>
        <span className="text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider">Flavor Palette:</span>
        <div className="flex flex-wrap gap-1.5 mt-1.5">
          {tastingNotes.flavorNotes.map((note) => (
            <span
              key={note}
              className="text-xs px-2.5 py-1 rounded bg-white text-[#0C2340] border border-[#E0CEB5] font-medium shadow-xs"
            >
              {note}
            </span>
          ))}
        </div>
      </div>

      {/* Sensory Meters */}
      <div className="grid grid-cols-3 gap-3 pt-2 text-center text-xs">
        <div className="p-2.5 rounded bg-white border border-[#E8E4DC]">
          <span className="text-[10px] text-[#6B7280] uppercase font-medium">Body</span>
          <p className="font-semibold text-[#0C2340] mt-0.5">{tastingNotes.body}</p>
        </div>
        <div className="p-2.5 rounded bg-white border border-[#E8E4DC]">
          <span className="text-[10px] text-[#6B7280] uppercase font-medium">Sweetness</span>
          <p className="font-semibold text-[#0C2340] mt-0.5">{tastingNotes.sweetness}</p>
        </div>
        <div className="p-2.5 rounded bg-white border border-[#E8E4DC]">
          <span className="text-[10px] text-[#6B7280] uppercase font-medium">Astringency</span>
          <p className="font-semibold text-[#0C2340] mt-0.5">{tastingNotes.astringency}</p>
        </div>
      </div>
    </div>
  );
}
