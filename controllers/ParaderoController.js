const Paradero = require("../models/Paradero");

exports.crearParadero = async (req, res) => {
  try {
    const paradero = new Paradero(req.body);

    await paradero.save();
    res.send(paradero);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al crear el paradero');
  }
};

exports.obtenerParaderos = async (req, res) => {
  try {
    const paraderos = await Paradero.find();
    res.json(paraderos);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al obtener los paraderos');
  }
};

exports.actualizarParadero = async (req, res) => {
  try {
    const { nombre_paradero, latitud, longitud, rutaId } = new Paradero(req.body);
    let paradero = await Paradero.findById(req.params.id);

    if (!paradero) {
      res.status(404).json({ msg: 'No existe el paradero' });
    }

    paradero.nombre_paradero = nombre_paradero;
    paradero.latitud = latitud;
    paradero.longitud = longitud;
    paradero.rutaId = rutaId;

    paradero = await Paradero.findOneAndUpdate({ _id: req.params.id }, paradero, { new: true });
    res.json(paradero);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al actualizar el paradero');
  }
};

exports.verParadero = async (req, res) => {
  try {
    let paradero = await Paradero.findById(req.params.id);

    if (!paradero) {
      res.status(404).json({ msg: 'No existe el paradero' });
    }

    res.json(paradero);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al obtener el paradero');
  }
};

exports.eliminarParadero = async (req, res) => {
  try {
    let paradero = await Paradero.findById(req.params.id);

    if (!paradero) {
      res.status(404).json({ msg: 'No existe el paradero' });
    }

    await Paradero.deleteOne({ _id: req.params.id });

    res.json({ msg: 'El paradero se ha eliminado correctamente' });
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al eliminar el paradero');
  }
};
