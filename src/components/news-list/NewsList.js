import React from 'react';
import PropTypes from 'prop-types';

import NewsItem from '../news-item/NewsItem';


const NewsList = ({news, className}) => (
    <main className='row'>
        {news.map( article => (
            <NewsItem article={article}
                      className={className}
                      key={article.title}/>
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