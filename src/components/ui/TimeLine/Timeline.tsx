'use client';
import React, { useEffect, useState } from "react";
import { Chrono } from "react-chrono";
import { motion } from 'framer-motion'
import { slideInFromRight } from "@/util/motion";
import { useTheme } from 'next-themes';
import { useLanguage } from '@/contexts/LanguageContext';

const Experience = () => {
  const [isClient, setIsClient] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    setMounted(true);
    setIsClient(true);
  }, []);

  const lightTheme = {
    primary: "#d97706",
    secondary: "#fef3c7",
    cardBgColor: "#ffffff",
    titleColor: "#f59e0b",
    titleColorActive: "#d97706",
    cardTitleColor: "#92400e",
    cardSubtitleColor: "#6b7280",
    cardDetailsColor: "#374151",
  };

  const darkTheme = {
    primary: "white",
    secondary: "#b49bff",
    cardBgColor: "black",
    titleColor: "#b49bff",
    titleColorActive: "white",
    cardTitleColor: "#b49bff",
    cardSubtitleColor: "#ECF0F1",
    cardDetailsColor: "white",
  };

  // Use resolvedTheme to get the actual theme being used
  const currentTheme = resolvedTheme || theme;

  if (!mounted) {
    return null;
  }

  return (
    <motion.section initial="hidden" animate="visible">
      <motion.div id="experience" className="relative z-40 pt-20 pb-20" variants={slideInFromRight(1.2)}>
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 dark:from-purple-500 dark:to-cyan-500 text-center mb-10">
          {t.experience.title}
        </h1>
        {isClient && (
          <Chrono
            key={`${currentTheme}-${language}`}
            enableOutline
            slideShow
            parseDetailsAsHTML
            disableToolbar
            items={t.experience.items}
            mode="VERTICAL_ALTERNATING"
            timelinePointShape="circle"
            timelinePointDimension={30}
            fontSizes={{
              cardSubtitle: '0.85rem',
              cardText: '0.8rem',
              cardTitle: '1rem',
              title: '1rem',
            }}
            theme={currentTheme === 'light' ? lightTheme : darkTheme}
            cardHeight={140}
            mediaHeight={100}
            contentDetailsHeight={80}
            readMore={true}
          />
        )}
      </motion.div>
    </motion.section>
  );
};

export default Experience;
