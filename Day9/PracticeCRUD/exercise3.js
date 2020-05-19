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

const Course = mongoose.model('Course',schema);
async function getCourses(){
    return await Course
.find({isPublished: true} )
.or([
    { price:{ $gte: 15}},
    { name: /.*by.*/i}
    
    ]);
}
async function run(){
    const data = await getCourses();
    console.log(data);
}
run();

