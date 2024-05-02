import React from 'react';
import ServiceCarousel from '../components/ServiceCarousel';
import WhyOmil from '../components/WhyOmil';
import Founder from '../components/Founder';
import FloatingVideo from '../components/FloatingVideo';
import Partners from '@/components/Patners';
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <div>
      <main className="flex w-full min-h-screen flex-col items-center justify-between">
          <Hero />
        {/*<ServiceCarousel />*/}
        <WhyOmil />
        <Founder />
        <FloatingVideo />
        <Partners />
      </main>
    </div>
  );
}
