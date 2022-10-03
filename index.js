const express = require('express');
const fs = require('fs');
const app = express(),
    bodyParser = require("body-parser");
    port = 3000;

app.use(bodyParser.json());

let movieData = fs.readFileSync('film.json');

app.get('/', (req,res) =>{
    console.log('Everything is working!');
});

app.get('/api/movies', (req,res) =>{
    res.send(JSON.parse(movieData));
});

app.listen(port, () => {
    console.log(`server listening on the port::${port}`);
});