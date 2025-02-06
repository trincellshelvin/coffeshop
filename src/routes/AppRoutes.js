// src/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../pages/components/ProtectedRoute';
import HomePage from '../pages/index';
import LoginPage from '../pages/login';
import DashboardPage from '../pages/admin/admindashboard';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <ProtectedRoute path="/dashboard" component={DashboardPage} />
    </Routes>
);

export default AppRoutes;
