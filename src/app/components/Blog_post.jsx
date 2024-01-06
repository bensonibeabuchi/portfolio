import React from "react";
import Image from "next/image";

export default function Blog_post() {
  return (
    <>
      <div className="md:flex justify-center mx-auto items-center my-16">
        <div>
          <div className="md:w-[421px] w-[325px] h-[268px] md:h-[350px] overflow-hidden justify-center items-center mx-auto rounded-xl">
            <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/tailwind.png?raw=true"} height={100} width={2000} alt="my portrait" className="scale-150 object-cover h-full w-full " />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="md:w-[600px] w-[325px] md:h-[350px] overflow-hidden p-4 justify-center items-center ">
            <h2 className="font-medium md:text-3xl text-xl">How to use Tailwind CSS in your django project</h2>
            <div className="flex flex-col my-4">
              <small className="text-gray-500">Author: Benson Ibeabuchi</small>
              <small className="text-gray-500">5 mins read</small>
            </div>
            <p className="max-h-32 font-light text-sm line-clamp-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt, cum voluptas sint doloremque necessitatibus at expedita dolorem tenetur molestiae id velit nulla quod dignissimos laudantium dolorum corrupti rem nisi.</p>
            <button type="submit" className="bg-black text-white rounded-lg p-3 my-4 md:w-auto w-full cursor-pointer hover:bg-[#353535] hover:scale-105 hover:text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
