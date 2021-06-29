const express = require('express');
require('./Models/connection');

//Initalize Express
const app = express();

//Using the express parser 
app.use(express.json());

//Server 
app.listen(3000, (req, res) => {
    console.log('The server is up at port 3000');
});
