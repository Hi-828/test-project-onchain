"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import profileImg from "@/public/svgs/p.svg";
import { useState } from "react";
import { FiMoreVertical } from 'react-icons/fi';

const Header = () => {
  const [open, setOpen] = useState(false); 
  return (
    <header className="border-b border-gray-300 py-2 bg-[#190f01]">
      <div className="flex justify-between items-center xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap">
        <Logo />
        <FiMoreVertical className="lg:hidden block h-6 w-6 cursor-pointer text-white" onClick={() => setOpen(!open)} />
        <nav className={`${open ? "block " : "hidden"} lg:flex lg:items-center lg:w-auto w-full `}>
          <ul className="text-base text-white lg:flex lg:justify-between   font-[HankenGroteskRegular]">
            <li className="lg:px-5 py-2 text-right md:ml-[-250px]">
              <a className='rounded hover:border-b-4  hover:text-[#c86700] border-border-color ' style={{ fontSize: "0.9rem" }}>
                Swap
              </a>
            </li>
            <li className="lg:px-5 py-2 text-right">
              <a className='rounded hover:border-b-4  hover:text-[#c86700] border-border-color' style={{ fontSize: "0.9rem" }}>
                Bridge
              </a>
            </li>
            <li className="lg:px-5 py-2 text-right">
              <a className='rounded border-b-4 text-[#c86700] hover:border-b-4  hover:text-[#c86700] border-border-color' style={{ fontSize: "0.9rem" }}>
                Dashboard
              </a>
            </li>
            <li className="lg:px-5 py-2 text-right">
              <a className='rounded hover:border-b-4  hover:text-[#c86700] border-border-color' style={{ fontSize: "0.9rem" }}>
                Analytics
              </a>
            </li>
            <li>
            </li>
          </ul>
        </nav>

        {open ? (
          <div className="flex items-center ml-5 ">
            <button
              className="flex items-center rounded-full py-1 px-1 bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:from-orange-500 hover:to-orange-600 hover:bg-gradient-to-tr mt-[-363px] md:mt-[0px] ml-[270px] md:ml-[0px]"
              style={{ maxWidth: "170px" }}
            >

              <div className="w-6 md:w-16 overflow-hidden border-solid border-dark dark:border-gray ">
                <Image
                  style={{ height: "25px", width: "25px" }}
                  src={profileImg}
                  alt="CodeBucks logo"
                  className="w-full"
                  priority
                />
              </div>
              <span className="hidden sm:inline ml-2">degentrades.lens</span>
            </button>
          </div>
        ) :
          <div className="flex items-center ml-5 md:mr-[-370px]">
            <button
              className="flex items-center rounded-full py-1 px-1 bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:from-orange-500 hover:to-orange-600 hover:bg-gradient-to-tr mt-[-43px] md:mt-[0px] ml-[270px] md:ml-[0px]"
              style={{ maxWidth: "170px" }}
            >
              <div className="w-6 md:w-16 overflow-hidden border-solid border-dark dark:border-gray rounded-bl-lg">
                <Image
                  style={{ height: "25px", width: "25px" }}
                  src={profileImg}
                  alt="CodeBucks logo"
                  className="w-full"
                  priority
                />
              </div>
              <span className="hidden sm:inline ml-2">degentrades.lens</span>
            </button>
          </div>}
      </div>
    </header>
  );
};

export default Header;
