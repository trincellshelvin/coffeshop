// App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './context/AuthContext'; // Ensure correct path
import { BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './LoginPage';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <LoginPage />
            </Router>
        </AuthProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
