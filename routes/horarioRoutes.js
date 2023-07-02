const express = require('express');
const router = express.Router();
const horarioController = require('../controllers/HorarioController');

// Ruta para crear un horario
router.post('/', horarioController.crearHorario);

// Ruta para obtener todos los horarios
router.get('/', horarioController.obtenerHorarios);

// Ruta para obtener un horario por su ID
router.get('/:id', horarioController.verHorario);

// Ruta para actualizar un horario
router.put('/:id', horarioController.actualizarHorario);

// Ruta para eliminar un horario
router.delete('/:id', horarioController.eliminarHorario);

module.exports = router;
