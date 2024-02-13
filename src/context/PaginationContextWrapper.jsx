import React, {createContext, useContext, useState} from 'react';

const PaginationContext = createContext();

function PaginationContextWrapper({children}) {
  const [pageSize, setPageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const contextData = {
    pageSize,
    setPageSize,
    currentPage,
    setCurrentPage
  };

  return (
    <PaginationContext.Provider value={contextData}>
        {children}
    </PaginationContext.Provider>
  )
}

export default PaginationContextWrapper;

export const paginationUseContext = () => {
    return useContext(PaginationContext);
} 