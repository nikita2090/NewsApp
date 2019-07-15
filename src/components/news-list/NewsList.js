import React from 'react';
import PropTypes from 'prop-types';

import NewsItem from '../news-item/NewsItem';

import './NewsList.css';

const NewsList = ({news, className}) => {
    let content;
    if (news.length) {
        content =
            <main className='row'>
                {news.map(article => (
                    <NewsItem article={article}
                              className={className}
                              key={article.title}/>
                ))}
            </main>
    } else {
        content = <div className="notFound">Nothing found</div>
    }
    return content;
};


NewsList.propTypes = {
    news: PropTypes.array,
    className: PropTypes.string
};

NewsList.defaultProps = {
    news: [],
    className: ''
};

export default NewsList;