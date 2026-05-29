"use client";
import { motion } from "framer-motion";
import { Cpu, Boxes, Cloud, Gauge, Download, BadgeCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { RevealText } from "@/components/animations/RevealText";
import { GlowCard } from "@/components/ui/GlowCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RoboticAvatar } from "@/components/3d/RoboticAvatar";
import { reveal, stagger, scaleIn, inView } from "@/lib/motion";

const PILLAR_ICONS = [Boxes, Cpu, Cloud, Gauge];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative mx-auto w-full max-w-7xl px-6 py-28 md:px-12 md:py-40">
      <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        {/* Editorial column */}
        <div className="flex flex-col gap-7">
          <motion.span
            variants={reveal(0, 16)}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="inline-flex w-fit items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-accent"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-glow-pulse" />
            {t.about.eyebrow}
          </motion.span>

          <RevealText
            as="h2"
            text={t.about.title}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl"
          />

          <motion.p
            variants={reveal(0.1, 20)}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="text-balance text-xl font-medium leading-snug text-[rgb(var(--text-strong))]/90 md:text-2xl"
          >
            {t.about.lead}
          </motion.p>

          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="flex flex-col gap-4 text-[rgb(var(--text-muted))]"
          >
            {t.about.paragraphs.map((p, i) => (
              <motion.p key={i} variants={reveal(0, 16)} className="leading-relaxed text-pretty">
                {p}
              </motion.p>
            ))}
          </motion.div>

          {/* Pillars */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="mt-4 grid gap-4 sm:grid-cols-2"
          >
            {t.about.pillars.map((pillar, i) => {
              const Icon = PILLAR_ICONS[i % PILLAR_ICONS.length];
              return (
                <motion.div key={pillar.title} variants={reveal(0, 24)}>
                  <GlowCard tilt={false} className="h-full p-5">
                    <Icon className="h-6 w-6 text-accent" />
                    <h3 className="mt-3 font-semibold tracking-tight">{pillar.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[rgb(var(--text-muted))]">
                      {pillar.description}
                    </p>
                  </GlowCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Portrait + stats column */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="flex flex-col gap-6 self-start lg:mt-12"
        >
          {/* Robotic holographic avatar (scroll-driven via GSAP) */}
          <motion.div variants={scaleIn(0)} className="flex flex-col items-center gap-6">
            <RoboticAvatar />

            {/* Name + role */}
            <div className="text-center">
              <p className="text-base font-semibold tracking-tight">Juan Daniel Suárez</p>
              <p className="font-mono text-[11px] text-accent">Full Stack Developer · AI Specialist</p>
            </div>

            {/* Completed specializations */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {["AI Specialization", "Software Engineering"].map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-[11px] text-[rgb(var(--text-muted))]"
                >
                  <BadgeCheck className="h-3.5 w-3.5 text-emerald-400" />
                  {s}
                </span>
              ))}
            </div>

            {/* CV */}
            <MagneticButton
              as="a"
              href="/assets/Juan_Daniel_Suarez_CV.pdf"
              download
              variant="glass"
              className="w-full justify-center"
            >
              <Download className="h-4 w-4" />
              Download CV
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {t.about.stats.map((stat) => (
              <motion.div key={stat.label} variants={reveal(0, 24)}>
                <GlowCard className="flex flex-col justify-end p-5">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="font-display text-4xl font-bold tracking-tight text-gradient md:text-5xl"
                  />
                  <p className="mt-1.5 text-xs text-[rgb(var(--text-muted))]">{stat.label}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
