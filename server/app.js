const express = require("express");
const cors = require("cors");

let { goats, nextId } = require("./goats");
const logger = require("./logger")

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger);

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

app.post("/goats", (req, res) => {
    const newGoat = req.body;

    newGoat["id"] = nextId;

    nextId += 1;

    goats.push(newGoat);

    res.status(201).json(newGoat);
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

app.delete("/goats/:id", (req, res) => {

    const id = req.params["id"];

    const exists = goats.filter(g => g["id"] ==id).length == 1;

    if (exists){
        goats = goats.filter(g => g["id"] != id)

        res.sendStatus(204);
    } else {
        res.status(404).json({
            error: "No such goat!"
        })
    }
})

module.exports = app;