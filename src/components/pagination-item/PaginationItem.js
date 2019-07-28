import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

import styles from './PaginationItem.module.css';


const PaginationItem = ({pageNumber, page, handlePageChange}) => {
    const {item, itemSelected} = styles;
    const classes = classNames(
        item,
        {[itemSelected]: page === pageNumber}
    );

    return (
        <button name={pageNumber}
                className={classes}
                onClick={handlePageChange}>
            {pageNumber}
        </button>
    );
};


PaginationItem.propTypes = {
    pageNumber: PropTypes.number,
    page: PropTypes.number,
    handlePageChange: PropTypes.func,
};

PaginationItem.defaultProps = {
    pageNumber: 1,
    page: 1,
    handlePageChange: () => {},
};

export default PaginationItem;