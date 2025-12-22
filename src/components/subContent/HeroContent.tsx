import React, { memo } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/util/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import { TypeAnimation } from "react-type-animation";
import ImageLoader from "../ui/ImageLoader/ImageLoader";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroContent = memo(() => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-5 md:px-20 mt-40 w-full z-[20] overflow-x-hidden"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-2 px-1 border border-amber-400 dark:border-[#7042f88b] opacity-[0.9] bg-white/80 dark:bg-transparent"
        >
          <SparklesIcon className="text-amber-500 dark:text-[#b49bff] mr-2.5 h-5 w-5" />
          <TypeAnimation
            className="Welcome-text text-[13px] text-gray-900 dark:text-inherit"
            sequence={[
              t.hero.welcome.fullstack,
              1000,
              t.hero.welcome.frontend,
              1000,
              t.hero.welcome.backend,
              1000,
              t.hero.welcome.react,
              1000,
              t.hero.welcome.node,
              1000,
              t.hero.welcome.django,
              1000,
              t.hero.welcome.microservices,
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl md:text-6xl font-bold text-gray-900 dark:text-white md:max-w-[600px] w-auto h-auto"
        >
          <span>
            {t.hero.title}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-700 dark:from-purple-500 dark:to-cyan-500">
              {" "}
              {t.hero.highlight}{" "}
            </span>{" "}
            {t.hero.subtitle}
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-700 dark:text-gray-400 my-5 max-w-[600px]"
        >
          {t.hero.description}
        </motion.p>
        <motion.a
          href="https://portafolio-jdvpl.web.app/"
          target="_blank"
          variants={slideInFromLeft(1)}
          className="py-3 px-8 text-center text-white cursor-pointer rounded-xl max-w-[200px] bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 hover:from-amber-600 hover:via-orange-600 hover:to-yellow-600 dark:from-purple-500 dark:to-cyan-500 dark:bg-none shadow-lg hover:shadow-xl shadow-amber-300/50 dark:shadow-purple-500/50 transition-all duration-300 font-semibold"
        >
          {t.hero.cta}
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <div className="relative p-8 rounded-full bg-gradient-to-br from-amber-800 via-yellow-600 to-orange-400 dark:from-transparent dark:via-transparent dark:to-transparent backdrop-blur-sm">
          <ImageLoader
            src={"/assets/mainIconsdark.svg"}
            hight={650}
            width={650}
          />
        </div>
      </motion.div>
    </motion.div>
  );
});

HeroContent.displayName = 'HeroContent';

export default HeroContent;
