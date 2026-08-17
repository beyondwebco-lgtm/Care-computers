import React from 'react';
import { Database, ArrowRight, Lock, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/careData';

interface DataRecoverySectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const DataRecoverySection: React.FC<DataRecoverySectionProps> = ({ onOpenBooking }) => {
  const points = [
    { title: "Hard Drive Failure", desc: "Clicking mechanical sounds, head crashes, and magnetic plate degradation." },
    { title: "Data Recovery", desc: "Advanced file restoration from dead laptops, formatted partitions, and RAW drives." },
    { title: "Storage Problems", desc: "Non-responding external USB hard drives, corrupt flash drives, and SSD failures." },
    { title: "File Access Issues", desc: "Recovering lost photos, critical business documents, databases, and OS profile files." }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Background soft lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-2xl">
              <img
                src="/images/data_recovery_lab.png"
                alt="Care Computers Cleanroom Data Recovery Lab Secunderabad"
                className="w-full h-[450px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 border border-slate-200 backdrop-blur-xl shadow-lg">
                <div className="flex items-center gap-2 text-cyan-700 text-xs font-extrabold uppercase tracking-wider mb-1">
                  <Lock className="w-4 h-4" />
                  <span>100% Confidential Data Guarantee</span>
                </div>
                <p className="text-slate-900 font-extrabold text-sm">Professional Forensic Data Extraction</p>
                <p className="text-slate-600 text-xs mt-0.5 font-medium">Strict privacy protocols for personal and corporate files.</p>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-7">
            <span className="text-cyan-700 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-cyan-100 border border-cyan-200 rounded-full inline-block mb-3">
              Specialized Storage Recovery
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Lost Your Important Data?
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 font-medium">
              Professional data recovery support for hard drives and storage devices. Do not format or panic if your hard drive crashes or stops opening. Our engineers in Secunderabad extract files safely.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {points.map((pt, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-200 flex-shrink-0">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-0.5">{pt.title}</h3>
                    <p className="text-xs text-slate-600 leading-normal font-medium">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onOpenBooking("Professional Data Recovery Service")}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-extrabold text-sm text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-xl shadow-cyan-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Talk to a Data Recovery Expert</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.primaryPhone}`}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl font-bold text-xs text-slate-800 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all text-center flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-cyan-600" />
                <span>Call Emergency Recovery Line</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
