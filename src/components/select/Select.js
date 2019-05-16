import React from 'react';
import PropTypes from 'prop-types';

import './Select.css';


const Select = ({arr, handleSelectChange, name, selected, style}) => {
    return (
        <select className="select"
                onChange={handleSelectChange}
                name={name}
                style={style}
                value={selected}>
            {arr.map(({value, label}) => (
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
    selected: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    style: PropTypes.object,
};


Select.defaultProps = {
    arr: PropTypes.array,
    name: PropTypes.string,
    handleSelectChange: PropTypes.func,
    selected: PropTypes.string,
    style: {}
};

export default Select;