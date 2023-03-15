import React from 'react';
import MovieContainer from '../MovieContainer';

function Search({ movies }) {
  const result = movies.map((movie) => <MovieContainer key={movie.id} movie={movie} />);
  if (result.length) {
    return (
      <div>
        {result}
      </div>
    );
  }
  return (<div><h1>No such movies. Try a different search or clear the search field.</h1></div>);
}
export default Search;
