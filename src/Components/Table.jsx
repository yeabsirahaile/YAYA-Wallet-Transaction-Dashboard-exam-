import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { useSearch } from "../Context/Context";

const Table = ({ tableData }) => {
  const [filteredData, setFilteredData] = useState(tableData.data);
  const { searchTerm, setSearchTerm, fieldNameRef, setFieldName } = useSearch();

  const receiverName = import.meta.env.VITE_LOGGED_IN_USER;

  useEffect(() => {
    const filterData = () => {
      let updatedData = [...tableData.data];
      if (searchTerm) {
        switch (fieldNameRef) {
          case "sender":
            updatedData = updatedData.filter((transaction) =>
              transaction.sender.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            );
            break;
          case "receiver":
            updatedData = updatedData.filter((transaction) =>
              transaction.receiver.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            );
            break;
          case "cause":
            updatedData = updatedData.filter((transaction) =>
              transaction.cause.toLowerCase().includes(searchTerm.toLowerCase())
            );
            break;
          case "createdat":
            updatedData = updatedData.filter((transaction) =>
              transaction.created_at_time
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            );
            break;
          default:
            break;
        }
      }
      setFilteredData(updatedData);
    };
    filterData();
  }, [searchTerm, tableData.data, fieldNameRef]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setSearchTerm(event.target.value.trim().toLowerCase());
    }
  };

  const handleInputChange = (field) => {
    setFieldName(field);
  };

  const handleClearFilter = () => {
    setSearchTerm("");
  };

  return (
    <div className="overflow-x-auto ">
      <table className=" table-auto w-full border border-gray-300">
        <thead>
          <tr className="bg-violet-300">
            <th className="px-4 py-2">TransactionID</th>
            <th className="px-4 py-2">
              <input
                className="w-full sm:w-auto"
                type="text"
                placeholder="Search by Sender"
                onKeyPress={(e) => handleKeyPress(e)}
                onChange={() => handleInputChange("sender")}
              />
            </th>
            <th className="px-4 py-2">
              <input
                className="w-full sm:w-auto"
                type="text"
                placeholder="Search by Receiver"
                onKeyPress={(e) => handleKeyPress(e)}
                onChange={() => handleInputChange("receiver")}
              />
            </th>
            <th className="px-4 py-2">
              <input
                className="w-full sm:w-auto"
                type="text"
                placeholder="Search by Cause"
                onKeyPress={(e) => handleKeyPress(e)}
                onChange={() => handleInputChange("cause")}
              />
            </th>
            <th className="px-4 py-2">
              <input
                className="w-full sm:w-auto"
                type="text"
                placeholder="Search by Createdat"
                onKeyPress={(e) => handleKeyPress(e)}
                onChange={() => handleInputChange("createdat")}
              />
            </th>
            <th className="px-4 py-2">
              <button onClick={handleClearFilter}>Clear Filter</button>
            </th>
          </tr>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">TransactionID</th>
            <th className="px-4 py-2">Sender</th>
            <th className="px-4 py-2">Receiver</th>
            <th className="px-4 py-2">Cause</th>
            <th className="px-4 py-2">Createdat</th>
            <th className="px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredData?.map((transaction, index) => (
            <tr key={index} className="hover:bg-gray-200">
              <TooltipCell content={transaction.id} />
              <td className="px-4 py-2">{transaction.sender.name}</td>
              <td className="px-4 py-2">{transaction.receiver.name}</td>
              <td className="px-4 py-2">{transaction.cause}</td>
              <td>{transaction.created_at_time}</td>
              <td className="px-4 py-2">
                <div
                  className={`
                    ${
                      receiverName === transaction.receiver.name
                        ? " bg-green-100 text-green-600"
                        : " bg-red-100 text-red-600"
                    } rounded-xl text-center font-medium`}
                >
                  {transaction.amount} {transaction.currency}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TooltipCell = ({ content }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <td
      className="px-4 py-2 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {content.length > 10 ? `${content.slice(0, 10)}...` : content}
      </div>
      {isHovered && (
        <div className="absolute w-80 z-10 bg-white border border-gray-300 p-2 rounded-md shadow-md">
          {content}
        </div>
      )}
    </td>
  );
};

export default Table;
