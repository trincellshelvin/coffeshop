import React from 'react';
import PropTypes from 'prop-types';

const CheckoutFormHeader = ({ logo, businessName, checkoutText }) => {
    return (
        <header className="checkout-form-header flex flex-col items-center mb-5">
            <a href="/" className="flex items-center space-x-2">
                <img src={logo} alt={businessName} className="logo w-10 h-10" />
                <h1 className="text-2xl font-semibold">{businessName}</h1>
            </a>
            <h2 className="text-xl mt-2">{checkoutText}</h2>
        </header>
    );
};

CheckoutFormHeader.propTypes = {
    logo: PropTypes.string.isRequired,
    businessName: PropTypes.string.isRequired,
    checkoutText: PropTypes.string.isRequired,
};

export default CheckoutFormHeader;
