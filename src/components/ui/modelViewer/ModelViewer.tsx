'use client'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Suspense, memo } from "react";

// Preload the model for faster loading
useGLTF.preload('/models/programmer.glb');

const Model = memo(({ path }: { path: string }) => {
  const gltf = useGLTF(path);
  const scene = Array.isArray(gltf) ? gltf[0].scene : gltf.scene;

  return <primitive object={scene} position={[1, -2, 1]} scale={1} />;
})

Model.displayName = 'Model';

const ModelViewer = memo(({ modelPath }: { modelPath: string }) => {
  return (
    <div className="h-[400px] w-full flex justify-center items-center z-40 bg-transparent">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]} // Limit pixel ratio
        performance={{ min: 0.5 }} // Allow quality reduction on slower devices
        gl={{
          antialias: true,
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={null}>
          {/* Improved lighting setup */}
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
          <directionalLight position={[-5, -5, -5]} intensity={0.5} />

          {/* Environment for better reflections */}
          <Environment preset="city" />

          <Model path={modelPath} />

          {/* Optimized controls */}
          <OrbitControls
            enableZoom={true}
            minDistance={2}
            maxDistance={10}
            enablePan={false}
            enableDamping={true}
            dampingFactor={0.05}
            rotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
})

ModelViewer.displayName = 'ModelViewer';

export default ModelViewer;
