const jwt=require("jsonwebtoken")
const User = require("../models/user.model")

exports.isAuth= async (req,res,next)=>{
    const token= req.header('authorization')
    try {
        if (!token) {
            return res.status(400).send('not authorized')  
         }

        const decoded=jwt.verify(token,process.env.TOKEN_PASSWORD)

        const user= await User.findById(decoded.id)
        req.user=user
        next()
    } catch (error) {
        res.status(500).send("sever error")
    }
}