import React, { Component } from "react";
import { connect } from 'react-redux';

class Details extends Component {
    render() {
        const movie = this.props.movie;
        if(!movie) {
            console.log('not selected movie');
            return 'select the movie';
        }
        return (
        <div>
            <h4>{movie.title}</h4>
            <h4>{movie.desc}</h4>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movie: state.active
    };
}

export default connect(mapStateToProps)(Details);