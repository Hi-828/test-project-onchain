"use client";
import React, { useState } from "react";
import Image from "next/image";
import coinact from "@/public/svgs/coin-activity.svg";
import bcoinact from "@/public/svgs/bcoin-activity.svg";
import ucoinact from "@/public/svgs/ucoin-activity.svg";
import ecoinact from "@/public/svgs/ecoin-activity.svg";
import mcoinact from "@/public/mcoin-activity.png";
import arrowoutward from "@/public/svgs/arrow.svg";
import TablePagination from '@mui/material/TablePagination';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

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
const Activity = () => {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [hoveredDiv, setHoveredDiv] = useState(null);

    const handleMouseEnter = (div) => {
        setHoveredDiv(div);
    };

    const handleMouseLeave = () => {
        setHoveredDiv(null);
    };

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

    const visibleRows = stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
    );

    return (
        <activity>
            <div>
                <div
                    className={`w-full h-[70px] flex-none rounded-lg flex-shrink-0 mr-5 ${hoveredDiv === 'swapped' ? 'bg-[#190f01]' : ''}`}
                    onMouseEnter={() => handleMouseEnter('swapped')}
                    onMouseLeave={handleMouseLeave}
                >
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
                            <div className="flex items-center justify-between">
                                <div className={`h-1/2 flex font-bold items-center text-lg ml-2 ${hoveredDiv === 'swapped' ? 'text-[#c86c00]' : 'text-white'}`}>Swapped</div>
                                <span className="ml-[100px] md:ml-[530px] text-white">03/19/23</span>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                                <div className="h-1/2 flex items-center text-white ml-2">20 LINK For 0.1074ETH</div>
                                <div style={{ width: "12px", height: "12px", marginTop: hoveredDiv === 'swapped' ? '-10px' : '0'  }} >
                                    <Image
                                        src={arrowoutward}
                                        alt="Arrow"
                                        className="w-full h-auto ml-4"
                                        sizes="20vw"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`w-full h-[70px] flex-none rounded-lg flex-shrink-0 mr-5 ${hoveredDiv === 'received' ? 'bg-[#190f01]' : ''}`}
                    onMouseEnter={() => handleMouseEnter('received')}
                    onMouseLeave={handleMouseLeave}
                >
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
                            <div className="flex items-center justify-between">
                                <div className={`h-1/2 flex font-bold items-center text-lg ml-2 ${hoveredDiv === 'received' ? 'text-[#c86c00]' : 'text-white'}`}>Received</div>
                                <span className="ml-[100px] md:ml-[530px] text-white">03/19/23</span>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                                <div className="h-1/2 flex items-center text-white ml-2">NFT From mutant.ens</div>
                                <div style={{ width: "12px", height: "12px", marginTop: hoveredDiv === 'received' ? '-10px' : '0'  }}>
                                    <Image
                                        src={arrowoutward}
                                        alt="Arrow"
                                        className="w-full h-auto ml-4"
                                        sizes="20vw"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`w-full h-[70px] flex-none rounded-lg flex-shrink-0 mr-5 ${hoveredDiv === 'transferred' ? 'bg-[#190f01]' : ''}`}
                    onMouseEnter={() => handleMouseEnter('transferred')}
                    onMouseLeave={handleMouseLeave}
                >
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
                            <div className="flex items-center justify-between">
                                <div className={`h-1/2 flex font-bold items-center text-lg ml-2 ${hoveredDiv === 'transferred' ? 'text-[#c86c00]' : 'text-white'}`}>Transferred</div>
                                <span className="ml-[80px] md:ml-[510px] text-white">03/19/23</span>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                                <div className="h-1/2 flex items-center text-white ml-2">WBTC To 0x6584...BD68</div>
                                <div style={{ width: "12px", height: "12px", marginTop: hoveredDiv === 'transferred' ? '-10px' : '0'  }}>
                                    <Image
                                        src={arrowoutward}
                                        alt="Arrow"
                                        className="w-full h-auto ml-4"
                                        sizes="20vw"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`w-full h-[70px] flex-none rounded-lg flex-shrink-0 mr-5 ${hoveredDiv === 'bridged' ? 'bg-[#190f01]' : ''}`}
                    onMouseEnter={() => handleMouseEnter('bridged')}
                    onMouseLeave={handleMouseLeave}
                >
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
                            <div className="flex items-center justify-between">
                                <div className={`h-1/2 flex font-bold items-center text-lg ml-2 ${hoveredDiv === 'bridged' ? 'text-[#c86c00]' : 'text-white'}`}>Bridged</div>
                                <span className="ml-[115px] md:ml-[545px] text-white">03/19/23</span>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                                <div className="h-1/2 flex items-center text-white ml-2">Ethereum to Polygon</div>
                                <div style={{ width: "12px", height: "12px", marginTop: hoveredDiv === 'bridged' ? '-10px' : '0'  }}>
                                    <Image
                                        src={arrowoutward}
                                        alt="Arrow"
                                        className="w-full h-auto ml-4"
                                        sizes="20vw"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`w-full h-[70px] flex-none rounded-lg flex-shrink-0 mr-5 ${hoveredDiv === 'swappedAgain' ? 'bg-[#190f01]' : ''}`}
                    onMouseEnter={() => handleMouseEnter('swappedAgain')}
                    onMouseLeave={handleMouseLeave}
                >
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
                            <div className="flex items-center justify-between">
                                <div className={`h-1/2 flex font-bold items-center text-lg ml-2 ${hoveredDiv === 'swappedAgain' ? 'text-[#c86c00]' : 'text-white'}`}>Swapped</div>
                                <span className="ml-[105px] md:ml-[535px] text-white">03/19/23</span>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                                <div className="h-1/2 flex items-center text-white ml-2">1 ETH For 3,500 USDC</div>
                                <div style={{ width: "12px", height: "12px", marginTop: hoveredDiv === 'swappedAgain' ? '-10px' : '0'  }}>
                                    <Image
                                        src={arrowoutward}
                                        alt="Arrow"
                                        className="w-full h-auto ml-4"
                                        sizes="20vw"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-5">
                        <TablePagination
                            className="bg-black text-[#C86C00]"
                            rowsPerPageOptions={[]} // Hide rows per page options
                            component="div"
                            count={rows.length * 5}
                            page={page}
                            onPageChange={handleChangePage}
                            labelDisplayedRows={({ from, to, count }) => `Page ${page + 1} of ${Math.ceil(count / rowsPerPage)}`} // Displayed rows label
                            rowsPerPage={rowsPerPage} // Current rows per page
                            onChangeRowsPerPage={handleChangeRowsPerPage} // Function to handle rows per page change
                            nextIconButton={<KeyboardArrowRightIcon />} // Next button icon
                            backIconButton={<KeyboardArrowLeftIcon />} // Back button icon
                        />
                    </div>
                </div>
            </div>
        </activity>
    );
};

export default Activity;
