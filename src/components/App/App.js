import React, { Component } from 'react';
// import logo from '../../logo.svg';
import './App.css';
import FetchHook from '../../components/Search/FetchHook';
import MovieList from '../../components/Search/MovieList';
import MovieSearch from '../../components/Search/MovieSearch';
import Search from '../../components/Search/Search';
import Thumbs from '../../components/Search/Thumbs';

class App extends Component {
  render() {
  return (
    <>
    {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
    {/* <FetchHook/> */}
    {/* <MovieSearch /> */}
    <MovieList/>
    <Thumbs/>
    {/* <Search/> */}
    </>
  );}
}

export default App;
