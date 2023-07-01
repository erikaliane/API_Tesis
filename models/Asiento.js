const mongoose = require('mongoose');

const asientoSchema = new mongoose.Schema({
  fila: {
    type: String,
    required: true
  },
  n_asiento: {
    type: String,
    required: true
  },
  busId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bus',
    required: true
  }
});

const Asiento = mongoose.model('Asiento', asientoSchema);

module.exports = Asiento;
