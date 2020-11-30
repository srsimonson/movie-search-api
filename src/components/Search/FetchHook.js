// import React, { Fragment, useState, useEffect } from 'react';
// import axios from 'axios';

// function FetchHook() {
//     const [ data, setData ] = useState({ hits: [] });
//     const [ query, setQuery ] = useState('Pulp Fiction');
//     const [ search, setSearch ] = useState('Pulp Fiction');
//     const [ url, setUrl ] = useState(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/pulpfiction`)

//     useEffect(() => {
//         const fetchData = async () => {
//         const result = await axios({
//             "method":"GET",
//             "url": url,
//             "headers":{
//             "content-type":"application/octet-stream",
//             "x-rapidapi-host":"imdb-internet-movie-database-unofficial.p.rapidapi.com",
//             "x-rapidapi-key":`${process.env.REACT_APP_MOVIE_API_KEY}`,
//             "useQueryString":true
//             }
//             });
//         setData(result.data);
//         console.log('FH IMDB API result.data: ', result.data);
//         console.log('data.hits 1: ', data.hits);
        
//         };
//         fetchData();
//     }, [url] ); // <- useEffect will re-render each time state gets updated, causing an infinite loop. the empty array as the 2nd argument here prevents this. Change in 'url' fires the function on event target change.

//     return (
//         <>
//         <h1>***************FETCH HOOK.js**********</h1>
//         <Fragment>
//             <input
//                 type="text"
//                 value={query}
//                 onChange={event => setQuery(event.target.value)}
//             />
//             <button 
//                 type="button" 
//                 onClick={() => 
//                     setUrl(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${query}`)}>
//                 Search
//             </button>
//             {/* <ul>
//                 {data.hits.map(item => (
//                     <li key={item.objectID}>
//                         <a href={item.url}>{item.title}</a>
//                     </li>
//                 ))}
//             </ul> */}
//         </Fragment>
//         </>
//     )
// }

// export default FetchHook;