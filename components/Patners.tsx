import React from 'react';

const Partners = () => {
  const partnerImages = [
    '../patner1.jpg',
    '../patner2.jpg',
    '../patner3.jpg',
    '../patner4.jpg',
  ];

  return (
    <div className="flex justify-center space-x-4 mt-8">
        <h2 className="text-3xl font-bold mb-10 text-white ">Our Partners</h2>
      {partnerImages.map((image, index) => (
        <img key={index} src={image} alt={`Partner ${index + 1}`} className="h-24 w-auto" />
      ))}
    </div>
  );
};

export default Partners;
