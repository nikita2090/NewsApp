import React from 'react';
import PropTypes from 'prop-types';

import './Form.css';

import Select from "../select/Select";

import countries from '../../sources/countries';
import categories from '../../sources/categories';


const Form = ({selectedCountry, selectedCategory, handleSelectChange,
                  value, handleInputChange, handleSearchBtnClick}) => (
    <form className="row">
        <fieldset className='selectForm col-12 col-lg-4 col-xl-3'>
            <legend className="legend">Search in HOT news:</legend>
            <Select name='country'
                    arr={countries}
                    selected={selectedCountry}
                    handleSelectChange={handleSelectChange}/>

            <Select name='category'
                    arr={categories}
                    selected={selectedCategory}
                    handleSelectChange={handleSelectChange}/>
        </fieldset>

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
    </form>
);


Form.propTypes = {
    selectedCountry: PropTypes.string,
    selectedCategory: PropTypes.string,
    handleSelectChange: PropTypes.func,

    value: PropTypes.string,
    handleInputChange: PropTypes.func,
    handleBtnClick: PropTypes.func,
};

Form.defaultProps = {
    selectedCountry: 'USA',
    selectedCategory: 'general',
    handleSelectChange: () => {},

    value: '',
    handleInputChange:()=>{},
    handleBtnClick: ()=>{},
};

export default Form;