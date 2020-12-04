import React, { Component } from 'react';
// import SearchForm from './SearchForm' 

class SearchList extends Component {
    render() {
        if (typeof this.props.searchResults !== 'undefined') {
            return (
                <div>
                    <h4>Movies:</h4>
                    {/* <p>{JSON.stringify([this.props.searchResults])}</p> */}
                    {this.props.searchResults.map((item) => {
                        return <div className="search-list" key={item.id}>
                             <li>{item.title}</li>
                        </div>
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