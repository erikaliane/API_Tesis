const express = require('express');
const conectarDB = require('./config/db')
const config = require('./config/global');
const cors = require('cors');

const app = express();

//Conectar BD
conectarDB();

app.use(cors())

app.use(express.json());
// Rutas
app.use('/api/asientos', require('./routes/Asiento'));
app.use('/api/buses', require('./routes/Bus'));
app.use('/api/conductores', require('./routes/Conductor'));
app.use('/api/horarios', require('./routes/Horario'));
app.use('/api/paraderos', require('./routes/Paradero'));
app.use('/api/reservas', require('./routes/Reserva'));
app.use('/api/rutas', require('./routes/Ruta'));
app.use('/api/ubicaciones', require('./routes/Ubicacion'));

// Puerto de escucha
app.listen(config.port, () => {
    console.log('El servidor por el puerto 4000')
})
