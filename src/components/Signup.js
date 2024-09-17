import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState(''); // New state for error messages
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Reset error message

        if (!userName || !email || !password || !confirmPassword) {
            setErrorMessage('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match!');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/auth/signup', {
                userName,
                email,
                password
            });

            alert('Signup successful! Please log in with your credentials.');
            console.log(response.data);
            navigate('/login');
        } catch (error) {
            setErrorMessage(`Signup failed! ${error.response?.data?.message || 'Please try again later.'}`);
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(prevState => !prevState);
    };

    return (
        <div className="container">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="userName">User Name</label>
                    <input 
                        type="text" 
                        id="userName" 
                        className="form-control" 
                        placeholder="Enter user name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="form-control" 
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <div className="password-container">
                        <input 
                            type={passwordVisible ? "text" : "password"}
                            id="password" 
                            className="form-control" 
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="button" className="eye-btn" onClick={togglePasswordVisibility}>
                            {passwordVisible ? 'Hide' : 'Show'}
                        </button>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className="password-container">
                        <input 
                            type={passwordVisible ? "text" : "password"}
                            id="confirmPassword" 
                            className="form-control" 
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <button type="button" className="eye-btn" onClick={togglePasswordVisibility}>
                            {passwordVisible ? 'Hide' : 'Show'}
                        </button>
                    </div>
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error message */}
                <button type="submit" className="btn">Signup</button>
                <p className="text-center mt-3">
                    Already have an account? <Link to="/login" className='nextlink'>Login</Link>
                </p>
            </form>
        </div>
    );
}

export default Signup;
