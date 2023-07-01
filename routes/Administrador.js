const express = require('express');
const router = express.Router();
const administradorController = require('../controllers/AdministradorController');

// Ruta para crear un administrador
router.post('/administradores', administradorController.crearAdministrador);

// Ruta para obtener todos los administradores
router.get('/administradores', administradorController.obtenerAdministradores);

// Ruta para obtener un administrador por su ID
router.get('/administradores/:id', administradorController.obtenerAdministradorPorId);

// Ruta para actualizar un administrador
router.put('/administradores/:id', administradorController.actualizarAdministrador);

// Ruta para eliminar un administrador
router.delete('/administradores/:id', administradorController.eliminarAdministrador);

module.exports = router;
