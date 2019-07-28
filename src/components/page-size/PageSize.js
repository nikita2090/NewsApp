import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './PageSize.module.css';

import Select from "../select/Select";

import pageSizes from '../../sources/pageSizes';


const PageSize = ({selectedPageSize, handleSelectChange, className}) => {
    const {wrap, select} = styles;
    const classes = classNames(
        wrap,
        className
    );

    return (
        <div className={classes}>
            <div>News per page:</div>
            <Select name='pageSize'
                    className={select}
                    arr={pageSizes}
                    selected={selectedPageSize}
                    handleSelectChange={handleSelectChange}/>
        </div>
    );
};


PageSize.propTypes = {
    selectedPageSize: PropTypes.number,
    handleSelectChange: PropTypes.func,
    className: PropTypes.string,
};

PageSize.defaultProps = {
    selectedPageSize: 10,
    handleSelectChange: () => {
    },
    className: ''
};

export default PageSize;