import React from 'react';
import { Shield, Award, Wrench, Building2 } from 'lucide-react';

interface AboutViewProps {
  onOpenBooking: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenBooking }) => {
  const timelineEvents = [
    {
      year: "1998",
      title: "Founded / Business Began",
      desc: "Established in Chenoy Trade Centre (CTC Complex), Secunderabad. Started with core desktop assembly, hardware troubleshooting, and component upgrades for local businesses and families."
    },
    {
      year: "Growth",
      title: "Expanded Computer Repair & Upgrade Capabilities",
      desc: "Invested in specialized micro-soldering workstations, BGA IC reballing equipment, cleanroom data recovery, and laptop screen panel sourcing for all major brands including Dell, HP, Lenovo, and Apple."
    },
    {
      year: "Today",
      title: "Professional Laptop, Computer, Data Recovery & IT Support",
      desc: "Over 20+ years of trusted service. Leading independent service destination across Secunderabad & Hyderabad with free pickup and delivery, transparent pricing, and corporate IT support."
    }
  ];

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-4 h-4" />
            <span>Since 1998 • 20+ Years Experience</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Care Computers — Technology Service You Can Trust
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            Providing high-precision laptop repair, chip-level motherboard restoration, hard drive data recovery, and business IT infrastructure support across Hyderabad &amp; Secunderabad.
          </p>
        </div>

        {/* 2-Column Info Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-2xl">
              <img
                src="/images/hero_technician_repair.png"
                alt="Care Computers Secunderabad Team Workbench"
                className="w-full h-[420px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 border border-slate-200 backdrop-blur-xl shadow-lg">
                <p className="text-slate-900 font-extrabold text-base">CTC Complex / Chenoy Trade Centre</p>
                <p className="text-slate-600 text-xs font-medium">Parklane, Secunderabad, Telangana 500003</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
              Our Core Commitment to Every Customer
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-medium">
              Founded in 1998, Care Computers was established with a singular objective: delivering dependable, honest, and high-quality computer repair services without unnecessary delays or inflated costs.
            </p>

            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-0.5">Dell Premium Partner Positioning &amp; Multi-Brand Repair</h3>
                  <p className="text-xs text-slate-600 font-medium">Specialized technical capability for Dell, HP, Lenovo, Apple MacBook, Asus, Acer, Sony VAIO, Samsung, and Toshiba.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                <Wrench className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-0.5">Certified Micro-Electronics Engineers</h3>
                  <p className="text-xs text-slate-600 font-medium">Our technicians perform chip-level motherboard soldering, GPU reballing, and data recovery with high precision.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                <Building2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-0.5">Hyderabad &amp; Secunderabad Doorstep Support</h3>
                  <p className="text-xs text-slate-600 font-medium">Free pickup and delivery for home users and practical B2B IT support for small &amp; medium enterprises.</p>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 transition-all cursor-pointer shadow-lg shadow-blue-600/25"
            >
              Book a Repair Appointment
            </button>
          </div>

        </div>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-cyan-700 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-cyan-100 border border-cyan-200 rounded-full inline-block mb-2">
              Our Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              20+ Years of Growth &amp; Trust
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-6 sm:before:left-1/2 before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-cyan-500 before:to-blue-600">
            {timelineEvents.map((evt, idx) => (
              <div key={idx} className={`relative flex flex-col sm:flex-row items-center gap-6 ${idx % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                
                {/* Badge Node */}
                <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center z-10 text-blue-600 font-extrabold text-xs shadow-md">
                  {idx + 1}
                </div>

                {/* Content Card */}
                <div className={`w-full sm:w-[calc(50%-2.5rem)] ml-14 sm:ml-0 glass-card p-6 rounded-2xl border border-slate-200 bg-white shadow-md ${idx % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}>
                  <span className="text-xs font-black text-blue-800 bg-blue-100 px-3 py-1 rounded-full border border-blue-200 mb-2 inline-block">
                    {evt.year}
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">{evt.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{evt.desc}</p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
