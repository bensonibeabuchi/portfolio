import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
import Image from "next/image";

export default function page() {
  return (
    <>
      <div>
        <Navbar />
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
        <Footer />
      </div>
    </>
  );
}
