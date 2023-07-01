const Bus = require("../models/Bus");

exports.crearBus = async (req, res) => {
  try {
    const bus = new Bus(req.body);

    await bus.save();
    res.send(bus);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al crear el bus');
  }
};

exports.obtenerBuses = async (req, res) => {
  try {
    const buses = await Bus.find();
    res.json(buses);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al obtener los buses');
  }
};

exports.actualizarBus = async (req, res) => {
  try {
    const { _id, cant_asiento, placa, aforo, rutaId } = new Bus(req.body);
    let bus = await Bus.findById(req.params.id);

    if (!bus) {
      res.status(404).json({ msg: 'No existe el bus' });
    }

    bus._id = _id;
    bus.cant_asiento = cant_asiento;
    bus.placa = placa;
    bus.aforo = aforo;
    bus.rutaId = rutaId;

    bus = await Bus.findOneAndUpdate({ _id: req.params.id }, bus, { new: true });
    res.json(bus);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al actualizar el bus');
  }
};

exports.verBus = async (req, res) => {
  try {
    let bus = await Bus.findById(req.params.id);

    if (!bus) {
      res.status(404).json({ msg: 'No existe el bus' });
    }

    res.json(bus);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al obtener el bus');
  }
};

exports.eliminarBus = async (req, res) => {
  try {
    let bus = await Bus.findById(req.params.id);

    if (!bus) {
      res.status(404).json({ msg: 'No existe el bus' });
    }

    await Bus.deleteOne({ _id: req.params.id });

    res.json({ msg: 'El bus se ha eliminado correctamente' });
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al eliminar el bus');
  }
};
