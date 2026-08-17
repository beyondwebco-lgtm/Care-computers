import React from 'react';
import { Shield, Clock, Truck, Award, Calendar, MessageSquare, ArrowRight, CheckCircle2, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/careData';

interface HeroProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/50 to-slate-50">
      
      {/* Background soft ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs sm:text-sm font-bold mb-6">
              <Shield className="w-4 h-4 text-blue-600" />
              <span>Serving customers since {COMPANY_INFO.foundedYear}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              <span className="text-slate-700">{COMPANY_INFO.yearsExperience} Experience</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6">
              Expert Laptop Repair.{' '}
              <span className="gradient-text-blue block mt-1">Fast. Reliable. Professional.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-medium">
              From cracked screens and motherboard issues to data recovery, OS installation and performance upgrades, Care Computers provides professional computer repair services across Hyderabad and Secunderabad.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <button
                onClick={() => onOpenBooking()}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-extrabold text-base text-white bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-xl shadow-blue-600/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a Repair</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20Care%20Computers,%20I%20want%20to%20inquire%20about%20laptop%20repair`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-7 py-4 rounded-xl font-extrabold text-base text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-all cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Direct Call Quick Link */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-200 w-full">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                <span>Dell Premium Partner Positioning</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                <span>Free Pick Up &amp; Delivery</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with 4 Floating Information Badges */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-400 to-cyan-400 opacity-25 blur-xl"></div>

              {/* Technician Repair Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-2xl">
                <img
                  src="/images/hero_technician_repair.png"
                  alt="Care Computers Technician Laptop Repair Secunderabad"
                  className="w-full h-[380px] sm:h-[450px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80" />

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 flex items-center justify-between shadow-lg">
                  <div>
                    <p className="text-xs font-bold text-slate-900">CTC Complex, Parklane</p>
                    <p className="text-[11px] text-slate-500 font-medium">Secunderabad 500003</p>
                  </div>
                  <a
                    href={`tel:${COMPANY_INFO.primaryPhone}`}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Call Store</span>
                  </a>
                </div>
              </div>

              {/* 4 Floating Information Badges (Light Card Styling) */}
              
              {/* Badge 1: Top Left - 20+ Years Experience */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white p-3 rounded-xl shadow-xl flex items-center gap-3 border border-slate-200">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-slate-900">20+ Years</p>
                  <p className="text-[10px] text-slate-500 font-medium">Experience</p>
                </div>
              </div>

              {/* Badge 2: Top Right - Certified Engineers */}
              <div className="absolute top-8 -right-4 sm:-right-6 bg-white p-3 rounded-xl shadow-xl flex items-center gap-3 border border-slate-200">
                <div className="w-9 h-9 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-200">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-slate-900">Certified</p>
                  <p className="text-[10px] text-slate-500 font-medium">Engineers</p>
                </div>
              </div>

              {/* Badge 3: Mid-Bottom Left - Free Pickup & Delivery */}
              <div className="absolute bottom-20 -left-4 sm:-left-8 bg-white p-3 rounded-xl shadow-xl flex items-center gap-3 border border-slate-200">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-slate-900">Free Pickup</p>
                  <p className="text-[10px] text-slate-500 font-medium">&amp; Delivery</p>
                </div>
              </div>

              {/* Badge 4: Bottom Right - Same-Day Repairs */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-white p-3 rounded-xl shadow-xl flex items-center gap-3 border border-slate-200">
                <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-slate-900">Same-Day</p>
                  <p className="text-[10px] text-slate-500 font-medium">Repairs</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
