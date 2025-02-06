// src/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/index';
import LoginPage from '../pages/login';
import DashboardPage from '../pages/DashboardPage';
import ProtectedRoute from '../pages/components/ProtectedRoute'; 

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={
            <ProtectedRoute>
                <DashboardPage />
            </ProtectedRoute>
        } />
    </Routes>
);

export default AppRoutes;
