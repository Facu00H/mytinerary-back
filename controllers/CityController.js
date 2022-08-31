const City = require('../models/City');

const CityController = {
    create: async (req, res) => {
        const { city, country, photo, population, fundation } = req.body;
        try {
            await new City(req.body).save() //req.body tiene que tener todas las variables antes descritas
            res.status(201).json({ message: 'City created', succsess: true });
        } catch (error) {
            res.status(400).json({ message: 'City not created', succsess: false });
        }
    },

    read: async (req, res) => {
        const { city, country, photo, population, fundation } = req.body;
        try {
            await City(req.body);
            res.status(200).json({ message: 'City found', succsess: true });
        } catch (error) {
            res.status(404).json({ message: 'City not found', succsess: false });
        }
    }
}

module.exports = CityController;