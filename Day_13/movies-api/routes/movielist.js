const Joi = require('joi');
const {getMovies,getMoviesById,deleteMovie,addNewMovie,movieSchema} = require('../database/movielist');

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
route.get('/',async (req,res)=>{
    try{
        const movies = await getMovies();
        return res.send(movies);
    }catch(err){
        res.send(err);
    }
});
route.post('/',async (req,res)=>{
    const {error} = validate(req.body);
    if(error) res.status(400).send(error.details[0].message);
    try{
        const result = await addNewMovie(req.body);
        res.send(result);
    }
    catch(err){
        res.send(err);
    }
});




module.exports = route;