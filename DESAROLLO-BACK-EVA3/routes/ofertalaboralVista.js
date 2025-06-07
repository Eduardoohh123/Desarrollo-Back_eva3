const express = require('express');
const Router = express.Router();
const ofertalaboralController = require('../controllers/ofertalaboralController');

/**
 * @swagger
 * components:
 *   schemas:
 *     OfertaLaboral:
 *       type: object
 *       required:
 *         - titulo
 *         - reclutador_id
 *       properties:
 *         id:
 *           type: integer
 *           description: ID autoincremental de la oferta laboral (PRIMARY KEY)
 *         titulo:
 *           type: string
 *           maxLength: 200
 *           description: Título de la oferta laboral (obligatorio)
 *         descripcion:
 *           type: string
 *           description: Descripción de la oferta laboral
 *         ubicacion:
 *           type: string
 *           maxLength: 150
 *           description: Ubicación de la oferta laboral
 *         salario:
 *           type: number
 *           format: float
 *           description: Salario ofrecido
 *         tipo_contrato:
 *           type: string
 *           enum: [Indefinido, Temporal, Honorarios, Práctica]
 *           description: Tipo de contrato (por defecto 'Indefinido')
 *         fecha_publicacion:
 *           type: string
 *           format: date
 *           description: Fecha de publicación (por defecto la actual)
 *         fecha_cierre:
 *           type: string
 *           format: date
 *           description: Fecha de cierre de la oferta
 *         estado:
 *           type: string
 *           enum: [Vigente, Cerrada, Baja]
 *           description: Estado de la oferta (por defecto 'Vigente')
 *         reclutador_id:
 *           type: integer
 *           description: ID del reclutador (FOREIGN KEY a Usuario)
 *       example:
 *         id: 1
 *         titulo: Desarrollador Backend Node.js
 *         descripcion: Desarrollo y mantenimiento de APIs REST.
 *         ubicacion: Ciudad de México
 *         salario: 25000.00
 *         tipo_contrato: Indefinido
 *         fecha_publicacion: "2024-06-06"
 *         fecha_cierre: "2024-07-06"
 *         estado: Vigente
 *         reclutador_id: 3
 */

/**
 * @swagger
 * tags:
 *   name: OfertasLaborales
 *   description: API para gestión de ofertas laborales
 */

/**
 * @swagger
 * /ofertas-laborales:
 *   get:
 *     summary: Obtiene la lista de todas las ofertas laborales
 *     tags: [OfertasLaborales]
 *     responses:
 *       200:
 *         description: Lista de ofertas laborales
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/OfertaLaboral'
 */
Router.get('/', ofertalaboralController.getAll);

/**
 * @swagger
 * /ofertas-laborales/{id}:
 *   get:
 *     summary: Obtiene una oferta laboral por ID
 *     tags: [OfertasLaborales]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la oferta laboral
 *     responses:
 *       200:
 *         description: Oferta laboral encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OfertaLaboral'
 *       404:
 *         description: Oferta laboral no encontrada
 */
Router.get('/:id', ofertalaboralController.getById);

/**
 * @swagger
 * /ofertas-laborales:
 *   post:
 *     summary: Crea una nueva oferta laboral
 *     tags: [OfertasLaborales]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OfertaLaboral'
 *     responses:
 *       201:
 *         description: Oferta laboral creada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OfertaLaboral'
 *       500:
 *         description: Error en el servidor
 */
Router.post('/', ofertalaboralController.create);

/**
 * @swagger
 * /ofertas-laborales/{id}:
 *   put:
 *     summary: Actualiza una oferta laboral por ID
 *     tags: [OfertasLaborales]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la oferta laboral
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OfertaLaboral'
 *     responses:
 *       200:
 *         description: Oferta laboral actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OfertaLaboral'
 *       404:
 *         description: Oferta laboral no encontrada
 *       500:
 *         description: Error en el servidor
 */
Router.put('/:id', ofertalaboralController.update);

/**
 * @swagger
 * /ofertas-laborales/{id}:
 *   delete:
 *     summary: Elimina una oferta laboral por ID
 *     tags: [OfertasLaborales]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la oferta laboral
 *     responses:
 *       200:
 *         description: Oferta laboral eliminada
 *       404:
 *         description: Oferta laboral no encontrada
 */
Router.delete('/:id', ofertalaboralController.deleteOfertaLaboral);

module.exports = Router;