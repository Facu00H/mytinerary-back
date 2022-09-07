var express = require('express');
var router = express.Router();
const cityRouter = require('./cities')
const userRouter = require('./users')
const itineraryRouter = require('./itineraries')
const activityRouter = require('./activities')
const commentRouter = require('./comments')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MyTinerary' });
});

router.use('/auth', userRouter)
router.use('/cities', cityRouter)
router.use('/itineraries', itineraryRouter)
router.use('/activities', activityRouter)
router.use('/comments', commentRouter)


module.exports = router;
