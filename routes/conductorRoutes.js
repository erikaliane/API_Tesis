const express = require('express');
const router = express.Router();
const conductorController = require('../controllers/ConductorController');

// Ruta para crear un conductor
router.post('/', conductorController.crearConductor);

// Ruta para obtener todos los conductores
router.get('/', conductorController.obtenerConductores);

// Ruta para obtener un conductor por su ID
router.get('/:id', conductorController.verConductor);

// Ruta para actualizar un conductor
router.put('/:id', conductorController.actualizarConductor);

// Ruta para eliminar un conductor
router.delete('/:id', conductorController.eliminarConductor);
router.post('/login', conductorController.verificarCredenciales);


router.put('/ubicacion/:username', conductorController.actualizarUbicacion);


module.exports = router;
