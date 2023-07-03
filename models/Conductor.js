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
  nombre:{
    type:String,
    required: true
  },
  apellido:{
    type:String,
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
  latitud: {
    type: String
  },
  longitud: {
    type: String
  }
});

const Conductor = mongoose.model('Conductores', conductorSchema);

module.exports = Conductor;
