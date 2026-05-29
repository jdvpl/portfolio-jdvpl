import type { Metadata, Viewport } from "next";
import { Montserrat, Poppins, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import NavBar from "@/components/ui/NavBar/NavBar";
import { Providers } from "@/components/providers/Providers";
import { ClientBackground } from "@/components/layout/ClientBackground";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const SITE_URL = "https://portfolio-jdvpl.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Juan Daniel Suárez — Senior Full Stack Developer",
    template: "%s · JDVPL",
  },
  description:
    "Senior Full Stack Developer with 7 years of experience building high-performance, scalable applications across React, Next.js, Node.js, NestJS, Java & Spring Boot — and a specialist in Artificial Intelligence.",
  applicationName: "JDVPL Portfolio",
  authors: [{ name: "Juan Daniel Suárez", url: SITE_URL }],
  creator: "Juan Daniel Suárez",
  keywords: [
    "Senior AI Engineer",
    "Full Stack Architect",
    "Software Architect",
    "Microservices",
    "Distributed Systems",
    "Event-Driven Architecture",
    "AI Pipelines",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "Cloud",
    "AWS",
    "GCP",
    "TypeScript",
    "JDVPL",
    "jdvpl",
  ],
  icons: {
    icon: "/assets/NavLogo.png",
    shortcut: "/assets/NavLogo.png",
    apple: "/assets/NavLogo.png",
  },
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Juan Daniel Suárez — Senior Full Stack Developer",
    description:
      "Cinematic portfolio of a Senior Full Stack Developer & AI specialist. Scalable apps across front-end and back-end, with premium product engineering.",
    type: "website",
    url: SITE_URL,
    siteName: "JDVPL Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/62775732?v=4",
        width: 800,
        height: 800,
        alt: "Juan Daniel Suárez",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Daniel Suárez — Senior Full Stack Developer",
    description:
      "Cinematic portfolio of a Senior Full Stack Developer & AI specialist.",
    images: ["https://avatars.githubusercontent.com/u/62775732?v=4"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#030014" },
    { media: "(prefers-color-scheme: light)", color: "#f5f7fb" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Juan Daniel Suárez",
    url: SITE_URL,
    image: "https://avatars.githubusercontent.com/u/62775732?v=4",
    jobTitle: "Senior Full Stack Developer",
    sameAs: [
      "https://github.com/jdvpl",
      "https://linkedin.com/in/jdvpl",
    ],
    knowsAbout: [
      "Full Stack Development",
      "React",
      "Next.js",
      "Node.js",
      "NestJS",
      "Java",
      "Spring Boot",
      "Artificial Intelligence",
      "Cloud",
    ],
    address: { "@type": "PostalAddress", addressLocality: "Bogotá", addressCountry: "CO" },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          "relative min-h-screen overflow-x-hidden font-sans antialiased",
          "bg-[rgb(var(--bg))] text-[rgb(var(--text-strong))] transition-colors duration-500",
          montserrat.variable,
          poppins.variable,
          inter.variable,
          jetbrains.variable
        )}
      >
        <Providers>
          <ClientBackground />
          <ScrollProgress />
          <NavBar />
          <div className="relative z-10">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
