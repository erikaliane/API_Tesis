const Administrador = require('../models/Administrador');

// Controlador para crear un administrador
exports.crearAdministrador = async (req, res) => {
  try {
    const { usuario, perfil, contraseña } = req.body;

    const administrador = new Administrador({
      usuario,
      perfil,
      contraseña
    });

    await administrador.save();

    res.status(201).json(administrador);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al crear el administrador' });
  }
};

// Controlador para obtener todos los administradores
exports.obtenerAdministradores = async (req, res) => {
  try {
    const administradores = await Administrador.find();

    res.json(administradores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener los administradores' });
  }
};

// Controlador para obtener un administrador por su ID
exports.obtenerAdministradorPorId = async (req, res) => {
  try {
    const administrador = await Administrador.findById(req.params.id);

    if (!administrador) {
      return res.status(404).json({ error: 'Administrador no encontrado' });
    }

    res.json(administrador);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener el administrador' });
  }
};

// Controlador para actualizar un administrador
exports.actualizarAdministrador = async (req, res) => {
  try {
    const { usuario, perfil, contraseña } = req.body;

    let administrador = await Administrador.findById(req.params.id);

    if (!administrador) {
      return res.status(404).json({ error: 'Administrador no encontrado' });
    }

    administrador.usuario = usuario;
    administrador.perfil = perfil;
    administrador.contraseña = contraseña;

    await administrador.save();

    res.json(administrador);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al actualizar el administrador' });
  }
};

// Controlador para eliminar un administrador
exports.eliminarAdministrador = async (req, res) => {
  try {
    const administrador = await Administrador.findById(req.params.id);

    if (!administrador) {
      return res.status(404).json({ error: 'Administrador no encontrado' });
    }

    await administrador.remove();

    res.json({ message: 'Administrador eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al eliminar el administrador' });
  }
};
