import React from 'react';

const Partners = () => {
  const partnerImages = [
    '../partner1.jpg',
    '../partner2.jpg',
    '../partner3.jpg',
    '../partner4.jpg',
  ];

  return (
    <div className="flex justify-center space-x-4 mt-8">
      {partnerImages.map((image, index) => (
        <img key={index} src={image} alt={`Partner ${index + 1}`} className="h-24 w-auto" />
      ))}
    </div>
  );
};

export default Partners;
