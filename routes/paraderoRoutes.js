const express = require('express');
const router = express.Router();
const paraderoController = require('../controllers/ParaderoController');

// Ruta para crear un paradero
router.post('/', paraderoController.crearParadero);

// Ruta para obtener todos los paraderos
router.get('/', paraderoController.obtenerParaderos);

// Ruta para obtener un paradero por su ID
router.get('/:id', paraderoController.verParadero);

// Ruta para actualizar un paradero
router.put('/:id', paraderoController.actualizarParadero);

// Ruta para eliminar un paradero
router.delete('/:id', paraderoController.eliminarParadero);

module.exports = router;
