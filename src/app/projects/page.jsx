import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Product_Card from "../components/Project_Card";

import { FaLink } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import zlide from "../../../public/images/zlide.png";

export default function Projects() {
  return (
    <>
      <Navbar />


      {/* Full stack projects projects */}
      <div id="frontend" className="mt-16">
        <h1 className="md:text-5xl text-3xl p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">Fullstack Projects</h1>
        <div className="gap-16 grid lg:grid-cols-3 md:grid-cols-2">

            <div className="md:w-[371px] w-[330px] md:h-[614px] p-4 rounded-xl shadow-2xl bg-white hover:scale-105 transition-all mx-auto overflow-clip mb-16 ">
                <h1 className="font-semibold md:text-2xl text-xl mt-4">Zlide</h1>
                <p className="font-light text-xs md:text-base mb-3">AI Pitch Deck maker</p>
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
        </div>
      </div>

      {/* Javascript mini projects */}
      <div id="javascript" className="mt-16 justify-center">
        <h1 className="md:text-5xl text-3xl p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">Javascript Mini Projects</h1>
        <div className="md:flex gap-16 items-center justify-center p-4">
          <div className="md:w-[371px] w-[330px] md:h-[614px] p-4 rounded-xl shadow-2xl bg-white hover:scale-105 transition-all mx-auto overflow-clip mb-16">
            <h1 className="font-semibold md:text-2xl text-xl mt-4">CGPA Calculator</h1>
            <p className="font-light text-xs md:text-base mb-3 truncate">A Cummulative grade point average calculator</p>
            <div className="h-[215px] overflow-hidden">
              <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/cgpa.png?raw=true"} alt="CGPA calculator" width={900} height={100} className="object-cover h-full w-full" />
            </div>
            {/* <p className="bg-clip-text text-sm md:text-base font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Tech Stack</p> */}
            <p className="bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Javascript, HTML, TailwindCSS</p>
            <p className="hidden md:block max-h-32 font-light text-sm line-clamp-5">CGPA Calculator. A user friendly tool designed to make your academic life a little bit easier. Developed using HTML, JavaScript, and styled with Tailwind CSS framework, our calculator offers a seamless experience for students to effortlessly compute their CGPA.</p>
            <div className="bg-black rounded-lg w-2/4 items-center ">
              <Link href="https://bensonibeabuchi.github.io/6B2/cgpa_calculator/cgpa.html" target="_blank" className="text-white justify-center flex p-3 my-4 cursor-pointer gap-2 items-center hover:bg-[#353535] hover:scale-105 hover:text-white rounded-md">
                <FaLink /> <p>Live Preview</p>
              </Link>
            </div>
          </div>
          <div className="md:w-[371px] w-[330px] md:h-[614px] p-4 rounded-xl shadow-2xl bg-white hover:scale-105 transition-all mx-auto overflow-clip mb-16">
            <h1 className="font-semibold md:text-2xl text-xl mt-4">Password Generator</h1>
            <p className="font-light text-xs md:text-base mb-3 truncate">An app to generate unbreakbale password whenever you need it</p>
            <div className="h-[215px] overflow-hidden">
              <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/pgenerator.png?raw=true"} height={300} alt="Password Generator" width={900} className="object-cover h-full w-full" />
            </div>
            {/* <p className="bg-clip-text text-sm md:text-base font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Tech Stack</p> */}
            <p className="bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Javascript, HTML, CSS</p>
            <p className="hidden md:block max-h-32 font-light text-sm line-clamp-5">Discover the simplicity of secure password creation with our Password Generator. Crafted with HTML, powered by JavaScript, and styled with Tailwind CSS, this tool ensures you have robust passwords at your fingertips. You can Include special characters and also determine the lenght of the password yourself</p>
            <div className="bg-black rounded-lg w-2/4 items-center ">
              <Link href="https://bensonibeabuchi.github.io/6B2/assignment/password.html" target="_blank" className="text-white justify-center flex p-3 my-4 cursor-pointer gap-2 items-center hover:bg-[#353535] hover:scale-105 hover:text-white rounded-md">
                <FaLink /> <p>Live Preview</p>
              </Link>
            </div>
          </div>
          <div className="md:w-[371px] w-[330px] md:h-[614px] p-4 rounded-xl shadow-2xl bg-white hover:scale-105 transition-all mx-auto overflow-clip mb-16">
            <h1 className="font-semibold md:text-2xl text-xl mt-4">BMI Calculator</h1>
            <p className="font-light text-xs md:text-base mb-3 truncate">Body Mass Index calculator developed using JS</p>
            <div className="h-[215px] overflow-hidden">
              <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/BMI.png?raw=true"} alt="BMI website" height={100} width={900} className="object-cover h-full w-full" />
            </div>
            {/* <p className="bg-clip-text text-sm md:text-base font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Tech Stack</p> */}
            <p className="bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">HTML, Javascript, Tailwind CSS</p>
            <p className="hidden md:block max-h-32 font-light text-sm line-clamp-5">Welcome to our BMI Calculator, a straightforward tool designed for health-conscious individuals. Crafted with HTML for structure, JavaScript for dynamic calculations, and Tailwind CSS for a clean interface, our BMI Calculator offers a quick assessment of your body mass index.</p>
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
        <div className="md:flex gap-16 items-center justify-center p-4">
          <div className="md:w-[371px] w-[330px] md:h-[614px] p-4 rounded-xl shadow-2xl bg-white hover:scale-105 transition-all mx-auto overflow-clip mb-16">
            <h1 className="font-semibold md:text-2xl text-xl mt-4">Echo</h1>
            <p className="font-light text-xs md:text-base mb-3 truncate">A news sharing webapp with API endpoints</p>
            <div className="h-[215px] overflow-hidden">
              <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/echo.png?raw=true"} height={100} alt="Echo website" width={900} className="object-cover h-full w-full" />
            </div>
            {/* <p className="bg-clip-text text-sm md:text-base font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Tech Stack</p> */}
            <p className="bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Python, DJango, Django RestFramework, Postgres</p>
            <p className="hidden md:block max-h-32 font-light text-sm line-clamp-5">ECHO News API is your gateway to the latest and most relevant news, seamlessly delivered through a Django-powered platform. Developed with Django and Django Rest Framework for robust backend functionality, and styled with Tailwind CSS, our API offers a comprehensive and user friendly news experience.</p>
            <div className="bg-black rounded-lg w-2/4 items-center ">
              <Link href="https://echo-web-two.vercel.app/" target="_blank" className="text-white justify-center flex p-3 my-4 cursor-pointer gap-2 items-center hover:bg-[#353535] hover:scale-105 hover:text-white rounded-md">
                <FaLink /> <p>Live Preview</p>
              </Link>
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
          <div className="md:w-[371px] w-[330px] md:h-[614px] p-4 rounded-xl shadow-2xl bg-white hover:scale-105 transition-all mx-auto overflow-clip mb-16">
            <h1 className="font-semibold md:text-2xl text-xl mt-4">Akalibe</h1>
            <p className="font-light text-xs md:text-base mb-3 truncate">An ecommerce fashion store</p>
            <div className="h-[215px] overflow-hidden">
              <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/akalibe.png?raw=true"} height={100} alt="Akalibe website" width={900} className="object-cover h-full w-full" />
            </div>
            {/* <p className="bg-clip-text text-sm md:text-base font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Tech Stack</p> */}
            <p className="bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Python, Django, HTML, TailwindCSS</p>
            <p className="hidden md:block max-h-32 font-light text-sm line-clamp-5">A virtual marketplace built with the robust Python Django framework, brought to life with HTML, and styled with Tailwind CSS. Immerse yourself in a seamless shopping experience where technology meets style.</p>
            <div className="bg-black rounded-lg w-2/4 items-center ">
              <Link href="https://akalibe.vercel.app/" target="_blank" className="text-white justify-center flex p-3 my-4 cursor-pointer gap-2 items-center hover:bg-[#353535] hover:scale-105 hover:text-white rounded-md">
                <FaLink /> <p>Live Preview</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      
      {/* Product design projects */}
      <div id="product" className="mt-16">
        <h1 className="md:text-5xl text-3xl p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">Product Design Projects</h1>
        <div className="md:flex gap-16 items-center justify-center p-4">
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
          <div className="md:w-[371px] w-[330px] md:h-[614px] p-4 rounded-xl shadow-2xl bg-white hover:scale-105 transition-all mx-auto overflow-clip mb-16">
            <h1 className="font-semibold md:text-2xl text-xl mt-4">Chowly</h1>
            <p className="font-light text-xs md:text-base mb-3">Food ordering and delivery app</p>
            <div className="h-[215px] overflow-hidden">
              <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/chowly.png?raw=true"} height={100} alt="Chowly Design" width={900} className="object-cover h-full w-full" />
            </div>
            {/* <p className="bg-clip-text text-sm md:text-base font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Tech Stack</p> */}
            <p className="bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">UI/UX, Figma</p>
            <p className="hidden md:block max-h-32 font-light text-sm line-clamp-5">Indulge your taste buds with our Food Ordering App, a culinary journey brought to life through the artful design of Figma. Immerse yourself in a visually enticing experience, where every detail is meticulously crafted to enhance your food exploration.</p>
            <div className="bg-black rounded-lg w-2/4 items-center ">
              <Link href="https://dribbble.com/shots/24630847-chowly" target="_blank" className="text-white justify-center flex p-3 my-4 cursor-pointer gap-2 items-center hover:bg-[#353535] hover:scale-105 hover:text-white rounded-md">
                <FaLink /> <p>Live Preview</p>
              </Link>
            </div>
          </div>
          <div className="md:w-[371px] w-[330px] md:h-[614px] p-4 rounded-xl shadow-2xl bg-white hover:scale-105 transition-all mx-auto overflow-clip mb-16">
            <h1 className="font-semibold md:text-2xl text-xl mt-4">Akalibe Redesign</h1>
            <p className="font-light text-xs md:text-base mb-3">An ecommerce website focused on silk dresses</p>
            <div className="h-[215px] overflow-hidden">
              <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/akalibe.png?raw=true"} height={100} alt="Akalibe ecommerce" width={900} className="object-cover h-full w-full" />
            </div>
            {/* <p className="bg-clip-text text-sm md:text-base font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">Tech Stack</p> */}
            <p className="bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block mt-4">UI/UX, Figma</p>
            <p className="hidden md:block max-h-32 font-light text-sm line-clamp-5">Immerse yourself in a seamless shopping experience focused on silk dresses where technology meets style.</p>
            <div className="bg-black rounded-lg w-2/4 items-center ">
              <Link href="https://www.figma.com/proto/lQNZTXlMt5OEna4sEIWNDI/AKalibe-webapp?node-id=165-88&t=XwACghcGXfeVdazp-1" target="_blank" className="text-white justify-center flex p-3 my-4 cursor-pointer gap-2 items-center hover:bg-[#353535] hover:scale-105 hover:text-white rounded-md">
                <FaLink /> <p>Live Preview</p>
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div className="my-40"></div>

      <Footer />
    </>
  );
}
