import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Product_Card from "../components/Project_Card";

import echo from "../images/echo.png";
import nexus from "../images/nexus_logo.png";
import dossier from "../images/dossier.svg";

import stem from "../images/stem.png";
import chowly from "../images/chowly.png";
import slack from "../images/slack.png";

import cgpa from "../images/cgpa.png";
import pgenerator from "../images/pgenerator.png";
import bmi from "../images/bmi.png";

import { FaLink } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <Navbar />

      {/* Javascript mini projects */}
      <div id="javascript" className="mt-16">
        <h1 className="md:text-5xl text-3xl p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">Javascript Mini Projects</h1>
        <div className="md:flex space-y-8 gap-16 items-center justify-center p-8">
          <div className="w-[371px] p-4 rounded-xl shadow-2xl bg-white hover:scale-105 transition-all mx-auto overflow-clip ">
            <h1 className="font-semibold md:text-2xl text-xl mt-4">CGPA Calculator</h1>
            <p className="font-light text-xs md:text-base mb-3 truncate">A Cummulative grade point average calculator</p>
            <div className="h-[215px] bg-red-400 overflow-hidden">
              <Image src={cgpa} alt="Akwukwo website" width={900} className="object-cover h-full w-full" />
            </div>
            <p className="bg-clip-text text-sm md:text-base font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Tech Stack</p>
            <p className="font-light md:text-sm text-xs text-gray-400 mb-2">Javascript, HTML, CSS</p>
            <p className="hidden md:block max-h-32 font-light text-sm line-clamp-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.</p>
            <div className="bg-black rounded-lg w-2/4 items-center ">
              <Link href="https://bensonibeabuchi.github.io/6B2/cgpa_calculator/cgpa.html" target="_blank" className="text-white justify-center flex p-3 my-4 cursor-pointer gap-2 items-center hover:bg-[#353535] hover:scale-105 hover:text-white rounded-md">
                <FaLink /> <p>Live Preview</p>
              </Link>
            </div>
          </div>
          <div className="w-[371px] p-4 rounded-xl shadow-2xl bg-white hover:scale-105 transition-all mx-auto overflow-clip ">
            <h1 className="font-semibold md:text-2xl text-xl mt-4">Password Generator</h1>
            <p className="font-light text-xs md:text-base mb-3 truncate">An app to generate unbreakbale password whenever you need it</p>
            <div className="h-[215px] bg-red-400 overflow-hidden">
              <Image src={pgenerator} alt="Akwukwo website" width={900} className="object-cover h-full w-full" />
            </div>
            <p className="bg-clip-text text-sm md:text-base font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Tech Stack</p>
            <p className="font-light md:text-sm text-xs text-gray-400 mb-2">Javascript, HTML, CSS</p>
            <p className="hidden md:block max-h-32 font-light text-sm line-clamp-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.</p>
            <div className="bg-black rounded-lg w-2/4 items-center ">
              <Link href="https://bensonibeabuchi.github.io/6B2/assignment/password.html" target="_blank" className="text-white justify-center flex p-3 my-4 cursor-pointer gap-2 items-center hover:bg-[#353535] hover:scale-105 hover:text-white rounded-md">
                <FaLink /> <p>Live Preview</p>
              </Link>
            </div>
          </div>
          <div className="w-[371px] p-4 rounded-xl shadow-2xl bg-white hover:scale-105 transition-all mx-auto overflow-clip ">
            <h1 className="font-semibold md:text-2xl text-xl mt-4">BMI Calculator</h1>
            <p className="font-light text-xs md:text-base mb-3 truncate">Body Mass Index calculator developed using JS</p>
            <div className="h-[215px] bg-red-400 overflow-hidden">
              <Image src={bmi} alt="Akwukwo website" width={900} className="object-cover h-full w-full" />
            </div>
            <p className="bg-clip-text text-sm md:text-base font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Tech Stack</p>
            <p className="font-light md:text-sm text-xs text-gray-400 mb-2">UI/UX</p>
            <p className="hidden md:block max-h-32 font-light text-sm line-clamp-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.</p>
            <div className="bg-black rounded-lg w-2/4 items-center ">
              <Link href="https://bensonibeabuchi.github.io/6B2/cgpa_calculator/bmi.html" target="_blank" className="text-white justify-center flex p-3 my-4 cursor-pointer gap-2 items-center hover:bg-[#353535] hover:scale-105 hover:text-white rounded-md">
                <FaLink /> <p>Live Preview</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Backend projects */}
      <div id="backend" className="mt-16">
        <h1 className="md:text-5xl text-3xl p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">Backend Projects</h1>
        <div className="md:flex space-y-8 gap-16 items-center justify-center p-8">
          <div className="w-[371px] p-4 rounded-xl shadow-2xl bg-white hover:scale-105 transition-all mx-auto overflow-clip ">
            <h1 className="font-semibold md:text-2xl text-xl mt-4">Echo</h1>
            <p className="font-light text-xs md:text-base mb-3 truncate">A news sharing webapp with API endpoints</p>
            <div className="h-[215px] bg-red-400 overflow-hidden">
              <Image src={echo} alt="Akwukwo website" width={900} className="object-cover h-full w-full" />
            </div>
            <p className="bg-clip-text text-sm md:text-base font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Tech Stack</p>
            <p className="font-light md:text-sm text-xs text-gray-400 mb-2 truncate">Python, DJango, Django RestFramework, Postgres</p>
            <p className="hidden md:block max-h-32 font-light text-sm line-clamp-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.</p>
            <div className="bg-black rounded-lg w-2/4 items-center ">
              <Link href="http://echo1-048a0f46d862.herokuapp.com/" target="_blank" className="text-white justify-center flex p-3 my-4 cursor-pointer gap-2 items-center hover:bg-[#353535] hover:scale-105 hover:text-white rounded-md">
                <FaLink /> <p>Live Preview</p>
              </Link>
            </div>
          </div>
          <div className="w-[371px] p-4 rounded-xl shadow-2xl bg-white hover:scale-105 transition-all mx-auto overflow-clip ">
            <h1 className="font-semibold md:text-2xl text-xl mt-4">Nexus</h1>
            <p className="font-light text-xs md:text-base mb-3 truncate">A CRM web app</p>
            <div className="h-[215px] bg-red-400 overflow-hidden">
              <Image src={nexus} alt="Akwukwo website" width={900} className="object-cover h-full w-full" />
            </div>
            <p className="bg-clip-text text-sm md:text-base font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Tech Stack</p>
            <p className="font-light md:text-sm text-xs text-gray-400 mb-2">Django, Postgres, HTML, CSS</p>
            <p className="hidden md:block max-h-32 font-light text-sm line-clamp-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.</p>
            <div className="bg-black rounded-lg w-2/4 items-center ">
              <Link href="/" target="_blank" className="text-white justify-center flex p-3 my-4 cursor-pointer gap-2 items-center hover:bg-[#353535] hover:scale-105 hover:text-white rounded-md">
                <FaLink /> <p>Live Preview</p>
              </Link>
            </div>
          </div>
          <div className="w-[371px] p-4 rounded-xl shadow-2xl bg-white hover:scale-105 transition-all mx-auto overflow-clip ">
            <h1 className="font-semibold md:text-2xl text-xl mt-4">Dossier</h1>
            <p className="font-light text-xs md:text-base mb-3 truncate">A task manager</p>
            <div className="h-[215px] bg-red-400 overflow-hidden">
              <Image src={dossier} alt="Akwukwo website" width={900} className="object-cover h-full w-full" />
            </div>
            <p className="bg-clip-text text-sm md:text-base font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Tech Stack</p>
            <p className="font-light md:text-sm text-xs text-gray-400 mb-2">Django, Postgres, HTML, TailwindCSS</p>
            <p className="hidden md:block max-h-32 font-light text-sm line-clamp-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.</p>
            <div className="bg-black rounded-lg w-2/4 items-center ">
              <Link href="/" target="_blank" className="text-white justify-center flex p-3 my-4 cursor-pointer gap-2 items-center hover:bg-[#353535] hover:scale-105 hover:text-white rounded-md">
                <FaLink /> <p>Live Preview</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Product design projects */}
      <div id="product" className="mt-16">
        <h1 className="md:text-5xl text-3xl p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">Product Design Projects</h1>
        <div className="md:flex space-y-8 gap-16 items-center justify-center p-8">
          <div className="w-[371px] p-4 rounded-xl shadow-2xl bg-white hover:scale-105 transition-all mx-auto overflow-clip ">
            <h1 className="font-semibold md:text-2xl text-xl mt-4">Stem</h1>
            <p className="font-light text-xs md:text-base mb-3">Budget and Expense Tracking Mobile App</p>
            <div className="h-[215px] bg-red-400 overflow-hidden">
              <Image src={stem} alt="Akwukwo website" width={900} className="object-cover h-full w-full" />
            </div>
            <p className="bg-clip-text text-sm md:text-base font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Tech Stack</p>
            <p className="font-light md:text-sm text-xs text-gray-400 mb-2">UI/UX</p>
            <p className="hidden md:block max-h-32 font-light text-sm line-clamp-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.</p>
            <div className="bg-black rounded-lg w-2/4 items-center ">
              <Link href="https://akwukwo.vercel.app/" target="_blank" className="text-white justify-center flex p-3 my-4 cursor-pointer gap-2 items-center hover:bg-[#353535] hover:scale-105 hover:text-white rounded-md">
                <FaLink /> <p>Live Preview</p>
              </Link>
            </div>
          </div>
          <div className="w-[371px] p-4 rounded-xl shadow-2xl bg-white hover:scale-105 transition-all mx-auto overflow-clip ">
            <h1 className="font-semibold md:text-2xl text-xl mt-4">Chowly</h1>
            <p className="font-light text-xs md:text-base mb-3">Food ordering and delivery app</p>
            <div className="h-[215px] bg-red-400 overflow-hidden">
              <Image src={chowly} alt="Akwukwo website" width={900} className="object-cover h-full w-full" />
            </div>
            <p className="bg-clip-text text-sm md:text-base font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Tech Stack</p>
            <p className="font-light md:text-sm text-xs text-gray-400 mb-2">UI/UX</p>
            <p className="hidden md:block max-h-32 font-light text-sm line-clamp-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.</p>
            <div className="bg-black rounded-lg w-2/4 items-center ">
              <Link href="https://akwukwo.vercel.app/" target="_blank" className="text-white justify-center flex p-3 my-4 cursor-pointer gap-2 items-center hover:bg-[#353535] hover:scale-105 hover:text-white rounded-md">
                <FaLink /> <p>Live Preview</p>
              </Link>
            </div>
          </div>
          <div className="w-[371px] p-4 rounded-xl shadow-2xl bg-white hover:scale-105 transition-all mx-auto overflow-clip ">
            <h1 className="font-semibold md:text-2xl text-xl mt-4">Slack</h1>
            <p className="font-light text-xs md:text-base mb-3">A redesign of Slack Homepage</p>
            <div className="h-[215px] bg-red-400 overflow-hidden">
              <Image src={slack} alt="Akwukwo website" width={900} className="object-cover h-full w-full" />
            </div>
            <p className="bg-clip-text text-sm md:text-base font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Tech Stack</p>
            <p className="font-light md:text-sm text-xs text-gray-400 mb-2">UI/UX</p>
            <p className="hidden md:block max-h-32 font-light text-sm line-clamp-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.</p>
            <div className="bg-black rounded-lg w-2/4 items-center ">
              <Link href="https://akwukwo.vercel.app/" target="_blank" className="text-white justify-center flex p-3 my-4 cursor-pointer gap-2 items-center hover:bg-[#353535] hover:scale-105 hover:text-white rounded-md">
                <FaLink /> <p>Live Preview</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Frontend projects */}
      <div id="frontend" className="mt-16">
        <h1 className="md:text-5xl text-3xl p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">Frontend Projects</h1>
        <div className="md:flex space-y-8 gap-16 items-center justify-center p-8">
          <Product_Card />
          <Product_Card />
          <Product_Card />
        </div>
      </div>

      <div className="my-40"></div>

      <Footer />
    </>
  );
}
