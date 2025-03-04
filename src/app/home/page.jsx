import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import zlide from "../../../public/images/zlide.png";
import dugout from "../../../public/images/dugout.png";
import Link from "next/link";
import Head from 'next/head'


import { FaLink } from "react-icons/fa6";

import Project_bar from "../components/Project_bar";

export default function Home() {

  return (
    <>
    <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5444473500763929" crossorigin="anonymous">

     </script>
      </Head>
      <Navbar />

      <div>
        {/* Hero Section */}
        <div className="flex mt-24 mx-auto items-center justify-center text-center">
          <div className="text-wrap">
            {/* <p className="text-base md:text-2xl font-bold">Hi, I am</p> */}
            <p className="md:text-[156px] text-3xl font-bold bg-clip-text text-transparent leading-none bg-gradient-to-r from-[#F5B613] to-[#E70F0F]"><span className="text-black">I am</span>Benson Ibeabuchi</p>
            <p className="md:text-5xl text-3xl font-bold mt-8">The fullstack developer 💻</p>
          </div>
          {/* <div className="hidden md:block">
            <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/hero_side.png?raw=true"} width={500} alt="code snippets" height="500" />
          </div> */}
        </div>

        {/* Project Section */}
        <div className="mt-48 mb-48 justify-center items-center flex flex-col">
          <h1 className="text-5xl p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">Projects</h1>
          <p>Find below some projects I have built</p>
          <Project_bar />
          
          {/* Project Card */}
          <div className="gap-16 grid lg:grid-cols-3 md:grid-cols-2">

          <div className="md:w-[371px] w-[330px] md:h-[614px] p-4 rounded-xl shadow-2xl bg-white hover:scale-105 transition-all mx-auto overflow-clip mb-16 ">
              <h1 className="font-semibold md:text-2xl text-xl mt-4">FPL DUGOUT</h1>
              <p className="font-light text-xs md:text-base mb-3">Your ultimate tool for tracking Fantasy Premier League mini-leagues in real time.</p>
              <div className="h-[215px] overflow-hidden">
                <Image src={dugout} height={100} alt="Zlide Website" width={900} className="object-cover h-full w-full" />
              </div>
              {/* <p className="bg-clip-text text-sm md:text-base font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Tech Stack</p> */}
              <p className="bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Python, Django, Nextjs, Redux, RTK Query</p>
              <p className="max-h-32 font-light text-sm line-clamp-5">FPL Dugout is your ultimate tool for tracking Fantasy Premier League mini-leagues in real time. Stay ahead of the competition with live updates on your league standings, player performances, and transfers. Get the insights you need to outsmart your rivals and climb to the top</p>
              <div className="bg-black rounded-lg w-2/4 items-center ">
                <a href="https://fpl-dugout.vercel.app/" target="_blank" className="text-white justify-center flex p-3 my-4 cursor-pointer gap-2 items-center hover:bg-[#353535] hover:scale-105 hover:text-white rounded-md">
                  <FaLink /> <p>Live Preview</p>
                </a>
              </div>
          </div>

          <div className="md:w-[371px] w-[330px] md:h-[614px] p-4 rounded-xl shadow-2xl bg-white hover:scale-105 transition-all mx-auto overflow-clip mb-16 ">
              <h1 className="font-semibold md:text-2xl text-xl mt-4">Zlide</h1>
              <p className="font-light text-xs md:text-base mb-3">This is an AI Pitch Deck maker. Just input your prompt and we handle the rest</p>
              <div className="h-[215px] overflow-hidden">
                <Image src={zlide} height={100} alt="Zlide Website" width={900} className="object-cover h-full w-full" />
              </div>
              {/* <p className="bg-clip-text text-sm md:text-base font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Tech Stack</p> */}
              <p className="bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Python, Django, Nextjs, Redux, RTK Query</p>
              <p className="max-h-32 font-light text-sm line-clamp-5">A webapp that creates a presentation/Pitch deck for you in seconds with the help of ai. You can also download the presentation to your device in Powerpoint format and it is fully customizable</p>
              <div className="bg-black rounded-lg w-2/4 items-center ">
                <a href="https://zlide-ben.vercel.app/" target="_blank" className="text-white justify-center flex p-3 my-4 cursor-pointer gap-2 items-center hover:bg-[#353535] hover:scale-105 hover:text-white rounded-md">
                  <FaLink /> <p>Live Preview</p>
                </a>
              </div>
          </div>

          <div className="md:w-[371px] w-[330px] md:h-[614px] p-4 rounded-xl shadow-2xl bg-white hover:scale-105 transition-all mx-auto overflow-clip mb-16">
            <h1 className="font-semibold md:text-2xl text-xl mt-4">Stem</h1>
            <p className="font-light text-xs md:text-base mb-3">Budget and Expense Tracking Mobile App</p>
            <div className="h-[215px] overflow-hidden">
              <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/stem.png?raw=true"} height={100} alt="Stem design" width={900} className="object-cover h-full w-full" />
            </div>
            {/* <p className="bg-clip-text text-sm md:text-base font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Tech Stack</p> */}
            <p className="bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">UI/UX, Figma</p>
            <p className="hidden md:block max-h-32 font-light text-sm line-clamp-5">Stem is the ultimate Budget and Expense Tracking mobile app designed in Figma. Streamline your financial journey with a minimalist and intuitive interface crafted to perfection.</p>
            <div className="bg-black rounded-lg w-2/4 items-center ">
              <Link href="https://dribbble.com/shots/24630741-Stem-Budget-and-expense-tracking-mobile-app" target="_blank" className="text-white justify-center flex p-3 my-4 cursor-pointer gap-2 items-center hover:bg-[#353535] hover:scale-105 hover:text-white rounded-md">
                <FaLink /> <p>Live Preview</p>
              </Link>
            </div>
          </div>

            <div className="md:w-[371px] w-[330px] md:h-[614px] p-4 rounded-xl shadow-2xl bg-white hover:scale-105 transition-all mx-auto overflow-clip mb-16 ">
              <h1 className="font-semibold text-2xl mt-4">Echo</h1>
              <p className="font-light mb-3">A mobile app that get&apos;s Live news from All over the world</p>
              <div className="h-[215px] bg-red-400 overflow-hidden">
                <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/4.png?raw=true"} height={100} alt="Echo website" width={900} className="object-cover h-full w-full" />
              </div>
              {/* <p className="bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Tech Stack</p> */}
              <p className="bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Expo, React Native, Python, DRF, Postgres</p>
              <small className="text-red-500">NB: Download Expo-go from your app store to use this app</small>
              <p className="max-h-32 font-light text-sm line-clamp-5">ECHO News API is your gateway to the latest and most relevant news, seamlessly delivered through a Django-powered platform. Developed with Django and Django Rest Framework for robust backend functionality, and styled with Tailwind CSS, our API offers a comprehensive and user friendly news experience.</p>
              <div className="bg-black rounded-lg w-2/4 items-center ">
                <a href="https://expo.dev/preview/update?message=updated%20index%20page&updateRuntimeVersion=1.0.2&createdAt=2024-10-23T17%3A49%3A26.805Z&slug=exp&projectId=5f09be88-4c60-48b3-b6ad-538326f0093a&group=db88e8f1-8a7a-4c93-8f05-26ac32d42058" target="_blank" className="text-white justify-center flex p-3 my-4 cursor-pointer gap-2 items-center hover:bg-[#353535] hover:scale-105 hover:text-white rounded-md">
                  <FaLink /> <p>Live Preview</p>
                </a>
              </div>
            </div>

            <div className="md:w-[371px] w-[330px] md:h-[614px] p-4 rounded-xl shadow-2xl bg-white hover:scale-105 transition-all mx-auto overflow-clip mb-16 ">
              <h1 className="font-semibold text-2xl mt-4">Akwukwo</h1>
              <p className="font-light mb-3">An e-learning full stack project</p>
              <div className="h-[215px] bg-red-400 overflow-hidden">
                <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/akw.png?raw=true"} height={100} alt="Akwukwo website" width={900} className="object-cover h-full w-full" />
              </div>
              {/* <p className="bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Tech Stack</p> */}
              <p className="bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">HTML, Javascript, React, Next.js, TailwindCSS</p>
              <p className="max-h-32 font-light text-sm line-clamp-5">Akwukwo is an innovative eLearning Platform, where knowledge meets cutting-edge technology. Developed with Next.js for dynamic web applications and styled with Tailwind CSS, our platform is designed to redefine your educational experience.</p>
              <div className="bg-black rounded-lg w-2/4 items-center ">
                <a href="https://akwukwo.vercel.app/" target="_blank" className="text-white justify-center flex p-3 my-4 cursor-pointer gap-2 items-center hover:bg-[#353535] hover:scale-105 hover:text-white rounded-md">
                  <FaLink /> <p>Live Preview</p>
                </a>
              </div>
            </div>
            
          

            <div className="md:w-[371px] w-[330px] md:h-[614px] p-4 rounded-xl shadow-2xl bg-white hover:scale-105 transition-all mx-auto overflow-clip mb-16 ">
              <h1 className="font-semibold md:text-2xl text-xl mt-4">Akalibe</h1>
              <p className="font-light text-xs md:text-base mb-3">An ecommerce fashion store</p>
              <div className="h-[215px] overflow-hidden">
                <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/akalibe.png?raw=true"} height={100} alt="Akalibe Website
                " width={900} className="object-cover h-full w-full" />
              </div>
              {/* <p className="bg-clip-text text-sm md:text-base font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Tech Stack</p> */}
              <p className="bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Python, Django, HTML, TailwindCSS</p>
              <p className="max-h-32 font-light text-sm line-clamp-5">A virtual marketplace built with the robust Python Django framework, brought to life with HTML, and styled with Tailwind CSS. Immerse yourself in a seamless shopping experience where technology meets style.</p>
              <div className="bg-black rounded-lg w-2/4 items-center ">
                <a href="https://akalibe.vercel.app/" target="_blank" className="text-white justify-center flex p-3 my-4 cursor-pointer gap-2 items-center hover:bg-[#353535] hover:scale-105 hover:text-white rounded-md">
                  <FaLink /> <p>Live Preview</p>
                </a>
              </div>
            </div>

            <div className="md:w-[371px] w-[330px] md:h-[614px] p-4 rounded-xl shadow-2xl bg-white hover:scale-105 transition-all mx-auto overflow-clip mb-16">
            <h1 className="font-semibold md:text-2xl text-xl mt-4">Nexus</h1>
            <p className="font-light text-xs md:text-base mb-3 truncate">A CRM web app</p>
            <div className="h-[215px] overflow-hidden">
              <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/nexus_logo.png?raw=true"} height={100} alt="Nexus website" width={900} className="object-cover h-full w-full" />
            </div>
            {/* <p className="bg-clip-text text-sm md:text-base font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Tech Stack</p> */}
            <p className="bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Django, Postgres, HTML, CSS</p>
            <p className="hidden md:block max-h-32 font-light text-sm line-clamp-5">Nexus, a robust business solution built on the solid foundation of Django, with a user-friendly interface crafted in HTML and CSS. Our platform is designed to elevate your customer relationship management experience, ensuring seamless interactions and efficient workflow.</p>
            <div className="bg-black rounded-lg w-2/4 items-center ">
              <Link href="https://nexus-kappa-one.vercel.app/" target="_blank" className="text-white justify-center flex p-3 my-4 cursor-pointer gap-2 items-center hover:bg-[#353535] hover:scale-105 hover:text-white rounded-md">
                <FaLink /> <p>Live Preview</p>
              </Link>
            </div>
          </div>

       

          

          </div>
        </div>

        {/* Tech Stack Section */}
        <div>
          <div className="justify-center mt-32 mb-32 items-center flex flex-col">
            <h1 className="md:text-5xl text-3xl t p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">My Tech Stack</h1>
            <p className="text-xs md:text-base">Technologies I have been working with recently</p>
            <div className="md:space-y-16 space-y-2 my-6">
              <div className="flex md:gap-16 gap-2 md:my-8 p-4">
                <Image src={"https://raw.githubusercontent.com/bensonibeabuchi/capstoneimages/refs/heads/main/images/expo-icon.svg"} alt="html logo" width={50} height={50} className="md:h-40 md:w-40 mt-4 hover:scale-110 transition-all cursor-pointer" />
                <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/css.png?raw=true"} alt="css logo" width={50} height={50} className="md:h-40 md:w-40 mt-4 hover:scale-110 transition-all cursor-pointer" />
                <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/javascript.png?raw=true"} alt="javascript logo" width={50} height={50} className="md:h-40 md:w-40 mt-4 hover:scale-110 transition-all cursor-pointer" />
                <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/react.png?raw=true"} alt="react logo" width={50} height={50} className="md:h-40 md:w-40 mt-4 transition-all duration-1000 hover:animate-spin cursor-pointer" />
                <Image src={"https://raw.githubusercontent.com/bensonibeabuchi/capstoneimages/dc012faadbe0e69685cf5a8df8dfe85cfed41278/images/nextjs.svg"} alt="nextjs logo" width={50} height={50} className="md:h-40 md:w-40  mt-4 hover:scale-110 transition-all cursor-pointer" />
              </div>
              <div className="flex md:gap-16 gap-2 md:my-16 p-4">
                <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/github.png?raw=true"} alt="Github logo" width={50} height={50} className="md:h-40 md:w-40 mt-4 hover:scale-110 transition-all cursor-pointer" />
                <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/tailwindlogo.png?raw=true"} alt="Tailwind logo" width={50} height={50} className="md:h-40 md:w-40 mt-4 hover:scale-110 transition-all cursor-pointer" />
                <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/Python.png?raw=true"} alt="Python logo" width={50} height={50} className="md:h-40 md:w-40 mt-4 hover:scale-110 transition-all cursor-pointer" />
                <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/Django.png?raw=true"} alt="Django logo" width={50} height={50} className="md:h-40 md:w-40 mt-4 hover:scale-110 transition-all cursor-pointer" />
                <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/drf.png?raw=true"} alt="DRF logo" width={50} height={50} className="md:h-40 md:w-40 mt-4 hover:scale-110 transition-all cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
