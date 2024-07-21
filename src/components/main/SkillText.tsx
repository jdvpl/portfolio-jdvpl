'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromTop } from '@/util/motion';
import { SparklesIcon } from '@heroicons/react/16/solid';

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <motion.div
          variants={slideInFromTop}
          className='Welcome-box py-2 px-1 border border-[#7042f88b] opacity-[0.9]'
        >
          <SparklesIcon className='text-[#b49bff] mr-2.5 h-5 w-5' />
         <h1 className='Welcome-text text-[13px]'>Think better next 14</h1>
        </motion.div>
        <motion.div variants={slideInFromLeft(0.5)} className='text-[30px] text-white font-medium mt-2.5 text-center mb-[15px]'>
          Making app with modern technologies
        </motion.div>
        <motion.div variants={slideInFromLeft(0.5)} className='cursive text-[20px] text-gray-200  mt-2.5 text-center mb-10'>
          Never miss a task deadline or idea
        </motion.div>
    </div>
  )
}

export default SkillText
