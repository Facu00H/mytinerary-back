const express = require('express');
const router = express.Router();
const { signUp, signIn, signOut } = require('../controllers/Users'); //traigo los metodos del controller

router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/signout', signOut); //cuando haga un post a /, ejecuta el metodo create del controller
module.exports = router;
