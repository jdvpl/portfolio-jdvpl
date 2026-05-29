"use client";
import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently under a probe line (~35% down the
 * viewport). Scroll-position based — deterministic and reliable with tall
 * sections and Lenis smooth-scroll, unlike ratio-based IntersectionObserver.
 */
export function useActiveSection(sectionIds: string[], probeRatio = 0.35) {
  const [active, setActive] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    if (typeof window === "undefined" || sectionIds.length === 0) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const probe = window.scrollY + window.innerHeight * probeRatio;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= probe) current = id;
      }
      // Snap to the last section when the page is near the bottom.
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4
      ) {
        current = sectionIds[sectionIds.length - 1];
      }
      setActive((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(","), probeRatio]);

  return active;
}
