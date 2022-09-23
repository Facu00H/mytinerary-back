const passport = require('passport');
const passportJWT = require('passport-jwt');
const { KEY_JWT } = process.env;
const User = require('../models/User');

passport.use(
    //si se cumplen todas las condiciones del pasaporte, me deja avanzar hacia el metodo del controlador
    //si autenticacion como usuario comun, tiene permiso para likear o comentar
    //si autenticacion como admin, tiene permiso para crear, editar y eliminar ciudades
    new passportJWT.Strategy( //estrategia de autenticacion
        {
            jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),//extrae el token del header
            secretOrKey: KEY_JWT,//llave secreta
        }, // la estrategia retorna un objeto jwt_payload (con la data que se configuro en el token) para darsela al controlador
        // los datos del payload hay que enviarselos al controlador para que los pueda utilizar
        async (jwt_payload, done) => { // maneja como llega el dato decodificado al controlador
            try {
                let user = await User.findOne({ _id: jwt_payload.id });
                if (user) {
                    user = {
                        id: user._id,
                        name: user.name,
                        email: user.mail,
                        role: user.role,
                        photo: user.photo,
                    }
                    return done(null, user);
                }
                return done(null, false);
            } catch (error) {
                return done(error, false);
            }
        }
    )
)

module.exports = passport;