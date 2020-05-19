//load the mongoose
const mongoose =  require('mongoose');
const connectDebug = require('debug')('app:connect');
const createSchema = require('debug')('app:scheme');
const createModelClass = require('debug')('app:model');
const createObject = require('debug')('app:object');
const saveObject = require('debug')('app:save');

mongoose.connect('mongodb://localhost/userProfiling')
    .then(()=> connectDebug('connected to database..!!'))
    .catch(err => connectDebug('Connection Error '));

createSchema('Creating Schema..');
const userSchema= mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    age: Number,
    email: String
});
createSchema('schema created..!!');

createModelClass('Creating a model class for you..!!');
const User = mongoose.model('User',userSchema);
createModelClass('Model Created Succussfully');
async function saveUser(){
    createObject('Creating a object..!');
    const user = new User({
        firstName: "divay",
        lastName: "mohan",
        userName: "dm.fire",
        age: 24,
        email: "divaymohan05@gmail.com"
    });
    createObject('object created..!!');

    saveObject('Trting to save into database..');
    const result =  await user.save();
    saveObject(result);
}
saveUser();



