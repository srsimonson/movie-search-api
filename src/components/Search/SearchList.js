import React, { Component } from 'react';
import SearchForm from './SearchForm' 

class SearchList extends Component {
    render() {
        return (
            <div>
                <h1>SearchList.js</h1>
                {this.props.searchResults.map((item) => {
                    return <div className="search-list" key={item.id}>
                        <SearchForm
                            key={item.id}
                            item={item} 
                            getResults={this.props.getResults}
                        /> 
                    </div>
                })}
            </div>
        )
    }
}

export default SearchList;