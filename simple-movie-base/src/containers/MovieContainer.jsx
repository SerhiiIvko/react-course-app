import React from 'react';
import { IMG_URL } from '../api/Api';
import LikesCounter from './likesCounter/LikesCounter';
import BasicRating from './basicRating/BasicRating';
import './MovieStyle.css';

function MovieContainer({ movie }) {
    return (
      <div className="wrapper">
        <div
          className="wrapperCard"
          key={movie.id}
        >
          <img
            className="image-container"
            src={`${IMG_URL}${movie.backdrop_path}`}
            alt={movie.path}
          />
          <br/>
          {movie.title}
        </div>
        <BasicRating />
        <div className="wrapperLike">
          <LikesCounter />
        </div>
      </div>
    );
  }
  export default MovieContainer;
  