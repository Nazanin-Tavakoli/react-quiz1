import React, { useEffect } from 'react';
import './Welcome.css'; 

const MovingButton = ({onClick}) => {
  useEffect(() => {
    let x;
    const moveBg = (e) => {
      const rect = e.target.getBoundingClientRect();
      e.target.style.setProperty('--x', ((e.clientX - rect.x) / rect.width) * 100);
      e.target.style.setProperty('--y', ((e.clientY - rect.y) / rect.height) * 100);
    };

    const intro = () => {
      let i = 4; 
      const $b = document.querySelector("button");
      $b.style.setProperty("--a", '100%');
       x = setInterval(() => {
        $b.style.setProperty(
          "--x", ((Math.cos(i) + 2) / 3.6) * 100
        );
        $b.style.setProperty(
          "--y", ((Math.sin(i) + 2) / 3.6) * 100
        );
        i += 0.03;
        if (i > 11.5) {
          clearInterval(x);
          $b.style.setProperty("--a", '');
        }
      }, 16);
    };

    intro();

    const button = document.querySelector("button");
    button.addEventListener('pointermove', moveBg);
    button.addEventListener('pointerover', () => {
      clearInterval(x);
      button.style.setProperty("--a", '');
    });

    return () => {
      button.removeEventListener('pointermove', moveBg);
      button.removeEventListener('pointerover', () => clearInterval(x));
    };
  }, []);

  return (
    <>
    <GooFilter /> 
    <button className="moving-button">
      Let's get started
    </button>
    </>
  );
};
const GooFilter = () => (
    <svg width="0" height="0" style={{ position: 'absolute' }}>
      <filter id="goo" x="-50%" y="-50%" width="200%" height="200%">
        <feComponentTransfer>
          <feFuncA type="discrete" tableValues="0 1"></feFuncA>
        </feComponentTransfer>
        <feGaussianBlur stdDeviation="5"></feGaussianBlur>
        <feComponentTransfer>
          <feFuncA type="table" tableValues="-5 11"></feFuncA>
        </feComponentTransfer>
      </filter>
    </svg>
  );
  
  
export default MovingButton;
