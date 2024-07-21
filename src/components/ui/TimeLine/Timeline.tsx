'use client';
import { EXPERIENCE } from "@/constants";
import React, { useEffect, useState } from "react";
import { Chrono } from "react-chrono";
import { motion } from 'framer-motion'
import { slideInFromTop } from "@/util/motion";

const Experience = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <motion.section id="experience" className="relative z-40 pt-20" variants={slideInFromTop}>
      {isClient && (
        <Chrono
        enableOutline
        slideShow
        parseDetailsAsHTML
        disableToolbar
          items={EXPERIENCE}
          mode="VERTICAL_ALTERNATING"
          timelinePointShape="circle"
          timelinePointDimension={30}
          fontSizes={{
            cardSubtitle: '0.85rem',
            cardText: '0.8rem',
            cardTitle: '1rem',
            title: '1rem',
          }}
          theme={{
            primary: "white",
            secondary: "#b49bff",
            cardBgColor: "black",
            titleColor: "#b49bff",
            titleColorActive: "white",
            cardTitleColor:"#b49bff",
            cardSubtitleColor: "##ECF0F1",
            cardDetailsColor: "white",
          }}
          buttonTexts={{
            first: "Jump to First",
            last: "Jump to Last",
            next: "Next",
            previous: "Previous",
          }}
          cardHeight={200} 
          mediaHeight={100} 
          contentDetailsHeight={80} 
          readMore={true}
        />
      )}
    </motion.section>
  );
};

export default Experience;
