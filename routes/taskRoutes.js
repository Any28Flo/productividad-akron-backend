const express = require('express');
const routes = express.Router();
const taskController = require('./../controllers/taskController');
const { check } = require( 'express-validator');

routes.post('/', taskController.registerTask);
routes.get('/', taskController.listTasks);
routes.get('/:idTask',
    [
        check('description', 'La descripción es requerida').not().isEmpty(),
        check('duration', 'La duración es requerida').not().isEmpty()
    ],
    taskController.detailTask);
routes.put('/:idTask', taskController.editTask)
routes.put ('/deleteTask/:idTask', taskController.deleteTask)
module.exports = routes;
