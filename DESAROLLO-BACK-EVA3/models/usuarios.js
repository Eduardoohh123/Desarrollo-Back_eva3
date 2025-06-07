const db = require('../config/db');
const Usuarios = {
 async getAll() {
        const [rows] = await db.query('SELECT * FROM usuario');
        if (rows.length === 0) {
            return { message: "No se encontraron usuarios." };
        }
        return rows;
    },

    async getById(jsonBody) {
        const [rows] = await db.query('SELECT * FROM usuario WHERE id = ?', [jsonBody.id]);
        return rows[0];
    },

    async create(jsonBody) {
        const [result] = await db.query('INSERT INTO usuario (nombre, email, contraseña) VALUES (?, ?, ?)', [jsonBody.nombre, jsonBody.email, jsonBody.password]);
        if (result.affectedRows > 0) {
            return { message: "Usuario creado exitosamente." };
        }
        return result.insertId;
    },

    async update(jsonBody) {
        const [result] = await db.query('UPDATE usuario SET nombre = ?, email = ?, contraseña = ? WHERE id = ?', [jsonBody.nombre, jsonBody.email, jsonBody.password, jsonBody.id]);
        if (result.affectedRows > 0) {
            return { message: "Usuario actualizado exitosamente." };
        }
    },

    async delete(jsonBody) {
        const [result] = await db.query('DELETE FROM usuario WHERE id = ?', [jsonBody.id]);
        if (result.affectedRows > 0) {
            return { message: "Usuario eliminado exitosamente." };
        }
    }
};
module.exports = Usuarios;