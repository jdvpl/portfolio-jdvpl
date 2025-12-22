'use client'
import React, { memo } from 'react'
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromTop } from '@/util/motion';
import { SparklesIcon } from '@heroicons/react/16/solid';
import { useLanguage } from '@/contexts/LanguageContext';

const SkillText = memo(() => {
  const { t } = useLanguage();

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <motion.div
          variants={slideInFromTop}
          className='Welcome-box py-2 px-1 border border-amber-400 dark:border-[#7042f88b] opacity-[0.9] bg-white/80 dark:bg-transparent'
        >
          <SparklesIcon className='text-amber-500 dark:text-[#b49bff] mr-2.5 h-5 w-5' />
         <h1 className='Welcome-text text-[13px] text-gray-900 dark:text-inherit'>{t.skills.badge}</h1>
        </motion.div>
        <motion.div variants={slideInFromLeft(0.5)} className='text-[30px] text-gray-900 dark:text-white font-medium mt-2.5 text-center mb-[15px]'>
          {t.skills.title}
        </motion.div>
        <motion.div variants={slideInFromLeft(0.5)} className='cursive text-[20px] text-gray-700 dark:text-gray-200 mt-2.5 text-center mb-10'>
          {t.skills.subtitle}
        </motion.div>
    </div>
  )
})

SkillText.displayName = 'SkillText';

export default SkillText
