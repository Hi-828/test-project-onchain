"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import profileImg from "@/public/p.png";
import { useState } from "react";

const Header = () => {
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };
  return (
    <header className="w-full p-0 px-5 sm:px-10 md:pl-20 md:pr-52 flex items-center justify-between bg-customdark h-14 xs:h-12">
      <Logo/>

      <nav
        className=" w-max py-3 px-8 rounded-full font-medium capitalize  items-center hidden sm:flex
        fixed top-6 right-1/2 translate-x-1/2  backdrop-blur-sm z-50 mt-[-20px] text-white"
      >
        <Link href="Swap" className="mx-5">
          Swap
        </Link>
        <Link href="/bridge" className="mx-5">
          Bridge
        </Link>
        <Link href="/" className="mx-5">
          Dashboard
        </Link>
        <Link href="/analytics" className="mx-5">
          Analytics
        </Link>
      </nav>
      <div className="sm:flex items-center ml-5" style={{ marginTop: "-3px" }}>
        <a
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 ml-24 "
          aria-label="Check my profile on Dribbble"
          target="_blank"
        >
          <button
            className="flex items-center rounded-full py-1 px-1 bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:from-orange-500 hover:to-orange-600 hover:bg-gradient-to-tr mr-2 md:mr-4 "
            style={{ maxWidth: "170px", marginTop: "2px"}} // Adjust the max width of the button
          >
            {/* Conditionally render button content based on screen size */}
            <div className="w-6 md:w-16 overflow-hidden border-solid border-dark dark:border-gray ">
              <Image
                style={{ height: "25px", width: "25px" }}
                src={profileImg}
                alt="CodeBucks logo"
                className="w-full h-auto"
                priority
              />
            </div>
            {/* Render button text only on non-mobile devices */}
            <span className="hidden sm:inline ml-2">degentrades.lens</span>
          </button>
        </a>
      </div>

      <button
        className="inline-block sm:hidden z-50"
        onClick={toggle}
        aria-label="Hamburger Menu"
      >
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>
    </header>
  );
};

export default Header;
