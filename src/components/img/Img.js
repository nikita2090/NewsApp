import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const StyledImgWrap = styled.div`
    padding-left: 0;
    line-height: 0;
    font-size:0;
    
    & img {
        vertical-align: bottom;
    }
`;


const Img = ({urlToImage, className}) => {
    return (
        <StyledImgWrap className={className}>
            <img src={urlToImage ? urlToImage : './News.png'}
                 width='100%'
                 alt=""/>
        </StyledImgWrap>
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