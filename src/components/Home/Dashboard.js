import { sortBlogs } from "@/src/utils";
import coin from "@/public/coin.png";
import arrow from "@/public/arrow.png";
import frame from "@/public/frame.png";
import eth from "@/public/eth.png";
import wbtc from "@/public/wbtc.png";
import frax from "@/public/frax.png";
import trending from "@/public/trending.png";
import pepe from "@/public/pepe.png";
import mkr from "@/public/mkr.png";
import coinact from "@/public/coin-activity.png";
import bcoinact from "@/public/bcoin-activity.png";
import ucoinact from "@/public/ucoin-activity.png";
import ecoinact from "@/public/ecoin-activity.png";
import mcoinact from "@/public/mcoin-activity.png";
import arrowoutward from "@/public/arrow_outward.png";
import React from "react";
import Example from "./Chart";
import Image from "next/image";
// import IndexPage from "./customTable";

const Dashboard = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (

    <section className="w-full mt-[-5px] sm:mt-[-32px] md:mt-[-32px] px-3 sm:px-10 md:px-24 sxl:pl-20 flex flex-col items-center justify-center over">
      <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-10 sm:mt-16 ">
        <div className="w-full col-span-2 sm:col-span-1 relative">
          <div className="h-[65%] bg-[#190F01] rounded-3xl p-6 flex">
            {/* Left Side (70%) */}
            <div className="w-3/4 pr-4">
              <a className="block font-bold text-1xl md:text-2xl text-dark dark:text-light mb-4 font-[HankenGroteskRegular]">
                My Balance
              </a>
              <h2 className="font-[HankenGroteskRegular] font-[700] block text-5xl md:text-8xl text-dark dark:text-light mb-6">
                $25,350.52
              </h2>
              <b className="block text-xs md:text-lg text-dark dark:text-light mb-4 font-[HankenGroteskRegular]">
                Grow your portfolio{" "}
                <a href="your_other_link_url" className="text-[#C86C00] underline font-[HankenGroteskRegular]">
                  check latest listed coins
                </a>
                <div
                  style={{ width: "13px", height: "13px" }}
                  className="w-12 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2"
                >
                  <Image
                    src={arrow}
                    alt="Arrow"
                    className="w-2 h-2 md:w-24 md:h-auto mt-0.7"
                    sizes="20vw"
                    priority
                  />
                </div>
              </b>
              <p className="block text-xs md:text-sm text-dark dark:text-light opacity-50 font-[HankenGroteskRegular]">
                *All values represented in USD
              </p>
            </div>
            {/* Right Side (30%) */}
            <div className="w-1/4 ">
              <div

                className="w-36 h-36 md:w-24 md:h-auto lg:w-auto lg:h-auto"
              >
                <Image
                  src={coin}
                  alt="Coin"
                  sizes="20vw"
                  priority
                />
              </div>
            </div>
          </div>
          <a className="w-full inline-block md:text-2xl text-dark dark:text-light mt-5">
            Your top movers
          </a>
          <div className="h-[35%] flex overflow-x-hidden">
            <div className="w-[210px] h-[70px] flex-none bg-[#190F01] rounded-lg flex-shrink-0 mr-5 flex">
              <div className="w-1/3 flex-none">
                <div
                  style={{ width: "55px", height: "55px" }}
                  className="w-12 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2 mt-2"
                >
                  <Image
                    src={eth}
                    alt="Arrow"
                    className="w-full h-auto"
                    sizes="20vw"
                    priority
                  />
                </div>
              </div>

              <div className="w-2/3 flex flex-col">
                <div className="h-1/2 flex font-bold items-center  text-white ml-2 text-lg mt-2">ETH</div>
                <div className="h-1/2 flex items-center  text-white ml-2 mb-3">$3,500<span className="ml-7 text-base text-[#4cd10d]">5%</span>
                  <div>
                    <Image
                      src={trending}
                      alt="Arrow"
                      className="w-full h-auto"
                      sizes="20vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[210px] h-[70px] flex-none bg-[#190F01] rounded-lg flex-shrink-0 mr-5 flex">
              <div className="w-1/3 flex-none">
                <div
                  style={{ width: "55px", height: "55px" }}
                  className="w-12 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2 mt-2"
                >
                  <Image
                    src={wbtc}
                    alt="Arrow"
                    className="w-full h-auto"
                    sizes="20vw"
                    priority
                  />
                </div>
              </div>

              <div className="w-2/3 flex flex-col">
                <div className="h-1/2 flex font-bold items-center  text-white ml-2 text-lg mt-2">WBTC</div>
                <div className="h-1/2 flex items-center  text-white ml-2 mb-3">$67,500<span className="ml-7 text-base text-[#4cd10d]">5%</span>
                  <div>
                    <Image
                      src={trending}
                      alt="Arrow"
                      className="w-full h-auto"
                      sizes="20vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[210px] h-[70px] flex-none bg-[#190F01] rounded-lg flex-shrink-0 mr-5 flex">
              <div className="w-1/3 flex-none">
                <div
                  style={{ width: "55px", height: "55px" }}
                  className="w-12 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2 mt-2"
                >
                  <Image
                    src={frax}
                    alt="Arrow"
                    className="w-full h-auto"
                    sizes="20vw"
                    priority
                  />
                </div>
              </div>

              <div className="w-2/3 flex flex-col">
                <div className="h-1/2 flex font-bold items-center  text-white ml-2 text-lg mt-2">FRAX</div>
                <div className="h-1/2 flex items-center  text-white ml-2 mb-3">$1.01<span className="ml-7 text-base text-[#4cd10d]">5%</span>
                  <div>
                    <Image
                      src={trending}
                      alt="Arrow"
                      className="w-full h-auto"
                      sizes="20vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[210px] h-[70px] flex-none bg-[#190F01] rounded-lg flex-shrink-0 mr-5 flex">
              <div className="w-1/3 flex-none">
                <div
                  style={{ width: "55px", height: "55px" }}
                  className="w-12 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2 mt-2"
                >
                  <Image
                    src={pepe}
                    alt="Arrow"
                    className="w-full h-auto"
                    sizes="20vw"
                    priority
                  />
                </div>
              </div>

              <div className="w-2/3 flex flex-col">
                <div className="h-1/2 flex font-bold items-center  text-white ml-2 text-lg mt-2">PEPE</div>
                <div className="h-1/2 flex items-center  text-white ml-2 mb-3">$0.001<span className="ml-7 text-base text-[#4cd10d]">5%</span>
                  <div>
                    <Image
                      src={trending}
                      alt="Arrow"
                      className="w-full h-auto"
                      sizes="20vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[210px] h-[70px] flex-none bg-[#190F01] rounded-lg flex-shrink-0 mr-5 flex">
              <div className="w-1/3 flex-none">
                <div
                  style={{ width: "55px", height: "55px" }}
                  className="w-12 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2 mt-2"
                >
                  <Image
                    src={mkr}
                    alt="Arrow"
                    className="w-full h-auto"
                    sizes="20vw"
                    priority
                  />
                </div>
              </div>

              <div className="w-2/3 flex flex-col">
                <div className="h-1/2 flex font-bold items-center  text-white ml-2 text-lg mt-2">MKR</div>
                <div className="h-1/2 flex items-center  text-white ml-2 mb-3">$3,050<span className="ml-7   text-base text-[#4cd10d]">5%</span>
                  <div>
                    <Image
                      src={trending}
                      alt="Arrow"
                      className="w-full h-auto"
                      sizes="20vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="w-full h-full col-span-2 sm:col-span-1 relative">
          <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light mb-6">
            PnL Analysis
            <div
              style={{ width: "135px", height: "50px", marginTop: "25px" }}
              className="w-12 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2"
            >
              <Image
                src={frame}
                alt="Arrow"
                className="w-full h-auto"
                sizes="20vw"
                priority
              />
            </div>
          </h2>
          <Example></Example>
        </div>
        <div className="w-full h-full col-span-2 sm:col-span-1 relative">
          <h2 className="w-full inline-block font-bold capitalize text-3xl md:text-4xl text-dark dark:text-light">
            Your holdings
          </h2>

        </div>
        <div className="w-full h-full col-span-2 sm:col-span-1 relative">
          <h2 className="w-full inline-block font-bold capitalize text-3xl md:text-4xl text-dark dark:text-light">
            Recent Activity
          </h2>
          <div className="w-full h-[70px] flex-none rounded-lg flex-shrink-0 mr-5 ">
            <div className="flex h-[70px]">
              <div className="w-1/8 flex-none">
                <div
                  className="w-20 md:w-24 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2 mt-3"
                >
                  <Image
                    src={coinact}
                    alt="Arrow"
                    className="w-full h-auto"
                    sizes="20vw"
                    priority
                  />
                </div>
              </div>

              <div className="w-7/8 flex flex-col">
                <div className="h-1/2 flex font-bold items-center  text-white ml-2 text-lg ">Swapped<span className="ml-[100px] md:ml-[583px] text-base">03/19/23</span></div>
                <div className="h-1/2 flex items-center text-white ml-2">20 LINK For 0.1074ETH
                  <div style={{ width: "12px", height: "12px" }}>
                    <Image
                      src={arrowoutward}
                      alt="Arrow"
                      className="w-full h-auto ml-[70px] md:ml-[555px]"
                      sizes="20vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[70px] flex-none rounded-lg flex-shrink-0 mr-5 ">
            <div className="flex h-[70px]">
              <div className="w-1/8 flex-none">
                <div
                  className="w-20 md:w-24 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2 mt-3"
                >
                  <Image
                    src={mcoinact}
                    alt="Arrow"
                    className="w-full h-auto"
                    sizes="20vw"
                    priority
                  />
                </div>
              </div>

              <div className="w-7/8 flex flex-col">
                <div className="h-1/2 flex font-bold items-center  text-white ml-2 text-lg ">Received<span className="ml-[100px] md:ml-[583px] text-base">03/19/23</span></div>
                <div className="h-1/2 flex items-center text-white ml-2">NFT From mutant.ens
                  <div style={{ width: "12px", height: "12px" }}>
                    <Image
                      src={arrowoutward}
                      alt="Arrow"
                      className="w-full h-auto ml-[70px] md:ml-[555px]"
                      sizes="20vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[70px] flex-none rounded-lg flex-shrink-0 mr-5 ">
            <div className="flex h-[70px]">
              <div className="w-1/8 flex-none">
                <div
                  className="w-20 md:w-24 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2 mt-3"
                >
                  <Image
                    src={bcoinact}
                    alt="Arrow"
                    className="w-full h-auto"
                    sizes="20vw"
                    priority
                  />
                </div>
              </div>

              <div className="w-7/8 flex flex-col">
                <div className="h-1/2 flex font-bold items-center  text-white ml-2 text-lg ">Transferred<span className="ml-[100px] md:ml-[583px] text-base">03/19/23</span></div>
                <div className="h-1/2 flex items-center text-white ml-2">WBTC To 0x6584...BD68
                  <div style={{ width: "12px", height: "12px" }}>
                    <Image
                      src={arrowoutward}
                      alt="Arrow"
                      className="w-full h-auto ml-[70px] md:ml-[540px]"
                      sizes="20vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
