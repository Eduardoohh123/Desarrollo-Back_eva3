const db = require('../config/db');
const Postulacion = {
    async getAll() {
        const [rows] = await db.query('SELECT * FROM postulacion');
        if (rows.length === 0) {
            return { message: "No se encontraron postulaciones." };
        }
        return rows;
    },

    async getById(jsonBody) {
        const [rows] = await db.query('SELECT * FROM postulacion WHERE id = ?', [jsonBody.id]);
        return rows[0];
    },

    async create(jsonBody) {
        const [result] = await db.query(
            `INSERT INTO postulacion 
            (candidato_id, oferta_laboral_id, estado_postulacion, comentario) 
            VALUES (?, ?, ?, ?)`,
            [
                jsonBody.candidato_id,
                jsonBody.oferta_laboral_id,
                jsonBody.estado_postulacion || 'Postulando',
                jsonBody.comentario || null
            ]
        );
        if (result.affectedRows > 0) {
            return { message: "Postulación creada exitosamente." };
        }
        return result.insertId;
    },

    async update(jsonBody) {
        const [result] = await db.query(
            `UPDATE postulacion 
            SET candidato_id = ?, oferta_laboral_id = ?, estado_postulacion = ?, comentario = ? 
            WHERE id = ?`,
            [
                jsonBody.candidato_id,
                jsonBody.oferta_laboral_id,
                jsonBody.estado_postulacion,
                jsonBody.comentario,
                jsonBody.id
            ]
        );
        if (result.affectedRows > 0) {
            return { message: "Postulación actualizada exitosamente." };
        }
    },

    async delete(jsonBody) {
        const [result] = await db.query('DELETE FROM postulacion WHERE id = ?', [jsonBody.id]);
        if (result.affectedRows > 0) {
            return { message: "Postulación eliminada exitosamente." };
        }
    }
};
module.exports = Postulacion;