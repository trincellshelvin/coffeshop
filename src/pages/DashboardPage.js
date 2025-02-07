import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        stockNumber: '',
        imageUrl: '',
    });
    const [editingProduct, setEditingProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await axios.get('/api/products'); // Update with your API endpoint
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (editingProduct) {
            setEditingProduct({ ...editingProduct, [name]: value });
        } else {
            setNewProduct({ ...newProduct, [name]: value });
        }
    };

    const handleAddProduct = async () => {
        try {
            await axios.post('/api/products', newProduct); // Update with your API endpoint
            fetchProducts();
            setNewProduct({
                name: '',
                description: '',
                price: '',
                category: '',
                stockNumber: '',
                imageUrl: '',
            });
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const handleUpdateProduct = async (id) => {
        try {
            await axios.put(`/api/products/${id}`, editingProduct); // Update with your API endpoint
            fetchProducts();
            setEditingProduct(null);
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const handleDeleteProduct = async (id) => {
        try {
            await axios.delete(`/api/products/${id}`); // Update with your API endpoint
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const startEditing = (product) => {
        setEditingProduct(product);
    };

    const cancelEditing = () => {
        setEditingProduct(null);
    };

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            {loading && <p>Loading products...</p>}
            <div>
                <h2>{editingProduct ? 'Edit Product' : 'Add Product'}</h2>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        editingProduct ? handleUpdateProduct(editingProduct.id) : handleAddProduct();
                    }}
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={editingProduct ? editingProduct.name : newProduct.name}
                        onChange={handleInputChange}
                        required
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={editingProduct ? editingProduct.description : newProduct.description}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={editingProduct ? editingProduct.price : newProduct.price}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        value={editingProduct ? editingProduct.category : newProduct.category}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="number"
                        name="stockNumber"
                        placeholder="Stock Number"
                        value={editingProduct ? editingProduct.stockNumber : newProduct.stockNumber}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="url"
                        name="imageUrl"
                        placeholder="Image URL"
                        value={editingProduct ? editingProduct.imageUrl : newProduct.imageUrl}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit">{editingProduct ? 'Update' : 'Add'} Product</button>
                    {editingProduct && <button onClick={cancelEditing}>Cancel</button>}
                </form>
            </div>
            <h2>Products</h2>
            <div className="products-list">
                {products.map((product) => (
                    <div key={product.id} className="product-item">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <p>Category: {product.category}</p>
                        <p>Stock Number: {product.stockNumber}</p>
                        <img src={product.imageUrl} alt={product.name} />
                        <button onClick={() => startEditing(product)}>Edit</button>
                        <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminDashboard;
