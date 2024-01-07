import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";


export default function Project_Card() {
  return (
    <>
      <div className="md:w-[371px] w-[330px] md:h-[614px] p-4 rounded-xl shadow-2xl bg-white hover:scale-105 transition-all mx-auto overflow-clip mb-16">
        <h1 className="font-semibold md:text-2xl text-xl mt-4">Akwukwo</h1>
        <p className="font-light text-xs md:text-base mb-3">An e-learning full stack project</p>
        <div className="h-[215px] overflow-hidden">
          <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/akw.png?raw=true"} height={100} alt="Akwukwo website" width={900} className="object-cover h-full w-full" />
        </div>
        {/* <p className="bg-clip-text text-sm md:text-base font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Tech Stack</p> */}
        <p className="bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">HTML, Javascript, React.js, Next.js</p>
        <p className="hidden md:block max-h-32 font-light text-sm line-clamp-5">Akwukwo is an innovative eLearning Platform, where knowledge meets cutting-edge technology. Developed with Next.js for dynamic web applications and styled with Tailwind CSS, our platform is designed to redefine your educational experience.</p>
        <div className="bg-black rounded-lg w-2/4 items-center ">
          <Link href="https://akwukwo.vercel.app/" target="_blank" className="text-white justify-center flex p-3 my-4 cursor-pointer gap-2 items-center hover:bg-[#353535] hover:scale-105 hover:text-white rounded-md">
            <FaLink /> <p>Live Preview</p>
          </Link>
        </div>
      </div>
    </>
  );
}
