const db = require('../config/db');
const AntecedenteLaboral = {
    async getAll() {
        const [rows] = await db.query('SELECT * FROM antecedentelaboral');
        if (rows.length === 0) {
            return { message: "No se encontraron antecedentes laborales." };
        }
        return rows;
    },

    async getById(jsonBody) {
        const [rows] = await db.query('SELECT * FROM antecedentelaboral WHERE id = ?', [jsonBody.id]);
        return rows[0];
    },

    async create(jsonBody) {
        const [result] = await db.query(
            'INSERT INTO antecedentelaboral (candidato_id, empresa, cargo, funciones, fecha_inicio, fecha_termino) VALUES (?, ?, ?, ?, ?, ?)',
            [
                jsonBody.candidato_id,
                jsonBody.empresa,
                jsonBody.cargo,
                jsonBody.funciones || null,
                jsonBody.fecha_inicio || null,
                jsonBody.fecha_termino || null
            ]
        );
        if (result.affectedRows > 0) {
            return { message: "Antecedente laboral creado exitosamente." };
        }
        return result.insertId;
    },

    async update(jsonBody) {
        const [result] = await db.query(
            'UPDATE antecedentelaboral SET candidato_id = ?, empresa = ?, cargo = ?, funciones = ?, fecha_inicio = ?, fecha_termino = ? WHERE id = ?',
            [
                jsonBody.candidato_id,
                jsonBody.empresa,
                jsonBody.cargo,
                jsonBody.funciones,
                jsonBody.fecha_inicio,
                jsonBody.fecha_termino,
                jsonBody.id
            ]
        );
        if (result.affectedRows > 0) {
            return { message: "Antecedente laboral actualizado exitosamente." };
        }
    },

    async delete(jsonBody) {
        const [result] = await db.query('DELETE FROM antecedentelaboral WHERE id = ?', [jsonBody.id]);
        if (result.affectedRows > 0) {
            return { message: "Antecedente laboral eliminado exitosamente." };
        }
    }
};
module.exports = AntecedenteLaboral;