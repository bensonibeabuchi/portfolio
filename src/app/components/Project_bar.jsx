"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaWindowClose, FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa6";

export default function Project_bar() {
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  };
  return (
    <>
      <div>
        <div className="py-8 bg-[#f4f4f4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="hidden md:block">
                <div className="ml-4 flex items-center space-x-4">
                  <ul className="flex gap-2 font-semibold text-lg my-16 p-4">
                    <Link href="/projects#frontend" className="hover:bg-black hover:text-white rounded-lg hover:scale-110 p-2">
                      <li className="hover:bg-black hover:text-white hover:scale-105 cursor-pointer p-4 rounded-lg">Frontend Projects</li>
                    </Link>
                    <Link href="/projects#backend" className="hover:bg-black hover:text-white rounded-lg hover:scale-110 p-2">
                      <li className="hover:bg-black hover:text-white hover:scale-105 cursor-pointer p-4 rounded-lg">Backend Projects</li>
                    </Link>
                    <Link href="/projects#product" className="hover:bg-black hover:text-white rounded-lg hover:scale-110 p-2">
                      <li className="hover:bg-black hover:text-white hover:scale-105 cursor-pointer p-4 rounded-lg">Product Design projects</li>
                    </Link>
                    <Link href="/projects#javascript" className="hover:bg-black hover:text-white rounded-lg hover:scale-110 p-2">
                      <li className="hover:bg-black hover:text-white hover:scale-105 cursor-pointer p-4 rounded-lg">Javascript projects</li>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="md:hidden flex items-center">
                <button className="inline-flex items-center justify-center p-2 rounded-md" onClick={toggleNavbar}>
                  {isClick ? (
                    <div className="flex ">
                      <p className="flex items-center gap-8 border-black w-60 border-2 justify-between cursor-pointer p-4 rounded-lg">
                        Projects <FaChevronUp />
                      </p>
                    </div>
                  ) : (
                    <div className="flex ">
                      <p className="flex items-center gap-8 border-black w-60 border-2 justify-between cursor-pointer p-4 rounded-lg">
                        Projects <FaChevronDown />
                      </p>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
          {isClick && (
            <div className="md:hidden w-60 mx-auto">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-black border rounded-lg shadow ">
                <Link href="/projects#frontend">
                  <p className="hover:bg-black hover:text-white hover:scale-105 cursor-pointer p-4 rounded-lg">Frontend Projects</p>
                </Link>
                <Link href="/projects#backend">
                  <p className="hover:bg-black hover:text-white hover:scale-105 cursor-pointer p-4 rounded-lg">Backend Projects</p>
                </Link>
                <Link href="/projects#product">
                  <p className="hover:bg-black hover:text-white hover:scale-105 cursor-pointer p-4 rounded-lg">Product Design projects</p>
                </Link>
                <Link href="/projects#javascript">
                  <p className="hover:bg-black hover:text-white hover:scale-105 cursor-pointer p-4 rounded-lg">Javascript projects</p>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
