const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

//express configuration
app.set('port', process.env.PORT || 3000);

//history
const history = require('connect-history-api-fallback');
app.use(history());


//middlwera
app.use(morgan('combined'));
app.use(express.json());


//routes
app.use('/api/tasks',require('./router/tasks'));
app.use('/api/cabs',require('./router/cabs'));


//static files
app.use(express.static(__dirname + '/public'))


//server listening
mongoose.connect('mongodb://127.0.0.1/myapp')
    .then(db => console.log('Database connected'))
    .catch(err => console.log(err));

app.listen(app.get('port'), () => {
    console.log('Server listenning in port', app.get('port'));
});