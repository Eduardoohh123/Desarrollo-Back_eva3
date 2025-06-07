const db = require('../config/db');
const AntecedenteAcademico = {
    async getAll() {
        const [rows] = await db.query('SELECT * FROM antecedenteacademico');
        if (rows.length === 0) {
            return { message: "No se encontraron antecedentes académicos." };
        }
        return rows;
    },

    async getById(jsonBody) {
        const [rows] = await db.query('SELECT * FROM antecedenteacademico WHERE id = ?', [jsonBody.id]);
        return rows[0];
    },

    async create(jsonBody) {
        const [result] = await db.query(
            'INSERT INTO antecedenteacademico (candidato_id, institucion, titulo_obtenido, anio_ingreso, anio_egreso) VALUES (?, ?, ?, ?, ?)',
            [
                jsonBody.candidato_id,
                jsonBody.institucion,
                jsonBody.titulo_obtenido,
                jsonBody.anio_ingreso || null,
                jsonBody.anio_egreso || null
            ]
        );
        if (result.affectedRows > 0) {
            return { message: "Antecedente académico creado exitosamente." };
        }
        return result.insertId;
    },

    async update(jsonBody) {
        const [result] = await db.query(
            'UPDATE antecedenteacademico SET candidato_id = ?, institucion = ?, titulo_obtenido = ?, anio_ingreso = ?, anio_egreso = ? WHERE id = ?',
            [
                jsonBody.candidato_id,
                jsonBody.institucion,
                jsonBody.titulo_obtenido,
                jsonBody.anio_ingreso,
                jsonBody.anio_egreso,
                jsonBody.id
            ]
        );
        if (result.affectedRows > 0) {
            return { message: "Antecedente académico actualizado exitosamente." };
        }
    },

    async delete(jsonBody) {
        const [result] = await db.query('DELETE FROM antecedenteacademico WHERE id = ?', [jsonBody.id]);
        if (result.affectedRows > 0) {
            return { message: "Antecedente académico eliminado exitosamente." };
        }
    }
};
module.exports = AntecedenteAcademico;