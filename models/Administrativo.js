const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const AdministrativoSchema = mongoose.Schema({
    usuario: {
        type: String,
        required: true
    },
    contraseña: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    }
});

// Middleware para encriptar la contraseña antes de guardarla
AdministrativoSchema.pre('save', async function(next) {
    try {
        // Generar el salt (valor aleatorio para el hashing)
        const salt = await bcrypt.genSalt(10);

        // Hash de la contraseña
        const hashedPassword = await bcrypt.hash(this.contraseña, salt);

        // Asignar la contraseña encriptada al campo
        this.contraseña = hashedPassword;

        next();
    } catch (error) {
        return next(error);
    }
});

module.exports = mongoose.model('Administrativo', AdministrativoSchema);
