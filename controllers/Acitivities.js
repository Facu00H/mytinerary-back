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

    readAll: async (req, res) => {
        try {
            let activities = await Activity.find().populate('itinerary', { name: 1});
            res.status(200).json({ message: 'Activities found', response: activities, success: true });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Activities not found', success: false });
        }
    },
}

module.exports = activitiesController;