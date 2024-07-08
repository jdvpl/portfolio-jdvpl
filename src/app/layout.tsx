import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import StartCanvas from "@/components/main/StarBackGround";
import NavBar from "@/components/ui/NavBar/NavBar";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})
export const metadata:Metadata = {
  title: "Full Stack Developer Portfolio",
  description: "Full stack developer with 5 years of experience using React, Next.js, Node.js, NestJS, and Django. Extensive experience in microservices architecture, security implementations, and performance optimization.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "Django",
    "Microservices",
    "Security",
    "Performance Optimization",
    "Redux Toolkit",
    "Tailwind CSS",
    "Bootstrap",
    "PostgreSQL",
    "MongoDB",
    "API Development",
    "Unit Testing",
    "End-to-End Testing",
    "Jest",
    "Pino",
    "Grafana",
    "Ministry of ICT",
    "Ministry of Energy",
    "Banistmo",
    "Banco Caja Social"
  ],
  openGraph: {
    title: "Full Stack Developer jdvpl Portfolio",
    description: "Experienced Full Stack Developer proficient in modern web technologies and best practices.",
    type: "website",
    url: "https://portfolio-jdvpl-m7emblvi0-juan-daniel-suarez-amados-projects.vercel.app/",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/62775732?v=4",
        width: 800,
        height: 600,
        alt: "Profile Picture",
      },
    ],
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(
          " bg-[#030014] overflow-y-scroll overflow-x-hidden text-white",
          montserrat.variable,
          poppins.variable,
        )}>
          <StartCanvas />
          <NavBar/>
          {children}
          </body>
    </html>
  );
}
