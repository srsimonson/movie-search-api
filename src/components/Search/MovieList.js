// import './Thumbs.css';
import React, {useState, Component} from 'react';
import axios from 'axios';

class MovieList extends Component {

    state = {
        displayMovie: []
    }

    componentDidMount() {
        this.getMovie();
    }

    getMovie = () => {
        // axios({
        //     "method":"GET",
        //     "url":"https://movie-database-imdb-alternative.p.rapidapi.com/",
        //     "headers":{
        //         "content-type":"application/octet-stream",
        //         "x-rapidapi-host":"movie-database-imdb-alternative.p.rapidapi.com",
        //         "x-rapidapi-key":`${process.env.REACT_APP_MOVIE_API_KEY}`,
        //         "useQueryString":true
        //     },
        //     "params":{
        //         "page":"1",
        //         "r":"json",
        //         "i":"tt0100669"
        //     }
        // })
        axios({
            'method': 'GET',
            'url': `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=spiderman`
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
        let movies = this.state.displayMovie.results
        console.log('State: ', movies);
        
        return (
            <div>
                <h1>************************</h1>
                <h1>MovieList</h1>
                <form>
                    <input
                            type="text"
                            value='hi'
                            onChange=''
                    />
                    <button 
                        type="button" 
                        onClick=''>
                        Search
                    </button>
                </form>
                <div>
                    {movies && movies.map((movie) => (
                        <ul key={movie.id}>
                            <li>Title: {movie.original_title}</li>
                            <li> Release Date: {movie.release_date}</li>
                            <li> Vote Average: {movie.vote_average}</li>
                            <li> Popularity: {movie.popularity}</li>
                            <img src={'https://image.tmdb.org/t/p/w200' + movie.poster_path} />
                            <p>{movie.overview}</p>
                            <br/>
                            <br/>
                        </ul>
                    ))}
                </div>
            </div>
        );
    }
}

export default MovieList;