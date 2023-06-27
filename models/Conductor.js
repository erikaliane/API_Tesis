const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const ConductorSchema = mongoose.Schema({
    usuario: {
        type: String,
        required: true
    },
    contraseña: {
        type: String,
        required: true
    }
});

ConductorSchema.pre('save', async function(next) {
    if (!this.isModified('contraseña')) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.contraseña, salt);
        this.contraseña = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }
});

module.exports = mongoose.model('Conductor', ConductorSchema);
