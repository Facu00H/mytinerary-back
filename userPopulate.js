require('dotenv').config()

const database = require('./config/database')

const User = require('./models/User')

User.create({
    "name": "Joaquin",
    "lastName": "Alvarez",
    "mail": "joaquinbrialva@gmail.com",
    "password": "123456789",
    "photo": "photo1.jpg",
    "country": "Argentina"
})

User.create({
    "name": "Ignacio",
    "lastName": "Alvarez",
    "mail": "ignacioalva@gmail.com",
    "password": "1234",
    "photo": "photo2.jpg",
    "country": "Argentina"
})

User.create({
    "name": "Leo",
    "lastName": "Alvarez",
    "mail": "polanquero@gmail.com",
    "password": "123456",
    "photo": "photo3.jpg",
    "country": "Argentina"
})

User.create({
    "name": "Patricia",
    "lastName": "Briones",
    "mail": "patri-joa@gmail.com",
    "password": "101010",
    "photo": "photo4.jpg",
    "country": "Peru"
})