"use client";

import { useRef } from "react";
import { motion } from "framer-motion-3d";
import { MeshProps, useFrame, useThree } from "@react-three/fiber";
import { Mesh } from "three";

const Background = () => {
  const ref = useRef<Mesh | undefined>(null);
  const { viewport } = useThree();

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.0015;
  });

  return (
    <motion.mesh
      ref={ref as unknown as React.MutableRefObject<MeshProps>}
      initial={{ scale: 0 }}
      animate={{ scale: 1, transition: { duration: 0.7 } }}
    >
      <sphereGeometry args={[Math.min(viewport.width * 0.4, 2.5), 16, 16]} />
      <meshStandardMaterial color="#F4F0E6" wireframe />
    </motion.mesh>
  );
};

export default Background;
