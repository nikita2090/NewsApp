import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './PaginationForm.css';
import Select from "../select/Select";
import pageSizes from '../../sources/pageSizes';


const PaginationForm = ({selectedPageSize, handleSelectChange, className, handlePageChange, page, lastPage}) => {
    const classes = classNames(
        'paginationForm',
        'row',
        className
    );

    return(
        <form className={classes}>
            <button name="prev"
                    className="arrowBtn col-2 col-md-1"
                    onClick={handlePageChange}
                    disabled={page === 1}>
                {'<<'}
            </button>

            <div className="pageSizesSelectWrapper col-8 col-md-6 col-lg-4 col-xl-3">
                <span>News per page: </span>
                <Select name='pageSize'
                        style={{width: '50px'}}
                        arr={pageSizes}
                        selected={selectedPageSize}
                        handleSelectChange={handleSelectChange}/>
            </div>

            <button name="next"
                    className="arrowBtn col-2 col-md-1"
                    onClick={handlePageChange}
                    disabled={page === lastPage}>
                {'>>'}
            </button>
        </form>
    );
};


PaginationForm.propTypes = {
    selectedPageSize: PropTypes.number,
    handleSelectChange: PropTypes.func,
    className: PropTypes.string,
    handlePageChange: PropTypes.func,
    page: PropTypes.number,
    lastPage: PropTypes.number,
};

PaginationForm.defaultProps = {
    selectedPageSize: 10,
    handleSelectChange: () => {},
    className: '',
    handlePageChange: () => {},
    page: 1,
    lastPage: 1,
};

export default PaginationForm;