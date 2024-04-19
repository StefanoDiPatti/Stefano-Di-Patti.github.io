import React, { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import { Text } from "@react-three/drei";

const MatrixCode = (props) => {
  const charSet = '0123456789';
  const randomChar = charSet[Math.floor(Math.random() * charSet.length)];

  const [position, setPosition] = useState([
    Math.random() * 2 - 1, // x
    Math.random() * 5,     // y
    Math.random() * 2 - 1  // z
  ]);

  useFrame((state, delta) => {
    setPosition((prev) => [prev[0], prev[1] - delta, prev[2]]);
    if (position[1] < -5) {
      setPosition([position[0], 5, position[2]]);
    }
  });

  return (
    <Text position={position} color="green" fontSize={0.05} {...props}>
      {randomChar}
    </Text>
  );
};

  

const MatrixCanvas = () => {
    const numChars = 500;
    return (
      <div className="w-full h-auto absolute inset-0 z-[-1]">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            {Array.from({ length: numChars }).map((_, idx) => (
              <MatrixCode key={idx} />
            ))}
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
    );
  };
  

export default MatrixCanvas;
