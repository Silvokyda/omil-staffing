import React from 'react';

const Partners = () => {
  const partnerImages = [
    '../patner1.jpg',
    '../patner2.jpg',
    '../patner3.jpg',
    '../patner4.jpg',
  ];

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-3xl font-bold mb-4 text-black">Our Partners</h2>
      <div className="grid grid-cols-4 gap-4">
        {partnerImages.map((image, index) => (
          <img key={index} src={image} alt={`Partner ${index + 1}`} className="h-24 w-auto" />
        ))}
      </div>
    </div>
  );
};

export default Partners;
