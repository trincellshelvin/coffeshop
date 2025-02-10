import React from 'react';
import { useRouter } from 'next/router';
import products from '../../mocks/products.json';
import ProductCard from '../../components/ProductCard'; // Correct import path and name

const ProductPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const product = products[id] || {};

    function handleAddToCart() {
        console.log('Add to Cart clicked!'); // Log message for event handler
        alert('Added to cart!');
    }

    return (
        <div>
            <ProductCard product={product} handleAddToCart={handleAddToCart} /> {/* Pass props correctly */}
        </div>
    );
}

export default ProductPage;