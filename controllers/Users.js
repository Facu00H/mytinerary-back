const User = require('../models/User')
const crypto = require('crypto') //recurso propio de nodeJS para generar códigos aleatorios y unicos
const bcryptjs = require('bcryptjs') //recurso propio de nodeJS para hashear contraseñas
const sendMail = require('./sendMail')

const usersController = {
    
    signUp: async(req,res) => {
        let {
            name,
            lastName,
            country,
            photo,
            mail,
            password,
            role, //el rol tiene que venir desde el frontend para usar este metodo para ambos casos (user y admin)
            from //el from tiene que venir desde el frontend para avisarle al método desde donde se crea el usuario
        } = req.body
        try {
            let user = await User.findOne({mail})
            if (!user) {
                let logged = false
                let verified = false
                let code = crypto 
                    .randomBytes(15) 
                    .toString('hex') 
                if (from==='form') {
                    password = bcryptjs.hashSync(password,10) 
                    user = await new User({name,lastName,country,photo,mail,password:[password],role,from:[from],logged,verified,code}).save() 

                    sendMail(mail,code)
                    res.status(201).json({
                        message: "user signed up from form",
                        success: true
                    })
                } else { 
                    password = bcryptjs.hashSync(password,10) 
                    verified = true
                    user = await new User({name,lastName,country,photo,mail,password:[password],role,from:[from],logged,verified,code}).save()
                    
                    
                    res.status(201).json({
                        message: "user signed up from "+from,
                        success: true
                    })
                }
            } else { 
                if (user.from.includes(from)) { 
                    res.status(200).json({ 
                        message: "user already exists",
                        success: false 
                    })
                } else { 
                    user.from.push(from) 
                    user.verified = true 
                    password = bcryptjs.hashSync(password,10) 
                    user.password.push(password) 
                    await user.save() 
                    res.status(201).json({
                        message: "user signed up from "+from,
                        success: true
                    })
                }
            }
        } catch(error) {
            console.log(error)
            res.status(400).json({
                message: "could't signed up",
                success: false
            })
        }
    },

    verifyMail: async (req, res) => {},

    signIn: async (req, res) => {},

    signOut: async (req, res) => {},  // findOneAndUpdate y cambiar logged de true a false

}

module.exports = usersController;