"use client";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Environment,
  Sphere,
  Icosahedron,
} from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";
import type { MotionValue } from "framer-motion";

type Palette = { core: string; emissive: string; shell: string; key: string; fill: string };

const PALETTES: Record<"dark" | "light", Palette> = {
  dark: { core: "#6d4bff", emissive: "#3a1f8f", shell: "#38bdf8", key: "#b3a8ff", fill: "#38bdf8" },
  light: { core: "#5b2ff0", emissive: "#4c20cc", shell: "#6366f1", key: "#818cf8", fill: "#22d3ee" },
};

/** Core distorted sphere — reacts to pointer, scroll and theme. */
function Core({ progress, palette }: { progress?: MotionValue<number>; palette: Palette }) {
  const ref = useRef<THREE.Mesh>(null);
  const mat = useRef<any>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    const p = progress?.get?.() ?? 0;
    // Spin faster + distort harder as the hero scrolls away.
    ref.current.rotation.y += delta * (0.15 + p * 1.2);
    ref.current.scale.setScalar(1 - Math.min(p, 1) * 0.28);
    if (mat.current) mat.current.distort = 0.3 + Math.min(p, 1) * 0.45;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.1}>
      <Sphere ref={ref} args={[0.95, 96, 96]}>
        <MeshDistortMaterial
          ref={mat}
          color={palette.core}
          emissive={palette.emissive}
          emissiveIntensity={0.45}
          roughness={0.16}
          metalness={0.85}
          distort={0.32}
          speed={1.8}
        />
      </Sphere>
    </Float>
  );
}

function Shell({ progress, color }: { progress?: MotionValue<number>; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    const p = progress?.get?.() ?? 0;
    ref.current.rotation.y += delta * (0.15 + p * 0.4);
    ref.current.rotation.z -= delta * 0.08;
  });
  return (
    <Icosahedron ref={ref} args={[1.5, 1]}>
      <meshBasicMaterial color={color} wireframe transparent opacity={0.13} />
    </Icosahedron>
  );
}

/** Pointer-reactive group so the sphere leans toward the cursor. */
function Rig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.pointer.x * 0.4, 0.04);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -state.pointer.y * 0.3, 0.04);
  });
  return <group ref={group}>{children}</group>;
}

/**
 * Elegant, low-GPU hero centerpiece. Colours follow the active theme.
 * Rendered client-only by the consumer (dynamic import, ssr:false).
 */
export default function FloatingSphere({ progress }: { progress?: MotionValue<number> }) {
  const { resolvedTheme } = useTheme();
  const palette = PALETTES[resolvedTheme === "light" ? "light" : "dark"];

  return (
    <Canvas
      camera={{ position: [0, 0, 5.6], fov: 42 }}
      dpr={[1, 1.6]}
      performance={{ min: 0.4 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} intensity={1.6} color={palette.key} />
        <pointLight position={[-4, -2, -3]} intensity={2} color={palette.fill} />
        <Rig>
          <Core progress={progress} palette={palette} />
          <Shell progress={progress} color={palette.shell} />
        </Rig>
        <Environment preset={resolvedTheme === "light" ? "dawn" : "city"} />
      </Suspense>
    </Canvas>
  );
}
