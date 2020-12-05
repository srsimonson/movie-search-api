import React, { Component } from 'react';

class SearchList extends Component {

    state = {
        id: null
    }

    render() {
        if (typeof this.props.searchResults !== 'undefined') {
            console.log('SearchList.js searchResults: ', this.props.searchResults)
            
            return (
                
                <div>
                    <h4>Movies:</h4>
                    {/* <p>{JSON.stringify([this.props.searchResults])}</p> */}
                    {this.props.searchResults.map((item) => {
                        return <dl className="search-list" key={item.id}>
                             <dt>{item.id}: id.</dt>
                             <dd>{item.title}</dd>
                        </dl>
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