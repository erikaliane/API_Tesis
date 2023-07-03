const mongoose = require('mongoose');

const paraderoSchema = new mongoose.Schema({
  
  nombre_paradero: {
    type: String,
    required: true
  },
  latitud: {
    type: String,
    required: true
  },
  longitud: {
    type: String,
    required: true
  },
  rutaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ruta',
    required: true
  }
});

const Paradero = mongoose.model('Paradero', paraderoSchema);
module.exports = Paradero;
