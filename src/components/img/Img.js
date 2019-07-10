import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Img.css';


const Img = ({urlToImage, className}) => {
    const classes = classNames(
        className,
        'imgWrapper'
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