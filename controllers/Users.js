const User = require('../models/User')

const usersController = {
    create: async (req, res) => {
        const { name, lastName, mail, password, photo, country } = req.body;
        try {
            await new User(req.body).save()
            res.status(201).json({ message: 'User created', succsess: true });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'User not created', success: false });
        }
    }
}

module.exports = usersController;