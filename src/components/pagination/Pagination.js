import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

import styles from './Pagination.module.css';

import PaginationItem from '../pagination-item/PaginationItem';


const Pagination = ({page, lastPage, handlePageChange, className}) => {
    const classes = classNames(
        className,
        styles.pagination
    );

    let items = Array.from(new Array(lastPage).keys());

    return (
        <div className={classes}>
            {items.map((pageNumber) => (
                <PaginationItem pageNumber={pageNumber + 1}
                                page={page}
                                handlePageChange={handlePageChange}
                                key={pageNumber}/>
            ))}
        </div>
    )
};


Pagination.propTypes = {
    page: PropTypes.number,
    lastPage: PropTypes.number,
    handlePageChange: PropTypes.func,
    className: PropTypes.string
};

Pagination.defaultProps = {
    page: 1,
    lastPage: 1,
    handlePageChange: () => {},
    className: ''
};

export default Pagination;