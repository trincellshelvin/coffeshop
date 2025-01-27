import React from 'react';
import PageHeader from './components/PageHeader';
import CartItem from './components/CartItem'; // Ensure correct path
import products from '../mocks/cart.json'; // Ensure this path is correct
import Button from './components/Button'; // Ensure correct path
import Navbar from './components/Navbar'; // Ensure correct path

const CartPage = () => {
    function handleRemoveFromCart() {
        console.log('Remove from Cart clicked!');
    }

    function handleCheckout() {
        console.log('Checkout clicked!');
    }

    return (
        <div className="cart-page">
            <Navbar />
            <PageHeader pageTitle="Shopping Cart" />
            <div className="cart-items">
                {Array.isArray(products) && products.map((product) => (
                    <CartItem key={product._id} product={product} handleRemove={handleRemoveFromCart} />
                ))}
            </div>
            <div className="checkout-button mt-5">
                <Button label="Checkout" handleClick={handleCheckout} />
            </div>
        </div>
    );
};

export default CartPage;
