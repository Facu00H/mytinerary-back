require('dotenv').config()
require('./config/database')
const axios = require('axios')

const City = require('./models/City')

axios.get("http://localhost:4000/cities/")
    .then(res => res.data.response.map(e => {
        City.create(
            {
        
                "city": e.city,
                "country": e.country,
                "photo": e.photo,
                "population": e.population,
                "fundation": e.fundation,
            },
        );
    }))
    .catch(err => console.log(err))

