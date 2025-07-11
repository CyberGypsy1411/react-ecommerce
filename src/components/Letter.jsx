import React from 'react';
import ForgiveButton from './ForgiveButton';
import './Letter.css';

function Letter() {
  return (
    <div className="letter">
      <p>Dear Astha,</p>
      <p>
        I'm really sorry if I hurt you in any way. I never meant to.
        You mean the world to me, and I’d never want to see you upset.
      </p>
      <p>
        Let’s make it better, together. Will you forgive me?
      </p>
      <p>With all my love,</p>
      <p>— Pankaj ❤️</p>

      <ForgiveButton />
    </div>
  );
}

export default Letter;
