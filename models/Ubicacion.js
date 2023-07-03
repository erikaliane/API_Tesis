const mongoose = require('mongoose');

const ubicacionSchema = new mongoose.Schema({
  
  latitud: {
    type: String,
    required: true
  },
  longitud: {
    type: String,
    required: true
  },
  busId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bus',
    required: true
  },
  conductorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Conductor',
    required: true
  }
});

const Ubicacion = mongoose.model('Ubicaciones', ubicacionSchema);

module.exports = Ubicacion;
