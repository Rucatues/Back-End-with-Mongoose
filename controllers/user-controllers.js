const router = require('express').Router();
const { User } = require('../models');

// -------------user Controller-------------


const userController = {
    getAllUsers(req, res) {
        // GET all users
        User.find({})
            .then(data =>
                res.json(data))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    getSingleUser(req, res) {
        // GET a single user by its _id and populated thought and friend data

        User.findOne({ _id: req.params.userId })
            .then(data =>
                res.json(data))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    createNewUser(req, res) {
        // POST a new user

        User.create(req.body)
            .then(data =>
                res.json(data))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    updateUser(req, res) {
        User.findOneAndUpdate(
            {
                _id: req.params.userId
            },
            {
                $set: req.body
            },
            {
                new: true
            }
        )
            .then(data =>
                res.json(data))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    deleteUser(req, res) {
        // DELETE to remove user by its _id

        User.findOneAndDelete({ _id: req.params.userId })
            .then(data =>
                res.json(data))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // -------------routes for api/users/:userId/friends/:friendId-------------


    addNewFriend(req, res) {
        // POST to add a new friend to a user's friend list
        User.findOneAndUpdate(
            {
                _id: req.params._id
            },
            {
                $push: { friends: req.params.friendId }
            },
            {
                new: true
            }
        )
            .then(data =>
                res.json(data))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    removeFriend(req, res) {
        // DELETE to remove a friend from a user's friend list
        User.findOneAndDelete(
            {
                _id: req.params._id
            })
            .then(data => {
                if (!data) {
                    res.status(404).json({
                        message: "We could not find a user with this id!"
                    });
                    return;
                }
                res.json(data);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            }
            );
    }
}




module.exports = userController;