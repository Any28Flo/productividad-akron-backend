const User = require('../models/userSchema')
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

exports.registerUser= async(req, res) =>{
    const errors= validationResult(res);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() })
    }
    const {userName, password} = req.body;
    try{
        const salt = await bcrypt.genSaltSync(10);
        const hashPass = await bcrypt.hashSync(password, salt);

        const newUser = new User({
            userName : userName,
            password: hashPass
        })
        const savedUser = await newUser.save();
        if(savedUser) {
            return(
                res.status(200).json({
                    savedUser,
                    msg: 'Creado éxitosamente'
                })
            )
        }
    }catch (e) {
        console.log(e)
    }
}
exports.login = async (req, res) =>{
    const errors= validationResult(res);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() })
    }
    const {userName, password} = req.body;

    try{

        const objUser = await User.findOne({ userName: userName });
        const isMatch = await bcrypt.compare(password, objUser.password);
        if (objUser && isMatch){
            return(
                res.status(200).json({
                    msg: 'Credenciales OK',
                    objUser
                })
            )
        }
    }catch (e) {
        console.log(e)
    }
}