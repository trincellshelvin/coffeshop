// LoginPage.js
import React from 'react';
import PropTypes from 'prop-types'; 
import Footer from '../components/Footer'; 
import CombinedLogin from '../components/CombinedLogin'; 

const LoginPage = () => {
    return (
        <div className="relative min-h-screen flex flex-col">
            <div className="flex-grow flex items-center justify-center">
                <CombinedLogin />
            </div>
            <Footer />
        </div>
    );
};

export default LoginPage;
