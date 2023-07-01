const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/UsuarioController');

// Ruta para crear un usuario
router.post('/', usuarioController.crearUsuario);

// Ruta para obtener todos los usuarios
router.get('/', usuarioController.obtenerUsuarios);

// Ruta para obtener un usuario por su ID
router.get('/:id', usuarioController.verUsuario);

// Ruta para actualizar un usuario
router.put('/:id', usuarioController.actualizarUsuario);

// Ruta para eliminar un usuario
router.delete('/:id', usuarioController.eliminarUsuario);

module.exports = router;
