const Asiento = require("../models/Asiento");

exports.crearAsiento = async (req, res) => {
  try {
    const asiento = new Asiento(req.body);

    await asiento.save();
    res.send(asiento);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al crear el asiento');
  }
};

exports.obtenerAsientos = async (req, res) => {
  try {
    const asientos = await Asiento.find();
    res.json(asientos);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al obtener los asientos');
  }
};

exports.actualizarAsiento = async (req, res) => {
  try {
    const { _id, fila, n_asiento, busId } = new Asiento(req.body);
    let asiento = await Asiento.findById(req.params.id);

    if (!asiento) {
      res.status(404).json({ msg: 'No existe el asiento' });
    }

    asiento._id = _id;
    asiento.fila = fila;
    asiento.n_asiento = n_asiento;
    asiento.busId = busId;

    asiento = await Asiento.findOneAndUpdate({ _id: req.params.id }, asiento, { new: true });
    res.json(asiento);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al actualizar el asiento');
  }
};

exports.verAsiento = async (req, res) => {
  try {
    let asiento = await Asiento.findById(req.params.id);

    if (!asiento) {
      res.status(404).json({ msg: 'No existe el asiento' });
    }

    res.json(asiento);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al obtener el asiento');
  }
};

exports.eliminarAsiento = async (req, res) => {
  try {
    let asiento = await Asiento.findById(req.params.id);

    if (!asiento) {
      res.status(404).json({ msg: 'No existe el asiento' });
    }

    await Asiento.deleteOne({ _id: req.params.id });

    res.json({ msg: 'El asiento se ha eliminado correctamente' });
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al eliminar el asiento');
  }
};
