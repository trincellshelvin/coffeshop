import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button'; // Ensure correct path

const SignupForm = ({ handleSignup }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { name, address, phoneNumber, email };
        handleSignup(formData);
    };

    return (
        <form className="signup-form flex flex-col items-center p-5" onSubmit={handleSubmit}>
            <h2 className="text-2xl mb-4">Sign Up</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mb-4 px-4 py-2 rounded"
            />
            <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mb-4 px-4 py-2 rounded"
            />
            <input
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mb-4 px-4 py-2 rounded"
            />
            <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4 px-4 py-2 rounded"
            />
            <Button label="Submit" type="submit" />
        </form>
    );
};

SignupForm.propTypes = {
    handleSignup: PropTypes.func.isRequired,
};

export default SignupForm;
