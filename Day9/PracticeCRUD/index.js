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
    .find({isPublished: true, tags: {$in : ['frontend','backend']}})
    .sort({price: -1})
    .select({name:1, author:1});
}
async function run(){
    const data = await getCourses();
    console.log(data);
}
run();

