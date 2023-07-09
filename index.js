const express = require('express');
const conectarDB = require('./config/db')
const config = require('./config/global');
const cors = require('cors');
require('dotenv').config();

const app = express();

//Conectar BD
conectarDB();

app.use(cors())

app.use(express.json());
// Rutas
app.use('/api/administradores', require('./routes/administradorRoutes'));
app.use('/api/asientos', require('./routes/asientoRoutes'));
app.use('/api/buses', require('./routes/busRoutes'));
app.use('/api/conductores', require('./routes/conductorRoutes'));
app.use('/api/horarios', require('./routes/horarioRoutes'));
app.use('/api/paraderos', require('./routes/paraderoRoutes'));
app.use('/api/reservas', require('./routes/reservaRoutes'));
app.use('/api/rutas', require('./routes/rutaRoutes'));
app.use('/api/ubicaciones', require('./routes/ubicacionRoutes'));
app.use('/api/usuarios', require('./routes/usuarioRoutes'));

const PORT = process.env.PORT

// Puerto de escucha
app.listen(   PORT, () => {
    console.log("El servidor por el puerto " + PORT)
})
