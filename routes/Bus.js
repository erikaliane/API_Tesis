const express = require('express');
const router = express.Router();
const busController = require('../controllers/BusController');

// Ruta para crear un bus
router.post('/', busController.crearBus);

// Ruta para obtener todos los buses
router.get('/', busController.obtenerBuses);

// Ruta para obtener un bus por su ID
router.get('/:id', busController.verBus);

// Ruta para actualizar un bus
router.put('/:id', busController.actualizarBus);

// Ruta para eliminar un bus
router.delete('/:id', busController.eliminarBus);

module.exports = router;
