import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './NewsItem.css';

import ReadButton from "../read-button/ReadButton";
import Img from "../img/Img";
import DateComp from "../date/DateComp";
import Author from "../author/Author";
import Row from "../row/Row";


const NewsItem = ({article: {title, description, url, urlToImage, publishedAt, author, source}, className}) => {
    const classes = classNames(
        className,
        'article',
    );

    return(
        <article className={classes}>
            <Row>
                <header className="articleTitle col-12">
                    {title}
                </header>
            </Row>

            <Row className="articleContent">
                <Img className="col-12 col-md-4 col-lg-3"
                     urlToImage={urlToImage}/>
                <div className="contentWrapper col-12 col-md-8 col-lg-9">
                    <div className="description">{description}</div>
                    <div className="lowerContent">
                        <ReadButton url={url}>
                            read article
                        </ReadButton>
                        <div className="info">
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