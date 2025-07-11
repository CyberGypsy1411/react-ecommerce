import React, { useState } from 'react';
import './ForgiveButton.css';

function ForgiveButton() {
  const [clicked, setClicked] = useState(false);
return (
  <div className="forgive-button-container">
    {!clicked ? (
      <button className="forgive-button" onClick={() => setClicked(true)}>
        माफ कर दोगी ना? 💕
      </button>
    ) : (
      <h3>याय! मेरी moti फिर से मुस्कुरा दी 💖</h3>
    )}
  </div>
);
}

export default ForgiveButton;
