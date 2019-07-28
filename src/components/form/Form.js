import React, {memo} from 'react';
import PropTypes from 'prop-types';

import SelectForm from "../select-form/SelectForm";
import SearchForm from "../search-form/SearchForm";


const Form = ({selectedCountry, selectedCategory, handleSelectChange,
                  value, handleInputChange, handleSearchBtnClick}) => (
    <form className="row">
        <SelectForm selectedCountry={selectedCountry}
                    selectedCategory={selectedCategory}
                    handleSelectChange={handleSelectChange}/>

        <SearchForm value={value}
                    handleInputChange={handleInputChange}
                    handleSearchBtnClick={handleSearchBtnClick}/>
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

export default memo(Form);