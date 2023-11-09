const express = require('express');
const router = express.Router();
const administradorController = require('../controllers/AdministradorController');

// Ruta para crear un administrador
router.post('/', administradorController.crearAdministrador);

// Ruta para obtener todos los administradores
router.get('/', administradorController.obtenerAdministradores);

// Ruta para obtener un administrador por su ID
router.get('/:id', administradorController.obtenerAdministradorPorId);

// Ruta para actualizar un administrador
router.put('/:id', administradorController.actualizarAdministrador);

// Ruta para eliminar un administrador
router.delete('/:id', administradorController.eliminarAdministrador);

module.exports = router;
