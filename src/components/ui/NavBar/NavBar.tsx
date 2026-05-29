"use client";
import { memo, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Github, Linkedin, Youtube } from "@/lib/icons";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { ease } from "@/lib/motion";

type Lenis = { scrollTo: (target: string | number, opts?: object) => void };

const SECTIONS = [
  { id: "home", key: "home" },
  { id: "about", key: "about" },
  { id: "skills", key: "skills" },
  { id: "experience", key: "experience" },
  { id: "projects", key: "projects" },
  { id: "architecture", key: "architecture" },
  { id: "contact", key: "contact" },
] as const;

const SOCIALS = [
  { name: "GitHub", href: "https://github.com/jdvpl", Icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/jdvpl", Icon: Linkedin },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@juandanielsuarezamado6723",
    Icon: Youtube,
  },
];

function scrollToSection(id: string) {
  const lenis = (window as unknown as { lenis?: Lenis }).lenis;
  const target = id === "home" ? 0 : `#${id}`;
  if (lenis) lenis.scrollTo(target, { offset: -80, duration: 1.4 });
  else
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const NavBar = memo(() => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTIONS.map((s) => s.id));
  const label = (key: string) => (t.nav as Record<string, string>)[key] ?? key;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: ease.expoOut, delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
          className={cn(
            "flex w-full max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-500 ease-expo",
            scrolled
              ? "glass-strong shadow-glow"
              : "border border-transparent bg-transparent"
          )}
        >
          {/* Brand */}
          <button
            onClick={() => handleNav("home")}
            className="group flex items-center gap-2.5"
            aria-label="Home"
          >
            <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-[linear-gradient(135deg,rgb(var(--glow-1)),rgb(var(--glow-2)))] text-sm font-bold text-white shadow-glow">
              JD
              <span className="absolute inset-0 rounded-xl bg-white/0 transition-colors duration-300 group-hover:bg-white/10" />
            </span>
            <span className="hidden text-sm font-semibold tracking-tight sm:block">
              JDVPL<span className="text-accent">.dev</span>
            </span>
          </button>

          {/* Center links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => handleNav(s.id)}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300",
                    active === s.id
                      ? "text-[rgb(var(--text-strong))]"
                      : "text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text-strong))]"
                  )}
                >
                  {active === s.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-accent/10 ring-1 ring-accent/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {label(s.key)}
                </button>
              </li>
            ))}
          </ul>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1 md:flex">
              {SOCIALS.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="grid h-9 w-9 place-items-center rounded-full text-[rgb(var(--text-muted))] transition-colors duration-300 hover:bg-accent/10 hover:text-accent"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
            <LanguageToggle />
            <ThemeToggle />
            <a
              href="/assets/Juan_Daniel_Suarez_CV.pdf"
              download
              className="hidden items-center gap-1.5 rounded-full glass-strong px-3.5 py-2 text-xs font-semibold text-accent transition-colors duration-300 hover:border-accent/40 md:inline-flex"
            >
              <Download className="h-4 w-4" />
              CV
            </a>
            <button
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-full glass lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Fullscreen cinematic mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: ease.expoOut }}
            className="fixed inset-0 z-[70] flex flex-col bg-[rgb(var(--bg))]/80 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex items-center justify-between px-6 pt-6">
              <span className="text-sm font-semibold tracking-tight">
                JDVPL<span className="text-accent">.dev</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full glass"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
              className="flex flex-1 flex-col justify-center gap-2 px-8"
            >
              {SECTIONS.map((s, i) => (
                <motion.li
                  key={s.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: ease.expoOut } },
                  }}
                >
                  <button
                    onClick={() => handleNav(s.id)}
                    className="group flex w-full items-baseline gap-4 py-2 text-left"
                  >
                    <span className="font-mono text-xs text-accent/60">
                      0{i + 1}
                    </span>
                    <span
                      className={cn(
                        "font-display text-4xl font-bold tracking-tight transition-colors duration-300",
                        active === s.id
                          ? "text-gradient"
                          : "text-[rgb(var(--text-strong))] group-hover:text-accent"
                      )}
                    >
                      {label(s.key)}
                    </span>
                  </button>
                </motion.li>
              ))}
            </motion.ul>

            <div className="flex items-center gap-3 px-8 pb-10">
              {SOCIALS.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="grid h-11 w-11 place-items-center rounded-full glass text-[rgb(var(--text-muted))] transition-colors hover:text-accent"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
              <a
                href="/assets/Juan_Daniel_Suarez_CV.pdf"
                download
                onClick={() => setOpen(false)}
                className="ml-auto inline-flex items-center gap-2 rounded-full glass-strong px-4 py-2.5 text-sm font-semibold text-accent"
              >
                <Download className="h-4 w-4" />
                CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

NavBar.displayName = "NavBar";
export default NavBar;
