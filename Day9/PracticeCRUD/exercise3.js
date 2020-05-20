const mongoose =  require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')
        .then(()=>console.log('DataBase Connected..!!'))
        .catch(err=> console.log('Connection err: ',err));

const schema = mongoose.Schema({
    tags:[ String ],
    date:Date,
    name: String,
    author: String,
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('course',schema);
async function getCourses(){
    const result =  await Course.find();
    console.log(result);
}
getCourses();
