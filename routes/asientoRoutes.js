const express = require('express');
const router = express.Router();
const asientoController = require('../controllers/AsientoController');

// Ruta para crear un asiento
router.post('/', asientoController.crearAsiento);

// Ruta para obtener todos los asientos
router.get('/', asientoController.obtenerAsientos);

// Ruta para obtener un asiento por su ID
router.get('/:id', asientoController.verAsiento);

// Ruta para actualizar un asiento
router.put('/:id', asientoController.actualizarAsiento);

// Ruta para eliminar un asiento
router.delete('/:id', asientoController.eliminarAsiento);

module.exports = router;
