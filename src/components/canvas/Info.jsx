import React, { useState } from 'react';
import { Html } from '@react-three/drei';
import './animations.css'
import { styles } from '../../styles';



const Info = ({ tailDirection = 'right', description }) => {

  const [animate, setAnimate] = useState(true);

  // Stile dell'animazione
  const slideInFromLeft = animate ? {
    animationName: 'slideInFromLeft',
    animationDuration: '1s',
    animationTimingFunction: 'ease',
    animationFillMode: 'forwards',
    '@keyframes slideInFromLeft': {
      from: {
        transform: 'translateX(-100%)',
        opacity: 0
      },
      to: {
        transform: 'translateX(0)',
        opacity: 1
      }
    }
  } : {};

  return (
    <Html>
    <div className={`${styles.slideInAnimation}`} style={{ ...slideInFromLeft, position: 'absolute', display: 'inline-block', right:"130px" }}>
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        {/* Cerchi per la forma nuvolosa */}
        <circle cx="150" cy="100" r="90" fill="white"/>
        <circle cx="80" cy="100" r="60" fill="white"/>
        <circle cx="220" cy="100" r="60" fill="white"/>
        <circle cx="130" cy="60" r="50" fill="white"/>
        <circle cx="170" cy="60" r="50" fill="white"/>

        {/* Coda della nuvola */}
        {tailDirection === 'right' && (
          <path d="M 220 120 Q 260 140 240 170" fill="white"/>
        )}
        {tailDirection === 'left' && (
          <path d="M 80 120 Q 40 140 60 170" fill="white"/>
        )}
      </svg>

      {/* Testo */}
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        width: '70%',
      }}>
        {description}
      </div>
    </div>
  </Html>
  );
};

export default Info;
