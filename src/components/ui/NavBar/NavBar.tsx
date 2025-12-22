"use client";
import React, { memo } from "react";
import ImageLoader from "../ImageLoader/ImageLoader";
import { Socials } from "@/constants";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

const NavBar = memo(() => {
  const { t } = useLanguage();

  return (
    <div className="w-full fixed top-0 shadow-lg shadow-gray-200/80 dark:shadow-[#2A0E61]/50 bg-white/90 dark:bg-[#03001417] backdrop-blur-md z-50 overflow-hidden">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-2.5">
        <a
          href="#about-me"
          className="h-auto w-auto flex-row items-center hidden md:flex"
        >
          <ImageLoader
            src={"/assets/NavLogo.png"}
            alt={"logo"}
            width={70}
            height={70}
            className="cursor-pointer hover:animate-spin"
          />
          <span className="font-bold ml-2.5 hidden md:block text-gray-800 dark:text-gray-300">
            JDVPL Dev
          </span>
        </a>
        <div className="md:w-[500px] w-full h-full flex flex-row items-center justify-between md:mr-5">
          <div className="flex items-center justify-between w-full h-auto border border-gray-300 dark:border-[#7042f861] bg-white/70 dark:bg-[#0300145e] gap-3 md:mr-[15px] px-2 md:px-5 py-2.5 rounded-full text-gray-800 dark:text-gray-200">
            <a href="#skills" className="cursor-pointer hover:text-amber-600 dark:hover:text-purple-500 transition-colors">
              {t.nav.skills}
            </a>
            <a href="#project" className="cursor-pointer hover:text-amber-600 dark:hover:text-purple-500 transition-colors">
              {t.nav.projects}
            </a>
            <a href="#experience" className="cursor-pointer hover:text-amber-600 dark:hover:text-purple-500 transition-colors">
              {t.nav.experience}
            </a>
          </div>
        </div>

        <div className="hidden md:flex flex-row gap-5 items-center z-10">
          <LanguageToggle />
          <ThemeToggle />
          {Socials.map((social) => (
            <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <ImageLoader
                src={`/assets${social.src}`}
                alt={social.name}
                width={20}
                height={20}
                className="brightness-0 saturate-100 dark:brightness-0 dark:invert"
              />
            </a>
          ))}
        </div>

        {/* Mobile toggles */}
        <div className="flex md:hidden gap-3 items-center">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
});

NavBar.displayName = 'NavBar';

export default NavBar;
