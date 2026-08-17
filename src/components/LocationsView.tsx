import React from 'react';
import { COMPANY_INFO } from '../data/careData';
import { MapPin, Phone, MessageSquare, Mail, Navigation, ExternalLink, Building2 } from 'lucide-react';

interface LocationsViewProps {
  onOpenBooking?: () => void;
}

export const LocationsView: React.FC<LocationsViewProps> = () => {
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-4 h-4" />
            <span>Store Location</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Visit Our Secunderabad Service Center
          </h1>

          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Located in Chenoy Trade Centre (CTC Complex), Parklane — the primary computer market hub of Hyderabad and Secunderabad.
          </p>
        </div>

        {/* Grid Location Info + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Address & Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-extrabold text-slate-900">Care Computers</h2>
                  <p className="text-xs text-slate-500 font-medium">Computer Repair &amp; IT Service Hub</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-600 mb-6 font-medium">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{COMPANY_INFO.address.building}</p>
                    <p>{COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}</p>
                    <p>{COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}, {COMPANY_INFO.address.country}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                  <Phone className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-slate-900 text-xs">Mobile / WhatsApp:</p>
                    <p className="text-sm font-extrabold text-blue-700">{COMPANY_INFO.primaryPhone}</p>
                    <p className="font-bold text-slate-900 text-xs mt-2">Landlines:</p>
                    <p className="text-slate-600">{COMPANY_INFO.landlines.join(" / ")}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <Mail className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900 text-xs">Email Address:</p>
                    <p className="text-slate-600">{COMPANY_INFO.email}</p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${COMPANY_INFO.primaryPhone}`}
                  className="py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Store</span>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20Care%20Computers,%20I%20am%20coming%20to%20your%20Secunderabad%20store`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <a
                href="https://maps.google.com/?q=Chenoy+Trade+Centre+Secunderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <Navigation className="w-4 h-4 text-blue-600" />
                <span>Open Google Maps Directions</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

            </div>

          </div>

          {/* Embedded Google Map Frame */}
          <div className="lg:col-span-7">
            <div className="w-full h-full min-h-[420px] rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl relative">
              <iframe
                title="Care Computers CTC Complex Secunderabad Location"
                src={COMPANY_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-3xl"
              ></iframe>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
