'use client';
import React from "react";
import ProjectCard from "./ProjectCard";
import { useLanguage } from '@/contexts/LanguageContext';

const projectsData = [
  {
    src: "/assets/projects/project1.png",
    route: "https://uptasks-mern.netlify.app/",
  },
  {
    src: "/assets/projects/minenergia.png",
    route: "https://www.minenergia.gov.co/es/",
  },
  {
    src: "/assets/projects/pultemsoft.png",
    route: "https://pultemsoft.netlify.app/",
  },
  {
    src: "/assets/projects/cajasocial.png",
    route: "https://digital.bancocajasocial.com/vivienda",
  },
  {
    src: "/assets/projects/colors.png",
    route: "https://colors-generator-jdvpl.netlify.app/",
  },
  {
    src: "/assets/projects/crypto.png",
    route: "https://jdvpl-cotizador-criptomonedad.netlify.app/",
  }
];

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section
      id="project"
      className="flex flex-col items-center justify-center z-30 py-10 bg-gradient-to-b from-transparent via-pink-100/30 to-transparent dark:via-transparent"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 dark:from-purple-500 dark:to-cyan-500 py-20">
        {t.projects.title}
      </h1>
      <div className="h-full w-full grid md:grid-cols-3 gap-10 px-10 items-center">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={t.projects.items[index].title}
            description={t.projects.items[index].description}
            route={project.route}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
