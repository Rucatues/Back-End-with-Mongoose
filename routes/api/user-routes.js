const router = require('express').Router();

// -------------routes for api/users-------------

// GET all users

User.find({})
    .then(data =>
        res.json(data))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

// GET a single user by its _id and populated thought and friend data

User.findOne()
    .then(data =>
        res.json(data))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

// POST a new user

User.create()
    .then(data =>
        res.json(data))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

// PUT to update a user by its _id

User.findOneAndUpdate()
    .then(data =>
        res.json(data))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

// DELETE to remove user by its _id

User.findOneAndDelete()
    .then(data =>
        res.json(data))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

// BONUS: Remove a user's associated thoughts when deleted.

// -------------routes for api/users/:userId/friends/:friendId-------------

// POST to add a new friend to a user's friend list


// DELETE to remove a friend from a user's friend list

module.exports = router;