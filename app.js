const express = require('express');
const app = express();

// Configuración y middleware necesario...

// Rutas
const authRoutes = require('./routes/authRoutes');

// Middleware global...
app.use('/auth', authRoutes);
// Agrega más rutas y controladores según tus necesidades...

// Middleware global adicional...

// Inicialización del servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});
