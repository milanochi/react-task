import React from 'react'

const TOKEN_KEY = 'authToken';

const AuthService = {
    getToken: () => localStorage.getItem(TOKEN_KEY),

    setToken: (token) => localStorage.setItem(TOKEN_KEY, token),

    clearToken: () => localStorage.removeItem(TOKEN_KEY),
};

const handleLogin = async () => {
    // Perform authentication and get the token
    const token = await authenticateUser();

    // Store the token
    AuthService.setToken(token);
};


const Logout = () => {
    const [isLoggedIn, setLoggedIn] = useState(true); // Use your actual authentication state

    const handleLogout = () => {
        AuthService.clearToken();
        setLoggedIn(false);
    };

    return (
        <div>
            <h1>Your App</h1>
            {isLoggedIn ? (
                <div>

                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <p>Please log in to access the app.</p>
            )}
        </div>
    );
};
export default Logout