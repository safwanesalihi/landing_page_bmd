
imporimport { HeroSection } from '@/components/HeroSection';
import { FastDeliverySection } from '@/components/FastDeliverySection';
import { CompleteServiceSection } from '@/components/CompleteServiceSection';
import { SmartPickupSection } from '@/components/SmartPickupSection';
import { FreeStorageSection } from '@/components/FreeStorageSection';
import { FreeReturnsSection } from '@/components/FreeReturnsSection';
import { FastPaymentSection } from '@/components/FastPaymentSection';
import { VipOfferSection } from '@/components/VipOfferSection';
import { ClosingSection } from '@/components/ClosingSection';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Reveal animation on scroll
    const revealElements = () => {
      const elements = document.querySelectorAll('.reveal-animation');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });
    };
    window.addEventListener('scroll', revealElements);
    revealElements(); // Check on initial load
    return () => window.removeEventListener('scroll', revealElements);
  }, []);
  
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header 
        logo="/lovable-uploads/8c72fa9f-b89f-4f24-b01b-26af98158e11.png" 
        logoAlt="BMD Logo" 
      />
      <HeroSection />
      <FastDeliverySection />
      <CompleteServiceSection />
      <SmartPickupSection />
      <FreeStorageSection />
      <FreeReturnsSection />
      <FastPaymentSection />
      <VipOfferSection />
      <ClosingSection />
      <Footer 
        logo="/lovable-uploads/8c72fa9f-b89f-4f24-b01b-26af98158e11.png" 
        logoAlt="BMD Logo" 
      />
    </div>
  );
};

export default Index;
