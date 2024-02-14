import React, {createContext, useContext, useState} from 'react';

const PaginationContext = createContext();

function PaginationContextWrapper({children}) {
  const [pageSize, setPageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <PaginationContext.Provider value={{ pageSize, setPageSize, currentPage, setCurrentPage }}>
        {children}
    </PaginationContext.Provider>
  )
}

export default PaginationContextWrapper;

export const usePaginationContext = () => {
    return useContext(PaginationContext);
} 