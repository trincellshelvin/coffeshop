import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCartItems } from '../utils/cart'; // Ensure correct path

const CartSummary = ({ title }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        getCartItems().then(items => {
            console.log('Cart Items:', items); // Log cart items
            setCartItems(items);
        });
    }, []);

    const calculateTotal = () => {
        const total = cartItems.reduce((total, item) => {
            const price = typeof item.price === 'number' ? item.price : parseFloat(item.price);
            console.log(`Calculating: ${item.name} - Price: ${price}, Quantity: ${item.quantity}`);
            return total + (price * item.quantity);
        }, 0).toFixed(2);
        console.log('Total:', total); // Log total price
        return total;
    };

    return (
        <div className="cart-summary bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-chocolate-brown">{title}</h2>
            {cartItems.length > 0 ? (
                cartItems.map(item => (
                    <div key={item._id} className="flex items-center mb-4">
                        <img src={item.imageUrl} alt={item.name} className="w-16 h-16 rounded mr-4" />
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-chocolate-brown">{item.name}</h3>
                            <p className="text-gray-700">Quantity: {item.quantity}</p>
                            <p className="text-gray-700">Price: ${item.price.toFixed(2)}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-gray-500">Your cart is empty.</p>
            )}
            {cartItems.length > 0 && (
                <div className="total text-xl font-semibold text-chocolate-brown mt-4">
                    Total: ${calculateTotal()}
                </div>
            )}
        </div>
    );
};

CartSummary.propTypes = {
    title: PropTypes.string.isRequired,
};

export default CartSummary;
