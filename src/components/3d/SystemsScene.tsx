"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Html, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import type { MotionValue } from "framer-motion";

const C = { cyan: "#38bdf8", violet: "#8b78ff", brand: "#6d4bff" };

type Vec3 = [number, number, number];
type Node = { id: string; pos: Vec3; label: string; color: string };

const NODES: Node[] = [
  { id: "web", pos: [-4, 1.3, 0.6], label: "Web", color: C.cyan },
  { id: "mobile", pos: [-4, -1.3, -0.6], label: "Mobile", color: C.cyan },
  { id: "gw", pos: [-2.1, 0, 0], label: "Gateway", color: C.violet },
  { id: "auth", pos: [0, 1.7, 0.6], label: "Auth", color: C.brand },
  { id: "core", pos: [0, 0, -0.5], label: "Core API", color: C.brand },
  { id: "work", pos: [0, -1.7, 0.5], label: "Workers", color: C.brand },
  { id: "events", pos: [2.1, 1.5, -0.6], label: "Events", color: C.cyan },
  { id: "ai", pos: [2.1, -1.5, 0.6], label: "AI Pipeline", color: C.violet },
  { id: "cloud", pos: [4, 0, 0], label: "Cloud", color: C.brand },
];

const EDGES: [string, string][] = [
  ["web", "gw"], ["mobile", "gw"],
  ["gw", "auth"], ["gw", "core"], ["gw", "work"],
  ["auth", "events"], ["core", "events"], ["core", "ai"], ["work", "ai"],
  ["events", "cloud"], ["ai", "cloud"], ["core", "cloud"],
];

const byId = (id: string) => NODES.find((n) => n.id === id)!;

/** A glowing data packet travelling along an edge with a gentle arc. */
function Packet({ a, b, color, phase, speed }: { a: Vec3; b: Vec3; color: string; phase: number; speed: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = (state.clock.elapsedTime * speed + phase) % 1;
    ref.current?.position.set(
      THREE.MathUtils.lerp(a[0], b[0], t),
      THREE.MathUtils.lerp(a[1], b[1], t) + Math.sin(t * Math.PI) * 0.22,
      THREE.MathUtils.lerp(a[2], b[2], t)
    );
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.07, 12, 12]} />
      <meshBasicMaterial color={color} toneMapped={false} />
    </mesh>
  );
}

function Node3D({ node }: { node: Node }) {
  const halo = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (halo.current) {
      const s = 1 + Math.sin(state.clock.elapsedTime * 2 + node.pos[0]) * 0.12;
      halo.current.scale.setScalar(s);
    }
  });
  return (
    <group position={node.pos}>
      <mesh>
        <sphereGeometry args={[0.2, 24, 24]} />
        <meshStandardMaterial
          color={node.color}
          emissive={node.color}
          emissiveIntensity={1.6}
          roughness={0.3}
          metalness={0.4}
          toneMapped={false}
        />
      </mesh>
      <mesh ref={halo}>
        <sphereGeometry args={[0.34, 16, 16]} />
        <meshBasicMaterial color={node.color} transparent opacity={0.14} toneMapped={false} />
      </mesh>
      <Html center distanceFactor={10} position={[0, 0.5, 0]} className="pointer-events-none select-none">
        <span className="whitespace-nowrap rounded-full bg-black/40 px-2.5 py-1 font-mono text-[10px] font-medium text-white/90 backdrop-blur-sm ring-1 ring-white/10">
          {node.label}
        </span>
      </Html>
    </group>
  );
}

function Graph({ progress }: { progress?: MotionValue<number> }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.07;
    const p = progress?.get?.() ?? 0;
    // Scroll tilts and breathes the whole topology.
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -0.15 + p * 0.6, 0.06);
    group.current.scale.setScalar(0.82 + Math.min(p, 1) * 0.22);
    // Subtle pointer parallax on top of auto-rotation.
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, state.pointer.x * 0.4, 0.05);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, state.pointer.y * 0.3, 0.05);
  });

  return (
    <group ref={group}>
      {EDGES.map(([f, t], i) => {
        const a = byId(f);
        const b = byId(t);
        return (
          <group key={`${f}-${t}`}>
            <Line points={[a.pos, b.pos]} color={b.color} lineWidth={1} transparent opacity={0.22} />
            <Packet a={a.pos} b={b.pos} color={b.color} phase={(i % 5) * 0.2} speed={0.22 + (i % 3) * 0.05} />
          </group>
        );
      })}
      {NODES.map((n) => (
        <Node3D key={n.id} node={n} />
      ))}
    </group>
  );
}

/**
 * Interactive 3D systems topology. Drag to orbit, scroll to tilt/scale.
 * Rendered client-only and guarded by the consumer.
 */
export default function SystemsScene({ progress }: { progress?: MotionValue<number> }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 9.5], fov: 42 }}
      dpr={[1, 1.6]}
      performance={{ min: 0.4 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={2.2} color="#b3a8ff" />
      <pointLight position={[-5, -3, 2]} intensity={2} color="#38bdf8" />
      <Graph progress={progress} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.07}
        rotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(2 * Math.PI) / 3}
      />
    </Canvas>
  );
}
