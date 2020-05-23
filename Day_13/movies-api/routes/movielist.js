const Joi = require('joi');
const movieDB = require('../database/movielist');

const express = require('express');
const route = express.Router();

function validate(movie){
    const schema = {
        title: Joi.string().min(3).max(255).required(),
        genreId: Joi.string(),
        numberInStock: Joi.number().min(0).max(255),
        dailyRantalRate: Joi.number().min(0)
    }
    return Joi.validate(movie,schema);
}



module.exports = route;