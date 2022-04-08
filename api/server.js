const express = require('express');
const app = express(); // TODO
const bodyParser = require('body-parser'); // TODO
const PORT = 4000; // TODO
const cors = require('cors'); // TODO

const mongoose = require('mongoose');
const config = require('./DB.js');

const taskRoute = require('./task.route');


mongoose.Promise = global.Promise;

mongoose.connect(config.db, { useNewUrlParser: true }).then(
    () => { console.log('Database connected') },
    err => { console.log('Cannot connect to databse' + err) }
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/task', taskRoute);


app.listen(PORT, function () {
    console.log('Server is runnning on:', PORT);
});