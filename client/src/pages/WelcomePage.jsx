// src/pages/WelcomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css'; // Import your CSS for styling

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic to handle logout, if needed
    // For now, just navigate to the home page or login page
    navigate('/login');
  };

  return (
    <div className="welcome-container">
      <h1>Welcome to Your Dashboard!</h1>
      <p>You're successfully logged in.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default WelcomePage;
