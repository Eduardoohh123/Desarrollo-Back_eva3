const express = require('express');
const Router = express.Router();
const postulacionController = require('../controllers/postulacionController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Postulacion:
 *       type: object
 *       required:
 *         - candidato_id
 *         - oferta_laboral_id
 *       properties:
 *         id:
 *           type: integer
 *           description: ID autoincremental de la postulación (PRIMARY KEY)
 *         candidato_id:
 *           type: integer
 *           description: ID del candidato (FOREIGN KEY a Usuario)
 *         oferta_laboral_id:
 *           type: integer
 *           description: ID de la oferta laboral (FOREIGN KEY a OfertaLaboral)
 *         estado_postulacion:
 *           type: string
 *           enum: [Postulando, Revisando, 'Entrevista Psicológica', 'Entrevista Personal', Seleccionado, Descartado]
 *           description: Estado de la postulación
 *         comentario:
 *           type: string
 *           description: Comentario adicional
 *         fecha_postulacion:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación de la postulación
 *         fecha_actualizacion:
 *           type: string
 *           format: date-time
 *           description: Fecha de última actualización
 *       example:
 *         id: 1
 *         candidato_id: 2
 *         oferta_laboral_id: 5
 *         estado_postulacion: Postulando
 *         comentario: "CV recibido y en revisión"
 *         fecha_postulacion: "2024-06-06T12:00:00Z"
 *         fecha_actualizacion: "2024-06-06T12:00:00Z"
 */

/**
 * @swagger
 * tags:
 *   name: Postulaciones
 *   description: API para gestión de postulaciones
 */

/**
 * @swagger
 * /postulaciones:
 *   get:
 *     summary: Obtiene la lista de todas las postulaciones
 *     tags: [Postulaciones]
 *     responses:
 *       200:
 *         description: Lista de postulaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Postulacion'
 */
Router.get('/', postulacionController.getAll);

/**
 * @swagger
 * /postulaciones/{id}:
 *   get:
 *     summary: Obtiene una postulación por ID
 *     tags: [Postulaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la postulación
 *     responses:
 *       200:
 *         description: Postulación encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Postulacion'
 *       404:
 *         description: Postulación no encontrada
 */
Router.get('/:id', postulacionController.getById);

/**
 * @swagger
 * /postulaciones:
 *   post:
 *     summary: Crea una nueva postulación
 *     tags: [Postulaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Postulacion'
 *     responses:
 *       201:
 *         description: Postulación creada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Postulacion'
 *       500:
 *         description: Error en el servidor
 */
Router.post('/', postulacionController.create);

/**
 * @swagger
 * /postulaciones/{id}:
 *   put:
 *     summary: Actualiza una postulación por ID
 *     tags: [Postulaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la postulación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Postulacion'
 *     responses:
 *       200:
 *         description: Postulación actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Postulacion'
 *       404:
 *         description: Postulación no encontrada
 *       500:
 *         description: Error en el servidor
 */
Router.put('/:id', postulacionController.update);

/**
 * @swagger
 * /postulaciones/{id}:
 *   delete:
 *     summary: Elimina una postulación por ID
 *     tags: [Postulaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la postulación
 *     responses:
 *       200:
 *         description: Postulación eliminada
 *       404:
 *         description: Postulación no encontrada
 */
Router.delete('/:id', postulacionController.deletePostulacion);

module.exports = Router;