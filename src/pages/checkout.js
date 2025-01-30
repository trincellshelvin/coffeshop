import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './components/Button'; 
import Footer from './components/Footer'; 
import PageHeader from './components/PageHeader'; // Ensure correct path
import { CheckoutNavbar } from './components/Navbar'; // Ensure correct path
import CartSummary from './components/CartSummary'; // Import CartSummary

const Checkout = ({ handleBuyNow }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <div data-theme="coffeeShop" className="text-chocolate-brown min-h-screen flex flex-col justify-between">
            <CheckoutNavbar />
            <PageHeader
                logo="/steampunkcybercafelogo.jpg"
                businessName="Steam Punk Cyber Cafe"
            />
            <div className="flex-grow container mx-auto p-4">
                <h1 className="text-4xl font-semibold text-center mt-10 mb-10">Checkout Page</h1>
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
            </div>
            <footer className="footer relative z-10 bg-white text-chocolate-brown text-center py-4">
                <Footer />
            </footer>
        </div>
    );
};

Checkout.propTypes = {
    handleBuyNow: PropTypes.func.isRequired,
};

export default Checkout;
