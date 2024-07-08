'use client';
import React from 'react'
import ImageLoader from '../ImageLoader/ImageLoader'
import { Socials } from '@/constants';

const NavBar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop:blur-md z-50 px-10'>
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-2.5">
        <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
            <ImageLoader
                src={'/assets/NavLogo.png'}
                alt={'logo'}
                width={70}
                height={70}
                className="cursor-pointer hover:animate-spin"
            />
            <span className="font-bold ml-2.5 hidden md:block text-gray-300">JDVPL Dev</span>
        </a>
        <div className='w-[500px] h-full flex flex-row items-center justify-between  md:mr-5'>
            <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] gap-3 mr-[15px] px-5 py-2.5 rounded-full text-gray-200'>
                <a href="#about-me" className='cursor-pointer'>About me</a>
                <a href="#skills" className='cursor-pointer'>Skills</a>
                <a href="#project" className='cursor-pointer'>Projects</a>
                <a href="#experience" className='cursor-pointer'>Experience</a>
            </div>
        </div>

        <div className="flex flex-row gap-5">
            {Socials.map((social) => (
                <ImageLoader src={`/assets${social.src}`}
                alt={social.name}
                key={social.name}
                width={20}
                height={20}
                />
            ))}
        </div>
      </div>
    </div>
  )
}

export default NavBar
