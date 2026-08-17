import React, { useEffect } from 'react';
import { COMPANY_INFO } from '../data/careData';

export const SEOMeta: React.FC = () => {
  useEffect(() => {
    // Inject LocalBusiness JSON-LD Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "ComputerRepairService",
      "name": "CARE COMPUTERS",
      "image": "https://carecomputers.co.in/logo.png",
      "telephone": COMPANY_INFO.primaryPhone,
      "email": COMPANY_INFO.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "CTC Complex / Chenoy Trade Centre, Parklane",
        "addressLocality": "Secunderabad",
        "addressRegion": "Telangana",
        "postalCode": "500003",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 17.446585,
        "longitude": 78.489116
      },
      "url": "https://carecomputers.co.in",
      "priceRange": "₹₹",
      "foundingDate": "1998",
      "description": "Professional Laptop Repair, Data Recovery & IT Support in Hyderabad & Secunderabad since 1998.",
      "areaServed": ["Secunderabad", "Hyderabad", "Telangana"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Computer & Laptop Repair Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Laptop Screen Replacement"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Laptop Motherboard Repair"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Hard Drive Data Recovery"
            }
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'jsonld-care-computers';
    script.text = JSON.stringify(localBusinessSchema);

    const existing = document.getElementById('jsonld-care-computers');
    if (existing) {
      existing.remove();
    }
    document.head.appendChild(script);

    return () => {
      const elem = document.getElementById('jsonld-care-computers');
      if (elem) elem.remove();
    };
  }, []);

  return null;
};
