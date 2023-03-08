
export const select = (movie) => {
    return{
        type: "MOVIE_SELECTED",
        payload: movie
    }
};