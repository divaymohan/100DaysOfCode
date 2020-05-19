//load the mongoose
const mongoose =  require('mongoose');
const connectDebug = require('debug')('app:connect');
const createSchema = require('debug')('app:scheme');
const createModelClass = require('debug')('app:model');
const createObject = require('debug')('app:object');
const saveObject = require('debug')('app:save');
const getFromDatabase = require('debug')('app:query');

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
        firstName: "mohan",
        lastName: "divay",
        userName: "dm.fire",
        age: 15,
        email: "mohandivay05@gmail.com"
    });
    createObject('object created..!!');

    saveObject('Trting to save into database..');
    const result =  await user.save();
    saveObject(result);
}
saveUser();

getFromDatabase('getting data from database..!!');
async function getData(){
    const result = await User.find({userName:'dm.fire'})
                            .sort({age: 1})
                            .limit(10)
                            .select({lastName: 1,firstName: 1,age: 1});
    getFromDatabase(result);
}
getData();

getFromDatabase('Getting by operators');
async function getDataWithOp(){
    //eq (equal)
    //ne (not equal)
    // gt (greater than)
    // gte (greater than or equal)
    // lt (less than)
    // lte (less than or equal)
    // in
    // nin (not in)
    //or([1,2])
    //and([1,2])
    //regular expression
    const result = await User.find({age: {$gt: 20}});
    getFromDatabase(result);
                        
}
getDataWithOp();

