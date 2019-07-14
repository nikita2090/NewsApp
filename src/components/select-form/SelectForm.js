import React, {memo} from 'react';
import PropTypes from 'prop-types';

import './SelectForm.css';

import Select from "../select/Select";

import countries from '../../sources/countries';
import categories from '../../sources/categories';


const SelectForm = ({selectedCountry, selectedCategory, handleSelectChange}) => (
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
);


SelectForm.propTypes = {
    selectedCountry: PropTypes.string,
    selectedCategory: PropTypes.string,
    handleSelectChange: PropTypes.func,
};

SelectForm.defaultProps = {
    selectedCountry: 'USA',
    selectedCategory: 'general',
    handleSelectChange: () => {},
};

export default memo(SelectForm);