import React from 'react';
import Image from 'next/image';

const WhyOmil = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4 mt-8 lg:p-24">
      <div className="flex-shrink-0 w-full lg:w-1/3 order-2 lg:order-1">
        <Image src="./why.png" alt="Image" className="w-full" width={100} height={100} />
      </div>
      <div className="flex-1 order-2 lg:order-2 p-8">
        <h2 className="text-xl font-bold mb-2">Why Omil?</h2>
        <p className="text-gray-700 mb-4">Having a specialty has made us experts at developing flexible staffing solutions that ensure a smooth and efficient recruitment process. Whether you need temporary staff for immediate openings or are looking to fill a long-term position, our people deliver.</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors duration-300">Read More</button>
      </div>
    </div>
  );
};

export default WhyOmil;