const City = require('../models/City');
const Joi = require('joi')

const citiesValidation = Joi.object({
    city: Joi.string().min(3).max(15).required(),
    country: Joi.string().min(3).max(20).required(),
    photo: Joi.string().uri().required(),
    population: Joi.number().integer().min(1000).required(),
    fundation: Joi.number()
})


const cityController = {
    create: async (req, res) => {
        const { city, country, photo, population, fundation } = req.body;
        try {
            let value = await citiesValidation.validateAsync(req.body)
            let city = await new City(req.body).save() //req.body tiene que tener todas las variables antes descritas
            res.status(201).json({ message: 'City created', succsess: true, id: city._id });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: error.message, success: false });
        }
    },

    readAll: async (req, res) => {
        let cities
        let query = {}

        if (req.query.city) {
            query.city = req.query.city
        }

        if (req.query.country) {
            query.country = req.query.country
        }

        if(req.query.order){
            query.order = req.query.order
        }

        try {

            if(!query.country && query.city === 'all' && !query.order){
                cities = await City.find();
                res.status(200).json({ message: 'Showing all cities', response: cities, success: true })
                return;
            }else if(query.city === 'all' && query.order){
                if(query.order === "AZ"){
                    cities = await City.find().sort({city: 1});
                    res.status(200).json({ message: 'Showing cities in order alphabetic A-Z', response: cities, success: true })
                    return;
                }else if(query.order === "ZA"){
                    cities = await City.find().sort({city: -1});
                    res.status(200).json({ message: 'Showing cities in order alphabetic Z-A', response: cities, success: true })
                    return;
                }
            }else if(query.country === 'all' && query.order){
                if(query.order === "AZ"){
                    cities = await City.find().sort({country: 1});
                    res.status(200).json({ message: 'Showing countries in order alphabetic A-Z', response: cities, success: true })
                    return;
                }else if(query.order === "ZA"){
                    cities = await City.find().sort({country: -1});
                    res.status(200).json({ message: 'Showing countries in order alphabetic Z-A', response: cities, success: true })
                    return;
                }
            }else if(query.city && query.city !== 'all'){

                if(query.order === "AZ"){
                    cities = await City.find({city: {$regex : "^" + query.city}}).sort({city: 1});
                    res.status(200).json({ message: 'Showing cities starts with: ' + query.city, response: cities, success: true })
                    return;
                }else if(query.order === "ZA"){
                    cities = await City.find({city: {$regex : "^" + query.city}}).sort({city: -1});
                    res.status(200).json({ message: 'Showing cities starts with: ' + query.city, response: cities, success: true })
                    return;
                }else{
                    cities = await City.find({city: {$regex : "^" + query.city}});
                    res.status(200).json({ message: 'Showing cities starts with: ' + query.city, response: cities, success: true })
                    return;
                }

            }else if(query.country !== 'all'){
                if(query.order === "AZ"){
                    cities = await City.find({country: {$regex : "^" + query.country}}).sort({country: 1});
                    res.status(200).json({ message: 'Showing countries starts with: ' + query.country, response: cities, success: true })
                    return;
                }else if(query.order === "ZA"){
                    cities = await City.find({country: {$regex : "^" + query.country}}).sort({country: -1});
                    res.status(200).json({ message: 'Showing countries starts with: ' + query.country, response: cities, success: true })
                    return;
                }else{
                    cities = await City.find({country: {$regex : "^" + query.country}});
                    res.status(200).json({ message: 'Showing countries starts with: ' + query.country, response: cities, success: true })
                    return;
            }

            }else{
                if(query.order === 'AZ'){
                    cities = await City.find().sort({city: 1});
                    res.status(200).json({ message: 'Showing all cities', response: cities, success: true })
                    return;
                }else if(query.order === 'ZA'){
                    cities = await City.find().sort({city: -1});
                    res.status(200).json({ message: 'Showing all cities', response: cities, success: true })
                }
                else{
                    cities = await City.find();
                    res.status(200).json({ message: 'Showing all cities', response: cities, success: true })
                    return;
                }
            }


            if(query.order === "AZ" && query.city === 'all'){ // si query.city == all & order == az filtrar todas las ciudades y ordenar las ciudade en orden alfabetico
                cities = await City.find().sort({country: 1});
                res.status(200).json({ message: 'Showing cities starts with: ' + query.country, response: cities, success: true })
                return;
            }else{ // Ordena las cidades en orden alfabetico invertido
                cities = await City.find().sort({country: -1});
                res.status(200).json({ message: 'Showing cities starts with: ' + query.country, response: cities, success: true })
                return;
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Error', success: false })
        }
    },

    read: async (req, res) => {
        const { id } = req.params;
        try {
            let city = await City.findOne({ _id: id });
            if (city) {
                res.status(200).json({ message: 'City found', response: city, success: true });
            } else {
                res.status(404).json({ message: 'City not found', succsess: false });
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Error', succsess: false });
        }
    },

    update: async (req, res) => {
        const { id } = req.params;
        try {
            let city = await City.findByIdAndUpdate({ _id: id }, req.body);
            if (city) {
                res.status(200).json({ message: 'City updated', response: city, success: true });
            } else {
                res.status(404).json({ message: 'City not found', success: false });
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Error', success: false });
        }
    },

    remove: async (req, res) => {
        const { id } = req.params;
        try {
            let city = await City.findOneAndDelete({ _id: id });
            if (city) {
                res.status(200).json({ message: 'City deleted', response: city, success: true });
            } else {
                res.status(404).json({ message: 'City not found', success: false });
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Error', success: false });
        }
    },
}

module.exports = cityController;