import React, {memo} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './SelectForm.module.css';

import Select from "../select/Select";

import countries from '../../sources/countries';
import categories from '../../sources/categories';


const SelectForm = ({selectedCountry, selectedCategory, handleSelectChange}) => {
    const {legend, form} = styles;
    const classes = classNames(form, 'col-12 col-lg-4 col-xl-3');
    return(
        <fieldset className={classes}>
            <legend className={legend}>Search in HOT news:</legend>
            <Select name='country'
                    arr={countries}
                    selected={selectedCountry}
                    handleSelectChange={handleSelectChange}/>

            <Select name='category'
                    arr={categories}
                    selected={selectedCategory}
                    handleSelectChange={handleSelectChange}/>
        </fieldset>
    )
};


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