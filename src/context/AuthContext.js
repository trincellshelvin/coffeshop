// context/AuthContext.js
import { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState(null);

    const login = (userData) => {
        setAuthState(userData);
    };

    return (
        <AuthContext.Provider value={{ login, authState }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
