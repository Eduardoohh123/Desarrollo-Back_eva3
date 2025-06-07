const db = require('../config/db');
const OfertaLaboral = {
    async getAll() {
        const [rows] = await db.query('SELECT * FROM ofertalaboral');
        if (rows.length === 0) {
            return { message: "No se encontraron ofertas laborales." };
        }
        return rows;
    },

    async getById(jsonBody) {
        const [rows] = await db.query('SELECT * FROM ofertalaboral WHERE id = ?', [jsonBody.id]);
        return rows[0];
    },

    async create(jsonBody) {
        const [result] = await db.query(
            `INSERT INTO ofertalaboral 
            (titulo, descripcion, ubicacion, salario, tipo_contrato, fecha_publicacion, fecha_cierre, estado, reclutador_id) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                jsonBody.titulo,
                jsonBody.descripcion,
                jsonBody.ubicacion,
                jsonBody.salario,
                jsonBody.tipo_contrato || 'Indefinido',
                jsonBody.fecha_publicacion || null,
                jsonBody.fecha_cierre || null,
                jsonBody.estado || 'Vigente',
                jsonBody.reclutador_id
            ]
        );
        if (result.affectedRows > 0) {
            return { message: "Oferta laboral creada exitosamente." };
        }
        return result.insertId;
    },

    async update(jsonBody) {
        const [result] = await db.query(
            `UPDATE ofertalaboral 
            SET titulo = ?, descripcion = ?, ubicacion = ?, salario = ?, tipo_contrato = ?, fecha_publicacion = ?, fecha_cierre = ?, estado = ?, reclutador_id = ?
            WHERE id = ?`,
            [
                jsonBody.titulo,
                jsonBody.descripcion,
                jsonBody.ubicacion,
                jsonBody.salario,
                jsonBody.tipo_contrato,
                jsonBody.fecha_publicacion,
                jsonBody.fecha_cierre,
                jsonBody.estado,
                jsonBody.reclutador_id,
                jsonBody.id
            ]
        );
        if (result.affectedRows > 0) {
            return { message: "Oferta laboral actualizada exitosamente." };
        }
    },

    async delete(jsonBody) {
        const [result] = await db.query('DELETE FROM ofertalaboral WHERE id = ?', [jsonBody.id]);
        if (result.affectedRows > 0) {
            return { message: "Oferta laboral eliminada exitosamente." };
        }
    }
};
module.exports = OfertaLaboral;