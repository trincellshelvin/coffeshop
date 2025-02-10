import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button'; // Ensure correct path
import CartSummary from './CartSummary'; // Ensure correct path

const CheckoutForm = ({ handleBuyNow }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <div className="form-and-summary flex flex-col md:flex-row items-center md:items-start p-5 gap-10">
            <form className="form flex flex-col items-center md:w-1/2 p-5">
                <h2 className='p-5 font-medium'>Checkout</h2>
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
                <Button label="Submit Order" handleClick={handleBuyNow} />
            </form>
            <div className="cart-summary-container md:w-1/2">
                <CartSummary title="Your Cart" />
            </div>
        </div>
    );
};

CheckoutForm.propTypes = {
    handleBuyNow: PropTypes.func.isRequired,
};

export default CheckoutForm;
