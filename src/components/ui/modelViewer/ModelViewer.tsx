import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ path }) {
  const gltf = useGLTF(path);
  const scene = Array.isArray(gltf) ? gltf[0].scene : gltf.scene;
  return <primitive object={scene} position={[1, -2, 1]} />;
}

export default function ModelViewer({ modelPath }) {
  return (
    <div className="h-[400px]  w-full flex justify-center items-center z-40 bg-transparent">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 0, 100]} intensity={1} />
        <Model path={modelPath} />
        <OrbitControls enableZoom={true} minDistance={2} maxDistance={10} />
      </Canvas>
    </div>
  );
}
