import React from "react";
import { Navbar } from "./components/Navbar";
import { Section1 } from "./components/Section1";
import { Section2 } from "./components/Section2";
import { Section3 } from "./components/Section3";
import { Section4 } from "./components/Section4";
import { Section5 } from "./components/Section5";

const V2 = () => {
  return (
    <div className="flex md:flex-col flex-col overflow-hidden h-screen w-full relative">
      <Navbar />
      <div className="w-[100%] overflow-auto">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>
    </div>
  );
};

export default V2;
