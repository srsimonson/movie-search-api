import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchHook() {
     // hits = hacker news articles
    const [ data, setData ] = useState({ hits: [] });

    useEffect(() => {
        const fetchData = async () => {
        const result = await axios(
            'https://hn.algolia.com/api/v1/search?query=inception',
        );
        setData(result.data);
        console.log('ALGOLIA result.data: ', result.data);
        };
        fetchData();
    }, [] ); // <- useEffect will re-render each time state gets updated, causing an infinite loop. the empty array as the 2nd argument here prevents this. This array exists to tell which variables the hook depends upon to watch update. If empty, then none.

    useEffect(() => {
        const fetchData = async () => {
        const result = await axios({
            "method":"GET",
            "url":"https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/inception",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"imdb-internet-movie-database-unofficial.p.rapidapi.com",
            "x-rapidapi-key":`${process.env.REACT_APP_MOVIE_API_KEY}`,
            "useQueryString":true
            }
            });
        setData(result.data);
        console.log('IMDB API result.data: ', result.data);
        };
        fetchData();
    }, [] ); // <- useEffect will re-render each time state gets updated, causing an infinite loop. the empty array as the 2nd argument here prevents this.

    return (
        <>
        <h1>FETCH HOOK</h1>
            {/* <ul>
                {data.hits.map(item => (
                    <li key={item.objectID}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul> */}
        </>
    )
}

export default FetchHook;