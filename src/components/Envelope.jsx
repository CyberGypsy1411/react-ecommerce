import React, { useState, useRef, useEffect } from 'react';
import Letter from './Letter';
import PhotoReel from './PhotoReel';
import './Envelope.css';

function Envelope() {
  const [opened, setOpened] = useState(null); // 'letter' or 'photos'
  const audioRef = useRef(null);

  useEffect(() => {
    if (opened && audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log("Autoplay blocked:", err);
      });
    }
  }, [opened]);

  return (
    <div className="envelope-container">
      {!opened && (
        <>
          <div className="envelope" onClick={() => setOpened('letter')}>
            💌 Click to Open
          </div>
          <div className="envelope photos" onClick={() => setOpened('photos')}>
            📸 View Memories
          </div>
        </>
      )}

      {opened === 'letter' && <Letter />}
      {opened === 'photos' && <PhotoReel />}

      {/* 🎶 Background Music */}
      {opened && (
        <audio ref={audioRef} loop>
          <source src="/Perfect.mp3" type="audio/mpeg" />
        </audio>
      )}
    </div>
  );
}

export default Envelope;
