const Usuarios = require('../models/usuarios');

const getAll = async (req, res) => {
    try {
        const usuarios = await Usuarios.getAll();
        res.status(200).json(usuarios);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener los usuarios." });
    }
},
getById = async (req, res) => {
    try {
        const usuario = await Usuarios.getById(req.body);
        if (!usuario) {
            return res.status(404).json({ message: "Usuario no encontrado." });
        }
        res.status(200).json(usuario);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener el usuario." });
    }
},
create = async (req, res) => {
    try {
        const usuarioCreado = await Usuarios.create(req.body);
        res.status(201).json(usuarioCreado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear el usuario." });
    }
},
update = async (req, res) => {
    try {
        const usuarioActualizado = await Usuarios.update(req.body);
        if (!usuarioActualizado) {
            return res.status(404).json({ message: "Usuario no encontrado." });
        }
        res.status(200).json(usuarioActualizado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al actualizar el usuario." });
    }
},
deleteUsuario = async (req, res) => {
    try {
        const usuarioEliminado = await Usuarios.delete(req.body);
        if (!usuarioEliminado) {
            return res.status(404).json({ message: "Usuario no encontrado." });
        }
        res.status(200).json(usuarioEliminado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al eliminar el usuario." });
    }
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteUsuario
};