import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const CombinedLogin = () => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`, { email, password });
            login(response.data);
            
            // Check user type and redirect accordingly
            if (response.data.userType === 'admin') {
                navigate('/admin-dashboard');
            } else {
                navigate('/user-dashboard');
            }
        } catch (error) {
            console.error('Login error', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto p-6 bg-white rounded-md shadow-md">
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-chocolate-brown focus:border-chocolate-brown"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-chocolate-brown focus:border-chocolate-brown"
                />
            </div>
            <div className="mt-6">
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-chocolate-brown text-white font-semibold rounded-md hover:bg-brown-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-chocolate-brown"
                >
                    Login
                </button>
            </div>
        </form>
    );
};

export default CombinedLogin;
