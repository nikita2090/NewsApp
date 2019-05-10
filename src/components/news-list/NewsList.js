import React from 'react';
import PropTypes from 'prop-types';

import './NewsList.css';
import NewsItem from '../news-item/NewsItem';


const NewsList = ({news, className}) => (
    <main className={className}>
        {news.map( article => (
            <NewsItem article={article}
                      className="col-12"
                      key={article.publishedAt}/>
        ))}
    </main>
);


NewsList.propTypes = {
    news: PropTypes.array,
    className: PropTypes.string
};

NewsList.defaultProps = {
    news: [],
    className: ''
};

export default NewsList;