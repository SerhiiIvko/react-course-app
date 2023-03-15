import { combineReducers } from 'redux';
import MovieActive from './MovieActive';
import moviesReducer from './Reducers';

const allReducers = combineReducers ({
    movies: moviesReducer,
    active: MovieActive
});

export default allReducers;
