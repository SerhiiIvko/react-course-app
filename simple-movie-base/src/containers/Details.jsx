import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, connect } from 'react-redux';
import { BASE_URL, IMG_URL, GET_MOVIE_BY_ID, API_KEY } from '../api/Api';
import { fetchMovieGenres } from '../actions/Actions';
import GenresApi from '../api/GenresApi';
import LikesCounter from './likesCounter/LikesCounter';
import BasicRating from './basicRating/BasicRating';
import { NavLink } from 'react-router-dom';
// import '../App.css';
import './MovieStyle.css';

function Details(props) {
        const movie = props.movie;
        const [genr, setGenre] = useState([])
        const [director, setDirector] = useState([]);
        if(!movie) {
            console.log('not selected movie');
            return 'select the movie, please';
        }
        const movieId = movie.id;
        async function fetchGenre(id) {
            const response = await fetch(`${BASE_URL}${GET_MOVIE_BY_ID}${id}${API_KEY}`);
            const movie = await response.json();
            return movie;
        }
        
        fetchGenre(movieId).then(movie => {
            movie.genres.forEach(genre => {
                setGenre([genre.name])
                // console.log(genre)
            })
        });

        // async function getDirectors(id) {
        //     const response = await fetch(`${BASE_URL}${GET_MOVIE_BY_ID}${id}/credits${API_KEY}`);
        //     const movie = await response.json();
        //     return movie;
        // }
        // getDirectors(movieId).then(movie => {
        //     movie.directors.forEach(director => {
        //         setDirector([director.name])
                
        //     })
        //     console.log(director);
        // });

        // async function getDirectors(id) {
        //     const response = await fetch(`${BASE_URL}${GET_MOVIE_BY_ID}${id}/credits${API_KEY}`)
        //     .then(response => response.json())
        //     .then((jsonData)=>jsonData.crew.filter(({job})=> job ==='Director'));
        // }

        // getDirectors(movieId).then(movie => {
        //     movie.directors.forEach(director => {
        //         setDirector([director.name])
        //     })
        // });
        
    return (
        <div>
            <div>
                <div className="details-block">
                    <div className="div-img">
                        <img
                        src={`${IMG_URL}${movie.backdrop_path}`}
                        alt={movie.path}
                    />
                    </div>
                    <div className="div-rating">
                        <h4>{movie.title}</h4>
                        <BasicRating />
                        <div className="wrapperLike">
                            <LikesCounter /><p> people likes this movie</p>
                        </div>
                    <div>
                        <button 
                            type="submit" 
                            className="button" 
                            onClick={<NavLink to="/movie-edit"></NavLink>}>
                            Edit movie
                        </button>
                        <br/>
                        <button 
                            type="submit" 
                            className="alert-button" 
                            onClick={<NavLink to="/movies"></NavLink>}>
                            Delete movie
                        </button>
                    </div>
                </div>                
                </div>                
                <p>Director: </p>
                <p>Actors: </p>
                <p>Genres: {genr}</p>
                <p>Description: {movie.overview}</p>
            </div>
        </div>
        );
    }


function mapStateToProps(state) {
    return {
        movie: state.active
    };
}

export default connect(mapStateToProps)(Details);