//import module
const mongoose =  require('mongoose');

//connect to database

mongoose.connect('mongodb://localhost/mongo-exercises')
        .then(()=> console.log('database connected..!!'))
        .catch(err => console.log('Connection Error:: ',err));
const schema = mongoose.Schema({
    tags: [ String ],
    date: Date,
    name: String,
    author: String,
    isPublished: Boolean,
    price: Number
});
async function getCourses(){
    //prepare schema
    


    //create model
    const Course = mongoose.model('Course',schema);


    //query
    return await Course
                        .find({isPublished: true,tags: 'backend'})
                        .sort({name:1})
                        .select({name:1,author:1});
    
}
async function run(){
    const courses =  await getCourses();
    console.log(courses);

}
run();
