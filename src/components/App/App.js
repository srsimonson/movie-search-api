import React, { Component } from 'react';
// import logo from '../../logo.svg';
import './App.css';
import FetchHook from '../Tests/FetchHook';
import MovieList from '../Tests/MovieList';
import MovieSearch from '../Tests/MovieSearch';
import SearchHook from '../Tests/SearchHook';
import Thumbs from '../Tests/Thumbs';
import SearchForm from '../Search/SearchForm';
import SearchList from '../Search/SearchList';
import { HashRouter as Router, Route, Link} from 'react-router-dom';

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
    <SearchForm />
    {/* <SearchList /> */}
    {/* <FetchHook /> */}
    {/* <MovieSearch /> */}
    {/* <MovieList /> */}
    {/* <Thumbs /> */}
    {/* <SearchHook /> */}
    </>
  );}
}

export default App;
