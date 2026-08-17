import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface DellServiceSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const DellServiceSection: React.FC<DellServiceSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-blue-900 via-slate-900 to-cyan-950 text-white shadow-2xl relative overflow-hidden border border-blue-800/40">
          
          {/* Ambient Glow */}
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Content */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Dell Premium Service Partner Positioning</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
                Specialized Dell Laptop Services
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-medium">
                Care Computers provides professional Dell laptop, desktop and AIO repair services in Hyderabad and Secunderabad. We service Inspiron, XPS, Latitude, Vostro, and Alienware gaming series using genuine Dell compatible parts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Dell XPS &amp; Inspiron Screen Replacement</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Dell Motherboard Chip-Level Repair</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Original Dell Batteries &amp; Power Chargers</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Dell Bios Unlocking &amp; OS Setup</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
              <button
                onClick={() => onOpenBooking("Dell Laptop Repair")}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-extrabold text-sm text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Dell Repair</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-slate-300 mt-2 text-center lg:text-right w-full font-medium">
                Same-day repair for most Dell screen &amp; battery issues
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
