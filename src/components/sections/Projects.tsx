"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PROJECTS_META } from "@/constants/projects";
import ImageLoader from "@/components/ui/ImageLoader/ImageLoader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { reveal, stagger, inView } from "@/lib/motion";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="relative mx-auto w-full max-w-7xl px-6 py-28 md:px-12 md:py-36">
      <SectionHeading
        eyebrow="Selected Work"
        title={t.projects.title}
        description="Production platforms across banking, government and consumer products."
      />

      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
      >
        {PROJECTS_META.map((project, i) => {
          const item = t.projects.items[i];
          if (!item) return null;
          return (
            <motion.a
              key={i}
              href={project.route}
              target="_blank"
              rel="noopener noreferrer"
              variants={reveal(0, 36)}
              className="group block"
            >
              <GlowCard className="flex h-full flex-col overflow-hidden">
                {/* Media */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-[rgb(var(--surface))]/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <ImageLoader
                    src={project.src}
                    alt={item.title}
                    width={640}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-700 ease-expo group-hover:scale-110"
                  />
                  <span className="absolute right-4 top-4 z-20 grid h-10 w-10 translate-y-2 place-items-center rounded-full glass-strong opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5 text-accent" />
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-accent">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[rgb(var(--text-muted))]">
                    {item.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 font-mono text-[11px] text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </motion.a>
          );
        })}
      </motion.div>
    </section>
  );
}
