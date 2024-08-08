// Path: C:\Users\user\new-linktree-clone\client\src\pages\Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your CSS for styling
import linktreeGif from '../assets/images/linktreegif.webp'; // Import the gif
import linktreeLogo from '../assets/images/Linktree-Emblem.png'; // Import the logo

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <img src={linktreeLogo} alt="Linktree Logo" className="logo" />
        <ul className="nav-links">
          <li><Link to="/templates">Templates</Link></li>
          <li><Link to="/marketplace">Marketplace</Link></li>
          <li><Link to="/discover">Discover</Link></li>
        </ul>
        <div className="nav-buttons">
          <Link to="/login">
            <button className="nav-button">Login</button>
          </Link>
          <Link to="/register">
            <button className="nav-button">Register</button>
          </Link>
        </div>
      </nav>
      <div className="main-content">
        <div className="text-content">
          <h1>Everything you are. In one, simple link in bio.</h1>
          <p>Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
        </div>
        <div className="image-content">
          <img src={linktreeGif} alt="Linktree GIF" />
        </div>
      </div>
    </div>
  );
};

export default Home;
