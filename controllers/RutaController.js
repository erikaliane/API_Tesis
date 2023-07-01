const Ruta = require("../models/Ruta");

exports.crearRuta = async (req, res) => {
  try {
    const ruta = new Ruta(req.body);

    await ruta.save();
    res.send(ruta);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al crear la ruta');
  }
};

exports.obtenerRutas = async (req, res) => {
  try {
    const rutas = await Ruta.find();
    res.json(rutas);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al obtener las rutas');
  }
};

exports.actualizarRuta = async (req, res) => {
  try {
    const { punto_inicio, punto_destino } = new Ruta(req.body);
    let ruta = await Ruta.findById(req.params.id);

    if (!ruta) {
      res.status(404).json({ msg: 'No existe la ruta' });
    }

    ruta.punto_inicio = punto_inicio;
    ruta.punto_destino = punto_destino;

    ruta = await Ruta.findOneAndUpdate({ _id: req.params.id }, ruta, { new: true });
    res.json(ruta);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al actualizar la ruta');
  }
};

exports.verRuta = async (req, res) => {
  try {
    let ruta = await Ruta.findById(req.params.id);

    if (!ruta) {
      res.status(404).json({ msg: 'No existe la ruta' });
    }

    res.json(ruta);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al obtener la ruta');
  }
};

exports.eliminarRuta = async (req, res) => {
  try {
    let ruta = await Ruta.findById(req.params.id);

    if (!ruta) {
      res.status(404).json({ msg: 'No existe la ruta' });
    }

    await Ruta.deleteOne({ _id: req.params.id });

    res.json({ msg: 'La ruta se ha eliminado correctamente' });
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al eliminar la ruta');
  }
};
