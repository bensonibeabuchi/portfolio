import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mx-auto p-8 items-center flex flex-col justify-center">
      <div className="flex flex-col justify-center text-center items-center">
        <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/logo_mark.png?raw=true"} width={20} height={50} alt="logo" className="m-4" />
        <p>
          Designed and built by <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA]">Benson Ibeabuchi</span>
        </p>
      </div>
      <div className="flex gap-2">
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
  );
}
