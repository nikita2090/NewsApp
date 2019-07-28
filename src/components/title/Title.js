import React, {memo} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Title.module.css';


const Title = ({header, className}) => {
    const {wrap, title, subtitle} = styles;
    const classes = classNames(
        wrap,
        className
    );

    return(
        <div className={classes}>
            <h1 className={title}>{header}</h1>
            <h2 className={subtitle}>Powered by <a href="https://newsapi.org">News API</a></h2>
        </div>
    )
};


Title.propTypes = {
    header: PropTypes.string,
    className: PropTypes.string
};

Title.defaultProps = {
    header: 'Simple header',
    className: ''
};

export default memo(Title);