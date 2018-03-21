const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

//app.use('/user', require('./routes/userRoutes'));
app.use('/product', require('./routes/productRoutes'));

app.use(function (err, req, res, next) {
    res.status(422).send({error: err.message});
});

app.listen(process.env.port || 4000, function(){
    console.log('Now listening');
});

