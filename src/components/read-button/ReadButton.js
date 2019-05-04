import React from 'react';
import PropTypes from 'prop-types';
import './ReadButton.css';

const ReadButton = ({children, url}) => (
    <a className="readButton"
       href={url}
       target="_blanc">{children}
    </a>

);

ReadButton.propTypes = {
    children: PropTypes.string,
    url: PropTypes.string
};

ReadButton.defaultProps = {
    children: 'Read',
    url: ''
};

export default ReadButton;