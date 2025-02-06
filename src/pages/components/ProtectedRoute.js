import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom'; // Use Navigate instead of Redirect
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            element={isAuthenticated ? <Component /> : <Navigate to="/login" />}
        />
    );
};

export default ProtectedRoute;

