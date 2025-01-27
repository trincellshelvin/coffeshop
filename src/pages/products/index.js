import React from 'react';
import ProductCard from '../../components/ProductCard'; // Adjust path accordingly
import products from '../../mocks/products.json'; // Adjust path accordingly
import '../../styles/products.css'; // Make sure this path is correct

const ProductsPage = () => {
    return (
        <div className="products-grid">
            {products.map((product) => (
                <ProductCard key={product._id} product={product} /> // Use key prop
            ))}
        </div>
    );
};

export default ProductsPage;
