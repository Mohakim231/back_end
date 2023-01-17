const express = require("express");
const { restart } = require("nodemon");

const { goats, nextId } = require("./goats");

const app = express();

app.get("/", (req, res) => {
    res.json({
        "message": "Hello, World"
    });
})

app.get("/goats", (req, res) => {

    const{ maxAge } = req.query;

    if (maxAge) {
        res.json(goats.filter(g => g["age"] <= maxAge));
    }else{
        res.json(goats);
    }

    res.json(goats);
})

app.get("/goats/:id", (req, res) => {

    const id = req.params["id"];

    const goat = goats.filter(g => g["id"] == id)[0];

    if (goat) {
        res.json(goat);
    } else {
        res.status(404).json({
            error: "No such goat!"
        })
    }

    
})

module.exports = app;