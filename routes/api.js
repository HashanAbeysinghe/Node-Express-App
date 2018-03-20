const express = require('express');
const router = express.Router();
const Good = require('../models/good');

router.get('/goods/:id',function(req,res,next){
    Good.findOne({_id:req.params.id}).then(function(good){
        res.send(good);
    }).catch(next);
});

router.post('/goods',function(req,res,next){
    Good.create(req.body).then(function(good){
        res.send(good);
    }).catch(next);
});

router.put('/goods/:id',function(req,res,next){
    Good.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        Good.findOne({_id:req.params.id}).then(function(good){
            res.send(good);
        });
    }).catch(next);
});

router.delete('/goods/:id',function(req,res,next){
    Good.findByIdAndRemove({_id:req.params.id}).then(function(good){
        res.send(good);
    }).catch(next);
});

module.exports = router;


