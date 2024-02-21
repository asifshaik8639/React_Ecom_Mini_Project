import React, { useState, useEffect } from 'react';
import { Skeleton } from '@mui/material';
import {AUTHTOKEN, MOVIELIST, TMDBURL, TMDBIMAGEBASEPATH, OPTIONS} from '../utils/Constants';
import MovieTrailer from './MovieTrailer';
import ModalContainer from './ModalContainer';



const Movies = () => {

  const [selectedOption, setSelectedOption] = useState('now_playing');
  const [moviesResponseList, setMoviesResponseList] = useState([]);
  const [selectedMovieID, setSelectedMovieID] = useState(null);

  const onMovieCategoryFilterHandler = (event) => {
    setSelectedOption(MOVIELIST[event.target.textContent]);
  };

  const selectedMovieOnClickHandler = (event, item) => {
    setSelectedMovieID(item.id);
  };

  useEffect(() => {

    setMoviesResponseList([]);     
      fetch(`${TMDBURL}/${selectedOption}?language=en-US&page=1`, OPTIONS)
        .then(response => response.json())
        .then(response => {
            setMoviesResponseList(response.results);
        })
        .catch(err => console.error(err));
  }, [selectedOption]);


  return (
    <>
        
        <div className='flabel-container align-center-cls'>
            <h4>Movie Lists </h4>
            {
                Object.keys(MOVIELIST).map((item, index)=> {
                    return  <div key={`flabel`+index} 
                                    className='filter-label-cls'
                                    onClick={(e)=> onMovieCategoryFilterHandler(e)}
                                    >
                                {item}
                            </div>
                })
            }
        </div>
    
        <div className='movies-list-container-cls'>
            {
                moviesResponseList.length < 0 ?
                <div key='filter-data' className='flabel-container '>
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
                <div key='filter-data' className='flabel-container'>
                    {
                        (moviesResponseList?.map((item, index)=> {
                            return  <div className='flex-item-cls'
                                        key={`${index}flex-item`} 
                                        onClick={(e) => selectedMovieOnClickHandler(e, item)}>
                                        <img className='prod-img-cls' 
                                            key={`${index}image`} 
                                            src={`${TMDBIMAGEBASEPATH}${item.poster_path}`} />
                                        <div className='prodcut-title-cls'
                                            key={`${index}title`} >
                                            {item.title}
                                        </div>
                                    </div>
                        }))
                    }
                </div>
            }
            {
                <ModalContainer selectedMovieID={selectedMovieID} />
            }
        </div>
    </>
    
  )
}

export default Movies;