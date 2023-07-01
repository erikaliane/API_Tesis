const Horario = require("../models/Horario");

exports.crearHorario = async (req, res) => {
  try {
    const horario = new Horario(req.body);

    await horario.save();
    res.send(horario);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al crear el horario');
  }
};

exports.obtenerHorarios = async (req, res) => {
  try {
    const horarios = await Horario.find();
    res.json(horarios);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al obtener los horarios');
  }
};

exports.actualizarHorario = async (req, res) => {
  try {
    const { hora_inicio, rutaId } = new Horario(req.body);
    let horario = await Horario.findById(req.params.id);

    if (!horario) {
      res.status(404).json({ msg: 'No existe el horario' });
    }

    horario.hora_inicio = hora_inicio;
    horario.rutaId = rutaId;

    horario = await Horario.findOneAndUpdate({ _id: req.params.id }, horario, { new: true });
    res.json(horario);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al actualizar el horario');
  }
};

exports.verHorario = async (req, res) => {
  try {
    let horario = await Horario.findById(req.params.id);

    if (!horario) {
      res.status(404).json({ msg: 'No existe el horario' });
    }

    res.json(horario);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al obtener el horario');
  }
};

exports.eliminarHorario = async (req, res) => {
  try {
    let horario = await Horario.findById(req.params.id);

    if (!horario) {
      res.status(404).json({ msg: 'No existe el horario' });
    }

    await Horario.deleteOne({ _id: req.params.id });

    res.json({ msg: 'El horario se ha eliminado correctamente' });
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al eliminar el horario');
  }
};
