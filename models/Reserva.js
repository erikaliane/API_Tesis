const mongoose = require('mongoose');

const ReservaSchema = mongoose.Schema({
    
    alumno: {
        type: String,
        require: true
    },
    numero_asiento: {
        type: String,
        require: true
    },
    
   
});

module.exports = mongoose.model('Reserva', ReservaSchema)