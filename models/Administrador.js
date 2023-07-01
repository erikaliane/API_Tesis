const mongoose = require('mongoose');

const administradorSchema = new mongoose.Schema({
  usuario: {
    type: String,
    required: true
  },
  perfil: {
    type: String,
    required: true
  },
  contraseña: {
    type: String,
    required: true
  }
});

const Administrador = mongoose.model('Administrador', administradorSchema);

module.exports = Administrador;
