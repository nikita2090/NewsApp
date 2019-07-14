import React, {memo} from 'react';
import PropTypes from 'prop-types';

import './SearchForm.css';


const SearchForm = ({value, handleInputChange, handleSearchBtnClick}) => (
        <fieldset className='col-12 col-lg-8 col-xl-9'>
            <legend className="legend">Search in ALL news:</legend>
            <div className="searchForm">
                <input className="searchInput"
                       placeholder="Search..."
                       value={value}
                       onChange={handleInputChange}/>
                <button className="searchButton"
                        onClick={handleSearchBtnClick}>OK
                </button>
            </div>
        </fieldset>
);


SearchForm.propTypes = {
    value: PropTypes.string,
    handleInputChange: PropTypes.func,
    handleBtnClick: PropTypes.func,
};

SearchForm.defaultProps = {
    value: '',
    handleInputChange:()=>{},
    handleBtnClick: ()=>{},
};

export default memo(SearchForm);