
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import { useMediaQuery } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import TablePagination from '@mui/material/TablePagination';
var cnt = 0;
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

const rows = [
    createData(1, 'Pepe PEPE', 1000520, 3500, 8750, '/pepe.png'),
    createData(2, 'Frax FRAX', 350, 3500, 8750, '/frax.png'),
    createData(3, 'Ethereum ETH', 2.5, 3500, 8750, '/eth.png'),
    createData(4, 'Uniswap UNI', 25, 3500, 8750, '/uni.png'),
    createData(5, 'Chainlink Token LINK', 50, 3500, 8750, '/chain.png'),
    createData(6, 'Wrapped Bitcoin WBTC', 0.05, 3500, 8750, '/wbtc.png'),
    createData(7, 'Shiba INU SHIB', 3800, 3500, 8750, '/shiba.png'),
    createData(8, 'Lido DAO Token LDO', 1, 3500, 8750, '/lido.png'),
    createData(9, 'Maker MKR', 1, 3500, 8750, '/mkr.png'),
    createData(10, 'Ribbon RBN', 350, 3500, 8750, '/rbn.png'),


];

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

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
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

const headCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Asset',
    },
    {
        id: 'calories',
        numeric: true,
        disablePadding: false,
        label: 'Balance',
    },
    {
        id: 'fat',
        numeric: true,
        disablePadding: false,
        label: 'Price',
    },
    {
        id: 'carbs',
        numeric: true,
        disablePadding: false,
        label: 'Value',
    },
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const isMobile = useMediaQuery('(max-width:700px)');
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow className="bg-[#190F01] h-8">
                {headCells.map((headCell) => (
                    (isMobile && (headCell.id === 'fat' || headCell.id === 'carbs')) ? null : (
                        <TableCell
                            key={headCell.id}
                            padding={headCell.disablePadding ? 'none' : 'normal'}
                            sortDirection={orderBy === headCell.id ? order : false}
                            className="border-none py-2 text-center"
                        >
                            <TableSortLabel
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={createSortHandler(headCell.id)}
                                style={{ color: 'white' }}
                            >
                                {headCell.label}
                                {orderBy === headCell.id ? (
                                    <Box component="span" sx={visuallyHidden}>
                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                ) : null}
                            </TableSortLabel>
                        </TableCell>
                    )
                ))}
            </TableRow>
        </TableHead>

    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};



export default function EnhancedTable() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
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
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer className="flex flex-col items-center justify-center bg-black">
                    <Table
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody className="bg-black">
                            {visibleRows.map((row, index) => {
                                const isItemSelected = isSelected(row.id);
                                const labelId = `enhanced-table-checkbox-${index}`;
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id}
                                    >
                                        <TableCell
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                            style={{ color: 'white', padding: '3px', fontSize: '15px' }} // Adjust padding and font size
                                            className="border-none flex items-center" // Apply Tailwind class to remove borders and align content vertically
                                        >
                                            <div
                                                style={{ width: "25px", height: "25px" }}
                                                className="w-16 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2"
                                            >
                                                <img
                                                    src={row.avatar}
                                                    alt={row.name}
                                                    className="w-full h-full rounded-full"
                                                />
                                            </div>
                                            <span className="lg:inline">{row.name}</span> {/* Show name only on larger screens */}
                                        </TableCell>
                                        <TableCell align="right" style={{ color: 'white', padding: '3px', fontSize: '15px' }} className="border-none text-center ">{row.calories}</TableCell> {/* Display calories only on larger screens */}
                                        <TableCell align="right" style={{ color: 'white', padding: '3px', fontSize: '15px' }} className="border-none text-center hidden lg:table-cell">{row.fat}</TableCell>
                                        <TableCell align="right" style={{ color: 'white', padding: '3px', fontSize: '15px' }} className="border-none text-center hidden lg:table-cell">{row.carbs}</TableCell>
                                    </TableRow>
                                );
                            })}

                        </TableBody>

                    </Table>

                    <TablePagination className="bg-black text-[#C86C00]"
                        rowsPerPageOptions={[5]} // Number of rows per page options
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

                </TableContainer>
            </Paper>

        </Box>
    );
}
