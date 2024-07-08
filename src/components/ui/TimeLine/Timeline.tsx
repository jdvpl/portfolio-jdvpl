'use client';
import { EXPERIENCE } from "@/constants";
import React, { useEffect, useState } from "react";
import { Chrono } from "react-chrono";

const Experience = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative">
      {isClient && (
        <Chrono
        enableOutline
        parseTitleAsHTML
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
    </div>
  );
};

export default Experience;
