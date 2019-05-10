import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './SearchForm.css';


const SearchForm = ({value, handleInputChange, handleBtnClick, className}) => {
    const classes = classNames(
        'searchForm',
        className
    );

    return(
        <form className={classes}>
            <input className="searchInput"
                   placeholder="Search..."
                   value={value}
                   onChange={handleInputChange}/>
            <button className="searchButton"
                    onClick={handleBtnClick}>OK</button>
        </form>
    );
};


SearchForm.propTypes = {
    value: PropTypes.string,
    handleInputChange: PropTypes.func,
    handleBtnClick: PropTypes.func,
    className: PropTypes.string,
};

SearchForm.defaultProps = {
    value: '',
    handleInputChange:()=>{},
    handleBtnClick: ()=>{}
};

export default SearchForm;