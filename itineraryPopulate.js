require('dotenv').config()

const database = require('./config/database')

const Itinerary = require('./models/Itinerary')

let itineraries = [   //tres ciudades con 3 itinerarios cada una
    { //las vegas
        "name": "Neon nights",
        "user": "63239ae771c1230c5342c6c8",
        "city": "630fb321e8dca105c4c2488a",
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b3/3d/f9/neon-boneyard.jpg?w=1200&h=-1&s=1",
        "price": 95,
        "tags": "lights",
        "duration": 3,
    },

    {
        "name": "Las Vegas in family",
        "user": "63239ae771c1230c5342c6c8",
        "city": "630fb321e8dca105c4c2488a",
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b3/3d/f9/neon-boneyard.jpg?w=1200&h=-1&s=1",
        "price": 51,
        "tags": "family",
        "duration": 5,
    },

    {
        "name": "Adrenaline rushes",
        "user": "63239ae771c1230c5342c6c8",
        "city": "630fb321e8dca105c4c2488a",
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b3/3d/f9/neon-boneyard.jpg?w=1200&h=-1&s=1",
        "price": 100,
        "tags": "adrenaline",
        "duration": 2,
    },

    { // LONDON
        "name": "River Thames Cruise",
        "user": "63239ae771c1230c5342c6c8",
        "city": "630fb321e8dca105c4c24884",
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b3/3d/f9/neon-boneyard.jpg?w=1200&h=-1&s=1",
        "price": 20,
        "tags": "river",
        "duration": 1,
    },

    {
        "name": "The royal family and their secrets",
        "user": "63239ae771c1230c5342c6c8",
        "city": "630fb321e8dca105c4c24884",
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b3/3d/f9/neon-boneyard.jpg?w=1200&h=-1&s=1",
        "price": 30,
        "tags": "royal",
        "duration": 2,
    },

    {
        "name": "British Rock Icons",
        "user": "63239ae771c1230c5342c6c8",
        "city": "630fb321e8dca105c4c24884",
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b3/3d/f9/neon-boneyard.jpg?w=1200&h=-1&s=1",
        "price": 40,
        "tags": "rock",
        "duration": 3,
    },

    { // PARIS
        "name": "Cruises on the Seine",
        "user": "63239ae771c1230c5342c6c8",
        "city": "630fb321e8dca105c4c24886",
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b3/3d/f9/neon-boneyard.jpg?w=1200&h=-1&s=1",
        "price": 20,
        "tags": "river",
        "duration": 1,
    },

    {
        "name": "Museums and art",
        "user": "63239ae771c1230c5342c6c8",
        "city": "630fb321e8dca105c4c24886",
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b3/3d/f9/neon-boneyard.jpg?w=1200&h=-1&s=1",
        "price": 30,
        "tags": "art",
        "duration": 2,
    },

    {
        "name": "Shows",
        "user": "63239ae771c1230c5342c6c8",
        "city": "630fb321e8dca105c4c24886",
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b3/3d/f9/neon-boneyard.jpg?w=1200&h=-1&s=1",
        "price": 40,
        "tags": "show",
        "duration": 3,
    },

    //tres ciudades con 2 itinerarios cada una
    { // NEW YORK 
        "name": "New York from above",
        "user": "63239ae771c1230c5342c6c8",
        "city": "630fb321e8dca105c4c24889",
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b3/3d/f9/neon-boneyard.jpg?w=1200&h=-1&s=1",
        "price": 20,
        "tags": "sky",
        "duration": 1,
    },

    {
        "name": "Tickets and tours on Broadway",
        "user": "63239ae771c1230c5342c6c8",
        "city": "630fb321e8dca105c4c24889",
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b3/3d/f9/neon-boneyard.jpg?w=1200&h=-1&s=1",
        "price": 30,
        "tags": "broadway",
        "duration": 2,
    },

    { // TOKYO
        "name": "Sushi, sake and food stalls",
        "user": "63239ae771c1230c5342c6c8",
        "city": "630fb321e8dca105c4c2488d",
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b3/3d/f9/neon-boneyard.jpg?w=1200&h=-1&s=1",
        "price": 20,
        "tags": "food",
        "duration": 1,
    },

    {
        "name": "Temples and architectural works",
        "user": "63239ae771c1230c5342c6c8",
        "city": "630fb321e8dca105c4c2488d",
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b3/3d/f9/neon-boneyard.jpg?w=1200&h=-1&s=1",
        "price": 30,
        "tags": "architecture",
        "duration": 2,
    },

    { // singapur
        "name": "tropical vegetation",
        "user": "63239ae771c1230c5342c6c8",
        "city": "630fb321e8dca105c4c24885",
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b3/3d/f9/neon-boneyard.jpg?w=1200&h=-1&s=1",
        "price": 20,
        "tags": "tropical",
        "duration": 1,
    },

    {
        "name": "Family fun in Singapore",
        "user": "63239ae771c1230c5342c6c8",
        "city": "630fb321e8dca105c4c24885",
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b3/3d/f9/neon-boneyard.jpg?w=1200&h=-1&s=1",
        "price": 30,
        "tags": "family",
        "duration": 2,
    },

    // tres ciudades con 1 itinerario cada una
    {   //dubai
        "name": "Arabian desert tours",
        "user": "63239ae771c1230c5342c6c8",
        "city": "630fb321e8dca105c4c24887",
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b3/3d/f9/neon-boneyard.jpg?w=1200&h=-1&s=1",
        "price": 20,
        "tags": "desert",
        "duration": 1,
    },

    { // honk kong
        "name": "The City on the Horizon",
        "user": "63239ae771c1230c5342c6c8",
        "city": "630fb321e8dca105c4c24882",
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b3/3d/f9/neon-boneyard.jpg?w=1200&h=-1&s=1",
        "price": 20,
        "tags": "city",
        "duration": 1,
    },

    { // bangkok
        "name": "Buddhist temples and palaces",
        "user": "63239ae771c1230c5342c6c8",
        "city": "630fb321e8dca105c4c24883",
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b3/3d/f9/neon-boneyard.jpg?w=1200&h=-1&s=1",
        "price": 20,
        "tags": "buddhist",
        "duration": 1,
    }
]


itineraries.forEach(item => {
    Itinerary.create({
        "name": item.name,
        "user": item.user,
        "city": item.city,
        "photo": item.photo,
        "price": item.price,
        "tags": item.tags,
        "duration": item.duration
    })
})