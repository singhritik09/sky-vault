// AuthButton.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AuthButton = ({ onLogout }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check authentication status when component mounts
        checkAuthStatus();
    }, []);

    const checkAuthStatus = async () => {
        try {
            const response = await axios.get('http://localhost:8000/auth/status');
            setIsLoggedIn(response.data.authenticated);
        } catch (error) {
            console.error('Error checking authentication status:', error);
        }
    };

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:8000/logout');
            setIsLoggedIn(false); // Update state to reflect logout
            // Call onLogout to notify the parent component about the logout
            onLogout();
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <>
            {isLoggedIn ? (
                <button
                    type="button"
                    className="text-white bg-green-700 mt-8 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    onClick={handleLogout}
                >
                    <a href="/login">Logout</a>
                    
                </button>
            ) : (
                <a href="/login">
                    <button
                        type="button"
                        className="text-white bg-green-700 mt-8 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                        Login
                    </button>
                </a>
            )}
        </>
    );
};

export default AuthButton;
