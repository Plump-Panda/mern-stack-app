//Use express server and mongoDB
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//Environment variables stored here
require('dotenv').config();

//Server open on port 5000
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


//Connect to mongoDB cluster
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established succesfully');
});


//Use food and user models
const foodRouter = require('./routes/food');
const userRouter = require('./routes/users');

app.use('/food', foodRouter);
app.use('/users', userRouter);


//Start listening
app.listen(port, () => {
    console.log('Server is running on port: '+port);
});