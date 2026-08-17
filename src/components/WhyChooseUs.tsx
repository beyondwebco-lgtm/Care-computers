import React from 'react';
import { Award, Shield, CheckCircle2, Eye, Zap, Headphones, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/careData';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const features = [
    {
      title: "20+ Years of Experience",
      desc: "Serving Secunderabad & Hyderabad since 1998 with deep expertise across thousands of repairs.",
      icon: Award
    },
    {
      title: "Certified Engineers",
      desc: "Skilled micro-electronics engineers certified in chip-level motherboard and MacBook repairs.",
      icon: Shield
    },
    {
      title: "Genuine Parts",
      desc: "We fit original OEM displays, batteries, keyboards and components with clear warranty terms.",
      icon: CheckCircle2
    },
    {
      title: "Transparent Service",
      desc: "Clear upfront diagnostics and cost estimates before any repair work begins. No hidden charges.",
      icon: Eye
    },
    {
      title: "Fast Turnaround",
      desc: "Same-day repair support for common issues, screen replacements, and RAM/SSD performance upgrades.",
      icon: Zap
    },
    {
      title: "After-Service Support",
      desc: "Dedicated technical assistance and warranty backing for complete peace of mind after your repair.",
      icon: Headphones
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Card */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-2xl">
              <img
                src="/images/hero_technician_repair.png"
                alt="Care Computers Certified Technician Workbench Secunderabad"
                className="w-full h-[480px] object-cover object-center"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 border border-slate-200 backdrop-blur-xl shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
                  <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Trusted Technical Center</p>
                </div>
                <p className="text-slate-900 font-extrabold text-lg">CTC Complex, Parklane Secunderabad</p>
                <p className="text-slate-600 text-xs mt-1 font-medium">Your one-stop destination for laptop, desktop, MacBook &amp; data recovery.</p>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Feature Blocks */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            
            <span className="text-blue-700 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-blue-100 border border-blue-200 rounded-full inline-block mb-3">
              The Care Computers Advantage
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Why Customers Choose Care Computers
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-10 font-medium">
              For over two decades, individuals, professionals, and corporate offices in Secunderabad and Hyderabad have relied on Care Computers for fast, honest, and high-precision computer services.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 shadow-sm transition-all flex items-start gap-4"
                  >
                    <div className="p-3 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">
                        {feat.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 transition-all text-center cursor-pointer shadow-lg shadow-blue-600/25"
              >
                Book Your Repair
              </button>

              <a
                href={`tel:${COMPANY_INFO.primaryPhone}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-slate-800 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all text-center flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-blue-600" />
                <span>Call Us Now (+91 92463 79771)</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
