import React, { useRef, useEffect } from 'react';
import Letter from './components/Letter';
import PhotoReel from './components/PhotoReel';
import ForgiveButton from './components/ForgiveButton';
import './App.css';

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log("Autoplay blocked:", err);
      });
    }
  }, []);

  return (
    <div className="app barbie-theme" >
      <h1>🌸 My Sorry Note 💖</h1>

      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source src="/Perfect.mp3" type="audio/mpeg" />
      </audio>

      <Letter />
      <PhotoReel />
      <ForgiveButton />
    </div>
  );
}

export default App;
