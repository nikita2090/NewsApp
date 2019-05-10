import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Row = ({children, className}) => {
    const classes = classNames(
        className,
        'row'
    );

    return (
        <div className={classes}>
            {children}
        </div>
    )
};


Row.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

Row.defaultProps = {
    children: '',
    className: ''
};

export default Row;