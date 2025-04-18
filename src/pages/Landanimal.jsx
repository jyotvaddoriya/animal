import React, { useState } from 'react';
import './Snakes.css';

// Updated images for Land Animals
const landAnimals = [
  { src: '/src/images/l1.jpg', info: 'Land Animal 1: Description about land animal 1' },
  { src: '/src/images/l2.jpg', info: 'Land Animal 2: Description about land animal 2' },
  { src: '/src/images/l3.jpg', info: 'Land Animal 3: Description about land animal 3' },
  { src: '/src/images/l4.jpg', info: 'Land Animal 4: Description about land animal 4' },
  { src: '/src/images/l5.jpg', info: 'Land Animal 5: Description about land animal 5' },
  { src: '/src/images/l6.jpg', info: 'Land Animal 6: Description about land animal 6' },
  { src: '/src/images/l7.jpg', info: 'Land Animal 7: Description about land animal 7' },
  { src: '/src/images/l8.jpg', info: 'Land Animal 8: Description about land animal 8' },
];

const LandAnimals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to next image (looping behavior)
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % landAnimals.length);
  };

  // Function to move to previous image (looping behavior)
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? landAnimals.length - 1 : prevIndex - 1));
  };

  return (
    <div className="land-animal-slider-container">
      <div className="slider">
        {landAnimals.map((animal, index) => (
          <div
            key={index}
            className={`slider-item ${index === currentIndex ? 'active' : ''}`}
            style={{
              transform: `rotateY(${(index - currentIndex) * 45}deg) translateZ(500px)`,
            }}
          >
            <img src={animal.src} alt={`Land Animal ${index + 1}`} />
            <div className="slider-info">
              <p>{animal.info}</p>
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

export default LandAnimals;
