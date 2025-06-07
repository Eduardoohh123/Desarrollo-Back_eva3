const OfertaLaboral = require('../models/ofertalaboral');

const getAll = async (req, res) => {
    try {
        const ofertas = await OfertaLaboral.getAll();
        res.status(200).json(ofertas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener las ofertas laborales." });
    }
},
getById = async (req, res) => {
    try {
        const oferta = await OfertaLaboral.getById(req.params.id);
        if (!oferta) {
            return res.status(404).json({ message: "Oferta laboral no encontrada." });
        }
        res.status(200).json(oferta);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener la oferta laboral." });
    }
},
create = async (req, res) => {
    try {
        const ofertaCreada = await OfertaLaboral.create(req.body);
        res.status(201).json(ofertaCreada);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear la oferta laboral." });
    }
},
update = async (req, res) => {
    try {
        const ofertaActualizada = await OfertaLaboral.update(req.params.id, req.body);
        if (!ofertaActualizada) {
            return res.status(404).json({ message: "Oferta laboral no encontrada." });
        }
        res.status(200).json(ofertaActualizada);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al actualizar la oferta laboral." });
    }
},
deleteOfertaLaboral = async (req, res) => {
    try {
        const ofertaEliminada = await OfertaLaboral.delete(req.params.id);
        if (!ofertaEliminada) {
            return res.status(404).json({ message: "Oferta laboral no encontrada." });
        }
        res.status(200).json(ofertaEliminada);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al eliminar la oferta laboral." });
    }
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteOfertaLaboral
};