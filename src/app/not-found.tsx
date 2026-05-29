import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm tracking-[0.3em] text-accent">404</p>
      <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
        <span className="text-gradient">Lost in the void</span>
      </h1>
      <p className="mt-4 max-w-md text-[rgb(var(--text-muted))]">
        The page you are looking for drifted beyond the event horizon.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white bg-[linear-gradient(110deg,rgb(var(--glow-1)),rgb(var(--glow-2)))] shadow-glow transition-transform duration-300 hover:scale-105"
      >
        Return home
      </Link>
    </main>
  );
}
