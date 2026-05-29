/**
 * Project media + tech metadata. Order matches `t.projects.items` so the
 * localized title/description join the technical tags at render time.
 */
export interface ProjectMeta {
  src: string;
  route: string;
  tags: string[];
}

export const PROJECTS_META: ProjectMeta[] = [
  {
    src: "/assets/projects/project1.png",
    route: "https://uptasks-mern.netlify.app/",
    tags: ["MERN", "Socket.io", "MongoDB", "Hooks"],
  },
  {
    src: "/assets/projects/minenergia.png",
    route: "https://www.minenergia.gov.co/es/",
    tags: ["Django", "Wagtail", "PostgreSQL", "Gov"],
  },
  {
    src: "/assets/projects/pultemsoft.png",
    route: "https://pultemsoft.netlify.app/",
    tags: ["React", "Bootstrap"],
  },
  {
    src: "/assets/projects/cajasocial.png",
    route: "https://digital.bancocajasocial.com/vivienda",
    tags: ["Next.js", "NestJS", "Redux Toolkit", "Banking"],
  },
  {
    src: "/assets/projects/colors.png",
    route: "https://colors-generator-jdvpl.netlify.app/",
    tags: ["React", "Tooling"],
  },
  {
    src: "/assets/projects/crypto.png",
    route: "https://jdvpl-cotizador-criptomonedad.netlify.app/",
    tags: ["React", "API", "Fintech"],
  },
];
