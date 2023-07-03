const mongoose = require('mongoose');

const rutaSchema = new mongoose.Schema({
  
  punto_inicio: {
    type: String,
    required: true
  },
  punto_destino: {
    type: String,
    required: true
  }
});

const Ruta = mongoose.model('Ruta', rutaSchema);

module.exports = Ruta;
