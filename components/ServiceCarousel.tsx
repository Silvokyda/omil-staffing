"use client";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Services = [
  {
    title: 'Service 1',
    image: 'https://s7d9.scene7.com/is/image/roberthalfintl/h5_1477775195_5000x1880:Large-1x?ox&fmt=webp-alpha',
    description: 'Description of Service 1',
  },
  {
    title: 'Service 2',
    image: 'https://s7d9.scene7.com/is/image/roberthalfintl/rt1-1895357617?$Rectangle1-Large-1x$&fmt=webp-alpha',
    description: 'Description of Service 2',
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ServiceCarousel = () => {
  return (
    <section className="w-full">
      <Slider {...settings}>
        {Services.map((service, index) => (
          <div key={index} className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${service.image})` }}>
            <div className="absolute inset-0 opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ServiceCarousel;
