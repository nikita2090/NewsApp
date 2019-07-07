import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './SelectForm.css';
import Select from "../select/Select";
import countries from '../../sources/countries';
import categories from '../../sources/categories';


const SearchForm = ({selectedCountry, selectedCategory, handleSelectChange, className}) => {
    const classes = classNames(
        'selectForm',
        className
    );

    return(
        <form className={classes}>
            <legend className="legendSelect">Search in HOT news:</legend>
            <Select name='country'
                    arr={countries}
                    selected={selectedCountry}
                    handleSelectChange={handleSelectChange}/>

            <Select name='category'
                    arr={categories}
                    selected={selectedCategory}
                    handleSelectChange={handleSelectChange}/>
        </form>
    );
};


SearchForm.propTypes = {
    selectedCountry: PropTypes.string,
    selectedCategory: PropTypes.string,
    handleSelectChange: PropTypes.func,
    className: PropTypes.string,
};

SearchForm.defaultProps = {
    selectedCountry: 'USA',
    selectedCategory: 'general',
    handleSelectChange: () => {},
    className: '',
};

export default SearchForm;