const Conductor = require("../models/Conductor");
const bcrypt = require('bcryptjs');
const { Types } = require('mongoose');

exports.crearConductor = async (req, res) => {
  try {
    const conductor = new Conductor(req.body);

    await conductor.save();
    res.send(conductor);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al crear el conductor');
  }
};

exports.obtenerConductores = async (req, res) => {
  try {
    const conductores = await Conductor.find();
    res.json(conductores);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al obtener los conductores');
  }
};

exports.actualizarConductor = async (req, res) => {
  try {
    const { _id, perfil, usuario, contraseña, telefono, latitud, longitud} = new Conductor(req.body);
    let conductor = await Conductor.findById(req.params.id);

    if (!conductor) {
      res.status(404).json({ msg: 'No existe el conductor' });
    }

    conductor._id = _id;
    conductor.perfil = perfil;
    conductor.usuario = usuario;
    conductor.contraseña = contraseña;
    conductor.telefono = telefono;
    conductor.latitud = latitud;
    conductor.longitud = longitud;


    conductor = await Conductor.findOneAndUpdate({ _id: req.params.id }, conductor, { new: true });
    res.json(conductor);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al actualizar el conductor');
  }
};

exports.verConductor = async (req, res) => {
  try {
    let conductor = await Conductor.findById(req.params.id);

    if (!conductor) {
      res.status(404).json({ msg: 'No existe el conductor' });
    }

    res.json(conductor);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al obtener el conductor');
  }
};

exports.eliminarConductor = async (req, res) => {
  try {
    let conductor = await Conductor.findById(req.params.id);

    if (!conductor) {
      res.status(404).json({ msg: 'No existe el conductor' });
    }

    await Conductor.deleteOne({ _id: req.params.id });

    res.json({ msg: 'El conductor se ha eliminado correctamente' });
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al eliminar el conductor');
  }
};


exports.verificarCredenciales = async (req, res) => {
  const { usuario, contraseña } = req.body; // Cambiar de req.query a req.body si los datos se envían en el cuerpo de la solicitud

  try {
    const conductor = await Conductor.findOne({ usuario });

    if (!conductor) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const contraseñaValida = await bcrypt.compare(contraseña, conductor.contraseña);

    if (!contraseñaValida) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    res.json(conductor);
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor' });
  }
};



exports.actualizarUbicacion = async (req, res) => {
  try {
    const { username } = req.params;
    const { latitud, longitud } = req.body;

    const conductor = await Conductor.findOneAndUpdate(
      { usuario: username },
      { latitud, longitud },
      { new: true }
    );

    if (!conductor) {
      return res.status(404).json({ msg: 'No se encontró el conductor' });
    }

    res.json(conductor);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al actualizar la ubicación del conductor');
  }
};
