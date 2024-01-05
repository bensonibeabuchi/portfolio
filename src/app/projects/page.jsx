import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Product_Card from "../components/Project_Card";

export default function Projects() {
  return (
    <>
      <Navbar />
      {/* Full stack projects */}
      <div className="mt-16">
        <h1 className="md:text-5xl text-3xl p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">Fullstack Projects</h1>
        <div className="md:flex space-y-8 gap-16 items-center justify-center p-8">
          <Product_Card />
          <Product_Card />
          <Product_Card />
        </div>
      </div>
      {/* Frontend projects */}
      <div className="mt-16">
        <h1 className="md:text-5xl text-3xl p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">Frontend Projects</h1>
        <div className="md:flex space-y-8 gap-16 items-center justify-center p-8">
          <Product_Card />
          <Product_Card />
          <Product_Card />
        </div>
      </div>
      {/* Backend projects */}
      <div className="mt-16">
        <h1 className="md:text-5xl text-3xl p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">Backend Projects</h1>
        <div className="md:flex space-y-8 gap-16 items-center justify-center p-8">
          <Product_Card />
          <Product_Card />
          <Product_Card />
        </div>
      </div>
      {/* Product design projects */}
      <div className="mt-16">
        <h1 className="md:text-5xl text-3xl p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">Product Design Projects</h1>
        <div className="flex gap-16 items-center justify-center mx-auto p-8">
          <Product_Card />
          <Product_Card />
          <Product_Card />
        </div>
      </div>

      <div className="my-40"></div>

      <Footer />
    </>
  );
}
