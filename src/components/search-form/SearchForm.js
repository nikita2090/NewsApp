import React from 'react';
import PropTypes from 'prop-types';

import './SearchForm.css';


const SearchForm = ({value, handleInputChange, handleBtnClick}) => (
    <form className="searchForm">
        <input className="searchInput"
               placeholder="Search news"
               value={value}
               onChange={handleInputChange}

        />
        <button className="searchButton"
                onClick={handleBtnClick}>OK</button>
    </form>
);


SearchForm.propTypes = {
    value: PropTypes.string,
    handleInputChange: PropTypes.func,
    handleBtnClick: PropTypes.func
};

SearchForm.defaultProps = {
    value: '',
    handleInputChange:()=>{},
    handleBtnClick: ()=>{}
};

export default SearchForm;