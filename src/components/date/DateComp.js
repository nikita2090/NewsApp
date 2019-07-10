import React from 'react';
import PropTypes from 'prop-types';

import './DateComp.css';

import  formatDate from '../../functions/formatDate';


const DateComp = ({date}) => {
    return(
        <span className="date">
            {formatDate(date)}
        </span>
    )
};


DateComp.propTypes = {
    date: PropTypes.string,
};

DateComp.defaultProps = {
   date: ''
};

export default DateComp;