// external imports
const express = require('express');
const router = express.Router();

// internal imports
const UserController = require("../controllers/user_controller")
const { verifyToken} = require("../middleware/auth");

// unprotected routes
router.post('/signup', UserController.signup);
router.post('/login', UserController.login);
router.post('/forget_password',UserController.forget_password)
router.post('/reset_password',UserController.reset_password)


module.exports=router; 