/**
 * Career timeline — condensed to the highest-impact points per role.
 * Structured (not HTML) so the Experience section renders clean bullets + tags.
 */
export interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  points: string[];
  stack: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: "Jun 2025 — Present",
    company: "Blank Factor · Profisee — Bogotá",
    role: "Senior Frontend Developer",
    points: [
      "Lead scalable React apps with Context API, custom hooks and a component-driven architecture.",
      "Integrate secure REST APIs and optimize performance via lazy loading, code splitting and memoization.",
      "Ensure WCAG accessibility and high coverage with Jest + React Testing Library.",
    ],
    stack: ["React", "TypeScript", "Context API", "SASS", "Jest", "Azure DevOps"],
  },
  {
    period: "Oct 2022 — Apr 2025",
    company: "Caja Social Bank — Bogotá",
    role: "Full Stack Developer",
    points: [
      "Designed microservices architecture; built Next.js frontends and NestJS services.",
      "Implemented ML models and predictive analytics in Python (Pandas, Matplotlib).",
      "Maintained and modernized legacy Java / J2EE systems with Spring Boot.",
      "Owned team backlog, data encryption, security patching and performance tuning.",
    ],
    stack: ["Next.js", "NestJS", "Java", "Spring Boot", "Python", "Grafana", "Oracle"],
  },
  {
    period: "Mar 2021 — Dec 2022",
    company: "MinTic · Canal 13 — Bogotá",
    role: "Full Stack Developer",
    points: [
      "Built React (Redux) frontends and Node.js backends for 5+ data platforms.",
      "Cut system failure rate by 80% through unit and load testing.",
      "Developed ML models and deep learning with PyTorch; automated web scraping in Python.",
    ],
    stack: ["React", "Node.js", "Python", "PyTorch", "Docker", "MySQL", "Azure"],
  },
  {
    period: "Nov 2021 — Jan 2022",
    company: "Banistmo — Bogotá",
    role: "Full Stack Developer",
    points: [
      "Built Angular interfaces and a standalone data-extraction agent for a financial product.",
      "Optimized the complaint-handling process with efficient app-based solutions.",
      "Modeled data with DynamoDB and MySQL.",
    ],
    stack: ["Angular", "Node.js", "AWS", "DynamoDB", "MySQL"],
  },
  {
    period: "Sep 2021 — May 2022",
    company: "Energy Ministry — Bogotá",
    role: "Freelancer",
    points: [
      "Developed product models and resolved frontend / backend defects.",
      "Built layouts with Django, HTML, CSS and Bootstrap.",
      "Solved large-scale dataset problems with distributed, real-time processing.",
    ],
    stack: ["Django", "JavaScript", "HTML", "CSS", "Bootstrap"],
  },
  {
    period: "Jan 2020 — Mar 2021",
    company: "Rapid Fast — Bogotá",
    role: "Senior Full Stack Developer",
    points: [
      "Built a web platform and mobile app with React, Node.js and Flutter.",
      "Created backend APIs and Firebase data models; deployed on Google Cloud.",
      "Led the development team and end-to-end delivery.",
    ],
    stack: ["React", "Node.js", "Flutter", "Firebase", "Spring Boot", "GCP"],
  },
  {
    period: "May 2019 — Oct 2019",
    company: "YoyisFood — Bogotá",
    role: "Junior Developer",
    points: [
      "Built secure layouts integrating multiple APIs and databases.",
      "Collaborated with PM, developers and QA on testing and best practices.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
  },
];
