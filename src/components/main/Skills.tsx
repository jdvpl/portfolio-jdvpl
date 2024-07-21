import { Backend_skill, Frontend_skill, Full_stack, Other_skill } from '@/constants'
import React from 'react'
import SkillDataProvider from '../subContent/SkillDataProvider'

const Skills = () => {
  return (
    <section className=' flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pt-20 z-40' id='skills' style={{transform: 'scale(0.9)'}}>
      <div className="flex flex-row items-center justify-around flex-wrap mt-4 gap-5 ">
        {Frontend_skill.map((skill, index) =>(
            <SkillDataProvider
            key={index} src={`/assets/${skill.Image}`} width={skill.width} height={skill.height} index={index}/>
        ))}
      </div>
      <div className="flex flex-row items-center justify-around flex-wrap mt-4 gap-5 ">
        {Backend_skill.map((skill, index) =>(
            <SkillDataProvider
            key={index} src={`/assets/${skill.Image}`} width={skill.width} height={skill.height} index={index}/>
        ))}
      </div>
      <div className="flex flex-row items-center justify-around flex-wrap mt-4 gap-5 ">
        {Full_stack.map((skill, index) =>(
            <SkillDataProvider
            key={index} src={`/assets/${skill.Image}`} width={skill.width} height={skill.height} index={index}/>
        ))}
      </div>
      <div className="flex flex-row items-center justify-around flex-wrap mt-4 gap-5 ">
        {Other_skill.map((skill, index) =>(
            <SkillDataProvider
            key={index} src={`/assets/${skill.Image}`} width={skill.width} height={skill.height} index={index}/>
        ))}
      </div>
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
            <video
                className='w-full h-auto'
                preload='false'
                playsInline
                loop
                muted
                autoPlay
                src='/assets/cards-video.webm'
            />
        </div>
      </div>
    </section>
  )
}

export default Skills
