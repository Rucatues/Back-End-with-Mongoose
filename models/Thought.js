// What consts are needed here ? and what to put in the const brakcets on line 3

const { modelNames } = require("mongoose");

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        min: 1,
        max: 280, // Must be between 1 and 280 characters
    },
    createdAt: {
        type: Date,
        // Set default value to the current timestamp
        // Use a getter method to format the timestamp on query
    },
    username: {
        type: String,
        required: true
    },
    // reactions: // Array of nested documents created with the reactionSchema
    reactions: []

});

// Schema Settings
// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount').get(function () {
    const reactionCount = this.reactions.length;
    return reactionCount;
})


// creates a model using our schema
const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought; 
