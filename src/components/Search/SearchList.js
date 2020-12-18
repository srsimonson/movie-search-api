import React, { Component } from 'react';
import axios from 'axios';

class SearchList extends Component {

    state = {
        id: 0,
    }

    selectMovie = () => {
        // console.log('selectMovie clicked');
        console.log(this.props.searchResults);
    }

    render() {
        if (typeof this.props.searchResults !== 'undefined') {
            // console.log('SearchList.js searchResults: ', this.props.searchResults)
            
            return (
                
                <div>
                    <h4>Movies:</h4>
                    {/* <p>{JSON.stringify([this.props.searchResults])}</p> */}
                    {this.props.searchResults.map((item) => {
                        return <ul className="search-list" key={item.id}>
                             <li>{item.id}: id.</li>
                             <li onClick={ ()=> 
                                axios.get(`https://api.themoviedb.org/3/movie/${item.id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`)
                                .then((result) => {
                                    console.log('result: ', result.data);
                                    const {overview} = result.data;
                                    console.log('overview: ', overview);
                                })
                                .catch(error => {
                                    console.log('Error with GET in MovieList.js', error);
                                    
                                }) }>{item.title}</li>
                        </ul>
                    })}
                </div>  
            )
        } else {
            return (
                <h4>Movies:</h4>
            )
        }
    }
}

export default SearchList;