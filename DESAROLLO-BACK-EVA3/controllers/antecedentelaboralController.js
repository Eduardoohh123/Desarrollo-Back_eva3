const AntecedenteLaboral = require('../models/antecedentelaboral');

const getAll = async (req, res) => {
    try {
        const antecedentes = await AntecedenteLaboral.getAll();
        res.status(200).json(antecedentes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener los antecedentes laborales." });
    }
},
getById = async (req, res) => {
    try {
        const antecedente = await AntecedenteLaboral.getById(req.body);
        if (!antecedente) {
            return res.status(404).json({ message: "Antecedente laboral no encontrado." });
        }
        res.status(200).json(antecedente);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener el antecedente laboral." });
    }
},
create = async (req, res) => {
    try {
        const antecedenteCreado = await AntecedenteLaboral.create(req.body);
        res.status(201).json(antecedenteCreado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear el antecedente laboral." });
    }
},
update = async (req, res) => {
    try {
        const antecedenteActualizado = await AntecedenteLaboral.update(req.body);
        if (!antecedenteActualizado) {
            return res.status(404).json({ message: "Antecedente laboral no encontrado." });
        }
        res.status(200).json(antecedenteActualizado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al actualizar el antecedente laboral." });
    }
},
deleteAntecedenteLaboral = async (req, res) => {
    try {
        const antecedenteEliminado = await AntecedenteLaboral.delete(req.body);
        if (!antecedenteEliminado) {
            return res.status(404).json({ message: "Antecedente laboral no encontrado." });
        }
        res.status(200).json(antecedenteEliminado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al eliminar el antecedente laboral." });
    }
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteAntecedenteLaboral
};