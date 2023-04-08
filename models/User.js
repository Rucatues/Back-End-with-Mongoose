// What consts are needed here?

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
    // thoughts:
    // Array of _id values referencing the Thought model

    // friends: 
    // Array of _id values referencing the User model (self-reference)

});

// Schema Settings
// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

const user = mongoose.model('User', userSchema);

module.exports = user;