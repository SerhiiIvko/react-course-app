export const fetchMoviesAction = (movies) => {
return{
    type: "FETCH_MOVIES",
    payload: movies
    }
};

export const select = (movie) => {
    return{
        type: "MOVIE_SELECTED",
        payload: movie
    }
};

export const fetchMovieGenres = (genres) => {
    return{
        type: "FETCH_GENRES",
        payload: genres
        }
    };