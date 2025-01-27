import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './components/Navbar';
import Button from './components/Button';
import HeroSection from './components/HeroSection';

export default function LoginForm({ Login, handleLogin }) {
    return (
        <div className="relative min-h-screen">
            <Navbar/>
            <HeroSection />
            <form className="form relative z-10 flex flex-col items-center">
                <input type="email" placeholder="Email" className="mb-4 px-4 py-2 rounded" />
                <input type="password" placeholder="Password" className="mb-4 px-4 py-2 rounded" />
                <Button label={Login} handleClick={handleLogin} />
            </form>
        </div>
    );
}

LoginForm.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
    handleLogin: PropTypes.func.isRequired,
};
