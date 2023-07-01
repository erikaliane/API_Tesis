const Ubicacion = require("../models/Ubicacion");

exports.crearUbicacion = async (req, res) => {
  try {
    const ubicacion = new Ubicacion(req.body);

    await ubicacion.save();
    res.send(ubicacion);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al crear la ubicación');
  }
};

exports.obtenerUbicaciones = async (req, res) => {
  try {
    const ubicaciones = await Ubicacion.find();
    res.json(ubicaciones);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al obtener las ubicaciones');
  }
};

exports.actualizarUbicacion = async (req, res) => {
  try {
    const { latitud, longitud, busId, conductorId } = new Ubicacion(req.body);
    let ubicacion = await Ubicacion.findById(req.params.id);

    if (!ubicacion) {
      res.status(404).json({ msg: 'No existe la ubicación' });
    }

    ubicacion.latitud = latitud;
    ubicacion.longitud = longitud;
    ubicacion.busId = busId;
    ubicacion.conductorId = conductorId;

    ubicacion = await Ubicacion.findOneAndUpdate({ _id: req.params.id }, ubicacion, { new: true });
    res.json(ubicacion);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al actualizar la ubicación');
  }
};

exports.verUbicacion = async (req, res) => {
  try {
    let ubicacion = await Ubicacion.findById(req.params.id);

    if (!ubicacion) {
      res.status(404).json({ msg: 'No existe la ubicación' });
    }

    res.json(ubicacion);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al obtener la ubicación');
  }
};

exports.eliminarUbicacion = async (req, res) => {
  try {
    let ubicacion = await Ubicacion.findById(req.params.id);

    if (!ubicacion) {
      res.status(404).json({ msg: 'No existe la ubicación' });
    }

    await Ubicacion.deleteOne({ _id: req.params.id });

    res.json({ msg: 'La ubicación se ha eliminado correctamente' });
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al eliminar la ubicación');
  }
};
