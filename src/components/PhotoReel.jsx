import React from 'react';
import './PhotoReel.css';

function PhotoReel() {
  const photos = [
    "/photos/photo1.jpg",
    "/photos/photo2.jpg",
  ];

  return (
    <div className="photo-reel">
      <h2>Our Memories 📸</h2>
      <div className="carousel">
        {photos.map((src, index) => (
          <img key={index} src={src} alt={`memory-${index}`} className="reel-photo" />
        ))}
      </div>
    </div>
  );
}

export default PhotoReel;
