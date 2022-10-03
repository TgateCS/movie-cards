const express = require('express');
const fs = require('fs');
const app = express(),
    bodyParser = require("body-parser");
    port = 3000;

app.use(bodyParser.json());

let movieData = fs.readFileSync('film.json');

//test endpoint
app.get('/', (req,res) =>{
    console.log('Everything is working!');
});

//send the movie data
app.get('/api/movies', (req,res) =>{
    res.send(JSON.parse(movieData));
});

app.post('/api/save', (req, res) => {
    fs.writeFileSync('film.json', JSON.stringify(req.body));
    res.send({
        "status": "saved",
        "body": req.body
    });
});

app.listen(port, () => {
    console.log(`server listening on the port::${port}`);
});