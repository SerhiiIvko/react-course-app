import React from "react";
import MovieList from '../containers/MovieList';
import Details from "../containers/Details";
import './webpage.css';

const WepPage = () => (
    <div className="parent">
        <div className="div1">
            <h2>Movies: </h2>
            <MovieList />
        </div>
        <div className="div2">
            <h4>Info:</h4>
            <Details />
        </div>
        
    </div>

);

export default WepPage;