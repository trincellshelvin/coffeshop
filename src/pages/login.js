import React from 'react';
import PropTypes from 'prop-types';
import { LoginNavbar } from './components/Navbar'; // Ensure correct path
import Button from './components/Button'; // Ensure correct path
import Footer from './components/Footer'; // Ensure correct path

const LoginForm = ({ buttonLabel, handleLogin }) => {
    console.log('LoginForm Component');
    return (
        <form className="form flex flex-col items-center space-y-4 bg-white p-6 rounded shadow-md">
            <input 
                type="email" 
                placeholder="Email" 
                className="mb-4 px-4 py-2 rounded w-full"
                required 
            />
            <input 
                type="password" 
                placeholder="Password" 
                className="mb-4 px-4 py-2 rounded w-full" 
                required 
            />
            <Button label={"Login"} handleClick={handleLogin} />
        </form>
    );
};

LoginForm.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
    handleLogin: PropTypes.func.isRequired,
};

const LoginPage = ({ buttonLabel, handleLogin }) => {
    console.log(LoginForm);
    return (
        <div className="relative min-h-screen flex flex-col">
            <LoginNavbar />
            <div className="flex-grow flex items-center justify-center">
                <LoginForm buttonLabel={buttonLabel} handleLogin={handleLogin} />
            </div>
            <Footer />
        </div>
    );
};

LoginPage.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
    handleLogin: PropTypes.func.isRequired,
};

LoginPage.defaultProps = {
    buttonLabel: "Login"
};

export default LoginPage;
