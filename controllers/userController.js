const User = require('../models/userSchema')

exports.registerUser= async(req, res) =>{
    const {userName, password} = req.body;
    try{
        const user = await User.findOne({userName});
        if(user) return res.status(400).json({msg : "El usuario ya exite"})

        const newUser = new User({
            userName : userName,
            password: password
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
        res.status(400).json({
            msg:e
        })
    }
}