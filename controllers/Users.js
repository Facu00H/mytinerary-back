const express = require('express');
const User = require('../models/User')

const usersController = {
    create: async (req, res) => {
        const { name, lastName, mail, password, photo, country } = req.body;
        try {
            let user = await new User(req.body).save()
            res.status(201).json({ message: 'User created', succsess: true, id: user._id });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'User not created', success: false });
        }
    },

    readAll: async (req, res) => {
        try {
            let users = await User.find();
            res.status(200).json({ message: 'Users found', response: users, success: true });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Users not found', success: false });
        }
    },
}

module.exports = usersController;