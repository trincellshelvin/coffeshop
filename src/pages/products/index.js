import React, { useState } from 'react';
import PageHeader from '../components/PageHeader'; 
import ProductCard from '../../components/ProductCard'; 
import products from '../../mocks/products.json'; 
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductsPage = () => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product, quantity) => {
        const updatedCart = [...cart];
        const existingProductIndex = updatedCart.findIndex((item) => item._id === product._id);

        if (existingProductIndex >= 0) {
            updatedCart[existingProductIndex].quantity += quantity;
        } else {
            updatedCart.push({ ...product, quantity });
        }

        setCart(updatedCart);
    };

    const handleRemoveFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item._id !== productId);
        setCart(updatedCart);
    };

    return (
        <div>
            <Navbar />
            <PageHeader pageTitle="Our Products" />
            <div className="row">
                {products.map((product) => (
                    <div key={product._id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                        <ProductCard
                            product={product}
                            handleAddToCart={handleAddToCart}
                            handleRemoveFromCart={handleRemoveFromCart}
                        />
                    </div>
                ))}
            </div>
            <footer className="footer relative z-10 bg-white text-chocolate-brown text-center py-4">
                <Footer />
            </footer>
        </div>
    );
};

export default ProductsPage;
