import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = ({ pageTitle }) => {
    return (
        <header className="page-header flex flex-col items-center mb-5">
            <a href="/" className="flex items-center space-x-2">
                {/* Business name removed */}
            </a>
            {pageTitle && <h2 className="text-3xl mt-2">{pageTitle}</h2>}
        </header>
    );
};

PageHeader.propTypes = {
    pageTitle: PropTypes.string,
};

export default PageHeader;
