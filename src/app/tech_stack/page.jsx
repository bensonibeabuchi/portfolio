import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function page() {
  return (
    <>
      <div>
        <Navbar />
        <div>
          <div className="justify-center mt-32 mb-32 items-center flex flex-col">
            <h1 className="md:text-5xl text-3xl t p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">My Tech Stack</h1>
            <p className="text-sm md:text-base">Technologies I have been working with recently</p>
            <div className=" md:space-y-24 space-y-8 my-6">
              <div className="flex md:gap-16 gap-4 md:my-8 p-4">
                <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/html.png?raw=true"} alt="html logo" width={70} height={50} className="md:h-40 md:w-40 mt-4 hover:scale-110 transition-all cursor-pointer" />
                <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/css.png?raw=true"} alt="css logo" width={70} height={50} className="md:h-40 md:w-40 mt-4 hover:scale-110 transition-all cursor-pointer" />
                <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/javascript.png?raw=true"} alt="javascript logo" width={70} height={50} className="md:h-40 md:w-40 mt-4 hover:scale-110 transition-all cursor-pointer" />
                <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/react.png?raw=true"} alt="react logo" width={70} height={50} className="md:h-40 md:w-40 mt-4 transition-all duration-1000 hover:animate-spin cursor-pointer" />
                <Image src={"https://raw.githubusercontent.com/bensonibeabuchi/capstoneimages/dc012faadbe0e69685cf5a8df8dfe85cfed41278/images/nextjs.svg"} alt="nextjs logo" width={70} height={50} className="md:h-40 md:w-40  mt-4 hover:scale-110 transition-all cursor-pointer" />
              </div>
              <div className="flex md:gap-16 gap-4 md:my-16 p-4">
                <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/github.png?raw=true"} alt="Github logo" width={70} height={50} className="md:h-40 md:w-40 mt-4 hover:scale-110 transition-all cursor-pointer" />
                <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/tailwindlogo.png?raw=true"} alt="Tailwind logo" width={70} height={50} className="md:h-40 md:w-40 mt-4 hover:scale-110 transition-all cursor-pointer" />
                <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/Python.png?raw=true"} alt="Python logo" width={70} height={50} className="md:h-40 md:w-40 mt-4 hover:scale-110 transition-all cursor-pointer" />
                <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/Django.png?raw=true"} alt="Django logo" width={70} height={50} className="md:h-40 md:w-40 mt-4 hover:scale-110 transition-all cursor-pointer" />
                <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/drf.png?raw=true"} alt="DRF logo" width={70} height={50} className="md:h-40 md:w-40 mt-4 hover:scale-110 transition-all cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
