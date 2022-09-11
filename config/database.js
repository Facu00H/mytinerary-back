const mongoose = require('mongoose');
mongoose.connect(
    process.env.MONGO_URI,
    {
        useUnifiedTopology: true, //habilita a mongoose para controlar la base de datos de mongo
        useNewUrlParser: true, //utiliza el analizador de errores de mongoose en lugar de la de mongo
        //primer parametro: url de conexion
        //segundo parametro: opciones de conexion
    }
)
    .then(() => console.log("Connected to MongoDB"))//luego de cumplirse la promesa, se avisa que se conecto correctamente
    .catch(err => console.log(err));//si no se cumple la promesa, se avisa que hubo un error

    //una vez conectado a la base de datos, se exporta el modulo a app.js