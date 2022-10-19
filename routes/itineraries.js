const express = require('express');
const passport = require('../config/passport');
const router = express.Router();
const { create, readFromCity, readFromUser, readFromUserQuery, readFromCityQuery, update, remove, like } = require('../controllers/Itineraries');

router.post('/', create);
router.get('/city/:id', readFromCity);
router.get('/user/:id', readFromUser);
router.get('/queryc', readFromCityQuery);
router.get('/queryu', readFromUserQuery);
router.patch('/:id', update);
router.delete('/:id', remove);
router.patch('/like/:id', passport.authenticate('jwt', { session: false }), like);
module.exports = router;