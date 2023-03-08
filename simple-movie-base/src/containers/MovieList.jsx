import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { select } from '../actions/Actions';

class MovieList extends Component {
    render () {
        const movies = this.props.movies;
        return movies.map((movie) => {
            return (
                <div 
                onClick={() => this.props.select (movie)}
                key={movie.id}><a href='#'>{movie.title}</a></div>
            )
        });
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({select: select}, dispatch);
}

export default connect (mapStateToProps, matchDispatchToProps)(MovieList);