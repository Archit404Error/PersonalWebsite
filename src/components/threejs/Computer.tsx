"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const ComputerModel = (props: any) => {
  const gltf = useLoader(GLTFLoader, "/threejs/computer.glb");
  return <primitive {...props} object={gltf.scene} scale={[0.1, 0.1, 0.1]} />;
};

export const Computer = () => {
  return (
    <Canvas camera={{ position: [0, 25, 60] }}>
      <Suspense fallback={null}>
        <ComputerModel />
        <ambientLight />
        <OrbitControls
          autoRotate
          rotateSpeed={2}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          enableZoom={false}
        />
      </Suspense>
    </Canvas>
  );
};
