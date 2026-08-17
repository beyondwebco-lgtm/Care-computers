import React from 'react';
import { X, CheckCircle2, Clock, ShieldCheck, ArrowRight, Wrench, PhoneCall } from 'lucide-react';
import type { ServiceItem } from '../types';
import { COMPANY_INFO } from '../data/careData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenBooking
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-card w-full max-w-3xl rounded-3xl p-6 sm:p-8 border border-slate-200 bg-white shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-md bg-blue-100 text-blue-800 text-xs font-extrabold uppercase tracking-wider">
            {service.category} Service
          </span>
          <span className="text-xs text-slate-500 font-medium">Care Computers Secunderabad</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
          {service.title}
        </h2>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-medium">
          {service.fullDesc}
        </p>

        {/* Quick Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>Time: {service.estimatedTime}</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
            <ShieldCheck className="w-4 h-4 text-cyan-600" />
            <span>{service.warranty}</span>
          </div>

          <div className="col-span-2 sm:col-span-1 flex items-center gap-2 text-xs font-bold text-slate-700">
            <Wrench className="w-4 h-4 text-emerald-600" />
            <span>Certified Techs</span>
          </div>
        </div>

        {/* 2-Column: Symptoms & What We Fix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-3">Common Symptoms:</h4>
            <div className="space-y-2">
              {service.symptoms.map((symptom, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>{symptom}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-3">What We Repair:</h4>
            <div className="space-y-2">
              {service.whatWeRepair.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href={`tel:${COMPANY_INFO.primaryPhone}`}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 border border-slate-300 flex items-center justify-center gap-2 transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-blue-600" />
            <span>Call Engineer (+91 92463 79771)</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onOpenBooking(service.title);
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-extrabold text-xs text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
          >
            <span>Book Repair For This Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
