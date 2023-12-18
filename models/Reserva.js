const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
  
  Fecha: {
    type: Date,
    required: true
  },
  qr: {
    type: String,
    required: true
  },
  asientoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Asiento',
    required: true
  },
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  horarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Horario',
    required: true
  },
  confirmado: {
    type: Boolean,
    default: false  // Puedes establecer el valor predeterminado según tus necesidades
  }
});

const Reserva = mongoose.model('Reserva', reservaSchema);

module.exports = Reserva;
