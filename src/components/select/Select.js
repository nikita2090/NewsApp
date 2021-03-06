import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Select.module.css';


const Select = ({arr, handleSelectChange, name, selected, className}) => {
    const classes = classNames(
        className,
        styles.select
    );

    return (
        <select className={classes}
                onChange={handleSelectChange}
                name={name}
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