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