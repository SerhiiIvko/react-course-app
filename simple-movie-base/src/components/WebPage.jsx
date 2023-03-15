import React from "react";
import MovieList from '../containers/MovieList';
import Details from "../containers/Details";
import './webpage.css';
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import SearchDetails from '../containers/search/SearchDetails';
import Filter from "../containers/filter/Filter";
import '../containers/Movielist.css'

const WepPage = () => (
    <div>

    <Header />
    <div className="parent">
        <div className="filters">
             <Filter />
            {/* <SearchDetails /> */}
        </div>   
        <div className="div1">
            <div className="popular-movies">
                <MovieList />
            </div>              
        </div>
        <div className="div2">
            <h4>Info:</h4>
            <Details />
        </div>
        
    </div>
    <div className="container">
        <Footer />
    </div>
    
    </div>
);

export default WepPage;