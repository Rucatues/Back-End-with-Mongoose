const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');
const routes = require('./routes');

// middleware //

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// connect to database with  Mongoose //

// connect to PORT //
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
});