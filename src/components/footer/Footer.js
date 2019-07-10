import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Footer.css';

import Row from '../row/Row';


const Footer = ({className}) => {
    const classes = classNames(
        'footer',
        className
    );
    return(
        <Row>
            <i className={classes}>© nikita2090, 2019</i>
        </Row>
    )
};


Footer.propTypes = {
    className: PropTypes.string
};

Footer.defaultProps = {
    className: ''
};

export default Footer;