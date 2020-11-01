const express = require('express');
const routes = express.Router();
const taskController = require('./../controllers/taskController');

routes.post('/', taskController.registerTask);

module.exports = routes;
