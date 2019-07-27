import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ReadButton from "../read-button/ReadButton";
import Img from "../img/Img";
import DateComp from "../date/DateComp";
import Author from "../author/Author";
import Row from "../row/Row";


const StyledArticle = styled.article`
    margin-top: 20px;
`;

const StyledTitle = styled.header`
    margin-left: 0;

    font-size: 20px;
    text-decoration: underline;
`;

const StyledRow = styled(Row)`
    display: flex;

    margin-top: 10px;
    margin-left: 0;
`;

const StyledContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 0;
`;

const LowerConentSt = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
        
    @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
    }
`;

const ArticleFooterSt = styled.footer`
    display: flex;
    justify-content: center;
    
    @media screen and (min-width: 768px) {
        margin-left: 20px;
    }
`;


const NewsItem = ({article: {title, description, url, urlToImage, publishedAt, author, source}, className}) => (
    <StyledArticle className={className}>
        <Row>
            <StyledTitle className="col-12">
                {title}
            </StyledTitle>
        </Row>

        <StyledRow>
            <Img className="col-12 col-md-4 col-lg-3"
                 urlToImage={urlToImage}/>
            <StyledContentWrapper className="col-12 col-md-8 col-lg-9">
                <div>{description}</div>
                <LowerConentSt>
                    <ReadButton url={url}>
                        read article
                    </ReadButton>
                    <ArticleFooterSt>
                        <DateComp date={publishedAt}/>
                        <span>|</span>
                        <Author author={author}
                                source={source.name}/>
                    </ArticleFooterSt>
                </LowerConentSt>
            </StyledContentWrapper>
        </StyledRow>
    </StyledArticle>
);


NewsItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    urlToImage: PropTypes.string,
    publishedAt: PropTypes.string,
    author: PropTypes.string,
    source: PropTypes.string,
    className: PropTypes.string
};

NewsItem.defaultProps = {
    title: '',
    description: '',
    url: '',
    urlToImage: '',
    publishedAt: '',
    author: '',
    source: '',
    className: ''
};

export default NewsItem;