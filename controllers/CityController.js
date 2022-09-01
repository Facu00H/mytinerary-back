const City = require('../models/City');

const CityController = {
    create: async (req, res) => {
        const { city, country, photo, population, fundation } = req.body;
        try {
            await new City(req.body).save() //req.body tiene que tener todas las variables antes descritas
            res.status(201).json({ message: 'City created', succsess: true });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'City not created', success: false });
        }
    },

    readAll: async (req, res) => {
        let cities
        let query = {}

        if (req.query.country) {
            query.country = req.query.country
        }

        if (req.query.city) {
            query.city = req.query.city
        }

        try {
            cities = await City.find(query);
            res.status(200).json({ message: 'Showing all cities', response: cities, success: true })
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Error', success: false })
        }
    },

    read: async (req, res) => {
        const { id } = req.params;
        try {
            let city = await City.findOne({ _id:id });
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
        const { city, country, photo, population, fundation } = req.body;
        try {
            let city = await City.findByIdAndUpdate({ _id:id }, req.body );
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

    destroy: async (req, res) => {
        const { id } = req.params;
        try {
            let city = await City.findOneAndDelete({ _id:id });
            if (city) {
                res.status(200).json({ message: 'City deleted', response: city, success: true });
            } else {
                res.status(404).json({ message: 'City not found', success: false });
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Error', success: false });
        }
    }
}

module.exports = CityController;