const moongose = require('mongoose');
const Schema = moongose.Schema;

const taskSchema = new Schema ({
    taskName : { type: String, required:true, maxLength:20, trim:true},
    description : { type: String, required:true, maxLength:100, trim:true},
    status : { type: String,  trim:true, default:'active'},
    duration : { type: String,  trim:true}
})
const Task = moongose.model('Task', taskSchema)
module.exports = Task;