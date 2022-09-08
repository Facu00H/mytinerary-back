const Itinerary = require('../models/Itinerary')

const itineraryController = {
    create: async (req, res) => {
        const { name, user, city, price, likes, tags, duration } = req.body
        try {
            let itinerary = await new Itinerary(req.body).save()
            res.status(201).json({ message: 'Itinerary created', response: itinerary, success: true })
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Itinerary not created', success: false })
        }
    },

    readFromCity: async (req, res) => {
        const { id } = req.params
        try {
            let itineraries = await Itinerary.find({ city: id }).populate('city').populate('user', { name: 1, lastName: 1, mail: 1, photo: 1, country: 1 })

            if (itineraries != 0) {
                res.status(200).json({ message: 'Itineraries found', response: itineraries, success: true })
            } else {
                res.status(404).json({ message: 'Itineraries not found', success: false })
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Error', success: false })
        }
    },

    readFromCityQuery: async (req, res) => {
        let query = {}
        if (req.query.city) {
            query.city = req.query.city
        }
        try {
            let itineraries = await Itinerary.find(query).populate('city').populate('user', { name: 1, lastName: 1, mail: 1, photo: 1, country: 1 })

            if (itineraries != 0) {
                res.status(200).json({ message: 'Itineraries found', response: itineraries, success: true })
            } else {
                res.status(404).json({ message: 'Itineraries not found', success: false })
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Error', success: false })
        }
    },

    readFromUser: async (req, res) => {
        const { id } = req.params
        try {
            let itineraries = await Itinerary.find({ user: id }).populate('city').populate('user', { name: 1, lastName: 1, mail: 1, photo: 1, country: 1 })
            if (itineraries) {
                res.status(200).json({ message: 'Itineraries found', response: itineraries, success: true })
            } else {
                res.status(404).json({ message: 'Itineraries not found', success: false })
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Error', success: false })
        }
    },

    readFromUserQuery: async (req, res) => {
        let query = {}
        if (req.query.user) {
            query.user = req.query.user
        }
        try {
            let itineraries = await Itinerary.find(query).populate('city').populate('user', { name: 1, lastName: 1, mail: 1, photo: 1, country: 1 })
            if (itineraries) {
                res.status(200).json({ message: 'Itineraries found', response: itineraries, success: true })
            } else {
                res.status(404).json({ message: 'Itineraries not found', success: false })
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Error', success: false })
        }
    },

    update: async (req, res) => {
        const { name, user, city, price, likes, tags, duration } = req.body
        const { id } = req.params
        console.log(req.body)
        try {
            let itinerary = await Itinerary.findByIdAndUpdate({ _id: id }, req.body, { new: true })
            if (itinerary) {
                res.status(200).json({ message: 'Itinerary updated', response: itinerary, success: true })
            } else {
                res.status(404).json({ message: 'Itinerary not found', success: false })
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Itinerary not updated', success: false })
        }
    },

    remove: async (req, res) => {
        const { id } = req.params
        try {
            let itinerary = await Itinerary.findByIdAndDelete({ _id: id })
            if (itinerary) {
                res.status(200).json({ message: 'Itinerary deleted', success: true })
            } else {
                res.status(404).json({ message: 'Itinerary not found', success: false })
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Itinerary not deleted', success: false })
        }
    }
}

module.exports = itineraryController