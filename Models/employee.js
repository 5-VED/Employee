//const db_connet = require('./connection');
const mongoose = require('mongoose');


const Employee = new mongoose.Schema({

    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },

    age: {
        type: Number,
        required: true,
    },
    DOB:{
        type:Date(),
        required:true
    },
    designation: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,

    }
});

module.exports = new mongoose.model('employee',Employee);



