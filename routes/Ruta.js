const express = require('express');
const router = express.Router();
const rutaController = require('../controllers/RutaController');

// Ruta para crear una ruta
router.post('/', rutaController.crearRuta);

// Ruta para obtener todas las rutas
router.get('/', rutaController.obtenerRutas);

// Ruta para obtener una ruta por su ID
router.get('/:id', rutaController.verRuta);

// Ruta para actualizar una ruta
router.put('/:id', rutaController.actualizarRuta);

// Ruta para eliminar una ruta
router.delete('/:id', rutaController.eliminarRuta);

module.exports = router;
