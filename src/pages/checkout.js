import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './components/Button'; 
import Footer from './components/Footer'; 
import CheckoutFormHeader from './components/CheckOutFormHeader'; // Ensure correct path

const CheckoutForm = ({ handleBuyNow }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <div className="checkout-form-container">
            <CheckoutFormHeader
                logo="/steampunkcybercafelogo.jpg"
                businessName="Steam Punk Cyber Cafe"
                checkoutText="Checkout"
            />
            <form className="form flex flex-col items-center p-5">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mb-4 px-4 py-2 rounded"
                />
                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="mb-4 px-4 py-2 rounded"
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="mb-4 px-4 py-2 rounded"
                />
                <Button label="Buy Now" handleClick={handleBuyNow} />
            </form>
            <Footer />
        </div>
    );
};

CheckoutForm.propTypes = {
    handleBuyNow: PropTypes.func.isRequired,
};

export default CheckoutForm;
