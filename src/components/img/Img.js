import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Img.module.css';


const Img = ({urlToImage, className}) => {
    const classes = classNames(
        className,
        styles.wrap
    );

    return (
        <div className={classes}>
            <img src={urlToImage ? urlToImage : './News.png'}
                 width='100%'
                 alt=""/>
        </div>
    )
};


Img.propTypes = {
    urlToImage: PropTypes.string,
    className: PropTypes.string
};

Img.defaultProps = {
    urlToImage: '',
    className: ''
};

export default Img;