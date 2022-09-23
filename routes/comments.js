const express = require('express');
const router = express.Router();
const passport = require('../config/passport');
const { create, readFromItinerary, readFromItineraryQuery, updateComment, removeComment } = require('../controllers/Comments'); //traigo los metodos del controller

router.post('/', passport.authenticate('jwt', { session: false }), create); //cuando haga un post a /, ejecuta el metodo create del controller
router.get('/query', readFromItineraryQuery);
router.get('/itinerary/:id', readFromItinerary);
router.patch('/:id', passport.authenticate('jwt', { session: false }), updateComment);
router.delete('/:id', passport.authenticate('jwt', { session: false }), removeComment)
module.exports = router;