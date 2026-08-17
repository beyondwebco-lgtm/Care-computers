import React, { useState } from 'react';
import { SERVICES_CATALOG } from '../data/careData';
import type { ServiceItem } from '../types';
import { Search, Clock, CheckCircle2, Laptop } from 'lucide-react';

interface ServicesPageProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenServiceDetail: (service: ServiceItem) => void;
}

const getServiceImage = (service: ServiceItem): string => {
  if (service.category === 'data' || service.id.includes('data') || service.id.includes('recovery') || service.id.includes('hard-drive')) {
    return '/images/data_recovery_lab.png';
  }
  if (service.id.includes('screen') || service.id.includes('display')) {
    return '/images/screen_repair.png';
  }
  if (service.category === 'hardware' || service.id.includes('motherboard') || service.id.includes('chip') || service.id.includes('power') || service.id.includes('liquid') || service.id.includes('fan') || service.id.includes('gpu')) {
    return '/images/motherboard_repair.png';
  }
  return '/images/hero_technician_repair.png';
};

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenBooking,
  onOpenServiceDetail
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All 30 Services' },
    { id: 'hardware', label: 'Hardware Repairs' },
    { id: 'laptop', label: 'Laptop Upgrades' },
    { id: 'software', label: 'Software & OS' },
    { id: 'data', label: 'Data Recovery' },
    { id: 'business', label: 'Business & IT Support' },
  ];

  const filteredServices = SERVICES_CATALOG.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Laptop className="w-4 h-4" />
            <span>Complete Technical Catalog</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Complete Laptop &amp; Computer Services
          </h1>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Browse all 30 specialized computer repair, component replacement, chip-level soldering, data recovery, and IT support services in Hyderabad &amp; Secunderabad.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="glass-card p-4 sm:p-6 rounded-3xl border border-slate-200 bg-white mb-12 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-full pl-10 pr-4 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors font-medium"
            />
          </div>

        </div>

        {/* Catalog Grid with Image Thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const cardImg = getServiceImage(service);

            return (
              <div
                key={service.id}
                className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-slate-200 bg-white flex flex-col justify-between shadow-sm group"
              >
                <div>
                  {/* Top Image Banner */}
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img
                      src={cardImg}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-extrabold text-blue-900 bg-white/95 border border-slate-200 px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
                        {service.category}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-bold text-white bg-blue-600 px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                        <Clock className="w-3 h-3 text-white" />
                        {service.estimatedTime}
                      </span>
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-6">
                    <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-4 font-medium line-clamp-2">
                      {service.shortDesc}
                    </p>

                    <div className="space-y-1.5 mb-4">
                      {service.whatWeRepair.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action CTAs */}
                <div className="p-6 pt-0 border-t border-slate-100 grid grid-cols-2 gap-2 mt-auto">
                  <button
                    onClick={() => onOpenServiceDetail(service)}
                    className="py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-center cursor-pointer transition-colors"
                  >
                    Learn More
                  </button>

                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 text-center cursor-pointer shadow-sm transition-colors"
                  >
                    Book Fix
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 shadow-sm">
            <p className="text-slate-500 text-sm font-medium">No services found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-3 text-xs font-bold text-blue-600 underline"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
