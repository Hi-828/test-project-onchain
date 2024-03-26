"use client";
import React from "react";
import Image from "next/image";
import eth from "@/public/svgs/eth.svg";
import wbtc from "@/public/svgs/wbtc.svg";
import frax from "@/public/svgs/frax.svg";
import trending from "@/public/svgs/trending.svg";
import pepe from "@/public/svgs/pepe.svg";
import mkr from "@/public/svgs/mkr.svg";
import coin from "@/public/svgs/coin.svg";
import arrow from "@/public/svgs/arrow.svg";
const Balance = () => {
    return (
        <balance>
                <div className="h-[60%] bg-[#190F01] rounded-3xl p-6 flex mt-[-20px] overflow-hidden">
                    {/* Left Side (70%) */}
                    <div className="w-3/4 pr-4">
                        <a className="block font-bold text-1xl md:text-2xl text-white mb-4 font-[HankenGroteskRegular]">
                            My Balance
                        </a>
                        <h2 className="font-[HankenGroteskRegular] font-[700] block text-5xl md:text-8xl text-white mb-6">
                            $25,350.52
                        </h2>
                        <b className="block text-xs md:text-lg text-white mb-4 font-[HankenGroteskRegular] w-[300px] md:w-[400px]">
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
                        <p className="block text-xs md:text-sm text-[#ffffff] opacity-50 font-[HankenGroteskRegular]">
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
                <a className="w-full inline-block md:text-2xl text-white mt-5 mb-3">
                    Your top movers
                </a>
                <div className="h-[40%] flex overflow-x-hidden">
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
                                        sizes="20vw"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </balance>
    );
};

export default Balance;
