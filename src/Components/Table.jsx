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
    <div className="overflow-auto max-h-[85vh] ">
      <table className=" table-auto w-full border-none border-gray-300">
        <thead>
          <tr className="  bg-[#7E57C2]">
            <td className="px-4 py-2">TransactionID</td>
            <td className="px-4 py-2  ">
              <input
                className="w-full rounded-sm bg-violet-300 placeholder-violet-500  text-violet-900   "
                type="text"
                placeholder="Search by Sender"
                onKeyPress={(e) => handleKeyPress(e)}
                onChange={() => handleInputChange("sender")}
              />
            </td>
            <td className="px-4 py-2  ">
              <input
                className="w-full rounded-sm bg-violet-300 placeholder-violet-500  text-violet-900   "
                type="text"
                placeholder="Search by Receiver"
                onKeyPress={(e) => handleKeyPress(e)}
                onChange={() => handleInputChange("receiver")}
              />
            </td>
            <td className="px-4 py-2  ">
              <input
                className="w-full rounded-sm bg-violet-300 placeholder-violet-500  text-violet-900   "
                type="text"
                placeholder="Search by Cause"
                onKeyPress={(e) => handleKeyPress(e)}
                onChange={() => handleInputChange("cause")}
              />
            </td>
            <td className="px-4 py-2">
              <input
                className="w-full "
                type="text"
                placeholder="Search by Createdat"
                onKeyPress={(e) => handleKeyPress(e)}
                onChange={() => handleInputChange("createdat")}
              />
            </td>
            <td className="px-4 py-2">
              <button
                className="text-slate-600 bg-lime-500 rounded-lg"
                onClick={handleClearFilter}
              >
                Clear Filter
              </button>
            </td>
          </tr>
          <tr className="bg-[#7E57C2] border-b-2">
            <th className="px-4 py-2 text-white">ID</th>
            <th className="px-4 py-2 text-white">Sender</th>
            <th className="px-4 py-2 text-white">Receiver</th>
            <th className="px-4 py-2 text-white">Cause</th>
            <th className="px-4 py-2 text-white">Createdat</th>
            <th className="px-4 py-2 text-white">Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredData?.map((transaction, index) => (
            <tr key={index} className="hover:bg-gray-200">
              <TooltipCell content={transaction.id} />
              <td className="px-4 py-2">{transaction.sender.name}</td>
              <td className="px-4 py-2">{transaction.receiver.name}</td>
              <td className="px-4 py-2">{transaction.cause}</td>
              <td>
                {new Date(transaction.created_at_time * 1000).toLocaleString()}
              </td>

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
        <div className="absolute w-80 z-10 bg-violet-200 border border-gray-300 p-2 rounded-md shadow-md">
          {content}
        </div>
      )}
    </td>
  );
};

export default Table;
