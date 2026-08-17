import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/careData';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/careData';

interface FAQSectionProps {
  onOpenBooking: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-blue-700 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-blue-100 border border-blue-200 rounded-full inline-block mb-3">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Find quick answers regarding our laptop repair processes, warranty policies, and pickup options.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="text-base font-bold text-slate-900 flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    {item.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-slate-600 leading-relaxed font-medium border-t border-slate-100 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-md text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold text-slate-900">Have a specific question not answered here?</h4>
            <p className="text-xs text-slate-500 font-medium">Speak directly with our technical head in Secunderabad.</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 border border-slate-300 flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
              Call Engineer
            </a>
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white shadow-md cursor-pointer"
            >
              Book Repair
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
