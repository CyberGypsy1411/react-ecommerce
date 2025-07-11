import React, { useRef, useState } from 'react';
import Letter from './components/Letter';
import ForgiveButton from './components/ForgiveButton';
import './App.css';

function App() {
  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);

  // useEffect(() => {
  //   if (audioRef.current) {
  //     audioRef.current.play().catch((err) => {
  //       console.log("Autoplay blocked:", err);
  //     });
  //   }
  // }, []);

 const handleStart = () => {
  setStarted(true);
  if (audioRef.current) {
    audioRef.current.currentTime = 25; // Start from 23 seconds
    audioRef.current.play();
  }
};

 return (
  <div className="app barbie-theme">
    {/* Audio tag */}
    <audio ref={audioRef} loop>
      <source src="/song.mp3" type="audio/mpeg" />
    </audio>

    {!started ? (
      <div className="start-screen">
        <h2>Moti Thara liye ek letter hai…</h2>
        <button className="start-button" onClick={handleStart}>
          💖 Tap to Begin
        </button>
      </div>
    ) : (
      <>
        <h1>🌸 Sirf or sirf Khusboo ka liye 💖</h1>
        <Letter />
        {/* <PhotoReel /> */}
        <ForgiveButton />
      </>
    )}
  </div>
);

}

export default App;
