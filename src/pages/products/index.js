import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader'; 
import ProductCard from '../../components/ProductCard'; 
import productsData from '../../mocks/products.json'; 
import Footer from '../../components/Footer'; 
import { HomeNavbar } from '../../components/Navbar';


const ProductsPage = () => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState(productsData);

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
            <HomeNavbar />
            <PageHeader pageTitle="Our Products" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((product) => (
                        <div key={product._id} className="p-4">
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
