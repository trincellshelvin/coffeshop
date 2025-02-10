import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { FaTrash } from 'react-icons/fa';

const ProductCard = ({ product, handleAddToCart, handleRemoveFromCart }) => {
    const [quantity, setQuantity] = useState(1);

    const adjustQuantity = (change) => {
        const newQuantity = quantity + change;
        if (newQuantity >= 1 && newQuantity <= product.stock) {
            setQuantity(newQuantity);
        } else if (newQuantity === 0) {
            handleRemoveFromCart(product._id);
        }
    };

    const handleRemove = () => {
        handleRemoveFromCart(product._id);
    };

    return (
        <div className="card">
            <img src={product.imageUrl} alt={product.name} className="card-img-top" />
            <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">${product.price ? product.price.toFixed(2) : 'N/A'}</p>
                <div className="input-group mb-3">
                    {quantity > 1 ? (
                        <>
                            <Button label="-" handleClick={() => adjustQuantity(-1)} />
                            <span className="input-group-text">{quantity}</span>
                            <Button label="+" handleClick={() => adjustQuantity(1)} />
                        </>
                    ) : (
                        <>
                            <Button label={<FaTrash />} handleClick={handleRemove} />
                            <span className="input-group-text">{quantity}</span>
                            <Button label="+" handleClick={() => adjustQuantity(1)} />
                        </>
                    )}
                </div>
                <Button label="Add to Cart" handleClick={() => handleAddToCart(product, quantity)} />
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired,
        stock: PropTypes.number.isRequired,
        _id: PropTypes.number.isRequired,
    }).isRequired,
    handleAddToCart: PropTypes.func.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired,
};

export default ProductCard;
