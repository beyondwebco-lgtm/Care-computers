import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../data/careData';

interface MobileStickyActionBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyActionBar: React.FC<MobileStickyActionBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200 p-2 px-3 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        
        {/* Call CTA */}
        <a
          href={`tel:${COMPANY_INFO.primaryPhone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 border border-slate-300 text-slate-800 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-blue-600 mb-0.5" />
          <span className="text-[11px] font-bold">Call</span>
        </a>

        {/* WhatsApp CTA */}
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20Care%20Computers,%20I%20need%20help%20with%20laptop%20repair`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span className="text-[11px] font-bold">WhatsApp</span>
        </a>

        {/* Book Repair CTA */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold active:scale-95 shadow-md shadow-blue-600/30 transition-transform cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[11px] font-extrabold">Book Repair</span>
        </button>

      </div>
    </div>
  );
};
