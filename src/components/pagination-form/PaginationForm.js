import React, {memo} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './PaginationForm.module.css';

import Row from "../row/Row";
import Pagination from "../pagination/Pagination";


const PaginationForm = ({handlePageChange, page, lastPage, totalResults, className}) => {
    const {form, btn} = styles;
    const formSt = classNames(form, 'row', className);
    const btnsSt = classNames(btn, 'col-1');

    return (
        <Row>
            <form className={formSt}>
                <button name="prev"
                        className={btnsSt}
                        onClick={handlePageChange}
                        disabled={totalResults === 0 || page === 1}>
                    {'<'}
                </button>

                <Pagination className="col-22 col-md-24"
                            handlePageChange={handlePageChange}
                            page={page}
                            lastPage={lastPage}/>

                <button name="next"
                        className={btnsSt}
                        onClick={handlePageChange}
                        disabled={totalResults === 0 || page === lastPage}>
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
    handlePageChange: () => {
    },
    page: 1,
    lastPage: 1,
};

export default memo(PaginationForm);