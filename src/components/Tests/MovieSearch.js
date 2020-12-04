import React, { Component } from 'react';
import axios from 'axios';
// import { connect } from 'react-redux';

class MovieSearch extends Component {

    state = {
        searchTerm: ''
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    searchMovie = () => {
        // console.log('searchTerm: ', this.state.searchTerm);
        axios({
            'method': 'GET',
            'url': `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${this.state.searchTerm}`
        })
            .then((result) => {
            this.setState({
                displayMovie: result.data
            })
            console.log('result:', result);
            
        })
        .catch(error => {
            console.log('Error with GET in MovieList.js', error);
        })
    }
    render() {
        return (
            <div>
                <h1>MOVIE SEARCH</h1>
                <input onChange={this.handleChange}></input>
                <button onClick={this.searchMovie}>Search Movie</button>
            </div>
        )
    }
}

export default MovieSearch;