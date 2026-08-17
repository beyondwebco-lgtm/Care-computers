import React from 'react';
import { Briefcase, Network, Server, Shield, ArrowRight, Building2, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/careData';

interface BusinessITSupportProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const BusinessITSupport: React.FC<BusinessITSupportProps> = ({ onOpenBooking }) => {
  const b2bFeatures = [
    { title: "Network Setup", desc: "Gigabit LAN cabling, wireless mesh setup, router configuration, and VPN access.", icon: Network },
    { title: "Computer Infrastructure", desc: "Workstation procurement, hardware assembly, OS deployment, and fleet upgrades.", icon: Server },
    { title: "IT Support", desc: "Routine maintenance, computer repair call-outs, antivirus, and backup automation.", icon: Shield },
    { title: "Business Systems", desc: "Server setup, shared storage NAS, printer networking, and office IT maintenance.", icon: Building2 }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-200 bg-slate-50 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6">
              <span className="text-blue-700 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-blue-100 border border-blue-200 rounded-full inline-block mb-4">
                Corporate B2B Solutions
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                IT Support for Small &amp; Medium Businesses
              </h2>

              <p className="text-slate-600 text-base leading-relaxed mb-6 font-medium">
                We help businesses in Hyderabad &amp; Secunderabad with infrastructure setup and other IT requirements with practical, cost-effective support.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {b2bFeatures.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs">
                      <div className="p-2 rounded-lg bg-blue-50 text-blue-600 flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-slate-900 mb-0.5">{feat.title}</h3>
                        <p className="text-[11px] text-slate-600 leading-tight font-medium">{feat.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onOpenBooking("Business IT Support Inquiry")}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-600/25"
                >
                  <span>Talk to Our IT Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${COMPANY_INFO.primaryPhone}`}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-bold text-xs text-slate-800 hover:text-slate-900 bg-slate-200 hover:bg-slate-300 border border-slate-300 transition-all text-center flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
                  <span>Call B2B Helpdesk</span>
                </a>
              </div>

            </div>

            {/* Right Graphic Box */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="w-full p-8 rounded-2xl bg-gradient-to-br from-blue-900 via-slate-900 to-blue-950 text-white border border-blue-800 text-center relative overflow-hidden shadow-xl">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-4 border border-blue-400/30">
                  <Briefcase className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Corporate Hardware SLA &amp; On-Site Support</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto mb-6 font-medium">
                  Minimize workstation downtime with customized maintenance plans for offices in Secunderabad &amp; Hyderabad.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-300 bg-cyan-950/80 px-4 py-2 rounded-full border border-cyan-500/30">
                  <span>Fast Response • Certified Engineers • Flexible Agreements</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
