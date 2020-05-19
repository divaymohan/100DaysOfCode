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


async function approch1(id){
    const course = Course.find({_id:id});
    if(!course) {
        console.log("No course found..!!");
        return;
    }
    course.author = "Divay Mohan";
    const result = await course.save();
    return result;
    

}
async function run(){
    const result = await approch1("5a68fdc3615eda645bc6bdec");
    console.log(result);
}
run();