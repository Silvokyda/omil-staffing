import React from 'react';
import Header from '../components/Header';
import ServiceCarousel from '../components/ServiceCarousel';

export default function Home() {
  return (
    <div>
      <Header /> 
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ServiceCarousel />
      </main>
    </div>
  );
}
