const mongoose =  require('mongoose');

//schema--
        //customer
        //movie
        //ratelrate
        //dateout
        //datereturn
const rentalSchema =  mongoose.Schema({
    customre: {
        type: new mongoose.Schema({
            name: {
                type: String,
                minlength: 3,
                maxlength: 255,
                required:true,
                trim: true
            },
            contectNumber: {
                type: Number,
                min: 0000000000,
                max: 9999999999,
                required: true

            },
            isGold: {
                type: Boolean,
                default: false
            }
            
        })
    },
    movie: {
        type: new Schema({
            title:{
                type: String,
                minlength: 3,
                maxlength: 255,
                require: true,
                trim: true
            },
            dailyRantalRate: {
                type: Number,
                min:0,
            }
        })
    },
    dateOut:{
        type: Date,
        default:Date.now
    },
    dateReturn: {
        type: Date
    },
    rentelRate:{
        type: Number,
        min: 0
    }
});