const router = require('express').Router();
const Thought = require('../models/Thought');
const { User } = require('../models');

// // -------------thought Controller-------------


const thoughtController = {
    getAllThoughts(req, res) {
        //GET all thoughts
        Thought.find({})
            .then(data =>
                res.json(data))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    getSingleThought(req, res) {
        // // GET to get a single thought by its _id

        Thought.findOne({ _id: req.params.thoughtId })
            .then(data =>
                res.json(data))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    createNewThought(req, res) {
        // // POST to create a new thought

        // (don't forget to push the created thought's _id to the associated user's thoughts array field)

        Thought.create(req.body)
            .then(data => {
                return User.findOneAndUpdate(
                    {
                        _id: req.body.userId
                    },
                    {
                        $push: {
                            thoughts: data._id
                        }
                    },
                    {
                        new: true
                    })
                    .then(userData => {
                        res.json(userData)
                    })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    updateThought(req, res) {
        // // PUT to update a thought by its _id

        Thought.findOneAndUpdate({ _id: req.params.thoughtId },
            {
                $set: req.body
            },
            {
                new: true
            })
            .then(data =>
                res.json(data))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });

    },

    deleteThought(req, res) {
        // // DELETE to remove a thought by its _id

        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then(data =>
                res.json("Your thought has been deleted."))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // // -------------routes for /api/thoughts/:thoughtId/reactions-------------

    createReaction(req, res) {

        // // POST to create a reaction stored in a single thought's reactions array field
        Thought.findOneAndUpdate(

        )
    },

    deleteReaction(req, res) {

        // // DELETE to pull and remove a reaction by the reaction's reactionId value
        Thought.findOneAndUpdate(

        )
    }

}

module.exports = thoughtController;
