import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/util/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import { TypeAnimation } from "react-type-animation";
import clsx from "clsx";
import ImageLoader from "../ui/ImageLoader/ImageLoader";
const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-5 md:px-20 mt-40 w-full z-[20] overflow-x-hidden"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-2 px-1 border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-2.5 h-5 w-5" />
          <TypeAnimation
            className="Welcome-text text-[13px]"
            sequence={[
              "Full stack developer",
              1000,
              "Frontend Developer",
              1000,
              "Backend Devloper",
              1000,
              "Expert in React and Next.js",
              1000,
              "Proficient in Node.js and NestJS",
              1000,
              "Django Backend Specialist",
              1000,
              "Microservices Architecture Enthusiast",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className={clsx(
            "flex flex-col gap-6 mt-6 text-5xl md:text-6xl font-bold text-white md:max-w-[600px] w-auto h-auto"
          )}
        >
          <span>
            providing
            <span
              className={clsx(
                "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
              )}
            >
              {" "}
              the best{" "}
            </span>{" "}
            project experience
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Developer specializing in creating scalable and
          secure web applications using React, Next.js, and Node.js. Skilled in
          backend technologies such as NestJS, Django, Spring Boot, and Golang,
          I have a strong command of microservices architecture and advanced
          security practices. Currently, I&apos;m also pursuing specializations
          in Artificial Intelligence and Software Engineering, further enhancing
          my technical depth and versatility.
        </motion.p>
        <motion.a
          href="https://portafolio-jdvpl.web.app/"
          target="_blank"
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <ImageLoader
          src={"/assets/mainIconsdark.svg"}
          hight={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
