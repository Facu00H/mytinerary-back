const express = require('express');
const router = express.Router();
const { create, readAll } = require('../controllers/Comments'); //traigo los metodos del controller

router.post('/', create); //cuando haga un post a /, ejecuta el metodo create del controller
router.get('/', readAll); //cuando haga un get a /, ejecuta el metodo readAll del controller
module.exports = router;