import React from 'react'
import ImageLoader from '../ui/ImageLoader/ImageLoader';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/util/motion';

interface Props{
    src:string;
    title:string;
    description:string;
    route:string;
}
const ProjectCard = ({src,title,description,route}:Props) => {
    const router=useRouter()
  return (
    <motion.div variants={slideInFromLeft(0.5)}   initial="hidden"
    animate="visible">
         <button className='relative overflow-hidden z-50 rounded-lg shadow-lg border border-[#2a0e61]' onClick={()=>router.push(route)}>
        <ImageLoader
            src={src}
            alt={title}
            height={300}
            className="w-full object-contain h-[250px]"
        />

        <div className='relative p-4'>
            <h1 className='text-2xl font-semibold text-white'>{title}</h1>
            <p className='mt-2 text-gray-300 text-start'>{description}</p>
        </div>
      
    </button>
    </motion.div>
   
  )
}

export default ProjectCard
