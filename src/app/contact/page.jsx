import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Navbar />
      <div>
        <div className="mt-16">
          <h1 className="md:text-5xl ml-7 text-3xl p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">Contact Me</h1>
          <div className="flex space-x-8 p-4">
            <div className="hidden md:block w-2/4 overflow-clip h-[900px]">
              <p>I am available for exciting projects as well as potential employment opportunities. Use the form to inquire about rates and availability, or just to say hi 😊.</p>
              <div>
                <Link href="https://www.linkedin.com/in/bensonibeabuchi/" target="_blank" className="my-16 flex items-center space-x-8 ">
                  <FaLinkedin className="h-8 w-8" />
                  <p>https://www.linkedin.com/in/bensonibeabuchi/</p>
                </Link>

                <Link href="https://github.com/bensonibeabuchi" target="_blank" className="my-16 flex items-center space-x-8 ">
                  <FaGithub className="h-8 w-8" />
                  <p>https://github.com/bensonibeabuchi</p>
                </Link>
                <Link href="https://twitter.com/BensonIbeabuchi" target="_blank" className="my-16 flex items-center space-x-8 ">
                  <FaTwitterSquare className="h-8 w-8" />
                  <p>@bensonibeabuchi</p>
                </Link>
              </div>
            </div>
            <div className="md:w-2/4 w-full mx-auto">
              <form action="https://formspree.io/f/mleqearp" method="POST" className="flex flex-col space-y-8 bg-[#000000dc] rounded-lg p-8 text-white">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" className="p-4" />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className="p-4" />

                <label htmlFor="message">Your message here</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>

                <button type="submit" className="bg-white text-black font-semibold p-2 rounded w-2/4 mx-auto cursor-pointer transition-all  hover:scale-105 hover:text-white hover:bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] ">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
