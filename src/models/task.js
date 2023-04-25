const mongoose = require('mongoose');
const { Schema } = mongoose;

const task = new Schema({
    destino: String,
    distancia: Number,
    precio: Number
    });

    
module.exports = mongoose.model('task', task);