import React from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';

const SearchForm = ({value, handleInputChange, handleBtnClick, handleEnterPress}) => (
    <form>
        <input placeholder="Search news"
               value={value}
               onChange={handleInputChange}
        />
        <button onClick={handleBtnClick}>OK</button>
    </form>
);

SearchForm.propTypes = {
    value: PropTypes.string
};

SearchForm.defaultProps = {
    value: ''
};

export default SearchForm;