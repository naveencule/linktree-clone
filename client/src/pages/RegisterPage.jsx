import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css'; // Import your CSS for styling
import registerImage from '../assets/images/LoginImage.jpg'; // Correct image path
import loginGif from '../assets/images/loginGif.webp'; // Import GIF image

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', { name, email, password });

      if (response.data.success) {
        setSuccess('Registration successful!');
        setError('');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setSuccess('');
        setError(response.data.error || 'Registration failed. Please check your details.');
      }
    } catch (err) {
      console.log('Error:', err);
      setSuccess('');
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="register-container" style={{ backgroundImage: `url(${registerImage})` }}>
      <div className="form-container">
        <h2>Register</h2>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}
        <img src={loginGif} alt="Register animation" className="register-gif" /> {/* Add GIF image */}
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
