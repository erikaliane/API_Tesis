const mongoose = require('mongoose');

const RutaSchema = mongoose.Schema({
    
    nombre_paradero: {
        type: String,
        require: true
    },
    
    
   
});

module.exports = mongoose.model('Ruta', UsuarioSchema)