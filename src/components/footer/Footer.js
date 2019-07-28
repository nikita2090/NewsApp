import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Footer.module.css';


const Footer = ({className}) => {
    const classes = classNames(
        styles.footer,
        className
    );
    return(
        <footer className="row">
            <i className={classes}>© nikita2090, 2019</i>
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