import React from 'react';
import './BusinessList.css';
import PropTypes from "prop-types";

import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        return ( <
            div className = "BusinessList" > {
                this.props.businesses.map(business => {
                    return <Business business = { business }
                    key = { business.id }
                    />
                })
            } <
            /div>
        );
    }
}

BusinessList.propTypes = {
    businessList: PropTypes.array.isRequired
};

export default BusinessList;