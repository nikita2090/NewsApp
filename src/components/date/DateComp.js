import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import formatDate from '../../functions/formatDate';


const StyledDateComp = styled.span`
    margin-right: 20px;

    font-size: 15px;
    font-style: italic;
`;


const DateComp = ({date}) => {
    return (
        <StyledDateComp>
            {formatDate(date)}
        </StyledDateComp>
    )
};


DateComp.propTypes = {
    date: PropTypes.string,
};

DateComp.defaultProps = {
    date: ''
};

export default DateComp;