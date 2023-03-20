import React from "react";
import MovieList from '../containers/MovieList';
import Details from "../containers/Details";
import './webpage.css';
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import SearchDetails from '../containers/search/SearchDetails';
import Filter from "../containers/filter/Filter";
import '../containers/Movielist.css'

const WepPage = (props) => (
    <div>
        <div className="parent">
            <div className="div1">
                <div>
                    <div className="filters">
                        <Filter />
                        <SearchDetails details={props.movies}/>
                    </div>
                </div>
                <div className="popular-movies">
                    <MovieList />
                </div>              
            </div>
            <div className="div2">
                <Details />
            </div>
        </div>
    </div>
);

export default WepPage;