require('dotenv').config()

const database = require('./config/database')

const Activity = require('./models/Activity')

let activities = [
    { //NEON NIGHTS ITINERARY - LAS VEGAS
        "name": "Open Top Bus Night Sightseeing Tour",
        "photo": "https://cdn.getyourguide.com/img/tour/5ba1ce7acb80bae1.jpeg/98/Las-Vegas--recorrido-tur-stico-nocturno-en-autob-s-descapotable.jpg",
        "itinerary": "6319240543a9e8672f04bf50",
    },

    {
        "name": "Neon Clear Kayak Night Party with Pickup",
        "photo": "https://cdn.getyourguide.com/img/tour/63127e9acf7b2.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf50",
    },

    {
        "name": "Club Crawl with Party Bus and Drink Specials",
        "photo": "https://cdn.getyourguide.com/img/tour/615df401aafba.png/98.jpg",
        "itinerary": "6319240543a9e8672f04bf50",
    },

    { //LAS VEGAS IN FAMILY ITINERARY - LAS VEGAS
        "name": "Shark Reef Aquarium and VR Experience",
        "photo": "https://cdn.getyourguide.com/img/tour/6101de3d96d54.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf51",
    },

    {
        "name": "David Copperfield at the MGM Grand",
        "photo": "https://cdn.getyourguide.com/img/tour/5fa9ebed09009.jpeg/98/Las-Vegas--David-Copperfield-en-el-MGM-Grand.jpg",
        "itinerary": "6319240543a9e8672f04bf51",
    },

    {
        "name": "Madame Tussauds museum and gondola cruise",
        "photo": "https://cdn.getyourguide.com/img/tour/20f95b0568fdc3f5.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf51",
    },

    { //ADRENALINE RUSHES ITINERARY - LAS VEGAS
        "name": "Helicopter Flight over the Strip with options",
        "photo": "https://cdn.getyourguide.com/img/tour/6eb846c5f3fdb127.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf52",
    },

    {
        "name": "West Rim Helicopter Tour and Landing",
        "photo": "https://cdn.getyourguide.com/img/tour/72d829318638f445.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf52",
    },

    {
        "name": "Big Apple roller coaster at New York-New York hotel",
        "photo": "https://cdn.getyourguide.com/img/tour/da83a2d6e7cfd618.jpeg/145.jpg",
        "itinerary": "6319240543a9e8672f04bf52",
    },

    { // RIVER THAMES CRUISE ITINERARY - LONDON
        "name": "Thames Cruise from Westminster to Greenwich",
        "photo": "https://cdn.getyourguide.com/img/tour/5b5ecfd35f5fd.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf53",
    },

    {
        "name": "Walk to Camden along Regent's Canal",
        "photo": "https://cdn.getyourguide.com/img/tour/5f046c049b64d.jpeg/98/Little-Venice--paseo-a-Camden-por-Regent-s-Canal.jpg",
        "itinerary": "6319240543a9e8672f04bf53",
    },

    {
        "name": "Across the Thames from Westminster to Tower Bridge",
        "photo": "https://cdn.getyourguide.com/img/tour/c7e6007fc9096a6d.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf53",
    },

    { // THE ROYAL FAMILY AND THEIR SECRETS ITINERARY - LONDON
        "name": "Tower of London and the Crown Jewels",
        "photo": "https://cdn.getyourguide.com/img/tour/b788f95ef021d06e.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf54",
    },

    {
        "name": "Buckingham Palace: Entrance to the Apparatus Rooms",
        "photo": "https://cdn.getyourguide.com/img/tour/bdf82df727c425a8.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf54",
    },

    {
        "name": "London: Westminster Abbey Admission Ticket",
        "photo": "https://cdn.getyourguide.com/img/tour/028f659676484b3f.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf54",
    },

    { // BRITISH ROCK ICONS ITINERARY - LONDON
        "name": "Tour de los Beatles de Londres en Black Taxi",
        "photo": "https://cdn.getyourguide.com/img/tour/62b4246975e1a.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf55",
    },

    {
        "name": "From London: Beatles Full Day in Liverpool",
        "photo": "https://cdn.getyourguide.com/img/tour/4eb40af34b72b.png/98.jpg",
        "itinerary": "6319240543a9e8672f04bf55",
    },

    {
        "name": "Londres: La magia de los Beatles en un taxi típico",
        "photo": "https://cdn.getyourguide.com/img/tour/5f2c919ed4dd4.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf55",
    },

    { // SHOWS - PARIS
        "name": "Paris: Moulin Rouge Cabaret Ticket with Champagne",
        "photo": "https://cdn.getyourguide.com/img/tour/a75e4544622b5519.jpeg/98/Par-s--entrada-a-un-cabaret-del-Moulin-Rouge-con-champ-n.jpg",
        "itinerary": "6319240543a9e8672f04bf58",
    },

    {
        "name": "Paris: Opera Garnier Ticket",
        "photo": "https://cdn.getyourguide.com/img/tour/5936bb3f3bd16.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf58",
    },

    {
        "name": "Paris: Dinner Show at the Moulin Rouge",
        "photo": "https://cdn.getyourguide.com/img/tour/5bd078fb79284.jpeg/98/Par-s--cena-con-espect-culo-en-el-Moulin-Rouge.jpg",
        "itinerary": "6319240543a9e8672f04bf58",
    },

    { // CRUISES ON THE SEINE - PARIS
        "name": "Paris: 1-Hour Cruise on the Seine",
        "photo": "https://cdn.getyourguide.com/img/tour/5d4ff0db39280.jpeg/98/Par-s--crucero-de-1-h-por-el-Sena.jpg",
        "itinerary": "6319240543a9e8672f04bf56",
    },

    {
        "name": "Paris: 1-Hour Illuminated City Cruise",
        "photo": "https://cdn.getyourguide.com/img/tour/5beea81a7c9fc.jpeg/98/Par-s--crucero-de-1-h-por-la-ciudad-iluminada.jpg",
        "itinerary": "6319240543a9e8672f04bf56",
    },

    {
        "name": "Paris: Scenic Seine River Cruise and 2-Course Dinner",
        "photo": "https://cdn.getyourguide.com/img/tour/5b841431b45f2.jpeg/98/Par-s--crucero-panor-mico-por-el-r-o-Sena-y-cena-de-2-platos.jpg",
        "itinerary": "6319240543a9e8672f04bf56",
    },

    { // MUSEUMS AND ARTS ITINERARY - PARIS
        "name": "Paris: Louvre Museum Ticket with Timetable",
        "photo": "https://cdn.getyourguide.com/img/tour/878fbf962b3a3596.jpeg/98/Par-s--entrada-al-Museo-del-Louvre-con-horario.jpg",
        "itinerary": "6319240543a9e8672f04bf57",
    },

    {
        "name": "Louvre Museum: Guided Tour",
        "photo": "https://cdn.getyourguide.com/img/tour/41e9c108714a376d.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf57",
    },

    {
        "name": "Les Invalides: Napoleon's Tomb and Army Museum",
        "photo": "https://cdn.getyourguide.com/img/tour/c4a395a64355ad6d.jpeg/98/Los-Inv-lidos--tumba-de-Napole-n-y-Museo-del-Ej-rcito.jpg",
        "itinerary": "6319240543a9e8672f04bf57",
    },

    { // NEW YORK FROM ABOVE ITINERARY - NEW YORK
        "name": "New York: Manhattan Island Helicopter Tour",
        "photo": "https://cdn.getyourguide.com/img/tour/60d0446abdc2c.jpeg/98/Nueva-York--tour-de-la-isla-de-Manhattan-en-helic-ptero.jpg",
        "itinerary": "6319240543a9e8672f04bf59",
    },

    {
        "name": "New York: Manhattan Helicopter Tour",
        "photo": "https://cdn.getyourguide.com/img/tour/5c7e92f7ac41c.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf59",
    },

    {
        "name": "Nueva York: tour privado en helicóptero para parejas",
        "photo": "https://cdn.getyourguide.com/img/tour/61f7ebdcc82ab.jpeg/98/Nueva-York--tour-privado-en-helic-ptero-para-parejas.jpg",
        "itinerary": "6319240543a9e8672f04bf59",
    },

    { // TICKEST AND TOURS ON BROADWAY - NEW YORK
        "name": "New York: Tickets for The Lion King on Broadway",
        "photo": "https://cdn.getyourguide.com/img/tour/62faad4ddc10b.jpeg/98/Nueva-York--entradas-para-El-Rey-Le-n-en-Broadway.jpg",
        "itinerary": "6319240543a9e8672f04bf5a",
    },

    {
        "name": "New York: Aladdin on Broadway Tickets",
        "photo": "https://cdn.getyourguide.com/img/tour/62e8099cc34c5.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf5a",
    },

    {
        "name": "NYC: Christmas Spectacular Starring the Radio City Rockettes",
        "photo": "https://cdn.getyourguide.com/img/tour/6160a4b874262.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf5a",
    },

    { // SUSHI, SAKE AND FOOD STALLS - TOKYO
        "name": "Tokio: tour a pie al mercado al aire libre de Tsukiji",
        "photo": "https://cdn.getyourguide.com/img/tour/5d1f2d0ec28e1.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf5b",
    },

    {
        "name": "Tokyo Bay: Traditional Yakatabune Dinner Cruise",
        "photo": "https://cdn.getyourguide.com/img/tour/5c415c0df0995.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf5b",
    },

    {
        "name": "Tokyo: Toyosu Morning Tuna Auction and Tsukiji Food Tour",
        "photo": "https://cdn.getyourguide.com/img/tour/5f8ab3845653b.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf5b",
    },

    { // TEMPLES AND ARCHITECTURAL WORKS ITINERARY - TOKYO
        "name": "Tokyo: Private Full-Day Tour with Nationally Licensed Guide",
        "photo": "https://cdn.getyourguide.com/img/tour/5f94a66165488.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf5c",
    },

    {
        "name": "Osaka: Iconic Places and Hidden Gems Private Tour",
        "photo": "https://cdn.getyourguide.com/img/tour/5fc55c31dc604.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf5c",
    },

    {
        "name": "Tokyo: Private Customizable 1-Day Tour by Car",
        "photo": "https://cdn.getyourguide.com/img/tour/59ccc724cac96.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf5c",
    },

    { // TROPICAL VEGETATION ITINERARY - SINGAPORE
        "name": "Singapore: Changi Airport Premium Lounge Ticket",
        "photo": "https://cdn.getyourguide.com/img/tour/63075a3a8fcb5.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf5d",
    },

    {
        "name": "Singapore: Night Safari, Priority Tram & Transfers",
        "photo": "https://cdn.getyourguide.com/img/tour/0fadf6a8ebf756b4.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf5d",
    },

    {
        "name": "Singapore: Gardens by the Bay E-Ticket",
        "photo": "https://cdn.getyourguide.com/img/tour/5d54defd2c066.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf5d",
    },

    { // FAMILY FUN IN SINGAPORE ITINERARY - SINGAPORE
        "name": "Singapore: Marina Bay Sands Viewpoint E-Ticket",
        "photo": "https://cdn.getyourguide.com/img/tour/5aa8df48f3c1c.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf5e",
    },

    {
        "name": "Singapore: Universal Studios Singapore Admission Ticket",
        "photo": "https://cdn.getyourguide.com/img/tour/6087fa053bca4.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf5e",
    },

    {
        "name": "Singapore: Sentosa Cable Car Sky Pass Ticket",
        "photo": "https://cdn.getyourguide.com/img/tour/612c3eb5c38d1011.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf5e",
    },

    { // ARABIAN DESERT TOURS ITINERARY - DUBAI
        "name": "Dubai: Safari, Quad Bike, Camel Ride & Buffet Dinner",
        "photo": "https://cdn.getyourguide.com/img/tour/62501f2fd9fc2.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf5f",
    },

    {
        "name": "Dubai: Safari, Quad Bike, Camel Ride & Al Khayma Camp",
        "photo": "https://cdn.getyourguide.com/img/tour/620733cf78f74.jpeg/98/Dub-i--safari--quad--paseo-en-camello-y-campamento-Al-Khayma.jpg",
        "itinerary": "6319240543a9e8672f04bf5f",
    },

    {
        "name": "Dubai: Red Dunes Safari, Camel Ride, BBQ & Al Marmoom Oasis",
        "photo": "https://cdn.getyourguide.com/img/tour/9cbb0f735a14f811.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf5f",
    },

    { // THE CITY ON THE HORIZON ITINERARY - HONG KONG
        "name": "Hong Kong: Sky100 Observatory Ticket and Dining Package",
        "photo": "https://cdn.getyourguide.com/img/tour/5ce031313bb5d.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf60",
    },

    {
        "name": "Hong Kong: Sky100 Observatory Admission Ticket Only",
        "photo": "https://cdn.getyourguide.com/img/tour/5c922e91442ca.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf60",
    },

    {
        "name": "Hong Kong: Sky100 Observatory with Wine and Drink Packages",
        "photo": "https://cdn.getyourguide.com/img/tour/5c48379d4f478.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf60",
    },

    { // BUDHIST TEMPLES AND PALACES ITINERARY - BANGKOK
        "name": "Bangkok: Ayutthaya Temples and Small Group Lunch",
        "photo": "https://cdn.getyourguide.com/img/tour/5e7113d32cbb0.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf61",
    },

    {
        "name": "From Bangkok: Ayutthaya Historical Park Small Group Day Trip",
        "photo": "https://cdn.getyourguide.com/img/tour/aa8ab96481a6af8f.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf61",
    },

    {
        "name": "Bangkok: Private Thonburi Longtail Boat Tour and Visit to Wat Pho",
        "photo": "https://cdn.getyourguide.com/img/tour/62fca1105e62e.jpeg/98.jpg",
        "itinerary": "6319240543a9e8672f04bf61",
    }
]

activities.forEach(item => {
    Activity.create({
        "name": item.name,
        "photo": item.photo,
        "itinerary": item.itinerary
    })
})