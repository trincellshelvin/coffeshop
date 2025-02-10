import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../context/AuthContext';
import PageHeader from '../components/PageHeader'; 
import CartItem from '../components/CartItem'; 
import products from '../mocks/products.json'; 
import Button from '../components/Button'; 

const CartPage = () => {
    function handleRemoveFromCart(productId) {
        console.log('Remove from Cart clicked!', productId);
    }

    const { isAuthenticated } = useContext(AuthContext);
    const router = useRouter(); // Use useNavigate instead of useHistory

    function handleCheckout() {
        console.log('Checkout clicked!');
        if (!isAuthenticated) {
            alert('You need to Login or Signup to proceed to checkout.');
        } else {
            navigate('/checkout');
        }
    }

    return (
        <div className="cart-page">
            <PageHeader pageTitle="Shopping Cart" />
            <div className="cart-items">
                {products.map((product) => (
                    <CartItem key={product._id} product={product} handleRemove={handleRemoveFromCart} />
                ))}
            </div>
            <div className="checkout-button mt-5">
                <Button label="Checkout" handleClick={handleCheckout} />
            </div>
        </div>
    );
};

export default CartPage;
