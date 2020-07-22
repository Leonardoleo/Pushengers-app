import React from 'react';
import './Business.css';
import PropTypes from "prop-types";

const googleMapsURL = "https://www.google.com/maps/search/?api=1&query=";

/**
 * Renders individual businesses as tiles
 */
class Business extends React.Component {
    render() {
        const business = this.props.business;
        return ( <
            div className = "Business" >
            <
            div className = "image-container" >
            <
            a href = { business.url }
            target = "_blank"
            rel = "noopener noreferrer" >
            <
            img src = { business.imageSrc }
            alt = '' / >
            <
            /a> <
            /div>  <
            h2 > { business.name } < /h2>  <
            div className = "Business-information" >
            <
            div className = "Business-address" >
            <
            a href = {
                googleMapsURL +
                business.name.split(" ").join("+") +
                "+" +
                business.location.city.split(" ").join("+")
            }
            target = "_blank"
            rel = "noopener noreferrer" >

            <
            p > { business.location.address } < /p>  <
            p > { business.location.city } < /p>  <
            p > { business.location.state } { business.location.zipCode } <
            /p>  <
            /a> <
            /div> 

            <
            div className = "Business-reviews" >
            <
            h3 > { business.category } < /h3>  <
            h3 className = "rating" > { business.rating }
            stars < /h3>  <
            p > { business.reviewCount }
            reviews < /p>  <
            /div>  <
            /div>  <
            /div>
        );
    }
}

Business.propTypes = {
    business: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        imageSrc: PropTypes.string,
        location: PropTypes.shape({
            address: PropTypes.string,
            city: PropTypes.string,
            state: PropTypes.string,
            zipCode: PropTypes.string
        }),
        category: PropTypes.string,
        rating: PropTypes.number,
        reviewCount: PropTypes.number,
        url: PropTypes.string
    }).isRequired
};

export default Business;