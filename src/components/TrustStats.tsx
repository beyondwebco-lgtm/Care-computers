import React from 'react';
import { QUICK_STATS } from '../data/careData';
import { Calendar, Award, ThumbsUp, Zap, Truck } from 'lucide-react';

const statIcons = [
  Calendar,
  Award,
  ThumbsUp,
  Zap,
  Truck
];

export const TrustStats: React.FC = () => {
  return (
    <section className="relative z-20 -mt-6 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl bg-white/95 backdrop-blur-xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {QUICK_STATS.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <div key={idx} className={`flex flex-col items-center text-center p-3 ${idx !== 0 ? 'pt-6 md:pt-3' : ''}`}>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 border border-blue-200">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight gradient-text-blue">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 font-medium">
                  {stat.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
