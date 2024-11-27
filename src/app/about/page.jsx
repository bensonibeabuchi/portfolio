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
                  <p className="leading-loose">
                  As a Full Stack Developer with a strong foundation in Financial Management Technology, I leverage my unique background and passion for storytelling to create innovative and efficient digital solutions. My expertise spans React Native, Expo, React, Next.js, Python, Django, and Figma for UI/UX design, with an aspiration to specialize in mobile app development in the near future.
                  </p>
                </div>

                {/* TECHNICAL SKILLS  */}
                <div className="my-8 space-y-4">
                  <h2 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">TECHNICAL SKILLS</h2>
                  <div className="indent-8 leading-loose">
                    <div className="">
                      <li className=""> <span className="font-bold">Programming Languages:</span> Python, JavaScript, Swift, Kotlin</li>
                      <li> <span className="font-bold">Frontend Development:</span> React.js, Next.js</li>
                      <li><span className="font-bold"> Backend Development: </span> Django</li>
                      <li><span className="font-bold">Mobile App Development:</span> React Native, Expo, Swift, Kotlin</li>
                      <li><span className="font-bold">Database Management:</span> Postgres</li>
                      <li><span className="font-bold">Project Management: </span>Github</li>
                      <li><span className="font-bold">UI Design:</span>Figma</li>
                    </div>
                  </div>
                </div>

                {/* EDUCATION  */}
                <div className="my-8 space-y-4 leading-loose">
                  <h2 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">EDUCATION</h2>
                  <div>
                    <li className="indent-8"> <span className="font-bold"> Bachelor of Technology in Financial Management </span> - Federal University of Technology Owerri, 2014</li>
                    <p className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">Certifications</p>
                    <div className="indent-8">
                      <li className="text-blue-400 hover:cursor-pointer underline"> <a href="https://www.credly.com/badges/fa821d45-fedd-4383-8702-50e30b6450cf/public_url" target="_blank">Meta Full-Stack Engineer Certificate</a> </li>
                      <li className="text-blue-400 hover:cursor-pointer underline"> <a href="https://coursera.org/share/19c64c5c38faa514723fdf5b597b0160" target="_blank">React Native Specialization by Meta</a> </li>
                      <li className="text-blue-400 hover:cursor-pointer underline"> <a href="https://coursera.org/share/7adaae937fb563f342bd407bbcaa5c10" target="_blank">Front-End Developer Professional Certificate by Meta</a> </li>
                      <li className="text-blue-400 hover:cursor-pointer underline"> <a href="https://coursera.org/share/5adcc05799bbfb9a45dab455487312c0" target="_blank">Back-End Developer Professional Certificate by Meta</a> </li>
                      <li className="text-blue-400 hover:cursor-pointer underline"> <a href="https://coursera.org/share/673572d976bc83d9642c9cd3f1a943cb" target="_blank">iOS Developer Professional Certificate</a> </li>
                      <li className="text-blue-400 hover:cursor-pointer underline"> <a href="https://entrylevel-public.s3.amazonaws.com/certificate/3f59ede6-c7b4-419c-a4ac-8c3201c00a56/b4a61a59-510a-4b78-a9db-52e4710f282a_cert.pdf" target="_blank">UX Designer, EntryLevel 2023</a> </li>
                      <li>Full stack Developer - Univelcity, 2023 </li>
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
                      <Link href="https://www.linkedin.com/in/benson-ugochukwu-ibeabuchi/" target="_blank">
                        <FaLinkedin className="h-8 w-8 mt-4" />
                      </Link>
                      <Link href="https://github.com/bensonibeabuchi" target="_blank">
                        <FaGithub className="h-8 w-8 mt-4" />
                      </Link>
                      {/* <Link href="https://twitter.com/bensonIbeabuchi" target="_blank">
                        <FaTwitterSquare className="h-8 w-8 mt-4" />
                      </Link> */}
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
