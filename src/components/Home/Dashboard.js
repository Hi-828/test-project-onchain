"use client";
import React from "react";
import Image from "next/image";
import ChartG from "./Chart";
import Balance from "./Balance";
import Activity from "./Activity";
import EnhancedTable from "./CustomTable";
import trending from "@/public/trending.png";
const Dashboard = ({ blogs }) => {
  return (
    <section className="w-full mt-[-2px] sm:mt-[-32px] md:mt-[0px] px-3 sm:px-10 md:px-24 sxl:pl-20 flex flex-col items-center justify-center over bg-black">
      <div className="grid grid-cols-2 grid-rows-2 gap-x-6 mt-10 sm:mt-16 bg-black">
        <div className="w-full col-span-2 sm:col-span-1 relative">
          <Balance />
        </div>
        <div className="w-full h-full col-span-2 sm:col-span-1 relative mt-[-20px]">
          <div className="flex items-center justify-between">
            <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-white mb-6">
              PnL Analysis
            </h2>
            <p className="text-base font-bold text-[#4cd10d] bg-[#102407] rounded-2xl px-2 py-1 whitespace-nowrap mb-4">
              This&nbsp;Month&nbsp;5%&nbsp;
              <span className="inline-block bg-[#102407] w-6">
                <Image
                  src={trending}
                  alt="Arrow"
                  className="w-2 h-2 md:w-24 md:h-auto mt-0.7"
                  sizes="20vw"
                  priority
                  style={{ width: "16px", height: "12px" }}
                />
              </span>
            </p>
          </div>

          <ChartG />
        </div>
        <div className="w-full h-full col-span-2 sm:col-span-1 relative mt-[-10px]">
          <h2 className="w-full inline-block font-bold capitalize text-3xl md:text-4xl text-white mb-4">
            Your holdings
          </h2>
          <EnhancedTable></EnhancedTable>
        </div>
        <div className="w-full h-full col-span-2 sm:col-span-1 relative mt-[-10px]">

          <h2 className="w-full inline-block font-bold capitalize text-3xl md:text-4xl text-white">
            Recent Activity
          </h2>
          <Activity />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
