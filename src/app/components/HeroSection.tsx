"use client";
import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 md:flex-row md:space-x-4 md:text-left md:py-32">
        <div className="h-[300px] w-[300px] md:mr-auto  overflow-hidden object-top  md:mt-2 relative">
          <Image
            className=" object-cover shadow-2xl object-contain rounded-full"
            src="/profile3.PNG"
            alt="photo of kelvin h"
            fill
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">
            Hi I&#39;m Kelvin!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl ">
            I&#39;m a college student with a{" "}
            <span className="font-semibold text-teal-600">strong</span> passion
            for creating{" "}
            <span className="font-semibold text-teal-600">engaging</span> and{" "}
            <span className="font-semibold text-teal-600">user-friendly</span>{" "}
            websites based in Riau, Indonesia.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 hover:bg-teal-700 hover:cursor-pointer"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
