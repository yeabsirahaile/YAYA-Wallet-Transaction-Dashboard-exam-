import { useSearch } from "../Context/Context";

const Pagination = () => {
  const { currentPage, setCurrentPage } = useSearch();

  const handleButtonClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    // You can perform any additional actions here when the page changes
  };
  const totalPages = 10;

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`mx-1 px-3 py-1 rounded ${
            currentPage === i ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleButtonClick(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <button
        className="mx-1 px-3 py-1 rounded bg-gray-300"
        onClick={() => handleButtonClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        className="mx-1 px-3 py-1 rounded bg-gray-300"
        onClick={() => handleButtonClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
