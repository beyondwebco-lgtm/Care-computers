import React from 'react';
import { Laptop, SearchCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      num: "01",
      title: "Submit Your Laptop",
      desc: "Book online, call us, email us or request pickup in Secunderabad & Hyderabad.",
      icon: Laptop,
      badge: "Easy Request"
    },
    {
      num: "02",
      title: "We Diagnose & Repair",
      desc: "Our engineers diagnose the issue, explain the repair and provide the estimated cost and turnaround time.",
      icon: SearchCheck,
      badge: "Transparent Pricing"
    },
    {
      num: "03",
      title: "Pickup or Free Delivery",
      desc: "Once your laptop is repaired, collect it from the service center or use the available pickup/delivery service.",
      icon: CheckCircle2,
      badge: "Quality Tested"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-700 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-blue-100 border border-blue-200 rounded-full inline-block mb-3">
            Streamlined Repair Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Repair Your Laptop in 3 Simple Steps
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Experience smooth, fast, and transparent laptop repair services from diagnosis to doorstep delivery.
          </p>
        </div>

        {/* Timeline Desktop & Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 -translate-y-6 z-0" />

          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-3xl p-8 border border-slate-200 bg-white shadow-md relative z-10 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-extrabold gradient-text-blue tracking-wider">
                      Step {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200">
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-800 bg-blue-100 border border-blue-200 px-2.5 py-1 rounded-md mb-3 inline-block">
                    {step.badge}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500">
                  {idx === 0 && "• Pickup Available Across Twin Cities"}
                  {idx === 1 && "• No Approval, No Repair Policy"}
                  {idx === 2 && "• Verified Quality Check Before Handover"}
                </div>
              </div>
            );
          })}

        </div>

        {/* CTA Banner */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenBooking}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-extrabold text-sm shadow-xl shadow-blue-600/25 hover:from-blue-700 hover:to-cyan-700 transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>Start Step 01: Book Your Repair Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
