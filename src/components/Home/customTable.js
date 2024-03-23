import { useState } from 'react';
const IndexPage = () => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const data = [
    { icon: '/path/to/icon.png', columnName1: 'Value 1', columnName2: 'Value 2' },
    // Add more data objects as needed
  ];
  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };
  const sortedData = data.sort((a, b) => {
    if (sortColumn) {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];
      if (sortDirection === 'asc') {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    }
    return 0;
  });
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Sortable Table</h1>
        <table className="w-full bg-black">
          <thead>
            <tr>
              <th className="px-4 py-2 text-white border-b-2 border-white">
                <img src="/path/to/icon.png" alt="Icon" className="h-6 w-6" />
              </th>
              <th
                className="px-4 py-2 cursor-pointer text-white border-b-2 border-white"
                onClick={() => handleSort('columnName1')}
              >
                Column 1
              </th>
              <th
                className="px-4 py-2 cursor-pointer text-white border-b-2 border-white"
                onClick={() => handleSort('columnName2')}
              >
                Column 2
              </th>
              {/* Add more columns as needed */}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-2 text-white border-b border-white">
                  <img src={row.icon} alt="Icon" className="h-6 w-6" />
                </td>
                <td className="px-4 py-2 text-white border-b border-white">{row.columnName1}</td>
                <td className="px-4 py-2 text-white border-b border-white">{row.columnName2}</td>
                {/* Add more cells as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default IndexPage;