import React from 'react';
import { Truck, PhoneCall, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/careData';

interface FreePickupDeliveryProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const FreePickupDelivery: React.FC<FreePickupDeliveryProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 via-cyan-50/60 to-slate-50 relative overflow-hidden border-y border-blue-200">
      
      {/* Background glow */}
      <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-300/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Truck className="w-4 h-4 text-cyan-700" />
              <span>Doorstep Convenience Service</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-700">
              Can't Visit Our Service Center?
            </h2>
            
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mt-1 mb-4 gradient-text-blue">
              We Can Pick It Up.
            </h3>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 font-medium">
              Care Computers provides complimentary doorstep pickup and delivery support across all residential and business areas in Hyderabad and Secunderabad. Safe handling, diagnostic updates, and secure device return.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-700 mb-2">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-blue-600" /> Secunderabad</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-blue-600" /> Hyderabad</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-blue-600" /> Insured Transit</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
            <button
              onClick={() => onOpenBooking("Free Pickup Request")}
              className="w-full py-4 px-6 rounded-2xl font-extrabold text-sm text-white bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 hover:from-cyan-700 hover:to-blue-700 shadow-xl shadow-cyan-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Schedule Pickup</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="w-full py-3.5 px-6 rounded-2xl font-bold text-xs text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 transition-all text-center flex items-center justify-center gap-2 shadow-xs"
            >
              <PhoneCall className="w-4 h-4 text-blue-600" />
              <span>Direct Call: +91 92463 79771</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
