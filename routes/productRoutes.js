const express = require('express');
const mysqlPool = require('../modules/mysqlPool');

const productRoutes = express.Router();

productRoutes.get('/all', (req, res, next) => {
    const sql = "select * from product";
    const mysqlConnection = mysqlPool((err, connection)=>{
        if (err) return next(err);
        connection.query(sql, (err, rows) => {
            connection.release();
            if (err) return next(err);
            res.end(JSON.stringify(rows));
        });
    });
});

productRoutes.post('/addProduct', (req, res, next) => {
    let product = {name: req.body.name};
    if(!product){
        res.status(400).send({error:'invalid body'});
    }

    const sql = "insert into product set ?";
    const mysqlConnection = mysqlPool((err, connection)=>{
        if (err) return next(err);
        connection.query(sql,product, (err, rows) => {
            connection.release();
            if (err) return next(err);
            res.end('Succesful');
        });
    });
});


module.exports = productRoutes;