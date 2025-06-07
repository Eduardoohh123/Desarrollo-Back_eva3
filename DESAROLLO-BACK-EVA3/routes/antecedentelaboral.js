const express = require('express');
const Router = express.Router();
const antecedentelaboralController = require('../controllers/antecedentelaboralController');

/**
 * @swagger
 * components:
 *   schemas:
 *     AntecedenteLaboral:
 *       type: object
 *       required:
 *         - candidato_id
 *         - empresa
 *         - cargo
 *       properties:
 *         id:
 *           type: integer
 *           description: ID autoincremental del antecedente laboral (PRIMARY KEY)
 *         candidato_id:
 *           type: integer
 *           description: ID del candidato (FOREIGN KEY a Usuario)
 *         empresa:
 *           type: string
 *           maxLength: 150
 *           description: Nombre de la empresa (obligatorio)
 *         cargo:
 *           type: string
 *           maxLength: 150
 *           description: Cargo desempeñado (obligatorio)
 *         funciones:
 *           type: string
 *           description: Descripción de funciones realizadas
 *         fecha_inicio:
 *           type: string
 *           format: date
 *           description: Fecha de inicio
 *         fecha_termino:
 *           type: string
 *           format: date
 *           description: Fecha de término
 *       example:
 *         id: 1
 *         candidato_id: 2
 *         empresa: Empresa Ejemplo S.A.
 *         cargo: Desarrollador Backend
 *         funciones: Desarrollo de APIs y mantenimiento de sistemas.
 *         fecha_inicio: "2022-01-01"
 *         fecha_termino: "2023-01-01"
 */

/**
 * @swagger
 * tags:
 *   name: AntecedentesLaborales
 *   description: API para gestión de antecedentes laborales
 */

/**
 * @swagger
 * /antecedentes-laborales:
 *   get:
 *     summary: Obtiene la lista de todos los antecedentes laborales
 *     tags: [AntecedentesLaborales]
 *     responses:
 *       200:
 *         description: Lista de antecedentes laborales
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/AntecedenteLaboral'
 */
Router.get('/', antecedentelaboralController.getAll);

/**
 * @swagger
 * /antecedentes-laborales/{id}:
 *   get:
 *     summary: Obtiene un antecedente laboral por ID
 *     tags: [AntecedentesLaborales]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del antecedente laboral
 *     responses:
 *       200:
 *         description: Antecedente laboral encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AntecedenteLaboral'
 *       404:
 *         description: Antecedente laboral no encontrado
 */
Router.get('/:id', antecedentelaboralController.getById);

/**
 * @swagger
 * /antecedentes-laborales:
 *   post:
 *     summary: Crea un nuevo antecedente laboral
 *     tags: [AntecedentesLaborales]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AntecedenteLaboral'
 *     responses:
 *       201:
 *         description: Antecedente laboral creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AntecedenteLaboral'
 *       500:
 *         description: Error en el servidor
 */
Router.post('/', antecedentelaboralController.create);

/**
 * @swagger
 * /antecedentes-laborales/{id}:
 *   put:
 *     summary: Actualiza un antecedente laboral por ID
 *     tags: [AntecedentesLaborales]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del antecedente laboral
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AntecedenteLaboral'
 *     responses:
 *       200:
 *         description: Antecedente laboral actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AntecedenteLaboral'
 *       404:
 *         description: Antecedente laboral no encontrado
 *       500:
 *         description: Error en el servidor
 */
Router.put('/:id', antecedentelaboralController.update);

/**
 * @swagger
 * /antecedentes-laborales/{id}:
 *   delete:
 *     summary: Elimina un antecedente laboral por ID
 *     tags: [AntecedentesLaborales]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del antecedente laboral
 *     responses:
 *       200:
 *         description: Antecedente laboral eliminado
 *       404:
 *         description: Antecedente laboral no encontrado
 */
Router.delete('/:id', antecedentelaboralController.deleteAntecedenteLaboral);

module.exports = Router;