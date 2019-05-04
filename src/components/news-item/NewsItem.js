import React from 'react';
import PropTypes from 'prop-types';

import './NewsItem.css';

import ReadButton from "../read-button/ReadButton";
import Img from "../img/Img";


const NewsItem = ({article: {title, description, url, urlToImage}}) => (
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