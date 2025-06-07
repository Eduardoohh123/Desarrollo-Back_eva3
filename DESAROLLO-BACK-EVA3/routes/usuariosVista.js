const express = require('express');
const Router = express.Router();
const usuariosController = require('../controllers/usuariosController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       required:
 *         - nombre
 *         - apellido
 *         - email
 *         - contraseña
 *         - rol
 *       properties:
 *         id:
 *           type: integer
 *           description: ID autoincremental del usuario (PRIMARY KEY)
 *         nombre:
 *           type: string
 *           maxLength: 100
 *           description: Nombre del usuario (obligatorio)
 *         apellido:
 *           type: string
 *           maxLength: 100
 *           description: Apellido del usuario (obligatorio)
 *         email:
 *           type: string
 *           maxLength: 150
 *           description: Email único del usuario (obligatorio)
 *         contraseña:
 *           type: string
 *           maxLength: 255
 *           description: Contraseña del usuario (obligatorio)
 *         fecha_nacimiento:
 *           type: string
 *           format: date
 *           description: Fecha de nacimiento del usuario (opcional)
 *         telefono:
 *           type: string
 *           maxLength: 20
 *           description: Teléfono del usuario (opcional)
 *         direccion:
 *           type: string
 *           maxLength: 255
 *           description: Dirección del usuario (opcional)
 *         rol:
 *           type: string
 *           enum: [Reclutador, Candidato]
 *           description: Rol del usuario (obligatorio, 'Reclutador' o 'Candidato')
 *         fecha_registro:
 *           type: string
 *           format: date-time
 *           description: Fecha de registro (por defecto la actual)
 *         estado:
 *           type: string
 *           enum: [Activo, Inactivo]
 *           description: Estado del usuario (por defecto 'Activo')
 *       example:
 *         id: 1
 *         nombre: Juan
 *         apellido: Pérez
 *         email: juan.perez@email.com
 *         contraseña: password123
 *         fecha_nacimiento: 1990-01-01
 *         telefono: "123456789"
 *         direccion: Calle Falsa 123
 *         rol: Candidato
 *         fecha_registro: "2024-06-06T12:00:00Z"
 *         estado: Activo
 */

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: API para gestión de usuarios
 */

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Obtiene la lista de todos los usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 */
Router.get('/', usuariosController.getAll);

/**
 * @swagger
 * /usuarios/{id}:
 *   get:
 *     summary: Obtiene un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID autoincremental del usuario
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       404:
 *         description: Usuario no encontrado
 */
Router.get('/:id', usuariosController.getById);

/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Crea un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       201:
 *         description: Usuario creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       500:
 *         description: Error en el servidor
 */
Router.post('/', usuariosController.create);

/**
 * @swagger
 * /usuarios/{id}:
 *   put:
 *     summary: Actualiza un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID autoincremental del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: Usuario actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error en el servidor
 */
Router.put('/:id', usuariosController.update);

/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     summary: Elimina un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID autoincremental del usuario
 *     responses:
 *       200:
 *         description: Usuario eliminado
 *       404:
 *         description: Usuario no encontrado
 */
Router.delete('/:id', usuariosController.deleteUsuario);

module.exports = Router;