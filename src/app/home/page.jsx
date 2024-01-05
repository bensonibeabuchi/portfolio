import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import hero_side from "../images/hero_side.png";

import akw from "../images/akw.png";
import echo from "../images/echo.png";

import stem from "../images/stem.png";

import Link from "next/link";
import { FaLink } from "react-icons/fa6";

import Project_bar from "../components/Project_bar";

import html from "../images/html.png";
import css from "../images/css.png";
import django from "../images/django.png";
import tailwind from "../images/tailwindlogo.png";
import drf from "../images/drf.png";
import react from "../images/react.png";
import github from "../images/github.png";
import javascript from "../images/javascript.png";
import nextjs from "../images/nextjs.svg";
import python from "../images/python.png";

export default function Home() {
  return (
    <>
      <Navbar />

      <div>
        {/* Hero Section */}
        <div className="flex mt-24 p-16 justify-center space-x-36">
          <div className="space-y-2 my-auto">
            <p className="text-base md:text-2xl font-bold">
              Hello world, <br />
            </p>
            <p className="text-3xl md:text-5xl font-bold">
              My name is
              <br />
            </p>
            <p className="md:text-7xl text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F5B613] to-[#E70F0F] ">
              Benson Ibeabuchi
              <br />
            </p>
            <p className="md:text-5xl text-3xl font-bold">
              The fullstack Alchemist{" "}
              <span className="sparkles hover:transition-all hover:rotate-45 hover:scale-110 cursor-pointer" role="button">
                🪄
              </span>
            </p>
          </div>
          <div className="hidden md:block">
            <Image src={hero_side} alt="code snippets" height="500" />
          </div>
        </div>

        {/* Project Section */}
        <div className="mt-48 mb-48 justify-center items-center flex flex-col">
          <h1 className="text-5xl p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">Projects</h1>
          <p>Find below some projects I have built</p>
          <Project_bar />
          {/* Project Card */}
          <div className="md:flex space-y-10  gap-16">
            <Link href="https://akwukwo.vercel.app/" target="_blank" className="cursor-pointer my-8">
              <div className="w-[371px] h-[614px] p-4 rounded-xl shadow-2xl bg-white hover:scale-105 transition-all ">
                <h1 className="font-semibold text-2xl mt-4">Akwukwo</h1>
                <p className="font-light mb-3">An e-learning full stack project</p>
                <div className="h-[215px] bg-red-400 overflow-hidden">
                  <Image src={akw} alt="Akwukwo website" width={900} className="object-cover h-full w-full" />
                </div>
                <p className="bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Tech Stack</p>
                <p className="font-light text-sm text-gray-400 mb-2">HTML, Javascript, React, Next.js, TailwindCSS</p>
                <p className="max-h-32 font-light text-sm line-clamp-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.</p>
                <div className="bg-black rounded-lg w-2/4 items-center ">
                  <Link href="https://akwukwo.vercel.app/" target="_blank" className="text-white justify-center flex p-3 my-4 cursor-pointer gap-2 items-center hover:bg-[#353535] hover:scale-105 hover:text-white rounded-md">
                    <FaLink /> <p>Live Preview</p>
                  </Link>
                </div>
              </div>
            </Link>
            <Link href="http://echo1-048a0f46d862.herokuapp.com/" target="_blank" className="cursor-pointer my-8">
              <div className="w-[371px] h-[614px] p-4 rounded-xl shadow-2xl bg-white hover:scale-105 transition-all">
                <h1 className="font-semibold text-2xl mt-4">Echo</h1>
                <p className="font-light mb-3">A news sharing API</p>
                <div className="h-[215px] bg-red-400 overflow-hidden">
                  <Image src={echo} alt="Echo website" width={900} className="object-cover h-full w-full" />
                </div>
                <p className="bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Tech Stack</p>
                <p className="font-light text-sm text-gray-400 mb-2 truncate">Django, Python, Django RestFramework, Postgres</p>
                <p className="max-h-32 font-light text-sm line-clamp-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.</p>
                <div className="bg-black rounded-lg w-2/4 items-center ">
                  <Link href="http://echo1-048a0f46d862.herokuapp.com/" target="_blank" className="text-white justify-center flex p-3 my-4 cursor-pointer gap-2 items-center hover:bg-[#353535] hover:scale-105 hover:text-white rounded-md">
                    <FaLink /> <p>Live Preview</p>
                  </Link>
                </div>
              </div>
            </Link>
            <Link href="/" target="_blank" className="cursor-pointer my-8">
              <div className="w-[371px] h-[614px] p-4 rounded-xl shadow-2xl bg-white hover:scale-105 transition-all ">
                <h1 className="font-semibold text-2xl mt-4">Stem</h1>
                <p className="font-light mb-3">Budget and Expense Tracking Mobile Ap</p>
                <div className="h-[215px] overflow-hidden">
                  <Image src={stem} alt="Stem website" width={900} className="object-cover h-full w-full transition duration-1000 hover:animate-spin" />
                </div>
                <p className="bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Tech Stack</p>
                <p className="font-light text-sm text-gray-400 mb-2">UI/UX, Figma</p>
                <p className="max-h-32 font-light text-sm line-clamp-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti </p>
                <div className="bg-black rounded-lg w-2/4 items-center ">
                  <Link href="/" className="text-white justify-center flex p-3 my-4 cursor-pointer gap-2 items-center hover:bg-[#353535] hover:scale-105 hover:text-white rounded-md">
                    <FaLink /> <p>Live Preview</p>
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div>
          <div className="justify-center mt-32 mb-32 items-center flex flex-col">
            <h1 className="md:text-5xl text-3xl t p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">My Tech Stack</h1>
            <p className="text-sm md:text-base">Technologies I have been working with recently</p>
            <div className=" md:space-y-24 space-y-8 my-6">
              <div className="flex md:gap-16 gap-4 md:my-8 p-4">
                <Image src={html} alt="html logo" width={70} className="md:h-40 md:w-40 mt-4 hover:scale-110 transition-all cursor-pointer" />
                <Image src={css} alt="html logo" width={70} className="md:h-40 md:w-40 mt-4 hover:scale-110 transition-all cursor-pointer" />
                <Image src={javascript} alt="html logo" width={70} className="md:h-40 md:w-40 mt-4 hover:scale-110 transition-all cursor-pointer" />
                <Image src={react} alt="html logo" width={70} className="md:h-40 md:w-40 mt-4 transition-all duration-1000 hover:animate-spin cursor-pointer" />
                <Image src={nextjs} alt="html logo" width={70} className="md:h-40 md:w-40  mt-4 hover:scale-110 transition-all cursor-pointer" />
              </div>
              <div className="flex md:gap-16 gap-4 md:my-16 p-4">
                <Image src={github} alt="html logo" width={70} className="md:h-40 md:w-40 mt-4 hover:scale-110 transition-all cursor-pointer" />
                <Image src={tailwind} alt="html logo" width={70} className="md:h-40 md:w-40 mt-4 hover:scale-110 transition-all cursor-pointer" />
                <Image src={python} alt="html logo" width={70} className="md:h-40 md:w-40 mt-4 hover:scale-110 transition-all cursor-pointer" />
                <Image src={django} alt="html logo" width={70} className="md:h-40 md:w-40 mt-4 hover:scale-110 transition-all cursor-pointer" />
                <Image src={drf} alt="html logo" width={70} className="md:h-40 md:w-40 mt-4 hover:scale-110 transition-all cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
