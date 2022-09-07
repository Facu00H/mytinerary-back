const express = require('express');
const router = express.Router();
const { create, readAll, update, remove } = require('../controllers/Itineraries');

router.post('/', create);
router.get('/', readAll);
router.patch('/:id', update);
router.delete('/:id', remove);
module.exports = router;