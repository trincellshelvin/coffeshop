import React from 'react';
import PageHeader from './components/PageHeader';
import CartItem from './components/CartItem'; 
import products from '../mocks/cart.json'; 
import Button from './components/Button'; 
import Navbar from './components/Navbar'; 

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
