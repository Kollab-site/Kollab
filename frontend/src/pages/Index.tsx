
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';
import OurApproach from '@/components/home/OurApproach';
import AuthModal from '@/components/auth/AuthModal';

const Index = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authType, setAuthType] = useState<'signin' | 'signup'>('signin');

  const openAuthModal = (type: 'signin' | 'signup') => {
    setAuthType(type);
    setShowAuthModal(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <OurApproach />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      
      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        defaultTab={authType}
      />
    </div>
  );
};

export default Index;
