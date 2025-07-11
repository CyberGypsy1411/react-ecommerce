import React, { useState } from 'react';
import './ForgiveButton.css';

function ForgiveButton() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="forgive-button-container">
      {!clicked ? (
        <button className="forgive-button" onClick={() => setClicked(true)}>
          Forgive Me? 💖
        </button>
      ) : (
        <h3>Yay! I knew you would 💕</h3>
      )}
    </div>
  );
}

export default ForgiveButton;
