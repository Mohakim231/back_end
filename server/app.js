const express = require("express");

const { goats, nextId } = require("./goats");

const app = express();

app.get("/", (req, res) => {
    res.json({
        "message": "Hello, World"
    });
})

app.get("/goats", (req, res) => {
    res.json(goats);
})

module.exports = app;