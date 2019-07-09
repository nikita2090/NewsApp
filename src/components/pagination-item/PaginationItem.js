import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

import './PaginationItem.css';


const PaginationItem = ({pageNumber, page, handlePageChange}) =>{
    const classes = classNames(
        'paginationItem',
        {itemSelected: page === pageNumber}
    );

    return(
        <button name={pageNumber}
                className={classes}
                onClick={handlePageChange}>
            {pageNumber}
        </button>
    );
};


PaginationItem.propTypes = {
    lastPage: PropTypes.number
};

PaginationItem.defaultProps = {
    lastPage: 1
};

export default PaginationItem;