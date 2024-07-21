'use client';
import { EXPERIENCE } from "@/constants";
import React, { useEffect, useState } from "react";
import { Chrono } from "react-chrono";
import { motion } from 'framer-motion'
import { slideInFromRight } from "@/util/motion";

const Experience = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <motion.section      initial="hidden"
      animate="visible">
    <motion.div id="experience" className="relative z-40 pt-20" variants={slideInFromRight(1.2)}>
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
