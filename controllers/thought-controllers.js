const router = require('express').Router();
const Thought = require('../models/Thought');

// -------------routes for /api/thoughts-------------

// GET to get all thoughts


Thought.find({})
    .then(data =>
        res.json(data))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

// GET to get a single thought by its _id

Thought.findOne()
    .then(data =>
        res.json(data))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

// POST to create a new thought(don't forget to push the created thought's _id to the associated user's thoughts array field)

Thought.create()
    .then(data =>
        res.json(data))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

// PUT to update a thought by its _id

Thought.findOneAndUpdate()
    .then(data =>
        res.json(data))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

// DELETE to remove a thought by its _id

Thought.findOneAndDelete()
    .then(data =>
        res.json(data))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

// -------------routes for /api/thoughts/:thoughtId/reactions-------------

// POST to create a reaction stored in a single thought's reactions array field

// DELETE to pull and remove a reaction by the reaction's reactionId value

module.exports = router;
