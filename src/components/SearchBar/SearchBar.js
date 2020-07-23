import React from 'react';
import './SearchBar.css';
import PropTypes from "prop-types";
class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };

        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count',
            'Distance From': 'distance'
        };

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSortByChange = this.handleSortByChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    /**
     * Sets the selected sort option class to 'active' for styling
     * 
     * @param {string} sortByOption
     * @returns {string} 'active' 
     */

    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return 'active';
        } else {
            return '';
        }
    }

    /**
     * Executes a Yelp search utilising the following state values
     *  -this.state.term
     * -this.state.location
     * -this.state.sortBy
     */

    searchYelp() {
        this.props.searchYelp(
            this.state.term,
            this.state.location,
            this.state.sortBy
        );
    }

    /**
     * Modifies the sortBy state of the SearchBar to the value of sortByOption
     * 
     * @param {string} sortByOption 
     */

    handleSortByChange(sortByOption) {
        this.setState({ sortBy: sortByOption },
            () => {
                if (this.state.term && this.state.location) {
                    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
                }
            });

    }

    /**
     * Modifies the 'term' state of the SearchBar to the event value
     * 
     * @param {Event} event 
     */

    handleTermChange(event) {
        this.setState({ term: event.target.value });
    }

    /**
     * Modifies the 'location' state of the SearchBar to the event value
     * 
     * @param {Event} event 
     */
    handleLocationChange(event) {
        this.setState({ location: event.target.value });
    }

    /**
     * Executes a Yelp search on Button press
     * 
     * @param {Event} event 
     */

    handleSearch(event) {
        this.props.searchYelp();
        event.preventDefault();
    }

    /**
     * Executes a Yelp search on Enter Key press
     * 
     * @param {Event} event 
     */

    handleKeyPress(event) {
        if (event.charCode === 13) {
            this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
            event.preventDefault();
        }
    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            const sortByOptionValue = this.sortByOptions[sortByOption];

            return ( <
                li key = { sortByOptionValue }
                className = { this.getSortByClass(sortByOptionValue) }
                onClick = { this.handleSortByChange.bind(this, sortByOptionValue) } > { sortByOption } <
                /li>
            );
        });
    }

    render() {
        return ( <
            div className = "SearchBar" >
            <
            div className = "SearchBar-sort-options" >
            <
            ul > { this.renderSortByOptions() } <
            /ul>      <
            /div>

            <
            div className = "SearchBar-fields" >

            <
            input onKeyPress = { this.handleKeyPress }
            onChange = { this.handleTermChange }
            placeholder = "Search Businesses" / >

            <
            input onKeyPress = { this.handleKeyPress }
            onChange = { this.handleLocationChange }
            placeholder = "Where?" / >

            <
            /div>      <
            div className = "SearchBar-submit"
            onClick = { this.handleSearch } >
            <
            button > Let 's Go!</button>    <
            /div>  <
            /div>
        );
    }
}

SearchBar.propTypes = {
    searchYelp: PropTypes.func.isRequired
};

export default SearchBar;