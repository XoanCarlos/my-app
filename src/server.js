const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

//express configuration
app.set('port', process.env.PORT || 3000);


//middlwera
app.use(morgan('combined'));
app.use(express.json());



//static files
app.use(express.static(__dirname + '/public'))


//server listening
mongoose.connect('mongodb://127.0.0.1/myapp')
    .then(db => console.log('Database connected'))
    .catch(err => console.log(err));

app.listen(app.get('port'), () => {
    console.log('Server listenning in port', app.get('port'));
});