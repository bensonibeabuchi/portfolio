import React from "react";
import Image from "next/image";
import Link from "next/link";
import akw from "../images/akw.png";
import { FaLink } from "react-icons/fa6";

import echo from "../images/echo.png";
import akalibe from "../images/akalibe.png";

export default function Project_Card() {
  return (
    <>
      <div className="w-[371px] p-4 rounded-xl shadow-2xl bg-white hover:scale-105 transition-all mx-auto overflow-clip ">
        <h1 className="font-semibold md:text-2xl text-xl mt-4">Akwukwo</h1>
        <p className="font-light text-xs md:text-base mb-3">An e-learning full stack project</p>
        <div className="h-[215px] bg-red-400 overflow-hidden">
          <Image src={akw} alt="Akwukwo website" width={900} className="object-cover h-full w-full" />
        </div>
        <p className="bg-clip-text text-sm md:text-base font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Tech Stack</p>
        <p className="font-light md:text-sm text-xs text-gray-400 mb-2">HTML, Javascript, React.js, Next.js</p>
        <p className="hidden md:block max-h-32 font-light text-sm overflow-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.</p>
        <div className="bg-black rounded-lg w-2/4 items-center ">
          <Link href="https://akwukwo.vercel.app/" target="_blank" className="text-white justify-center flex p-3 my-4 cursor-pointer gap-2 items-center hover:bg-[#353535] hover:scale-105 hover:text-white rounded-md">
            <FaLink /> <p>Live Preview</p>
          </Link>
        </div>
      </div>
    </>
  );
}
