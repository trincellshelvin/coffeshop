import React from 'react';
import { LoginNavbar } from './components/Navbar'; // Ensure correct path
import HeroSection from './components/HeroSection'; // Ensure correct path
import LoginForm from './components/LoginForm'; // Import the LoginForm component

const LoginPage = ({ buttonLabel, handleLogin }) => {
    return (
        <div className="relative min-h-screen">
            <LoginNavbar />
            <HeroSection />
            <LoginForm buttonLabel={buttonLabel} handleLogin={handleLogin} />
        </div>
    );
};

export default LoginPage;
