const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');
const routes = require('./routes');
const connection = require('./config/connection');

// middleware //

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



// connect to PORT //

connection.once("open", () => {
    app.listen(PORT, () => {
        console.log('Server listening on: http://localhost:' + PORT);
    });
})
