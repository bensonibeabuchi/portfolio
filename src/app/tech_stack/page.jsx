import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Stack from "../components/Stack";

export default function page() {
  return (
    <>
      <div>
        <Navbar />

        <Stack />
        <Footer />
      </div>
    </>
  );
}
