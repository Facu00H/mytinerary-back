const express = require('express');
const router = express.Router();
const { create } = require('../controllers/CityController'); //traigo el metodo create del controller

router.post('/cities', create); //cuando haga un post a /cities, ejecuta el metodo create del controller

module.exports = router;
