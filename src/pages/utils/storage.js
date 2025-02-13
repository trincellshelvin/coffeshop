// Function to save cart data to local storage
const saveCartToLocalStorage = (cart) => {
    try {
        const cartJSON = JSON.stringify(cart);
        localStorage.setItem('cart', cartJSON);
    } catch (error) {
        console.error('Error saving cart to local storage:', error);
    }
};

// Function to load cart data from local storage
const loadCartFromLocalStorage = () => {
    try {
        const cartJSON = localStorage.getItem('cart');
        return cartJSON ? JSON.parse(cartJSON) : [];
    } catch (error) {
        console.error('Error loading cart from local storage:', error);
        return [];
    }
};

export { saveCartToLocalStorage, loadCartFromLocalStorage };
