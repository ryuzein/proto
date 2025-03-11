"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const LanyardModel = () => {
  const { scene } = useGLTF("/lanyard.glb"); // Pastikan file model di `/public`

  return <primitive object={scene} scale={1.5} position={[0, -1.5, 0]} />;
};

const Lanyard3D = () => {
  return (
    <div className="w-full h-64">
      <Canvas camera={{ position: [0, 1, 3] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <LanyardModel />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Lanyard3D;
