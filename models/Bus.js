const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  
  cant_asiento: {
    type: Number,
    required: true
  },
  placa: {
    type: String,
    required: true
  },
  aforo: {
    type: String,
    required: true
  },
  rutaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ruta',
    required: true
  }
});

const Bus = mongoose.model('Bus', busSchema);

module.exports = Bus;
