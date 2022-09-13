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

    verifyMail: async (req, res) => {
        const {code} = req.params;

        try{
            let user = await User.findOne({code});
            if(user){
                user.verified = true;
                await user.save();
                res.redirect('https://www.google.com')
            }else{
                res.status(404).json({ message: "email has not accounted yet"})
            }
        }catch{
            console.log(error)
            res.status(400).json({ 
                message: "error",
                succes: false
            })
        }
    },

    signIn: async(req,res) => {
        let {
            email,
            password, //el rol tiene que venir desde el frontend para usar este metodo para ambos casos (user y admin)
            from //el from tiene que venir desde el frontend para avisarle al método desde donde se crea el usuario
        } = req.body

        try{
            let user = await User.findOne({email})
            if(!user){
                res.status(404).json({
                    message: 'user not exist,please sing up',
                    succes:false
                })
            }else if(user.verified){
                let checkPass = user.pass.filter(passwordElem => bcryptjs.compareSync(password,passwordElem))

                if(from === 'form'){
                    if(checkPass.length > 0){
                        let loginUser={
                            id:user._id,
                            name:user.name,
                            mail:user.email,
                            role:user.role,
                            photo:user.photo,
                        }

                        user.logged = true
                        await user.save()
                        res.status(200).json({
                            succes:true,
                            response:{user:loginUser},
                            message:'welcome ' + user.name,
                        })

                    }else{
                        res.status(400).json({
                            succes:false,
                            message:'user name or password incorrect'
                        })

                    }

                }else{
                    if(checkPass.length > 0){
                        let loginUser={
                            id:user._id,
                            name:user.name,
                            mail:user.email,
                            role:user.role,
                            photo:user.photo,
                        }

                        user.logged = true
                        await user.save()
                        res.status(200).json({
                            succes:true,
                            response:{user:loginUser},
                            message:'welcome ' + user.name,
                        })

                    }else{
                        res.status(400).json({
                            succes:false,
                            message:'Invalid Credentials'
                        })

                    }
                }


            }else{
                res.status(401).json({
                    succes:false,
                    message:'please verify your email account and try again'
                })
            }

        }catch(err){
            console.log(err)
            res.status(400).json({
                succes:false,
                message:'sign in error try again later'
            })
        }
    },

    signOut: async(req,res) => {
        let {email}=req.body
        try{
            let user = await user.findOneAndUpdate({email:email},req.body)
            if(user){
                user.logged=false
                await user.save()
                res.status(200).json({
                    succes:true,
                    message:'user signOut'
                })
            }else{
                res.status(404).json({
                    succes:false,
                    message : 'user not finded'
                })
            }
        }catch(err){
            res.status(400).json({
                succes:false,
                message:'happend a error with signout'
            })
        }
    }  // findOneAndUpdate y cambiar logged de true a false

}

module.exports = usersController;