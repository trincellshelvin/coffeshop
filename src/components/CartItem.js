import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button'; // Ensure path is correct

const CartItem = ({ product, handleRemove }) => {
    if (!product) return null; // Check if product is defined

    return (
        <div className="cart-item flex items-center border-b py-4">
            <img src={product.imageUrl} alt={product.name} className="w-16 h-16 object-cover mr-4" />
            <div className="cart-item-details flex-1">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-gray-600">${product.price}</p>
                <p className="text-gray-600">Quantity: {product.quantity}</p>
                <Button label="Remove from Cart" handleClick={() => handleRemove(product._id)} />
            </div>
        </div>
    );
};

CartItem.propTypes = {
    product: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        _id: PropTypes.number.isRequired,
    }).isRequired,
    handleRemove: PropTypes.func.isRequired,
};

export default CartItem;
