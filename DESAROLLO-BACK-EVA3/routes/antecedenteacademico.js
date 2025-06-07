const express = require('express');
const Router = express.Router();
const antecedenteacademicoController = require('../controllers/antecenteacademicoController');

/**
 * @swagger
 * components:
 *   schemas:
 *     AntecedenteAcademico:
 *       type: object
 *       required:
 *         - candidato_id
 *         - institucion
 *         - titulo_obtenido
 *       properties:
 *         id:
 *           type: integer
 *           description: ID autoincremental del antecedente académico (PRIMARY KEY)
 *         candidato_id:
 *           type: integer
 *           description: ID del candidato (FOREIGN KEY a Usuario)
 *         institucion:
 *           type: string
 *           maxLength: 150
 *           description: Nombre de la institución educativa (obligatorio)
 *         titulo_obtenido:
 *           type: string
 *           maxLength: 150
 *           description: Título obtenido (obligatorio)
 *         anio_ingreso:
 *           type: integer
 *           format: int32
 *           description: Año de ingreso
 *         anio_egreso:
 *           type: integer
 *           format: int32
 *           description: Año de egreso
 *       example:
 *         id: 1
 *         candidato_id: 2
 *         institucion: Universidad Nacional
 *         titulo_obtenido: Ingeniero en Sistemas
 *         anio_ingreso: 2018
 *         anio_egreso: 2022
 */

/**
 * @swagger
 * tags:
 *   name: AntecedentesAcademicos
 *   description: API para gestión de antecedentes académicos
 */

/**
 * @swagger
 * /antecedentes-academicos:
 *   get:
 *     summary: Obtiene la lista de todos los antecedentes académicos
 *     tags: [AntecedentesAcademicos]
 *     responses:
 *       200:
 *         description: Lista de antecedentes académicos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/AntecedenteAcademico'
 */
Router.get('/', antecedenteacademicoController.getAll);

/**
 * @swagger
 * /antecedentes-academicos/{id}:
 *   get:
 *     summary: Obtiene un antecedente académico por ID
 *     tags: [AntecedentesAcademicos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del antecedente académico
 *     responses:
 *       200:
 *         description: Antecedente académico encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AntecedenteAcademico'
 *       404:
 *         description: Antecedente académico no encontrado
 */
Router.get('/:id', antecedenteacademicoController.getById);

/**
 * @swagger
 * /antecedentes-academicos:
 *   post:
 *     summary: Crea un nuevo antecedente académico
 *     tags: [AntecedentesAcademicos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AntecedenteAcademico'
 *     responses:
 *       201:
 *         description: Antecedente académico creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AntecedenteAcademico'
 *       500:
 *         description: Error en el servidor
 */
Router.post('/', antecedenteacademicoController.create);

/**
 * @swagger
 * /antecedentes-academicos/{id}:
 *   put:
 *     summary: Actualiza un antecedente académico por ID
 *     tags: [AntecedentesAcademicos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del antecedente académico
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AntecedenteAcademico'
 *     responses:
 *       200:
 *         description: Antecedente académico actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AntecedenteAcademico'
 *       404:
 *         description: Antecedente académico no encontrado
 *       500:
 *         description: Error en el servidor
 */
Router.put('/:id', antecedenteacademicoController.update);

/**
 * @swagger
 * /antecedentes-academicos/{id}:
 *   delete:
 *     summary: Elimina un antecedente académico por ID
 *     tags: [AntecedentesAcademicos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del antecedente académico
 *     responses:
 *       200:
 *         description: Antecedente académico eliminado
 *       404:
 *         description: Antecedente académico no encontrado
 */
Router.delete('/:id', antecedenteacademicoController.deleteAntecedenteAcademico);

module.exports = Router;