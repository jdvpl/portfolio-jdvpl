"use client";
import { ArrowUp } from "lucide-react";
import { Github, Linkedin, Youtube } from "@/lib/icons";
import { useLanguage } from "@/contexts/LanguageContext";

type Lenis = { scrollTo: (t: number | string, o?: object) => void };

const SOCIALS = [
  { name: "GitHub", href: "https://github.com/jdvpl", Icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/jdvpl", Icon: Linkedin },
  { name: "YouTube", href: "https://www.youtube.com/@juandanielsuarezamado6723", Icon: Youtube },
];

export default function Footer() {
  const { t } = useLanguage();
  const links = [
    { id: "about", key: "about" },
    { id: "skills", key: "skills" },
    { id: "experience", key: "experience" },
    { id: "projects", key: "projects" },
    { id: "architecture", key: "architecture" },
    { id: "contact", key: "contact" },
  ];
  const label = (k: string) => (t.nav as Record<string, string>)[k] ?? k;

  const go = (id: string | number) => {
    const lenis = (window as unknown as { lenis?: Lenis }).lenis;
    if (lenis) lenis.scrollTo(typeof id === "number" ? id : `#${id}`, { offset: -80, duration: 1.4 });
    else if (typeof id === "string") document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mx-auto w-full max-w-7xl px-6 pb-12 pt-8 md:px-12">
      <div className="rounded-3xl glass p-8 md:p-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <button onClick={() => go(0)} className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[linear-gradient(135deg,rgb(var(--glow-1)),rgb(var(--glow-2)))] text-sm font-bold text-white">
                JD
              </span>
              <span className="text-sm font-semibold tracking-tight">
                JDVPL<span className="text-accent">.dev</span>
              </span>
            </button>
            <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--text-muted))]">
              Senior Full Stack Developer & AI specialist — building scalable, high-performance products across the stack.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-2.5 sm:grid-cols-3">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="text-left text-sm text-[rgb(var(--text-muted))] transition-colors hover:text-accent"
              >
                {label(l.key)}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-[rgb(var(--text-muted))]">
            © {new Date().getFullYear()} Juan Daniel Suárez. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="grid h-9 w-9 place-items-center rounded-full text-[rgb(var(--text-muted))] transition-colors hover:bg-accent/10 hover:text-accent"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
            <button
              onClick={() => go(0)}
              aria-label="Back to top"
              className="grid h-9 w-9 place-items-center rounded-full glass text-accent transition-transform hover:-translate-y-0.5"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
