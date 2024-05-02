import React from 'react';
import Image from 'next/image'
import {partners} from "@/data/partners";

const Partners = () => {

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-3xl font-bold mb-4 text-black">Our Partners</h2>
      <div className="grid grid-cols-4 gap-4">
        {partners.map((partner) => (
          <Image key={partner.id} src={partner.imageUrl} alt={partner.name} className="h-24 w-auto" />
        ))}
      </div>
    </div>
  );
};

export default Partners;
