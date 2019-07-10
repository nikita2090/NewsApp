import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Title.css';

import Row from "../row/Row";


const Title = ({header, className}) => {
    const classes = classNames(
        'appTitlesWrap',
        className
    );

    return(
        <Row>
            <header className={classes}>
                <h1 className="appTitle">{header}</h1>
                <h2 className="appSubtitle">Powered by <a href="https://newsapi.org">News API</a></h2>
            </header>
        </Row>
    )

};


Title.propTypes = {
    header: PropTypes.string,
    className: PropTypes.string
};

Title.defaultProps = {
    header: 'Simple header',
    className: ''
};

export default Title;