// What consts are needed here ?

const { modelNames } = require("mongoose");

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true
        // Must be between 1 and 280 characters
        // createdAt
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


const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought; 
