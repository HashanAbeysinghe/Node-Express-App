const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

//connect to mongo
mongoose.connect('mongodb://localhost/goodshop');
mongoose.Promise = global.Promise;


app.use(bodyParser.json());

app.use('/api',require('./routes/api'));

app.use(function (err,req,res,next){
    res.status(422).send({error:err.message});
});

app.listen(process.env.port || 4000, function(){
    console.log('Now listening');
});

