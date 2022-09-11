const express = require('express');
const router = express.Router();
const { create, readFromCity, readFromUser, readFromUserQuery, readFromCityQuery, update, remove } = require('../controllers/Itineraries');

router.post('/', create);
router.get('/city/:id', readFromCity);
router.get('/user/:id', readFromUser);
router.get('/queryc', readFromCityQuery);
router.get('/queryu', readFromUserQuery);
router.patch('/:id', update);
router.delete('/:id', remove);
module.exports = router;