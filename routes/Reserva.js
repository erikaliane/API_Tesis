const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/ReservaController');

// Ruta para crear una reserva
router.post('/', reservaController.crearReserva);

// Ruta para obtener todas las reservas
router.get('/', reservaController.obtenerReservas);

// Ruta para obtener una reserva por su ID
router.get('/:id', reservaController.verReserva);

// Ruta para actualizar una reserva
router.put('/:id', reservaController.actualizarReserva);

// Ruta para eliminar una reserva
router.delete('/:id', reservaController.eliminarReserva);

module.exports = router;
