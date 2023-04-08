const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');
const routes = require('./controllers');

// middleware //

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// connect to database with  Mongoose //

// mongoose.connect( , { useNewURLParser: true })
//     .then(() => {
//         console.log("Mongoose Connection Open!")
//     })
//     .catch(err => {
//         console.log("Mongoose connection not working")
//         console.log(err)
//     });

// connect to PORT //
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
});