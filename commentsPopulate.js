require('dotenv').config()

const database = require('./config/database')

const Comment = require('./models/Comment')

Comment.create({
    "comment": "Amazing views!",
    "user": "631900311975b7204bed234e",
    "itinerary": "6319240543a9e8672f04bf59",
})

Comment.create({
    "comment": "I loved it!",
    "user": "631900311975b7204bed2351",
    "itinerary": "6319240543a9e8672f04bf59",
})

Comment.create({
    "comment": "I would go again!",
    "user": "631900311975b7204bed2350",
    "itinerary": "6319240543a9e8672f04bf59",
})

Comment.create({
    "comment": "Great experience!",
    "user": "631900311975b7204bed234f",
    "itinerary": "6319240543a9e8672f04bf59",
})