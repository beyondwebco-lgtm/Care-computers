import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ShieldCheck, Search } from 'lucide-react';

import { COMPANY_INFO } from '../data/careData';

interface NavbarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  onOpenBooking: (serviceName?: string) => void;
  onOpenWarranty: () => void;
  onOpenTracking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  setActiveView,
  onOpenBooking,
  onOpenWarranty,
  onOpenTracking
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'brands', label: 'Brands' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'locations', label: 'Locations' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (viewId: string) => {
    setActiveView(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <>
      {/* Sticky Light Navbar */}

      <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'glass-nav py-3 shadow-md' : 'bg-white/95 backdrop-blur-md py-4 border-b border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left cursor-pointer group"
          >
            <div className="h-10 px-1 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform overflow-hidden">
              <img
                src="/images/logo.png"
                alt="Care Computers Logo"
                className="h-9 w-auto object-contain rounded-lg"
              />
            </div>
            <div>
              <div className="font-extrabold text-lg sm:text-xl tracking-wider text-slate-900 flex items-center gap-1">
                CARE <span className="text-blue-600">COMPUTERS</span>
              </div>
              <div className="text-[10px] text-slate-500 tracking-widest font-semibold uppercase">
                Secunderabad • Hyderabad
              </div>
            </div>
          </button>


          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100 p-1.5 rounded-full border border-slate-200">
            {navItems.map((item) => {
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/80'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>Call Now</span>
            </a>
            
            <button
              onClick={() => onOpenBooking()}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-md shadow-blue-600/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Book a Repair</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-slate-100 text-slate-800 border border-slate-300 hover:bg-slate-200 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                    activeView === item.id
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-3 border-t border-slate-200 flex flex-col gap-2 mt-2">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenTracking(); }}
                  className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-100 text-xs font-bold text-blue-700 border border-slate-200"
                >
                  <span className="flex items-center gap-2"><Search className="w-4 h-4" /> Track Repair Status</span>
                  <span className="text-[10px] bg-blue-100 px-2 py-0.5 rounded text-blue-800">Live</span>
                </button>
                
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenWarranty(); }}
                  className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-100 text-xs font-bold text-cyan-700 border border-slate-200"
                >
                  <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Check Warranty</span>
                  <span className="text-[10px] bg-cyan-100 px-2 py-0.5 rounded text-cyan-800">Verify</span>
                </button>

                <div className="grid grid-cols-2 gap-2 mt-2">
                  <a
                    href={`tel:${COMPANY_INFO.primaryPhone}`}
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 text-xs font-bold text-slate-800 border border-slate-300"
                  >
                    <Phone className="w-4 h-4 text-blue-600" />
                    Call Now
                  </a>
                  <button
                    onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
                    className="py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-xs font-bold text-white shadow-md"
                  >
                    Book Repair
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
