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

    readAll: async (req, res) => {
        try {
            let comments = await Comment.find().populate('itinerary', { name: 1}).populate('user', { name: 1, lastName: 1, mail: 1, photo: 1, country: 1 });
            res.status(200).json({ message: 'Comments found', response: comments, success: true });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Comments not found', success: false });
        }
    }
}

module.exports = commentsController;