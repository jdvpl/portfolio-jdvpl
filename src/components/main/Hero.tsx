'use client'
import React, { memo, useEffect, useRef, useState } from "react";
import HeroContent from "../subContent/HeroContent";

const Hero = memo(() => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Load video after a short delay to prioritize initial render
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative flex flex-col h-full w-full z-40 pb-20 bg-gradient-to-b from-yellow-50/30 via-transparent to-transparent dark:from-transparent"
      id="about-me"
    >
      {shouldLoad && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover hidden dark:md:block"
        >
          <source src="/assets/blackhole.webm" type="video/webm" />
        </video>
      )}
      <HeroContent />
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
