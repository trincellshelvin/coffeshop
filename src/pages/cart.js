import React from 'react';
import CartItem from './components/CartItem'; 
import products from '../mocks/cart.json'; 
import Button from './components/Button'; 

const CartPage = () => {
    function handleRemoveFromCart() {
        console.log('Remove from Cart clicked!');
    }

    function handleCheckout() {
        console.log('Checkout clicked!');
    }

    return (
        <div className="cart-page">
            <div className="cart-items">
                {products.map((product) => (
                    <CartItem key={product._id} product={product} handleRemove={handleRemoveFromCart} />
                ))}
            </div>
            <div className="checkout-button">
                <Button label="Checkout" handleClick={handleCheckout} />
            </div>
        </div>
    );
};

export default CartPage;
