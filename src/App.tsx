import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { MobileStickyActionBar } from './components/MobileStickyActionBar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { ProblemFinder } from './components/ProblemFinder';
import { FeaturedServices } from './components/FeaturedServices';
import { ServicesPage } from './components/ServicesPage';
import { HowItWorks } from './components/HowItWorks';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BrandsWeService } from './components/BrandsWeService';
import { DellServiceSection } from './components/DellServiceSection';
import { DataRecoverySection } from './components/DataRecoverySection';
import { BusinessITSupport } from './components/BusinessITSupport';
import { FreePickupDelivery } from './components/FreePickupDelivery';
import { PromotionalBookingSection } from './components/PromotionalBookingSection';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { AboutView } from './components/AboutView';
import { LocationsView } from './components/LocationsView';
import { Footer } from './components/Footer';
import { FloatingActionButtons } from './components/FloatingActionButtons';
import { BookingModal } from './components/BookingModal';
import { WarrantyCheckModal } from './components/WarrantyCheckModal';
import { RepairTrackingModal } from './components/RepairTrackingModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { SEOMeta } from './components/SEOMeta';
import type { ServiceItem } from './types';

export function App() {
  const [activeView, setActiveView] = useState<string>('home');

  // Modals state
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingService, setBookingService] = useState<string>('');
  const [isWarrantyOpen, setIsWarrantyOpen] = useState<boolean>(false);
  const [isTrackingOpen, setIsTrackingOpen] = useState<boolean>(false);
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);

  useEffect(() => {
    document.documentElement.className = 'light scroll-smooth';
  }, []);

  const handleOpenBooking = (serviceName: string = '') => {
    setBookingService(serviceName);
    setIsBookingOpen(true);
  };

  const handleOpenServiceDetail = (service: ServiceItem) => {
    setSelectedServiceDetail(service);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      <SEOMeta />

      {/* Navigation */}
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenBooking={handleOpenBooking}
        onOpenWarranty={() => setIsWarrantyOpen(true)}
        onOpenTracking={() => setIsTrackingOpen(true)}
      />

      {/* Main Content Body based on Active View */}
      <main className="flex-grow">
        {activeView === 'home' && (
          <>
            <Hero onOpenBooking={handleOpenBooking} />
            <TrustStats />
            <ProblemFinder onOpenBooking={handleOpenBooking} />
            <FeaturedServices
              onOpenBooking={handleOpenBooking}
              onOpenServiceDetail={handleOpenServiceDetail}
              onViewAllServices={() => setActiveView('services')}
            />
            <HowItWorks onOpenBooking={() => handleOpenBooking()} />
            <WhyChooseUs onOpenBooking={() => handleOpenBooking()} />
            <BrandsWeService onOpenBooking={handleOpenBooking} />
            <DellServiceSection onOpenBooking={handleOpenBooking} />
            <DataRecoverySection onOpenBooking={handleOpenBooking} />
            <BusinessITSupport onOpenBooking={handleOpenBooking} />
            <FreePickupDelivery onOpenBooking={handleOpenBooking} />
            <PromotionalBookingSection />
            <Testimonials />
            <FAQSection onOpenBooking={() => handleOpenBooking()} />
          </>
        )}

        {activeView === 'services' && (
          <ServicesPage
            onOpenBooking={handleOpenBooking}
            onOpenServiceDetail={handleOpenServiceDetail}
          />
        )}

        {activeView === 'about' && (
          <AboutView onOpenBooking={() => handleOpenBooking()} />
        )}

        {activeView === 'locations' && (
          <LocationsView onOpenBooking={() => handleOpenBooking()} />
        )}

        {activeView === 'brands' && (
          <div className="pt-8">
            <BrandsWeService onOpenBooking={handleOpenBooking} />
            <DellServiceSection onOpenBooking={handleOpenBooking} />
          </div>
        )}

        {activeView === 'how-it-works' && (
          <div className="pt-8">
            <HowItWorks onOpenBooking={() => handleOpenBooking()} />
            <WhyChooseUs onOpenBooking={() => handleOpenBooking()} />
            <FreePickupDelivery onOpenBooking={handleOpenBooking} />
            <FAQSection onOpenBooking={() => handleOpenBooking()} />
          </div>
        )}

        {activeView === 'contact' && (
          <div className="pt-8">
            <PromotionalBookingSection />
            <LocationsView onOpenBooking={() => handleOpenBooking()} />
          </div>
        )}

      </main>

      {/* Footer */}
      <Footer
        setActiveView={setActiveView}
        onOpenWarranty={() => setIsWarrantyOpen(true)}
        onOpenTracking={() => setIsTrackingOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Floating Buttons & Mobile Action Bar */}
      <FloatingActionButtons />
      <MobileStickyActionBar onOpenBooking={() => handleOpenBooking()} />

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={bookingService}
      />

      <WarrantyCheckModal
        isOpen={isWarrantyOpen}
        onClose={() => setIsWarrantyOpen(false)}
      />

      <RepairTrackingModal
        isOpen={isTrackingOpen}
        onClose={() => setIsTrackingOpen(false)}
      />

      <ServiceDetailModal
        service={selectedServiceDetail}
        onClose={() => setSelectedServiceDetail(null)}
        onOpenBooking={handleOpenBooking}
      />
    </div>
  );
}

export default App;
