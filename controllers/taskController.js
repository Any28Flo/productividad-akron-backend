const Task = require('../models/taskSchema');
const { validationResult } = require('express-validator');

exports.registerTask = async (req, res) =>{
    const {taskName, description, status, duration, user} = req.body;
    try{
        const newTask =new Task({
            taskName:taskName,
            description: description,
            status: status,
            duration: duration,
            user: user
        })
        const savedTask = await  newTask.save();
        if(savedTask){
            return (
                res.status(200).json({
                    savedTask,
                    msg: 'Creado exitosamente',
                    status: 'success'
                })
            )
        }
    }catch (e) {
        res.status(400).json({
            msg:e
        })
    }
}
exports.listTasks = async(req, res) =>{
    const {user} = req.headers;
    const tasks = await Task.find({user: user, status: 'active' });
    if (tasks !== null){
        return (
            res.status(200).json({
                msg: 'Lista de tareas',
                tasks
            })
        )
    }


}
exports.detailTask = async (req, res) =>{
    const {idTask} = req.params;

    try{
        const task = await Task.findOne({_id: idTask});
        if(task){
            return(
                res.status(200).json({
                    task
                })
            )
        }
    }catch (e) {
     console.log(2)
    }
}
exports.editTask = async(req,res) =>{
    const errors= validationResult(res);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() })
    }

    const {taskName, description, status, duration, user} = req.body;
    const editTask = {
        taskName: taskName,
        description: description,
        status: status,
        duration: duration,
        user: user
    }
    try{
        const editTaskObj = await Task.findByIdAndUpdate(
            { _id: req.params.idTask },
            { $set: editTask },
            { new: true }
        );
        if(editTaskObj){
            return (
                res.status(200).json({
                    msg: `${editTaskObj.taskName} editado exitosamente`,
                    editTaskObj
                })
            )
        }
    }catch (e) {

    }
}
exports.deleteTask = async(req, res) =>{
    const {idTask} = req.params;
    const update = {status: 'disabled'};
    try{
        const deleteTask = await Task.findByIdAndUpdate(idTask, update)
        if(deleteTask){
            res.status(200).json({
                msg : "Task eliminada correctamente"
            })

        }
    }catch (e) {

    }
}