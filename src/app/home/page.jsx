import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import hero_side from "../images/hero_side.png";

import akw from "../images/akw.png";
import echo from "../images/echo.png";
import akalibe from "../images/akalibe.png";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";

import Stack from "../components/stack";
import Product_Card from "../components/Project_Card";
import Project_bar from "../components/Project_bar";

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
            <p className="md:text-5xl text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F5B613] to-[#E70F0F] ">
              Benson Ibeabuchi
              <br />
            </p>
            <p className="md:text-5xl text-3xl font-bold">I build things for web</p>
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
                <p className="font-light text-sm text-gray-400 mb-2">HTML, Javascript, React.js, Next.js</p>
                <p className="max-h-32 font-light text-sm overflow-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.</p>
                <div className="bg-black rounded-lg w-2/4 items-center ">
                  <Link href="https://akwukwo.vercel.app/" target="_blank" className="text-white justify-center flex p-3 my-4 cursor-pointer gap-2 items-center hover:bg-red-500 rounded-md">
                    <FaLink /> <p>Live Preview</p>
                  </Link>
                </div>
              </div>
            </Link>
            <Link href="http://echo1-048a0f46d862.herokuapp.com/" target="_blank" className="cursor-pointer my-8">
              <div className="w-[371px] h-[614px] p-4 rounded-xl shadow-2xl bg-white hover:scale-105 transition-all my-12 ">
                <h1 className="font-semibold text-2xl mt-4">Echo</h1>
                <p className="font-light mb-3">A news sharing API</p>
                <div className="h-[215px] bg-red-400 overflow-hidden">
                  <Image src={echo} alt="Akwukwo website" width={900} className="object-cover h-full w-full" />
                </div>
                <p className="bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Tech Stack</p>
                <p className="font-light text-sm text-gray-400 mb-2">HTML, Javascript, React.js, Next.js</p>
                <p className="max-h-32 font-light text-sm overflow-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.</p>
                <div className="bg-black rounded-lg w-2/4 items-center ">
                  <Link href="http://echo1-048a0f46d862.herokuapp.com/" target="_blank" className="text-white justify-center flex p-3 my-4 cursor-pointer gap-2 items-center hover:bg-red-500 rounded-md">
                    <FaLink /> <p>Live Preview</p>
                  </Link>
                </div>
              </div>
            </Link>
            <Link href="/" target="_blank" className="cursor-pointer my-8">
              <div className="w-[371px] h-[614px] p-4 rounded-xl shadow-2xl bg-white hover:scale-105 transition-all ">
                <h1 className="font-semibold text-2xl mt-4">Akalibe</h1>
                <p className="font-light mb-3">An e-commerce fashion website</p>
                <div className="h-[215px] overflow-hidden">
                  <Image src={akalibe} alt="Akwukwo website" width={900} className="object-cover h-full w-full" />
                </div>
                <p className="bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Tech Stack</p>
                <p className="font-light text-sm text-gray-400 mb-2">HTML, Javascript, React.js, Next.js</p>
                <p className="max-h-32 font-light text-sm overflow-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti </p>
                <div className="bg-black rounded-lg w-2/4 items-center ">
                  <Link href="https://akwukwo.vercel.app/" className="text-white justify-center flex p-3 my-4 cursor-pointer gap-2 items-center hover:bg-red-500 rounded-md">
                    <FaLink /> <p>Live Preview</p>
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div>
          <Stack />
        </div>
      </div>

      <Footer />
    </>
  );
}
