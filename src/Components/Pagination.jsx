import { useSearch } from "../Context/Context";
import { useEffect, useState } from "react";

const Pagination = ({ totalPages }) => {
  // totalpages value will come frome data api lastpage value

  const { currentPage, setCurrentPage } = useSearch();
  const [isNarrowViewport, setIsNarrowViewport] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsNarrowViewport(window.innerWidth <= 1024); // Adjusting the viewport
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); // Listenine to change in viewport

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  const handlePreviousClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex lg:items-center lg:justify-center mt-4">
      <button
        className={`mx-1 px-3 py-1 rounded ${
          currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-300"
        } `}
        onClick={handlePreviousClick}
        disabled={currentPage === 1}
      >
        Previous
      </button>

{/* hide the each page button and displaying previous and next button only as it is responsive */}

      {isNarrowViewport ? (
        <div className="mx-1 px-3 py-1 rounded bg-violet-500 text-white">
          {currentPage}
        </div>
      ) : (
        Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === i + 1 ? "bg-violet-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))
      )}
      <button
        className={`mx-1 px-3 py-1 rounded ${
          currentPage === totalPages
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-gray-300"
        } `}
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
