import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './NewsItem.module.css';

import ReadButton from "../read-button/ReadButton";
import Img from "../img/Img";
import DateComp from "../date/DateComp";
import Author from "../author/Author";
import Row from "../row/Row";


const NewsItem = ({article: {title, description, url, urlToImage, publishedAt, author, source}, className}) => {
    const {article: articleStyle, articleTitle, contentWrapper,
        articleContent, lowerContent, info} = styles;

    const articleSt = classNames(className, articleStyle);
    const headerSt = classNames(articleTitle, 'col-12');
    const imgSt = 'col-12 col-md-4 col-lg-3';
    const contentWrapSt = classNames(contentWrapper, 'col-12 col-md-8 col-lg-9');


    return (
        <article className={articleSt}>
            <Row>
                <header className={headerSt}>
                    {title}
                </header>
            </Row>

            <Row className={articleContent}>
                <Img className={imgSt}
                     urlToImage={urlToImage}/>
                <div className={contentWrapSt}>
                    <div className="description">{description}</div>
                    <div className={lowerContent}>
                        <ReadButton url={url}>
                            read article
                        </ReadButton>
                        <div className={info}>
                            <DateComp date={publishedAt}/>
                            <span>|</span>
                            <Author author={author}
                                    source={source.name}/>
                        </div>
                    </div>
                </div>
            </Row>
        </article>
    )
};


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