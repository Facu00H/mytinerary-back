require('dotenv').config()

const database = require('./config/database')

const Itinerary = require('./models/Itinerary')

let itineraries = [   //tres ciudades con 3 itinerarios cada una
    { //las vegas
        "name": "Neon nights",
        "user": "631900311975b7204bed2350",
        "city": "630fb321e8dca105c4c2488a",
        "price": 95,
        "likes": 4,
        "tags": "lights",
        "duration": 3,
    },

    {
        "name": "Las Vegas in family",
        "user": "631900311975b7204bed234e",
        "city": "630fb321e8dca105c4c2488a",
        "price": 51,
        "likes": 2,
        "tags": "family",
        "duration": 5,
    },

    {
        "name": "Adrenaline rushes",
        "user": "631900311975b7204bed2351",
        "city": "630fb321e8dca105c4c2488a",
        "price": 100,
        "likes": 3,
        "tags": "adrenaline",
        "duration": 2,
    },

    { // LONDON
        "name": "River Thames Cruise",
        "user": "631900311975b7204bed234f",
        "city": "630fb321e8dca105c4c24884",
        "price": 20,
        "likes": 1,
        "tags": "river",
        "duration": 1,
    },

    {
        "name": "The royal family and their secrets",
        "user": "631900311975b7204bed2350",
        "city": "630fb321e8dca105c4c24884",
        "price": 30,
        "likes": 2,
        "tags": "royal",
        "duration": 2,
    },

    {
        "name": "British Rock Icons",
        "user": "631900311975b7204bed2351",
        "city": "630fb321e8dca105c4c24884",
        "price": 40,
        "likes": 3,
        "tags": "rock",
        "duration": 3,
    },

    { // PARIS
        "name": "Cruises on the Seine",
        "user": "631900311975b7204bed234e",
        "city": "630fb321e8dca105c4c24886",
        "price": 20,
        "likes": 1,
        "tags": "river",
        "duration": 1,
    },

    {
        "name": "Museums and art",
        "user": "631900311975b7204bed234f",
        "city": "630fb321e8dca105c4c24886",
        "price": 30,
        "likes": 2,
        "tags": "art",
        "duration": 2,
    },

    {
        "name": "Shows",
        "user": "631900311975b7204bed2350",
        "city": "630fb321e8dca105c4c24886",
        "price": 40,
        "likes": 3,
        "tags": "show",
        "duration": 3,
    },

    //tres ciudades con 2 itinerarios cada una
    { // NEW YORK 
        "name": "New York from above",
        "user": "631900311975b7204bed2351",
        "city": "630fb321e8dca105c4c24889",
        "price": 20,
        "likes": 1,
        "tags": "sky",
        "duration": 1,
    },

    {
        "name": "Tickets and tours on Broadway",
        "user": "631900311975b7204bed234e",
        "city": "630fb321e8dca105c4c24889",
        "price": 30,
        "likes": 2,
        "tags": "broadway",
        "duration": 2,
    },

    { // TOKYO
        "name": "Sushi, sake and food stalls",
        "user": "631900311975b7204bed234f",
        "city": "630fb321e8dca105c4c2488d",
        "price": 20,
        "likes": 1,
        "tags": "food",
        "duration": 1,
    },

    {
        "name": "Temples and architectural works",
        "user": "631900311975b7204bed2350",
        "city": "630fb321e8dca105c4c2488d",
        "price": 30,
        "likes": 2,
        "tags": "architecture",
        "duration": 2,
    },

    { // singapur
        "name": "tropical vegetation",
        "user": "631900311975b7204bed2350",
        "city": "630fb321e8dca105c4c24885",
        "price": 20,
        "likes": 1,
        "tags": "tropical",
        "duration": 1,
    },

    {
        "name": "Family fun in Singapore",
        "user": "631900311975b7204bed2351",
        "city": "630fb321e8dca105c4c24885",
        "price": 30,
        "likes": 2,
        "tags": "family",
        "duration": 2,
    },

    // tres ciudades con 1 itinerario cada una
    {   //dubai
        "name": "Arabian desert tours",
        "user": "631900311975b7204bed234e",
        "city": "630fb321e8dca105c4c24887",
        "price": 20,
        "likes": 1,
        "tags": "desert",
        "duration": 1,
    },

    { // honk kong
        "name": "The City on the Horizon",
        "user": "631900311975b7204bed234f",
        "city": "630fb321e8dca105c4c24882",
        "price": 20,
        "likes": 1,
        "tags": "city",
        "duration": 1,
    },

    { // bangkok
        "name": "Buddhist temples and palaces",
        "user": "631900311975b7204bed2350",
        "city": "630fb321e8dca105c4c24883",
        "price": 20,
        "likes": 1,
        "tags": "buddhist",
        "duration": 1,
    }
]


itineraries.forEach(item => {
    Itinerary.create({
        "name": item.name,
        "user": item.user,
        "city": item.city,
        "price": item.price,
        "likes": item.likes,
        "tags": item.tags,
        "duration": item.duration
    })
})