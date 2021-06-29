const mongoose = require('mongoose');

//Connecting to DataBase
mongoose.connect("mongodb://localhost/Employee",{useNewUrlParser:true , useUnifiedTopology:true})
.then(res=>console.log('Connected Succesfully'))
.catch(error=>console.log(error));

