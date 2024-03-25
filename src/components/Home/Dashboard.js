"use client";
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
import EnhancedTable from "./CustomTable";
import TablePagination from '@mui/material/TablePagination';

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
const rows = [
  createData(1, 'Pepe PEPE', 1000520, 3500, 8750, '/pepe.png'),
  createData(3, 'Frax FRAX', 350, 3500, 8750, '/frax.png'),
  createData(4, 'Ethereum ETH', 2.5, 3500, 8750, '/eth.png'),
  createData(5, 'Uniswap UNI', 25, 3500, 8750, '/uni.png'),
  createData(6, 'Chainlink Token LINK', 50, 3500, 8750, '/chain.png'),
  createData(7, 'Wrapped Bitcoin WBTC', 0.05, 3500, 8750, '/wbtc.png'),
  createData(8, 'Shiba INU SHIB', 3800, 3500, 8750, '/shiba.png'),
  createData(10, 'Lido DAO Token LDO', 1, 3500, 8750, '/lido.png'),
  createData(11, 'Maker MKR', 1, 3500, 8750, '/mkr.png'),
  createData(12, 'Ribbon RBN', 350, 3500, 8750, '/rbn.png'),
];

function createData(id, name, calories, fat, carbs, avatar) {
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    avatar
  };
}
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const Dashboard = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );
  return (

    <section className="w-full mt-[-2px] sm:mt-[-32px] md:mt-[0px] px-3 sm:px-10 md:px-24 sxl:pl-20 flex flex-col items-center justify-center over bg-black">
      <div className="grid grid-cols-2 grid-rows-2 gap-x-6 mt-10 sm:mt-16 ">
        <div className="w-full col-span-2 sm:col-span-1 relative">
          <div className="h-[65%] bg-[#190F01] rounded-3xl p-6 flex mt-[-20px]">
            {/* Left Side (70%) */}
            <div className="w-3/4 pr-4">
              <a className="block font-bold text-1xl md:text-2xl text-white mb-4 font-[HankenGroteskRegular]">
                My Balance
              </a>
              <h2 className="font-[HankenGroteskRegular] font-[700] block text-5xl md:text-8xl text-white mb-6">
                $25,350.52
              </h2>
              <b className="block text-xs md:text-lg text-white mb-4 font-[HankenGroteskRegular]">
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

        <div className="w-full h-full col-span-2 sm:col-span-1 relative mt-[-20px]">
          <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-white mb-6">
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
                <div className="h-1/2 flex font-bold items-center  text-white ml-2 text-lg ">Swapped<span className="ml-[100px] md:ml-[560px] text-base">03/19/23</span></div>
                <div className="h-1/2 flex items-center text-white ml-2">20 LINK For 0.1074ETH
                  <div style={{ width: "12px", height: "12px" }}>
                    <Image
                      src={arrowoutward}
                      alt="Arrow"
                      className="w-full h-auto ml-[70px] md:ml-[560px]"
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
                <div className="h-1/2 flex font-bold items-center  text-white ml-2 text-lg ">Received<span className="ml-[100px] md:ml-[560px] text-base">03/19/23</span></div>
                <div className="h-1/2 flex items-center text-white ml-2">NFT From mutant.ens
                  <div style={{ width: "12px", height: "12px" }}>
                    <Image
                      src={arrowoutward}
                      alt="Arrow"
                      className="w-full h-auto ml-[70px] md:ml-[560px]"
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
                <div className="h-1/2 flex font-bold items-center  text-white ml-2 text-lg ">Transferred<span className="ml-[80px] md:ml-[540px] text-base">03/19/23</span></div>
                <div className="h-1/2 flex items-center text-white ml-2">WBTC To 0x6584...BD68
                  <div style={{ width: "12px", height: "12px" }}>
                    <Image
                      src={arrowoutward}
                      alt="Arrow"
                      className="w-full h-auto ml-[50px] md:ml-[540px]"
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
                    src={ucoinact}
                    alt="Arrow"
                    className="w-full h-auto"
                    sizes="20vw"
                    priority
                  />
                </div>
              </div>

              <div className="w-7/8 flex flex-col">
                <div className="h-1/2 flex font-bold items-center  text-white ml-2 text-lg ">Bridged<span className="ml-[115px] md:ml-[575px] text-base">03/19/23</span></div>
                <div className="h-1/2 flex items-center text-white ml-2">ethereum to Polygon
                  <div style={{ width: "12px", height: "12px" }}>
                    <Image
                      src={arrowoutward}
                      alt="Arrow"
                      className="w-full h-auto ml-[75px] md:ml-[560px]"
                      sizes="20vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
         
            <div className="w-full h-[70px] flex-none rounded-lg flex-shrink-0 mr-5">
              <div className="flex h-[70px]">
                <div className="w-1/8 flex-none">
                  <div
                    className="w-20 md:w-24 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2 mt-3"
                  >
                    <Image
                      src={ecoinact}
                      alt="Arrow"
                      className="w-full h-auto"
                      sizes="20vw"
                      priority
                    />
                  </div>
                </div>

                <div className="w-7/8 flex flex-col">
                  <div className="h-1/2 flex font-bold items-center  text-white ml-2 text-lg ">Swapped<span className="ml-[100px] md:ml-[560px] text-base">03/19/23</span></div>
                  <div className="h-1/2 flex items-center text-white ml-2">1ETH For 3,500 USDC
                    <div style={{ width: "12px", height: "12px" }}>
                      <Image
                        src={arrowoutward}
                        alt="Arrow"
                        className="w-full h-auto ml-[75px] md:ml-[560px]"
                        sizes="20vw"
                        priority
                      />
                    </div>
                  </div>
                </div>

              </div>
              <div className="flex flex-col items-center justify-center mt-5">
              <TablePagination className="bg-black text-[#C86C00]"
                rowsPerPageOptions={[20]} // Number of rows per page options
                component="div"
                count={rows.length * 5} // Total number of rows
                page={page} // Current page number
                onPageChange={handleChangePage} // Function to handle page change
                labelDisplayedRows={({ from, to, count }) => `Page ${page + 1} of ${Math.ceil(count / rowsPerPage)}`} // Displayed rows label
                nextIconButtonProps={{ // Props for the next button
                  onClick: () => handleChangePage(null, page + 1), // Function to handle next page
                }}
                backIconButtonProps={{ // Props for the previous button
                  onClick: () => handleChangePage(null, page - 1), // Function to handle previous page
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
