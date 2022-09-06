const express = require('express');
const router = express.Router();
const { create, update, remove } = require('../controllers/Itineraries');

router.post('/', create);
router.patch('/:id', update);
router.delete('/:id', remove);
module.exports = router;