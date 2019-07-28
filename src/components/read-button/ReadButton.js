import React from 'react';
import PropTypes from 'prop-types';

import styles from './ReadButton.module.css';


const ReadButton = ({children, url}) => (
    <a className={styles.btn}
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