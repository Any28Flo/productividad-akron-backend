const Task = require('../models/taskSchema');

exports.registerTask = async (req, res) =>{
    const {taskName, description, status, duration} = req.body;
    try{
        const newTask =new Task({
            taskName:taskName,
            description: description,
            status: status,
            duration: duration
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