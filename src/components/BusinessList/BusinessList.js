import React from 'react';
import './BusinessList.css';
import PropTypes from "prop-types";

import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        return ( <
            div className = "BusinessList" > {
                this.props.businesses.map(item => {
                    return <Business key = { item.id }
                    business = { item }

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