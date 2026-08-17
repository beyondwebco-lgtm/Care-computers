import React from 'react';
import { MessageSquare, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/careData';

export const FloatingActionButtons: React.FC = () => {
  return (
    <div className="fixed bottom-20 sm:bottom-8 right-5 z-40 flex flex-col gap-3">
      
      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20Care%20Computers,%20I%20need%20help%20with%20laptop%20repair`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-600/40 hover:scale-110 transition-transform group border border-emerald-400/40 cursor-pointer"
        aria-label="WhatsApp Us"
      >
        <MessageSquare className="w-5 h-5 fill-white text-emerald-600" />
        <span className="absolute right-16 bg-slate-900 text-slate-100 text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-700 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </span>
      </a>

      {/* Floating Phone Call */}
      <a
        href={`tel:${COMPANY_INFO.primaryPhone}`}
        className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-2xl shadow-blue-600/40 hover:scale-110 transition-transform group border border-blue-400/40 cursor-pointer"
        aria-label="Call Now"
      >
        <PhoneCall className="w-5 h-5" />
        <span className="absolute right-16 bg-slate-900 text-slate-100 text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-700 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Store
        </span>
      </a>
    </div>
  );
};
