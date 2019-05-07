import React from 'react';
import PropTypes from 'prop-types';

import './Select.css';


const Select = ({arr, handleSelectChange, name, selected}) => {
    return (
        <select className="select"
                onChange={handleSelectChange}
                name={name}
                value={selected}>
                    {arr.map( ({value, label}) => (
                        <option key={value + label} value={value}>
                            {label}
                        </option>
                    ))}
        </select>
    )
};


Select.propTypes = {
    arr: PropTypes.array,
    name: PropTypes.string,
    handleSelectChange: PropTypes.func,

};


Select.defaultProps = {
    arr: PropTypes.array,
    name: PropTypes.string,
    handleSelectChange: PropTypes.func,
};

export default Select;