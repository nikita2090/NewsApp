import React from 'react';
import PropTypes from 'prop-types';

import './NewsList.css';
import NewsItem from '../news-item/NewsItem';


const NewsList = ({news}) => (
    <main>
        {news.map( article => (
            <NewsItem article={article}/>
        ))}
    </main>
);


NewsList.propTypes = {
    news: PropTypes.array
};

NewsList.defaultProps = {
    news: []
};

export default NewsList;