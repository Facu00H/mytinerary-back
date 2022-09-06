const express = require('express');
const router = express.Router();
const { create } = require('../controllers/Users'); //traigo los metodos del controller

router.post('/', create); //cuando haga un post a /, ejecuta el metodo create del controller
module.exports = router;
