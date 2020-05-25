const joi = require('joi');
const {addRental} = require('../database/rental');

const express =  require('express');
const route = express.Router();

function validate(rental){
    const schema = {
        customerId: joi.string(),
        movieId: joi.string(),
        dateOut: joi.date(),
        dateReturn: joi.date(),
        rentalRate: joi.number().min(0)
    }
    return joi.validate(rental,schema);
}

route.post('/',(req,res)=>{
    const {error}= validate(req.body);
    if(error) res.status(400).send(error.details[0].message);
    try{
        const result = await addRental(req.body);
        res.send(result);
    }
    catch(err){
        res.send(err.message);
    }
    
});