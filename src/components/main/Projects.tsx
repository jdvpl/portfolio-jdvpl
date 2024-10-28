import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="project"
      className="flex flex-col items-center justify-center  z-30"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My projects
      </h1>
      <div className="h-full w-full grid md:grid-cols-3 gap-10 px-10 items-center">
        <ProjectCard
          src="/assets/projects/project1.png"
          title="Upstask mern"
          description="Project created with mern stack, with socket.io and react hooks, using mongoDb"
          route="https://uptasks-mern.netlify.app/"
        />
        <ProjectCard
          route="https://www.minenergia.gov.co/es/"
          src="/assets/projects/minenergia.png"
          title="Minenergia"
          description="Project created with wagtail, Django, html, Javascript, Bootstrap, postgreSQL and CSS"
        />
        <ProjectCard
          route="https://pultemsoft.netlify.app/"
          src="/assets/projects/pultemsoft.png"
          title="Pultemsoft"
          description="Porject created with react and bootstrap, "
        />

        <ProjectCard
          route="https://digital.bancocajasocial.com/vivienda"
          src="/assets/projects/cajasocial.png"
          title="Banco Caja Social"
          description="Porject created nextjs, tailwindcss, typescript, redux-toolkit,  mongodb,  nestjs  "
        />
        <ProjectCard
          route="https://colors-generator-jdvpl.netlify.app/"
          src="/assets/projects/colors.png"
          title="Colors generator"
          description="Porject created with react  "
        />
        <ProjectCard
          route="https://jdvpl-cotizador-criptomonedad.netlify.app/"
          src="/assets/projects/crypto.png"
          title="Crypto App"
          description="Porject created with react  "
        />
      </div>
    </section>
  );
};

export default Projects;
