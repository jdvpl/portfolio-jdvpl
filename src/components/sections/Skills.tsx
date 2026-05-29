"use client";
import { motion } from "framer-motion";
import {
  Frontend_skill,
  Backend_skill,
  Full_stack,
  Other_skill,
} from "@/constants";
import ImageLoader from "@/components/ui/ImageLoader/ImageLoader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { reveal, stagger, inView } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Skill = { skill_name: string; Image: string };

const GROUPS: { label: string; skills: Skill[] }[] = [
  { label: "Frontend", skills: Frontend_skill },
  { label: "Backend & Data", skills: Backend_skill },
  { label: "Full Stack & DevOps", skills: Full_stack },
  { label: "Cloud", skills: Other_skill },
];

function SkillChip({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      variants={reveal(0, 24)}
      className="group relative flex items-center gap-3 rounded-2xl glass px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <span className="absolute inset-0 -z-10 rounded-2xl bg-accent/0 blur-xl transition-colors duration-500 group-hover:bg-accent/20" />
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/90 p-1.5 shadow-sm ring-1 ring-black/5">
        <ImageLoader
          src={`/assets${skill.Image}`}
          alt={skill.skill_name}
          width={32}
          height={32}
          className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </span>
      <span className="whitespace-nowrap text-sm font-medium text-[rgb(var(--text-strong))]">
        {skill.skill_name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="relative mx-auto w-full max-w-7xl px-6 py-28 md:px-12 md:py-36">
      <SectionHeading
        eyebrow={t.skills.badge}
        title={t.skills.title}
        description={t.skills.subtitle}
      />

      <div className="mt-16 flex flex-col gap-10">
        {GROUPS.map((group, gi) => (
          <motion.div
            key={group.label}
            variants={stagger(0.05, gi * 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                {group.label}
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
            </div>
            <div
              className={cn(
                "flex flex-wrap justify-center gap-2.5 sm:gap-3 md:justify-start",
                gi % 2 === 1 && "md:pl-12"
              )}
            >
              {group.skills.map((skill, i) => (
                <SkillChip key={skill.skill_name} skill={skill} index={i} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
