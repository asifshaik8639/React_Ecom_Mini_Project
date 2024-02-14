import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import debounce from '../utils/debounce';
import FilterLabel from './FilterLabel';
import { Skeleton } from '@mui/material';
import SideDrawer from './SideDrawer';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { usePaginationContext } from '../context/PaginationContextWrapper';


function Home() {
    
    const [inputSearchText, setInputSearchText] = useState('');
    let isMenuOn = false;
    let { pageSize, 
            setPageSize, 
            currentPage, 
            setCurrentPage, 
            offset, 
            setCurrentOffSet,
            data,
            setData,
            resultDataRef,
            resultSubsequentRef  } = usePaginationContext();

    const getProducts = () => {
        try {
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((response)=> {
               
                    resultDataRef.current = response;
                    resultSubsequentRef.current = response;
                    setData(response);
                
            });
        }catch(error) {
            console.error(error);
        }
    }

  useEffect(()=>{
    if(Array.isArray(data) && data.length === 0) {
        getProducts();
    }
  },[]);

  const filterDataBasedOnSearchInput = (prop = 'title', searchText = '') => {

    try {
        setData([]);
        if(searchText === 'All') {
            searchText = '';
        }
        let result = resultSubsequentRef.current.slice();

        const filteredDataonTitle =  result.filter((item) => {
            return item[prop].toLowerCase().includes(searchText);
        });
        resultDataRef.current = filteredDataonTitle;
        setData(resultDataRef.current);
    } catch(error) {
        console.error('error in filterDataBasedOnSearchInput = > ', error);
    }
  }

  let debounceSearchFunc = debounce(filterDataBasedOnSearchInput, 3000);

  useEffect(()=> {
        try {
            if(inputSearchText != '') {
                debounceSearchFunc('title', inputSearchText);
            } else {
                setData(resultDataRef.current);
            }
        } catch(error) {
            console.error(error);
        }
    },[inputSearchText]);


  const onCategoryFilterHandler = (event) => {
    console.log(event.target);
    let categorySelected = event.target.textContent || event.currentTarget.textContent || '';
    debounceSearchFunc('category', categorySelected);
    setCurrentPage(1);
    setCurrentOffSet(0);
    setInputSearchText('');
  }

  const sortArrayObj = (IsAsc, itemsArray, prop) =>  {
    let sortedResultArray = [];
    // sort by name
    if(Array.isArray(itemsArray) && itemsArray.length > 0) {
      sortedResultArray = itemsArray.slice().sort((a, b) => {
          let nameA = a[prop];
          let nameB = b[prop];
          if(IsAsc) {
               nameA = nameA.toUpperCase(); // ignore upper and lowercase
               nameB = nameB.toUpperCase(); // ignore upper and lowercase
          } else {
               nameA = nameB.toUpperCase(); // ignore upper and lowercase
               nameB = nameA.toUpperCase(); // ignore upper and lowercase
          }
          if (nameA < nameB) {
          return -1;
          }
          if (nameA > nameB) {
          return 1;
          }
      
          // names must be equal
          return 0;
      });
    }  else {
      return new Error("Invalid Array to sort");
    }
    return sortedResultArray;
}


  const onSortHandler = (bool) => {
    setInputSearchText('');
    console.log('in onSortHandler', bool);
    let result = resultSubsequentRef.current.slice();
    setData([]);
    if(bool) {
        const sortedProductsAsc = sortArrayObj(true,result, 'title');
        resultDataRef.current = sortedProductsAsc;
        setData(resultDataRef.current);
    } else {
        const sortedProductsDesc = sortArrayObj(false,result, 'title');
        resultDataRef.current = sortedProductsDesc;
        setData(resultDataRef.current);
    }
    setCurrentPage(1);
    setCurrentOffSet(0);
  }

  const onMenuClickHandler = (e) => {
    console.log('onMenuClickHandler',e.target);
    isMenuOn = !isMenuOn; // Toggle
    if(isMenuOn) {
        document.getElementById("appSideNav").style.flex = "20%";
    } else {
        document.getElementById("appSideNav").style.flex = "0";
    }
  }

  const onIconClickHandler = (e) => {
    console.log('on sidebar onIconClickHandler',e.target);
  }

  const onPaginationPrevious = (event) => {
    console.log('onPaginationPrevious', offset-pageSize)
    setCurrentOffSet(offset - pageSize);
    setCurrentPage(currentPage-1);
  }

  const onPaginationNext = (event) => {
    console.log('onPaginationNext', offset+pageSize)
    setCurrentOffSet(offset + pageSize);
    setCurrentPage(currentPage+1);
  }

  if(Array.isArray(data) && data.length > 0) {
    console.log('onPagination offset', offset);
    console.log('onPagination pageSize', pageSize);
    console.log('onPagination current', data);
    let paginationResult = data.slice();
    console.log('onPagination data', paginationResult.slice(offset, currentPage * pageSize));
    data = paginationResult.slice(offset, currentPage * pageSize);

  }


  return (
         
          <div className='app-container'>

            <div id="appSideNav" className='fixed-side-bar-container'>
                <SideDrawer onIconClickHandler={onIconClickHandler}></SideDrawer>
            </div>

            <div className='main-container'>
                <SearchBar onSortHandler={onSortHandler}
                           onMenuClickHandler={onMenuClickHandler}
                    sendinputTextVal={(searchTextVal) => setInputSearchText(searchTextVal.trim())}
                />

                <FilterLabel data={resultSubsequentRef?.current} onCategoryFilterHandler={onCategoryFilterHandler}/>
                <div>
                    {
                        data === null ?
                        <div key='filter-data' className='flexContainer'>
                        {
                            (
                                // Display skeletons while data is loading
                                Array.from({ length: 6 }).map((_, index) => (
                                    <div className='flex-item-cls'
                                         key={`${index}flex-item`} >
                                        <Skeleton key={index} variant="rectangular" width={200} 
                                        height={300} style={{ margin: 10 }} />
                                    </div>
                                ))
                            )
                        }
                        </div>
                        :
                        <div key='filter-data' className='flexContainer'>
                            {
                                (data?.map((item, index)=> {
                                    return  <div className='flex-item-cls'
                                                 key={`${index}flex-item`} >
                                                <img className='prod-img-cls' 
                                                    key={`${index}image`} 
                                                    src={item.image} />
                                                <div className='prodcut-title-cls'
                                                    key={`${index}title`} >
                                                    {item.title}
                                                </div>
                                                <div className='prodcut-price-cls'
                                                    key={`${index}price`}>
                                                    {`Price: $ ${item.price}`}
                                                </div>
                                            </div>
                                }))
                            }
                        </div>
                    }

                </div>

                    {
                        data?.length > 0 ?
                        <div className='pagination-container'>
                            <Button className='pagination-left-btn' 
                                    onClick={(e) => onPaginationPrevious(e)}
                                    disabled={ offset <= 0 ? true : false}>
                                <ChevronLeftIcon fontSize='large' ></ChevronLeftIcon>
                            </Button>
                            
                            <div className='current-page'>{currentPage}</div>

                            <Button className='pagination-right-btn' 
                                    onClick={(e) => onPaginationNext(e)}
                                    disabled={ 
                                        pageSize >=  (resultDataRef?.current?.length - offset) ? true : false}>
                                <ChevronRightIcon fontSize='large'></ChevronRightIcon>
                            </Button>
                        </div>
                        : 
                        <div className='no-data-search'>
                            No data for the selected Search..
                        </div>

                    }

            </div>

          </div>

        );
}
export default Home;