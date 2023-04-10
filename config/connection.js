const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.ATLAS_URI

mongoose.connect(`mongodb+srv://${url}@cluster0.txtfxji.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose.connection; 