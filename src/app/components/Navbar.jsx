"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaWindowClose } from "react-icons/fa";

export default function Navbar() {
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <>
      <nav className="py-8 sticky top-0 bg-[#f4f4f4] z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 ">
                <Link href="/">
                  <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/benson_logo.png?raw=true"} height={100} alt="logo" width="250" className="m-8 cursor-pointer" />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <ul className="flex gap-2">
                  <Link href="/home" className="hover:bg-black hover:text-white rounded-lg hover:scale-110 p-2">
                    <li>Home</li>
                  </Link>
                  <Link href="/projects" className="hover:bg-black hover:text-white rounded-lg hover:scale-110 p-2">
                    <li>Projects</li>
                  </Link>
                  <Link href="/tech_stack" className="hover:bg-black hover:text-white rounded-lg hover:scale-110 p-2">
                    <li>Tech Stack</li>
                  </Link>
                  <Link href="/about" className="hover:bg-black hover:text-white rounded-lg hover:scale-110 p-2">
                    <li>About</li>
                  </Link>
                  <Link href="/contact" className="hover:bg-black hover:text-white rounded-lg hover:scale-110 p-2">
                    <li>Contact</li>
                  </Link>
                  <Link href="/blog" className="hover:bg-black hover:text-white rounded-lg hover:scale-110 p-2">
                    <li>Blog</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button className="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={toggleNavbar}>
                {isClick ? <FaWindowClose className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
              <Link href="/home" className="hover:bg-black block hover:text-white rounded-lg p-2 ml-8">
                <p>Home</p>
              </Link>
              <Link href="/projects" className="hover:bg-black block hover:text-white rounded-lg p-2 ml-8">
                <p>Projects</p>
              </Link>
              <Link href="/tech_stack" className="hover:bg-black block hover:text-white rounded-lg p-2 ml-8">
                <p>Tech Stack</p>
              </Link>
              <Link href="/about" className="hover:bg-black block hover:text-white rounded-lg p-2 ml-8">
                <p>About</p>
              </Link>
              <Link href="/contact" className="hover:bg-black block hover:text-white rounded-lg p-2 ml-8">
                <p>Contact</p>
              </Link>
              <Link href="/blog" className="hover:bg-black block hover:text-white rounded-lg p-2 ml-8">
                <p>Blog</p>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
