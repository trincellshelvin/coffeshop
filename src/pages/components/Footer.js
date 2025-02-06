// src/pages/components/Footer.js
import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ title }) => {
    return (
        <footer>
            <h1>{title}</h1>
            <p className="text-center">© 2025 Coffee Shop. All rights reserved.</p>
        </footer>
    );
};

Footer.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Footer;
