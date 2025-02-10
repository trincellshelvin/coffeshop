import React from 'react';
import CheckoutForm from '../components/CheckoutForm'; // Ensure correct path
import Footer from '../components/Footer'; // Ensure correct path
import PageHeader from '../components/PageHeader'; // Ensure correct path
import CartSummary from '../components/CartSummary';

const Checkout = ({ handleBuyNow }) => {
    return (
        <div data-theme="coffeeShop" className="text-chocolate-brown min-h-screen flex flex-col justify-between">
            <PageHeader
                logo="/steampunkcybercafelogo.jpg"
                businessName="Steam Punk Cyber Cafe"
            />
            <div className="flex-grow container mx-auto p-4">
                <h1 className="text-4xl font-semibold text-center mt-10 mb-10">Checkout Page</h1>
                <CheckoutForm handleBuyNow={handleBuyNow} />
                <CartSummary />
            </div>
            <footer className="footer relative z-10 bg-white text-chocolate-brown text-center py-4">
                <Footer />
            </footer>
        </div>
    );
};

export default Checkout;
