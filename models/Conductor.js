const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


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

// Antes de guardar el conductor, encriptar la contraseña
conductorSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.contraseña, salt);
    this.contraseña = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

const Conductor = mongoose.model('Conductores', conductorSchema);

module.exports = Conductor;
