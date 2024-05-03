import React from 'react';
import ServiceCarousel from '../components/ServiceCarousel';
import WhyOmil from '../components/WhyOmil';
import Founder from '../components/Founder';
import FloatingVideo from '../components/FloatingVideo';
import Partners from '@/components/Patners';
import Hero from "@/components/Hero";
import ProductPitch from "@/components/ProductPitch";
import HowItWorks from "@/components/HowItWorks";
import HiringTrends from "@/components/HiringTrends";
import FindTalent from "@/components/FindTalent";
import ConsultingSolutions from "@/components/ConsoltingSolutions";
import CareerMove from "@/components/CareerMove";


export default function Home() {
  return (
    <div>
      <main className="flex w-full min-h-screen flex-col items-center justify-between">
          <Hero />
          <ProductPitch />
          <HowItWorks />
          <HiringTrends />
          <FindTalent />
          <ConsultingSolutions />
          <CareerMove />
        {/*<ServiceCarousel />*/}
        {/*<WhyOmil />*/}
        {/*<Founder />*/}
        <FloatingVideo />
        {/*<Partners />*/}
      </main>
    </div>
  );
}
