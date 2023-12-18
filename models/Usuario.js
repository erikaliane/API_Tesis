const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  id_user: {
    type: String,
    required: true,
    unique: true, // Asegura que cada idAutogenerado sea único
    default: () => Math.random().toString(36).substr(2, 9) // Genera un valor por defecto único
  },
  
  email: {
    type: String,
    required: true
  },
  perfil: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
