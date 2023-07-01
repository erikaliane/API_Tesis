const Usuario = require("../models/Usuario");

exports.crearUsuario = async (req, res) => {
  try {
    const usuario = new Usuario(req.body);

    await usuario.save();
    res.send(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al crear el usuario');
  }
};

exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al obtener los usuarios');
  }
};

exports.actualizarUsuario = async (req, res) => {
  try {
    const { email, perfil, nombre } = new Usuario(req.body);
    let usuario = await Usuario.findById(req.params.id);

    if (!usuario) {
      res.status(404).json({ msg: 'No existe el usuario' });
    }

    usuario.email = email;
    usuario.perfil = perfil;
    usuario.nombre = nombre;

    usuario = await Usuario.findOneAndUpdate({ _id: req.params.id }, usuario, { new: true });
    res.json(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al actualizar el usuario');
  }
};

exports.verUsuario = async (req, res) => {
  try {
    let usuario = await Usuario.findById(req.params.id);

    if (!usuario) {
      res.status(404).json({ msg: 'No existe el usuario' });
    }

    res.json(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al obtener el usuario');
  }
};

exports.eliminarUsuario = async (req, res) => {
  try {
    let usuario = await Usuario.findById(req.params.id);

    if (!usuario) {
      res.status(404).json({ msg: 'No existe el usuario' });
    }

    await Usuario.deleteOne({ _id: req.params.id });

    res.json({ msg: 'El usuario se ha eliminado correctamente' });
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al eliminar el usuario');
  }
};
