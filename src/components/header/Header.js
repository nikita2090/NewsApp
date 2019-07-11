import React from 'react';
import PropTypes from 'prop-types';

import PageSize from "../page-size/PageSize";
import Title from "../title/Title";


const Header = ({title, selectedPageSize, handleSelectChange}) => (
    <header className="row">
        <Title header={title}
               className="col-6 col-md-12"/>

        <PageSize className="col-6 col-md-12"
                  selectedPageSize={selectedPageSize}
                  handleSelectChange={handleSelectChange}/>
    </header>
);


Header.propTypes = {
    title: PropTypes.string,
    selectedPageSize: PropTypes.number,
    handleSelectChange: PropTypes.func,
};

Header.defaultProps = {
    title: 'Simple header',
    selectedPageSize: 10,
    handleSelectChange: () => {}
};

export default Header;