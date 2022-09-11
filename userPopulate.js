require('dotenv').config()

const database = require('./config/database')

const User = require('./models/User')

User.create({
    "name": "Joaquin",
    "lastName": "Alvarez",
    "mail": "joaquinbrialva@gmail.com",
    "password": "123456789",
    "photo": "https://img.a.transfermarkt.technology/portrait/big/28003-1631171950.jpg?lm=1",
    "country": "Argentina"
})

User.create({
    "name": "Ignacio",
    "lastName": "Alvarez",
    "mail": "ignacioalva@gmail.com",
    "password": "1234",
    "photo": "https://sm.ign.com/t/ign_es/screenshot/default/spiderman-2_2h6a.h720.jpg",
    "country": "Argentina"
})

User.create({
    "name": "Leo",
    "lastName": "Alvarez",
    "mail": "polanquero@gmail.com",
    "password": "123456",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Luis_Su%C3%A1rez_2018.jpg",
    "country": "Uruguay"
})

User.create({
    "name": "Patricia",
    "lastName": "Briones",
    "mail": "patri-joa@gmail.com",
    "password": "101010",
    "photo": "https://static.wikia.nocookie.net/disney/images/8/81/Rapunzelsoft.jpeg/revision/latest?cb=20190713200049&path-prefix=es",
    "country": "Peru"
})