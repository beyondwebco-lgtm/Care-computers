import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/careData';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cyan-700 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-cyan-50 border border-cyan-200 rounded-full inline-block mb-3">
            Real Customer Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Trusted by Thousands Across Twin Cities
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Read what our clients say about our laptop repair quality, turnaround speed, and data recovery expertise.
          </p>
        </div>

        {/* Carousel Box */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-200 bg-slate-50 shadow-md relative">
            
            <Quote className="w-12 h-12 text-blue-500/20 absolute top-8 left-8" />

            <div className="relative z-10 flex flex-col items-center text-center">
              
              {/* 5-Star Treatment */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote Comment */}
              <blockquote className="text-lg sm:text-xl font-bold text-slate-900 italic leading-relaxed mb-8 max-w-2xl">
                "{current.comment}"
              </blockquote>

              {/* Author Details */}
              <div>
                <h4 className="text-lg font-extrabold text-slate-900">
                  {current.name}
                </h4>
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-blue-700 mt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{current.serviceCategory}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-600">{current.location}</span>
                </div>
              </div>

            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-200">
              <div className="flex gap-1.5">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      currentIndex === idx ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 transition-colors cursor-pointer shadow-xs"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 transition-colors cursor-pointer shadow-xs"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
