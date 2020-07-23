import PropTypes from "prop-types";
import React from "react";
import "./SearchError.css";

/**
 * Render Search Errors as a message
 * @todo add user friendly error messages based on error codes
 */
class SearchError extends React.Component {
    parseErrors(error) {
        switch (error.code) {
            case "VALIDATION_ERROR":
                return `${error.field} ${error.description}`;

            default:
                return error.description;
        }
    }

    render() {
        return ( <
            div className = "Error" >
            <
            p > { this.parseErrors(this.props.error) } < /p>   <
            /div>
        );
    }
}

SearchError.propTypes = {
    error: PropTypes.object
};

export default SearchError;