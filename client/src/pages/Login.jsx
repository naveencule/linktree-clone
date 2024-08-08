// Path: C:\Users\user\new-linktree-clone\client\src\pages\Login.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import your CSS for styling
import loginImage from '../assets/images/LoginImage.jpg'; // Correct image path
import loginGif from '../assets/images/loginGif.webp'; // Import GIF image

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { email, password });

      if (response.data.success) {
        setSuccess('Login successful!');
        setError('');
        setTimeout(() => navigate('/welcome'), 2000);
      } else {
        setSuccess('');
        setError(response.data.error || 'Login failed. Please check your credentials.');
      }
    } catch (err) {
      setSuccess('');
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${loginImage})` }}>
      <div className="form-container">
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}
        <img src={loginGif} alt="Login animation" className="login-gif" /> {/* Add GIF image */}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
