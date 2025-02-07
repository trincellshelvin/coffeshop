// src/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/index';
import LoginPage from '../pages/login';
import SignupPage from '../pages/signup';
import CartPage from '../pages/cart';
import CheckoutPage from '../pages/checkout';
import DashboardPage from '../pages/DashboardPage';
import ProtectedRoute from '../pages/components/ProtectedRoute';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/DashboardPage" element={
            <ProtectedRoute>
                <DashboardPage />
            </ProtectedRoute>
        } />
    </Routes>
);

export default AppRoutes;