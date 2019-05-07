import React from 'react';
import PropTypes from 'prop-types';

import './NewsItem.css';
import ReadButton from "../read-button/ReadButton";
import Img from "../img/Img";
import DateComp from "../date/DateComp";
import Author from "../author/Author";


const NewsItem = ({article: {title, description, url, urlToImage, publishedAt, author, source}}) => (
    <article className="article">
        <header className="articleTitle">
            {title}
        </header>

        <div className="articleContent">
            <Img urlToImage={urlToImage}/>
            <div className="contentWrapper">
                <div className="description">{description}</div>
                <div>
                    <ReadButton url={url}>
                        read article
                    </ReadButton>
                    <DateComp date={publishedAt}/>
                    <span>|</span>
                    <Author author={author}
                            source={source.name}/>
                </div>
            </div>
        </div>
    </article>
);


NewsItem.propTypes = {
    article: PropTypes.object
};

NewsItem.defaultProps = {
    news: []
};

export default NewsItem;