import React, { useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { select } from '../actions/Actions';
import MoviesApi from '../api/MoviesApi';
import MovieComponent from '../containers/MovieComponent';

export default function MoviesFetcher() {
    const popular = useSelector((state) => state.movies.movies);
    const dispatch = useDispatch();
    const fetchMovies = async () => {
    try {
      const data = await MoviesApi.getMovies();
      dispatch(select(data));
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div>
            {popular.map((movie) => 
              <MovieComponent
                key={movie.id}
                movie={movie}
              />          
            )}
    </div>
  )
}
