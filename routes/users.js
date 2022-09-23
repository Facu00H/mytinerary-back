const express = require('express');
const router = express.Router();
const { signUp, signIn, signOut, verifyMail, verifyToken,read } = require('../controllers/Users'); //traigo los metodos del controller
const passport = require('../config/passport');


router.post('/signup', signUp);
router.get('/',read)
router.get('/token', passport.authenticate('jwt', {session:false}), verifyToken)
router.get('/verify/:code',verifyMail)
router.post('/signin', signIn);
router.post('/signout', signOut);
module.exports = router;
