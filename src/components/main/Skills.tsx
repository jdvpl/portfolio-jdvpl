'use client'
import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
} from "@/constants";
import React, { memo, useEffect, useRef, useState } from "react";
import SkillDataProvider from "../subContent/SkillDataProvider";
import SkillText from "./SkillText";

const Skills = memo(() => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pt-20 pb-20 z-40 bg-gradient-to-b from-transparent via-yellow-100/30 to-transparent dark:via-transparent"
      id="skills"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      <div className="flex flex-row items-center justify-around flex-wrap mt-4 gap-5 z-10 ">
        {Frontend_skill.map((skill, index) => (
          <SkillDataProvider
            key={index}
            src={`/assets${skill.Image}`}
            width={skill.width}
            height={skill.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row items-center justify-around flex-wrap mt-4 gap-5 z-10">
        {Backend_skill.map((skill, index) => (
          <SkillDataProvider
            key={index}
            src={`/assets${skill.Image}`}
            width={skill.width}
            height={skill.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row items-center justify-around flex-wrap mt-4 gap-5 z-10">
        {Full_stack.map((skill, index) => (
          <SkillDataProvider
            key={index}
            src={`/assets${skill.Image}`}
            width={skill.width}
            height={skill.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row items-center justify-around flex-wrap mt-4 gap-5 z-10">
        {Other_skill.map((skill, index) => (
          <SkillDataProvider
            key={index}
            src={`/assets${skill.Image}`}
            width={skill.width}
            height={skill.height}
            index={index}
          />
        ))}
      </div>
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          {isVisible && (
            <video
              ref={videoRef}
              className="w-full h-auto hidden dark:block"
              preload="metadata"
              playsInline
              loop
              muted
              autoPlay
              src="/assets/cards-video.webm"
            />
          )}
        </div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';

export default Skills;
