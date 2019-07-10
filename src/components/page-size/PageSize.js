import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './PageSize.css';

import Select from "../select/Select";

import pageSizes from '../../sources/pageSizes';


const PageSize = ({selectedPageSize, handleSelectChange, className}) => {
    const classes = classNames(
        'pageSizesSelectWrapper',
        className
    );

    return(
        <div className={classes}>
            <div>News per page:</div>
            <Select name='pageSize'
                    className="pageSizes"
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
    handleSelectChange: () => {},
    className: ''
};

export default PageSize;