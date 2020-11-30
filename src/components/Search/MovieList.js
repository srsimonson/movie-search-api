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
        let titles = this.state.displayMovie.results
        let posterPath = 'https://image.tmdb.org/t/p/w500'
        console.log('State: ', titles);
        
        return (
            <div>
                <h1>************************</h1>
                <h1>MovieList</h1>
                <div>
                    {titles && titles.map((title) => (
                        <div>
                            <li key={title.id}>Title: {title.original_title}</li>
                            <li> Poster Path: {title.poster_path}</li>
                            {/* <li>Year: {title.Year}</li> */}
                            {/* <li>IMDB: {title.imdbID}</li> */}
                            <img src ="https://image.tmdb.org/t/p/w500/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default MovieList;