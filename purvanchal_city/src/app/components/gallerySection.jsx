import { useState, useEffect } from 'react';

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Sample images - replace with your own
  const images = [
    {
      url: "/img$.jpg",
      title: "Mountain Lake",
      description: "Serene mountain lake at sunset"
    },
    {
      url: "/img2.jpg",
      title: "Ocean View",
      description: "Waves crashing on rocky shore"
    },
    {
      url: "/img3.jpg",
      title: "Forest Path",
      description: "Misty morning in the forest"
    },
    {
      url: "/img5.jpg",
      title: "Desert Dunes",
      description: "Golden sand dunes at dawn"
    },
    {
        url: "/img6.jpg",
        title: "Desert Dunes",
        description: "Golden sand dunes at dawn"
      }
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match this with animation duration

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mx-auto overflow-hidden rounded-lg shadow-xl">
      {/* Main image container */}
      <div className="relative h-[400px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transform transition-all duration-500 ease-in-out
              ${index === currentIndex 
                ? 'translate-x-0 opacity-100' 
                : index < currentIndex 
                  ? '-translate-x-full opacity-0' 
                  : 'translate-x-full opacity-0'
              }`}
          >
            <img
              src={image.url}
              alt={image.title}
              className="object-cover w-full h-full"
            />
            {/* Caption */}
            <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-xl font-semibold text-white">{image.title}</h3>
              <p className="text-sm text-gray-200">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 
              ${index === currentIndex 
                ? 'bg-white w-4' 
                : 'bg-white/50 hover:bg-white/75'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;