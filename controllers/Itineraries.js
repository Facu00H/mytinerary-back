const Itinerary = require('../models/Itinerary')
const Joi = require('joi')

const itinerariesValidation = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    user: Joi.string(),
    city: Joi.string(),
    photo: Joi.string().uri().required(),
    price: Joi.number().required(),
    likes: Joi.number().integer().required(),
    tags: Joi.string().required(),
    duration: Joi.number().integer().required(),
})

const itineraryController = {
    create: async (req, res) => {
        const { name, user, city, photo, price, likes, tags, duration } = req.body
        try {
            let value = await itinerariesValidation.validateAsync(req.body)
            let itinerary = await new Itinerary(req.body).save()
            res.status(201).json({ message: 'Itinerary created', response: itinerary, success: true, id: itinerary._id })
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: error.message, success: false })
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
    },

    likeDislike: async (req, res) => {
        //desestructuro de la request el objeto user de passport
        const { id } = req.user
        //desestructuro de la request el id del itinerario
        const { itineraryId } = req.params
        try {
            //busco el itinerario
            let itinerary = await Itinerary.findById({ _id: itineraryId })
            //busco el usuario en el array de likes del itinerario
            let user = itinerary.likes.find(user => user == id)
            //si el usuario ya esta en el array de likes, lo saco
            if (user) {
                itinerary.likes = itinerary.likes.pull(id)
                await itinerary.save()
                res.status(200).json({ message: 'Itinerary disliked', response: itinerary, success: true })
            } else {
                //si el usuario no esta en el array de likes, lo agrego
                itinerary.likes.push(id)
                await itinerary.save()
                res.status(200).json({ message: 'Itinerary liked', response: itinerary, success: true })
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Error', success: false })
        }
    }
}

module.exports = itineraryController