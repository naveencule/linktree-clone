// Path: C:\Users\user\new-linktree-clone\server\models\User.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the User schema
const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
