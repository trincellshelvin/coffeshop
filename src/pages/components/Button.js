import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, handleClick }) => {
    return (
        <button
            className="mt-5 py-2 px-4 bg-brown-500 text-white rounded-full"
            onClick={handleClick}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired, // Ensure handleClick is marked as required
};

export default Button;
