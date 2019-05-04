import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

const Title = ({header}) => (
    <header className="appTitlesWrap">
        <h1 className="appTitle">{header}</h1>
        <h2 className="appSubtitle">Powered by <a href="https://newsapi.org">News API</a></h2>
    </header>
);

Title.propTypes = {
    header: PropTypes.string
};

Title.defaultProps = {
    header: 'Simple header'
};

export default Title;