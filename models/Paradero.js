const mongoose = require('mongoose');

const ParaderoSchema = mongoose.Schema({
    
    nombre_paradero: {
        type: String,
        require: true
    }
   
});

module.exports = mongoose.model('Paradero', ParaderoSchema)