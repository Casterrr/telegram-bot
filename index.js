const express = require("express");
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    // const {text} = req
    // res.send("Hello World!!!!!!!!!!!!!!!").json()
    console.log(req.body)
    const text = req.body
    res.json({"TEXT": text})
});

app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});


app.post("/", (req, res) => {
    console.log(req.body)
    const text = req.body
    res.json({"TEXT": text})
});

app.listen(3000, () => console.log("Server listening on port 3000!"));