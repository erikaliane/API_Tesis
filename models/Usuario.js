const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    
    email: {
        type: String,
        require: true
    },
    usuario: {
        type: String,
        require: true
    },
    
    perfil: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Usuario', UsuarioSchema)