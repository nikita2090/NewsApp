import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

import './Pagination.css';
import PaginationItem from '../pagination-item/PaginationItem';


const Pagination = ({page, lastPage, handlePageChange, className}) => {
    const classes = classNames(
        className,
        'pagination'
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
    lastPage: PropTypes.number
};

Pagination.defaultProps = {
    lastPage: 1
};

export default Pagination;