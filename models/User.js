const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    },
    // Array of _id values referencing the Thought model
    thoughts: [{ type: Schema.Types.ObjectId, ref: "thought" }],

    // Array of _id values referencing the User model (self-reference)
    friends: [{ type: Schema.Types.ObjectId, ref: "user" }]

},
    {
        toJSON: {
            virtuals: true
        },
        id: false
    });

// Schema Settings

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

userSchema.virtual('friendCount').get(function () {
    const friendCount = this.friends.length;
    return friendCount;
})

// creates a model using our schema
const User = mongoose.model('User', userSchema);

module.exports = User;