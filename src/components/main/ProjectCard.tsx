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
        className="relative overflow-hidden z-50 w-full max-h-[400px] rounded-lg shadow-lg border border-[#2a0e61]"
      >
        <ImageLoader
          src={src}
          alt={title}
          className=" object-cover w-full h-[240px] mx-auto"
        />

        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300 text-start">{description}</p>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectCard;
