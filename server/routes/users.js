// Path: C:\Users\user\new-linktree-clone\server\routes\users.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Ensure this path is correct

// Define routes and ensure the corresponding handler functions exist in userController
router.post('/register', userController.register); // Ensure register function is defined in userController
router.post('/login', userController.login); // Ensure login function is defined in userController

module.exports = router;
