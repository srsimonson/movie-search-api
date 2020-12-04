import React, { Component } from 'react';
import axios from 'axios';
import SearchList from './SearchList'

class SearchForm extends Component {

    state = {
        searchTerm: '',
        searchResults: [],
        seven: 7,
    }

    handleSearchChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    searchMovie = (e) => {
        e.preventDefault();
        console.log('searchTerm: ', this.state.searchTerm);
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
        const greeting = "Welcome to React"
        console.log('this.state.searchResults.results: ', this.state.searchResults.results);
        
        return (
            <div>
                <h1>SearchForm.js</h1>
                <div>
                    <Greeting greeting={greeting}/>
                </div>
                    <form>
                        <input onChange={this.handleSearchChange}></input>
                        <button onClick={this.searchMovie}>Search</button>
                    </form>
                <SearchList 
                    searchResults={this.state.searchResults.results}
                    hereIsA7={this.state.seven}   
                />
            </div>
        )
    }
}

class Greeting extends Component {
    render() {
        // const greeting = 'Welcome to React'
        return (
            <h1>{this.props.greeting}</h1>
        )
    }
}

export default SearchForm;