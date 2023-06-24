const mongoose = require('mongoose');

const HorarioSchema = mongoose.Schema({
    hora_ruta: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Horario', HorarioSchema);
