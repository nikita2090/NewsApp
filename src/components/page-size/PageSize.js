import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './PageSize.css';

import Select from "../select/Select";
import Row from "../row/Row";

import pageSizes from '../../sources/pageSizes';


const PageSize = ({selectedPageSize, handleSelectChange, className}) => {
    const classes = classNames(
        'pageSizesSelectWrapper',
        className
    );

    return(
        <Row>
            <div className={classes}>
                <span>News per page: </span>
                <Select name='pageSize'
                        style={{width: '50px'}}
                        arr={pageSizes}
                        selected={selectedPageSize}
                        handleSelectChange={handleSelectChange}/>
            </div>
        </Row>
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