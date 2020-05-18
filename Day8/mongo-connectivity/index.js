const mongoose = require('mongoose');
const debugConnect = require('debug')('app:connect');

mongoose.connect('mongodb://localhost/playground')
    .then(()=> debugConnect('mongoDB Database Connected..!!'))
    .catch(err => debugConnect('Error in Connecting Database:: ',err));

debugConnect('Creating Scheme..!');
const courseSchema = mongoose.Schema({
    name: String,
    tags: [String],
    author: String,
    isPublish: Boolean,
    date: { type:Date,default: Date.now }

});

debugConnect('Creating a model class by schema');
// classes, object
const Course = mongoose.model('Course',courseSchema);

async function saveTodb(){
   debugConnect('Creating an object of the course..!');
    const course = new Course({
        name: "Angular js",
        author: "Divay Mohan",
        tags: ['Front','expert'],
        isPublish: true
    });

    debugConnect('saving to the database..!!');
    const result = await course.save();
    console.log(result);

}
saveTodb();

