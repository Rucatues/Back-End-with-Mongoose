const router = require('express').Router();

// -------------routes for api/users-------------

// GET all users

// User.find({})

// GET a single user by its _id and populated thought and friend data

// User.findOne()

// POST a new user

// User.create()

// PUT to update a user by its _id

// User.findOneAndUpdate()

// DELETE to remove user by its _id

// User.findOneAndDelete()

// BONUS: Remove a user's associated thoughts when deleted.

// -------------routes for api/users/:userId/friends/:friendId-------------

// POST to add a new friend to a user's friend list


// DELETE to remove a friend from a user's friend list

module.exports = router;