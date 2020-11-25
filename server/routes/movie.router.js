const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.get('/', (req, res) => {
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
            res.send(result.rows);                           
        })
        .catch((error) => {
            console.log(`ERROR with GET in movie.router: `, error);
        })
    }); // END GET Route