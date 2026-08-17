import React from 'react';
import { SERVICES_CATALOG } from '../data/careData';
import type { ServiceItem } from '../types';
import { 
  Monitor, CircuitBoard, Database, Zap, Cpu, BatteryCharging, 
  ArrowRight, CheckCircle2 
} from 'lucide-react';

interface FeaturedServicesProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenServiceDetail: (service: ServiceItem) => void;
  onViewAllServices: () => void;
}

const serviceIconMap: Record<string, React.FC<{ className?: string }>> = {
  Monitor,
  CircuitBoard,
  Database,
  Zap,
  Cpu,
  BatteryCharging
};

const serviceImagesMap: Record<string, string> = {
  "laptop-screen-replacement": "/images/hero_technician_repair.png",
  "motherboard-repair": "/images/hero_technician_repair.png",
  "data-recovery": "/images/data_recovery_lab.png",
  "performance-tuning": "/images/hero_technician_repair.png",
  "os-installation": "/images/hero_technician_repair.png",
  "battery-replacement": "/images/hero_technician_repair.png"
};

export const FeaturedServices: React.FC<FeaturedServicesProps> = ({
  onOpenBooking,
  onOpenServiceDetail,
  onViewAllServices
}) => {
  const featuredServices = SERVICES_CATALOG.filter(s => s.isFeatured).slice(0, 6);

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-700 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-blue-50 border border-blue-200 rounded-full inline-block mb-3">
              Core Technical Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Complete Laptop &amp; Computer Repair Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 font-medium">
              Professional diagnostics, repair and upgrades for laptops, desktops, MacBooks and computers in Hyderabad &amp; Secunderabad.
            </p>
          </div>

          <button
            onClick={onViewAllServices}
            className="self-start md:self-end px-6 py-3.5 rounded-xl font-bold text-sm text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-all flex items-center gap-2 cursor-pointer group"
          >
            <span>View All 30 Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 6 Featured Commercial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => {
            const IconComp = serviceIconMap[service.iconName] || Monitor;
            const cardImg = serviceImagesMap[service.id] || "/images/hero_technician_repair.png";

            return (
              <div
                key={service.id}
                className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between group border border-slate-200 bg-white shadow-md"
              >
                <div>
                  {/* Card Visual Header */}
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={cardImg}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/95 border border-slate-200 text-blue-600 backdrop-blur-md shadow-md">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-blue-600 text-[10px] font-bold text-white shadow-md">
                      {service.warranty}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3 font-medium">
                      {service.shortDesc}
                    </p>

                    {/* Symptoms snippets */}
                    <div className="space-y-1.5 mb-6">
                      {service.symptoms.slice(0, 2).map((symptom, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0" />
                          <span className="truncate">{symptom}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer CTAs */}
                <div className="p-6 pt-0 grid grid-cols-2 gap-3 border-t border-slate-100 mt-auto">
                  <button
                    onClick={() => onOpenServiceDetail(service)}
                    className="py-2.5 px-3 rounded-xl text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors text-center cursor-pointer"
                  >
                    Learn More
                  </button>

                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-md shadow-blue-600/20 transition-all text-center cursor-pointer"
                  >
                    Book Repair
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* View All Services Bottom Banner */}
        <div className="mt-14 text-center">
          <button
            onClick={onViewAllServices}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 border border-blue-500 text-white font-extrabold text-sm hover:from-blue-700 hover:to-cyan-700 transition-all cursor-pointer shadow-xl shadow-blue-600/20"
          >
            <span>Explore Complete 30-Service Repair Catalog</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>

      </div>
    </section>
  );
};
