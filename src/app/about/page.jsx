import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Navbar />
      <div>
        <div className="mt-16">
          <h1 className="md:text-5xl ml-7 text-3xl p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">About Me</h1>
          <div className="flex space-x-8 p-4">
            <div className="hidden md:block w-1/4 overflow-clip h-[900px]">
              <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/logo_mark.png?raw=true"} height={100} width={2000} alt="my portrait" />
            </div>
            <div className="md:w-3/4">
              <div className="md:ml-16">
                <div className="my-8 space-y-4">
                  <h2 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">PROFESSIONAL SUMMARY</h2>
                  <p className="leading-loose">A Fullstack Developer with a passion for solving complex problems through technology, specializing in HTML, CSS, Tailwind CSS, JavaScript, React.js, Next.js, Python, Django, ORM, Django Rest Framework, Figma, UI/UX designs, and React Native for mobile development. Committed to creating user-centric solutions that bridge the gap between technology and real-world issues.</p>
                </div>


                {/* TECHNICAL SKILLS  */}
                <div className="my-8 space-y-4">
                  <h2 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">TECHNICAL SKILLS</h2>
                  <div className="indent-8 leading-loose">
                    <div className="">
                      <li className=""> <span className="font-bold">Programming Languages:</span> Python, JavaScript</li>
                      <li> <span className="font-bold">Frontend Development:</span> React.js, Next.js</li>
                      <li><span className="font-bold"> Backend Development: </span> Django</li>
                      <li><span className="font-bold">Mobile App Development:</span> React Native</li>
                      <li><span className="font-bold">Database Management:</span> Postgres</li>
                      <li><span className="font-bold">Version Control:</span> Git/GitHub</li>
                    </div>
                  </div>
                </div>

                {/* EDUCATION  */}
                <div className="my-8 space-y-4 leading-loose">
                  <h2 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">EDUCATION</h2>
                  <div>
                    <li className="indent-8"> <span className="font-bold"> Bachelor of Technology in Financial Management </span> - Federal University of Technology Owerri, 2014</li>
                    <p className="font-semibold">Certifications</p>
                    <div className="indent-8">
                      <li className="text-blue-400 hover:cursor-pointer underline"> <a href="https://coursera.org/verify/specialization/DND6JKVHC4DL" target="_blank">Meta React Native Specialization Course by Meta, 2024</a> </li>
                      <li className="text-blue-400 hover:cursor-pointer underline"> <a href="https://coursera.org/verify/UEGCUQL347YU" target="_blank">Meta Django Web Framework Course, 2024</a> </li>
                      <li className="text-blue-400 hover:cursor-pointer underline"> <a href="https://coursera.org/verify/B9QKXL3XDFR6" target="_blank">Meta Principles of UX/UI Design, 2024</a> </li>
                      <li className="text-blue-400 hover:cursor-pointer underline"> <a href="https://coursera.org/verify/XFXWU89QXTKE" target="_blank">Meta Programming with Javascript, 2024</a> </li>
                      <li className="text-blue-400 hover:cursor-pointer underline"> <a href="https://entrylevel-public.s3.amazonaws.com/certificate/3f59ede6-c7b4-419c-a4ac-8c3201c00a56/b4a61a59-510a-4b78-a9db-52e4710f282a_cert.pdf" target="_blank">UX Designer, EntryLevel 2023</a> </li>
                      <li>Frontend Development - Univelcity, 2023 </li>
                      <li>Product Design - Univelcity, 2023 </li>
                      <li>Backend Development with Python Django - Univelcity, 2023</li>
                    </div>
                  </div>
                </div>

                {/* WORK EXPERIENCE  */}

                <div className="my-8 space-y-4">
                  <h2 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">WORK EXPERIENCE</h2>
                  <div className="indent-8 leading-loose">
                    <div className="">
                      <p className="font-semibold">Junior Software Developer</p>
                      <p className="font-medium">Paygoo</p>
                      <p className="italic">February 2024 - till date</p>
                      <ul className="font-extralight">
                        <li>Designed front-end architecture and contributed to the in-house UI Library.</li>
                        <li>Collaborated with the product team to implement front-end changes.</li>

                      </ul>
                    </div>

                    <div className="mt-8">
                      <p className="font-semibold">Fullstack Developer</p>
                      <p className="font-medium">Mentorled</p>
                      <p className="italic">January 2024 - till date</p>
                      <ul className="font-extralight">
                        <li>Developed RESTful APIs using Django for React frontend integration.</li>
                        <li>Created an API for automatic PowerPoint presentation generation based on user input.</li>
                        <li>Implemented a robust authentication system, blog creation API and testimonial creation API.</li>
                        <li>Developed the frontend design using next.js</li>
                        <li>Implemented a download feature to download the generated presentation to your local machine</li>
                        <li>Mapped each presentation to the user creating them</li>
                        <li>Hosted all the images on the amazon s3 bucket.</li>

                      </ul>
                    </div>
                  </div>
                </div>

                {/* SOCIAL MEDIA  */}
                <div className="my-8 space-y-4 leading-loose">
                  <h2 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">SOCIAL MEDIA</h2>
                  <div>
                    <div className="flex gap-4">
                      <Link href="https://www.linkedin.com/in/bensonibeabuchi/" target="_blank">
                        <FaLinkedin className="h-8 w-8 mt-4" />
                      </Link>
                      <Link href="https://github.com/bensonibeabuchi" target="_blank">
                        <FaGithub className="h-8 w-8 mt-4" />
                      </Link>
                      <Link href="https://twitter.com/bensonIbeabuchi" target="_blank">
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
