import { createContext, useContext, useRef, useState } from "react";

const SearchContext = createContext();

// Custom hook to use the search context
export function useSearch() {
  return useContext(SearchContext);
}

// Step 2: Create a provider
export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const fieldNameRef = useRef(""); // Initialize fieldNameRef with an initial value

  const setFieldName = (field) => {
    fieldNameRef.current = field;
  };

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        fieldNameRef: fieldNameRef.current,
        setFieldName,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
