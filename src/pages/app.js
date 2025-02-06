// src/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './context/AuthContext'; // Ensure correct path
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '../routes/AppRoutes'; // Import AppRoutes component

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <AppRoutes /> {/* Use AppRoutes for routing */}
            </Router>
        </AuthProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
