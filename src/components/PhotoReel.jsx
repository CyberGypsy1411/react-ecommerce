import React from 'react';
import './PhotoReel.css';

function PhotoReel() {
  const photos = [
    "/photos/photos1.jpg",
    "/photos/photos2.jpg",
    "/photos/photos3.jpg",
    "/photos/photos4.jpg",
    "/photos/photos5.jpg"
    // Add your couple photos in public/photos
  ];

  return (
    <div className="photo-reel">
      <h2>📸 Our Memories</h2>
      <div className="carousel">
        {photos.map((src, index) => (
          <img key={index} src={src} alt={`memory-${index}`} className="reel-photo" />
        ))}
      </div>
    </div>
  );
}

export default PhotoReel;
