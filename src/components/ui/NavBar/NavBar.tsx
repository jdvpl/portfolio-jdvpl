"use client";
import React from "react";
import ImageLoader from "../ImageLoader/ImageLoader";
import { Socials } from "@/constants";

const NavBar = () => {
  return (
    <div className="w-full  fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop:blur-md z-50 overflow-hidden">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-2.5">
        <a
          href="#about-me"
          className="h-auto w-auto  flex-row items-center hidden md:flex"
        >
          <ImageLoader
            src={"/assets/NavLogo.png"}
            alt={"logo"}
            width={70}
            height={70}
            className="cursor-pointer hover:animate-spin"
          />
          <span className="font-bold ml-2.5 hidden md:block text-gray-300">
            JDVPL Dev
          </span>
        </a>
        <div className="md:w-[500px] w-full h-full flex flex-row items-center justify-between  md:mr-5">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] gap-3 md:mr-[15px] px-2 md:px-5 py-2.5 rounded-full text-gray-200">
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#project" className="cursor-pointer">
              Projects
            </a>
            <a href="#experience" className="cursor-pointer">
              Experience
            </a>
          </div>
        </div>

        <div className="hidden md:flex flex-row gap-5 z-10">
          {Socials.map((social) => (
            <a key={social.name} href={social.href} target="_blank">
              <ImageLoader
                src={`/assets${social.src}`}
                alt={social.name}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
