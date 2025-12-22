import React from "react";
import ImageLoader from "../ui/ImageLoader/ImageLoader";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/util/motion";

interface Props {
  src: string;
  title: string;
  description: string;
  route: string;
}
const ProjectCard = ({ src, title, description, route }: Props) => {
  return (
    <motion.div
      variants={slideInFromLeft(0.5)}
      initial="hidden"
      animate="visible"
    >
      <a
        href={route}
        target="_blank"
        className="relative overflow-hidden z-50 w-full max-h-[400px] rounded-xl shadow-xl border-2 border-purple-300 dark:border-[#2a0e61] bg-white dark:bg-transparent hover:shadow-2xl hover:scale-105 transition-all duration-300"
      >
        <div className="overflow-hidden">
          <ImageLoader
            src={src}
            alt={title}
            className="object-cover w-full h-[240px] mx-auto hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="relative p-5 bg-white dark:bg-transparent">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h1>
          <p className="mt-2 text-gray-700 dark:text-gray-300 text-start leading-relaxed">{description}</p>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectCard;
