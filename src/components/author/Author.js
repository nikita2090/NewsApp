import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const StyledAuthor = styled.span`
        margin-left: 20px;

        font-size: 15px;
        font-style: italic;
`;


const Author = ({author, source}) => {
    let content = author;
    if (!content) content = source;

    if (content.length > 20) {
        content = content.slice(0, 20) + '...';
    }

    return (
        <StyledAuthor>
            {content}
        </StyledAuthor>
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