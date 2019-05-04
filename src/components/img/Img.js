import React from 'react';
import PropTypes from 'prop-types';
import './Img.css';

const Img = ({urlToImage, width}) => (
    <div className="imgWrapper">
        <img src={urlToImage}
             width={width}
             alt=""/>
    </div>
);

Img.propTypes = {
    urlToImage: PropTypes.string,
    width: PropTypes.string
};

Img.defaultProps = {
    urlToImage: '',
    width: '200'
};

export default Img;