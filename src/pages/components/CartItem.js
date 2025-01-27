import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button'; // Ensure path is correct

const CartItem = ({ product, handleRemove }) => {
    if (!product) return null; // Check if product is defined

    return (
        <div className="cart-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="cart-item-details">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <Button label="Remove from Cart" handleClick={handleRemove} />
            </div>
        </div>
    );
};

CartItem.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
    }).isRequired,
    handleRemove: PropTypes.func.isRequired,
};

export default CartItem;
