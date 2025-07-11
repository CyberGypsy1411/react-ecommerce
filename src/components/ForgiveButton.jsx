import React, { useState } from 'react';
import './ForgiveButton.css';

function ForgiveButton() {
  const [clicked, setClicked] = useState(false);
return (
  <div className="forgive-button-container">
    {!clicked ? (
      <button className="forgive-button" onClick={() => setClicked(true)}>
        माफ करशील ना? 💕
      </button>
    ) : (
      <h3>याय! माझी Barbie परत हसली 💖</h3>
    )}
  </div>
);
}

export default ForgiveButton;
