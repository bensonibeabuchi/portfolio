import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import benson from "../images/benson.jpg";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import Link from "next/link";
import profile from "../images/profile1.jpg";

export default function About() {
  return (
    <>
      <Navbar />
      <div>
        <div className="mt-16">
          <h1 className="md:text-5xl ml-7 text-3xl p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">About Me</h1>
          <div className="flex space-x-8 p-4">
            <div className="hidden md:block w-1/4 overflow-clip h-[900px]">
              <Image src={benson} width={2000} alt="my portrait" />
            </div>
            <div className="md:w-3/4">
              <div className="md:ml-16">
                <div className="my-8 space-y-4">
                  <h2 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">PROFESSIONAL SUMMARY</h2>
                  <p className="leading-loose">A passionate Fullstack Developer with a relentless drive for solving complex problems through technology. My versatile skill set includes proficiency in a wide array of programming languages and frameworks, such as: HTML, CSS, Tailwind CSS, JavaScript, Next.js, Python, Django, ORM (Object-Relational Mapping), Django Rest Framework and UI designs. My mission as a Fullstack Developer is to bridge the gap between technology and real-world issues. I aim to create solutions that are not only efficient and robust but also user-centric, making a meaningful impact on peoples lives.</p>
                </div>
                <div className="my-8 space-y-4">
                  <h2 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">TECHNICAL SKILLS</h2>
                  <div className="indent-8 leading-loose">
                    <div className="">
                      <li className="">Programming Languages: Python, JavaScript</li>
                      <li>Frontend Development: React.js, Next.js</li>
                      <li>Backend Development: Django</li>
                      <li>Database Management: Postgres</li>
                      <li>Version Control: Git/GitHub</li>
                    </div>
                  </div>
                </div>
                <div className="my-8 space-y-4 leading-loose">
                  <h2 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">EDUCATION</h2>
                  <div>
                    <li className="indent-8">Bachelor of Technology in Financial Management Federal University of Technology Owerri 2014</li>
                    <p className="font-semibold">Certifications</p>
                    <div className="indent-8">
                      <li>UX Designer - Entry Level 2023</li>
                      <li>Frontend Development - Univelcity, 2023 </li>
                      <li>Product Design - Univelcity, 2023 </li>
                      <li>Backend Development with Python Django - Univelcity, 2023</li>
                    </div>
                  </div>
                </div>
                <div className="my-8 space-y-4 leading-loose">
                  <h2 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">Social Media</h2>
                  <div>
                    <div className="flex gap-4">
                      <Link href="https://www.linkedin.com/in/bensonibeabuchi/" target="_blank">
                        <FaLinkedin className="h-8 w-8 mt-4" />
                      </Link>
                      <Link href="https://github.com/bensonibeabuchi" target="_blank">
                        <FaGithub className="h-8 w-8 mt-4" />
                      </Link>
                      <Link href="https://twitter.com/BensonIbeabuchi" target="_blank">
                        <FaTwitterSquare className="h-8 w-8 mt-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
