"use client";
import { memo } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, ArrowUpRight, Sparkles, Download } from "lucide-react";
import { RevealText } from "@/components/animations/RevealText";
import { CanvasGuard } from "@/components/3d/CanvasGuard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { ease } from "@/lib/motion";

const FloatingSphere = dynamic(() => import("@/components/3d/FloatingSphere"), {
  ssr: false,
});

function scrollTo(id: string) {
  const lenis = (window as unknown as { lenis?: { scrollTo: (t: string, o?: object) => void } })
    .lenis;
  if (lenis) lenis.scrollTo(`#${id}`, { offset: -80, duration: 1.4 });
  else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const Hero = memo(() => {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Parallax: content drifts up & fades, sphere drifts down — depth on scroll.
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const sphereY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden px-6 pt-28 md:px-12 lg:px-20"
    >
      {/* 3D centerpiece */}
      <motion.div
        style={{ y: sphereY }}
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden h-full w-1/2 md:block"
      >
        <CanvasGuard>
          <FloatingSphere progress={scrollYProgress} />
        </CanvasGuard>
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start gap-6"
      >
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: ease.expoOut }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium"
        >
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          <TypeAnimation
            className="text-[rgb(var(--text-muted))]"
            sequence={[
              t.hero.welcome.fullstack,
              1400,
              t.hero.welcome.react,
              1400,
              t.hero.welcome.node,
              1400,
              t.hero.welcome.microservices,
              1400,
            ]}
            wrapper="span"
            speed={55}
            repeat={Infinity}
          />
        </motion.div>

        {/* Giant name */}
        <h1 className="font-display text-[clamp(2.75rem,9vw,7rem)] font-bold leading-[0.95] tracking-tight">
          <RevealText text="Juan Daniel" onView={false} className="block" />
          <RevealText
            text="Suárez"
            onView={false}
            delay={0.15}
            className="block text-gradient-animate"
          />
        </h1>

        {/* Identity line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: ease.expoOut }}
          className="font-mono text-sm uppercase tracking-[0.3em] text-accent md:text-base"
        >
          Senior Full Stack Developer · AI Specialist
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65, ease: ease.expoOut }}
          className="max-w-xl text-pretty text-base leading-relaxed text-[rgb(var(--text-muted))] md:text-lg"
        >
          {t.hero.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: ease.expoOut }}
          className="mt-2 flex flex-wrap items-center gap-4"
        >
          <MagneticButton as="button" onClick={() => scrollTo("projects")}>
            {t.hero.cta}
            <ArrowUpRight className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton
            as="button"
            variant="glass"
            onClick={() => scrollTo("contact")}
          >
            {t.nav.contact}
          </MagneticButton>
          <MagneticButton
            as="a"
            href="/assets/Juan_Daniel_Suarez_CV.pdf"
            download
            variant="ghost"
          >
            <Download className="h-4 w-4" />
            CV
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[rgb(var(--text-muted))]"
        aria-label="Scroll down"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.button>
    </section>
  );
});

Hero.displayName = "Hero";
export default Hero;
