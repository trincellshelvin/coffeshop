import React from 'react';
import PageHeader from './components/PageHeader'; // Ensure correct path
import CartItem from './components/CartItem'; // Ensure correct path
import products from '../mocks/cart.json'; // Ensure correct path
import Button from './components/Button'; // Ensure correct path
import { CartNavbar } from './components/Navbar'; // Ensure correct path

const CartPage = () => {
    function handleRemoveFromCart(productId) {
        console.log('Remove from Cart clicked!', productId);
    }

    function handleCheckout() {
        console.log('Checkout clicked!');
    }

    return (
        <div className="cart-page">
            <CartNavbar />
            <PageHeader pageTitle="Shopping Cart" />
            <div className="cart-items">
                {products.map((product) => (
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
