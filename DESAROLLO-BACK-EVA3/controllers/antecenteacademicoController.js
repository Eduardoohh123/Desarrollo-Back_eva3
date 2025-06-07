const AntecedenteAcademico = require('../models/antecedenteacademico');

const getAll = async (req, res) => {
    try {
        const antecedentes = await AntecedenteAcademico.getAll();
        res.status(200).json(antecedentes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener los antecedentes académicos." });
    }
},
getById = async (req, res) => {
    try {
        const antecedente = await AntecedenteAcademico.getById(req.body);
        if (!antecedente) {
            return res.status(404).json({ message: "Antecedente académico no encontrado." });
        }
        res.status(200).json(antecedente);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener el antecedente académico." });
    }
},
create = async (req, res) => {
    try {
        const antecedenteCreado = await AntecedenteAcademico.create(req.body);
        res.status(201).json(antecedenteCreado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear el antecedente académico." });
    }
},
update = async (req, res) => {
    try {
        const antecedenteActualizado = await AntecedenteAcademico.update(req.body);
        if (!antecedenteActualizado) {
            return res.status(404).json({ message: "Antecedente académico no encontrado." });
        }
        res.status(200).json(antecedenteActualizado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al actualizar el antecedente académico." });
    }
},
deleteAntecedenteAcademico = async (req, res) => {
    try {
        const antecedenteEliminado = await AntecedenteAcademico.delete(req.body);
        if (!antecedenteEliminado) {
            return res.status(404).json({ message: "Antecedente académico no encontrado." });
        }
        res.status(200).json(antecedenteEliminado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al eliminar el antecedente académico." });
    }
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteAntecedenteAcademico
};