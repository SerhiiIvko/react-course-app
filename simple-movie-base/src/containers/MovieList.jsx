import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector, connect } from 'react-redux';
import { select } from '../actions/Actions';
import { fetchMoviesAction } from '../actions/Actions';
import MovieContainer from "./MovieContainer";
import MoviesApi from '../api/MoviesApi';
import './Movielist.css';

function MovieList(props) {
    const movies = useSelector((state) => state.movies.movies);
    const dispatch = useDispatch();
  
    const fetchMovies = async () => {
      try {
        const data = await MoviesApi.getMovies();
        dispatch(fetchMoviesAction(data));
        console.log(data);
      } catch (error) {
        console.log(error.response);
      }
    };
    useEffect(() => {
      fetchMovies();
    }, []);

    return (
        movies.map((movie) => {
            return (
                <div>                    
                    <div
                        onClick={() => props.select (movie)}
                        >
                        <a href='#'>
                            <MovieContainer key={movie.id} movie={movie} />
                        </a>
                    </div>
                </div>
            )
        })
    );
}

function mapStateToProps(state) {
    return {
        movies: state.movies
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({select: select}, dispatch);
}

export default connect (mapStateToProps, matchDispatchToProps)(MovieList);