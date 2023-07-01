const express = require('express');
const router = express.Router();
const ubicacionController = require('../controllers/UbicacionController');

// Ruta para crear una ubicación
router.post('/', ubicacionController.crearUbicacion);

// Ruta para obtener todas las ubicaciones
router.get('/', ubicacionController.obtenerUbicaciones);

// Ruta para obtener una ubicación por su ID
router.get('/:id', ubicacionController.verUbicacion);

// Ruta para actualizar una ubicación
router.put('/:id', ubicacionController.actualizarUbicacion);

// Ruta para eliminar una ubicación
router.delete('/:id', ubicacionController.eliminarUbicacion);

module.exports = router;
