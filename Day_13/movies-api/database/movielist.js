const mongoose = require('mongoose');
const { genreSchema,Genre } = require('./genre');
//schema
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        trim: true,
        minlength: 0,
        maxlength: 255
    },
    genre: {
        type: genreSchema,
        require: true
    },
    numberInStock:{
        type: Number,
        min: 0,
        max: 255

    },
    dailyRantalRate:{
        type: Number,
        min: 0
    }
});
//model
const Movie = mongoose.model('Movie',movieSchema);


//get movies
async function getMovies(){
    return await Movie.find();
}
//getById
async function getMoviesById(id){
    const movie = await Movie.findById(id);
    if(!movie) return;
    return movie;
}
//delete
async function deleteMovie(id){
    return await Movie.deleteOne({_id:id});
}
//addNew
async function addNewMovie(movie){
    const genre = await Genre.findById(movie.genreId);
    console.log(genre);
    const movie = new Movie({
        title: movie.title,
        genre: {
            _id: genre._id,
            genreName: genre.genreName
        },
        numberInStock: movie.numberInStock,
        dailyRantalRate: movie.dailyRantalRate
    });
    console.log(movie);
    const result =  await movie.save();
    return result;
}
//update movies


module.exports = {
    movieSchema: movieSchema,
    Movie: Movie,
    getMovies: getMovies,
    getMoviesById: getMoviesById,
    deleteMovie: deleteMovie,
    addNewMovie: addNewMovie

}