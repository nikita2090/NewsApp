import React from 'react';
import PropTypes from 'prop-types';

import './Author.css';


const Author = ({author, source}) => {
    let content = author;
    if (!content) content = source;

    if (content.length > 20) {
        content = content.slice(0, 20) + '...';
    }
    return (
        <span className="author">
            {content}
        </span>
    );
};


Author.propTypes = {
    date: PropTypes.string,
};

Author.defaultProps = {
    date: ''
};

export default Author;