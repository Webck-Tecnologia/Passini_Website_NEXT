import { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageModal = ({ images, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        navigateImage(-1);
      } else if (event.key === 'ArrowRight') {
        navigateImage(1);
      } else if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'visible';
    };
  }, [isOpen, onClose]);

  const navigateImage = (direction) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex < 0) return images.length - 1;
      if (newIndex >= images.length) return 0;
      return newIndex;
    });
  };

  if (!isOpen || images.length === 0) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm">
      <div className="relative w-4/5 h-4/5 bg-white rounded-lg overflow-hidden">
        <button
          className="absolute top-4 right-4 text-gray-800 text-3xl z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition-colors"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        <button
          className="absolute top-1/2 left-4 text-white text-4xl transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition-colors"
          onClick={() => navigateImage(-1)}
        >
          &#8249;
        </button>
        <button
          className="absolute top-1/2 right-4 text-white text-4xl transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition-colors"
          onClick={() => navigateImage(1)}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
