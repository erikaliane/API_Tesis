const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Ruta de inicio de sesión con Google
router.get('/google', authController.loginWithGoogle);

// Ruta de redireccionamiento después de la autorización de Google
router.get('/google/callback', authController.callbackGoogleLogin);

module.exports = router;
