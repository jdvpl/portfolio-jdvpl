import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '@/util/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import { TypeAnimation } from 'react-type-animation'
import clsx from 'clsx'
const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div
          variants={slideInFromTop}
          className='Welcome-box py-2 px-1 border border-[#7042f88b] opacity-[0.9]'
        >
          <SparklesIcon className='text-[#b49bff] mr-2.5 h-5 w-5' />
          <TypeAnimation
            className='Welcome-text text-[13px]'
            sequence={[
              'Full stack developer',
              1000,
              'Frontend Developer',
              1000,
              'Backend Devloper',
              1000,
              'Expert in React and Next.js',
              1000,
              'Proficient in Node.js and NestJS',
              1000,
              'Django Backend Specialist',
              1000,
              'Microservices Architecture Enthusiast',
              1000,

            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className={clsx('flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto')}
        >
          <span className={clsx('text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500')}>the best</span> project experience
        </motion.div>
      </div>

    </motion.div>
  )
}

export default HeroContent
