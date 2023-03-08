import React from 'react';

function MovieComponent({ movie }) {
  return (
    <div>
      <div
        key={movie.id}
      >
        {movie.title}
      </div>
    </div>
  );
}
export default MovieComponent;
