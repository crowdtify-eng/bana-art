'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import SocialProof from '@/components/social-proof';
import About from '@/components/about';
import Achievements from '@/components/achievements';
import Services from '@/components/services';
import BeforeAfter from '@/components/before-after';
import Process from '@/components/process';
import Gallery from '@/components/gallery';
import Testimonials from '@/components/testimonials';
import CTA from '@/components/cta';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import WhatsAppButton from '@/components/whatsapp-button';
import LocationSection from '@/components/location-section';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-background">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <SocialProof />
      <About />
      <Achievements />
      <Services />
      <BeforeAfter />
      <Process />
      <Gallery />
      <Testimonials />
      <CTA />
      <Contact />
      <LocationSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
