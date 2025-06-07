const express = require('express');
const router = express.Router();

// Importar las rutas de los diferentes módulos
const usuariosRouter               = require('./usuariosVista');
const antecedentelaboralRouter     = require('./antecedentelaboral');
const antecedenteacademicoRouter   = require('./antecedenteacademico');
const ofertalaboralRouter          = require('./ofertalaboralVista');
const postulacionRouter            = require('./postulacionVista');

// Asociar las rutas importadas a sus respectivos endpoints
router.use('/usuarios', usuariosRouter);
router.use('/antecedentes-laborales', antecedentelaboralRouter);
router.use('/antecedentes-academicos', antecedenteacademicoRouter);
router.use('/ofertas-laborales', ofertalaboralRouter);
router.use('/postulaciones', postulacionRouter);

// Middleware para capturar rutas no encontradass
router.use((req, res) => {
    console.log('Ruta no encontrada en index ' + req.method + ' ' + req.url);
    res.status(404).send('Ruta no encontrada');
});

module.exports = router;