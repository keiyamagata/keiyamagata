"use client";

import { Canvas } from "@react-three/fiber";
import Sphere from "./Sphere";

const Background = () => {
  return (
    <div className="w-screen h-[100dvh] absolute top-0 left-0 -z-[1]">
      <Canvas>
        <ambientLight />
        <Sphere />
      </Canvas>
    </div>
  );
};

export default Background;
