import products from '../mocks/products.json'; // Ensure correct path

// Mock function to simulate fetching cart items
const getCartItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Example cart quantities (you may fetch these from an API or state)
            const cartItems = [
                { id: 0, quantity: 2 },
                { id: 1, quantity: 1 },
                { id: 2, quantity: 3 }
            ];

            // Map cart items to include product details from products.json
            const detailedCartItems = cartItems.map(cartItem => {
                const product = products.find(p => p._id === cartItem.id) || {};
                console.log('Product:', product); // Log product details
                const price = typeof product.price === 'number' ? product.price : parseFloat(product.price);
                return {
                    ...product,
                    quantity: cartItem.quantity,
                    price: product.price || 0 // Ensure price has a default value
                };
            });

            console.log('Detailed Cart Items:', detailedCartItems); // Log detailed cart items
            resolve(detailedCartItems);
        }, 1000); // Simulate network delay
    });
};

export { getCartItems };