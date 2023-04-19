const { Schema, model, Types } = require("mongoose");
const userSchema = require("./User");

const thoughtSchema = new Schema({
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


// creates a model using our schema. 
// name of model is first argument, should be singular (Thought, not Thoughts). Mongoose will make it plural later for us. 
const Thought = model('Thought', thoughtSchema);

module.exports = Thought; 
