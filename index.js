const express = require('express');
const app = express(),
    bodyParser = require("body-parser");
    port = 3080;

const users = [];

app.use(bodyParser.json());

app.get('/api/users', (req, res) => {
    res.json(users);
});

app.get('/', (req,res) =>{
    console.log('Everything is working!');
});

app.listen(port, () => {
    console.log(`server listening on the port::${port}`);
});