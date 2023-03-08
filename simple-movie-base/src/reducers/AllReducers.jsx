import { combineReducers } from 'redux';
import populateMovies from './Movie';
import MovieActive from './MovieActive';

const allReducers = combineReducers ({
    movies: populateMovies,
    active: MovieActive
});

export default allReducers;
