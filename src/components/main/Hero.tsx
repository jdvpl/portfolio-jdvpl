import React from "react";
import HeroContent from "../subContent/HeroContent";

const Hero = () => {
  return (
    <section
      className="relative flex flex-col h-full w-full z-40"
      id="about-me"
    >
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover hidden md:block"
      >
        <source src="/assets/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </section>
  );
};

export default Hero;
