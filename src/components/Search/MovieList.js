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
        console.log('getMovie');
        axios({
            "method":"GET",
            "url":"https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/inception",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"imdb-internet-movie-database-unofficial.p.rapidapi.com",
            "x-rapidapi-key":`${process.env.REACT_APP_MOVIE_API_KEY}`,
            "useQueryString":true
            }
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
        let title = this.state.displayMovie.titles && this.state.displayMovie.titles[0].title
        console.log('ML this.state: ', this.state.displayMovie.titles && this.state.displayMovie.titles[0].title);
        
        return (
            <div>
                <h1>************************</h1>
                <h1>MovieList</h1>
                    <p>{title}</p>
            </div>
        );
    }
}

export default MovieList;