import Link from "next/link";
import React from "react";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";

const FooterSection = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between ">
        <div className="text-neutral-500 dark:text-neutral-100">
          ©2023 Kelvin H
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <Link href={"https://github.com/kelvin-0"} target="_blank">
            <AiOutlineGithub
              size={30}
              className="dark:text-neutral-100 hover:-translate-y-1 transition-transform cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
