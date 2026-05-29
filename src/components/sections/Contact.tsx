"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Github, Linkedin, Youtube } from "@/lib/icons";
import { useLanguage } from "@/contexts/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { FloatingParticles } from "@/components/ui/FloatingParticles";
import { reveal, stagger, inView } from "@/lib/motion";

const EMAIL = "jdvplsuarez@gmail.com";
const SOCIALS = [
  { name: "GitHub", href: "https://github.com/jdvpl", Icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/jdvpl", Icon: Linkedin },
  { name: "YouTube", href: "https://www.youtube.com/@juandanielsuarezamado6723", Icon: Youtube },
];

function Field({
  children,
  htmlFor,
  label,
}: {
  children: React.ReactNode;
  htmlFor: string;
  label: string;
}) {
  return (
    <div className="group relative rounded-2xl border-gradient transition-shadow duration-300 focus-within:shadow-glow">
      <label
        htmlFor={htmlFor}
        className="pointer-events-none absolute left-4 top-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[rgb(var(--text-muted))] transition-colors group-focus-within:text-accent"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    const SERVICE = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Without EmailJS configured, fall back to the mail client.
    if (!SERVICE || !TEMPLATE || !KEY) {
      const subject = encodeURIComponent(`Portfolio contact — ${form.name || "Hello"}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      return;
    }

    try {
      setStatus("sending");
      await emailjs.send(
        SERVICE,
        TEMPLATE,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
          to_email: EMAIL,
        },
        { publicKey: KEY }
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const fieldClass =
    "w-full rounded-2xl bg-transparent px-4 pb-3 pt-8 text-sm text-[rgb(var(--text-strong))] outline-none placeholder:text-[rgb(var(--text-muted))]/50";

  return (
    <section id="contact" className="relative mx-auto w-full max-w-7xl overflow-hidden px-6 py-28 md:px-12 md:py-40">
      <FloatingParticles count={20} className="opacity-60" />

      <div className="relative grid gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left */}
        <div className="flex flex-col gap-8">
          <SectionHeading
            align="left"
            eyebrow={t.contact.eyebrow}
            title={t.contact.title}
            description={t.contact.description}
          />

          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="flex flex-col gap-4"
          >
            <motion.div variants={reveal(0, 16)} className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-400/10 px-4 py-2 text-sm text-emerald-400">
              <span className="h-2 w-2 animate-glow-pulse rounded-full bg-emerald-400" />
              {t.contact.availability}
            </motion.div>
            <motion.a
              variants={reveal(0, 16)}
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 text-[rgb(var(--text-muted))] transition-colors hover:text-accent"
            >
              <Mail className="h-5 w-5" /> {EMAIL}
            </motion.a>
            <motion.span variants={reveal(0, 16)} className="flex items-center gap-3 text-[rgb(var(--text-muted))]">
              <MapPin className="h-5 w-5" /> Bogotá, Colombia · Remote
            </motion.span>

            <motion.div variants={reveal(0, 16)} className="mt-2 flex gap-3">
              {SOCIALS.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="grid h-11 w-11 place-items-center rounded-full glass text-[rgb(var(--text-muted))] transition-all duration-300 hover:-translate-y-1 hover:text-accent hover:shadow-glow"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Form */}
        <motion.form
          onSubmit={onSubmit}
          variants={reveal(0.1, 40)}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="flex flex-col gap-4 rounded-3xl glass-strong p-6 md:p-8"
        >
          <Field htmlFor="name" label="Name">
            <input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder={t.contact.namePlaceholder}
              className={fieldClass}
            />
          </Field>
          <Field htmlFor="email" label="Email">
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder={t.contact.emailPlaceholder}
              className={fieldClass}
            />
          </Field>
          <Field htmlFor="message" label="Message">
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={t.contact.messagePlaceholder}
              className={`${fieldClass} resize-none`}
            />
          </Field>
          <div className="mt-2 space-y-3">
            <MagneticButton as="button" type="submit" className="w-full justify-center">
              {status === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  {t.contact.submit}
                  <Send className="h-4 w-4" />
                </>
              )}
            </MagneticButton>

            {status === "sent" && (
              <p className="flex items-center gap-2 text-sm text-emerald-400">
                <CheckCircle2 className="h-4 w-4" /> Message sent — I&apos;ll reply soon.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-red-400">
                <AlertCircle className="h-4 w-4" /> Couldn&apos;t send. Email me at {EMAIL}.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
