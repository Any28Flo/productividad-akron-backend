const moongose = require('mongoose');
const Schema = moongose.Schema;

const userSchema = new Schema({
    userName :{ type: String, required:true,unique: true, maxLength:20, trim:true},
    password :{ type: String, required:true, maxLength:20, trim:true}
})
const User = moongose.model('User', userSchema)
module.exports = User