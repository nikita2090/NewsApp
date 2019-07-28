import React from 'react';
import PropTypes from 'prop-types';

import styles from './Author.module.css';


const Author = ({author, source}) => {
    let content = author;
    if (!content) content = source;

    if (content.length > 20) {
        content = content.slice(0, 20) + '...';
    }
    return (
        <span className={styles.author}>
            {content}
        </span>
    );
};


Author.propTypes = {
    author: PropTypes.string,
    source: PropTypes.string,
};

Author.defaultProps = {
    author: '',
    source: '',
};

export default Author;