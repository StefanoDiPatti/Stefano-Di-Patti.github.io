import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { Raycaster, Vector2, Vector3, Plane, PerspectiveCamera } from "three"
import { useLoadedModels } from "./loadModels";
import { Models, Scale, ScaleMobile, Rotation } from "./entities";
import Info from "./Info";


import CanvasLoader from "../Loader";

const Computers = ({ isMobile, index, models }) => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentModelIndex, setCurrentModelIndex] = useState("Computer");
  // Animation state
  const [floatingOffset, setFloatingOffset] = useState(0);

  const { scene } = useThree(); // Access the scene object

  // Animation parameters for floating
  const floatingSpeed = 0.09; // Adjust the speed of the animation
  const floatingRange = 0.1; // Adjust the range of the animation

  const raycaster = new Raycaster();
  const mouse = new Vector2();
  const plane = new Plane(new Vector3(0, 0, 1), 0);
  var pointOfIntersection = new Vector3();
  var camera = new PerspectiveCamera(25);
  camera.position.set(20, 3, 5);

  const handleMouseMove = (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    raycaster.ray.intersectPlane(plane, pointOfIntersection);
    mouse.x = Math.max(-0.25, Math.min(0.25, mouse.x)); //TODO
    mouse.y =  Math.max(-0.9, Math.min(-0.7, mouse.y));
    setMousePosition({ x: mouse.x, y: mouse.y });
  };

  useFrame(() => {
    setFloatingOffset((prevOffset) => prevOffset + floatingSpeed);

    // Apply the floating effect to the model
    if(currentModelIndex == Models.Brain) {
      models[currentModelIndex].position.y =
        Math.sin(floatingOffset) * floatingRange + (isMobile ? -1 : -0.85);
    } else if (currentModelIndex == Models.Cube) {
      models[currentModelIndex].rotation.y =
        floatingOffset + 0.01
    }


  });

  useEffect(() => {
    // Only run the effect when the index changes after the initial render
    if (currentModelIndex !== index) {
      // Clear the scene and set the current model when index changes
      //scene.clear();
      setCurrentModelIndex(index);
    }
  }, [scene, index, currentModelIndex]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <mesh>
      <ambientLight color={"0xffffff"} intensity={3}/>
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={10000}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={5} />
      <primitive
        object={models[currentModelIndex]}
        scale={isMobile ? ScaleMobile[currentModelIndex] : Scale[currentModelIndex]}
        position={[0, -0.85, 0]} //isMobile ? [0, -0.85, 0] : 
        rotation={Rotation[currentModelIndex]}
      />
      {currentModelIndex === Models.Computer || currentModelIndex === Models.Web ? <primitive
        object={models[currentModelIndex === Models.Computer ? Models.Eye : Models.Click]} //LOAD 2° MODEL
        scale={isMobile ? ScaleMobile[currentModelIndex] : Scale[currentModelIndex]}
        position={isMobile ? [0, -1, 0] : [mousePosition.x, mousePosition.y, 0]}
        rotation={[-0.01, 1, -0.1]}
      /> : <></>}
    </mesh>
  );
};

const ComputersCanvas = ({index}) => {
  const [isMobile, setIsMobile] = useState(false);

  const models = useLoadedModels();

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25}}
      
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} index={index} models={models}/>
      </Suspense>
      {/*<Info description={"Ciao! Questa è una nuvoletta di dialogo!"}/>*/}

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;