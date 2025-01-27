import PropTypes from 'prop-types';
import Button from '../components/Button'; // Ensure the correct path

export default function ProductCard({ product }) {
    if (!product) {
        return <div>Product not found!</div>; // Handle undefined `product`
    }

    return (
        <div className="card">
            {product.image ? (
                <img src={product.image} alt={product.name} className="product-image" />
            ) : (
                <div className="placeholder-image">Image not available</div>
            )}
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <Button label="Add to Cart" handleAddtoCart={() => console.log('Order now annotated!')} />
        </div>
    );
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};
