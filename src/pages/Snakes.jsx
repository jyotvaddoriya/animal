import React, { useState } from 'react';
import './Landanimal.css';

// Updated images for Snakes
const snakes = [
  { src: '/src/images/s1.jpg', info: 'Snake 1: Description about snake 1' },
  { src: '/src/images/s2.jpg', info: 'Snake 2: Description about snake 2' },
  { src: '/src/images/s3.jpg', info: 'Snake 3: Description about snake 3' },
  { src: '/src/images/s4.jpg', info: 'Snake 4: Description about snake 4' },
  { src: '/src/images/s5.jpg', info: 'Snake 5: Description about snake 5' },
  { src: '/src/images/s6.jpg', info: 'Snake 6: Description about snake 6' },
  { src: '/src/images/s7.jpg', info: 'Snake 7: Description about snake 7' },
  { src: '/src/images/s8.jpg', info: 'Snake 8: Description about snake 8' },
];

const Snakes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to next image (looping behavior)
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % snakes.length);
  };

  // Function to move to previous image (looping behavior)
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? snakes.length - 1 : prevIndex - 1));
  };

  return (
    <div className="snake-slider-container">
      <div className="slider">
        {snakes.map((snake, index) => (
          <div
            key={index}
            className={`slider-item ${index === currentIndex ? 'active' : ''}`}
            style={{
              transform: `rotateY(${(index - currentIndex) * 45}deg) translateZ(500px)`,
            }}
          >
            <img src={snake.src} alt={`Snake ${index + 1}`} />
            <div className="slider-info">
              <p>{snake.info}</p>
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

export default Snakes;
