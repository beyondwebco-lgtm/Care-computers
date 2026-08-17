import React from 'react';
import { COMPANY_INFO } from '../data/careData';
import { Phone, MessageSquare, ShieldCheck, Search, Navigation } from 'lucide-react';


interface FooterProps {
  setActiveView: (view: string) => void;
  onOpenWarranty: () => void;
  onOpenTracking: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveView,
  onOpenWarranty,
  onOpenTracking,
  onOpenBooking
}) => {
  const handleNav = (viewId: string) => {
    setActiveView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Grid - 6 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 px-1 rounded-xl bg-amber-950/80 border border-amber-500/30 flex items-center justify-center shadow-md overflow-hidden">
                <img
                  src="/images/logo.png"
                  alt="Care Computers Official Logo"
                  className="h-9 w-auto object-contain rounded-lg"
                />
              </div>
              <div>
                <span className="font-black text-lg tracking-wider text-white">
                  CARE <span className="text-blue-400">COMPUTERS</span>
                </span>
                <p className="text-[10px] text-slate-400 tracking-widest font-semibold uppercase">Secunderabad • Hyderabad</p>
              </div>
            </div>


            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              Professional Laptop Repair, Data Recovery &amp; IT Support in Secunderabad &amp; Hyderabad. Serving customers with certified engineers and transparent service since 1998.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-1">
              <p className="text-white font-extrabold">{COMPANY_INFO.tagline}</p>
              <p className="text-cyan-400 font-semibold">{COMPANY_INFO.positioning}</p>
            </div>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-2">
              Key Services
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><button onClick={() => handleNav('services')} className="hover:text-white transition-colors">Screen Replacement</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-white transition-colors">Motherboard Repair</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-white transition-colors">Hard Drive Data Recovery</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-white transition-colors">SSD &amp; RAM Upgrades</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-white transition-colors">OS Installation</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-white transition-colors">Battery Replacement</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-white transition-colors">Keyboard Repair</button></li>
            </ul>
          </div>

          {/* Col 4: Brands */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-cyan-500 pl-2">
              Brands Serviced
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><button onClick={() => handleNav('brands')} className="hover:text-white transition-colors">Dell Laptop Service</button></li>
              <li><button onClick={() => handleNav('brands')} className="hover:text-white transition-colors">HP Laptop Repair</button></li>
              <li><button onClick={() => handleNav('brands')} className="hover:text-white transition-colors">Lenovo ThinkPad / Legion</button></li>
              <li><button onClick={() => handleNav('brands')} className="hover:text-white transition-colors">Apple MacBook Pro / Air</button></li>
              <li><button onClick={() => handleNav('brands')} className="hover:text-white transition-colors">Asus ROG / ZenBook</button></li>
              <li><button onClick={() => handleNav('brands')} className="hover:text-white transition-colors">Acer Aspire / Nitro</button></li>
              <li><button onClick={() => handleNav('brands')} className="hover:text-white transition-colors">Sony VAIO / Samsung</button></li>
            </ul>
          </div>

          {/* Col 5: Navigation & Support */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              Company &amp; Tools
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><button onClick={() => handleNav('home')} className="hover:text-white transition-colors">Home Page</button></li>
              <li><button onClick={() => handleNav('about')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-white transition-colors">All 30 Services</button></li>
              <li><button onClick={() => handleNav('locations')} className="hover:text-white transition-colors">Store Location</button></li>
              <li><button onClick={onOpenWarranty} className="text-blue-400 font-bold hover:underline flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5" /> Warranty Check</button></li>
              <li><button onClick={onOpenTracking} className="text-cyan-400 font-bold hover:underline flex items-center gap-1"><Search className="w-3.5 h-3.5" /> Track Repair</button></li>
              <li><button onClick={onOpenBooking} className="hover:text-white transition-colors">Book a Repair</button></li>
            </ul>
          </div>

          {/* Col 6: Direct Contact */}
          <div className="space-y-3 text-xs">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2">
              Secunderabad Office
            </h4>
            <p className="text-slate-200 font-bold text-xs">{COMPANY_INFO.address.building}</p>
            <p className="font-medium">{COMPANY_INFO.address.street}, {COMPANY_INFO.address.city} {COMPANY_INFO.address.zip}</p>

            <div className="pt-2 space-y-1.5 font-medium">
              <a href={`tel:${COMPANY_INFO.primaryPhone}`} className="flex items-center gap-2 text-white font-extrabold hover:text-cyan-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>+91 92463 79771</span>
              </a>

              <a href="tel:+914066382253" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>+91 40 6638 2253</span>
              </a>

              <a href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-emerald-400 font-semibold hover:underline">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Us</span>
              </a>

              <a href="https://maps.google.com/?q=Chenoy+Trade+Centre+Secunderabad" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-400 hover:underline">
                <Navigation className="w-3.5 h-3.5" />
                <span>Google Maps Directions</span>
              </a>
            </div>
          </div>

        </div>

        {/* Local SEO Keywords Tag Wall */}
        <div className="py-6 border-b border-slate-800">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Local Service Coverage:</p>
          <div className="flex flex-wrap gap-2 text-[11px] text-slate-400 font-medium">
            <span className="bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700">Laptop Repair Hyderabad</span>
            <span className="bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700">Laptop Repair Secunderabad</span>
            <span className="bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700">Computer Repair Hyderabad</span>
            <span className="bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700">Laptop Service Center Secunderabad</span>
            <span className="bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700">MacBook Repair Hyderabad</span>
            <span className="bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700">Dell Laptop Repair Hyderabad</span>
            <span className="bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700">HP Laptop Repair</span>
            <span className="bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700">Lenovo Laptop Repair</span>
            <span className="bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700">Data Recovery Hyderabad</span>
            <span className="bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700">Laptop Screen Replacement Hyderabad</span>
            <span className="bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700">Laptop Motherboard Repair</span>
            <span className="bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700">OS Installation Hyderabad</span>
          </div>
        </div>

        {/* Bottom Tagline & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium">
          <p className="text-white font-bold">
            Professional Laptop &amp; Computer Repair Since 1998
          </p>
          <p className="text-slate-400">
            © {new Date().getFullYear()} CARE COMPUTERS. All rights reserved. CTC Complex, Parklane, Secunderabad.
          </p>
        </div>

      </div>
    </footer>
  );
};
