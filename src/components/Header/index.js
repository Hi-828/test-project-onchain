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

  const [showNav, setShowNav] = useState(false);
  const [activeTab, setActiveTab] = useState(""); // Track active tab
  // Function to handle tab click
  const handleTabClick = (tabName) => {
    setActiveTab(tabName); // Set active tab
    setShowNav(false); // Hide the navigation menu after clicking a tab
  };
  return (
    <header className="flex items-center justify-center p-3 flex-wrap text-white bg-custom-color bg-customdark">
      <Logo />
      <button
        onClick={() => setShowNav(!showNav)}
        type="button"
        className="inline-flex p-3 text-white hover:text-gray-300 focus:text-white focus:outline-none lg:hidden ml-auto"
      >
        <svg width="6" height="20" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14C0 13.45 0.195833 12.9792 0.5875 12.5875C0.979167 12.1958 1.45 12 2 12C2.55 12 3.02083 12.1958 3.4125 12.5875C3.80417 12.9792 4 13.45 4 14C4 14.55 3.80417 15.0208 3.4125 15.4125C3.02083 15.8042 2.55 16 2 16ZM2 10C1.45 10 0.979167 9.80417 0.5875 9.4125C0.195833 9.02083 0 8.55 0 8C0 7.45 0.195833 6.97917 0.5875 6.5875C0.979167 6.19583 1.45 6 2 6C2.55 6 3.02083 6.19583 3.4125 6.5875C3.80417 6.97917 4 7.45 4 8C4 8.55 3.80417 9.02083 3.4125 9.4125C3.02083 9.80417 2.55 10 2 10ZM2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4Z" fill="#FFF7F7" />
        </svg>
      </button>
      <div className="w-full flex-grow lg:inline-flex lg:flex-grow lg:w-auto justify-center">
        <div className="mr-[100px]">
          <div
            className={
              "lg:inline-flex lg:flex-row flex flex-col " +
              (showNav ? "" : "hidden")
            }
          >
            <a className={
              "lg:inline-flex lg:w-auto px-3 py-2 rounded mx-5 font-[HankenGroteskRegular]" +
              (activeTab === "Swap" ? " border-b-4 border-[#C86C00]" : "") // Add border-bottom if the tab is active
            }
              onClick={() => handleTabClick("Swap")}>
              Swap
            </a>
            <a className={
              "lg:inline-flex lg:w-auto px-3 py-2 rounded mx-5 font-[HankenGroteskRegular]" +
              (activeTab === "Bridge" ? " border-b-4 border-[#C86C00]" : "") // Add border-bottom if the tab is active
            }
              onClick={() => handleTabClick("Bridge")}>
              Bridge
            </a>
            <Link href="/" className={
              "lg:inline-flex lg:w-auto px-3 py-2 rounded mx-5 font-[HankenGroteskRegular]" +
              (activeTab === "Dashboard" ? " border-b-4 border-[#C86C00]" : "") // Add border-bottom if the tab is active
            }
              onClick={() => handleTabClick("Dashboard")}>
              Dashboard
            </Link>
            <a className={
              "lg:inline-flex lg:w-auto px-3 py-2 rounded mx-5 font-[HankenGroteskRegular]" +
              (activeTab === "Analytics" ? " border-b-4 border-[#C86C00]" : "") // Add border-bottom if the tab is active
            }
              onClick={() => handleTabClick("Analytics")}>
              Analytics
            </a>
          </div>
        </div>
      </div>
      <div className="sm:flex items-center ml-5" style={{ marginTop: "-3px" }}>
        <button
          className="flex items-center rounded-full py-1 px-1 bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:from-orange-500 hover:to-orange-600 hover:bg-gradient-to-tr mt-[-38px] md:mt-[0px] ml-[270px] md:ml-[0px]"
          style={{ maxWidth: "170px" }} // Adjust the max width of the button
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
      </div>
    </header>
  );
};

export default Header;
