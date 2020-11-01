const express = require('express');
const routes = express.Router();
const taskController = require('./../controllers/taskController');

routes.post('/', taskController.registerTask);
routes.get('/', taskController.listTasks);
module.exports = routes;
