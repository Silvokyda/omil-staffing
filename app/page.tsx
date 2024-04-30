import React from 'react';
import Header from '../components/Header';
import ServiceCarousel from '../components/ServiceCarousel';
import WhyOmil from '../components/WhyOmil';
import Founder from '../components/Founder';
import FloatingVideo from '../components/FloatingVideo';
import Partners from '@/components/Patners';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <div>
      <Header /> 
      <main className="flex w-full min-h-screen flex-col items-center justify-between">
        <ServiceCarousel />
        <WhyOmil />
        <Founder />
        <FloatingVideo />
        <Partners />
        <Footer />
        
      </main>
    </div>
  );
}
