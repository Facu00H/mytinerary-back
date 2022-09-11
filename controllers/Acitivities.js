const Activity = require('../models/Activity')

const activitiesController = {
    create: async (req, res) => {
        try {
            await Activity.create(req.body);
            res.status(201).json({ message: 'Activity created', success: true });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Activity not created', success: false });
        }
    },

    readFromItinerary: async (req, res) => {
        const { id } = req.params
        let query = {}
        if (req.query.itinerary) {
            query.itinerary = req.query.itinerary
        }
        try {
            let activities = await Activity.find({ itinerary: id }).populate('itinerary', { name: 1 })
            if (activities != 0) {
                res.status(200).json({ message: 'Activities found', response: activities, success: true });
            } else {
                res.status(404).json({ message: 'Activities not fount', success: false });
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Activities not found', success: false });
        }
    },

    readFromItineraryQuery: async (req, res) => {
        const { id } = req.params
        let query = {}
        if (req.query.itinerary) {
            query.itinerary = req.query.itinerary
        }
        try {
            let activities = await Activity.find(query).populate('itinerary', { name: 1 })
            if (activities != 0) {
                res.status(200).json({ message: 'Activities found', response: activities, success: true });
            } else {
                res.status(404).json({ message: 'Activities not found', success: false });
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Activities not found', success: false });
        }
    }
}

module.exports = activitiesController;