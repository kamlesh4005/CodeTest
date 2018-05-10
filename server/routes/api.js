const express = require('express');
const router = express.Router();
const Brand = require('../models/brand');
const CarModel = require('../models/model')

router.get('/brands', function(req, res){
    Brand.find({})
    .exec(function(err, brands){
        if(err){
            console.log("Error while Retriving Brands.");
        }else {
            res.json(brands);
        }
    });
});

router.get('/models/:id', function(req, res){
    CarModel.find({brandId: req.params.id})
    .exec(function(err, carModels){
        if(err){
            console.log("Error while Retriving Car Models.");
        }else {
            res.json(carModels);
        }
    });
});

module.exports = router;