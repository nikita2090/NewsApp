import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
/*import classNames from 'classnames';*/


const StyledI = styled.i`
    text-align: center;
`;


const Footer = ({className}) => {
    /*const classes = classNames(
        'footer',
        className
    );*/
    return (
        <footer className="row">
            <StyledI className={className}>© nikita2090, 2019</StyledI>
        </footer>
    )
};


Footer.propTypes = {
    className: PropTypes.string
};

Footer.defaultProps = {
    className: ''
};

export default Footer;