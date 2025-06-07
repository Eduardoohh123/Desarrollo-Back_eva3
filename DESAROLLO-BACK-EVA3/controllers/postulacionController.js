const Postulacion = require('../models/postulacion.js');

const getAll = async (req, res) => {
    try {
        const postulaciones = await Postulacion.getAll();
        res.status(200).json(postulaciones);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener las postulaciones." });
    }
};

const getById = async (req, res) => {
    try {
        const postulacion = await Postulacion.getById(req.params.id);
        if (!postulacion) {
            return res.status(404).json({ message: "Postulación no encontrada." });
        }
        res.status(200).json(postulacion);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener la postulación." });
    }
};

const create = async (req, res) => {
    try {
        const postulacionCreada = await Postulacion.create(req.body);
        res.status(201).json(postulacionCreada);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear la postulación." });
    }
};

const update = async (req, res) => {
    try {
        const postulacionActualizada = await Postulacion.update(req.params.id, req.body);
        if (!postulacionActualizada) {
            return res.status(404).json({ message: "Postulación no encontrada." });
        }
        res.status(200).json(postulacionActualizada);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al actualizar la postulación." });
    }
};

const deletePostulacion = async (req, res) => {
    try {
        const postulacionEliminada = await Postulacion.delete(req.params.id);
        if (!postulacionEliminada) {
            return res.status(404).json({ message: "Postulación no encontrada." });
        }
        res.status(200).json(postulacionEliminada);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al eliminar la postulación." });
    }
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    deletePostulacion
};