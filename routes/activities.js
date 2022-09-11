const express = require('express');
const router = express.Router();
const { create, readFromItinerary, readFromItineraryQuery } = require('../controllers/Acitivities');

router.post('/', create); //cuando haga un post a /, ejecuta el metodo create del controller
router.get('/query', readFromItineraryQuery);
router.get('/:id', readFromItinerary);
module.exports = router;
