const express = require('express');
const router = express.Router();
const { readAll, create } = require('../controllers/Acitivities');

router.get('/', readAll); //cuando haga un get a /, ejecuta el metodo readAll del controller
router.post('/', create); //cuando haga un post a /, ejecuta el metodo create del controller
module.exports = router;
