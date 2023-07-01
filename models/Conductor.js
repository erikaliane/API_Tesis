const mongoose = require('mongoose');

const conductorSchema = new mongoose.Schema({
  perfil: {
    type: String,
    required: true
  },
  usuario: {
    type: String,
    required: true
  },
  contraseña: {
    type: String,
    required: true
  },
  telefono: {
    type: String,
    required: true
  },
  latitud: String,
  longitud: String,
  administradorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Administrador'
  }
});

const Conductor = mongoose.model('Conductor', conductorSchema);

module.exports = Conductor;
