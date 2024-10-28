import React from "react";
import { RxGithubLogo, RxTwitterLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaYoutube, FaPhone, FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-4">
      <div className="flex w-full flex-col items-center justify-center m-auto">
        <div className="flex w-full h-full flex-row items-center justify-around flex-wrap z-20">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>

            <a
              href="https://github.com/jdvpl"
              target="_blank"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[15px]">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/jdvpl"
              target="_blank"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[15px]">LinkedIn</span>
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About Me</div>
            <a
              href="https://api.whatsapp.com/send?phone=573209188638"
              target="_blank"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaPhone />
              <span className="text-[15px] ml-[15px]">+57 3209181638</span>
            </a>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaEnvelope />
              <span className="text-[15px] ml-[15px]">
                juanda554242@gmail.com
              </span>
            </p>
          </div>
        </div>
        <div className="mb-5 text-[15px] text-center">
          &copy; JDVPL dev {new Date().getFullYear()} All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
