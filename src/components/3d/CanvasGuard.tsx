"use client";
import { Component, type ReactNode } from "react";

/**
 * Error boundary for WebGL/R3F canvases. If the 3D layer fails (driver issues,
 * reconciler mismatch, lost context) the app degrades gracefully to the CSS
 * atmosphere instead of crashing the whole page.
 */
export class CanvasGuard extends Component<
  { children: ReactNode; fallback?: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[CanvasGuard] 3D layer disabled:", error);
    }
  }

  render() {
    if (this.state.failed) return this.props.fallback ?? null;
    return this.props.children;
  }
}
