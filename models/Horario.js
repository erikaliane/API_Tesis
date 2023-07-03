const mongoose = require('mongoose');

const horarioSchema = new mongoose.Schema({
  
  hora_inicio: {
    type: String,
    required: true
  },
  rutaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ruta',
    required: true
  }
});

const Horario = mongoose.model('Horario', horarioSchema);

module.exports = Horario;
