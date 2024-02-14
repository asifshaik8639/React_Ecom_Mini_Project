import React, {createContext, useContext, useState, useRef} from 'react';

const PaginationContext = createContext();

function PaginationContextWrapper({children}) {
  const [pageSize, setPageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setCurrentOffSet]= useState(0);
  const [data, setData] = useState([]);
  const resultDataRef = useRef(null);
  const resultSubsequentRef = useRef(null);

  let context = {
    pageSize, 
    setPageSize, 
    currentPage, 
    setCurrentPage,
    offset,
    setCurrentOffSet,
    data,
    setData,
    resultDataRef,
    resultSubsequentRef
  }


  return (
    <PaginationContext.Provider value={context}>
        {children}
    </PaginationContext.Provider>
  )
}

export default PaginationContextWrapper;

export const usePaginationContext = () => {
    return useContext(PaginationContext);
} 