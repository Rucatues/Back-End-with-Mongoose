const router = require('express').Router();
const Thought = require('../models/Thought');

// -------------routes for /api/thoughts-------------

// GET to get all thoughts

// Thought.find({})

// GET to get a single thought by its _id

// Thought.findOne()

// POST to create a new thought(don't forget to push the created thought's _id to the associated user's thoughts array field)

// Thought.create()

// PUT to update a thought by its _id

// Thought.findOneAndUpdate()

// DELETE to remove a thought by its _id

// Thought.findOneAndDelete()

// -------------routes for /api/thoughts/:thoughtId/reactions-------------

// POST to create a reaction stored in a single thought's reactions array field

// DELETE to pull and remove a reaction by the reaction's reactionId value

module.exports = router;
