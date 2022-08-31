require('dotenv').config()

require('./config/database')

const City = require('./models/City')

City.create(
    {

        "city": 'Hong Kong',
        "country": "China",
        "photo": 'https://viajes.nationalgeographic.com.es/medio/2017/05/19/hong-kong_7ca23c6a.jpg',
        "description": "Hong Kong is best known as a shoppers' paradise. There is, however, so much more to Hong Kong than shopping. Visitors can enjoy views of the city from high altitude, sample local food, celebrate festivals, watch sports competitions, and visit movie settings in the city.",
        "population": 7482000,
        "fundation": 1842-08-29,
        "siteToVisit": "Buda Tian Tan, Victoria Harbour.",
    },
    {

        "city": 'Bangkok',
        "country": "Thailand",
        "photo": 'https://viajes.nationalgeographic.com.es/medio/2017/05/19/bangkok_7e327824.jpg',
        "description": "Bangkok's sights, attractions, and city life appeal to diverse groups of tourists. Royal palaces and temples as well as museums constitute its major historical and cultural tourist attractions.",
        "population": 14626225,
        "fundation": 1972-12-14,
        "siteToVisit": "Wat Arun, Chatuchak Market.",
    },
    {

        "city": 'London',
        "country": "England",
        "photo": 'https://viajes.nationalgeographic.com.es/medio/2017/05/19/londres_c8f06b1e.jpg',
        "description": "London is one of the world's most mesmerizing cities. Modern architectural marvels like the Shard line ancient laneways peppered with historic monuments, high-end shops, and award-winning theaters.",
        "population": 9982000,
        "fundation": 47,
        "siteToVisit": "Cristal palace Park, Rich Mix.",
    },
    {

        "city": 'Singapur',
        "country": "Republic of Singapur",
        "photo": 'https://viajes.nationalgeographic.com.es/medio/2017/05/19/singapur_d652cf49.jpg',
        "description": "With its century-old temples, bustling hawker centres and lush green spaces, Singapore's varied charms are bound to enchant visitors to our island. Our city's calendar of events is equally diverse,",
        "population": 5686000,
        "fundation": 1965-08-09,
        "siteToVisit": "Sentosa, ArtScience Museum",
    },
    {

        "city": 'Paris',
        "country": "France",
        "photo": 'https://viajes.nationalgeographic.com.es/medio/2017/05/19/paris_9b28f345.jpg',
        "description": "If you are planning a visit or becoming a resident of Paris, you will find everything you need in this charming city. The fashion capital of the world, the city has a long history of art and a rich culture.",
        "population": 2161000,
        "fundation": 52,
        "siteToVisit": "Eiffel Tower, Musee du Louvre",
    },
    {

        "city": 'Dubai',
        "country": "Arab Emirates",
        "photo": 'https://viajes.nationalgeographic.com.es/medio/2017/05/19/dubai_338723fa.jpg',
        "description": "The short answer is yes. Dubai is safe for westerners, including Americans. Dubai is a Persian Gulf oasis that travelers ranked as one of the safest cities in the world in 2020.",
        "population": 3331000,
        "fundation": 1983-06-09,
        "siteToVisit": "The Desert, Mall of the Emirates",
    },
    {

        "city": 'Istanbul',
        "country": "Turkey",
        "photo": 'https://viajes.nationalgeographic.com.es/medio/2017/05/19/estambul_80aca3cc.jpg',
        "description": "Sultanahmet District in Istanbul. Sultanahmet is one of the most beautiful places in Istanbul, an archaeological and tourist area, with many mosques, churches, restaurants, gardens and museums.",
        "population": 15460000,
        "fundation": 667,
        "siteToVisit": "Topkati Palace, Galata tower",
    },
    {

        "city": 'New York',
        "country": "United States",
        "photo": 'https://viajes.nationalgeographic.com.es/medio/2017/05/19/nueva-york_5d934013.jpg',
        "description": "New York is not only the most famous city in the world but also, arguably, the best for tourists, thanks to its diverse culture and myriad of entertainment options. There's never a dull day in the city that doesn't sleep.",
        "population": 8380000,
        "fundation": 1624,
        "siteToVisit": "Central Park, MoMA",
    },
    {

        "city": 'Las Vegas',
        "country": "United States",
        "photo": 'https://viajes.nationalgeographic.com.es/medio/2017/05/19/las-vegas_b95d9c08.jpg',
        "description": "Lined with huge entertainment palaces, many built with a defining theme, and home to performance venues, luxury hotel rooms, and fine dining, this is what most people think of when they picture Las Vegas.",
        "population": 644594,
        "fundation": 1905-05-15,
        "siteToVisit": "Bellagio, Luxor Hotel",
    },
    {

        "city": 'Rome',
        "country": "Italy",
        "photo": 'https://viajes.nationalgeographic.com.es/medio/2017/05/19/roma_370225de.jpg',
        "description": "Also known as the Eternal City, Rome is home to some of the most historic monuments, art, and architecture in the world. Harking back to a time when gladiator fights were the daily form of entertainment, the city is bursting at the seams with fascinating things to see and do.",
        "population": 2873000,
        "fundation": 753-02-21,
        "siteToVisit": "Roma Coliseum, rome pantheon.",
    },
    {

        "city": 'Taipei',
        "country": "Taiwan",
        "photo": 'https://viajes.nationalgeographic.com.es/medio/2017/05/19/taipei_13720ebe.jpg',
        "description": "Arguably the main reason that people visit Taiwan is to experience and explore the island's fascinating temple culture and architecture. Not-to-be-missed highlights include spectacular Baoan Temple in Taipei, the vast complex at Foguangshan and the artistic masterpiece that is Lukang's Longshan Temple.",
        "population": 2646000,
        "fundation": 1701,
        "siteToVisit": "Longshan Temple, Yangmingshan",
    },
    {

        "city": 'Tokyo',
        "country": "Japan",
        "photo": 'https://viajes.nationalgeographic.com.es/medio/2017/05/19/tokio_b3218026.jpg',
        "description": "Tokyo is one of the best cities to visit anywhere. It's full of nightlife, culture, amazing temples and shrines and shopping, weird things to see and do.",
        "population": 13960000,
        "fundation": 1457,
        "siteToVisit": "Tokyo Tower, Sumida River.",
    },
);