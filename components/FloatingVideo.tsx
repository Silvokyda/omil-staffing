"use client";

import React, { useEffect, useState } from 'react';

const FloatingVideo = () => {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const hasClosed = localStorage.getItem('videoClosed');
    if (hasClosed === 'true') {
      setIsFloating(false);
    } else {
      const handleScroll = () => {
        const bottomThreshold = window.innerHeight * 0.2; 
        const isPastThreshold = window.scrollY > bottomThreshold;
        setIsFloating(isPastThreshold);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const handleClose = () => {
    setIsFloating(false);
    localStorage.setItem('videoClosed', 'true');
  };

  return (
    <div className={`fixed bottom-0 right-0 ${isFloating ? 'right-0' : ''} mb-4 ml-4 z-50`}>
      {isFloating && (
        <div className="relative">
          <button className="absolute -top-5 right-0 p-2 text-white" onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/hEBlP1vMS2Y?si=XCL-491P4CzPr88u&modestbranding=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default FloatingVideo;
