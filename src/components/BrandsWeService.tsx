import React, { useState } from 'react';
import { BRANDS_LIST } from '../data/careData';
import type { BrandItem } from '../types';
import { CheckCircle2, ChevronRight, PhoneCall, ShieldCheck } from 'lucide-react';

interface BrandsWeServiceProps {
  onOpenBooking: (brandName?: string) => void;
}

const brandImagesMap: Record<string, { src: string; caption: string }> = {
  "Apple": { src: "/images/hero_technician_repair.png", caption: "Apple MacBook Retina & Logic Board Workbench" },
  "Dell": { src: "/images/screen_repair.png", caption: "Dell XPS & Inspiron Original Parts Bench" },
  "HP": { src: "/images/screen_repair.png", caption: "HP Pavilion & Spectre Precision Bench" },
  "Lenovo": { src: "/images/motherboard_repair.png", caption: "Lenovo ThinkPad Chip-Level Soldering Bench" },
  "Asus": { src: "/images/motherboard_repair.png", caption: "Asus ROG Gaming & ZenBook Board Bench" },
  "Acer": { src: "/images/hero_technician_repair.png", caption: "Acer Aspire & Nitro Repair Bench" },
  "Sony VAIO": { src: "/images/hero_technician_repair.png", caption: "Sony VAIO Hardware Diagnostics Bench" },
  "Samsung": { src: "/images/data_recovery_lab.png", caption: "Samsung NVMe SSD & Storage Recovery" },
  "Toshiba": { src: "/images/data_recovery_lab.png", caption: "Toshiba Hard Drive Repair & Data Recovery" }
};

export const BrandsWeService: React.FC<BrandsWeServiceProps> = ({ onOpenBooking }) => {
  const [selectedBrand, setSelectedBrand] = useState<BrandItem>(BRANDS_LIST[0]);

  const brandVisual = brandImagesMap[selectedBrand.name] || {
    src: "/images/hero_technician_repair.png",
    caption: `${selectedBrand.name} Technical Service Visual`
  };

  return (
    <section id="brands" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cyan-700 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-cyan-50 border border-cyan-200 rounded-full inline-block mb-3">
            Multi-Brand Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            We Service Major Laptop &amp; Computer Brands
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            One trusted repair destination for all leading laptop brands across Hyderabad and Secunderabad.
          </p>
        </div>

        {/* Brand Logo Grid Wall */}
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-9 gap-3 mb-12">
          {BRANDS_LIST.map((brand) => {
            const isSelected = selectedBrand.name === brand.name;
            return (
              <button
                key={brand.name}
                onClick={() => setSelectedBrand(brand)}
                className={`py-4 px-3 rounded-2xl border transition-all cursor-pointer flex flex-col items-center justify-center text-center ${
                  isSelected
                    ? 'bg-gradient-to-b from-blue-600 to-blue-700 border-blue-500 text-white shadow-lg shadow-blue-600/30 scale-105 z-10'
                    : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800 hover:text-slate-900 shadow-sm'
                }`}
              >
                <span className="text-base sm:text-lg font-black tracking-tight">{brand.name}</span>
                <span className="text-[10px] opacity-75 mt-0.5 font-bold">Service</span>
              </button>
            );
          })}
        </div>

        {/* Selected Brand Detail Box with HD Image Visual */}
        {selectedBrand && (
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 bg-slate-50 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Brand Visual Image Column */}
              <div className="lg:col-span-4 relative">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg relative bg-slate-900 group">
                  <img
                    src={brandVisual.src}
                    alt={`Care Computers ${selectedBrand.name} Laptop Repair Visual`}
                    className="w-full h-56 sm:h-64 lg:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 border border-slate-200 backdrop-blur-md">
                    <span className="text-[10px] uppercase font-black tracking-wider text-blue-800 bg-blue-100 px-2 py-0.5 rounded border border-blue-200 block w-max mb-1">
                      {selectedBrand.name} Repair Visual
                    </span>
                    <p className="text-xs font-extrabold text-slate-900 line-clamp-1">{brandVisual.caption}</p>
                  </div>
                </div>
              </div>

              {/* Brand Details Column */}
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 rounded-md bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
                    {selectedBrand.name} Specialization
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{selectedBrand.tagline}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                  Professional {selectedBrand.name} Laptop Repair
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                  {selectedBrand.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                  {selectedBrand.specialties.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-cyan-600" />
                  <span>Original Compatible Spare Parts &amp; 90-Day Service Warranty</span>
                </div>
              </div>

              {/* Action Column */}
              <div className="lg:col-span-3 flex flex-col gap-3 justify-center">
                <button
                  onClick={() => onOpenBooking(`${selectedBrand.name} Laptop Repair`)}
                  className="w-full py-4 px-6 rounded-2xl font-extrabold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-xl shadow-blue-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book {selectedBrand.name} Repair</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:+919246379771"
                  className="w-full py-3 px-4 rounded-2xl font-bold text-xs text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all text-center flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-blue-600" />
                  <span>Call Store (+91 92463 79771)</span>
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
