const mongoose = require('mongoose');
const { Schema } = mongoose;

const cab = new Schema({
    target: String,
    price: Number,
    driver: Number
    });

    
module.exports = mongoose.model('cab', cab);