const mongoose =  require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
mongoose.connect('mongodb://localhost/mongo-exercises')
        .then(()=>{
            console.log('DataBase Connected..!!');
        })
        .catch(err=> console.log('Connection err: ',err));
const schema = new mongoose.Schema({
    tags:[ String ],
    date:Date,
    name: String,
    author: String,
    isPublished: Boolean,
    price: Number
});
const Course = mongoose.model('course',schema);
async function updateCourse(id){
    const course = await Course.findById(new String(id));
    if(!course) return;
    course.name = "mongo db";
    console.log(course)
    const result = await course.save();
}
            
updateCourse("5a68fdc3615eda645bc6bdec");      


