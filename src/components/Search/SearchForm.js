import React, { Component } from 'react';
import axios from 'axios';
import SearchList from './SearchList'
import MovieDetails from '../MoviePage/MovieDetails'

class SearchForm extends Component {

    state = {
        searchTerm: '',
        searchResults: [],
    }

    handleSearchChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    searchMovie = (e) => {
        e.preventDefault();
        // console.log('searchTerm: ', this.state.searchTerm);
        axios({
            'method': 'GET',
            'url': `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${this.state.searchTerm}`
        })
            .then((result) => {
            this.setState({
                searchResults: result.data
            })
            // console.log('result:', result);
            
        })
        .catch(error => {
            console.log('Error with GET in MovieList.js', error);
        })
    }

    render() {
        // console.log('this.state.searchResults.results: ', this.state.searchResults.results);
        
        return (
            <div>
                <h1>SearchForm.js</h1>
                    <form>
                        <input onChange={this.handleSearchChange}></input>
                        <button onClick={this.searchMovie}>Search</button>
                    </form>
                <MovieDetails />
                <SearchList searchResults={this.state.searchResults.results} />
            </div>
        )
    }
}

export default SearchForm;