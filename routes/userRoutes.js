const express = require('express');
const routes = express.Router();
const userController = require('./../controllers/userController')
const { check } = require( 'express-validator');


routes.post('/register',
    [
        check('userName', 'El nombre es requerido').not().isEmpty(),
        check('password', 'La contraseña es requerida').not().isEmpty()
    ],
    userController.registerUser );
routes.post('/login',
    [
        check('userName', 'El nombre es requerido').not().isEmpty(),
        check('password', 'La contraseña es requerida').not().isEmpty()
    ],
    userController.login);

module.exports = routes;