import React, { useState } from 'react';
import './Reptiles.css';

const images = [
  { src: '/src/assets/images/reptile1.jpg', info: 'Reptile 1 Info: Description about reptile 1' },
  { src: '/src/assets/images/reptile2.jpg', info: 'Reptile 2 Info: Description about reptile 2' },
  { src: '/src/assets/images/reptile3.jpg', info: 'Reptile 3 Info: Description about reptile 3' },
  { src: '/src/assets/images/reptile4.jpg', info: 'Reptile 4 Info: Description about reptile 4' },
  { src: '/src/assets/images/reptile5.jpg', info: 'Reptile 5 Info: Description about reptile 5' },
  { src: '/src/assets/images/reptile6.jpg', info: 'Reptile 6 Info: Description about reptile 6' },
  { src: '/src/assets/images/reptile7.jpg', info: 'Reptile 7 Info: Description about reptile 7' },
  { src: '/src/assets/images/reptile8.jpg', info: 'Reptile 8 Info: Description about reptile 8' },
];

const Reptiles = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to next image (looping behavior)
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to move to previous image (looping behavior)
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="reptile-slider-container">
      <div className="slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slider-item ${index === currentIndex ? 'active' : ''}`}
            style={{
              transform: `rotateY(${(index - currentIndex) * 45}deg) translateZ(500px)`,
            }}
          >
            <img src={image.src} alt={`Reptile ${index + 1}`} />
            <div className="slider-info">
              <p>{image.info}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="controls">
        <button className="arrow-btn prev" onClick={prevImage}>
          &#10094; {/* Left arrow */}
        </button>
        <button className="arrow-btn next" onClick={nextImage}>
          &#10095; {/* Right arrow */}
        </button>
      </div>
    </div>
  );
};

export default Reptiles;
