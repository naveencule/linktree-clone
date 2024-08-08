// Path: C:\Users\user\new-linktree-clone\server/controllers/userController.js

const User = require('../models/User'); // Ensure this path is correct

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Logic for user registration
    // e.g., save user to database

    // Respond with success
    res.status(200).json({ message: 'Registration successful. Please log in.' });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed. Please try again.' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Add logic to check user credentials (email and password)
    const user = await User.findOne({ email });
    if (!user || !user.validatePassword(password)) {
      return res.status(400).json({ success: false, error: 'Invalid email or password.' });
    }

    // If login is successful
    res.status(200).json({ success: true, message: 'Login successful.' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Login failed. Please try again.' });
  }
};
