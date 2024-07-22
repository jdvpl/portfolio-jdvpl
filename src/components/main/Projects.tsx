import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <section id='project' className='flex flex-col items-center justify-center py-20 z-30'>
            <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                My projects
            </h1>
            <div className='h-full w-full grid grid-cols-3 gap-10 px-10'>
                <ProjectCard
                    src='/assets/projects/project1.png'
                    title='Upstask mern'
                    description='Project created with mern stack, with socket.io and react hooks, using mongoDb'
                    route='https://uptasks-mern.netlify.app/'
                />
                <ProjectCard
                    route='https://www.minenergia.gov.co/es/'
                    src='/assets/projects/minenergia.png'
                    title='Minenergia'
                    description='Project created with wagtail, Djando, html, Javascript, Bootstrap, postgreSQL and CSS'
                />
                <ProjectCard
                    route='https://pultemsoft.netlify.app/'

                    src='/assets/projects/pultemsoft.png'
                    title='Pultemsoft'
                    description='Porject created with react and bootstrap, '
                />
            </div>
        </section>
    )
}

export default Projects
