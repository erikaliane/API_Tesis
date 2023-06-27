const mongoose = require('mongoose');

const TablaSchema = mongoose.Schema({
    id_asiento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Asiento',
        required: true
    },
    n_asiento: {
        type: Number,
        required: true
    },
    id_conductor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conductor',
        required: true
    },
    id_ruta: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ruta',
        required: true
    }
});

module.exports = mongoose.model('Tabla', TablaSchema);
