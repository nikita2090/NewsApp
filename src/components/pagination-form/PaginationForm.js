import React, {memo} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './PaginationForm.css';

import Row from "../row/Row";
import Pagination from "../pagination/Pagination";


const PaginationForm = ({handlePageChange, page, lastPage, className}) => {
    const classes = classNames(
        'paginationForm',
        'row',
        className
    );

    return (
        <Row>
            <form className={classes}>
                <button name="prev"
                        className="arrowBtn col-1"
                        onClick={handlePageChange}
                        disabled={page === 1}>
                    {'<'}
                </button>

                <Pagination className="col-22 col-md-24"
                            handlePageChange={handlePageChange}
                            page={page}
                            lastPage={lastPage}/>

                <button name="next"
                        className="arrowBtn col-1"
                        onClick={handlePageChange}
                        disabled={page === lastPage}>
                    {'>'}
                </button>
            </form>
        </Row>
    );
};


PaginationForm.propTypes = {
    className: PropTypes.string,
    handlePageChange: PropTypes.func,
    page: PropTypes.number,
    lastPage: PropTypes.number,
};

PaginationForm.defaultProps = {
    className: '',
    handlePageChange: () => {},
    page: 1,
    lastPage: 1,
};

export default memo(PaginationForm);