const Comment = require('../models/Comment');

const commentsController = {
    create: async (req, res) => {
        try {
            await Comment.create(req.body);
            res.status(201).json({ message: 'Comment created', success: true });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Comment not created', success: false });
        }
    },

    readFromItinerary: async (req, res) => {
        const { id } = req.params
        try {
            let comments = await Comment.find({ itinerary: id }).populate('itinerary', { name: 1 }).populate('user', { name: 1, photo: 1 })
            if (comments != 0) {
                res.status(200).json({ message: 'Comments found', response: comments, success: true });
            } else {
                res.status(404).json({ message: 'Comments not found', success: false });
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Error', success: false });
        }
    },

    readFromItineraryQuery: async (req, res) => {
        let query = {}
        if (req.query.itinerary) {
            query.itinerary = req.query.itinerary
        }
        try {
            let comments = await Comment.find(query).populate('itinerary', { name: 1 }).populate('user', { name: 1, photo: 1 })
            if (comments != 0) {
                res.status(200).json({ message: 'Comments found', response: comments, success: true });
            } else {
                res.status(404).json({ message: 'Comments not found', success: false });
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Error', success: false });
        }
    },

    updateComment: async (req, res) => {
        let { id } = req.params
        let { user } = req.user
        try {
            let comment = await Comment.findOneAndUpdate({ _id: id }, req.body, { new: true })
            if (comment) {
                res.status(200).json({
                    message: 'comment updated',
                    success: true,
                    response: comment
                })
            } else {
                res.status(404).json({
                    message: 'comment not finded',
                    success: false,
                })
            }

        } catch (err) {
            console.log(err)
            res.status(400).json({
                message: 'comment failed',
                success: false
            })

        }
    },

    removeComment: async (req, res) => {
        let { id } = req.params
        let { user } = req.user
        try {
            let comment = await Comment.findByIdAndDelete({ _id: id })
            if (comment) {
                res.status(200).json({
                    message: 'comment deleted',
                    success: true,
                    response: comment
                })
            } else {
                res.status(404).json({
                    message: 'comment not finded',
                    success: false
                })
            }
        } catch (err) {
            res.status(400).json({
                message: 'comment failed',
                success: false
            })

        }

    }
}

module.exports = commentsController;