const Reserva = require("../models/Reserva");

exports.crearReserva = async (req, res) => {
  try {
    const reserva = new Reserva(req.body);

    await reserva.save();
    res.send(reserva);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al crear la reserva');
  }
};

exports.obtenerReservas = async (req, res) => {
  try {
    const reservas = await Reserva.find();
    res.json(reservas);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al obtener las reservas');
  }
};

exports.actualizarReserva = async (req, res) => {
  try {
    const { Fecha, qr, asientoId, usuarioId, horarioId } = new Reserva(req.body);
    let reserva = await Reserva.findById(req.params.id);

    if (!reserva) {
      res.status(404).json({ msg: 'No existe la reserva' });
    }

    reserva.Fecha = Fecha;
    reserva.qr = qr;
    reserva.asientoId = asientoId;
    reserva.usuarioId = usuarioId;
    reserva.horarioId = horarioId;

    reserva = await Reserva.findOneAndUpdate({ _id: req.params.id }, reserva, { new: true });
    res.json(reserva);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al actualizar la reserva');
  }
};

exports.verReserva = async (req, res) => {
  try {
    let reserva = await Reserva.findById(req.params.id);

    if (!reserva) {
      res.status(404).json({ msg: 'No existe la reserva' });
    }

    res.json(reserva);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al obtener la reserva');
  }
};

exports.eliminarReserva = async (req, res) => {
  try {
    let reserva = await Reserva.findById(req.params.id);

    if (!reserva) {
      res.status(404).json({ msg: 'No existe la reserva' });
    }

    await Reserva.deleteOne({ _id: req.params.id });

    res.json({ msg: 'La reserva se ha eliminado correctamente' });
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al eliminar la reserva');
  }
};
