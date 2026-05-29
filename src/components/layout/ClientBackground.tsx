"use client";
import dynamic from "next/dynamic";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { MouseGradient } from "@/components/ui/MouseGradient";
import { CanvasGuard } from "@/components/3d/CanvasGuard";

// R3F must stay out of SSR (react-reconciler reads client-only React internals).
const StarCanvas = dynamic(() => import("@/components/main/StarBackGround"), {
  ssr: false,
});

/**
 * All fixed, behind-the-content atmosphere in one client island:
 * CSS aurora/grid backdrop, the 3D star field, and the mouse-follow glow.
 * The 3D layer is guarded so any WebGL failure degrades to the CSS atmosphere.
 */
export function ClientBackground() {
  return (
    <>
      <AnimatedBackground />
      <CanvasGuard>
        <StarCanvas />
      </CanvasGuard>
      <MouseGradient />
    </>
  );
}
