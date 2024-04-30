import React from 'react';

const Services = [
  {
    title: 'Resume Services',
    image: 'https://s7d9.scene7.com/is/image/roberthalfintl/h5_1477775195_5000x1880:Large-1x?ox&fmt=webp-alpha',
    description: 'Description of Service 1',
    link: '#', // Add the link for "Read More"
  },
];

const ServiceImage = ({ service }: { service: typeof Services[0] }) => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover' }}>
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
        <p className="text-lg mb-6">{service.description}</p>
        <a href={service.link} className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300">Read More</a>
      </div>
    </div>
  );
};

const ServiceCarousel = () => {
  return (
    <section className="w-full h-1/2">
      {Services.map((service, index) => (
        <ServiceImage key={index} service={service} />
      ))}
    </section>
  );
};

export default ServiceCarousel;