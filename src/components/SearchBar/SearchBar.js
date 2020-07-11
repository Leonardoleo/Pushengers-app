import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term, location, sortBy };

        renderSortByOptions() {

            this.sortByOptions = {
                'Best Match': 'best_match',
                'Highest Rated': 'rating',
                'Most Reviewed': 'review_count'
            };

            if (sortBy = sortByOption) {
                return 'active';
            } else {
                return ('');
            }
            return Object.keys(sortByOptions.this).map(sortByOption => {
                let sortByOptionValue = sortByOptions[sortByOption];
                return <li key = { sortByOptionValue } > { sortByOption } < /li>;
            });
        };
    }

    const getSortByClass = sortByOption;



    render() {
        return ( <
            div className = "SearchBar" >
            <
            div className = "SearchBar-sort-options" >
            <
            ul > { this.renderSortByOptions() } <
            /ul> < /
            div > <
            div className = "SearchBar-fields" >
            <
            input placeholder = "Search Businesses" / >
            <
            input placeholder = "Where?" / >
            <
            /div> <
            div className = "SearchBar-submit" >
            <
            a href = "www.#.com" > Let 's Go</a>  < /
            div > <
            /div>
        )
    }
}

export default SearchBar;